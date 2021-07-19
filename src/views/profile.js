import React, { Fragment } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { HomeContent } from "../Components";




class Profile extends React.Component {
    render() {
        const { user } = this.props.auth0;
        const { name, picture, email } = user;
        return (
            <div>
            <div className="col-md-2 mb-3">
                        <img
                            src={picture} 
                            height="50px" 
                            width="50px"
                            alt="Profile"
                            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                        />   
            <div className="col-md text-center text-md-left">
                        <h2 id="name">{name}</h2>
                        <p className="lead text-muted" id="profileemail">{email}</p>
                    </div></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css" integrity="sha384-wESLQ85D6gbsF459vf1CiZ2+rr+CsxRY0RpiF1tLlQpDnAgg6rwdsUF1+Ics2bni" crossorigin="anonymous"></link>
<div class="card-info">
<h2 id="win"> Welcome! Here is your card information! </h2>


<img src="https://www.w3schools.com/howto/img_avatar2.png" class="profileimage"></img>

                <div className="row">
                    
                    <pre className="information">
                        {/* {JSON.stringify(user, null, 2)} */}
                        <a href="http://www.google.com" target="_blank"><input type="button" class="editcard" value="Edit Card" /></a>

                        <br></br><br></br>
                        <h6>Name:</h6> {user.name}
                        <br></br><br></br>
                        <h6>nickname:</h6>{user.nickname}
                        <br></br><br></br>
                        <h6>email:</h6>{user.email}
                        <br></br><br></br>
                        <h6>phone number:</h6> {user.phone}

                    </pre>
                </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>

<Fragment>
<HomeContent />
</Fragment>

</div>





        );
    }
}

export default withAuth0(Profile);