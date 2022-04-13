import React from "react";
import TimeItem from "./TimeItem";

class TimeList extends React.Component {
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
						{this.props.entries.map((entry, index) => {
							return <TimeItem dataUpdated={this.getTimeList} entry={entry} key={"time-item-" + index} />;
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default TimeList;
