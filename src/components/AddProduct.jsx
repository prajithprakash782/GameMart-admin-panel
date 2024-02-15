import React, { useState } from 'react'
import './AddProduct.css'
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';




function AddProduct() {

  const [image, setImage] = useState(false)
  
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    desc: "",
    old_price: "",
    new_price: ""
  })

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
  }

  const add_product = async () => {
    // console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product',image);

    await fetch("http://localhost:4000/uploads",{
      method:'POST',
      headers:{
        Accept:'application/json',
        
      },
      body:formData,
      
    }).then((res)=>res.json()).then((data)=>{responseData=data})

    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product); 
      await fetch('http://localhost:4000/product/add', {
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((resp) => resp.json())
      .then((data) => {data.success?alert("Product Added"):alert("Failed")});
    }
  }
  const imageHandler = (e) => {
    setImage(e.target.files[0])

  }

  const categories = [
    {
      value: 'console',
      label: 'console'

    },
    {
      value: 'pc',
      label: 'pc'

    },
    {
      value: 'keyboard',
      label: 'keyboard'

    },
    {
      value: 'laptop',
      label: 'laptop'

    },
  ];

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const handleClear = () => {
    setProductDetails({
      name: "",
      image: "",
      category: "",
      desc: "",
      old_price: "",
      new_price: ""
    });
    setImage(null);
  };
  return (
    <div className='add-product'>
      <TextField name='name' value={productDetails.name} onChange={changeHandler} className='w-100' id="standard-basic" label="Product Title" variant="standard" />
      <TextField name='desc' value={productDetails.desc} onChange={changeHandler}
        className='w-100 mt-4'
        id="standard-multiline-static"
        label="Description"
        multiline
        rows={4}

        defaultValue="About the Product"
        variant="standard"
      />
      <div className='price mt-4'>
        <TextField name='old_price' value={productDetails.old_price} onChange={changeHandler} className='w-50' id="standard-basic" label="Old Price" variant="standard" />
        <TextField name='new_price' value={productDetails.new_price_} onChange={changeHandler} className='w-50' id="standard-basic" label="New Price" variant="standard" />
      </div>
      <div>
        <TextField name='category' value={productDetails.category} onChange={changeHandler} className='mt-4'
          id="standard-select-category"
          select
          label="Select"

          helperText="Please select your category"
          variant="standard"
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>

        <div>
          {image && <img className='product-image mt-3' src={URL.createObjectURL(image)} alt="" />}

        </div>
        <Button onChange={imageHandler} className='mt-4' component="label" variant="contained" startIcon={<CloudUploadIcon />}>
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button>
      </div>

      <button onClick={() => { add_product() }} className='btn btn-success mt-4 me-4'>Add</button>
      <button onClick={handleClear} className='btn btn-danger mt-4'>Clear</button>

    </div>
  )
}

export default AddProduct