import { FC, useEffect, useState } from "react";
// import { Board } from "../../models/Board";
// import BoardComponent from "../../components/BoardComponent";
import { Header } from "../../components/header/header";
import style from "./Server.module.css"
import { Field } from "../../gameComponents/Field/Field";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavBar } from "../../components/navBar/navBar";
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
                

interface Ilobbyserver {
  namelobby:string
  maps:string
  players:any
  id?:string
 
 }



export const LobbyServer: FC<Ilobbyserver> = ({
 namelobby,maps,players,id
 
}) => {
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)
    return(
       
         
       
              
        <div  onClick={() => { if (players !== 2) { navigate(`/sueta111/lobby/${id}`, location) } }}    className={  style.container5   }><div className={ players !==2 ? style.container1 : style.container51}>{namelobby}</div><div className={players !==2 ? style.container1 : style.container51}>{maps}</div><div className={players !==2 ? style.container1 : style.container51}>{players}/2</div></div>
       
       
       
        
       
    )
}
