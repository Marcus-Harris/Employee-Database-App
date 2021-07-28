// src/components/login-button.js
import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

class SignupButton extends React.Component {

  render() {
    const { loginWithRedirect } = this.props.auth0;
    const notLoggedInStyle = {
      backgroundColor: '#008CBA',
      color: 'white',
      width: '8vw',
      height: '7vh',
      marginLeft: '2.5px',
      border: 'none'
    }

    return (
      <button
        style={notLoggedInStyle}
        onClick={() =>
          loginWithRedirect({
            screen_hint: "signup",
          })
        }
      >
        Sign Up
      </button>
    );
  }
}

export default withAuth0(SignupButton);