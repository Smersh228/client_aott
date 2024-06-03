import React, { useState } from 'react'
import { ICell, ICoordinatesTank } from '../types/types'
import { IDataField } from '../types/types'
import { dataField, mockActions, mockTanks, sections, tanks } from '../mockData/mockData'
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
  kef: IDataField
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
  row: number, col: number, type: number
}
interface IReturnedArray {
  radius:number
  cells: cell[]
}

export const calcActiveCell1 = (row: number, col: number, type: number, numMoves: number = 1) => {

 

  const canGoSellMore1 = (row: number, col: number, type: number ) => {
    let array: cell[]
    let data: IDataField
    if (type === 1) {

      array =

        [
          { row: row + 1, col: col , type: 1, },
          { row: row   , col: col + 1, type: 2,  },
          { row: row - 1, col: col +1, type: 2 },
          { row: row - 1, col: col, type: 1 },
          { row: row, col: col - 1, type: 2 },
          { row: row - 1, col: col - 1, type: 2 },
        ]

      return array
    } else {
      array =
        [
          { row: row + 1, col: col, type: 2,},
          { row: row , col: col + 1, type: 1,  },
          { row: row + 1, col: col - 1, type: 1,  },
          { row: row - 1, col: col, type: 2,  },
          { row: row, col: col - 1, type: 1,},
          { row: row + 1, col: col + 1, type: 1 , },
        ]

      // setActiveZoneGo(array)

      return  array 
      
    }

    
  }
  
  let returnedCoordinatesArray: IReturnedArray[] = [{ radius:0,  cells: [{ row: 0, col: 0, type: 1 }] }]


  for (let i = 0; i < numMoves; i++) {
    

    if (i === 0) {
      returnedCoordinatesArray[i].radius = 1
      returnedCoordinatesArray[i].cells = canGoSellMore1(row, col, type)
   
    }
    if (i > 0) {
      let _newArray: IReturnedArray = { radius: 0, cells: [{ row: row, col: col, type: type }] }
      let cells: cell[] = [{ row: 0, col: 0, type: 1 }]
      returnedCoordinatesArray[i - 1].cells.map(coordinate => {
        const position = canGoSellMore1(coordinate.row, coordinate.col, coordinate.type)
        _newArray.cells.push(...position)
      })
      returnedCoordinatesArray.push(_newArray)
      
    }
    
  }
  
  return returnedCoordinatesArray
  
}