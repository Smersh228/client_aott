import { useState, FC } from "react";
import style from "./actionMenu.module.css";
import commandGoImg from "../../img/taskGo.png";
import fire from "../../img/tank_fire.png";
import def from "../../img/defense.png";
import hardF from "../../img/fire_fast.png";
import { ITank } from "../../types/types";
import { dataField } from "../../mockData/mockData";
interface IToolTipMenu1 {
tank:ITank
posX:number
posY:number
visible: string;
}
export const ToolTipMenu1: FC<IToolTipMenu1> = ({
  tank,
  posX,
  posY,
  visible= "none"
}) => {
  let baseDef: number | undefined
  

  const trueCell = dataField[tank.coordinates.col-1].sections[tank.coordinates.row-1].baseDefend?.tanks
  if(trueCell === undefined) {
  baseDef = 0
  
  } else { baseDef = trueCell}

 // const [activeMenu, setActiveMenu] = useState(false);
  // setAction('')
  return (
    <div style={{top:`${posY-210}px`, display: visible,left:`${  posX-100}px`,  }} className={style.menu1}> {tank.name}  Боеприпасы:{tank.actions.fire.ammunition}  Защита:{tank.actions.defend+baseDef }  Численность:{tank.count}</div>
  );
};
