import React, { useState, useMemo, useEffect } from "react";
import img from "../../img/field3.png";
import style from "./Field.module.css";
import { dataField, mockActions, mockTanks } from "../../mockData/mockData";
import { UniversalTank } from "../Tanks/Tanks";
import { ICell, IDataField, ITank } from "../../types/types";
import { calcActiveCell } from "../../logicGame/moveLogic";
import { ActionMenu } from "../actionMenu/actionMenu";
import { ToolTipMenu1 } from "../actionMenu/toolTipMenu";
import {
  changeCoordinates,

  respawnCoordinates
} from "../../logicGame/changeCoordinates";
import { fireFunc } from "../../logicGame/fireLogic";
import { MovesCount } from "../movesCount/movesCount";
import { sectorFire } from "../../logicGame/sectorFireLogic";
import { calcActiveCell1 } from "../../logicGame/calcCells";

import { FC } from "react";
  import { sections } from "../../mockData/mockData";
  import { ICoordinatesTank } from "../../types/types";
  import { ActionMenu1 } from "../actionMenu/actionMenu1";
  import { createContext } from "vm";
  import { ToolTipUnit } from "../../models/ToolTipUnit";
import { Visible } from "../../logicGame/visible";
import { VisibleReady } from "../../logicGame/visibleReady";
import { table } from "console";
import { VictoryBar } from "../../components/navBar/victoryBar";
import { fireEvent } from "@testing-library/react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { vectorMove } from "../../logicGame/vectorMove";
  
  
  
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
  


export const Field = () => {
  const [jjj, setjjj] = useState<number>(0);
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
  
  


  const f1 = () => { alert("sds"); };
  const [activedef, setActivedef] = useState<ICanGo[] | undefined>();
  const [activedef1, setActivedef1] = useState<ICanGo[] | undefined>();
  const [activedef5, setActivedef5] = useState<cell[][] >();
  const [activedef6, setActivedef6] = useState<cell[][] >();
  const [activedef7, setActivedef7] = useState<cell[] >();
  const [activedef8, setActivedef8] = useState<number >(0);
  const [count, setCount] = useState<number>(3);
  const [tanks, setTanks] = useState<ITank[]>(mockTanks);
  const [fire_move_bol,setFire_move_bol] = useState<boolean>(false)
  const [activeTeam, setActiveTeam] = useState(1);
  const [activeTank, setActiveTank] = useState<number>(100); // проброс id танка
  const [attackedTank, setAttackedTank] = useState<number[]>(); // проброс id танка

  const [actionCommand, setActionCommand] = useState("");

  // const [activeMenu, setActiveMenu] = useState<number>()
  const [activeZoneGo, setActiveZoneGo] = useState<ICanGo[] | undefined>();

  const [countStep, setCountStep] = useState<number>(1);
  const [countStepSov, setCountStepSov] = useState<number>(0);
  const [countStepWer, setCountStepWer] = useState<number>(0);
 
  useEffect(() => {
    const respawnTanks = mockTanks.map((tank) => {
      
      tank.coordinates = respawnCoordinates(
        tank.coordinates.row,
        tank.coordinates.col,
        tank.coordinates.id!

      );
   
     
      
      return tank;
      
    });
    
    setTanks(respawnTanks);
    
  }, []);
  

  useEffect(() => {
    const s =  mockTanks.map((tank) => {
        
       
         
          return  tank.team === 1 ?  Visible(tank.coordinates.row,tank.coordinates.col,tank.coordinates.type,6)  :[ {row:0,col:0,type:0}]
        
     
     
      
      
      
      
      }                     );
      
     setActivedef5(s)
    }, [activedef8]);
  
    useEffect(() => {
      const s =  mockTanks.map((tank) => {
          
        console.log(Visible(tank.coordinates.row,tank.coordinates.col,tank.coordinates.type,6))
           
            return  tank.team === 2 ?  Visible(tank.coordinates.row,tank.coordinates.col,tank.coordinates.type,6)  :[ {row:0,col:0,type:0}]
          
        
       
        
        
        
        
        }                     );
        
       setActivedef6(s)
      }, [activedef8]); 

    
useEffect(() => {
  const  socket  = new WebSocket('ws://localhost:5000')
   socket.onopen = () => {

     let msg;
     socket.onmessage = (event) => {
          msg = JSON.parse(event.data)
          console.log(11111)


     }


   }


})
    
  
 
  // ----
  const clickCell = (
    cell: ICell,
    col: IDataField,
    e: any,
    radius: number = 1
  ) => {
    
    
    if (e.target.className !== style.cell_active) return;
    const h = mockTanks.map((tank) =>  { return Visible(cell.row,cell.col,col.type,6 )} )   
    let _newDataActiveTank = tanks?.find((tank) => tank.id === activeTank);
    setActivedef7(h.flat(3))
     console.log(activedef7)
    console.log("move");
    if (actionCommand === "move"  ) {
     vectorMove(activeZoneGo!,cell,col,_newDataActiveTank!)
      if (_newDataActiveTank && tanks) {
        if (_newDataActiveTank.actions.move - 1 < 0) {
          alert(
            "ты не можешь походить на эту клетку так как не хватает очков движения"
          );
          return;
        }
        _newDataActiveTank.actions.move =
          _newDataActiveTank.actions.move - radius;
        _newDataActiveTank.coordinates = changeCoordinates({
          cell: cell,
          col: col
        });
        const _newDataTanks = tanks.map((tank) => tank.id === activeTank ? _newDataActiveTank : tank
        ); // cool
      
        // @ts-ignore
       
        setTanks(_newDataTanks);
      
        setActiveZoneGo(undefined);
        setActionCommand(" ");
      }
      setActiveTank(0);
     
           



        console.log(fire_move_bol)

             
       
      

       
      return _newDataActiveTank
     
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
    }   else if(actionCommand === mockActions.fire_move ) {
     
      _newDataActiveTank!.actions.move =
      _newDataActiveTank!.actions.move - radius;
    _newDataActiveTank!.coordinates = changeCoordinates({
      cell: cell,
      col: col
    });
    if (_newDataActiveTank && tanks) {
        let c =   {row: cell.row,col: cell.col, kef: 1, id: 1 }
        let s =     {name:"1",kef:1,type:1,sections:[c]}


      





      console.log(33333)
   setFire_move_bol(true)
   const _dataTank = tanks.find((tank) => tank.id === activeTank) || tanks[activeTank - 1];
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
          setActivedef15(true)
      // _newDataActiveTank.afterStepData.defend = countStep;
      // _newDataActiveTank.actions.defend = _newDataActiveTank.actions.defend + 3;
      // _newDataActiveTank.actions.fire.ammunition = 0;
      // _newDataActiveTank.actions.move = 0;
      _newDataActiveTank.actions.defend += 1;
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
    } else if (cell3!.row === tankRow + 1) {
      setActivedef1(sectorFire(cell3!.row, cell3!.col, cell4!.type, 1, (cell.row + 1) - cell3!.row, (_newDataActiveTank?.coordinates.row)!, (_newDataActiveTank?.coordinates.col)!));
    } else if (cell3!.row === tankRow - 1) {
      setActivedef1(sectorFire(cell3!.row, cell3!.col, cell4!.type, 1, cell3!.row - (cell.row - 1), (_newDataActiveTank?.coordinates.row)!, (_newDataActiveTank?.coordinates.col)!));
    }



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

    const res = mockTanks.filter((tank) => tank.coordinates.col === tankid1.coordinates.col && tank.coordinates.row === tankid1.coordinates.row);
  
    const res1 = res.filter((tanks1) => tanks1);
    const res2 = res1.length < 2;

    return res2;

  };

  const cageFull1 = (tankid: number, tankid1: ICell) => {

    const res = mockTanks.filter((tank) => tank.coordinates.col === tankid1.col && tank.coordinates.row === tankid1.row);
    const res2 = res.length <= 2;
    



    return res2;

  };


  const findTank = (tankid: number, tankid1: ITank) => {
    const res = mockTanks.filter((tank) => tank.coordinates.col === tankid1.coordinates.col && tank.coordinates.row === tankid1.coordinates.row);
    const res1 = res.find(tank => tank === res[0]);


    return res1;
  };
  const styleUnit = (tankid: number, tankid1: ITank) => {

    const res = mockTanks.filter((tank) => tank.coordinates.col === tankid1.coordinates.col && tank.coordinates.row === tankid1.coordinates.row);
    const res1 = res.filter((tanks1) => tanks1);
    const res2 = [res1[0], res[1], res1[2]];
    
    let left = 2;
    let right = -2;

    if (res1.length === 3) {
      if (res2[1] && res2[1]) {
        res2[1].coordinates.left = 0 + (7.3 * (res2[1].coordinates.col - 1) - 1);

        res2[1].coordinates.top = res2[1].coordinates.type === 1 ? 1 + (12.5 * (res2[1].coordinates.row - 1) + 5) : 6.5 + (12.5 * (res2[1].coordinates.row - 1) + 5);
        res2[0].coordinates.left = 0 + (7.3 * (res2[0].coordinates.col - 1) + 3);

        res2[0].coordinates.top = res2[0].coordinates.type === 1 ? 1 + (12.5 * (res2[0].coordinates.row - 1) + 4) : 6.5 + (12.5 * (res2[0].coordinates.row - 1) + 4);

      }
      if (res2[2] && res2[2]) {
        res2[2].coordinates.left = 0 + (7.3 * (res2[2].coordinates.col - 1));

        res2[2].coordinates.top = res2[2].coordinates.type === 1 ? 1 + (12.5 * (res2[2].coordinates.row - 1)) : 6.5 + (12.5 * (res2[2].coordinates.row - 1));
      }
    } else if (res1.length === 2) {
      res2[1].coordinates.left = 0 + (7.3 * (res2[1].coordinates.col - 1) - 1);

      res2[1].coordinates.top = res2[1].coordinates.type === 1 ? 1 + (12.5 * (res2[1].coordinates.row - 1) + 4) : 6.5 + (12.5 * (res2[1].coordinates.row - 1) + 4);



      res2[0].coordinates.left = 0 + (7.3 * (res2[0].coordinates.col - 1) - 1);

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
    const _newDataForTanksActiveAttacked = fireFunc(
      _newDataActiveTank,
      tankProps,
      actionCommand
    );
    const _newDataTanks = tanks.map((tank) => {
      return tank.id === activeTank
        ? //@ts-ignore
        _newDataForTanksActiveAttacked[0]
        : tank.id === tankProps.id
          ? //@ts-ignore
          _newDataForTanksActiveAttacked[1]
          : tank;

       } );
      
    //@ts-ignore
    setTanks(_newDataTanks);
    setAttackedTank([0]);
    setActiveTank(0);
    setActionCommand(" "); 

      } else if (actionCommand === mockActions.attack) {
        console.log(mockTanks)
        
        let _newDataActiveTank = tanks.find((tank) => tank.id === activeTank) || tanks[activeTank - 1];
      let c =   {row: tankProps.coordinates.row,col: tankProps.coordinates.col, kef: 1, id: 1 }
      let s =     {name:"1",kef:1,type:tankProps.coordinates.type,sections:[c]}
        _newDataActiveTank.coordinates = changeCoordinates({
          cell: c,
          col: s,
        });

       
       

     
    const _newDataForTanksActiveAttacked = fireFunc(
      _newDataActiveTank,
      tankProps,
      actionCommand
    );
    const _newDataTanks = tanks.map((tank) => {
      return tank.id === activeTank
        ? //@ts-ignore
        _newDataForTanksActiveAttacked[0]
        : tank.id === tankProps.id
          ? //@ts-ignore
          _newDataForTanksActiveAttacked[1]
          : tank;




       } );
       console.log(tankProps)  
    //@ts-ignore
    setTanks(_newDataTanks);
    setAttackedTank([0]);
    setActiveTank(0);
    setActionCommand(" "); 
        
           


      }



    
  };
  const openMenu = (tank: ITank) => {
    console.log(tank.coordinates.id!);
    if (true) {
      setjjjj(true);
     
    }
    setActiveZoneGo(undefined);
    setAttackedTank([0]);
    setActionCommand(" ");
    if (tank.team !== activeTeam) return;
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
        <MovesCount
          countSov={countStepSov}
          countWer={countStepWer}
          setCountSov={setCountStepSov}
          setCountWer={setCountStepWer}
          onClickAdd={nextStep}
          setActiveTeam={setActiveTeam}
          activeTeam={activeTeam}
          setDataTanks={setTanks}
          VisibleReady={setActivedef8}
          dataTank={tanks}
          count={countStep}
          setCount={setCountStep} />
           
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
                  (item) => item.col === cell.col && item.row === cell.row


                  )
              
                );

                const cell1 = cell;

                return (

                  <div onClick={(e) => { setActiveZoneGo(undefined); setActiveZoneGo(undefined); setjjjj(false); }}
                    key={cell.id}
                    style={{ position: "relative", }}
                    className={style.cell}


                  >

                    <div onClick={(e) => clickCell(cell, col, e, cell.kef || 0.5)} className={activeSell && cageFull1(1, cell) ? style.cell_active : style.cell_disactive}> </div>



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
                    {activedef1?.map((cell) => { return <div onDoubleClick={(e)=> setActivedef15(false)} onClick={(e) => { clickDef(cell1, col, e, 1); }}><div className={activeSell2 && activedef15 ? style.cell_def : style.cell_disactive}></div></div>; })}
                    
                  </div>




                );

              })}

            </div>


          );


        })}









        {tanks?.map((tank) => {
          
          const activeSell1 = activedef?.find((radius) => radius.cells.find(
            (item) => item.col === tank.coordinates.col && item.row === tank.coordinates.row
   
          )
          );
          const activeSell2 = activedef1?.find((radius) => radius.cells.find(
            (item) => item.col === tank.coordinates.col && item.row === tank.coordinates.row

          )
          );
         
          const activeSell4 = activedef5?.find((radius) => radius.find(
            (item) => item.row === tank.coordinates.row   && item.col === tank.coordinates.col  

          ))
          const llh = activedef5&& activedef5 ? activedef5[activeTank-1] : undefined
          const llh1 = activedef6&& activedef6 ? activedef6[activeTank-1] : undefined
          const activeSell10 = llh?.find((radius) => 
             radius.row === tank.coordinates.row   && radius.col === tank.coordinates.col  

          
          );
          const activeSell11 = llh1?.find((radius) =>   radius.row === tank.coordinates.row   && radius.col === tank.coordinates.col )
          const activeSell5 = activedef6?.find((radius) => radius.find(
            (item) => item.row === tank.coordinates.row   && item.col === tank.coordinates.col  

          )
          );
       
         
         
          if (cageFull(1, tank)) { } else { styleUnit(1, tank); }
          if (tank.count <= 0) return;
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
                  width: `${cageFull(1, tank) ? 47 : 37}px`,
                  height: `${cageFull(1, tank) ? 39 : 35}px`,
                  visibility: `${    activeSell5 && activeTeam === 2 ||  activeSell4 && activeTeam === 1 || activeTeam === tank.team  ?  "visible" : "hidden"}`,
                }}
                activeMenu={tank.activeTank}
             
                
                />
              
              <ActionMenu
                setActiveTank={setActiveTank}
                setAction={setActionCommand}
                visible={activeTank === tank.id && jjjj ? "flex" : "none"} />

                 <ToolTipMenu1 visible={ d &&   boolMove && jjjj ? "flex" : "none"}  tank={tank} posX={movex!} posY={movey!} />



              <div
                onClick={() => clickFire(tank)}
                style={{
                  top: `${tank.coordinates.top}%`,
                  left: `${tank.coordinates.left}%`,
                  // zIndex:"1"
                }}
                className={  (actionCommand === "fire" || actionCommand === "fire_hard" || actionCommand === "attack" ||actionCommand ===  mockActions.fire_move )  && activeSell10 && activeTeam !== tank.team && findAttackedTank(tank.id)   || ( actionCommand === "fire" || actionCommand === "fire_hard" || actionCommand === "attack" ||actionCommand ===  mockActions.fire_move ) && activeSell11 && activeTeam !== tank.team && findAttackedTank(tank.id)     ? style.activeFire : " "}
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


