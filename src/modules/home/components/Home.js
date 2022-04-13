import React from 'react';
import CheckinCheckout from '../../tracker/components/Checkin-Checkout';
import TimeList from '../../tracker/components/TimeList';
import trackerService from '../../tracker/services';


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeList: []
		}
	}

	onDataChanged = () => {
		console.log('parent data is changed');
		this.getTimeList();
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
		return(
			<div className={"row"} align="center">
				<div className="col-12" style={{"marginTop": "1%"}}>
					<CheckinCheckout onDataChanged={this.onDataChanged}/>
				</div>
				<div className="col-12" style={{"marginTop": "1%"}}>
					<TimeList entries={this.state.timeList}/>
				</div>
			</div>
		)
	}
}

export default Home;