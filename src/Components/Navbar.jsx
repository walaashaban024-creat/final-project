import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
   <header className="header-area header-sticky">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <nav className="main-nav">
          {/* ***** Logo Start ***** */}
          <NavLink to="/" className="logo">
            <h1>Villa</h1>
          </NavLink>
          {/* ***** Logo End ***** */}
          {/* ***** Menu Start ***** */}
          <ul className="nav">
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/properties">Properties</NavLink>
            </li>
            <li>
              <NavLink to="/details">Property Details</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/Products"> Products </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <i class="fa-solid fa-cart-shopping"></i> Cart
              </NavLink>
            </li>
          </ul>
          <a className="menu-trigger">
            <span>Menu</span>
          </a>
          {/* ***** Menu End ***** */}
        </nav>
      </div>
    </div>
  </div>
</header>

        
    </div>
  )
}
