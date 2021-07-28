import React from "react";
import MainNav from "./main-nav";
import AuthNav from "./auth-nav";

class NavBar extends React.Component {

    currentBG = null;
    body = document.getElementById("body");

    changeBG = () => {
        switch (this.currentBG) {
            case true:
                this.body.style.backgroundImage = "url('https://i.pinimg.com/originals/62/63/5b/62635bfd6f5c20e3666f27e015191bde.jpg')";
                this.body.style.backgroundRepeat = "no-repeat";
                this.body.style.backgroundSize = "cover";
                this.body.style.backgroundColor = "none";
                this.body.style.color = "black";
                this.currentBG = null;
                break;

            case null:
                this.body.style.backgroundImage = "none";
                this.body.style.backgroundRepeat = "none";
                this.body.style.backgroundSize = "none";
                this.body.style.backgroundColor = "black";
                this.body.style.color = "white";
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