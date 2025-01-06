import React, { useState } from "react";
import { userData } from "../data/userData";
import Search_Bar from "./Search";
import Card_User from "./User_card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { text } from "@fortawesome/fontawesome-svg-core";





export default function List_of_Cards()
{
  const [user_data, setuser_data] = useState(userData);
  const [searchText, setSearchText] = useState("");


     const onChange=(event)=>{
      setSearchText(event.target.value);

     }
 
    //  const filteredData = userData.filter((user) =>
    //   user.email.toLowerCase().includes(searchText.toLowerCase())
    // );
     

   
    

     const onSearch=() =>
     {
      console.log("saerch",searchText);
         const filteredArr = userData.filter((data) => data.email.toLowerCase() === searchText.toLowerCase());
         setuser_data(filteredArr)
          
     }

 
     
    return (


      <>
      <h2 style={{textAlign:"left"}}>Users</h2>
      <div className="search-container">
        <div className="search-inner">
        <input type="text" style={{backgroundColor:"transparent",height:"35px", color:"black"

        }}
          placeholder="Search..."
          value={searchText}
          onChange={onChange}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={onSearch}> 
          Search
        </Button>
        </div>
       </div>
       
       <div className="row row-cols-1 row-cols-md-3 g-4"  >
        
        {/* {user_data.map((data) => (
            // da el key bta3o
          <div className="col" key={data.id}> 
            <Card_User SingleUser={data} />
          </div>
        ))} */}


        {user_data.length > 0 ? (
          user_data.map((data) => (
            <div className="col" key={data.id}>
              <Card_User SingleUser={data} />
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>
            No results found
          </p>
        )}
      </div>
      
      
      
      </>
      
    );
    
}