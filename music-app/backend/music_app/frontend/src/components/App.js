import React, { Component } from "react";
import { render } from "react-dom";
import Homepage from "./Homepage"
import RoomJoinPage from "./RoomJoinPage"
import CreateRoomPage from "./CreateRoomPage";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
            <Homepage />
            <CreateRoomPage />
            
            </div>
            
        );

    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv); 