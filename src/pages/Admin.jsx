import React from 'react'
import './Admin.css'
import Sidebar from '../components/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../components/AddProduct'
import ListProduct from '../components/ListProduct'

function Admin() {
  return (
    <div className='admin d-flex'>
        <Sidebar/>
        <Routes>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/listproduct' element={<ListProduct/>}/>

        </Routes>
    </div>
  )
}

export default Admin