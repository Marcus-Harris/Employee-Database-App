// src/components/login-button.js
import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

class LogoutButton extends React.Component {
    render() {
        const { logout } = this.props.auth0;
        const loggedInStyle = {
            backgroundColor: 'red',
            color: 'white',
            width: '8vw',
            height: '7vh',
            border: 'none'
        }

        return (
            <button
                style={loggedInStyle}
                onClick={() =>
                    logout({
                        returnTo: window.location.origin,
                    })
                }
            >
                Log Out
            </button>
        );
    }
}

export default withAuth0(LogoutButton);