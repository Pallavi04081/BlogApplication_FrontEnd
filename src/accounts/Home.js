import Banner from "./HomeComponent/Banner";
import BlogContent from "./HomeComponent/BlogContent";
import {Grid,Box} from '@mui/material'
import UserPost from "./HomeComponent/userPost";


const Home = ()=>{

    return(
        <>
         <Banner/>
         <Grid container style={{position:"static"}}>
            <Grid item lg={2} sm={2} xs={12}>
               <BlogContent/>
           </Grid>
           <Grid item lg={10} sm={10} xs={12}>
              <UserPost/>
          </Grid>
         </Grid>
        </>
    )

}


export default Home;