import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
    return (
        <div className='navbar' style={{ display: "flex", justifyContent: "space-around", backgroundColor: "lightblue", height: "60px", padding: '15px', fontWeight: "bold", fontSize: "20px" }} >
            <div  style={{ width: "20%" }} >
                <h1>Blogs</h1>
            </div>
            <div  style={{ width: "80%", display: "flex", justifyContent:"flex-end" ,gap:"10%" }} >
                <Link to="/"  >Blogs</Link>
                <Link to="/login"  >Login</Link>
                <Link to="/signup"  >Signup</Link>
            </div>


        </div>
    )
}

export default Navbar