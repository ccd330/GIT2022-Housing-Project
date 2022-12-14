import React from 'react'
import logo from '../../assets/logo.png'
import '../../assets/index.css'

function Header () {
    return (
        <>
        <nav>
            <div className="row">
            <div className="column">
                <img src={logo} alt="Banyan Logo" className="header-logo" />
            </div>
            <div className="row">
                <ul className="navBar">
                    <li className="home-link"><a>Home</a></li>
                    <li className="indApp-link"><a>Individual Application</a></li>
                    <li className="propApp-link"><a>Property Application</a></li>
                    <li className="signIn-link"><a>Sign In</a></li>
                </ul>
            </div>
        </div>
        </nav>
        </>
    )
}

export default Header;