import { Children, createContext,useState } from "react";

export const dataContext = createContext(null);

const Dataprovider = ({children})=>{
    const [Account,setAccount]=useState( {
        username:"",
        name:"",
        data:""
    })
     
return(
    <dataContext.Provider value={{

         Account,
         setAccount
    }}>
        {children}
    </dataContext.Provider>
)
}

export default Dataprovider;