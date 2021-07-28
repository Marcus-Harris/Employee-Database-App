import React from "react";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";
import { withAuth0 } from "@auth0/auth0-react";
import SignupButton from "./signup-button";

const divStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

class AuthenticationButton extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return isAuthenticated ? <LogoutButton /> :
      <div style={divStyle}>
        <LoginButton />
        <SignupButton />
      </div>;
  }
}

export default withAuth0(AuthenticationButton);