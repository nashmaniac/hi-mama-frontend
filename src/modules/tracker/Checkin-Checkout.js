import React from "react";

class CheckinCheckout extends React.Component {

	onClockIn = (e) => {
		e.preventDefault();
		console.log("clock in");
	}
	onClockOut = (e) => {
		e.preventDefault();
		console.log("clock out");
	}
	
	render() {
		return(
			<div>
				<div className="row col-8 offset-2">
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