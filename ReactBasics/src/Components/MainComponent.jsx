import React from "react";
import ReactDOM from "react-dom";

export default function MainComponent() {
    return (
        <div>
            <h1 className="heading-react">Fun Facts About React</h1>
            <ul className="custom-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise applications, including mobile apps</li>
            </ul>
        </div>

    );
}