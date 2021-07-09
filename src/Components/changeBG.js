import React from "react";

let currentColor = "white";
let changeBG = () => {
    let body = document.getElementById("body");

    switch (currentColor) {
        case "white":
            currentColor = "black";
            body.style.backgroundColor = "black";
            body.style.color = "white";
            break;

        case "black":
            currentColor = "white";
            body.style.backgroundColor = "white";
            body.style.color = "black";
            break;
    }
}

// render() {
//     <changeBG />
// }

class ChangeTheBackground extends React.Component{
    render() {
        return (
            <button id="buttonBG" onClick={changeBG}>
                Change BG
            </button>
        );
    }
}

export default ChangeTheBackground;