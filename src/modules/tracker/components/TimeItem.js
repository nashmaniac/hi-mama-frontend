import React from "react";
import * as moment from 'moment';
class TimeItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ID: props.entry.id,
			clockIn: props.entry.clock_in,
			clockOut: props.entry.clock_out,
			username: props.entry.username,
		}
	}
	render() {
		return(
			<tr>
				<td>
					{moment(this.state.clockIn).format('MMMM Do YYYY, h:mm:ss a')}
				</td>
				<td>
				{this.state.clockOut == null ? '' : moment(this.state.clockOut).format('MMMM Do YYYY, h:mm:ss a')}
				</td>
			</tr>
		)
	}
}

export default TimeItem;