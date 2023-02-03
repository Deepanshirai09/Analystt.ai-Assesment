import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Details =()=>{
    const [data, setData] = useState([]);
    const navigate=useNavigate()

    useEffect(()=>{
        
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((data)=>{
            setData(data.data.filter((element)=>{
                return element.id===Number(window.location.pathname.split('/')[2])
            }))
        })    
    },[])

    return(
        <div>
        {data.length>0 && data.map((element,key)=>(
            <div className="details">
            <div className="header"  key={key}>
                <div className="item-description">
                {element.company.name}
                </div>
                <div className="item-description">
                    <h4>Contact</h4>
                    {element.name}
                </div>
                <div className="item-description">
                    <h4>City</h4>
                    {element.address.city}
                </div>
                <div className="item-description">
                    <h4>Website</h4>
                    {element.website}
                </div>
                <div>
                <Button variant="contained" sx={{borderRadius:'20px', backgroundColor:'#F90716',"&:hover":{backgroundColor:'#d31724'}}} onClick={()=>navigate('/')}>hide details</Button>
                </div> 
            </div>
            <div className="card">
                <div>
                    <h4>Description</h4>
                    {element.company.catchPhrase}
                </div>
                <div className="main">
                    <div className="main-details">
                        <div>
                            <h4>Contact Person</h4>
                            {element.name}
                        </div>
                        <div>
                            <h4>Username</h4>
                            {element.username}
                        </div>
                        <div>
                            <h4>Email</h4>
                            {element.email}
                        </div>
                        <div>
                            <h4>Phone</h4>
                            {element.phone}
                        </div>
                    </div>
                    <div className="main-details">
                        <div>
                            <h4>Address</h4>
                            {element.address.suite + " " + element.address.street + " " + element.address.city}
                        </div>
                        <div>
                            <h4>Street</h4>
                            {element.address.street}
                        </div>
                        <div>
                            <h4>City</h4>
                            {element.address.city}
                        </div>
                        <div>
                            <h4>Zip Code</h4>
                            {element.address.zipcode}
                        </div>
                    </div>
                </div>     
            </div>
            </div>
        ))}
  </div>
    )
}

export default Details;