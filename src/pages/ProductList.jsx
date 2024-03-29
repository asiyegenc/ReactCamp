import React, { useState, useEffect } from 'react'
import { Button, Table } from "semantic-ui-react";
import ProductService from '../services/productService';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { toast } from "react-toastify";

export default function ProductList() {
    const dispatch = useDispatch()
  
    const [products, setProducts] = useState([]);

    useEffect(() => {
      console.log("useEffect ran");
    let productService = new ProductService()
    productService.getProducts().then((result) => {
      console.log(result); 
      setProducts(result.data.products);
})
    })
    const handleAddToCart=(product)=>{
        dispatch(addToCart(product))
        toast.success(`${product.title} added to cart!`)
    }
  return (
    <div>
        <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
        <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
        <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
        <Table.HeaderCell>Açıklama</Table.HeaderCell>
        <Table.HeaderCell>Kategori</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {products.map(product => (
      <Table.Row key={product.id} >
        <Table.Cell> <Link to={`/products/${product.id}`} > {product.title} </Link> </Table.Cell>
        <Table.Cell>{product.price}</Table.Cell>
        <Table.Cell>{product.stock}</Table.Cell>
        <Table.Cell>{product.description}</Table.Cell>
        <Table.Cell>{product.category}</Table.Cell>
        <Table.Cell><Button onClick={()=> handleAddToCart(product)}>Sepete ekle</Button>
        </Table.Cell>
      </Table.Row>
    ))
      }
    </Table.Body>
  </Table>
    </div>
  )
}