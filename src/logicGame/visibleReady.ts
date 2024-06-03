

import React, { useState } from 'react'
import { dataField, mockActions, mockTanks, sections, tanks } from '../mockData/mockData'
import { IDataField, ICell, ICoordinatesTank} from '../types/types';
import { changeCoordinates } from './changeCoordinates';
import { ICanGo } from '../gameComponents/Field/Field';
import { arch, type } from 'os';



interface cell {
    row: number, col: number, type: number, kef?: number, id?:number,
}



//
export const VisibleReady = (row: number, col:number, type:number,numMoves: number  ) => {
  
  let row5 = row
  let col5 = col
  let h : cell
  let k : cell
  let u : cell


  const visible1 = (row: number, col:number, type:number ) => {

   


  }
  let dfd3 = []
 
  
  const sector = (row:number, col:number,type:number,kef?:number, id?:number,) => {
    let array: cell[]
 
   if(type === 1) {
    array =

        [
          { row: row + 1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined,id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id : undefined    },
          { row: row , col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined , id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined },
          {row: row - 1, col: col + 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined , id: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].id : undefined },
          { row: row - 1, col: col , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined , id: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col-1].sections[row-2].id : undefined  },
          { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   },
          { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined , id:row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].id : undefined },
        ]
     
      return array
    } else {
      array =
        [
          { row: row+ 1 , col: col     , type: 2, kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef  : undefined , id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id : undefined },  
          { row: row , col: col+1  , type: 1, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined , id:row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined },
          { row: row -1 , col: col  , type: 2, kef: row-1 <= 8 && row-1 >= 1 && col   >0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined,  id:  row-1 <= 8 && row-1 >= 1 && col   >0   && col <= 11? dataField[col-1].sections[row-2].id : undefined },
          { row: row + 1, col: col - 1, type: 1,  kef: row+1 <= 8 && row+1 >= 1 && col - 1  > 0   && col - 1  <= 11? dataField[col-2].sections[row].kef : undefined, id:row+1 <= 8 && row+1 >= 1 && col - 1  > 0   && col - 1  <= 11? dataField[col-2].sections[row].id : undefined   },
          { row: row, col: col - 1, type: 1, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined, id:row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].id: undefined },
          { row: row + 1, col: col + 1, type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row].kef : undefined , id:row+1 <= 8 && row+1 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row].id: undefined},
        ]
        
      // setActiveZoneGo(array)

      return   array
      
      }
    }
   console.log(sector(row,col,type))
   
    let returnedCoordinatesArray: ICanGo[] = [{ radius: 0, cells: [{id:0, row: 0, col: 0, type: 1 }] }]
    for (let i = 0; i < numMoves; i++) {
      if (i === 0) {

        returnedCoordinatesArray[i].radius = 1
        returnedCoordinatesArray[i].cells = sector(row,col,type) //[ {row: 3, col: 2, type: 2}]
 
       }
       if (i > 0) {
      
        let _newArray: ICanGo = { radius: 0, cells: [{  row: row, col: col, type: type}] }
        let cells: cell[] = [{ id:0, row: 1, col: 1, type: 1, kef:3 }]
        _newArray.radius = i 
        returnedCoordinatesArray[i - 1].cells.map(coordinate => {
          const position = sector(coordinate.row, coordinate.col, coordinate.type )
          _newArray.cells.push(...position)
          
        })
        returnedCoordinatesArray.push(_newArray)
         
      
      }
     
       console.log(returnedCoordinatesArray)
    
    }
    
     if (row && col +1){


      console.log(1212)
     }


             


    return returnedCoordinatesArray
    
  }