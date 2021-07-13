import React from "react";
import MainNav from "./main-nav";
import AuthNav from "./auth-nav";

class NavBar extends React.Component {

    currentBG = true;
    body = document.getElementById("body");

    changeBG = () => {
        switch (this.currentBG) {
            case true:
                this.body.style.backgroundColor = "black";
                this.body.style.color = "white";
                this.currentBG = null;
                break;

            case null:
                this.body.style.backgroundColor = "white";
                this.body.style.color = "black";
                this.currentBG = true;
                break;
        }
    }

    render() {
        return (
            <div className="nav-container mb-3">
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container">
                        <div className="navbar-brand logo" id="navBarLogo" onClick={this.changeBG}/>
                        <MainNav />
                        <AuthNav />
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;