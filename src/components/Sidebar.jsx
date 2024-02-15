import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='sidebar'>
            <Link to={'/addproduct'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item p-3">
                    <i style={{ color: "#2E8BC0" }} class="fa-solid fa-cart-shopping"></i>
                    <p className='ms-3'>Add Product</p>
                </div>
            </Link>
            <Link to={'/listproduct'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item p-3">
                    <i style={{ color: "#2E8BC0" }} class="fa-solid fa-list"></i>
                    <p className='ms-3'>Product List</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar