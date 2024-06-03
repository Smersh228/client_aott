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

export const vectorMove = (activeZone: ICanGo[], cell: ICell, col: IDataField, tank: ITank ) => {
  let cell2: cell
  let cell1: cell
  let cell3: cell
  let cell4: cell
  let CoorY = 0
  let mas = []
  
  const CoorX =  cell.col < tank.coordinates.col ? Math.abs( (tank.coordinates.col) - (cell.col) ) : Math.abs( (tank.coordinates.col+1) -cell.col    )
 console.log(tank.coordinates.type )
  if ( tank.coordinates.type === 2 && cell.row < tank.coordinates.row) {

  CoorY =  Math.abs(cell.row - (tank.coordinates.row)) 

  
 } else if ( tank.coordinates.type === 2 && cell.row > tank.coordinates.row) {

    CoorY =   (cell.row) -tank.coordinates.row 
 
 }  else if ( tank.coordinates.type === 1 && cell.row < tank.coordinates.row) {

  CoorY =  Math.abs(cell.row - (tank.coordinates.row)) 

  
 } else if ( tank.coordinates.type === 1 && cell.row > tank.coordinates.row) {

    CoorY =   (cell.row) -tank.coordinates.row 
 
 }
 
 if ( cell.col === tank.coordinates.col && tank.coordinates.type === 1) {  /// фронтальные
  for(let i=1; i < CoorY; i++ ){        
    console.log(333)
    cell2 = {  row: cell.row < tank.coordinates.row ? tank.coordinates.row-i : tank.coordinates.row+i  , col:  tank.coordinates.col , type: tank.coordinates.type}
   mas.push(cell2)  
}

 }





 if ( cell.col === tank.coordinates.col && tank.coordinates.type === 2) {  /// фронтальные
  for(let i=1; i < CoorY; i++ ){        
    console.log(333)
    cell2 = {  row: cell.row < tank.coordinates.row ? tank.coordinates.row-i : tank.coordinates.row+i  , col:  tank.coordinates.col , type: tank.coordinates.type}
   mas.push(cell2)  
}

 } 

else if (tank.coordinates.type === 2 && cell.col > tank.coordinates.col && cell.row < tank.coordinates.row  &&  cell.col !== tank.coordinates.col+1  &&   cell.row !== tank.coordinates.row-2 &&    cell.row !== tank.coordinates.row-3) { // боковые верх право
    console.log(cell.col > tank.coordinates.col)
    cell1 = { row:  tank.coordinates.row  , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
    mas.push(cell1)  
    for(let i=1; i < CoorX; i++ ){   
        cell2 = { row:  i === 1 || i===2 ? tank.coordinates.row-1 : tank.coordinates.row-2 , col:  tank.coordinates.col+1+i , type: tank.coordinates.type}
        mas.push(cell2)  
      }  
      console.log(333)
}
 else if (tank.coordinates.type === 2 && cell.col < tank.coordinates.col  && cell.row > tank.coordinates.row &&  cell.col !== tank.coordinates.col-1) {// боковые вниз лево
    cell1 = { row:  tank.coordinates.row+1  , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
    mas.push(cell1)  
    for(let i=1; i < CoorX; i++ ){    
       
        cell2 = { row:  i === 1  ? tank.coordinates.row+1 : tank.coordinates.row+2 , col:  tank.coordinates.col-i-1 , type: tank.coordinates.type}
        mas.push(cell2)  
      }
      console.log(333)
 
    
} else if (tank.coordinates.type === 2 && tank.coordinates.col >  cell.col  &&  cell.col-1 !== tank.coordinates.col && cell.row < tank.coordinates.row &&  cell.col !== tank.coordinates.col-1 ) {// боковые верх лево

    cell1 = { row:  tank.coordinates.row  , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
    mas.push(cell1)  
    for(let i=1; i < CoorX; i++ ){    
      
        cell2 = { row:  i === 1 || i===2 ? tank.coordinates.row-1 : tank.coordinates.row-2 , col:  tank.coordinates.col-i-1 , type: tank.coordinates.type}
        mas.push(cell2)  
      }
    
      console.log(333)
    
} else if ( tank.coordinates.type === 2 &&  cell.col > tank.coordinates.col &&  cell.row > tank.coordinates.row && cell.col !== tank.coordinates.col+1 && cell.row !== tank.coordinates.row+2 &&  cell.col !== tank.coordinates.col+3 ) {// боковые вниз право
    cell1 = { row:  tank.coordinates.row+1  , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
    mas.push(cell1)  
    for(let i=1; i < CoorX; i++ ){    
      
        cell2 = { row:  i === 1  ? tank.coordinates.row+1 : tank.coordinates.row+2 , col:  tank.coordinates.col+1+i , type: tank.coordinates.type}
        mas.push(cell2)  
      }
     
 console.log(333)
    
}   else if (tank.coordinates.type === 1 && cell.col > tank.coordinates.col && cell.row < tank.coordinates.row&& cell.col !== tank.coordinates.col+1  ) { // боковые верх право
    console.log(cell.col > tank.coordinates.col)
    cell1 = { row:  tank.coordinates.row -1  , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
    mas.push(cell1)  
    for(let i=1; i < CoorX; i++ ){   
        cell2 = { row:  i === 1  ? tank.coordinates.row-1 : tank.coordinates.row-2 , col:  tank.coordinates.col+1+i , type: tank.coordinates.type}
        mas.push(cell2)  
        
      }  
      console.log(333)
}
 else if (tank.coordinates.type === 1 && cell.col < tank.coordinates.col && cell.row > tank.coordinates.row && cell.col !== tank.coordinates.col+1  && cell.col !== tank.coordinates.col-1) {// боковые вниз лево
    cell1 = { row:  tank.coordinates.row  , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
    mas.push(cell1)  
    for(let i=1; i < CoorX; i++ ){    
       
        cell2 = { row:  i === 1 ||i === 2 ? tank.coordinates.row+1 : tank.coordinates.row+2 , col:  tank.coordinates.col-i-1 , type: tank.coordinates.type}
        mas.push(cell2)  
      }
   
      console.log(3333)
    
} else if (tank.coordinates.type === 1 &&  tank.coordinates.col >  cell.col  && cell.row < tank.coordinates.row &&  cell.col !== tank.coordinates.col+1  && cell.col !== tank.coordinates.col-1  ) {// боковые верх лево

    cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
    mas.push(cell1)  
    for(let i=1; i < CoorX; i++ ){    
      
        cell2 = { row:  i === 1  ? tank.coordinates.row-1 : tank.coordinates.row-2 , col:  tank.coordinates.col-i-1 , type: tank.coordinates.type}
        mas.push(cell2)  
      }
    
    console.log(3333)
    
} else if ( tank.coordinates.type === 1 &&  cell.col > tank.coordinates.col &&  cell.row > tank.coordinates.row &&  cell.col !== tank.coordinates.col+1 ) {// боковые вниз право
    cell1 = { row:  tank.coordinates.row  , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
    console.log(3333)
    mas.push(cell1)  
    for(let i=1; i < CoorX; i++ ){    
      
        cell2 = { row:  i === 1 ||i === 2   ? tank.coordinates.row+1 : tank.coordinates.row+2 , col:  tank.coordinates.col+1+i , type: tank.coordinates.type}
        mas.push(cell2)  
      }
    } else if ( tank.coordinates.type === 2 &&  (cell.col-1 === tank.coordinates.col || cell.col+1 === tank.coordinates.col ) &&  ( cell.row+1 === tank.coordinates.row ) ) {
             console.log(222)
        cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col , type: tank.coordinates.type}
        mas.push(cell1)  


    }  else if (tank.coordinates.type === 2 &&   (cell.col-1 === tank.coordinates.col || cell.col+1 === tank.coordinates.col ) &&  ( cell.row+2 === tank.coordinates.row ) ) {
        console.log(222)
   cell2 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col , type: tank.coordinates.type}
   cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col , type: tank.coordinates.type}
   mas.push(cell1,cell2)  


} else if ( tank.coordinates.type === 2 &&  (cell.col-1 === tank.coordinates.col || cell.col+1 === tank.coordinates.col ) &&  ( cell.row+3 === tank.coordinates.row ) ) {
    console.log(222)
cell2 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-3  , col:  tank.coordinates.col , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3)  


} else if (tank.coordinates.type === 2 &&  (cell.col-1 === tank.coordinates.col || cell.col+1 === tank.coordinates.col ) &&  ( cell.row+4 === tank.coordinates.row ) ) {
    console.log(222)
cell2 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-3  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell4 = { row:  tank.coordinates.row-4  , col:  tank.coordinates.col , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3,cell4 )  


} else if (tank.coordinates.type === 2 &&  (cell.col-1 === tank.coordinates.col || cell.col+1 === tank.coordinates.col ) &&  ( cell.row-2 === tank.coordinates.row ) ) {
    console.log(222)
cell1 = { row:  tank.coordinates.row+1  , col:  tank.coordinates.col , type: tank.coordinates.type}
mas.push(cell1)  


}  else if (tank.coordinates.type ===2 &&   (cell.col-1 === tank.coordinates.col || cell.col+1 === tank.coordinates.col ) &&  ( cell.row-3 === tank.coordinates.row ) ) {
console.log(222)
cell2 = { row:  tank.coordinates.row+2  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row+1  , col:  tank.coordinates.col , type: tank.coordinates.type}
mas.push(cell1,cell2)  


} else if (tank.coordinates.type === 2 &&  (cell.col-1 === tank.coordinates.col || cell.col+1 === tank.coordinates.col ) &&  ( cell.row-4 === tank.coordinates.row ) ) {
console.log(222)
cell2 = { row:  tank.coordinates.row+2  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row+1  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row+3  , col:  tank.coordinates.col , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3)  


} else if (tank.coordinates.type === 2 &&  (cell.col-1 === tank.coordinates.col || cell.col+1 === tank.coordinates.col ) &&  ( cell.row-5 === tank.coordinates.row ) ) {
console.log(222)
cell2 = { row:  tank.coordinates.row+2  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row+1  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row+3  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell4 = { row:  tank.coordinates.row+4  , col:  tank.coordinates.col , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3,cell4 )  


} else if ( tank.coordinates.type === 1 &&  (cell.col-1 === tank.coordinates.col || cell.col+1 === tank.coordinates.col ) &&  ( cell.row+2 === tank.coordinates.row ) ) {
  console.log(222)
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col , type: tank.coordinates.type}
mas.push(cell1)  


}  else if (tank.coordinates.type === 1 &&   (cell.col-1 === tank.coordinates.col || cell.col+1 === tank.coordinates.col ) &&  ( cell.row+3 === tank.coordinates.row ) ) {
console.log(222)
cell2 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col , type: tank.coordinates.type}
mas.push(cell1,cell2)  


} else if ( tank.coordinates.type === 1 &&  (cell.col-1 === tank.coordinates.col || cell.col+1 === tank.coordinates.col ) &&  ( cell.row+4 === tank.coordinates.row ) ) {
console.log(222)
cell2 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-3  , col:  tank.coordinates.col , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3)  


} else if (tank.coordinates.type === 1 &&  (cell.col-1 === tank.coordinates.col || cell.col+1 === tank.coordinates.col ) &&  ( cell.row+5 === tank.coordinates.row ) ) {
console.log(222)
cell2 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-3  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell4 = { row:  tank.coordinates.row-4  , col:  tank.coordinates.col , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3,cell4 )  


} else if (tank.coordinates.type === 1 &&  (cell.col-1 === tank.coordinates.col || cell.col+1 === tank.coordinates.col ) &&  ( cell.row-1 === tank.coordinates.row ) ) {
console.log(222)
cell1 = { row:  tank.coordinates.row+1  , col:  tank.coordinates.col , type: tank.coordinates.type}
mas.push(cell1)  


}  else if (tank.coordinates.type === 1 &&   (cell.col-1 === tank.coordinates.col || cell.col+1 === tank.coordinates.col ) &&  ( cell.row-2 === tank.coordinates.row ) ) {
console.log(222)
cell2 = { row:  tank.coordinates.row+2  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row+1  , col:  tank.coordinates.col , type: tank.coordinates.type}
mas.push(cell1,cell2)  


} else if (tank.coordinates.type === 1 &&  (cell.col-1 === tank.coordinates.col || cell.col+1 === tank.coordinates.col ) &&  ( cell.row-3 === tank.coordinates.row ) ) {
console.log(222)
cell2 = { row:  tank.coordinates.row+2  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row+1  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row+3  , col:  tank.coordinates.col , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3)  


} else if (tank.coordinates.type === 1 &&  (cell.col-1 === tank.coordinates.col || cell.col+1 === tank.coordinates.col ) &&  ( cell.row-4 === tank.coordinates.row ) ) {
console.log(222)
cell2 = { row:  tank.coordinates.row+2  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row+1  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row+3  , col:  tank.coordinates.col , type: tank.coordinates.type}
cell4 = { row:  tank.coordinates.row+4  , col:  tank.coordinates.col , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3,cell4 )  


}  else if ( tank.coordinates.type === 2 &&  ( cell.col-2 === tank.coordinates.col) &&  (  cell.row === tank.coordinates.row  ) ) { //боковые право верх
  console.log(221)
cell1 = { row:  tank.coordinates.row  , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
mas.push(cell1)  


}  else if (tank.coordinates.type === 2 &&   ( cell.col-2 === tank.coordinates.col  ) &&  (  cell.row+2 === tank.coordinates.row ) ) {
console.log(2212)

cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
mas.push(cell1,cell2)  


} else if ( tank.coordinates.type === 2 &&  ( cell.col-3 === tank.coordinates.col ||  cell.col-4 === tank.coordinates.col ) &&   ( cell.row+2 === tank.coordinates.row || cell.row+1 === tank.coordinates.row ||cell.row === tank.coordinates.row  ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+3 , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3)  


} else if (tank.coordinates.type === 2 &&  (cell.col-4 === tank.coordinates.col ||  cell.col-5 === tank.coordinates.col) &&   ( cell.row+3 === tank.coordinates.row || cell.row+1 === tank.coordinates.row ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+3 , type: tank.coordinates.type}
cell4 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col+4 , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3,cell4 )  


} else if ( tank.coordinates.type === 2 &&  ( cell.col+2 === tank.coordinates.col) &&  (  cell.row === tank.coordinates.row  ) ) { //боковые лево верх
  console.log(221)
cell1 = { row:  tank.coordinates.row  , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
mas.push(cell1)  


}  else if (tank.coordinates.type === 2 &&   ( cell.col+2 === tank.coordinates.col ||  cell.col+3 === tank.coordinates.col ) &&  ( cell.row+2 === tank.coordinates.row || cell.row === tank.coordinates.row ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
mas.push(cell1,cell2)  


} else if ( tank.coordinates.type === 2 &&  ( cell.col+3 === tank.coordinates.col ||  cell.col+4 === tank.coordinates.col ) &&   ( cell.row+2 === tank.coordinates.row || cell.row+1 === tank.coordinates.row ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-3 , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3)  


} else if (tank.coordinates.type === 2 &&  (cell.col+4 === tank.coordinates.col ||  cell.col+5 === tank.coordinates.col) &&   ( cell.row+3 === tank.coordinates.row || cell.row+1 === tank.coordinates.row ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-3 , type: tank.coordinates.type}
cell4 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col-4 , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3,cell4 )  




}  else if (tank.coordinates.type === 2 &&   ( cell.col-2 === tank.coordinates.col  ) &&  (  cell.row-2 === tank.coordinates.row ) ) { // боковое право вниз
console.log(2212)

cell2 = { row:  tank.coordinates.row+1 , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row+1 , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
mas.push(cell1,cell2)  


} else if ( tank.coordinates.type === 2 &&  ( cell.col-3 === tank.coordinates.col ||  cell.col-4 === tank.coordinates.col ) &&   ( cell.row-3 === tank.coordinates.row  ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+3 , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3)  


} else if (tank.coordinates.type === 2 &&  (cell.col-4 === tank.coordinates.col ||  cell.col-5 === tank.coordinates.col) &&   ( cell.row+3 === tank.coordinates.row || cell.row+1 === tank.coordinates.row ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+3 , type: tank.coordinates.type}
cell4 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col+4 , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3,cell4 )  




}  else if (tank.coordinates.type === 2 &&   ( cell.col+2 === tank.coordinates.col ||  cell.col+3 === tank.coordinates.col ) &&  ( cell.row+2 === tank.coordinates.row || cell.row === tank.coordinates.row ) ) { // боковое лево вниз
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
mas.push(cell1,cell2)  


} else if ( tank.coordinates.type === 2 &&  ( cell.col+3 === tank.coordinates.col ||  cell.col+4 === tank.coordinates.col ) &&   ( cell.row+2 === tank.coordinates.row || cell.row+1 === tank.coordinates.row ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-3 , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3)  


} else if (tank.coordinates.type === 2 &&  (cell.col+4 === tank.coordinates.col ||  cell.col+5 === tank.coordinates.col) &&   ( cell.row+3 === tank.coordinates.row || cell.row+1 === tank.coordinates.row ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-3 , type: tank.coordinates.type}
cell4 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col-4 , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3,cell4 )  


}  else if ( tank.coordinates.type === 2 &&  ( cell.col-2 === tank.coordinates.col) &&  (  cell.row === tank.coordinates.row  ) ) { //боковые право верх
  console.log(221)
cell1 = { row:  tank.coordinates.row  , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
mas.push(cell1)  


}  else if (tank.coordinates.type === 2 &&   ( cell.col-2 === tank.coordinates.col  ) &&  (  cell.row+2 === tank.coordinates.row ) ) {
console.log(2212)

cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
mas.push(cell1,cell2)  


} else if ( tank.coordinates.type === 2 &&  ( cell.col-3 === tank.coordinates.col ||  cell.col-4 === tank.coordinates.col ) &&   ( cell.row+2 === tank.coordinates.row || cell.row+1 === tank.coordinates.row ||cell.row === tank.coordinates.row  ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+3 , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3)  


} else if (tank.coordinates.type === 2 &&  (cell.col-4 === tank.coordinates.col ||  cell.col-5 === tank.coordinates.col) &&   ( cell.row+3 === tank.coordinates.row || cell.row+1 === tank.coordinates.row ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+3 , type: tank.coordinates.type}
cell4 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col+4 , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3,cell4 )  


} else if ( tank.coordinates.type === 2 &&  ( cell.col+2 === tank.coordinates.col) &&  (  cell.row === tank.coordinates.row  ) ) { //боковые лево верх
  console.log(221)
cell1 = { row:  tank.coordinates.row  , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
mas.push(cell1)  


}  else if (tank.coordinates.type === 2 &&   ( cell.col+2 === tank.coordinates.col ||  cell.col+3 === tank.coordinates.col ) &&  ( cell.row+2 === tank.coordinates.row || cell.row === tank.coordinates.row ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
mas.push(cell1,cell2)  


} else if ( tank.coordinates.type === 2 &&  ( cell.col+3 === tank.coordinates.col ||  cell.col+4 === tank.coordinates.col ) &&   ( cell.row+2 === tank.coordinates.row || cell.row+1 === tank.coordinates.row ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-3 , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3)  


} else if (tank.coordinates.type === 2 &&  (cell.col+4 === tank.coordinates.col ||  cell.col+5 === tank.coordinates.col) &&   ( cell.row+3 === tank.coordinates.row || cell.row+1 === tank.coordinates.row ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-3 , type: tank.coordinates.type}
cell4 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col-4 , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3,cell4 )  




}  else if (tank.coordinates.type === 1 &&   ( cell.col-2 === tank.coordinates.col  ) &&  (  cell.row-2 === tank.coordinates.row ) ) { // боковое право вниз
console.log(2212)

cell2 = { row:  tank.coordinates.row+1 , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row+1 , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
mas.push(cell1,cell2)  


} else if ( tank.coordinates.type === 1 &&  ( cell.col-3 === tank.coordinates.col ||  cell.col-4 === tank.coordinates.col ) &&   ( cell.row-3 === tank.coordinates.row  ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+3 , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3)  


} else if (tank.coordinates.type === 1 &&  (cell.col-4 === tank.coordinates.col ||  cell.col-5 === tank.coordinates.col) &&   ( cell.row+3 === tank.coordinates.row || cell.row+1 === tank.coordinates.row ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+3 , type: tank.coordinates.type}
cell4 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col+4 , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3,cell4 )  




}  else if (tank.coordinates.type === 1 &&   ( cell.col+2 === tank.coordinates.col ||  cell.col+3 === tank.coordinates.col ) &&  ( cell.row+2 === tank.coordinates.row || cell.row === tank.coordinates.row ) ) { // боковое лево вниз
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
mas.push(cell1,cell2)  


} else if ( tank.coordinates.type === 1 &&  ( cell.col+3 === tank.coordinates.col ||  cell.col+4 === tank.coordinates.col ) &&   ( cell.row+2 === tank.coordinates.row || cell.row+1 === tank.coordinates.row ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-3 , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3)  


} else if (tank.coordinates.type === 1 &&  (cell.col+4 === tank.coordinates.col ||  cell.col+5 === tank.coordinates.col) &&   ( cell.row+3 === tank.coordinates.row || cell.row+1 === tank.coordinates.row ) ) {
console.log(2212)
cell2 = { row:  tank.coordinates.row , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
cell3 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col-3 , type: tank.coordinates.type}
cell4 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col-4 , type: tank.coordinates.type}
mas.push(cell1,cell2,cell3,cell4 )  


}








if (tank.coordinates.type === 2 &&  (cell.col+2 === tank.coordinates.col ) &&   ( cell.row+3 === tank.coordinates.row )  ) {

  cell1 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
  mas.push(cell1)  

} else if (tank.coordinates.type === 2 &&  (cell.col-2 === tank.coordinates.col ) &&   ( cell.row+3 === tank.coordinates.row ) ) {
  console.log(333)
  cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col , type: tank.coordinates.type}
  cell3 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
  cell4 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
  mas.push(cell1,cell3,cell4)  
} else if (tank.coordinates.type === 2 &&  (cell.col+2 === tank.coordinates.col ) &&   ( cell.row-3 === tank.coordinates.row )) {
  cell1 = { row:  tank.coordinates.row+2  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
  mas.push(cell1)  

}else if (tank.coordinates.type === 2 &&  (cell.col-2 === tank.coordinates.col ) &&   ( cell.row-3 === tank.coordinates.row )) {
  cell1 = { row:  tank.coordinates.row+1  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
  cell3 = { row:  tank.coordinates.row+2  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
  mas.push(cell1,cell3)  

}else if (tank.coordinates.type === 1 &&  (cell.col+2 === tank.coordinates.col ) &&   ( cell.row+3 === tank.coordinates.row )) {
  cell1 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
 
  mas.push(cell1)  

}else if (tank.coordinates.type === 1 &&  (cell.col-2 === tank.coordinates.col ) &&   ( cell.row+3 === tank.coordinates.row )) {
  cell1 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
  cell3 = { row:  tank.coordinates.row-3  , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
  mas.push(cell1,cell3)  

}else if (tank.coordinates.type === 1 &&  (cell.col+2 === tank.coordinates.col ) &&   ( cell.row-3 === tank.coordinates.row )) {
  cell1 = { row:  tank.coordinates.row+2  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
  cell3 = { row:  tank.coordinates.row  , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
 
  mas.push(cell1,cell3)  

}else if (tank.coordinates.type === 1 &&  (cell.col-2 === tank.coordinates.col ) &&   ( cell.row-3 === tank.coordinates.row )) {
  cell1 = { row:  tank.coordinates.row+1  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
  cell3 = { row:  tank.coordinates.row+2  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
  mas.push(cell1,cell3)  

}



if (tank.coordinates.type === 1 &&  (cell.col-2 === tank.coordinates.col ) &&   ( cell.row+2 === tank.coordinates.row )  ) {

  cell1 = { row:  tank.coordinates.row-1  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
  mas.push(cell1)  

} else if (tank.coordinates.type === 1 &&  (cell.col-3 === tank.coordinates.col ) &&   ( cell.row+3 === tank.coordinates.row ) ) {
  console.log(333)
  cell1 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col+3 , type: tank.coordinates.type}
  mas.push(cell1)  
} else if (tank.coordinates.type === 1&&  (cell.col-4 === tank.coordinates.col ) &&   ( cell.row+3 === tank.coordinates.row )) {
  cell1 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col+4 , type: tank.coordinates.type}
  mas.push(cell1)  

}else if (tank.coordinates.type === 1 &&  (cell.col-2 === tank.coordinates.col ) &&   ( cell.row-3 === tank.coordinates.row )) {
  cell1 = { row:  tank.coordinates.row+1  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
  cell3 = { row:  tank.coordinates.row+2  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
  mas.push(cell1,cell3)  

}else if (tank.coordinates.type === 1 &&  (cell.col+2 === tank.coordinates.col ) &&   ( cell.row+3 === tank.coordinates.row )) {
  cell1 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
 
  mas.push(cell1)  

}else if (tank.coordinates.type === 1 &&  (cell.col-2 === tank.coordinates.col ) &&   ( cell.row+3 === tank.coordinates.row )) {
  cell1 = { row:  tank.coordinates.row-2  , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
  cell3 = { row:  tank.coordinates.row-3  , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
  mas.push(cell1,cell3)  

}else if (tank.coordinates.type === 1 &&  (cell.col+2 === tank.coordinates.col ) &&   ( cell.row-3 === tank.coordinates.row )) {
  cell1 = { row:  tank.coordinates.row+2  , col:  tank.coordinates.col-2 , type: tank.coordinates.type}
  cell3 = { row:  tank.coordinates.row  , col:  tank.coordinates.col-1 , type: tank.coordinates.type}
 
  mas.push(cell1,cell3)  

}else if (tank.coordinates.type === 1 &&  (cell.col-2 === tank.coordinates.col ) &&   ( cell.row === tank.coordinates.row )) {
  cell1 = { row:  tank.coordinates.row  , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
  
  mas.push(cell1)  

}else if (tank.coordinates.type === 1 &&  (cell.col-3 === tank.coordinates.col ) &&   ( cell.row === tank.coordinates.row )) {
  cell1 = { row:  tank.coordinates.row  , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
  cell2 = { row:  tank.coordinates.row  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
  mas.push(cell1,cell2)  

}else if (tank.coordinates.type === 1 &&  (cell.col-2 === tank.coordinates.col ) &&   ( cell.row-2 === tank.coordinates.row )) {

  cell2 = { row:  tank.coordinates.row  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
  mas.push(cell2)  

}else if (tank.coordinates.type === 1 &&  (cell.col-3 === tank.coordinates.col ) &&   ( cell.row-2 === tank.coordinates.row )) {

  cell2 = { row:  tank.coordinates.row+1  , col:  tank.coordinates.col+3 , type: tank.coordinates.type}
 
  mas.push(cell2)  

}else if (tank.coordinates.type === 1 &&  (cell.col-4 === tank.coordinates.col ) &&   ( cell.row-3 === tank.coordinates.row )) {

  cell2 = { row:  tank.coordinates.row+2  , col:  tank.coordinates.col+4 , type: tank.coordinates.type}
 
  mas.push(cell2)  

}else if (tank.coordinates.type === 2 &&  (cell.col-3 === tank.coordinates.col ) &&   ( cell.row-2 === tank.coordinates.row )) {

  cell2 = { row:  tank.coordinates.row+1  , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
  cell1 = { row:  tank.coordinates.row+1  , col:  tank.coordinates.col+2 , type: tank.coordinates.type}
  mas.push(cell2,cell1)  

} else if ( tank.coordinates.type === 2 &&  cell.col > tank.coordinates.col &&  cell.row > tank.coordinates.row ) {// боковые вниз право
  cell1 = { row:  tank.coordinates.row+1  , col:  tank.coordinates.col+1 , type: tank.coordinates.type}
  mas.push(cell1)  
  for(let i=1; i < CoorX; i++ ){    
    
      cell2 = { row:  i === 1  ? tank.coordinates.row+1 : tank.coordinates.row+2 , col:  tank.coordinates.col+1+i , type: tank.coordinates.type}
      mas.push(cell2)  
    }
   
console.log(333)
  
}


console.log(mas)
return mas


 
 
}


 