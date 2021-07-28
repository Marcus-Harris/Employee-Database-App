// src/components/login-button.js
import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

class LoginButton extends React.Component {
  render() {
    const { loginWithRedirect } = this.props.auth0;
    const notLoggedInStyle = {
      backgroundColor: '#008CBA',
      color: 'white',
      width: '8vw',
      height: '7vh',
      marginRight: '2.5px',
      border: 'none'
    }

    return (
      <button
        style={notLoggedInStyle}
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    );
  }
}

export default withAuth0(LoginButton);