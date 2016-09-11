import React from 'react';
import _ from 'lodash';

class Connecting extends React.Component {
	
	constructor(props) {
		super(props);
	}
	handleClick() {
		this.props.parent.setState({view:"overview"});
	}
	render() {
		return (
			<div className="connecting">
				<div className="logo"><img src=""/></div>
				<div className="content">
					<div className="text">Blouethouth status active</div>
					<div className="button" onClick={this.handleClick.bind(this)}>Connect to firefly</div>
				</div>
			</div>
		);
	}
}

export default Connecting;


