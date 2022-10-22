import { Table, TableBody, TableCell, TableHead, TableRow,Button } from "@mui/material"
import Content from "./Content.js";
import {Link,useSearchParams} from "react-router-dom"

const BlogContent = ()=>{ 
     const [searchParams] = useSearchParams();
       
     const category = searchParams.get("category")
    
    return(
         <>
         <Link to={`/Create?category=${category || "All"}`} style={{textDecorationColor:"ButtonShadow",textUnderline:"none",textdecoration:"none"}}><Button variant ="contained" style={{width:"85%",margin:"20px",marginBottom:"10px",textDecoration:"none",color:"white"}}>Create Blog</Button></Link>
          <Table style={{border:"1px solid",borderColor:'rgb(224,224,224)'}}>
         <TableHead>
         <TableRow>
            <TableCell>
              <Link to="/"  style={{textDecoration:"none",color:"black"}}>
              All Catergies
              </Link>
            </TableCell>
        </TableRow>
         </TableHead>
         <TableBody>
           {
            Content.map((element,index)=>{
                return( <TableRow>
                    <TableCell>
                     <Link to={`/?category=${element.type}`} style={{textDecoration:"none",color:"black"}}>
                        {element.type}
                      </Link>
                    </TableCell>
                </TableRow>)
            })
           }
         </TableBody>
          </Table>
         </>

    )

}

export default BlogContent;