import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-light p-3 text-center">
                <div className="logo" />
                <p>
                    Group 5 Project made with{" "}
                    <a target="_blank" rel="noopener noreferrer" href="https://auth0.com">
                        Auth0
                    </a>
                </p>
                
            </footer>
        );
    }
}

export default Footer;