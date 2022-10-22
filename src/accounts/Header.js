import { AppBar,Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";




const Header = ()=>{

return(
   <>
   <AppBar style={{textAlign:"right",paddingLeft:"33%",height:"50px",backgroundColor:"white",color:"black"}}>
    <Toolbar style={{textAlign:"right",padding:"20px",height:"100%",textAlign:"centre"}}>
        <Link to="/" style={{textAlign:"right",padding:"20px",height:"100%",color:"black",textDecoration:"none"}}>Home</Link>
        <Link to="/about" style={{textAlign:"right",padding:"20px",height:"100%",color:"black",textDecoration:"none"}}>About</Link>
        <Link to="/contact" style={{textAlign:"right",padding:"20px",height:"100%",color:"black",textDecoration:"none"}}>Contact</Link>
        <Link to="/login" style={{textAlign:"right",padding:"20px",height:"100%",color:"black",textDecoration:"none"}}>Logout</Link>
     </Toolbar>
   </AppBar>
   </>
)

}

export default Header;