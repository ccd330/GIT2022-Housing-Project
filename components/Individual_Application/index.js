import React from 'react'
import landingpageImage from '../../assets/landingpage-IMAGE.png'
import testimonyPhotoFIPApplication from '../../assets/testimonyPhotoFIPApplication.png'
import blurbquote from '../../assets/blurbquote.png'


function SubmitForm() {
    function handleSubmit(e) {
        e.preventDefault();
        alert("Application Submitted Successfully!");
    }

    return (
        <>
            <div className="App">
                <div className="bannerImageContainer">
                    <div>
                        <img src={landingpageImage} className="bannerImg" />
                    </div>
                </div>

            <div className="contentWrapper">
                <div className="grid-container">
                    <div className="grid-item1">
                        <img src={testimonyPhotoFIPApplication} className="applicationTestimonyImg"/>
                    </div>
                    <div className="grid-item2">
                        <img src={blurbquote} className="blurbQuote" />
                    </div>
                </div>
            </div>

            <h1 className="applicationHeader">Application for Banyan Housing</h1>
                <div className="formContainer">
                    <form onSubmit={handleSubmit}>
                        <label className="applicationLabel"> First Name: </label>
                    <input
                        type="text"
                        className="userProfileInputBox"
                        placeholder="Enter Your First Name">
                    </input>
                        <label className="applicationLabel"> Last Name: </label>
                    <input
                        type="text"
                        className="userProfileInputBox"
                        placeholder="Enter Your Last Name">
                    </input>
                        <label className="applicationLabel"> Phone: </label>
                    <input
                        type="text"
                        className="userProfileInputBox"
                        placeholder="Enter Phone Number">
                    </input>
                        <label className="applicationLabel"> Email Address: </label>
                    <input
                        type="text"
                        className="userProfileInputBox"
                        placeholder="Enter Your Email">
                    </input>
                        <label className="applicationLabel">Social Security Number:</label>
                    <input
                        type="text"
                        className="userProfileInputBox"
                        placeholder="Enter Social Security Number">
                    </input>

                    {/* RADIO BUTTONS */}
                    <label className="applicationRadioLabel">
                        How Long Are You Willing to Stay?
                    </label>
                <div className="radioInputDiv">
                    <input
                        className="radioOptions"
                        type="radio"
                        value="option1"
                        checked={true}/>
                        Short Term (2 - 3 Months)
                </div>
                <div className="radioInputDiv">
                    <input type="radio" value="option2" checked={false} /> Long Term (More Than A Year)
                </div>
                    <label className="applicationRadioLabel">
                        Are You Willing To Have A Roommate
                    </label>
                <div className="radioInputDiv">
                    <input
                        className="radioOptions"
                        type="radio"
                        value="option1"
                        checked={true}/>
                        Yes
                </div>
                <div className="radioInputDiv">
                    <input type="radio" value="option2" checked={false} /> No
                </div>
                <label className="applicationRadioLabel">
                    Would You Like To Look Into Family Housing?
                </label>
                <div className="radioInputDiv">
                    <input
                        className="radioOptions"
                        type="radio"
                        value="option1"
                        checked={true}/>
                    Yes
                </div>
                <div className="radioInputDiv">
                    <input type="radio" value="option2" checked={false} /> No
                </div>

                {/* TEXT QUESTIONAIRE */}

                <label className="applicationLabel"> Preferred Location: </label>
                <input
                    type="text"
                    className="userProfileInputBox"
                    placeholder="Enter City Or Zip">
                </input>
                <label className="applicationLabel"> 
                    Employer: 
                </label>
                <input
                    type="text"
                    className="userProfileInputBox"
                    placeholder="Enter Your Employer's Name">
                </input>

                {/* RADIO BUTTONS */}

                <label className="applicationRadioLabel">
                    Do You Have Pets?
                </label>
                <div className="radioInputDiv">
                    <input
                        className="radioOptions"
                        type="radio"
                        value="option1"
                        checked={true}/>
                        Yes
                </div>
                <div className="radioInputDiv">
                    <input type="radio" value="option2" checked={false} /> No
                </div>
                <label className="applicationRadioLabel">
                    {" "}
                    Tell Us About Yourself:{" "}
                </label>
                <textarea
                    type="text"
                    className="textareaInputBox"
                    placeholder="Enter information about what makes you, YOU!"
                    rows="10">
                </textarea>
                <div className="buttonContainer">
                    <button className="profileButton">Submit</button>
                </div>
                </form>
            </div>
            {/* TESTIMONIAL 1 */}
        </div>
        </>
        );
}



export default SubmitForm;