import React from "react";
import Notifications from "../../utils/notifications";
import trackerService from "../services";
import * as moment from 'moment';
class CheckinCheckout extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			ongoing: null,
		}
	}

	onClockIn = (e) => {
		e.preventDefault();
		trackerService.clockIn()
		.then(
			(response) => {
				Notifications.success("Clock in successful");
				this.props.onDataChanged();
				this.getOngoingTime();
			},
			(err) => {
				Notifications.error(err.response.data.message);
			}
		)
	}

	onClockOut = (e) => {
		e.preventDefault();
		trackerService.clockOut()
		.then(
			(response) => {
				this.props.onDataChanged();
				Notifications.success("Clock out successful");
				this.getOngoingTime();
			},
			(err) => {
				Notifications.error(err.response.data.message);
			}
		)
	}

	getOngoingTime = () => {
		trackerService.ongoing()
		.then(
			(response) => {
				this.setState({...this.state, ongoing: response.data});
			},
			(err) => {
			}
		)
	}

	componentDidMount() {
		this.getOngoingTime()
	}
	
	render() {
		let placeholder = ''
		if(this.state.ongoing != null) {
			placeholder = (
				<div>
					<b>You checked in at {moment(this.state.ongoing.clock_in).format('MMMM Do YYYY, h:mm:ss a')}!</b>
				</div>
			)
		}
		return(
			<div>
				<div className="col-8" align="center">
						{placeholder}
				</div>
				<div className="row col-8 offset-2" style={{"marginTop": "2%"}}>
					
					<div className="col-4">
						<button onClick={this.onClockIn} className="btn btn-lg btn-success btn-primary">Clock In</button>
					</div>
					<div className="col-4">
						<button onClick={this.onClockOut} className="btn btn-lg btn-danger btn-primary">Clock Out</button>
					</div>

				</div>
			</div>
		)
	}
}

export default CheckinCheckout;