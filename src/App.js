import React, { Component } from 'react';
import './App.css';
import Tasks from './listOfTasks';
import axios from 'axios';
import Quotes from './quotes'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'


// Add a new item to the list -done-
// Mark the item as complete -done-
// Stretch Goals

// Remove an item from the list -done- 
// Make To Do List responsive -semi responsive-
// Clear all items -done-
// Clear only completed items
// Save data to localstorage or API --
// Use 3rd party API with Axios -done-
// Use a 3rd party library


class App extends Component {
 
  state = {
    //this is for the task input
    newTask: '',
    allTheToDoList: ['clean the room', 'study react'],
    quotes: '',
    quoteAuthor: '',
    myNewTask: []
}


//This function for the submit button
submitForm = (event) => {
  event.preventDefault() //to stop the page from refreach when the user click the button
  const newTaskToDo = this.state.newTask ;
    //Check if the input is not empty
  if(newTaskToDo !== '') {
       //Take a copy from the allTheToDoList array because i cant change the original array
        const copy = this.state.allTheToDoList.slice(0)
        //Use PUSH function to add the value to the array
        copy.push(newTaskToDo)
        // localStorage.setItem('items', JSON.stringify(copy));
        //const data = JSON.parse(localStorage.getItem('items'));
        // Update the state 
        this.setState({
         allTheToDoList:copy,
         newTask:'',
         myNewTask:copy
      })
      localStorage.setItem('task',copy);
    }
    }
 // Declare localstorage
 componentDidMount(){
 // Declare locale
 //var aValue = storage.getItem(keyName);
    if(!localStorage.getItem("task")){
      localStorage.setItem('task', JSON.stringify(this.state.allTheToDoList));
    }

    localStorage.getItem('task') && this.setState({
      allTheToDoList: JSON.parse(localStorage.getItem('task'))   
    });

    
 }


//for the input field 
updateForm = (event) =>{
  // let copy=this.state.myNewTask.slice(0);
  // let newTask = event.target.value;
  // copy.push(newTask);
  // this.setState({myNewTask: copy,
  //   newTask: event.target.value
  // })

//Get the input value
let currentTask = event.target.value;
//Update the localStorage value storage.setItem(keyName, keyValue);
localStorage.setItem("task", currentTask);
//Set the state to the new value
this.setState({newTask: currentTask})

 
}

deleteTask = (index) => {
  // Copy current list of items and using splice function to delete the current index
   const copy = this.state.allTheToDoList.splice(index,1)
   this.setState({ newTask: copy,
    newTask:'' });
}

deleteAllTasks = (event) => {
  //Make a copy from the array
  const copy = this.state.allTheToDoList;
   //Using splice function to delete all the content of the array
  copy.splice(0)
    this.setState({
      allTheToDoList: copy 
    });
}

componentDidMount(){
  axios(
    {
      method: 'get',
      url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
    }
  ).then(response => {
    // console.log(response.data.quoteAuthor)
    this.setState({
      quotes: response.data.quoteText,
      quoteAuthor: response.data.quoteAuthor 
    })
  }).catch(error => {
    console.log(error)
  })
}



  render() {
    const listofToDoList = this.state.allTheToDoList.map((task,index) => <Tasks taskData = {task} index={index} deleteTask = {this.deleteTask}/>);

    return (
      <div> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/draft-js/0.7.0/Draft.min.css"/>
       <h1>To Do List</h1>
       <Container className = "container">
       <form onSubmit = {this.submitForm}>
       <InputGroup>
    <FormControl className = "inputTask"
      placeholder="What are you doing today;)"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      type="text" name = "task" onChange ={this.updateForm} value = {this.state.newTask}
    /><InputGroup.Append>
      <Button type = "submit" variant="light" >ADD</Button>
      <Button variant="light" onClick = {this.deleteAllTasks}>CLEAR</Button>
    </InputGroup.Append>
  </InputGroup>
       {/* <input type="text" name = "task" placeholder = "What are you doing today;)" onChange ={this.updateForm} value = {this.state.newTask}/>
       <Button type = "submit" variant="light">ADD</Button> <Button className = "clearButton" onClick = {this.deleteAllTasks} variant="light">CLEAR</Button> */}
       </form>
       <h3> My To Do List 💡</h3>
       {listofToDoList}
       </Container> 
       <Quotes 
       currentQuotes = {this.state.quotes}
       currentAuthor = {this.state.quoteAuthor}/>
{/*      Made with 💞 and alot of ☕
 */}
 <Navbar>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    Fajr Saleh - Made with 💞 and a lot of ☕
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
    </div>
      
    );
  }
}

export default App;
