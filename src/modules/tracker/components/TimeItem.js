import * as moment from 'moment';
import React from "react";
import DateTimePicker from "react-datetime-picker/dist/DateTimePicker";
import Notifications from "../../utils/notifications";
import trackerService from "../services";
class TimeItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ID: props.entry.id,
			clockIn: props.entry.clock_in,
			clockOut: props.entry.clock_out,
			startTime: moment(props.entry.clock_in).toDate(),
			endTime: moment(props.entry.clock_out).toDate(),
			username: props.entry.username,
			editMode: false,
		}
	}

	setEditMode = () => {
		this.setState({...this.state, editMode:true})			
	}

	resetEditMode = () => {
		this.setState({...this.state, editMode:false})			
	}

	onStartTimeChange = (value) => {
		this.setState({...this.state, startTime: value});
	}

	onEndTimeChange = (value) => {
		this.setState({...this.state, endTime: value});
	}

	save = () => {
		if(this.state.startTime > this.state.endTime) {
			Notifications.error("clock in time can not be greater than clock out time");
			return;
		}

		const data = {
			clock_in: this.state.startTime,
			clock_out: this.state.endTime,
		}

		trackerService.editEntry(this.state.ID, data)
		.then(
			(response) => {
				Notifications.success("entry updated");
				this.setState({...this.state, editMode: false}, () => {
					this.props.dataUpdated();
				})
			},
			(err) => {
				Notifications.error("something went wrong");
			}
		)


	}
	

	render() {
		if(this.state.editMode) {
			return(
				<tr>
					<td>
					<DateTimePicker maxDate={this.state.endTime} onChange={this.onStartTimeChange} value={this.state.startTime} />
					</td>
					<td>
					<DateTimePicker minDate={this.state.startTime} onChange={this.onEndTimeChange} value={this.state.endTime} />
					</td>
					<td><button onClick={this.save}>Save</button></td>
					<td><button onClick={this.resetEditMode}>Cancel</button></td>
				</tr>
			)
		} else {
			return(
				<tr>
					<td>
						{moment(this.state.clockIn).format('MMMM Do YYYY, h:mm:ss a')}
					</td>
					<td>
					{this.state.clockOut == null ? '' : moment(this.state.clockOut).format('MMMM Do YYYY, h:mm:ss a')}
					</td>
					<td><button onClick={this.setEditMode}>Edit</button></td>
				</tr>
			)
		}
		
	}
}

export default TimeItem;