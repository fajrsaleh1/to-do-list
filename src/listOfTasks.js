import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

class Tasks extends Component {
  state ={
      line: 'false'
  }


  strikethrough = () =>{
    if(this.state.line === 'false'){
    this.setState({line: 'strikethrough'});
    } else{
     this.setState({line: 'false'});
    }
    }
    render() { 
       
    return (
      <div>
       <ul>
        <li className = {this.state.line} onClick = {this.strikethrough}>{this.props.taskData} <Button  onClick = {() => this.props.deleteTask(this.props.index)} variant="light" >❌</Button></li>
        </ul> 
       </div> 
    );
  }
}

export default Tasks;