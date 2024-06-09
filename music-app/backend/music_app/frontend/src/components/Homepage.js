import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router,   Routes, Route, Link, Redirect } from "react-router-dom";


export default class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/"> 
                    <p>Thios is the home page</p>
                     </Route>
                    <Route path="/join" Component={RoomJoinPage}/>
                    <Route path="/create" Component={CreateRoomPage} />
                </Routes>
            </Router>
        );
    }
}