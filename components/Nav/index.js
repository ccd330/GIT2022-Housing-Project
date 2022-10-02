import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers'
import logo from '../../assets/logo.png'

function Nav({ currentPage, handlePageChange, nav }) {
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage)
    }, [currentPage])

    if (!nav) {
        return null
    }

    return (
        <nav>
            <div className="row">
            <div className="column">
                <img src={logo} alt="Banyan Logo" className="header-logo" />
            </div>
            <div className="row">
                <ul className="navBar">
                    <li className="home-link"><span href='#Home' onClick={() => handlePageChange('Home') }
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</span></li>
                    <li className="indApp-link"><span href='#IndividualApplication' onClick={() => handlePageChange('IndividualApplication')}
                className={currentPage === 'IndividualApplication' ? 'nav-link active' : 'nav-link'}>Individual Application</span></li>
                    <li className="propApp-link">Property Application</li>
                    <li className="signIn-link">Sign In</li>
                </ul>
            </div>
        </div>
        </nav>
    )
    }

    export default Nav;