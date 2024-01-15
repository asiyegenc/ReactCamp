import {Formik, Form } from 'formik'
import React from 'react'
import { Button} from 'semantic-ui-react';
import * as Yup from "yup";
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';
export default function ProductAdd() {

   const initialValues = {title:" ", price:"10"} 
   const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunludur"),
    unitPrice:Yup.number().required("Ürün fiyatı zorunludur")
   })
  return (
    <div>
        <Formik
        initialValues={initialValues}
        validationShema={schema}
        onSubmit={(values)=>{
          console.log(values)
        }}>
        <div style={{width:"auto"}}>
        <h3 style={{marginTop:"2em"}}>Add a Product</h3>
        <Form  className="ui form" style={{marginTop:"2em"}}>
        <KodlamaIoTextInput name='title' palaceHolder='Ürün Adı' />
        <KodlamaIoTextInput name='price' palaceHolder='Ürün Fiyatı' />
        <Button color='green'  type='submit'>Ekle</Button>
        </Form>
        </div>
        </Formik>
    </div>
  )
}
