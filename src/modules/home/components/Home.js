import React from 'react';
import CheckinCheckout from '../../tracker/components/Checkin-Checkout';
import TimeList from '../../tracker/components/TimeList';


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataChanged: false,
		}
	}

	onDataChanged = () => {
		console.log('setting')
		this.setState({
			...this.state, dataChanged:true,
		})
	}

	resetDataChanged = () => {
		console.log('reseting')
		this.setState({
			...this.state, dataChanged:false,
		})
	}

  render() {
		return(
			<div className={"row"} align="center">
				<div className="col-12" style={{"marginTop": "1%"}}>
					<CheckinCheckout onDataChanged={this.onDataChanged}/>
				</div>
				<div className="col-12" style={{"marginTop": "1%"}}>
					<TimeList dataChanged={this.state.dataChanged} resetDataChanged={this.resetDataChanged}/>
				</div>
			</div>
		)
	}
}

export default Home;