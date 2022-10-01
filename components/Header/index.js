import React from 'react'
import logo from '../../assets/logo.png'
import '../../assets/index.css'

function Header () {
    return (
        <>
        <div>
            <img src={logo} alt="Banyan Logo" className="header-logo" />
            <div>
                <ul className="navBar">
                    <li className="home-link">Home</li>
                    <li className="indApp-link">Individual Application</li>
                    <li className="propApp-link">Property Application</li>
                    <li className="signIn-link">Sign In</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header;