
import React from 'react';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";


export default function Child2(props)
{ 
      
   
 
    console.log(props);
  const { task ,index , deleteTask} = props;
   
  return(
< >


  <div key={index}  style={{ alignItems: "center" }}>

     {/* <FontAwesomeIcon
        icon={task.completed ? faCheckCircle : faCircle}
        onClick={() => toggleComplete(index)}
        style={{
          fontSize: "20px",
          color: task.completed ? "green" : "gray",
          marginRight: "10px",
          cursor: "pointer",
        }}/> */}
          
      <input   type="text" className="form-control"
             value={task}
      />
     <Button variant="dark"  onClick={()=>deleteTask(index)}>Delete</Button>
  </div>
</>


  );
}