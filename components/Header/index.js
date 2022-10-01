import React from 'react'
import logo from '../../assets/logo.png'

function Header () {
    return (
        <>
        <div>
            <img src={logo} alt="Banyan Logo" />
            <div>
                <ul className="navBar">
                    <li className="nav-item">Home</li>
                    <li>Individual Application</li>
                    <li>Property Application</li>
                    <li>Sign In</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header;