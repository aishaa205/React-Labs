import React from 'react';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Child2 from './child2';

//to do list

export default function Child1()
{
    const [tasks ,settasks] = useState([]);
    const [value ,setvalue] = useState('');
   // console.log(value);
  
    function handelInputChange(event){
        setvalue(event.target.value);
    
    }
    function addTask(event){
          event.preventDefault();
          if (value.trim() !== "") {
            settasks((t) => [...t, value]);
            setvalue("");
          }
    }

    function deleteTask(index) {
     // _ => current task ,i current index
      const updatedTasks = tasks.filter((_, i) => i  !== index);
      settasks (updatedTasks);
      }

    
      
 return(
    <>
    <form  className="ToDo-Form" onSubmit={addTask}>
    <input type="text" className="form-control mb-3" 
      placeholder="Add new todo"
      value={value}
      onChange={handelInputChange}
   
      />
     
      <button className="btn btn-primary mb-3" >         
        Add Todo
      </button>
      <h4>lets get some work done!</h4>
      <h3>Child2</h3>
      
        <ul style={{textDecoration:"none"}}>
        {tasks.map((task , index) =>
           
          <Child2 key={index}  task={task} index={index}  deleteTask={deleteTask}></Child2>
    
        )}
      </ul>

     

    </form>
    
    
    
    </>

);
}

