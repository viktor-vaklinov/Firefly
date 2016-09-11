import React from 'react';
import _ from 'lodash';

class Error extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="error">
				<span className="message">error</span>
			</div>
		);
	}
}

export default Error;