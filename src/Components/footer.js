import React from "react";

class Footer extends React.Component {
    render() {
        return (
            // bg-light 
            <footer className="bg-light text-dark p-3 text-center" id="footer">
                <div className="logo" />
                <p id="sheesh">
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