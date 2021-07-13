import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

class HomeContent extends React.Component {
    render() {
        return (
            <div class="bottom-info">
                <div class="bottom1">
                <h6>Contact Us </h6>
                <p id="email">
                   Email:<br></br>
                   powerhouseteam@sevenindividuals.com 
                </p><br></br>
                <p id="phonenumber">
                   Phone Number:<br></br>
                   123-456-7890
                </p><br></br>
                <p id="address">
                   980 Teamwork Path<br></br>
                   Unite E0<br></br>
                   Together, NC 73241
                </p><br></br>

                </div>
                <div class="bottom2">
                    <h6>Follow Us</h6>
                  <img src="https://i.pinimg.com/originals/48/52/a5/4852a5cb7f4ad9a76365651cc3fa440c.png" height="100px" width="100px"></img>
                </div>
                <div class="bottom3">
                <h6>Resources</h6>
                <p>www.carolinafintechhub.org
                    <br></br>
                    www.group6.gov
                    <br></br>
                    www.powerhouse.org
                    <br></br>
                    www.sevenindividuals.org
                </p>
                </div>


            </div>
                    
        );
    }
}

export default HomeContent;