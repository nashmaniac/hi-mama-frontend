import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import authenticationService from "../../authentication/services";
class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
		};
	}

	doTokenCheck = () => {
		// console.log(localStorage.getItem("token"));
		var token = localStorage.getItem("token");
		if (token) {
			this.getUserDetail();
		} else {
			this.setState({
				user: null,
			});
			if (this.props.location.pathname !== "/auth/login" && this.props.location.pathname !== "/auth/signup") {
				this.props.history.push("/auth/login");
			}
		}
	};

	getUserDetail = () => {
		authenticationService.getUserDetail().then(
			(response) => {
				this.setState({
					user: response.data,
				});
				if (this.props.location.pathname === "/auth/login"  && this.props.location.pathname !== "/auth/signup") {
					this.props.history.push("/");
				}
			},
			(err) => {
				localStorage.clear();
				this.props.history.push("/auth/login");
			}
		);
	};

	componentDidMount() {
		this.doTokenCheck();
		this.props.history.listen((nextPath, action) => {
			this.doTokenCheck();
		});
	}

	onClickLogout = (e) => {
		localStorage.clear();
		this.props.history.push("/auth/login");
	};

	render() {
		// this.doTokenCheck();
		let component = "";
		if (this.state.user != null) {
			component = (
				<ul className={"nav nav-bar"}>
					<li className={"nav-item"}>
						<div className={"nav-link"}>{this.state.user.username}</div>
					</li>
					&nbsp;
					<li className={"nav-item"}>
						<div
							onClick={this.onClickLogout}
							className={"nav-item btn btn-primary "}
						>
							Logout
						</div>
					</li>
				</ul>
			);
		} else {
			component = (
				<ul className={"nav nav-bar"}>
					<li className={"nav-item"}>
						<Link className={"nav-item btn btn-primary"} to={"/auth/login"}>
							Login
						</Link>
					</li>
					&nbsp;
					<li className={"nav-item"}>
						<Link className={"nav-item btn btn-primary"} to={"/auth/signup"}>
							Register
						</Link>
					</li>
				</ul>
			);
		}
		return (
			<nav className="navbar navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to={"/"}>
						Hi Mama!{" "}
					</Link>
					<div className={"navbar-nav d-flex"} align="right">
						{component}
					</div>
				</div>
			</nav>
		);
	}
}

export default withRouter(Nav);
