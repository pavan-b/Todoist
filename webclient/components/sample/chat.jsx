import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './chart.css';
import { connect } from "react-redux";
import { valueOnChange , valueOnSubmit } from "../../actions/todoistActions";
import store from '../../store/todoistStore';

 class Todo extends React.Component {
	// constructor (props) {
	// 	super(props);
	// 	this.state = {
	// 		message:'',
	// 		messages:[],
	// 	}
	// }
	componentDidMount=()=>{
		//var socket = io.connect('/');
  //socket.on('broadcast', msg => {
	//	this.setState({messages:[...this.state.messages , msg]})
	//this.props.valueOnSubmit(msg);

	//})
	}

	  handleMessage=(e,data)=>{
	 	e.preventDefault();
	 		this.props.valueOnSubmit(this.props.message)

	 }

	 handleChange=(e,data)=>{
	 this.props.valueOnChange(data)
	 }
	render () {

		var display='';
		if(this.props.messages){
		 display=this.props.messages.map((data,index)=>{
			return(
				<li  className='msg-color' key={index}>{data}</li>
			)
		})
	}

		return (
			<div>
			<div className='topContainer'>
				<ul className='messagesContainer'>
					{display}
				</ul>
			</div>
			<div className='container' >
				<form onSubmit={this.handleMessage}>
				<Card >
					<CardText>
						<TextField
							value={this.props.message}
		 floatingLabelText="type your message (Enter to send)"
		 fullWidth={true}
		 onChange={this.handleChange}
	 />
					</CardText>
				</Card>
				</form>
			</div>
			</div>
		);
	}
}//end of class


const mapStateToProps=(store)=>{
return{
	message:store.message,
	messages:store.messages
}
}


const mapDispatchToProps=(dispatch)=>{
	return{
		valueOnChange:(d) =>{dispatch(valueOnChange(d))},
		valueOnSubmit:(d) =>{dispatch(valueOnSubmit(d))}
	}
}

const TodoistDisplay =connect (
	mapStateToProps,
	mapDispatchToProps
)(Todo)
export default TodoistDisplay;
