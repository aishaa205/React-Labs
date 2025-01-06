import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faStar);


export default function Card_User(props)
{    console.log(props);
    const {SingleUser} = props;

    const iconColor = SingleUser.age > 29 ? "red" : "green";

    return(

        <>
        <Card style={{ width: '18rem',borderRadius:"20%" }}>
           <Card.Img style={{borderRadius:"50%" ,textAlign:"center"}}  src={SingleUser.image} />
           <Card.Body> 
             <div style={{textAlign:"right" }}>
             <FontAwesomeIcon  icon={faStar}   style={{ color: iconColor }}  />
             </div>
             <Card.Title style={{fontSize:"18px"}}>{SingleUser.username}</Card.Title>
              <Card.Title style={{fontSize:"15px"}}>{SingleUser.email}</Card.Title>
              <Card.Title style={{fontSize:"18px"}}>{SingleUser.phone}</Card.Title>
              
            </Card.Body>
      </Card>
        
        
        
        
        </>
    );
}