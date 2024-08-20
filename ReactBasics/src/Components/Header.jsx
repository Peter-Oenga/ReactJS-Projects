import React from "react";
import ReactDOM from "react-dom";
import logo from "../assets/images/react-logo.png";


export default function Header() {
    return (
        <div>
            <div className="header-items">
                <div>
                    <img src={logo} className="logo-image"/>
                    <h2 className="heading-reacfacts">React Facts</h2>
                </div>

                <div className="nav-right-items">
                    <h2>React Course - Project 1</h2>
                </div>
            </div>
            
        </div>
        
    );
}