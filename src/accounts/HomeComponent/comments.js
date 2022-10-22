import {Avatar} from "@mui/material" ;
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useState,useContext} from 'react';
import {dataContext} from '../../context/Data'

const Comments = ({getcomm})=>{
    const [text,setText] = useState('')
    const {Account}  = useContext(dataContext);
     
    const submit = ()=>{
      getcomm({comm:text,fun:"true",username:Account.username})
      setText("");
    }
     return(
       <>
       <div style={{width:"80%",margin:"auto",display:"flex",flexDirection:"row",marginTop:"15px"}}>
        <AccountCircleIcon style={{width:"5%"}}/>
        <textarea rows="1" style={{width:"85%",}} name="comm" onChange={(e)=>{setText(e.target.value)}}/>
        <button style={{width:"10%",fontSize:"12px"}} name="fun" onClick={submit}>send</button>    
       </div>
       </>
     )
}

export default Comments;