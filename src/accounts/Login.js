import {useState,useContext} from 'react';
import {Box,TextField,Button,styled,Typography} from '@mui/material';
import axios from 'axios';
import { dataContext } from '../context/Data';
import { useNavigate } from 'react-router-dom';



const Component = styled(Box)`
      width:40%;
      margin:auto;
      box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`
const Image = styled('img')({
width:'15%',
height:'15%',
margin:'auto',
display:'flex'

})

const Wrapper  = styled(Box)`
       display: flex;
       flex:1;
       flex-direction : column;
       box-sizing : borderBox;
       padding: 15px
       height:"30%"
`



const Login = ({setIsAuthenticated})=>{
 const [Toggle,setToggle] = useState('login')
 const {setAccount}= useContext(dataContext);
 console.log(setAccount);
 const navigator = useNavigate()

 const [signUp,setSignUp]=useState({
      name:"",
      username:"",
      password:""

 })

 const [URlogin,setURlgoin] = useState({
      username :  "",
      passward: "",
 })

 const toggle = ()=>{  
        if(Toggle==='login'){
            setToggle('createAccount')
        }
        else{
            setToggle('login')
        }

 }

  
const userData = (e)=>{  
     setSignUp((previous)=>{
        return {...previous,[e.target.name]:e.target.value}
     })
       
}

console.log(signUp)

const userRegistration = async(e)=>{
    try{
        e.preventDefault();
       await axios.post('http://localhost:8000/register',signUp)  
    }
    catch(error){
        console.log('error while posting data',error.message)
    }
}

const userLogin = (e)=>{
     
    setURlgoin((previous)=>{
       return {...previous,[e.target.name]:e.target.value}
      })

}
console.log(URlogin)

const postLoginData = async(e)=>{
  try{
         e.preventDefault();
         const Responce =  await axios.post("http://localhost:8000/login",URlogin)
         sessionStorage.setItem('experiedKey',Responce.data.expiredToken)
         sessionStorage.setItem('prementkey',Responce.data.permentToken)
         setAccount({username:Responce.data.userName,name:Responce.data.name})
         setIsAuthenticated(true);
          navigator('/');

        }
        catch(error){
        console.log(error)
       }
}

      return(
        
         <>
            <Component style={{marginBottom:"50%"}}>
            <Box>
           <Image src="blogimage.jpg" alt="login" style={{width:"100px",height:"100px"}}/>
           </Box>
           { Toggle ==='login'?        
           <Wrapper>
            <TextField variant="standard" style={{margin:"10px"}} onChange={userLogin} name="username" placeholder="User Id" ></TextField>
            <TextField variant = "standard" style={{margin:"10px",marginTop:"5px"}} onChange={userLogin} name="passward" placeholder="Passward" ></TextField >
            <Button variant="contained" style={{margin:"10px",textTransform:"none"}} onClick={postLoginData}>Login</Button>
            <Typography variant="p" style={{textAlign:"centre",margin:"auto",fontSize:"12px"}}>OR</Typography>
            <Button variant="text" style={{margin:"10px",textTransform:"none"}} onClick={()=>toggle()}>create account</Button>
      </Wrapper>:
           
       <Wrapper>
            <TextField variant="standard" style={{margin:"9px",marginTop:"3px",marginRight:"10px",marginLeft:"10px",textTransform:"none"}}  onChange={(e)=>{userData(e)}} name="name" placeholder="User ID"    ></TextField>
            <TextField variant = "standard" style={{margin:"9px",marginTop:"3px",fontSize:"5px",marginRight:"10px",marginLeft:"10px"}} onChange={(e)=>userData(e)} name="username" placeholder="Passward"  ></TextField >
            <TextField variant = "standard" style={{margin:"9px",marginTop:"3px",marginRight:"10px",marginLeft:"10px"}}   onChange={(e)=>userData(e)}  name="password" placeholder="Confirm Passward"   ></TextField >
            <Button variant="contained" style={{marginTop:"9px",textTransform:"none",marginRight:"10px",marginLeft:"10px"}} onClick={(e)=>userRegistration(e)}>Create Account</Button>
            <Typography variant="p" style={{textAlign:"centre",margin:"auto",fontSize:"12px",marginTop:"2px"}}>OR</Typography>
            <Button variant="text" style={{margin:"9px",textTransform:"none",marginLeft:"10px",marginRight:"10px",marginBottom:"5px",boxShadow:"2px 1px 2px 1px/60%",}}  onClick={()=>toggle()}>Login</Button> </Wrapper>

           }

            </Component>
         </>
      )
}


export default Login