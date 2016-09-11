import React from 'react';
import _ from 'lodash';

class Modes extends React.Component {
	
	constructor(props) {
		super(props);
	}
	setMode(mode){
		this.props.parent.setMode(mode);
	}
	render() {
		return (
			<div className="modes">{
				_.map(this.props.modes, function(value, key){
					return <Mode mode={value} parent={this}/>
				}.bind(this))
			}</div>
		);
	}
}
class Mode extends React.Component {
	
	constructor(props) {
		super(props);
	}
	handleClick(mode){
		this.props.parent.setMode(mode);
	}
	render() {
		return (
			<div onClick={this.handleClick.bind(this, this.props.mode.mode)} className={"mode " + (this.props.mode.active ? "active" : "")}>{this.props.mode.label}</div>
		);
	}
}

export default Modes;