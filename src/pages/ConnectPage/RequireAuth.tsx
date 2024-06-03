
import { ReactChildren, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";


export const RequireAuth = (children:any) => {


useEffect(() => {

    const soket = new WebSocket('ws://localhost:5000/')
    soket.onopen = () => {
        let sueta = JSON.stringify({
            method:'connect',
            
            
         })
      soket.send(sueta)

  
    
     soket.onmessage =  (event) => {
        let jj: [{method:string,id:number, login:string, password:string}]
        jj = JSON.parse(event.data)
        console.log(jj.find((user) => { return user }))
      
       
      }
      
    }





})



const location = useLocation()
const auth = false


console.log(location)
if (auth) {


    return <Navigate to='/sueta111/' state={'dfdf'} />
}



return  children




}


