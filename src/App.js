import Login from './accounts/Login';
import Dataprovider from './context/Data';
import {Routes,BrowserRouter, Route, Outlet, Navigate} from 'react-router-dom'
import Home from './accounts/Home'
import Header from './accounts/Header';
import {useState} from 'react';
import Create from './accounts/HomeComponent/Create';
import Post from './accounts/HomeComponent/Post'

function App() {

const PrivateRoute = ({isAuthenticated, ...props})=>{
      return isAuthenticated?
      <>
      <Header/>
      <Outlet/>
      </> :
      <>
      <Navigate replace to="/login"/>
      </>
}


const  [isAuthenticated,setIsAuthenticated] = useState(false)
console.log(isAuthenticated);
 
  return (
    <>
    <div style={{height:"100vh",width:"100vw"}}>
      <Dataprovider>
        <BrowserRouter>
        < div style={{marginTop:"1%"}}>
         <Routes>
         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>
         <Route path="/" element={< PrivateRoute isAuthenticated={isAuthenticated}/>}>
         <Route path="/" element={<Home style={{position:"Relative"}}/>}/>
         <Route path='/Create' element={<Create/>}/>
         <Route path="/Post"  element={<Post/>}/>
         </Route>
        </Routes>
       </div>
       </BrowserRouter>
     </Dataprovider>
     </div>
     </>
  );
}

export default App;