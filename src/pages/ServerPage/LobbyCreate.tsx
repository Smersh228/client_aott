import { FC, useEffect, useState } from "react";
// import { Board } from "../../models/Board";
// import BoardComponent from "../../components/BoardComponent";
import { Header } from "../../components/header/header";
import style from "./Server.module.css"
import { Field } from "../../gameComponents/Field/Field";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { NavBar } from "../../components/navBar/navBar";
import { LobbyServer } from "./LobbyServer";
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

interface Ilobbycreate {
 player:string



}

export const LobbyCreate: FC<Ilobbycreate> = ({
  player

}) => {
  const location = useLocation()
  const [button,setButton] = useState<boolean>(false)
  const [cart,setCart] = useState<string>()
  const [name,setSueta] = useState<string>()
  const id = (+new Date).toString(16) + "hflshvbye83ksmv"
  console.log(location)
  const handbutton = () => {
   
    const socket = new WebSocket('ws://localhost:5000/')
   
    socket.onopen = () => {
       
    
       
     
       socket.send(JSON.stringify({

        names: location.state.login,
        cartLobby:cart,
        method: "createLobby",
        cartLobby1:name,
        id:id,
        id1:0,
        units1:[1],
        units2:[1],
        units3:false,
        hod:0,
        redirect_play:false ,
        players:[{ready:'Не готов', player:location.state.login, fraction: 0, id:id, ready_play:false,mocktanks:[]}]

       }))}
    



  }
 /* useEffect(() => {
    const socket = new WebSocket('ws://localhost:5000/')
   
socket.onopen = () => {


   
 
   socket.send(JSON.stringify({
    nameLobby:name,
    cartLobby:cart,

    

   }))}
  },[button]
   
  )*/
  

    
    console.log()
    console.log(name)
    console.log(location)
   
    location.state.create = true
    
    const navigate = useNavigate()
    
    return(
        <div>
          <div className={style.lobbyDivCreate}>
            <h1 style={{fontSize: "25px", textAlign: "center"}}>Создания Лобби</h1>
            <p >   Название Лобби <input onChange={(e) => setSueta(e.target.value) } ></input></p>  
       
          <p>Карта  <select  onChange={(e) => setCart(e.target.value) }>
       
            <option >Выбрать карту</option>
            <option value="Танковый Бой">Танковый Бой</option>
            <option value="Сорокопятка">Сорокопятка</option>
            <option value="Окружение">Окружение</option>
           </select>       </p>  
  
  
       <button onClick={( ) =>  {handbutton(); navigate(`/sueta111/lobby/${id}`,{state: location.state,replace:true}) }} style={{marginLeft:'7.8%'}} className={style.lobbyButtonCreate}>Cоздать</button>
  
        
 
  
  </div> 
 
        </div>
    )
}