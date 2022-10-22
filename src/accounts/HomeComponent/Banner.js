import {Box,Typography,styled} from "@mui/material";

const Banner = ()=>{

    return(
     <>
       <Box style={{height:"50vh",width:"100vw",backGround:"reapet",color:"white"}}>
       <img src="./backgroundImage.png" alt="bgimage" style={{ height:"100%",width:"100%"}}/>
        <h3 style={{marginTop:"-120px",color:"white",marginLeft:"50%",fontSize:"200%"}}>Blogs</h3>
        <p style={{marginLeft:"49%",marginTop:"-20px"}}>My First Project</p>
       </Box>
     </>
    
    )

}


export default Banner;



