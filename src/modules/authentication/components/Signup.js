import { Component } from "react";
import { withRouter } from "react-router-dom";
import Notifications from "../../utils/notifications";
import authenticationService from "../services";

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			confirmPassword: ""
		};
	}

	onUsernameChange = (event) => {
			this.setState({
				...this.state, username: event.target.value
			});
	}

	onPasswordChange = (event) => {
		this.setState({
			...this.state, password: event.target.value
		});
	}

	onConfirmPasswordChange = (event) => {
		this.setState({
			...this.state, confirmPassword: event.target.value
		});
	}

	validateData = () => {
		if(!this.state.username) {
			Notifications.error("Username is required");
			return {
				status: false,
				data: null
			};
		}
		if(!this.state.password) {
			Notifications.error("Password is required");
			return {
				status: false,
				data: null
			};
		}
		
		if(!this.state.confirmPassword) {
			Notifications.error("Confirm Password is required");
			return {
				status: false,
				data: null
			};
		}

		if(this.state.password !== this.state.confirmPassword) {
			Notifications.error("Password didn't match");
			return {
				status: false,
				data: null
			}
		};
		
		return {
			status: true,
			data: {
				username: this.state.username,
				password: this.state.password
			}
		};
	}

	createUser = (data) => {
		authenticationService.signup(data)
		.then(
			(response) => {
				Notifications.success("User is created successfully");
				this.props.history.push('/auth/login');
			},
			(error) => {
				Notifications.error("User is not created successfully");
			}
		)
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		const {status, data} = this.validateData();
		if (!status) {
			return;
		}
		this.createUser(data);
	}

	render() {
		console.log(process.env.REACT_APP_API_URL);
		return (
			<form onSubmit={this.onFormSubmit}>
				<div className={"col-6 offset-3 row"}>
					<div className={"col-12 form-group"}>
						<input value={this.state.username} onChange={this.onUsernameChange} type={"text"} className={"form-control"} placeholder={"Username"}/>
					</div>
					<div className={"col-12 form-group"}>
						<input value={this.state.password} onChange={this.onPasswordChange} type={"password"} className={"form-control"} placeholder={"Password"}/>
					</div>
					<div className={"col-12 form-group"}>
						<input value={this.state.confirmPassword} onChange={this.onConfirmPasswordChange} type={"password"} className={"form-control"} placeholder={"Confirm Password"}/>
					</div>
					<div className={"col-12"}>
						<button className="btn btn-primary" type="submit">Signup</button>
					</div>
				</div>
			</form>
		)
	}
}

export default withRouter(Signup);