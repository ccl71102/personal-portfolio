import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
    return (
         <div className="transparent-wrapper">
                <div className="header-div">
                    <h1 className="home-title">CONTACT</h1>
                    <div className="contact">
                        <a href="https://www.linkedin.com/in/colonlopezcarlos/"><FontAwesomeIcon icon={faLinkedin}/> LinkedIn: colonlopezcarlos</a>
                        <a href="https://github.com/ccl71102"><FontAwesomeIcon icon={faGithub}/> Github: ccl71102</a>
                        <span><FontAwesomeIcon icon={faGoogle}/> Email: colonlopezcarlos -at- gmail -dot- com</span>
                    </div>
                </div>
                
        </div>
    )
}

export default Contact;