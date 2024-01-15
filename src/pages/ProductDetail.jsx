import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Button, Card,Image} from 'semantic-ui-react'
import ProductService from "../services/productService";
  export default function ProductDetail() {
    let {id } = useParams();
  
    const [product, setProduct] = useState({});

  useEffect(() => {
    console.log("useEffect ran");
    let productService = new ProductService()
    productService.getProductbyId(id).then(result=>{
        console.log(result);
        setProduct(result.data);
        }).catch(err => console.log(err))
  },[id])

    return (
      <div>
         <Card.Group>
          <Card fluid>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={product? product.thumbnail: 'Loading...'}
              />
               <Card.Header>{product? product.title: "Loading..."}</Card.Header>
            <Card.Meta>{product? product.category: "Loading..."}</Card.Meta>
            <Card.Description>
            {product? product.description: "Loading..."}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Add to Cart
                </Button>
                <Button basic color='red'>
                  Add To Favourites
                </Button>
              </div>
            </Card.Content>
          </Card>
          </Card.Group>
      </div>
    );
  }