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
    newTask: '',
    allTheToDoList: ['clean the room', 'study react'],
    quotes: '',
    quoteAuthor: '',
   // myNewTask: localStorage.getItem("task")
   myNewTask: []
}


submitForm = (event) => {
  event.preventDefault() //to stop the page from refreach when the user click the button
 
  const newTaskToDo = this.state.newTask ;
    //check if the input is not empty
  if(newTaskToDo !== '') {
        const copy = this.state.allTheToDoList.slice(0)
        copy.push(newTaskToDo)
        // localStorage.setItem('items', JSON.stringify(copy));
        //const data = JSON.parse(localStorage.getItem('items'));
        this.setState({
         allTheToDoList:copy,
         newTask:'',
         myNewTask:copy
      })
      localStorage.setItem('task',copy);
    }
    }
 // declare localstorage
 componentDidMount(){
    // declare locale
    if(!localStorage.getItem("task")){
      localStorage.setItem('task', JSON.stringify(this.state.myNewTask));
    }

    localStorage.getItem('task') && this.setState({
      myNewTask: JSON.parse(localStorage.getItem('task'))   
    });
 }
//  localStorage = () => {
     
//  }

updateForm = (event) =>{
  // let copy=this.state.myNewTask.slice(0);
  // let newTask = event.target.value;
  // copy.push(newTask);
  // this.setState({myNewTask: copy,
  //   newTask: event.target.value
  // })
let myNewTask = event.target.value;
localStorage.setItem("task", myNewTask);
this.setState({newTask: myNewTask})

 
}

deleteTask = (index) => {
  // copy current list of items
   const copy = this.state.allTheToDoList.splice(index,1)
   this.setState({ newTask: copy,
    newTask:'' });
}

deleteAllTasks = (event) => {
  //make a copy from the array
  const copy = this.state.allTheToDoList;
  // check if the array not empty
    copy.splice(0)
    this.setState({
      allTheToDoList: copy 
    });
}

// editTask = (index,event) => {
//   const edit = this.state.newTask;
//   edit = event.target.value;
//   console.log(edit)
//   this.setState({
//     newTask: edit
//   });
// }

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
    // editTask = {this.editTask}
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
