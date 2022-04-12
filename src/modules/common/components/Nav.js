import React from "react";
import {withRouter} from "react-router-dom";
import authenticationService from "../../authentication/services";
class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    doTokenCheck = () => {
        // console.log(localStorage.getItem("token"));
        var token = localStorage.getItem("token");
        if(token) {
            authenticationService.verifyToken({token: localStorage.getItem("token")})
            .then(
                (response) => {
                    if(this.props.location.pathname ==='/auth/login') {
                        this.props.history.push('/');
                    }
                    this.getUserDetail();
                },
                (err) => {
                    localStorage.clear();
                    this.props.history.push('/auth/login');
                }
            );
        } else {
            this.setState({
                user: null
            });
        }
    }

    getUserDetail = () => {
        authenticationService.getUserDetail()
            .then(
                response => {
                    this.setState({
                        user: response.data
                    });
                },
                err => {

                }
            )
    }

    componentDidMount() {
        this.doTokenCheck();
        this.props.history.listen((nextPath, action) => {
            this.doTokenCheck();
        });
    }

    onClickLogout = (e) => {
        localStorage.clear();
        this.props.history.push('/auth/login');
    }

    render() {
        // this.doTokenCheck();
        let username = '';
        if(this.state.user != null) {
            username = <div>{this.state.user.username} <div><button onClick={this.onClickLogout} className={"btn btn-primary"}>Logout</button></div></div>;
        }
        return(
            <div align={"right"}>
                {username}

            </div>

        );
    }
}

export default withRouter(Nav);