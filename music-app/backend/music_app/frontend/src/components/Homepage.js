import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";


export default class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/"> <p>Thios is the home page</p> </Route>
                    <Route path="/join" Component={RoomJoinPage}/>
                    <Route path="/create" Component={CreateRoomPage} />
                </Switch>
            </Router>
        );
    }
}