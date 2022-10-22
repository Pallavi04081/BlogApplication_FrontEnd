
const PostComment = ({postcomm})=>{
    return(
    <>
    {
      postcomm.map((ele)=>{
        return(
     <div class="card">
     <div  class="card-body" style={{display:"flex",flexDirection:"row"}}>
      <p style={{width:"5%"}}>{ele.username}</p>
      <p  style={{width:"88%"}}>{ele.comm}</p>
      <p  style={{width:"7%"}}>{""}</p>
     </div>
    </div>)
      })
    }
    </>)  
}

export default PostComment;