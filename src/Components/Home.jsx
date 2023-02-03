import axios from 'axios'
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const navigate=useNavigate()
    useEffect(()=>{
        
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((data)=>{
            setCount(Math.ceil(data.data.length/3))
            setData(data.data.splice((page-1)*3,3))
        })    
    },[page])

    const handleChange = (e, p) => {
        setPage(p);
    };
    return (
      <div>
        <div>
        {data.length>0 && data.map((element,key)=>(
            <div className="items" key={key}>
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
                <Button variant="contained" sx={{borderRadius:'20px', backgroundColor:'#F90716',"&:hover":{backgroundColor:'#d31724'}}} onClick={()=>navigate(`/details/${element.id}`)}>view details</Button>
                </div>
            </div>
        ))}
        </div>
        <div className="pages">
        <Pagination 
        count={count}
        size="large"
        page={page}
        shape="rounded"
        onChange={handleChange}
      />
      </div>
      </div>
    );
  }
  
  export default Home;
