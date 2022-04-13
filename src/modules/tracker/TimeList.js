import React from "react";
import TimeItem from "./TimeItem";

class TimeList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			timeList: [1, 2, 3, 4]
		}
	}

	render() {
		return(
			<div style={{"marginTop": "2%"}}>
				<table className="table table-striped">
					<tr>
						<th>Date</th>
						<th>Clock In Time</th>
						<th>Clock Out Time</th>
					</tr>
					{this.state.timeList.map(({}, index) => {
						return <TimeItem key={"time-item-"+index}/>;
					})}
				</table>
			</div>
		)
	}
}

export default TimeList;