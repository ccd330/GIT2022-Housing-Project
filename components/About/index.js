import React from 'react'
import beigebuilding from '../../assets/right-image-buildingA.png'
import greenbox from '../../assets/green-box.png'
import whitechair from '../../assets/white-chair.png'
import bluehouse from '../../assets/blue-house.png'
import ryan from '../../assets/logo-ryan.png'
import brodsky from '../../assets/logo-brodsky.png'
import hickman from '../../assets/logo-HRgroup.png'
import green from '../../assets/logo-GP.png'
import present from '../../assets/present-box.png'

function About () {
    return (
        <>
        <div className="ctaSection">
            <div className="row">
                <div className="column">
                    <h1 className="topCTA">Welcome <span className="whiteText">home.</span></h1>
                    <p className="ctaText">Helping you find a home - so that you can focus on you. 
                    </p>
                    <button className="apply-btn">Apply Now</button>
                </div>
                <div className="column">
                    <img src={beigebuilding} alt="beige-building" className="beige-building" />
                </div>
            </div>
        </div>
            <div className="boxes">
                <div className="row">
                    <img src={greenbox} alt="woman-smiling" className="green-box" />
                    <img src={whitechair} alt="white-chair" className='white-chair' />
                    <img src={bluehouse} alt="blue-house" className='blue-house' />
                </div>
            </div>
            <div className="partnerships">
                <h1>Partnerships</h1>
                <p>Lorem ipsum.</p>
                <div className='row'>
                    <img src={ryan} alt="ryan-king-team-logo" className="column" style={{ width: 75, height: 125 }}/>
                    <img src={brodsky} alt="brodsky-logo" className="column" style={{ width: 100, height: 100 }}/>
                    <img src={hickman} alt="hickman-logo" className="column" style={{ width: 125, height: 150 }}/>
                    <img src={green} alt="hickman-logo" className="column" style={{ width: 125, height: 150 }}/>
                </div>
            </div>
            <div className="qa">
                <h1>Q&A</h1>
                <div className="row">
                    <h2 className='column'>Question Goes Here?</h2>
                    <h2 className='column'>Question Goes Here?</h2>
                </div>
                <div className='row'>
                    <p className="column">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p className="column">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="row">
                    <h2 className='column'>Question Goes Here?</h2>
                    <h2 className='column'>Question Goes Here?</h2>
                </div>
                <div className='row'>
                    <p className="column">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p className="column">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            <div className='referral'>
                <div className="row">
                    <div className="column">
                        <div className="referral-text">
                            <h1>Give $100,</h1>
                            <h1>Get $100</h1>
                            <p>When you refer a friend.</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={present} alt="present-box"  />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;