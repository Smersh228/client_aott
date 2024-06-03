import { useState, FC } from "react";
import style from "./actionMenu.module.css";
import commandGoImg from "../../img/taskGo.png";
import fire from "../../img/tank_fire.png";
import def from "../../img/defense.png";
import hardF from "../../img/fire_fast.png";
import { ICanGo } from "../Field/Field";
import { Field } from "../Field/Field";
import { PlayPage } from "../../pages/PlayPage/PLayPage";
import { ActionMenu } from "./actionMenu";
import { ICell, IDataField, ITank } from "../../types/types";
import { sectorFire } from "../../logicGame/sectorFireLogic";
interface IActionMenu1 {
    visible:string
  setAction?: any;
  setRange1: any
  setranges1: any,
  setfunc:any,
  settank:ITank,
  settanks:ITank[],
  activeTank:any,
}

export const ActionMenu1: FC<IActionMenu1> = ({
  visible = "flex",
  setAction,
  setRange1,
  setranges1,
  setfunc,
  settank,
  settanks,
  activeTank,
}) => {
  const [activedef, setActivedef] = useState<ICanGo[] | undefined>()
  const clickDef4 = (
    tank: ITank,
   
    e: any,
    radius: number = 1) => {
      let _newDataActiveTank = settanks?.find((tank) => tank.id === activeTank);
       console.log(_newDataActiveTank?.coordinates.col)
        setActivedef(sectorFire(tank.coordinates.row,tank.coordinates.col,1,1,range,_newDataActiveTank?.coordinates.row!,_newDataActiveTank?.coordinates.col!))
     
    
      
  }



  const [activeMenu, setActiveMenu] = useState<boolean>(true)
  const [activeMenu1, setActiveMenu1] = useState<boolean>(false)
  const [range, setRange] = useState<number>(0);
  // setAction('')
 
  return (
    <div style={{ display: visible }} className={style.menu1}>
    Дальность: {range}  <button className={style.buttons} disabled={range>=13}   onMouseUpCapture={(e)=>  {setRange(range+1); setAction(false);setRange1(range+1);setranges1(true) }}> + </button><button  className={style.buttons} disabled={range<=0}   onMouseUpCapture={(e)=>  {setRange(range-1); setAction(false);setRange1(range-1);setranges1(true) }}> - </button><button className={style.buttons}   onMouseUpCapture={(e) => { setRange1(range);setRange(0);setAction(activeMenu);setranges1(activeMenu1);setfunc(clickDef4(settank,e,1)) }}>готово</button>
    </div>
  );
};
