import { FC, useEffect, useState } from "react";
import img from './786.gif';
import style from "./movescount.module.css";
import { ITank } from "../../types/types";
import { Visible } from "../../logicGame/visible";
import { dataField, tanks } from "../../mockData/mockData";
import { useLocation, useParams } from "react-router-dom";

interface IMoveCount1 {
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
  msg:any[]
  fraction:any
  setAny: any
}

export const MovesCount1: FC<IMoveCount1> = ({ setActiveTeam, activeTeam, setDataTanks, dataTank, count, setCount,onClickAdd, VisibleReady,countWer,countSov,setCountSov,setCountWer,msg, fraction, setAny }) => {
   const [ready1, setReady1] = useState(true);
   const [ready13, setReady13] = useState<boolean>(true);
   const [ready12, setReady12] = useState(true);
   const [countr, setCountr] = useState(0);
   const [countr1, setCountr1] = useState(0);
let s1 = 1
let h: any
console.log(msg)
let location = useParams()
let location11 = useLocation()
let  s = msg.filter((cell) => cell.team === location11.state.fraction)
console.log(s)
console.log(location11.state.fraction)

useEffect(() => {
 

  
  setReady13(true)


  
 
 
      
},[countr1])


const onClick = () => {
  setCountr(countr+1)
  setCount(count+1)
  setReady12(ready12 === true ? false : true)
  const soket = new WebSocket('ws://localhost:5000/')
    soket.onopen = () => {
      if (location11.state.create === true) {
        soket.send(JSON.stringify({
           method:'ready_lobby_play',
           lobby: s ,
           id: location.id,
           ready:  ready13,
           count1: countr,
        }))} else  {
          soket.send(JSON.stringify({
            method:'ready_lobby_play1',
            lobby: s ,
            id: location.id,
            ready:  ready13 ,
            count1: countr,
 
          }))}



        }
      
   soket.onmessage = (event) => {
    let s = JSON.parse(event.data)
    console.log(s)
      h = s
    
      console.log(setAny)
          setTimeout(() => { return h.players[1].ready_play === h.players[0].ready_play ? setCountr1(countr1+1) : undefined  },200)
 

 
      setAny(s)
   }


  console.log(h)
  let ssss: boolean
  setReady13(ready13 ===false  ? true:false)
 
 
  onClickAdd()
  setActiveTeam(location11.state.fraction)

      

     

      
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
        VisibleReady(2)
        setDataTanks(newDataTanks)
        setCountSov(countr)
             if (newDataTanks10 && newDataTanks1.length >= 1  ? newDataTanks1[0].team === 1 : false  ? newDataTanks1[0].team === 1 :false  ){setCountWer(countWer+1);setCountSov(0)}  else if (newDataTanks10 && newDataTanks1.length >= 1  ? newDataTanks1[0].team === 2 : false) {setCountSov(countSov+1);setCountWer(0)} else {setCountSov(0);setCountWer(0)}
             
   
}
  return (
    <div className={style.block}>
     
      <div className={style.count}>номер хода : { ready13! ? countr : countr-1 }</div>
      <div onClick={onClick} className={style.nextTeam}>{   ready13    ?  "Следующий ход"  :  "Ждём игрока..."   }</div>
      <svg className={style.divs}></svg>
    </div>
  );
};
