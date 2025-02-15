import React from 'react'
import "./nav.css";

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="nav-links">
            <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
            
        </div>
        <div className="dropdown">
            <button className="dropbtn">Request Access</button>
            <div className="dropdown-content">
                <form>
                    <label htmlFor="name">E-mail:</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                    
                    <label htmlFor="email">password:</label>
                    <input type="password" id="password" placeholder="Enter your password" />
                    <input type="password" id="password" placeholder="Confirm your password" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
