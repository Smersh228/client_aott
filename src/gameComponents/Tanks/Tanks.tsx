import style from "./Tanks.module.css"
import PZ2 from "../../img/unit_pz2.png"
import T26K from "../../img/unit_t-26k.png"
import { ActionMenu } from "../actionMenu/actionMenu"
import React, { useState,useMemo } from "react"
import { ITank } from "../../types/types"

interface ITankOld {
    stilisation: React.CSSProperties
    onClick?: () => void
 
   
    active: boolean
    action?: any
    activeTeam?: boolean
}
interface IUniTank  {
    stilisation: React.CSSProperties
    onClick?: () => void
    onMove: any
    onLeave: any
    activeTank: number
    setAction?: any,
    setActiveTank:any
    activeTeam?: number
    dataTank:ITank
    activeMenu:boolean
    setBoolMove: any
    boolMove: boolean
    setTank: any
    
}




export const UniversalTank = ({ onLeave,onMove,stilisation, onClick, activeTank, setAction, activeTeam,setActiveTank,dataTank,activeMenu,setBoolMove , boolMove, setTank}: IUniTank) => {
    const [movex,setMoveX] = useState<number>(0)
    const [movey,setMoveY] = useState<number>(0)
  
    return (
        <>
            <div   onMouseLeave={(e) => { setMoveX(0);onMove( 0); setMoveY(0); onLeave(0) }}  onMouseUpCapture={onClick}  style={stilisation} className={activeTeam === dataTank.team ? `${style.active + ' ' + style.tank}` : `${style.tank}`}>
                <img style={stilisation} onMouseMoveCapture={(e) => { setMoveX(e.screenX);onMove( movex); setMoveY(e.screenY); onLeave(movey) ; setBoolMove(true); setTank(dataTank) }} src={dataTank.img} alt={dataTank.name} />
                
                <div className={style.fire}></div>
            </div>
        </>
    )
}