import React, { useState, useMemo, useEffect } from "react";
import img from "../../img/field3.png";
import style from "./Field1.module.css";
import { dataField, mockActions, mockTanks } from "../../mockData/mockData";
import { UniversalTank } from "../../gameComponents/Tanks/Tanks";
import { ICell, IDataField, ITank } from "../../types/types";
import { calcActiveCell } from "../../logicGame/moveLogic";
import { ActionMenu } from "../../gameComponents/actionMenu/actionMenu";
import { ToolTipMenu1 } from "../../gameComponents/actionMenu/toolTipMenu";
import {
  changeCoordinates,

  respawnCoordinates
} from "../../logicGame/changeCoordinates";
import { fireFunc } from "../../logicGame/fireLogic";
import { MovesCount1 } from "./movesCountServer";
import { sectorFire } from "../../logicGame/sectorFireLogic";
import { calcActiveCell1 } from "../../logicGame/calcCells";

import { FC } from "react";
  import { sections } from "../../mockData/mockData";
  import { ICoordinatesTank } from "../../types/types";
 import { ActionMenu1 } from "../../gameComponents/actionMenu/actionMenu1";
  import { createContext } from "vm";
  import { ToolTipUnit } from "../../models/ToolTipUnit";
import { Visible } from "../../logicGame/visible";
import { VisibleReady } from "../../logicGame/visibleReady";
import { table } from "console";
import { VictoryBar } from "../../components/navBar/victoryBar";
import { fireEvent } from "@testing-library/react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { vectorMove } from "../../logicGame/vectorMove";
import { useLocation, useParams } from "react-router-dom";
import { Visible1V } from "../../logicGame/Visible1V";
import userEvent from "@testing-library/user-event";
import { range_nabrosok } from "../../logicGame/rangeLogic";
import { setTimeout } from "timers";

  
  
  
  interface coordinates {
    top: number;
    left: number;
    active?: boolean;
    col: number;
    row: number;
    type: number;
  }
  interface cell {
    row: number;
    col: number;
    type: number;
    id?: number
    visible?:boolean
  }
  
  export interface ICanGo {
    radius: number;
    cells: cell[];
  }
  

  let ddd: ITank[] 


export const CartServer = () => {
  const [jjj, setjjj] = useState<number>(0);
  const [sueta, setsueta] = useState<any>();
  const [jjjj, setjjjj] = useState<boolean>(true);
  const [activedef15, setActivedef15] = useState<boolean>(true);
  const [j, setj] = useState<boolean>(false);
  const [jj, setjj] = useState<boolean>(true);
  const [pul, setpul] = useState<boolean>(false);
  const [boolMove,setBoolMove] = useState<boolean>(false)
  const [movey,setMovey] = useState<number>()
  const [movex,setMovex] = useState<number>()
  const [cell3, setCell3] = useState<ICell>();
  const [cell4, setCell4] = useState<IDataField>();
  const [cell5, setCell5] = useState<ICell>();
  const [j1, setj1] = useState<boolean>();
  const [tank1,settank1] = useState<ITank>()
  const [tank12,settank12] = useState<ITank>()
  const [tank125,settank125] = useState<ITank[]>()


  const f1 = () => { alert("sds"); };
  const [activedef, setActivedef] = useState<ICanGo[] | undefined>();
  const [activedef1, setActivedef1] = useState<ICanGo[] | undefined>();
  const [activedef5, setActivedef5] = useState<any[][] >();
  const [activedef6, setActivedef6] = useState<any[][] >();
  const [activedef7, setActivedef7] = useState<cell[] >();
  const [activedef8, setActivedef8] = useState<number >(0);
  const [count, setCount] = useState<number>(3);
  const [tanks, setTanks] = useState<ITank[]>(mockTanks);
  const [tanks_setevay, setTanksSetevay] = useState<ITank[]>(mockTanks);
  const [tanks_setevay1, setTanksSetevay1] = useState<ITank[]>(mockTanks);
  const [tanks_setevay2, setTanksSetevay2] = useState<ITank[]>();
  const [fire_move_bol,setFire_move_bol] = useState<boolean>(false)
  const [activeTeam, setActiveTeam] = useState(1);
  const [activeTank, setActiveTank] = useState<number>(100); // проброс id танка
  const [attackedTank, setAttackedTank] = useState<number[]>(); // проброс id танка
  console.log(sueta)
  const [actionCommand, setActionCommand] = useState("");
  
  let units3: []
 
 ddd =  sueta === undefined ? undefined  :    sueta.units3 !== false ? sueta.units3 :tanks

  // const [activeMenu, setActiveMenu] = useState<number>()
  const [activeZoneGo, setActiveZoneGo] = useState<ICanGo[] | undefined>();

  console.log(tanks_setevay1)
  console.log(tanks_setevay2)
  const [countStep, setCountStep] = useState<number>(1);
  const [countStepSov, setCountStepSov] = useState<number>(0);
  const [countStepWer, setCountStepWer] = useState<number>(0);
 const loc = useParams()
 const loc1 = useLocation()
 let hh: any ;
  let hh1: any[];
  let ggg:any ;
  let lk5 : {
    id: number;
    row: number;
    col: number;
}[]
  const hff = mockTanks





  useEffect(() => {
    
    const soket = new WebSocket('ws://localhost:5000/')
    soket.onopen = () => {
      
        soket.send(JSON.stringify({
           method:'connect_play_lobby',
           lobby: mockTanks,
           id: loc.id,

        }))

  soket.onmessage = (event) => {

   let     s  = JSON.parse(event.data)
   
    
   }

  }



    
    const respawnTanks = mockTanks.map((tank) => {
      
      tank.coordinates = respawnCoordinates(
        tank.coordinates.row,
        tank.coordinates.col,
        tank.coordinates.id!

      );
   
     
      
      return tank;
       
    });
    let h: ICell 
    let s1: IDataField
   
    
  }, []);
  
  let h3: ITank[] | undefined ;
  useEffect(() => {
    let h: ICell 
    let s1: IDataField
   
   // const ggg = sueta === undefined ? undefined : ddd.map((tank,index,arr) => { h =  {row:tank.coordinates.row,col: tank.coordinates.col, kef:1,id:1 } ; s1 = {name:'1', kef:1,type:tank.coordinates.type, sections:[]} ;  tank.coordinates = changeCoordinates({cell:h,col:s1}  ) ;return tank  })
    
   

  let  defend_units =  ddd === undefined  ?  undefined :  ddd.map((tank,index,arr) => { 
      
        
       
    if ( tank.order === "defend" ) {
   
      tank.afterStepData.defend + dataField[tank.coordinates.col].sections[tank.coordinates.row].kef  > tank.actions.defend ? tank.actions.defend+=1 :  tank.actions.defend=tank.actions.defend ;  
 
 
      }
     
     
    return tank  });
    let hhh: ITank[];
    let hhh1 : number;
    let hhh2 : number;
    
   let s5 = defend_units?.filter((tank) => { return tank.order === "fire" || tank.order === "fire_hard" || tank.order === "attack"  })
 let s34 = []
 console.log( s5)
   if ( defend_units !== undefined ) {
    if (s5!.length >0) {
     for (let i = 0; i < defend_units!.length; i++) {
     
       for (let j = 0; j < s5!.length; j++) {
          
         if (defend_units![i].id === s5![j].tank_attack.id) {
          defend_units[i]!.tank_attack1 = s5![j]
            
             defend_units[i]!.order1 = s5![j].order
           
            defend_units[i]!.tank_attack_number1 = s5![j].tank_attack_number
            console.log(defend_units[i],s5![j])
           s34.push(defend_units![i])
           console.log(s34)
         } else {
          
          s34.push(defend_units![i])
          
          console.log(s34)

         }
       }
     }
    s34 = s34.filter((tank,index,arr) => { return arr.indexOf(tank) === index })
    } else {
      s34.push(...defend_units)
      console.log(s34)
    }
     console.log(s34)
     let fire_units =  ddd === undefined  ?  undefined :    s34?.map((tank,index,arr3) => { 
       
    


      if (tank.order1 === "fire" || tank.order1 === "fire_hard" ) {
        console.log(tank)
        const _newDataForTanksActiveAttacked =   fireFunc(
          tank.tank_attack1,
          tank,
          tank.order1,
          tank.tank_attack_number1
        )   
         
        
      //  arr3[tank.tank_attack.id === 7 ? 3 : tank.tank_attack.id === 8 ? 7 : tank.tank_attack.id === 9 ? 8 : tank.tank_attack.id  ] = _newDataForTanksActiveAttacked![1]
       //  console.log(arr3)
      
         tank =   _newDataForTanksActiveAttacked![1]
         tank.tank_attack = 'none'
          tank.tank_attack1 = 'none'
          tank.order1 = 'none'
         
          tank.tank_attack_number1 = 'none'
          tank.tank_attack_number = 'none'
    
      } 
    
       
    
   
  
     
    
     
    
     
        
      //setTanksSetevay1(s5!)
      
     
    
      
      
     
     
    
    return tank
      } )
    
     console.log(fire_units)
   
   
   
   
   
/* ?*/  
  
   
  


  
     
     let hj = fire_units?.filter((tank) => {return tank.order === 'attack'})
     let jk = hj?.filter((tank) => {  return    tank.tank_attack1 === 'none'   ? undefined : tank.tank_attack1.tank_attack1.id === tank.id })
    let hj1 = jk?.filter((tank) => {return tank.tank_attack_bli = Math.floor(Math.random() * tank.count)}  )
     let hjk = hj1?.splice(hj1.length/2,hj1.length/2)
     let kkk =  jk?.filter((tank) =>  tank.tank_attack_bli >= tank.tank_attack1.tank_attack_bli ?  tank.coordinates = tank.tank_attack1.coordinates  : tank )
     let s35 = []
     console.log(kkk)
     if (kkk!.length >0) {

     
     for (let i = 0; i < fire_units!.length; i++) {
     
      for (let j = 0; j < kkk!.length; j++) {
         
        if (fire_units![i].id === kkk![j].tank_attack.id) {
          fire_units![i]!.tank_attack_bli = kkk![j].tank_attack_bli

          s35.push(fire_units![i])
          console.log(s35)
        } else {
         
          s35.push(fire_units![i])
         
         console.log(s35)

        }
      }}}else {
        s35.push(...fire_units!)
        console.log(s34)
      }
         s35 = s35.filter((tank,index,arr) => { return arr.indexOf(tank) === index })
         console.log(s35)
  let attack_units =  ddd === undefined  ?  undefined : s35?.map((tank,index,arr) => {
       console.log(arr)
      if (tank.order === 'attack'  ) {
        
     h =  {row:tank.coordinates.row,col: tank.coordinates.col, kef:1,id:1 } ; s1 = {name:'1', kef:1,type:tank.coordinates.type, sections:[]} ;  tank.coordinates = changeCoordinates({cell:h,col:s1}  ) ; 
     if ( tank.tank_attack_bli === undefined || tank.tank_attack.tank_attack_bli === undefined 
     ) {
    


      
     const _newDataForTanksActiveAttacked =   fireFunc(
      tank.tank_attack,
      tank,
      tank.order,
      tank.tank_attack_number
    )  
    tank =   _newDataForTanksActiveAttacked![1]
      arr[tank.tank_attack.id].actions.fire.ammunition -= 1
    }
    
    
      }


    
    if ( tank.order1 === "attack"  ) {
     
      h =  {row:tank.coordinates.row,col: tank.coordinates.col, kef:1,id:1 } ; s1 = {name:'1', kef:1,type:tank.coordinates.type, sections:[]} ;  tank.coordinates = changeCoordinates({cell:h,col:s1}  ) ; 

      

      
      const _newDataForTanksActiveAttacked =    fireFunc(
        tank.tank_attack1,
        tank,
        tank.order1,
        tank.tank_attack_number1
      )  
     
      
    //  arr3[tank.tank_attack.id === 7 ? 3 : tank.tank_attack.id === 8 ? 7 : tank.tank_attack.id === 9 ? 8 : tank.tank_attack.id  ] = _newDataForTanksActiveAttacked![1]
     //  console.log(arr3)
    
       tank =   _newDataForTanksActiveAttacked![1]
    
      
      
    } 
  
     
  
  
   
      
    //setTanksSetevay1(s5!)
    
   
  
    
    
   
   
  
  return tank })
  
    
  
 // let sss5 =  ddd === undefined  ?  undefined : ddd.map((tank,index,arr) => { h =  {row:tank.coordinates.row,col: tank.coordinates.col, kef:1,id:1 } ; s1 = {name:'1', kef:1,type:tank.coordinates.type, sections:[]} ;  tank.coordinates = changeCoordinates({cell:h,col:s1}  ) ;return tank  })
 let lk1 = []
 let lk3 = []
 let lk5 = []
 let dfd;
 let hj6 = attack_units?.filter((tank) => {return   tank.order === 'defend' })
 let hj7 = attack_units?.filter((tank) => {return   tank.order === 'move' })
 if (hj6!.length >= 1) {

  for(let i=0; i < hj6!.length;i++) {
   
       for(let j =0; j < hj6![i].defend_sector[1].cells.length;j++) {
        lk1.push( {id:hj6![i].id  ,row:hj6![i].defend_sector[1].cells[j].row, col:hj6![i].defend_sector[1].cells[j].col, attack:hj6![i] })
       
      }
   
  
  }
   
  
 }


 if (hj7!.length >= 1) {

  for(let i=0; i < hj7!.length;i++) {
    
    for(let j =0; j < hj7![i].trajectory.length;j++) {
     lk3.push( {id:hj7![i].id  ,row:hj7![i].trajectory[j].row, col:hj7![i].trajectory[j].col,attack:hj7![i] })
    
    }
    lk3.push({id:hj7![i].id  ,row:hj7![i].coordinates.row, col:hj7![i].coordinates.col, attack:hj7![i]})
    console.log(lk3)
}
    
 }
  console.log(lk3)


  if (lk1.length >0 && lk3.length >0 ) {

     
    for (let i = 0; i < lk1!.length; i++) {
    
     for (let j = 0; j < lk3!.length; j++) {
        
       if (lk1![i].row === lk3![j].row && lk1![i].col === lk3![j].col ) {
       
        
        lk1[i].id = lk3[j].id
        lk3[j].attack =  lk1[i].attack!
        lk5.push(...lk3)
         
       }
      
     }}   }  


      console.log( lk5 )



 let lk = []
 if (hj6!.length >0) {

     
  for (let i = 0; i < attack_units!.length; i++) {
  
   for (let j = 0; j < hj6!.length; j++) {
      
     if (attack_units![i].defend_sector === hj6![j].tank_attack.id) {
      attack_units![i]!.tank_attack_bli = hj6![j].tank_attack_bli

      lk.push(attack_units![i])
       console.log(lk)
     } else {
      
       s35.push(attack_units![i])
      
      console.log(lk)

     }
   }}}else {
    lk.push(...attack_units!)
     console.log(lk)
   }



  let sss1 =  ddd === undefined  ?  undefined : attack_units?.map((tank,index,arr) => {
    if (tank.order === "attack") {
      tank.tank_attack = arr[tank.tank_attack.id]
    } 
  let s = lk5.find((tank1) => { return tank1.id === tank.id ?  tank :undefined})
    console.log(tank)
    if (tank.order === "move") {
      console.log(tank)
      h =  {row:tank.coordinates.row,col: tank.coordinates.col, kef:1,id:1 } ; s1 = {name:'1', kef:1,type:tank.coordinates.type, sections:[]} ;  tank.coordinates = changeCoordinates({cell:h,col:s1}  )
     if (lk5.length > 0 && tank.id === s!.id ) {
      let s3 = []
      for(let i=0;i < 14;i++) {
        s3.push(Math.floor(Math.random() * 6 + 1 ))
 
 
      }
     let jjj3 =   s?.attack.team === 2 ?   Visible1V(s!.attack.coordinates.row,s!.attack.coordinates.col)  :[ {row:0,col:0,type:0}]
           let jjj4 = jjj3.find((cell) => { return s!.col === cell.col && s!.row === cell.row  })
           console.log(jjj3)
       if (jjj4) {

       
        const _newDataForTanksActiveAttacked =   fireFunc(
          s!.attack,
          tank,
          'fire',
           s3
        )  
        tank =   _newDataForTanksActiveAttacked![1]
            }

        h =  {row:s!.row,col: s!.col, kef:1,id:1 } ; s1 = {name:'1', kef:1,type:s!.col % 2 == 0 ? s!.col : s!.col, sections:[]} ;  tank.coordinates = changeCoordinates({cell:h,col:s1}  )
         


       }  










        tank.tank_attack = 'none'
        tank.tank_attack1 = 'none'
        tank.order1 = 'none'
       
        tank.tank_attack_number1 = 'none'
        tank.tank_attack_number = 'none' 
  
  
      
    }
    if (tank.order1 === 'fire' || tank.order === 'fire' || tank.order === 'fire_hard'   || tank.tank_attack.count <= 1 ||  tank.count <= 1  ) {
     
     
      tank.tank_attack = 'none'
      tank.tank_attack1 = 'none'
      tank.order1 = 'none'
       tank.order = 'none'
      tank.tank_attack_number1 = 'none'
      tank.tank_attack_number = 'none'  
       return tank
     
    }
    

    return tank
    
    })
 console.log(tanks_setevay)
 let df = sss1!
 console.log(sss1)
 setTanks ( ddd === undefined ?   sss1!  :   sss1!)
 setTanksSetevay( ddd === undefined ?  sss1!  :   sss1!)
  if ( sss1 !== undefined) {

    
   
   
  }
}
     

    const s =  ddd === undefined  ?  tanks.map((tank) => {
          
         
           
      return  tank.team === 1 ?  Visible1V(tank.coordinates.row,tank.coordinates.col)  :[ {row:0,col:0,type:0}]
    

  }                     )   : ddd.map((tank) => {
        
       
         
          return  tank.team === 1 ?  Visible1V(tank.coordinates.row,tank.coordinates.col)  :[ {row:0,col:0,type:0}]
        
     
     
      
      
      
      
      }                     );
      
     setActivedef5(s)
    }, [ddd]);
  
    useEffect(() => {
      let h: ICell 
      let s1: IDataField


      const s = ddd === undefined  ?  tanks.map((tank) => {
          
         
           
        return  tank.team === 2 ?  Visible1V(tank.coordinates.row,tank.coordinates.col)  :[ {row:0,col:0,type:0}]
      

    }                     ) : ddd.map((tank) => {
          
         
           
            return  tank.team === 2 ?  Visible1V(tank.coordinates.row,tank.coordinates.col)  :[ {row:0,col:0,type:0}]
          
       
       
        
        
        
        
        }                     );
        
       setActivedef6(s)
      }, [ddd]); 

    

    console.log(activedef5,activedef6)
  
 
  // ----
  const sectorfire_nabrosok = (row:number,col:number) => {
    let g1 = []
let h = []
let do1 = 7
    for(let i =0; i < do1;i++) {
      
     
        let d  = {row:row-i-1,col:col+i+i,  } 
        let s =  {row:row-i-2,col:col+i+i+1, }
  g1.push(d,s)
      
      
  g1.splice(do1)
       
       
      console.log(g1)
       
    }
    console.log(g1)
       const sectors_fire_logic1 = (row1:number,col1:number) => {
        let j1;
        let k1;
        let hh = []
              for (let l =0; l < do1-1;l++) {
           

                  k1  = {row: col1 % 2 === 0 ? row1-l :row1-l-1,col1:col1-l-l-1,  }

           

                  j1  = {row: col1 % 2 === 0 ? row1-l-1 : row1-l-1,col1: col1-l-l-2,  }
               
                
                 



              

                

             
               

                

               hh.push(k1,j1)
              }
           
            console.log(activedef5,activedef6) 
hh.splice(do1)
hh.pop()

console.log(hh)
     return hh
       }


       g1.map((cell) => { sectors_fire_logic1(cell.row,cell.col)  })
   console.log(g1)
  }

const visibility_nabrosok = (row:number,col:number) => {
let g = []
let h = []

  for(let i =0; i <= 2;i++) {
  let s =  {row:row-i-1,col:col+i+i+1, visible:dataField[col+i+i].sections[row-i-2].visible}
  let d  = {row:row-i-1,col:col+i+i+2, visible:dataField[col+i+i+1].sections[row-i-2].visible }
   g.push(s,d)
}

for(let j = 0; j < g.length; j++) {

  if (g[j].visible ===false ) {
      h.push(g[j])
      console.log(h)
    break
  } else {
      h.push(g[j])
  }
 
 return h
}



}
let g: ITank[]

  const clickCell = (
    
    cell: ICell,
    col: IDataField,
    e: any,
    radius: number = 1
  ) => {
    
    let s5:any
    if (e.target.className !== style.cell_active) return;
  //  const h = mockTanks.map((tank) =>  { return Visible(cell.row,cell.col,col.type,6 )} )  
 
  let g3 = mockTanks
    
    let j =0
    let _newDataActiveTank = tanks?.find((tank) => tank.id === activeTank);
   
 
  //   setActivedef7(h.flat(3))
     console.log(activedef7)
    console.log("move");
    if (actionCommand === "move"  ) {
 //     console.log(sectorfire_nabrosok(cell.row,cell.col))
    let s = vectorMove(activeZoneGo!,cell,col,_newDataActiveTank!)
      if (_newDataActiveTank && tanks) {
        if (_newDataActiveTank.actions.move - 1 < 0) {
          alert(
            "ты не можешь походить на эту клетку так как не хватает очков движения"
          );
          return;
        }
  /*    _newDataActiveTank.actions.move =
          _newDataActiveTank.actions.move - radius;
        _newDataActiveTank.coordinates = changeCoordinates({
          cell: cell,
          col: col
        });  */
 // cool


 

 const _newDataTanks = tanks.map((tank) => tank.id === activeTank ? _newDataActiveTank : tank

);
const _newDataTanks1 = tanks.map((tank1) => tank1.id === activeTank ? _newDataActiveTank : tank1

);  

setActiveZoneGo(undefined);
setActionCommand(" ");
setActiveTank(0);
// @ts-ignore


// let  s =   tanks.filter((cell:ITank) => cell.team === loc1.state.fraction)
 const soket = new WebSocket('ws://localhost:5000/')
const fff = () => {


return tanks
}

let h:any

 soket.onopen = (hhhh:any) => {
  console.log(tanks_setevay)

  soket.send(JSON.stringify({
    method:'move_order_play',
    order_tank: _newDataActiveTank,
    order_col: cell.col,
    order_row: cell.row,
    order_type: col.type,
    order_vector_move: s,
    order_name: actionCommand,
    tank_active: activeTank,
    lobby: tanks_setevay === undefined ?  mockTanks    : tanks_setevay ,
    id: loc.id,
    fraction: loc1.state.fraction
 }))



 soket.onmessage = (event) => {

  const  s = JSON.parse(event.data)
  h =s
  console.log(s)
  if ( s.id === undefined ) {
    setTanksSetevay(h)
    console.log(h)
  }
 
   
   

  
 


    

 }
    



} 
      


      }
 
      
           

      

        console.log(fire_move_bol)

     
       
      

     
       
     
    } else if (actionCommand === "defend") {
      let _newDataActiveTank = tanks?.find((tank) => tank.id === activeTank);
      console.log(_newDataActiveTank?.coordinates.col);
      const _dataTank = tanks.find((tank) => tank.id === activeTank) || tanks[activeTank - 1];
    
     setActivedef(sectorFire(cell.row, cell.col, col.type, 1, mockTanks[_dataTank.id-1].actions.range, (_newDataActiveTank?.coordinates.row)!, (_newDataActiveTank?.coordinates.col)!));
     
     
      setCell3(cell);
      setCell4(col);
      setActiveZoneGo(undefined);
      setj(true);
      //setActivedef1(sectorFire(cell.row,cell.col,col.type,1,1,_newDataActiveTank?.coordinates.row!,_newDataActiveTank?.coordinates.col!))
      const soket = new WebSocket('ws://localhost:5000/')
      soket.onopen = (hhhh:any) => {
        console.log(tanks_setevay)
      
        soket.send(JSON.stringify({
          method:'defend_order_play',
          order_tank: _newDataActiveTank!,
          order_def_order: "side",
          order_col: cell.col,
          order_row: cell.row,
          order_type: col.type,
          order_name: actionCommand,
          tank_active: activeTank,
          lobby: tanks_setevay === undefined ?  mockTanks    : tanks_setevay ,
          id: loc.id,
          fraction: loc1.state.fraction
       }))
      
      
      
       soket.onmessage = (event) => {
      
        const  s = JSON.parse(event.data)
     
        console.log(s)
        if ( s.id === undefined ) {
          setTanksSetevay(s)
          console.log(s)
        }
      } } }
       else if(actionCommand === mockActions.fire_move ) {
      console.log(33333)
  _newDataActiveTank!.actions.move =
      _newDataActiveTank!.actions.move - radius;
    _newDataActiveTank!.coordinates = changeCoordinates({
      cell: cell,
      col: col
    }); 
 //   _newDataActiveTank!.coordinates.col = cell.col
  //  _newDataActiveTank!.coordinates.row = cell.row
   // _newDataActiveTank!.order = actionCommand
    if (_newDataActiveTank && tanks) {
        let c =   {row: cell.row,col: cell.col, kef: 1, id: 1 }
        let s =     {name:"1",kef:1,type:1,sections:[c]}

        console.log(33333)
      





      
   setFire_move_bol(true)
   const _dataTank = tanks.find((tank) => tank.id === activeTank) || tanks[activeTank - 1];
   console.log(_dataTank)
   const { id, row, col, type }: any = _dataTank?.coordinates;

   const activeZone = calcActiveCell1(row, col, type, actionCommand === mockActions.attack ? 2 :mockTanks[activeTank-1].actions.range!);
   let _coordinateAllTanks: {
     row: number;
     col: number;
     team: number;
     id: number;
   }[] = [];
   tanks_setevay.map((tank) => _coordinateAllTanks.push({
     row: tank.coordinates.row,
     col: tank.coordinates.col,
     team: tank.team,
     id: tank.id,
   })
   );
   let truthTanksAttacked: {
     row: number;
     col: number;
     team: number;
     id: number;
   }[] = [];

   const onCellForFire = activeZone.map((radius) => {
     let unitsCells = radius.cells.filter((cell) => {
       // const _coordinates = { row: cell.row, col: cell.col }
       truthTanksAttacked.push(
         ..._coordinateAllTanks.filter(
           (coord) => coord.col === cell.col &&
             coord.row === cell.row &&
             activeTeam !== coord.team
         )
       );

       const _returnedBooleanCell = _coordinateAllTanks.filter(
         (coord) => coord.col === cell.col &&
           coord.row === cell.row &&
           activeTeam !== coord.team
       );
       return _returnedBooleanCell.length > 0;
     });
     // console.log(test3);
     radius.cells = unitsCells;
     return radius;
   
   }); // нужно truthTanksAttacked.push
   setAttackedTank(truthTanksAttacked.map((coord) => coord.id))
  
   
      
   setActiveZoneGo(undefined);
  //setActionCommand(" ");

  
  }
 }
  };
  //------
  const brokeCommand = () => {

    setActiveZoneGo(undefined);
   
    setAttackedTank([]);
  };
  //Понимание комманд при нажатии в меню
  useMemo(() => {
    console.log("useMemo" + actionCommand);
      
      
    setAttackedTank([0]);
    const _dataTank = tanks.find((tank) => tank.id === activeTank) || tanks[activeTank - 1];

    let h = 0
    setActiveZoneGo(undefined);
    if (actionCommand === mockActions.move|| actionCommand === mockActions.fire_move) {
      //@ts-ignore
      if (_dataTank.actions.move <= 0) {
        alert("у этого юнита нету ходов");
        // setActionCommand(" ")
        return;
      }


     
      const { id, row, col, type }: any = _dataTank.coordinates;
      setActiveZoneGo(calcActiveCell(row, col, type, 1, _dataTank.actions.move, id, id)); //_dataTank.actions.move
      
    }
    if (actionCommand === mockActions.fire ||
      actionCommand === mockActions.fire_hard ||  actionCommand === mockActions.attack  ) {
       
      if (_dataTank.actions.fire.ammunition < 1) {
        alert("патроны на минусе");
        setActionCommand(" ");
        return;
      }
      const { id, row, col, type }: any = _dataTank?.coordinates;
    
      const activeZone = calcActiveCell1(row, col, type, actionCommand === mockActions.attack ? 2 :mockTanks[activeTank-1].actions.range!);
      let _coordinateAllTanks: {
        row: number;
        col: number;
        team: number;
        id: number;
      }[] = [];
      tanks.map((tank) => _coordinateAllTanks.push({
        row: tank.coordinates.row,
        col: tank.coordinates.col,
        team: tank.team,
        id: tank.id,
      })
      );
      let truthTanksAttacked: {
        row: number;
        col: number;
        team: number;
        id: number;
      }[] = [];

      const onCellForFire = activeZone.map((radius) => {
        let unitsCells = radius.cells.filter((cell) => {
          // const _coordinates = { row: cell.row, col: cell.col }
          truthTanksAttacked.push(
            ..._coordinateAllTanks.filter(
              (coord) => coord.col === cell.col &&
                coord.row === cell.row &&
                activeTeam !== coord.team
            )
          );

          const _returnedBooleanCell = _coordinateAllTanks.filter(
            (coord) => coord.col === cell.col &&
              coord.row === cell.row &&
              activeTeam !== coord.team
          );
          return _returnedBooleanCell.length > 0;
        });
        // console.log(test3);
        radius.cells = unitsCells;
        return radius;
      }); // нужно truthTanksAttacked.push
      setAttackedTank(truthTanksAttacked.map((coord) => coord.id));
      console.log(truthTanksAttacked)
    }
    if (actionCommand === mockActions.defend) {
      const _newDataActiveTank = tanks.find((tank) => tank.id === activeTank) || tanks[activeTank - 1];
      if (_newDataActiveTank.actions.move !== _newDataActiveTank.afterStepData.move) {
        alert('если походил то ты не можешь идти в защиту. либо сваливай либо обороняйся воин');
        return;
      } 
      
      //   if (
      //    _newDataActiveTank.actions.defend ===
      //   _newDataActiveTank.afterStepData.defend + 1
      //  ) {
      //   alert("не имеет смысла идти в защиту. у тебя максималка");
      //   return;
      // }
      console.log(_dataTank.coordinates.id!);
          setActivedef15( true)
          setActivedef1(undefined)
          
          
      // _newDataActiveTank.afterStepData.defend = countStep;
      // _newDataActiveTank.actions.defend = _newDataActiveTank.actions.defend + 3;
      // _newDataActiveTank.actions.fire.ammunition = 0;
      // _newDataActiveTank.actions.move = 0;

      //setj(true)
      setActiveZoneGo(calcActiveCell1(_dataTank.coordinates.row, _dataTank.coordinates.col, _dataTank.coordinates.type));



    }
    // setActionCommand(" ");
  }, [actionCommand]);
  //
  const clickDef = (
    cell: ICell,
    col: IDataField,
    e: any,
    radius: number = 1) => {
    let _newDataActiveTank = tanks?.find((tank) => tank.id === activeTank);
    console.log(_newDataActiveTank?.coordinates.col);
    console.log(cell3);
    const tankRow = (_newDataActiveTank?.coordinates.row)!;
    const tankCol = (_newDataActiveTank?.coordinates.col)!;
    console.log(cell3!.row === tankRow + 1);
    if (cell3!.col === tankCol + 1) {

      setActivedef1(sectorFire(cell3!.row, cell3!.col, cell4!.type, 1, (cell.col + 1) - cell3!.col, (_newDataActiveTank?.coordinates.row)!, (_newDataActiveTank?.coordinates.col)!));

    } else if (cell3!.col === tankCol - 1) {
      setActivedef1(sectorFire(cell3!.row, cell3!.col, cell4!.type, 1, cell3!.col - (cell.col - 1), (_newDataActiveTank?.coordinates.row)!, (_newDataActiveTank?.coordinates.col)!));
      _newDataActiveTank!.defend_sector = activedef1
    } else if (cell3!.row === tankRow + 1) {
      setActivedef1(sectorFire(cell3!.row, cell3!.col, cell4!.type, 1, (cell.row + 1) - cell3!.row, (_newDataActiveTank?.coordinates.row)!, (_newDataActiveTank?.coordinates.col)!));
      _newDataActiveTank!.defend_sector = activedef1
    } else if (cell3!.row === tankRow - 1) {
      setActivedef1(sectorFire(cell3!.row, cell3!.col, cell4!.type, 1, cell3!.row - (cell.row - 1), (_newDataActiveTank?.coordinates.row)!, (_newDataActiveTank?.coordinates.col)!));
     
    }
    let s = activedef1
   
    const soket = new WebSocket('ws://localhost:5000/')
    soket.onopen = (hhhh:any) => {
      console.log(tanks_setevay)
    
      soket.send(JSON.stringify({
        method:'defend_order_play',
        order_tank: _newDataActiveTank!,
        order_def_order: "sector",
        order_def_mas: activedef1!,
        order_name: actionCommand,
        tank_active: activeTank,
        lobby: tanks_setevay === undefined ?  mockTanks    : tanks_setevay ,
        id: loc.id,
        fraction: loc1.state.fraction
     }))
    
    
    
     soket.onmessage = (event) => {
    
      const  s = JSON.parse(event.data)
   
      console.log(s)
      if ( s.id === undefined ) {
        setTanksSetevay(s)
        console.log(s)
      }
    } } 




    
    console.log(actionCommand)
    console.log(_newDataActiveTank)
    console.log(_newDataActiveTank?.coordinates.row, _newDataActiveTank?.coordinates.col);
    //jjj
  };




  const clickDef1 = () => {
    const c = dataField.map((cell) => cell.sections.map((cell) => cell));

    return c;
  };

  const clickDef2 = () => {


    return;
  };

  const cageСapacity = (tankid: number, tankid1: number) => {
    const cage = activeZoneGo?.find((cell) => cell.cells.find((cell) => cell.col === tankid && cell.row === tankid1));


    return cage;
  };

  const cageFull = (tankid: number, tankid1: ITank) => {

    const res = ddd === undefined ?   tanks.filter((tank) => tank.coordinates.col === tankid1.coordinates.col && tank.coordinates.row === tankid1.coordinates.row)  :  ddd.filter((tank) => tank.coordinates.col === tankid1.coordinates.col && tank.coordinates.row === tankid1.coordinates.row);
  
    const res1 = res.filter((tanks1) => tanks1);
    const res2 = res1.length < 2;

    return res2;

  };

  const cageFull1 = (tankid: number, tankid1: ICell) => {

    if (actionCommand !== 'defend' ) { 
      const res =  ddd === undefined ?  tanks.filter((tank) => tank.coordinates.col === tankid1.col && tank.coordinates.row === tankid1.row)  : ddd.filter((tank) => tank.coordinates.col === tankid1.col && tank.coordinates.row === tankid1.row);
      const g = res.find((tanks12) => tanks12.team !== activeTeam)
    let h = activedef6?.find((cell3) =>  cell3.find((cell5) => cell5.col === g?.coordinates.col && cell5.row === g?.coordinates.row ) )
    let h3 = activedef5?.find((cell3) =>  cell3.find((cell5) => cell5.col === g?.coordinates.col && cell5.row === g?.coordinates.row ) )
    console.log(h )
     let gg = res.filter((cell) => { return cell.team !== tanks[activeTank-1].team})
     
   
     
     //activeSell5 && activeTeam === 2 ||  activeSell4 && activeTeam === 1 || activeTeam === g!.team 
      const res2 =  ( !h && activeTeam === 2 ||  !h3 && activeTeam === 1   || activeTeam === g?.team )    &&  res.length <= 2;
      
  
      return res2;
  
  
    }   else {
  
  
      return true
    }
  };


  const findTank = (tankid: number, tankid1: ITank) => {
    const res =  ddd === undefined ?  tanks.filter((tank) => tank.coordinates.col === tankid1.coordinates.col && tank.coordinates.row === tankid1.coordinates.row)    :   ddd.filter((tank) => tank.coordinates.col === tankid1.coordinates.col && tank.coordinates.row === tankid1.coordinates.row);
    const res1 = res.find(tank => tank === res[0]);


    return res1;
  };
  const styleUnit = (tankid: number, tankid1: ITank) => {

    const res =  ddd === undefined ?  tanks.filter((tank) => tank.coordinates.col === tankid1.coordinates.col && tank.coordinates.row === tankid1.coordinates.row)    :   ddd.filter((tank) => tank.coordinates.col === tankid1.coordinates.col && tank.coordinates.row === tankid1.coordinates.row);
    const res1 = res!.filter((tanks1) => tanks1);
    const res2 = [res1[0], res[1], res1[2]];
    
    let left = 2;
    let right = -2;

    if (res1.length === 3) {
      if (res2[1] && res2[1]) {
        res2[1].coordinates.left = 0 + (7.3 * (res2[1].coordinates.col - 1) - 1);

        res2[1].coordinates.top = res2[1].coordinates.type === 1 ? 1 + (12.5 * (res2[1].coordinates.row - 1.03) + 5) : 6.5 + (12.5 * (res2[1].coordinates.row - 1) + 5);
        res2[0].coordinates.left = 0 + (7.3 * (res2[0].coordinates.col - 1) + 3);

        res2[0].coordinates.top = res2[0].coordinates.type === 1 ? 1 + (12.5 * (res2[0].coordinates.row - 1) + 4) : 6.5 + (12.5 * (res2[0].coordinates.row - 1) + 4);

      }
      if (res2[2] && res2[2]) {
        res2[2].coordinates.left = 0 + (7.3 * (res2[2].coordinates.col - 1));

        res2[2].coordinates.top = res2[2].coordinates.type === 1 ? 1 + (12.5 * (res2[2].coordinates.row - 1.1)) : 6.5 + (12.5 * (res2[2].coordinates.row - 1.1));
      }
    } else if (res1.length === 2) {
      res2[1].coordinates.left = 0 + (7.3 * (res2[1].coordinates.col - 1.03) - 1);

      res2[1].coordinates.top = res2[1].coordinates.type === 1 ? 1 + (12.5 * (res2[1].coordinates.row - 1) + 4) : 6.5 + (12.5 * (res2[1].coordinates.row - 1) + 4);



      res2[0].coordinates.left = 0 + (7.3 * (res2[0].coordinates.col - 1.03) - 1);

      res2[0].coordinates.top = res2[0].coordinates.type === 1 ? 1 + (12.5 * (res2[0].coordinates.row - 1) - 1.5) : 6.5 + (12.5 * (res2[0].coordinates.row - 1) - 1.5);
   

    } else if (res1.length === 1) {

      res2[0].coordinates.left = 0 + (7.3 * (res2[0].coordinates.col - 1) - 3);

      res2[0].coordinates.top = res2[0].coordinates.type === 1 ? 1 + (12.5 * (res2[0].coordinates.row - 1)) : 6.5 + (13 * (res2[0].coordinates.row - 1));
    }








    

    return res2;

  };






  const findAttackedTank = (tankId: number) => {
    const _truthId = attackedTank?.find((num) => tankId === num);
        
    return _truthId  ;
  };
  const clickFire = (tankProps: ITank) => {
    cageСapacity(tankProps.coordinates.col, tankProps.coordinates.row);
  if (actionCommand === mockActions.fire  || actionCommand === mockActions.fire_hard || actionCommand === mockActions.fire_move )   { let _newDataActiveTank = tanks.find((tank) => tank.id === activeTank) || tanks[activeTank - 1];
    console.log("fire");
    let s = []
     for(let i=0;i < 14;i++) {
       s.push(Math.floor(Math.random() * 6 + 1 ))


     }
    
   /* const _newDataForTanksActiveAttacked = fireFunc(
      _newDataActiveTank,
      tankProps,
      actionCommand
    ); */
   
    const soket = new WebSocket('ws://localhost:5000/')
    soket.onopen = (hhhh:any) => {
      console.log(tanks_setevay)
       
      soket.send(JSON.stringify({
        method:'fire_order_play',
        order_tank:  _newDataActiveTank,
        tank_attack_number:s ,//  
        order_tank_attack: tankProps,
        order_name: actionCommand,
        tank_active: activeTank,
        lobby: tanks_setevay === undefined ?  mockTanks    : tanks_setevay ,
        id: loc.id,
        fraction: loc1.state.fraction
     }))
    
    
    
     soket.onmessage = (event) => {
    
      const  s = JSON.parse(event.data)
   
      console.log(s)
      if ( s.id === undefined ) {
        setTanksSetevay(s)
        console.log(s)
      }
     }}



 //   _newDataActiveTank!.tank_attack = tankProps
   // _newDataActiveTank!.order = actionCommand
    console.log(_newDataActiveTank)
    
   /* const _newDataTanks = tanks.map((tank) => {
      return tank.id === activeTank
        ? //@ts-ignore
        _newDataForTanksActiveAttacked[0]
        : tank.id === tankProps.id
          ? //@ts-ignore
          _newDataForTanksActiveAttacked[1]
          : tank;

       } );
        */
    //@ts-ignore

    setAttackedTank([0]);
    setActiveTank(0);
    setActionCommand(" "); 
      
      } else if (actionCommand === mockActions.attack) {
        console.log(mockTanks)
        let s3 = []
        for(let i=0;i < 14;i++) {
          s3.push(Math.floor(Math.random() * 6 + 1 ))
   
   
        }
        let _newDataActiveTank = tanks_setevay.find((tank) => tank.id === activeTank) || tanks[activeTank - 1];
        _newDataActiveTank.order = actionCommand

      let c =   {row: tankProps.coordinates.row,col: tankProps.coordinates.col, kef: 1, id: 1 }
      let s =     {name:"1",kef:1,type:tankProps.coordinates.type,sections:[c]}
       /* _newDataActiveTank.coordinates = changeCoordinates({
          cell: c,
          col: s,
        });*/
        const soket = new WebSocket('ws://localhost:5000/')
        soket.onopen = () => {
          soket.send(JSON.stringify({
            method:'attack_order_play',
            order_tank:  _newDataActiveTank,
            order_tank_attack: tankProps,
            tank_attack_number:s3 ,
            order_row: c,
            order_col: s,
            order_name: actionCommand,
            tank_active: activeTank,
            lobby: tanks_setevay === undefined ?  mockTanks    : tanks_setevay ,
            id: loc.id,
            fraction: loc1.state.fraction
         }))
        }
       
      
      
      
       soket.onmessage = (event) => {
      
        const  s = JSON.parse(event.data)
     
        console.log(s)
        if ( s.id === undefined ) {
          setTanksSetevay(s)
          console.log(s)
        }
       }
       
       

     
 /*   const _newDataForTanksActiveAttacked = fireFunc(
      _newDataActiveTank,
      tankProps,
      actionCommand
    );  */
   
    setAttackedTank([0]);
    setActiveTank(0);
    setActionCommand(" "); 
        
           


      }



    
  };
  const openMenu = (tank: ITank) => {
    console.log(tank.coordinates.id!);
    setActivedef1(undefined)
    setActivedef(undefined)
    setActivedef15(false)

    setjjjj(true);

    setActiveZoneGo(undefined);
    setAttackedTank([0]);
    setActionCommand(" ");
    if (tank.team !== loc1.state.fraction) return;
    // && tank.team !== activeTeam
    if (activeTank === tank.id) {
      setActiveTank(0);
      // alert("читаури запрещены");
    } else {
      setActiveTank(tank.id);
    }
  };

  const moveMenu = (tank: ITank) => {
    
    if (tank.team !== activeTeam) return;
    // && tank.team !== activeTeam
    if (activeTank === tank.id) {
      setActiveTank(0);
      // alert("читаури запрещены");
    } else {
      setActiveTank(tank.id);
    }
  };

  const nextStep = () => {
   
    setActiveZoneGo(undefined);
    setAttackedTank([0]);
    setActionCommand(" ");
    setActiveTank(0);
  };
   
  return (
  
    <div className={style.field}>
      
      <div className={style.blockChoicePLayer}>
     
        <div
          onClick={() => setActiveTank(0)}
          className={style.blockChoicePLayer_item}
        >
      
        </div>
        <div> <VictoryBar countMoves={countStep}  countMovesSov={countStepSov}  countMovesWer={countStepWer} dataTank={tanks}    /></div>
        <MovesCount1
          countSov={countStepSov}
          countWer={countStepWer}
          setCountSov={setCountStepSov}
          setCountWer={setCountStepWer}
          onClickAdd={nextStep}
          setActiveTeam={setActiveTeam}
          activeTeam={loc1.state.fraction}
          setDataTanks={setTanks}
          VisibleReady={setActivedef8}
          dataTank={tanks}
          count={countStep}
          setCount={setCountStep} 
          msg={ tanks_setevay!   }
          fraction={ggg}
          setAny={setsueta}
          />
          
           
        <div
          onClick={() => brokeCommand()}
          className={style.blockChoicePLayer_item}
        >
         
        </div>
      
      </div>

      <div className={style.field_fight}>

        {dataField.map((col, index) => {

          return (

            <div
              key={index}
              style={{
                zIndex: "1",
                transform: `translate(${col.kef * -19}%, ${(col.type - 1) * 6}%)`,
              }}
              className={style.col}
            >

              {col.sections.map((cell) => {
                const activeSell = activeZoneGo?.find((radius) => radius.cells.find(
                  (item) => item.col === cell.col && item.row === cell.row
                )
                );
                const activeSell1 = activedef?.find((radius) => radius.cells.find(
                  (item) => item.col === cell.col && item.row === cell.row

                )
                );
                const activeSell2 = activedef1?.find((radius) => radius.cells.find(
                  (item) => item.col === cell.col && item.row === cell.row

                )
                );

                const activeSell3 = activedef5?.find((radius) => radius.find(
                  (item:cell) => item.col === cell.col && item.row === cell.row


                  )
              
                );

                const cell1 = cell;

                return (

                  <div onClick={(e) => { setActiveZoneGo(undefined); setActiveZoneGo(undefined); setjjjj(false); }}
                    key={cell.id}
                    style={{ position: "relative", }}
                    className={style.cell}


                  >

                    <div onClick={(e) => clickCell(cell, col, e, cell.kef || 0.5)} className={activeSell && (cageFull1(1, cell) || actionCommand === 'defend') ? style.cell_active : style.cell_disactive}> </div>



                    <img style={{ zIndex: "1" }} className={style.img1} src={cell.img || img} alt="" />

                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                      }}
                    >


                    </div>
                    {activedef?.map((cell) => { return <div onClick={(e) => { clickDef(cell1, col, e, 1); }}><div className={activeSell1 && activedef15 ? style.cell_active : style.cell_disactive}></div></div>; })}
                    {activedef1?.map((cell) => { return <div onDoubleClick={(e)=> {setActivedef15(false) ; setActivedef6(undefined)}} onClick={(e) => { clickDef(cell1, col, e, 1); }}><div className={activeSell2 && activedef15 ? style.cell_def : style.cell_disactive}></div></div>; })}
                    
                  </div>




                );

              })}

            </div>


          );


        })}





     



        { tanks_setevay?.map((tank) => {
          
          const activeSell1 = activedef?.find((radius) => radius.cells.find(
            (item) => item.col === tank.coordinates.col && item.row === tank.coordinates.row
   
          )
          );
          const activeSell2 = activedef1?.find((radius) => radius.cells.find(
            (item) => item.col === tank.coordinates.col && item.row === tank.coordinates.row

          )
          );
         
          const activeSell4 = activedef5?.find((radius) => radius.find(
            (item:cell) => item.row === tank.coordinates.row   && item.col === tank.coordinates.col  

          ))
          const llh = activedef5 && activedef5 ? activedef5[activeTank === 8 || activeTank === 9 ?  activeTank-1  : activeTank] : undefined
          const llh1 = activedef6 && activedef6 ? activedef6[activeTank === 7 ? activeTank-4  : activeTank-1] : undefined
          const activeSell10 = llh?.find((radius) => 
             radius.row === tank.coordinates.row   && radius.col === tank.coordinates.col  

          
          );
        
          const activeSell11 = llh1?.find((radius) =>   radius.row === tank.coordinates.row   && radius.col === tank.coordinates.col )
         
          const activeSell5 = activedef6?.find((radius) => radius.find(
            (item:cell) => item.row === tank.coordinates.row   && item.col === tank.coordinates.col  

          )
          );
         
          
         
          if (cageFull(1, tank)) { } else { styleUnit(1, tank); }
        
          if (tank.count <= 0) return ;
        
          let hueta1 = []
          let d = false
      
         

               if ( boolMove) {
                 
               d = tank1!.id === tank.id 

               }

          return (
 

            <div
            
              style={{
                position: "absolute",
                top: `${tank.coordinates.top}%`,
                left: `${tank.coordinates.left}%`,
                zIndex: "1"
              }}
              key={tank.id}
            >
  
              <div onClick={(e) => 1} className={cageСapacity(tank.coordinates.col, tank.coordinates.row) && findTank(1, tank) ? style.activeFire1 : " "}></div>

              <ToolTipMenu1 visible={  d && boolMove && activeTank !== tank.id ? "flex" : "none"}  tank={tank} posX={movex!} posY={movey!} />
             

              <UniversalTank
                // key={tank.id}
                onClick={() => openMenu(tank)}
                setBoolMove={setBoolMove}
                boolMove={boolMove}
                setTank={settank1}
                dataTank={tank}
                onMove= {setMovex}
                onLeave= {setMovey}
                activeTeam={activeTeam}
                setActiveTank={setActiveTank}
                setAction={setActionCommand}
                activeTank={activeTank}
               
                stilisation={{
                  top: `${tank.coordinates.top}%`,
                  left: `${tank.coordinates.left}%`,
                  width: `${cageFull(1, tank) ? 49 : 40}px`,
                  height: `${cageFull(1, tank) ? 39 : 36}px`,
                  visibility: `${    activeSell5 && loc1.state.fraction  === 2 ||  activeSell4 && loc1.state.fraction  === 1 || loc1.state.fraction  === tank.team  ?  "visible" : "hidden"}`,
                }}
                activeMenu={tank.activeTank}
             
                
                />
              
              <ActionMenu
                setActiveTank={setActiveTank}
                setAction={setActionCommand}
                visible={activeTank === tank.id && jjjj ? "flex" : "none"} />




              <div
                onClick={() => clickFire(tank)}
                style={{
                  top: `${tank.coordinates.top}%`,
                  left: `${tank.coordinates.left}%`,
                  // zIndex:"1"
                }}
                className={  (actionCommand === "fire" || actionCommand === "fire_hard" || actionCommand === "attack" ||actionCommand ===  mockActions.fire_move )  && activeSell11    && activeTeam !== tank.team && findAttackedTank(tank.id)    || ( actionCommand === "fire" || actionCommand === "fire_hard" || actionCommand === "attack" ||actionCommand ===  mockActions.fire_move ) && activeSell10   && activeTank !== 0 && activeTeam !== tank.team && findAttackedTank(tank.id)     ? style.activeFire : " "}
              ></div>
            </div>

          );
        })}



      </div>






















 

  { /*<div className={style.list__tanks}>
        <ol>

         {tanks?.map((tank) => {
                  
            
        return (
              <li key={tank.id}>
                team - {tank.team} , tank - {tank.id}
                <ul>
                  <li>название танка - {tank.name}</li>
                  <li>движения - {tank.actions.move}</li>
                  <li>боеприпасы - {tank.actions.fire.ammunition}</li>
                  {/* @ts-ignore 
                  <li>защита - {tank.actions.defend  }</li>
                  <li>экипаж - {tank.count}</li>
                </ul>
  </li> 
            );
          })}
        </ol>
      </div> */}
    </div> 
  );
};


