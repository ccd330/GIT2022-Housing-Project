import React from 'react'
import whitelogo from '../../assets/logo-white.png'
import socialicons from '../../assets/social-icons.png'

function Footer () {
    return (
        <div className="footer">
            <ul className='row'>
                <div className="column">
                    <img src={whitelogo} alt="white-banyan-logo" className="white-logo" />
                </div>
                <div>
                    <img src={socialicons} alt="social-icons" className="social-icons"/>
                </div>
            </ul>
            <p className='privacy-policy'>Privacy Policy   |   Terms & Conditions </p>
            <p className="copyright"> &copy; 2022 Unlocking Doors </p>
        </div>
    )
}

export default Footer;