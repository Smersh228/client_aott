import { FC, useState } from "react";
import style from "./movescount.module.css";
import { ITank } from "../../types/types";
import { Visible } from "../../logicGame/visible";
import { dataField, tanks } from "../../mockData/mockData";

interface IMoveCount {
  setActiveTeam: any;
  activeTeam: number;
  setDataTanks:any
  dataTank:ITank[];
  count:number;
  setCount:any
  countWer:number
  countSov:number
  setCountWer:any
  setCountSov:any
  VisibleReady:any
  onClickAdd:() => void

}

export const MovesCount: FC<IMoveCount> = ({ setActiveTeam, activeTeam, setDataTanks, dataTank, count, setCount,onClickAdd, VisibleReady,countWer,countSov,setCountSov,setCountWer }) => {
  // const [count, setCount] = useState(1);
let s1 = 1

const onClick = () => {
  onClickAdd()
    if(activeTeam === 1) {
        setActiveTeam(2)
    } else {
        setActiveTeam(1)

        setCount(count+1)
        const newDataTanks1 = dataTank.filter((tank) => 
          tank.coordinates.col === 6
          
      )  
   
      const newDataTanks10 = newDataTanks1.every(item => item.team === newDataTanks1[0].team)

      

      let baseDef: number | undefined
  const sueta = dataTank.map((tank) => {const sueta1 = dataField[tank.coordinates.col-1].sections[tank.coordinates.row-1].baseDefend?.tanks 
  
    if(sueta1 === undefined) {
     baseDef = 0 

} else {  baseDef =sueta1}          
  
return baseDef  }  )
  console.log(sueta)
     
       const newDataTanks = dataTank.map((tank) => {
            tank.actions.move = tank.afterStepData.move
            tank.actions.defend = tank.actions.defend  >= tank.afterStepData.defend + sueta[tank.id-1] ? tank.actions.defend : tank.afterStepData.defend 
            tank.activeTank = true
            return tank
        })
        VisibleReady(count)
        setDataTanks(newDataTanks)
       
             if (newDataTanks10 && newDataTanks1.length >= 1  ? newDataTanks1[0].team === 1 : false  ? newDataTanks1[0].team === 1 :false  ){setCountWer(countWer+1);setCountSov(0)}  else if (newDataTanks10 && newDataTanks1.length >= 1  ? newDataTanks1[0].team === 2 : false) {setCountSov(countSov+1);setCountWer(0)} else {setCountSov(0);setCountWer(0)}
             
    }
}
  return (
    <div className={style.block}>
      <div className={style.activeTeam}>ход команды номер {activeTeam}</div>
      <div className={style.count}>ход номер : {count}</div>
      <div onClick={onClick} className={style.nextTeam}>Следующий ход</div>
    </div>
  );
};
