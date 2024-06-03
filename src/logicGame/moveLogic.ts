
import React, { useState } from 'react'
import { dataField, mockActions, mockTanks, sections, tanks } from '../mockData/mockData'
import { IDataField, ICell, ICoordinatesTank} from '../types/types';
import { changeCoordinates } from './changeCoordinates';
import { ICanGo } from '../gameComponents/Field/Field';
import { arch } from 'os';
interface ITank {
  id: number;
  name: string;
  img: any;
  count: number;
  type: string;
  prevDeffStep: number;
  afterStepData: { move: number; defend: number };
  team: number;
  activeTank: boolean;
  coordinates: ICoordinatesTank;
  actions: IActionsTank;
}


interface IActionsTank {
  move: number;
  defend: number;
  fire: {
    ammunition: number;
    // defend:number
    precision: number[];
    intensity: {
      light: number[];
      middle: number[];
      humans: number[];
    };
  };
}
interface IChangeCoordinates {
  cell: ICell
}

interface coordinates {
  top: number
  left: number
  active?: boolean
  col: number,
  row: number,
  type: number
}




interface cell {
    row: number, col: number, type: number, kef?: number, id?:number,
}
interface IReturnedArray {
  radius: number
  cells: cell[]
}

export const calcActiveCell = (row: number, col: number, type: number, numMoves: number = 1,moveTank:number, kef?:  number,id?:number, ) => {
  
   let h = dataField[col - 1].sections[row -1].id
   let h12 = dataField[col - 1].sections[row -1].id
   const j = id
   const h1 = col
   console.log(h12)
  const canGoSellMore = (row: number, col: number, type: number, move12:number  , kef?: number, id?: number,) => {
    console.log(row,col)
    let array: cell[]
   let array2: cell[]
  
   
    if (type === 1) {
    
      array =

        [
          { row: row + 1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined,id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id :6 },
          { row: row , col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined , id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : 5 },
          {row: row - 1, col: col + 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined , id: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].id : 4 },
          { row: row - 1, col: col , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined , id: row-1 <= 8 && row-1 >= 1 && col  >0   && col <= 11? dataField[col-1].sections[row-2].id : 3  },
          { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined , id: row <= 8 && row >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].id : 10 },
          { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined , id:row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].id : 1 },
        ]
     
      return array.filter((cell)=> cell.kef! <= moveTank )
    } else {
      array =
        [
          { row: row+ 1 , col: col     , type: 2, kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef  : undefined , id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id : 6},  
          { row: row , col: col+1  , type: 1, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined , id:row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : 5},
          { row: row -1 , col: col  , type: 2, kef: row-1 <= 8 && row-1 >= 1 && col   >0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined,  id:  row-1 <= 8 && row-1 >= 1 && col   >0   && col <= 11? dataField[col-1].sections[row-2].id : 4},
          { row: row + 1, col: col - 1, type: 1,  kef: row+1 <= 8 && row+1 >= 1 && col - 1  > 0   && col - 1  <= 11? dataField[col-2].sections[row].kef : undefined, id:row+1 <= 8 && row+1 >= 1 && col - 1  > 0   && col - 1  <= 11? dataField[col-2].sections[row].id : 3  },
          { row: row, col: col - 1, type: 1, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined, id:row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].id: 2 },
          { row: row + 1, col: col + 1, type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row].kef : undefined , id:row+1 <= 8 && row+1 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row].id: 1},
        ]
        
      // setActiveZoneGo(array)

      return   array.filter((cell)=> cell.kef! <= moveTank)
      
    } }


    const canGoSellMore1 = (row: number, col: number, type: number, move12:number,arr:cell[], kef?: number,id?: number ) => {
     
      let array: cell[]
      let array2:cell[]
      
     
    kef! = move12 - kef!
    console.log(kef!)
      if (type === 1) {
       
        array =
  
          [
            { row: row + 1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? kef - dataField[col-1].sections[row].kef    : undefined, id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id : undefined   },
            { row: row, col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ?kef - dataField[col].sections[row-1].kef  : undefined , id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined },
            { row: row - 1, col: col + 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? kef - dataField[col].sections[row-2].kef   : undefined, id: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].id : undefined  },
            { row: row - 1, col: col , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? kef -  dataField[col-1].sections[row-2].kef   : undefined , id: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col-1].sections[row-2].id : undefined  },
            { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ? kef - dataField[col-2].sections[row-1].kef   : undefined , id: row-1 <= 8 && row >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].id : undefined },
            { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ?kef - dataField[col-2].sections[row-2].kef   : undefined ,  id:row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].id : undefined },
          ]
          
            
       
           
        return  array.filter((cell)=> cell.kef! >=0   ) 
      } else {
        array =
          [
            { row: row+ 1, col: col     , type: 2, kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ?kef -dataField[col-1].sections[row].kef   : undefined , id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id : undefined },  
            { row:  row  , col: col+1  , type: 1, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? kef - dataField[col].sections[row-1].kef  : undefined , id:row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined},
            { row:  row -1 , col: col  , type: 2, kef: row-1 <= 8 && row-1 >= 1 && col   >0   && col <= 11? kef -  dataField[col-1].sections[row-2].kef  : undefined ,  id:  row-1 <= 8 && row-1 >= 1 && col   >0   && col <= 11? dataField[col-1].sections[row-2].id : undefined},
            { row:  row + 1, col: col - 1, type: 1,  kef: row+1 <= 8 && row+1 >= 1 && col - 1  > 0   && col - 1  <= 11? kef - dataField[col-2].sections[row].kef  : undefined , id:row+1 <= 8 && row+1 >= 1 && col - 1  > 0   && col - 1  <= 11? dataField[col-2].sections[row].id : undefined    },
            { row: row, col: col - 1, type: 1, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ? kef -  dataField[col-2].sections[row-1].kef : undefined,id:row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].id: undefined  },
            { row:  row + 1, col: col + 1, type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col+1 > 0  && col+1 <=11 ?kef - dataField[col].sections[row].kef   : undefined, id:row+1 <= 8 && row+1 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row].id: undefined },
          ]
  
        // setActiveZoneGo(array)
       
        return   array.filter((cell)=> cell.kef! >=0  ) 
        
      } }


      const canGoSellMore2 = (row: number, col: number, type: number, move12:number, cell1:cell  ,kef?: number, id?: number ) => {
   
        let array: cell[]
        
        
        
       
        if (type === 1) {
           
          array =
    
            [
              { row: row + 1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ?kef! -  dataField[col-1].sections[row].kef   : undefined , id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id : undefined  },
              { row: row , col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ?kef! - dataField[col].sections[row-1].kef    : undefined , id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined},
              { row: row - 1, col: col + 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? kef! - dataField[col].sections[row-2].kef     : undefined , id: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].id : undefined },
              { row: row - 1, col: col , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11?kef! - dataField[col-1].sections[row-2].kef       : undefined , id: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col-1].sections[row-2].id : undefined },
              { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?kef! -dataField[col-2].sections[row-1].kef  : undefined , id: row-1 <= 8 && row-1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].id : undefined},
              {row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ?kef! - dataField[col-2].sections[row-2].kef   : undefined ,  id:row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].id : undefined },
            ]
    
          return array.filter((cell2)=> cell2.kef! >= 0 )
        } else {
          array =
            [
              { row: row+ 1 , col: col     , type: 2, kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? kef! - dataField[col-1].sections[row].kef  : undefined  , id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id : undefined},  
              { row: row , col: col+1  , type: 1, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? kef! -  dataField[col].sections[row-1].kef   : undefined , id:row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined},
              { row: row -1 , col: col  , type: 2, kef: row-1 <= 8 && row-1 >= 1 && col   >0   && col <= 11? kef! -  dataField[col-1].sections[row-2].kef  : undefined ,  id:  row-1 <= 8 && row-1 >= 1 && col   >0   && col <= 11? dataField[col-1].sections[row-2].id : undefined},
              { row: row + 1, col: col - 1, type: 1,  kef: row+1 <= 8 && row+1 >= 1 && col - 1  > 0   && col - 1  <= 11?kef! -  dataField[col-2].sections[row].kef   : undefined  , id:row+1 <= 8 && row+1 >= 1 && col - 1  > 0   && col - 1  <= 11? dataField[col-2].sections[row].id : undefined    },
              { row: row, col: col - 1, type: 1, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ? kef! -   dataField[col-2].sections[row-1].kef  : undefined ,id:row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].id: undefined },
              { row: row + 1, col: col + 1, type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col+1 > 0  && col+1 <=11 ? kef! - dataField[col].sections[row].kef   : undefined , id:row+1 <= 8 && row+1 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row].id: undefined },
            ]
    
          // setActiveZoneGo(array)
    
          return  array.filter((cell2)=> cell2.kef! >= 0 )
          
        } }
    let cirOne : IReturnedArray[] = [{ radius: 0, cells: [{id:0, row: 0, col: 0, type: 1, kef:kef }] }]
    
    
    //let Return : IReturnedArray[][] = [{  cells: [{ row: 0, col: 0, type: 1, kef:kef }] }]
    let returnedCoordinatesArray: IReturnedArray[] = [{ radius: 0, cells: [{id:0, row: 0, col: 0, type: 1, kef:kef }] }]
    
  
    for (let i = 0; i < numMoves; i++) {
       
    
  
      if (i === 0) {
       let  hhh = []
      let b = cirOne[i].cells = canGoSellMore(row,col,type,3,kef,id)
      
  
        let gf = b.map((cell,index,b) => canGoSellMore1(cell.row,cell.col,cell.type,moveTank,b,cell.kef!,cell.id!) )
        let gfg = gf.map((cell=> cell.map((cell)=>canGoSellMore2(cell.row,cell.col,cell.type,3,cell,cell.kef!,cell.id!) )))
       let gfg1 = gfg.map((cell)=> cell.map((cell) => cell.map((cell)=> canGoSellMore2(cell.row,cell.col,cell.type,3,cell,cell.kef!,cell.id!)) ) )
       let gfg3 = gfg1.map((cell)=> cell.map((cell)=> cell.map((cell)=> cell.map((cell)=> canGoSellMore2(cell.row,cell.col,cell.type,3,cell,cell.kef!,cell.id!)))))
       
console.log(gfg3)
  
    let h300 = gf.concat(gfg.flat(2)).concat(b).concat(gfg1.flat(2)).concat(gfg3.flat(5))
    
    let h500 = h300.flat(3)
    let h5= gf.flat(3)
   let h3000 =  h500.filter((cell) => cell.id  !=  h)
      console.log(h3000)
        returnedCoordinatesArray[i].radius = 1
        returnedCoordinatesArray[i].cells = h3000.flat(3) //[ {row: 3, col: 2, type: 2}]
       
        //cells =  canGoSellMore(row,col,type,kef)
        
        //canGoSellMore(row, col, type, kef)
      
      }
      if (i > 0) {
        let _newArray: IReturnedArray = { radius: 0, cells: [{id:id , row: row, col: col, type: type,kef:kef}] }
        let cells: cell[] = [{ id:0, row: 1, col: 1, type: 1, kef:3 }]
        _newArray.radius = i + 2
        returnedCoordinatesArray[i - 1].cells.map(coordinate => {
          const position = canGoSellMore(coordinate.row, coordinate.col, coordinate.type, coordinate.kef!,coordinate.id! )
          _newArray.cells.push(...position)
          
        })
        returnedCoordinatesArray.push(_newArray)
        
      
      }
     
       console.log(returnedCoordinatesArray)
    
    }
    
    return returnedCoordinatesArray
    
  }
       
  
