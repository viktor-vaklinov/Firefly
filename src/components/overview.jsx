import React from 'react';
import _ from 'lodash';
import Modes from './modes.jsx';

class Overview extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			"mode":"sunrise"
		}
	}
	handleClick() {
		this.props.parent.setState({view:"connecting"});
	}
	setMode(mode){
		this.setState({
			"mode":mode
		})
	}
	render() {
		return (
			<div className={"overview " + this.state.mode}>
				<div className="logo"><img src=""/></div>
				<div className="content">
					<div className="button" onClick={this.handleClick.bind(this)}>Disconnect</div>
					<div className="battery">Battery status</div>
				</div>

				<div className="title">Lightmode</div>
				<Modes modes={this.props.overview.modes} parent={this}/> 
			</div>
		);
	}
}
export default Overview;