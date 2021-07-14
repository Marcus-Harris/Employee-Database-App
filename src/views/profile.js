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


<div class="card-info">
<h2 id="win"> Welcome! Here is your card information! </h2>
<img src="https://www.w3schools.com/howto/img_avatar2.png" class="profileimage"></img>

                <div className="row">
                    <pre className="col-12 text-light bg-dark p-4">
                        {JSON.stringify(user, null, 2)}
                    </pre>
                </div>
                </div>
                <br></br>
                <br></br>
                <br></br>

<Fragment>
<HomeContent />
</Fragment>

</div>





        );
    }
}

export default withAuth0(Profile);