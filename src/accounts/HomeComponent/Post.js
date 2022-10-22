import react from 'react'
import {useState,useContext,useEffect} from 'react'
import {Link, useNavigate, useSearchParams} from 'react-router-dom';
import {Button,FormControl} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';
import {dataContext} from '../../context/Data'
import Comments from  './comments'
import PostComment from './postComment';
import io from  'socket.io-client'
const socket = io.connect("http://localhost:8000")


const Post = ()=>{
     const [getComment,setGetCommnet] = useState({
          comm:"",
          fun:"",
          username:""
     })
     const [postcommback,setPostCommback] = useState({
      username:"",
      comm:""
     })
      
      const [postcomm,setPostComm]= useState([])

      const [showPost,setShowPost] = useState([""])
     const [searchParams] = useSearchParams();
     let _id = searchParams.get("id")
     const {Account} = useContext(dataContext);
     const Navigator = useNavigate();
     
      useEffect(()=>{
       if(getComment.fun==='true'){
       socket.emit('message',{getComment})}
      },[getComment])
     
       useEffect(()=>{    
        socket.on('message',data=>{  
          setPostComm(postcomm=>[...postcomm,data.getComment])
          setPostCommback({username:data.getComment.username,comm:data.getComment.comm})
     })
      },[socket])

     useEffect(()=>{
          const getpost = async()=>{
                  try{
               const Responce  = await axios.get(`http://localhost:8000/getPost/${_id}`)   
                setShowPost(Responce.data.Result)
                  }
                  catch(error){
                   console.log(error)
                  }
          }
          getpost();
     },[])
     
     const Delete = async()=>{
         try{
            console.log(showPost[0].username)
            if(Account.username===showPost[0].username) {
              const Responce  = await axios.delete(`http://localhost:8000/deletePost/${_id}`)
              if(Responce) {
               alert('Blog successfully deleted')
               Navigator("/")
              }
            } }
         catch(error){
            console.log(error)
         }
     }

    return(
          <>
          <div style={{display:"flex",flexDirection:"column"}}>
          <div style={{width:"80%",height:"50%",margin:"auto"}}>
          <img src={`${showPost[0].image}`} alt="createImage" style={{width:"100%",height:"50vh",backgroundSize:"Cover",marginTop:"2%"}}/>
          </div>
          <div style={{width:"80%",margin:"auto"}}>
          <div style={{display:'flex',flexDirection:"row",height:"10%"}}>
          <h1 style={{margin:"auto",fontSize:"20px"}}>{`${showPost[0].title}`}</h1>
          <div class="form-group">
          <label for="exampleInputPassword1"><DeleteOutlineIcon sx={{fontSize:'small',color:"red"}}/></label>
         <input type="submit" id="exampleInputPassword1" style={{display:"none"}} onClick={Delete}/>
           </div>
          </div>
          <p style={{width:"100%",margin:"5px",fontSize:"12px"}}>{`${showPost[0].description}`}</p>
          <h4 style={{fontSize:"12px",float:"right",font:"italic",margin:"5px"}}>{`${showPost[0].username}`}</h4>
          <p>{}</p>
          </div>
          </div>
          <Comments getcomm={setGetCommnet}/>
          <PostComment postcomm={postcomm}/>
          </>
     )
}

export default Post;