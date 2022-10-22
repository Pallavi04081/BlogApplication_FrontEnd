import {Button,FormControl} from "@mui/material";
import {AddCircle} from '@mui/icons-material';
import {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import { useSearchParams,Link } from "react-router-dom";
import {dataContext} from "../../context/Data"



const Create = ()=>{

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category")
  
  const {Account} = useContext(dataContext);
  const userName = Account.username;

  const token = sessionStorage.getItem('prementkey')


  const [file,setFile] = useState("")
  const [blogContent,setblogContent] = useState({
        title: "",
        discription: ""
  })

  const [post,setPost] = useState("");
         
  const Content = (e)=>{
   setblogContent((previous)=>{
    return {...previous,[e.target.name]:e.target.value}
       })

       console.log(blogContent)
    }
    

    const imageFile = async()=>{
      try{
      if(file){
      const data = await new FormData(); 
       data.append('userpic',file,file.name)
       const Responce = await axios.post('http://localhost:8000/image',data)
        setPost(Responce.data.imageDta)
    } 
    }catch(error){
        console.log(error)
      }
  }
  useEffect(()=>{
    imageFile();
  },[file])


  const Submit = async()=>{
     try{
       const Responce = await axios.post('http://localhost:8000/userPost',{
        title: blogContent.title,
        Discription: blogContent.discription,
        image: post,
        userName: userName,
        category: category,
        createdDate: Date.now()
       },{
        headers:{Authorization:token}
       })
     }
     catch(error){
      console.log(error)
     }
  }

  const url = post ? post : "blogimage2.png";

    return(
       <>
       <div style={{display:"flex",flexDirection:"column"}}>
       <div style={{width:"100%",height:"50%"}}>
       <img src={`${url}`} alt="createImage" style={{width:"100%",height:"50vh",backgroundSize:"Cover",marginTop:"2%"}}/>
       </div>
       <div>
      <FormControl style={{display:"flex",flexDirection:"row"}}>
      <lable  style={{marginLeft:"5%"}} htmlFor="newfile">
        <AddCircle/>
      </lable>
     <input type="file"  style={{display:""}} id="newfile" onChange={(e)=>setFile(e.target.files[0])}/>
      <input type="text" placeholder="Title..." style={{width:"80%",border:"none",outline:"none"}} onChange={(e)=>{Content(e)}} name="title"/>
     <Link to="/"><Button variant="contained" style={{marginRight:"20px",marginTop:"10px"}} onClick={Submit}>Submit</Button></Link>
      </FormControl>
      </div> 
      <div>
      <textarea style={{width:"80%",marginLeft:"7.3%",marginTop:"20px",outline:"none",border:"none",}} placeholder="Write your blog here..."onChange={(e)=>{Content(e)}} name="discription"/>
      </div>
      </div>
       </>
    )
}

export default Create;

