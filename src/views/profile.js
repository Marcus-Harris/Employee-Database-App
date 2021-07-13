import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

class Profile extends React.Component {
    render() {
        const { user } = this.props.auth0;
        const { name, picture, email } = user;
        return (
            <div>
            <div className="col-md-2 mb-3">
                        <img
                            src={picture}
                            alt="Profile"
                            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                        />   
            <div className="col-md text-center text-md-left">
                        <h2>{name}</h2>
                        <p className="lead text-muted">{email}</p>
                    </div></div>

<div class="card-info">
<h2> Welcome! Here is your card information! </h2>
<img src="https://www.w3schools.com/howto/img_avatar2.png" height="200px" width="200" align="left"></img>

                <div className="row">
                    <pre className="col-12 text-light bg-dark p-4">
                        {JSON.stringify(user, null, 2)}
                    </pre>
                </div>

</div>
<br></br><br></br><br></br>
                <div class="options" display="block">
                    <div class="option-card"><img src="https://www.shareicon.net/data/512x512/2015/11/26/678251_personal_512x512.png" height="50px" width="50px"></img><br></br>Edit Card Information</div>
                    <div class="option-card"><img src="https://static.thenounproject.com/png/209890-200.png" height="50px" width="50px"></img><br></br>View Paystubs</div>
                    <div class="option-card"><img src="https://img.icons8.com/ios/452/time-card.png" height="50px" width="50px"></img><br></br>Edit Time Card</div>
                    <div class="option-card"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOA_kmm5_a4KltFWmCcVB8BgvGl8WQytZEMw&usqp=CAU" height="50px" width="50px"></img><br></br>View Benefits</div>
                    <div class="option-card"><img src="https://static.thenounproject.com/png/158275-200.png" height="50px" width="50px"></img><br></br>View Team</div>
                </div>
</div>
        );
    }
}

export default withAuth0(Profile);