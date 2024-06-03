import { FC } from "react";
import style from "./victoryBar.module.css"
import { ITank } from "../../types/types";
import { tanks } from "../../mockData/mockData";
import { useLocation, useNavigate } from "react-router-dom";




interface IVitoryBar {
 countMoves:number
 countMovesSov:number
 countMovesWer:number
 dataTank:ITank[]

}





export const VictoryBar: FC<IVitoryBar> = ({ countMoves, countMovesSov, countMovesWer,dataTank }) => {
let s = ""
let s11 = ""
const fdf = useNavigate()
let location1 = useLocation()
const datatanks1 = dataTank.filter((tank) => tank.team === 1).every((tank) => tank.count === 0)
const datatanks2 = dataTank.filter((tank) => tank.team === 2).every((tank) => tank.count === 0)

         if(countMovesSov >= 3 || datatanks1  ) {
          s = "Победа РККА"
          s11 = style.victoryBarSov
         } else if (countMovesWer >= 3 || datatanks2){
            s = "Победа Вермахта"
            s11 = style.victoryBarWer   
               
         } 



    return (
      <div className={ s11 } >  {s} <button onClick={(() => fdf(`/sueta111/main`,{state:location1.state , replace:true}) )} style={{visibility: !s ? 'collapse' : 'visible'}} className={style.end_play}>Покинуть игру</button></div>
    
       
      
      
    );
  };