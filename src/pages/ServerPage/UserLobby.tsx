import { FC, useEffect, useState } from "react";
// import { Board } from "../../models/Board";
// import BoardComponent from "../../components/BoardComponent";
import { Header } from "../../components/header/header";
import style from "./Server.module.css"
import { Field } from "../../gameComponents/Field/Field";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/navBar/navBar";
import { Fraction } from "../../models/Fraction";
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

interface Ifraction {
fraction1: number
Ready:string,
player:string,


}


export const UserLobby: FC<Ifraction> = ({
    
    Ready,
 fraction1,
 player
  } ) => {
   const Fractions = ['Не выбран', 'РККА', 'Вермахт']
 
    console.log(fraction1)
  


    return(
        
             
        <div className={style.lobbyUserDiv} >
         <div  > {player}  </div>    <div style={Fractions.find((e,index) => index === fraction1) === 'РККА' ? {color:'red'}:Fractions.find((e,index) => index === fraction1) === 'Вермахт' ? {color:'grey'}:{color:'white'}}  >  {Fractions.find((e,index) => index === fraction1) } </div>    <div  >{Ready}  </div>  
        </div>
        
      
       
       
    )
}