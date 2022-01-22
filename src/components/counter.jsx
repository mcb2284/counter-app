import React, { Component } from 'react';


class Counter extends Component {
	state = {
		value: this.props.value,
	};


	handleIncrement = product => {
		this.setState({value: this.state.value + 1});
	}

	resetCounter = () => {
		this.setState({value: 0});
	}

	render() { 

		return (
		<div className="m-2">
			<h4>{this.props.id}</h4>
			<span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
			<button onClick={ () => this.handleIncrement() }className="btn btn-secondary m-2 btn-sm">Increment</button>
			<button onClick={ this.resetCounter }className="btn btn-secondary m-2 btn-sm">Reset</button>
		</div>);
	}

	getBadgeClasses() {
		let classes = "badge m-2 bg-";
		classes += (this.state.value === 0) ? 'warning' : 'primary';
		return classes;
	}

	formatCount(){
		const {value: count} = this.state;
		return count === 0 ? 'Zero' : count;
	}
}
 
export default Counter;