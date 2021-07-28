import React from "react";

class HomeContent extends React.Component {
    render() {
        return (
            <div class="bottom-info">

                    <div class="contactus">
                    <h6>Contact Us </h6>
                    <p id="emailheader">Email:</p>
                    <p id="emailinfo"><a href="#" id="resourcelinks">powerhouseteam@sevenindividuals.com</a></p>
                    <p id="phonenumberheader">
                    Phone Number: </p>
                    <p id="phonenumber"> (123) 456-7890</p>
                    <p id="addressheader">Address</p> 
                    <p id="address">
                    980 Teamwork Path
                    Unite E0
                    Together, NC 73241
                    </p>   
                    </div>

                <br></br>

                <div class="follow">               
                    <h6>Follow Us</h6>
                  <img src="https://i.pinimg.com/originals/48/52/a5/4852a5cb7f4ad9a76365651cc3fa440c.png" height="100px" width="100px"></img>
                </div>

                <br></br>

                <div class="resources">
               <h6>Resources</h6>
                <p id="resourceinfo"><a href="#" id="resourcelinks">www.carolinafintechhub.org</a>
                    <br></br>
                    <a href="#" id="resourcelinks"> www.group5.gov</a>
                    <br></br>
                    <a href="#" id="resourcelinks">www.powerhouse.org</a>
                    <br></br>
                    <a href="#" id="resourcelinks"> www.sevenindividuals.org</a>
                </p>
                </div>

</div>        
                    
        );
    }
}

export default HomeContent;