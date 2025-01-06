import { userData } from "../data/userData";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export default function Search_Bar() {
  // const [searchText, setSearchText] = useState('');
  
//  kda 5adt el value mn el search box
  // const handleSearchChange = (event) => {
  //   setSearchText(event.target.value);
  // };

return(
<>
<h2 style={{textAlign:"left"}}>Users</h2>
<InputGroup className="mb-3">
      <FormControl
        placeholder="Search..."
        aria-label="Search..."
        aria-describedby="basic-addon2"
        // value={searchText}
        // onChange={handleSearchChange}
      />
      <Button variant="outline-secondary" id="button-addon2"    
        >
        Search
      </Button>
    </InputGroup>




</>
);
}