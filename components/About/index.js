import React from 'react'
import beigebuilding from '../../assets/right-image-buildingA.png'
import yellowchair from '../../assets/yellow-chair.png'
import bluehouse from '../../assets/blue-house.png'
import ryan from '../../assets/logo-ryan.png'
import brodsky from '../../assets/logo-brodsky.png'
import hickman from '../../assets/logo-HRgroup.png'
import green from '../../assets/logo-GP.png'

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
        <div className="mainBody">
            <div className="boxes">
                <div className="row">
                <img src={yellowchair} alt="yellow-chair" className='yellow-chair' />
                <img src={bluehouse} alt="blue-house" className='blue-house' />
            </div>
            </div>
            <div className="partnerships">
                <h1>Partnerships</h1>
                <p>Lorem ipsum.</p>
                <div className='row'>
                    <img src={ryan} alt="ryan-king-team-logo"/>
                    <img src={brodsky} alt="brodsky-logo"/>
                    <img src={hickman} alt="hickman-logo"/>
                    <img src={green} alt="hickman-logo"/>
                </div>
            </div>
                <h2>Testimonial</h2>
                <h2>Refer A Friend</h2>
                <h2>Q&A</h2>
            </div>
        </>
    );
}

export default About;