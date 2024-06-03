import React, { useEffect, useRef, useState } from "react";
// import { Board } from "../../models/Board";
// import BoardComponent from "../../components/BoardComponent";
import { Header } from "../../components/header/header";
import style from "./Connect.module.css"
import { Field } from "../../gameComponents/Field/Field";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavBar } from "../../components/navBar/navBar";
import { Socket } from "dgram";

// export const PlayPage = () => {
//     const [board, setBoard] = useState(new Board())
    
//     useEffect(() => {
//         restart()

//     }, [])

//     function restart() {
//         const newBoard = new Board();
//         newBoard.initCells()
//         newBoard.addUnits()
//         setBoard(newBoard)
        
//     }



//     return (
//         <div className="app">
//    <Header />
//             <BoardComponent
//                 board={board}
//                 setBoard={setBoard}
                

             
//             />


//         </div>

//     );
// }

export const Connect = () => {
   

    
    const [password,setPassword] = useState<string>()
    const [login,setLogin] = useState<string>()
    const [button,setButton] = useState<boolean>(false)
   const navigare = useNavigate()
   let create:boolean
  
  
    const  location =  useLocation()
    useEffect(() => {
    
     }, );

     const handbutton = () => {
      let s;
     
    let k = false
      let lll: [{method:string,id:number, login:string, password:string}]
     const  socket  = new WebSocket('ws://localhost:5000')
     
     socket.onopen = () => {
          let sueta = JSON.stringify({
             method:'connect',
           
             
          })
           socket.send(sueta)
     
    
     socket.onmessage = (event) => {
      
       lll =  JSON.parse(event.data)
        s = lll.find((user) => { return user.password === password && user.login === login})
       let s1 = s!
       console.log(s1)
       navigare(s1 ? "/sueta111/main" : '111' ,{state:{login:login,create,loc:location.state?.from?.pathname} , replace: true})
     }
   }
   
     }
     const handPassword = (e:React.ChangeEvent<HTMLInputElement>) => {

      setPassword(e.target.value)

     }


     const handLogin = (e:React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
        
     }

    return(
        <form>
        <div>
                   <div className={style.divConect}> 
                   <h1 className={style.h1Conect}>Вход</h1> 
                      <div className={style.inputConect}> 
                      
                 <input  onChange={(e) => handLogin(e)} value={login}   placeholder="Логин" ></input></div> 
                  <div className={style.inputConect}> <input type="password" onChange={(e) => handPassword(e)} value={password}  placeholder="Пароль"></input></div> 
                   <button  onClick={(e) =>handbutton()   } 
          
           className={style.buttonConect}>Войти</button>  </div>
        
        </div>
        </form>
    )

}
