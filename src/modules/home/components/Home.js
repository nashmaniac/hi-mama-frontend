import React from 'react';
import CheckinCheckout from '../../tracker/Checkin-Checkout';
import TimeList from '../../tracker/TimeList';
import Timer from '../../tracker/Timer';


class Home extends React.Component {
  render() {
		return(
			<div className={"row"} align="center">
				<div className="col-12" style={{"marginTop": "1%"}}>
					<Timer/>
				</div>
				<div className="col-12" style={{"marginTop": "1%"}}>
					<CheckinCheckout/>
				</div>
				<div className="col-12" style={{"marginTop": "1%"}}>
					<TimeList/>
				</div>
			</div>
		)
	}
}

export default Home;