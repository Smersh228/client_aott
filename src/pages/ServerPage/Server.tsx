import { FC, useEffect, useState } from "react";
// import { Board } from "../../models/Board";
// import BoardComponent from "../../components/BoardComponent";
import { Header } from "../../components/header/header";
import style from "./Server.module.css"
import { Field } from "../../gameComponents/Field/Field";
import { Link, json, useLocation, useParams } from "react-router-dom";
import { NavBar } from "../../components/navBar/navBar";
import { LobbyServer } from "./LobbyServer";
import { iserver1 } from "../../types/types";
import  style1  from "../../components/navBar/navBar.module.css"
// export const PlayPage = () => {
//     const [board, setBoard] = useState(new Board())
    
  

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

interface ilobbys {
  id:string
  cartLobby:string
  method:string
  name:string
  cartLobby1:string
  players:any[]


}


interface ISERVER {
 id:number



}
let msg: ilobbys[]
let msg12: ilobbys[]
let d: ilobbys[][]
let sdf: string
export const Server: FC<ISERVER> = ({
  id

}) => {
  const location = useLocation()
  const locs = useParams()
 const [sss,setSSS] = useState<boolean>(false)
 const [sss5,setSSS5] = useState<boolean>(false)
 const [sss1,setSSS1] = useState<ilobbys[]>()
 const [sss12,setSSS12] = useState<any>()
  msg12 = msg
 
  let gd = msg
console.log(msg)
const sueta1 = () => {
  
 
  setSSS5(sss5 === true ? true : false)




}

const sueta12 = () => {
  setSSS5(sss5 === false ? true : false)
  setTimeout(sueta1,1000)
    setSSS(sss === false ? true : false)
    let msg1: ilobbys
    const soket = new WebSocket('ws://localhost:5000/')
    soket.onopen = () => {
      
        soket.send(JSON.stringify({
           method:'new',
           id:location.pathname

        }))
    
   

  
    
     soket.onmessage =  (event) => {
     
   
        msg = JSON.parse(event.data)
      
         msg1 = event.data
        
         
      }
     
    }
    return  msg === msg12 ? msg : []
  
    }
    


 useEffect(() => {

  const soket = new WebSocket('ws://localhost:5000/')
  soket.onopen = () => {
    
      soket.send(JSON.stringify({
         method:'delete_play',
         id:location.pathname,
         names: location.state.login

      }))}



if ( sss12) {
sueta1()
sueta12()
setSSS12(false)
}



 })
  

   
    
    
  
             
  
     


 console.log(location)

    return(
       
      <div>
      <NavBar setAction={setSSS12}/>
      
      <div className={style.container3}>
      
      <div className={style.container2}>Список серверов</div>
      
      
      
      
      { gd===undefined ? [] : gd.map((cell) =>  <LobbyServer key={cell.name} namelobby={cell.cartLobby1} maps={cell.cartLobby} players={cell.players.length} id={cell.id}/> ) }
      
      
      
      </div>
      <div className={style.chats}>
      
      <div className={style.chats1}><input disabled={true}></input>В разработке <button disabled={true}>Отправить</button></div>
      
      
      
      
      
      </div>
      </div>
      )
      }

