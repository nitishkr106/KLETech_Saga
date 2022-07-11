import React from "react";
import logo from "./logo.png"
import "./style.scss";
import "../../styles/home.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="box-1"></div>
            <div className="image">
                <img src={logo} className="logo" alt="logo"></img>
            </div>
            <div className="gallery-helper"><span>Scroll to experience our journey towards excellence !!</span></div>
            <a className="achievements" href="https://psjjtgdriqtskoyr5jsr6w-on.drv.tw/projecweb/ALL%20IM/temline.html">Achievements</a>
            <div className="box-2"></div>
            <div className="box-3"></div>
        </div>
    );
}

// export default Sidebar