import React from "react";
import Notifications from "../../utils/notifications";
import authenticationService from "../services";
import { withRouter } from 'react-router-dom'

class Login extends React.Component{

    constructor() {
        super();
        this.state = {
            username: "shetu",
            password: "password"
        }
    }

    onchangeUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    }
    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    login = (data) => {
        authenticationService.login(data)
            .then(
                (response) => {
                    localStorage.setItem("token", response.data.token);
                    this.props.history.push("/");
                },
                (err) =>{
										Notifications.error("something went wrong");
                    this.setState({
                        username: "",
                        password: ""
                    });
                }
            )
    }

    onsubmit = (e) => {
        e.preventDefault();
        if(!this.state.username) {
            Notifications.error("Username is required");
            return;
        }
        if(!this.state.password) {
            Notifications.error("Password is required");
            return;
        }
        this.login(this.state);
    }

    render() {
        return(
            <form onSubmit={this.onsubmit}>
                <div className="row col-6 offset-3">
                    <div className="form-group col-12">
                        <input type={"text"} value={this.state.username} onChange={this.onchangeUsername} className={"form-control"} placeholder={"username"}/>
                    </div>
                    <div className="form-group col-12">
                        <input type={"password"} value={this.state.password} onChange={this.onChangePassword} className={"form-control"} placeholder={"password"}/>
                    </div>
                    <div className={"form-group col-12"}>
                        <button type={"submit"} className={"btn btn-primary"}>Login</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default withRouter(Login);