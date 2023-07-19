import React from "react";


function Header(){
    return (
        <header className="header">
            <img className="header-img" src={require("../images/logo.png")} alt="" />
            <h2 className="header-main-text">Meme Generator</h2>
            <h4 className="header-sub-text">React Project</h4>
        </header>      
    )
}

export default Header;