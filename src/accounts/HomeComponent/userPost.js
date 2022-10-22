import {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import {Box,Grid} from "@mui/material"
import {Link , useSearchParams } from "react-router-dom";
import {dataContext} from '../../context/Data';

const UserPost = ()=>{
const [showPost,setShowPost] = useState([])
const [searchParams] = useSearchParams();
const category =  searchParams.get('category')
const {setAccount}= useContext(dataContext);

 
useEffect(()=>{
  const getPost = async()=>{ 
    const params = category ? category : " ";
     const data = await axios.get(`http://localhost:8000/userPost/?category=${params}`)
     setShowPost(data.data.Result) 
     setAccount((previous)=>{
            return {...previous,data:data.data.Result}
     })
  }
  getPost()
},[category])

   return(
       <>
       <Grid container style={{margin:"10px",}}>
        {
          showPost.map(element=>{
            return(
              <Grid style={{width:"28%",border:"2px solid gray",marginTop:"20px",marginLeft:"3%",borderRadius:"3% 3% 3% 3%"}}>
              <img src={element.image} style={{width:"100%",height:"30vh",borderRadious:"3% 3% 3% 3%"}}/>
                   <Link to={`/Post/?id=${element._id}`}style={{textDecoration:"none",color:"black"}}><h3 style={{margin:"auto",fontSize:"15px",marginLeft:"2px"}}>{element.title}</h3></Link>
              <p style={{marginLeft:"2px",fontSize:"12px"}}>{element.description}</p>
              <div>
              <p style={{display:"inline",fontSize:"8px",marginLeft:"2px",color:"gray"}}>{element.category}</p>
              <p style={{display:"inline",marginLeft:"2%",fontSize:"8px",float:"right",marginRight:"2px",color:"gray"}}>{element.username}</p>
              </div>
             </Grid>
            )
          })
          }
          </Grid>
       </>
   )

}

                 


export default UserPost;
