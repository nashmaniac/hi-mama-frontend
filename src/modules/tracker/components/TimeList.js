import React from "react";
import trackerService from "../services";
import TimeItem from "./TimeItem";

class TimeList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeList: [],
		};
	}

	componentDidMount = () => {
		this.getTimeList();
	}

	getTimeList = () => {
		this.setState({...this.state, timeList:[]});
		trackerService.getEntries()
		.then(
			(response) => {
				this.setState({...this.state, timeList: response.data});
			}
		)
	}

	render() {
		return (
			<div style={{ marginTop: "2%" }}>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Clock In Time</th>
							<th>Clock Out Time</th>
							<th>&nbsp;</th>
						</tr>
					</thead>

					<tbody>
						{this.state.timeList.map((entry, index) => {
							return <TimeItem dataUpdated={this.getTimeList} entry={entry} key={"time-item-" + index} />;
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default TimeList;
