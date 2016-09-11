import React from 'react';
import _ from 'lodash';

import Overview from './overview.jsx';
import Error from './error.jsx';
import Connecting from './connecting.jsx';

var ReactDOM = require('react-dom');
var data = require('./data.json');

class Carpet extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			view:"connecting"
		}
	}
	render () {
		var out = "";
		if (this.state.view == "connecting") {
			out = <Connecting connecting={data.connecting} parent={this}/>
		} else if (this.state.view == "error") {
			out = <Error  error={data-error} parent={this}/>
		} else if (this.state.view == "overview") {
			out = <Overview  overview={data.overview} parent={this}/> 
		}
		return (<div className="carpet">{out}</div>);
	}
}

ReactDOM.render(
	<Carpet/>, document.getElementById('carpet')
);