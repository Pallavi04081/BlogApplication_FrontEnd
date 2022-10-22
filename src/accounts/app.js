import Login from './accounts/Login';
import Dataprovider from './context/Data';
import {Routes,BrowserRouter, Route, Outlet, Navigate} from 'react-router-dom'
import Home from './accounts/Home'
import Header from './accounts/Header';
import {useState} from 'react';
import Create from './HomeComponent/Create';
import Post from '../context/Post'

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
         <Route path="/" element={< PrivateRoute isAuthenticated={isAuthenticated} />}>
         <Route path="/" element={<Home/>}/>
         <Route path="/Create" element={<Create/>}/>
         <Route path="/post" element={<Post/>} />
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
