import React from 'react'
import building from '../../assets/right-image-buildingA.png'

function About () {
    return (
        <>
        <div className="ctaSection">
            <div className="row">
                <div className="column">
                    <h1 className="topCTA">In search of</h1>
                    <h1 className="bottomCTA">Homefinding</h1>
                    <p className="ctaText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque vulputate condimentum purus, eu dapibus enim viverra quis. 
                    Integer aliquet varius velit vitae mollis. 
                    </p>
                    <button className="apply-btn">Apply Now</button>
                </div>
                <div className="column">
                    <img src={building} alt="beige-building" className="beige-building" />
                </div>
            </div>
        </div>
        <div className="mainBody">
            <h2>Testimonial</h2>
            <h2>Partnerships</h2>
            <h2>Refer A Friend</h2>
            <h2>Q&A</h2>
        </div>
        </>
    );
}

export default About;