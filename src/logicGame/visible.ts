

import React, { useState } from 'react'
import { dataField, mockActions, mockTanks, sections, tanks } from '../mockData/mockData'
import { IDataField, ICell, ICoordinatesTank} from '../types/types';
import { changeCoordinates } from './changeCoordinates';
import { ICanGo } from '../gameComponents/Field/Field';
import { arch, type } from 'os';
import { createIndexSignature } from 'typescript';




interface cell {
    row: number, col: number, type: number, kef?: number, id?:number, visible?:boolean
}


//
export const Visible = (row1: number, col1:number, type:number,numMoves: number  ) => {
  let false0 = false

  let row = row1
  let col = col1
  let h : cell
  let k : cell
  let hueta2: cell[]
  let u : cell
  let false1 = false

  let false100: boolean
  let false2 = false
  let false3 = false
  let false4 = false

  let false5 = false
  let false6 = false
  let false7 = false
  let false8 = false

  let false9 = false
  let false10 = false
  let false11= false
  let false12 = false


  let false13 = false
  let false14 = false
  let false15= false
  let false16 = false

  let false17 = false
  let false18 = false
  let false19= false
  let false20 = false

  
  let false21 = false     
  let false22 = false
  let false23= false
  let false24 = false
  
  let false25 = false
  let false26 = false
  let false27 = false
  let false28 = false
  
  let false40 = false
  let false41 = false
  let false42 = false
 



  let false50 = false
  let false51 = false
  let false56 = false
  let false52 = false
  let false53 = false
  let false54 = false
  let false55 = false


  let false60 = false
  let false61 = false
 
  let false63 = false
  let false64 = false
  let false65 = false
  let false66 = false
  let false67 = false


  let false70 = false
  let false71 = false
  let false72 = false
  let false73 = false
  let false74 = false
  let false75 = false
  let false76 = false
  let false77 = false






  

  let dfd3 = []
 
  
  const sector = (row:number, col:number,type:number,kef?:number, id?:number,) => {
    let array: cell[]
 
   if(type === 1  ) {
    array =

        [
          { row: row + 1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id : undefined  },
          { row: row , col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].visible : undefined ,  id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id: undefined  },
          {row: row - 1, col: col + 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].visible : undefined, id: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].id: undefined },
          { row: row - 1, col: col , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].visible : undefined,id: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].id : undefined  },
          { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].visible: undefined,id: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].id: undefined   },
          { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined, id: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].id : undefined},
        ]
     
      return array
    } else {
      array =
        [
          { row: row+ 1 , col: col     , type: 2, kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef  : undefined,visible: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].visible  : undefined,id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id  : undefined  },  
          { row: row , col: col+1  , type: 1, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined,visible: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].visible : undefined, id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined },
          { row: row -1 , col: col  , type: 2, kef: row-1 <= 8 && row-1 >= 1 && col   >0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col   >0   && col <= 11? dataField[col-1].sections[row-2].visible : undefined, id: row-1 <= 8 && row-1 >= 1 && col   >0   && col <= 11? dataField[col-1].sections[row-2].id : undefined},
          { row: row + 1, col: col - 1, type: 1,  kef: row+1 <= 8 && row+1 >= 1 && col - 1  > 0   && col - 1  <= 11? dataField[col-2].sections[row].kef : undefined,visible: row+1 <= 8 && row+1 >= 1 && col - 1  > 0   && col - 1  <= 11? dataField[col-2].sections[row].visible : undefined, id: row+1 <= 8 && row+1 >= 1 && col - 1  > 0   && col - 1  <= 11? dataField[col-2].sections[row].id : undefined  },
          { row: row, col: col - 1, type: 1, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined,visible: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].visible: undefined, id: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].id: undefined},
          { row: row + 1, col: col + 1, type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row].kef : undefined, visible: row+1 <= 8 && row+1 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row].visible : undefined,id: row+1 <= 8 && row+1 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row].id : undefined},
        ]
        
      // setActiveZoneGo(array)

      return  array
      
      }
    }
   
    let array: cell[]
    const sector1 = (row:number, col:number,type:number, type1:number,kef?:number, id?:number) => {
      
    
   
     if(type1 === 1 &&row === row1+1 && col === col1) {
   
      
      array =
  
          [
            { row: row +1, col: col     , type: 1 ,visible: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id: undefined  },
            { row: row , col: col +1, type: 2,  visible: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].visible : undefined , id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id: undefined  },
           { row: row , col: col - 1, type: 2 , visible: row <= 8 && row >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].visible : undefined, id: row <= 8 && row >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].id : undefined  },
           // { row: row - 1, col: col , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].visible : undefined  },
           // { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].visible: undefined  },
          //  { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined},
          ]
         
          
        }else if (type1 === 2 &&row === row1+1 && col === col1) {
       
          array =
      
              [
                { row: row +1, col: col     , type: 1 , visible: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id: undefined  },
                { row: row +1, col: col +1, type: 2, visible: row+1  <= 8 && row+1 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row].visible : undefined, id: row+1  <= 8 && row+1 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row].id : undefined  },
                { row: row +1, col: col - 1, type: 2 ,visible: row+1 <= 8 && row+1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row].visible : undefined, id: row+1 <= 8 && row+1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row].id: undefined  },
               // { row: row - 1, col: col , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].visible : undefined  },
               // { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].visible: undefined  },
              //  { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined},
              ]
             
              
            } else if(type1 === 1 &&row === row1-1 && col===col1) {
           
          array =
      
              [
                { row: row -1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row-2].id : undefined  },
                { row: row -1, col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row-1  <= 8 && row-1 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-2].visible : undefined , id : row-1  <= 8 && row-1 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-2].id : undefined },
               { row: row -1, col: col - 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-2].id : undefined },
               // { row: row - 1, col: col , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].visible : undefined  },
               // { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].visible: undefined  },
              //  { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined},
              ]
           
             
            }else if(type1 === 2 &&row === row1-1 && col===col1) {
             
              array =
          
                  [
                    { row: row -1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row-2].visible : undefined, id: row-1 <= 8 && row-1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row-2].id : undefined  },
                    { row: row , col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].visible : undefined ,  id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined },
                    { row: row , col: col - 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row <= 8 && row >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].visible : undefined,  id: row <= 8 && row >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].id: undefined  },
                   // { row: row - 1, col: col , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].visible : undefined  },
                   // { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].visible: undefined  },
                  //  { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined},
                  ]
               
                 
                } else if(type1 === 1 &&row === row1 && col===col1+1) {
                
              array =
          
                  [
                    { row: row -1, col: col+1     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col+1   > 0  && col+1 <= 11 ? dataField[col].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col+1   > 0  && col+1 <= 11 ? dataField[col].sections[row-2].id : undefined  },
                    { row: row , col: col +1, type: 1, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].visible : undefined , id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined  },
                    { row: row +1, col: col + 1, type: 1 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row+1 <= 8 && row+1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row].id : undefined },
                   // { row: row - 1, col: col , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].visible : undefined  },
                   // { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].visible: undefined  },
                  //  { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined},
                  ]
               
                 
                }else if(type1 === 2 &&row === row1 && col===col1+1) {
                 
                  array =
              
                      [
                        { row: row -1, col: col+1     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col+1   > 0  && col+1 <= 11 ? dataField[col].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col+1   > 0  && col+1 <= 11 ? dataField[col].sections[row-2].id : undefined   },
                        { row: row , col: col +1, type: 1, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].visible : undefined , id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined  },
                        { row: row +1, col: col + 1, type: 1 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row+1 <= 8 && row+1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row].id : undefined },
                       // { row: row - 1, col: col , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].visible : undefined  },
                       // { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].visible: undefined  },
                      //  { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined},
                      ]
                   
                     
                    } else if(type1 === 1 &&row === row1 && col===col1-1) {
                     
                  array =
              
                      [
                        { row: row -1, col: col-1     , type: 1 , visible: row-1 <= 8 && row-1 >= 1 && col -1  > 0  && col-1 <= 11 ? dataField[col-2].sections[row-2].visible : undefined, id: row-1 <= 8 && row-1 >= 1 && col -1  > 0  && col-1 <= 11 ? dataField[col-2].sections[row-2].id : undefined   },
                        { row: row , col: col -1, type: 1, kef: row  <= 8 && row >= 1 && col -1  > 0 && col - 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row  <= 8 && row >= 1 && col -1  > 0 && col - 1 <= 11   ? dataField[col-2].sections[row-1].visible : undefined , id: row  <= 8 && row >= 1 && col -1  > 0 && col - 1 <= 11   ? dataField[col-2].sections[row-1].id : undefined  },
                        { row: row +1, col: col - 1, type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col - 1 >0   && col-1 <= 11?  undefined : undefined,visible: row+1 <= 8 && row+1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row].id: undefined},
                       // { row: row - 1, col: col , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].visible : undefined  },
                       // { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].visible: undefined  },
                      //  { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined},
                      ]
                   
                     
                    } else if(type1 === 2 &&row === row1 && col===col1-1) {
                     
                      array =
                  
                          [
                            { row: row -1, col: col-1     , type: 1 , kef: row-1 <= 8 && row-1 >= 1 && col -1  > 0  && col -1<= 11 ? undefined : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col -1  > 0  && col-1 <= 11 ? dataField[col-2].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col -1  > 0  && col-1 <= 11 ? dataField[col-2].sections[row-2].id : undefined  },
                            { row: row , col: col -1, type: 1, kef: row  <= 8 && row >= 1 && col -1  > 0 && col - 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row  <= 8 && row >= 1 && col -1  > 0 && col - 1 <= 11   ? dataField[col-2].sections[row-1].visible : undefined , id: row  <= 8 && row >= 1 && col -1  > 0 && col - 1 <= 11   ? dataField[col-2].sections[row-1].id : undefined   },
                            { row: row +1, col: col - 1, type: 1 ,visible:row+1 <= 8 && row+1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row].visible : undefined , id:row+1 <= 8 && row+1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row].id : undefined },
                           // { row: row - 1, col: col , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].visible : undefined  },
                           // { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].visible: undefined  },
                          //  { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined},
                          ]
                       
                         
                        } else {
                      array =
              
                      [
                       
                      ]


                    }
        
            return array
          
        }

        const sector2 = (row:number, col:number,type:number, type1:number,kef?:number, id?:number) => {
    
          
         
           if(type1 === 1 &&row === row1+2 && col === col1) {
          
          
            array =
        
                [
                  { row: row +1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id : undefined  },
                  { row: row , col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].visible : undefined , id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined  },
                  { row: row , col: col - 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row <= 8 && row >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].visible : undefined , id: row <= 8 && row >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].id : undefined },
                  { row: row , col: col+2 , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row >= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].visible : undefined , id: row <= 8 && row >= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].id : undefined  },
                  { row: row  , col: col - 2, type: 1, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].visible: undefined , id: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].id: undefined  },
                //  { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined},
                ]
               
                
              } else if(type1 === 2 &&row === row1+2 && col === col1) {
               
                array =
            
                    [
                      { row: row +1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id : undefined  },
                      { row: row +1, col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row+1  <= 8 && row+1 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row].visible : undefined , id: row+1  <= 8 && row+1 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row].id : undefined  },
                      { row: row +1, col: col - 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row+1 <= 8 && row+1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row].id : undefined },
                      { row: row , col: col+2 , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row >= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].visible : undefined , id: row <= 8 && row >= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].id : undefined  },
                      { row: row  , col: col - 2, type: 1, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].visible: undefined , id: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].id: undefined  },
                    //  { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined},
                    ]
                   
                    
                  } else if(type1 === 1 &&row === row1-2 && col===col1) {
                    
                array =
            
                    [
                      { row: row -1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible:row-1 <= 8 && row-1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row-2].visible : undefined , id:row-1 <= 8 && row-1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row-2].id : undefined  },
                      { row: row -1, col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row-1 <= 8 && row-1 >= 1 && col+1   > 0  && col+1 <= 11  ? dataField[col].sections[row-2].visible : undefined  ,  id: row-1 <= 8 && row-1 >= 1 && col+1   > 0  && col+1 <= 11  ? dataField[col].sections[row-2].id : undefined },
                      { row: row -1, col: col - 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? undefined : undefined,visible: row-1 <= 8 && row-1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-2].id : undefined },
                     { row: row , col: col +2 , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row >= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].visible : undefined , id: row <= 8 && row >= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].id : undefined },
                      { row: row  , col: col - 2, type: 1, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].visible: undefined , id: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].id: undefined  },
                    //  { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined},
                    ]
                 
                   
                  }else if(type1 === 2 &&row === row1-2 && col===col1) {
                 
                    array =
                
                        [
                          { row: row -1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row-2].id : undefined },
                          { row: row , col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].visible : undefined , id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined  },
                          { row: row , col: col - 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row <= 8 && row >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].visible : undefined , id: row <= 8 && row >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].id : undefined  },
                         { row: row , col: col +2 , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row >= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].visible : undefined  , id: row <= 8 && row >= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].id : undefined },
                          { row: row  , col: col - 2, type: 1, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].visible: undefined ,  id: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].id: undefined  },
                        //  { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined},
                        ]
                     
                       
                      } else if(type1 === 1 &&row === row1 && col===col1+2) {
                      
                    array =
                
                        [
                          { row: row -2, col: col+1     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row-2 <= 8 && row-2 >= 1 && col+1 > 0  && col+1 <= 11 ? dataField[col].sections[row-3].visible : undefined , id: row-2 <= 8 && row-2 >= 1 && col+1 > 0  && col+1 <= 11 ? dataField[col].sections[row-3].id : undefined   },
                          { row: row -1, col: col +1, type: 1, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row-1  <= 8 && row-1 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-2].visible : undefined , id: row-1  <= 8 && row-1 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-2].id : undefined  },
                          { row: row , col: col + 1, type: 1 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row <= 8 && row >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-1].visible : undefined , id: row <= 8 && row >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-1].id : undefined },
                          { row: row + 1, col: col +1, type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row+1 <= 8 && row+1 >= 1 && col+1 > 0   && col+1 <= 11? dataField[col].sections[row].visible : undefined  , id: row+1 <= 8 && row+1 >= 1 && col+1 > 0   && col+1 <= 11? dataField[col].sections[row].id : undefined  },
                         // { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].visible: undefined  },
                        //  { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined},
                        ]
                     
                       
                      }else if(type1 === 2 &&row === row1 && col===col1+2) {
                        
                        array =
                    
                            [
                              { row: row -1, col: col+1     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col +1  > 0  && col+1 <= 11 ? dataField[col].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col +1  > 0  && col+1 <= 11 ? dataField[col].sections[row-2].id : undefined  },
                              { row: row , col: col +1, type: 1, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].visible : undefined , id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined  },
                              { row: row +1, col: col + 1, type: 1 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row+1 <= 8 && row+1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row].id : undefined },
                              { row: row + 2, col: col +1, type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row+2 <= 8 && row+2 >= 1 && col+1> 0   && col+1 <= 11? dataField[col].sections[row+1].visible : undefined  , id: row+2 <= 8 && row+2 >= 1 && col+1> 0   && col+1 <= 11? dataField[col].sections[row+1].id : undefined },
                             // { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].visible: undefined  },
                            //  { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined},
                            ]
                         
                           
                          } else if(type1 === 1 &&row === row1 && col===col1-2) {
                          
                        array =
                    
                            [
                              { row: row -2, col: col-1     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row-2 <= 8 && row-2 >= 1 && col-1   > 0  && col-1 <= 11 ? dataField[col-2].sections[row-3].visible : undefined , id: row-2 <= 8 && row-2 >= 1 && col-1   > 0  && col-1 <= 11 ? dataField[col-2].sections[row-3].id : undefined   },
                              { row: row -1, col: col -1, type: 1, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row -1 <= 8 && row-1 >= 1 && col -1  > 0 && col - 1 <= 11   ? dataField[col-2].sections[row-2].visible : undefined , id: row -1 <= 8 && row-1 >= 1 && col -1  > 0 && col - 1 <= 11   ? dataField[col-2].sections[row-2].id : undefined   },
                              { row: row , col: col - 1, type: 1 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row <= 8 && row >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].visible : undefined , id: row <= 8 && row >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].id : undefined},
                             { row: row + 1, col: col -1, type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row+1 <= 8 && row+1 >= 1 && col-1 > 0   && col-1 <= 11? dataField[col-2].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col-1 > 0   && col-1 <= 11? dataField[col-2].sections[row].id : undefined  },
                             // { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].visible: undefined  },
                            //  { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined},
                            ]
                         
                           
                          } else if(type1 === 2 &&row === row1 && col===col1-2) {
                         
                            array =
                        
                                [
                                  { row: row -1, col: col-1     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col-1    > 0  && col-1  <= 11 ? dataField[col-2].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col-1    > 0  && col-1  <= 11 ? dataField[col-2].sections[row-2].id : undefined   },
                                  { row: row , col: col -1, type: 1, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row  <= 8 && row >= 1 && col-1   > 0 && col-1  <= 11   ? dataField[col-2].sections[row-1].visible : undefined , id: row  <= 8 && row >= 1 && col-1   > 0 && col-1  <= 11   ? dataField[col-2].sections[row-1].id : undefined   },
                                  { row: row +1, col: col - 1, type: 1 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row+1 <= 8 && row+1 >= 1 && col-1  >0   && col-1  <= 11? dataField[col-2].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col-1  >0   && col-1  <= 11? dataField[col-2].sections[row].id : undefined },
                                 { row: row + 2, col: col -1, type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row+2 <= 8 && row+2 >= 1 && col-1  > 0   && col-1  <= 11? dataField[col-2].sections[row+1].visible : undefined , id: row+2 <= 8 && row+2 >= 1 && col-1  > 0   && col-1  <= 11? dataField[col-2].sections[row+1].id : undefined   },
                                 // { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].visible: undefined  },
                                //  { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined},
                                ]
                             
                               
                              }  else {
                            array =
                    
                            [
                             
                            ]
      
      
                          }
              
                  return array
                
              }

              const sector3 = (row:number, col:number,type:number, type1:number,kef?:number, id?:number) => {
    
               
               
                 if(type1 === 1 &&row === row1+3 && col === col1) {
                  
                  array =
              
                      [
                        { row: row +1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].visible : undefined ,id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id : undefined   },
                        { row: row , col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].visible : undefined , id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined  },
                        { row: row , col: col - 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row  <= 8 && row  >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].visible : undefined , id: row  <= 8 && row  >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].id : undefined  },
                        { row: row , col: col+2 , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row  <= 8 && row  >= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].visible : undefined , id: row  <= 8 && row  >= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].id : undefined   },
                        { row: row  , col: col - 2, type: 1, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].visible: undefined , id: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].id: undefined  },
                        { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].id : undefined},
                        { row: row - 1, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].visible : undefined, id: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].id : undefined},
                      ]
                     
                      
                    }else if(type1 === 2 &&row === row1+3 && col === col1) {
                     
                      array =
                  
                          [
                            { row: row +1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id : undefined  },
                            { row: row +1, col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row+1  <= 8 && row+1 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row].visible : undefined , id: row+1  <= 8 && row+1 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row].id : undefined  },
                            { row: row +1, col: col - 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row+1 <= 8 && row+1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row].id : undefined },
                            { row: row , col: col+2 , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row  >= 1 && col +2> 0   && col+2 <= 11? dataField[col+1].sections[row-1].visible : undefined , id: row <= 8 && row  >= 1 && col +2> 0   && col+2 <= 11? dataField[col+1].sections[row-1].id : undefined },
                            { row: row  , col: col - 2, type: 1, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].visible: undefined , id: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].id: undefined  },
                            { row: row , col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row  <= 8 && row  >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-1].visible : undefined , id: row  <= 8 && row  >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-1].id : undefined },
                            { row: row , col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row  <= 8 && row  >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-1].visible : undefined , id: row  <= 8 && row  >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-1].id : undefined },
                          ]
                         
                          
                        } else if(type1 === 1 &&row === row1-3 && col===col1) {
                        
                      array =
                  
                          [
                            { row: row -1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row-2].id : undefined },
                            { row: row -1, col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible:row-1 <= 8 && row-1>= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-2].visible : undefined ,  id:row-1 <= 8 && row-1>= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-2].id : undefined  },
                           { row: row -1, col: col - 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-2].id : undefined },
                           { row: row  , col: col +2 , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row>= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].visible : undefined , id: row <= 8 && row>= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].id : undefined  },
                            { row: row  , col: col - 2, type: 1, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].visible: undefined  ,  id: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].id: undefined },
                           
                         { row: row , col: col - 3, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row <= 8 && row >= 1 && col-3 > 0  && col-3 <=11 ? dataField[col-4].sections[row-1].visible : undefined, id: row <= 8 && row >= 1 && col-3 > 0  && col-3 <=11 ? dataField[col-4].sections[row-1].id : undefined},
                       { row: row , col: col +3, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row <= 8 && row >= 1 && col+3 > 0  && col+3 <=11 ? dataField[col+2].sections[row-1].visible : undefined, id: row <= 8 && row >= 1 && col+3 > 0  && col+3 <=11 ? dataField[col+2].sections[row-1].id : undefined},
                        ]
                       
                         
                        }else if(type1 === 2 &&row === row1-3 && col===col1) {
                         
                          array =
                      
                              [
                                { row: row -1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row-2].id : undefined  },
                                { row: row , col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].visible : undefined , id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined  },
                                { row: row , col: col - 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible:row <= 8 && row>= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].visible : undefined , id:row <= 8 && row>= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].id : undefined},
                                { row: row  , col: col +2 , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row >= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].visible : undefined ,id: row <= 8 && row >= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].id : undefined  },
                                { row: row  , col: col - 2, type: 1, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].visible: undefined ,  id: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].id: undefined },
                               
                             { row: row +1, col: col - 3, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+1 <= 8 && row+1 >= 1 && col-3 > 0  && col-3 <=11 ? dataField[col-4].sections[row].visible : undefined, id: row+1 <= 8 && row+1 >= 1 && col-3 > 0  && col-3 <=11 ? dataField[col-4].sections[row].id : undefined},
                             { row: row +1, col: col +3, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+1 <= 8 && row+1 >= 1 && col+3 > 0  && col+3 <=11 ? dataField[col+2].sections[row].visible : undefined, id: row+1 <= 8 && row+1 >= 1 && col+3 > 0  && col+3 <=11 ? dataField[col+2].sections[row].id : undefined},
                            ]
                           
                             
                            } else if(type1 === 1 &&row === row1 && col===col1+3) {
                              
                          array =
                      
                              [
                                { row: row +2, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row+2 <= 8 && row+2 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row+1].visible : undefined , id: row+2 <= 8 && row+2 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row+1].id : undefined  },
                                { row: row -2, col: col +1, type: 1, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row -2 <= 8 && row-2 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-3].visible : undefined , id: row -2 <= 8 && row-2 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-3].id : undefined  },
                                { row: row -1, col: col + 1, type: 1 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].id : undefined },
                                { row: row , col: col +1, type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row >= 1 && col+1> 0   && col+1 <= 11? dataField[col].sections[row-1].visible : undefined , id: row <= 8 && row >= 1 && col+1> 0   && col+1 <= 11? dataField[col].sections[row-1].id : undefined   },
                                { row: row +1 , col: col + 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row+1 <= 8 && row+1 >= 1 && col+1 >0   && col+1 <=11 ?  dataField[col].sections[row].visible: undefined ,  id: row+1 <= 8 && row+1 >= 1 && col+1 >0   && col+1 <=11 ?  dataField[col].sections[row].id: undefined   },
                               { row: row + 2, col: col + 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+2 <= 8 && row+2 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row+1].visible : undefined, id: row+2 <= 8 && row+2 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row+1].id : undefined},
                              ]
                           
                             
                            } else if(type1 === 2 &&row === row1 && col===col1+3) {
                             
                              array =
                          
                                  [
                                    { row: row +3, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row+3 <= 8 && row+3 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row+2].visible : undefined , id: row+3 <= 8 && row+3 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row+2].id : undefined  },
                                    { row: row -2, col: col +1, type: 1, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row-2  <= 8 && row-2 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-3].visible : undefined , id: row-2  <= 8 && row-2 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-3].id : undefined  },
                                    { row: row -1, col: col + 1, type: 1 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].id : undefined  },
                                    { row: row , col: col +1, type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row >= 1 && col+1 > 0   && col+1 <= 11? dataField[col].sections[row-1].visible : undefined , id: row <= 8 && row >= 1 && col+1 > 0   && col+1 <= 11? dataField[col].sections[row-1].id : undefined  },
                                    { row: row +1 , col: col + 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row+1 <= 8 && row+1 >= 1 && col+1 >0   && col+1 <=11 ?  dataField[col].sections[row].visible: undefined ,  id: row+1 <= 8 && row+1 >= 1 && col+1 >0   && col+1 <=11 ?  dataField[col].sections[row].id: undefined  },
                                 { row: row + 2, col: col + 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+2 <= 8 && row+2 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row+1].visible : undefined  , id: row+2 <= 8 && row+2 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row+1].id : undefined   },
                                  ]
                               
                                 
                                }else if(type1 === 1 &&row === row1 && col===col1-3) {
                               
                              array =
                          
                                  [
                                    { row: row +2, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row+2 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row+1].visible : undefined , id: row+2 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row+1].id : undefined  },
                                    { row: row -2, col: col -1, type: 1, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row-2  <= 8 && row-2 >= 1 && col -1  > 0 && col - 1 <= 11   ? dataField[col-2].sections[row-3].visible : undefined , id: row-2  <= 8 && row-2 >= 1 && col -1  > 0 && col - 1 <= 11   ? dataField[col-2].sections[row-3].id : undefined  },
                                    { row: row -1, col: col - 1, type: 1 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col -1 >0   && col-1 <= 11? dataField[col-2].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col -1 >0   && col-1 <= 11? dataField[col-2].sections[row-2].id : undefined  },
                                { row: row , col: col -1, type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row >= 1 && col-1 > 0   && col-1 <= 11? dataField[col-2].sections[row-1].visible : undefined  , id: row <= 8 && row >= 1 && col-1 > 0   && col-1 <= 11? dataField[col-2].sections[row-1].id : undefined  },
                                   { row: row +1 , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row +1<= 8 && row +1>= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row].visible: undefined , id: row +1<= 8 && row +1>= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row].id: undefined  },
                                 { row: row + 2, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+2 <= 8 && row+2 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row+1].visible : undefined , id: row+2 <= 8 && row+2 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row+1].id : undefined },
                                  ]
                               
                                 
                                } else if(type1 === 2 &&row === row1 && col===col1-3) {
                                
                                  array =
                              
                                      [
                                        { row: row +3, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row+3 <= 8 && row+3 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row+2].visible : undefined , id: row+3 <= 8 && row+3 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row+2].id : undefined  },
                                        { row: row -2, col: col -1, type: 1, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row -2 <= 8 && row-2 >= 1 && col -1  > 0 && col - 1 <= 11   ? dataField[col-2].sections[row-3].visible : undefined ,  id: row -2 <= 8 && row-2 >= 1 && col -1  > 0 && col - 1 <= 11   ? dataField[col-2].sections[row-3].id : undefined  },
                                        { row: row -1, col: col - 1, type: 1 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-2].visible : undefined, id: row-1 <= 8 && row-1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-2].id : undefined },
                                       { row: row , col: col -1, type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row >= 1 && col-1 > 0   && col-1 <= 11? dataField[col-1].sections[row-1].visible : undefined ,id: row <= 8 && row >= 1 && col-1 > 0   && col-1 <= 11? dataField[col-1].sections[row-1].id : undefined  },
                                       { row: row +1 , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row+1 <= 8 && row+1 >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row].visible: undefined ,  id: row+1 <= 8 && row+1 >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row].id: undefined },
                                       { row: row + 2, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+2 <= 8 && row+2 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row+1].visible : undefined, id: row+2 <= 8 && row+2 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row+1].id : undefined },
                                      ]
                                   
                                     
                                    } else {
                                  array =
                          
                                  [
                                   
                                  ]
            
            
                                }
                    
                        return array
                      
                    }
      
            

                    const sector4 = (row:number, col:number,type:number, type1:number,kef?:number, id?:number) => {
    
                     
                     
                       if(type1 === 1 &&row === row1+4 && col === col1) {
                       
                        array =
                    
                            [
                              { row: row +1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id : undefined  },
                              { row: row , col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].visible : undefined , id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined   },
                              { row: row , col: col - 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row  <= 8 && row  >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].visible : undefined , id: row  <= 8 && row  >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].id : undefined },
                              { row: row , col: col+2 , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row  <= 8 && row  >= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].visible : undefined , id: row  <= 8 && row  >= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].id : undefined  },
                              { row: row  , col: col - 2, type: 1, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].visible: undefined ,  id: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].id: undefined   },
                              { row: row - 1, col: col - 3, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-3 > 0  && col-3 <=11 ? dataField[col-4].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col-3 > 0  && col-3 <=11 ? dataField[col-4].sections[row-2].id : undefined },
                              { row: row - 1, col: col + 3, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col+3 > 0  && col+3 <=11 ? dataField[col+2].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col+3 > 0  && col+3 <=11 ? dataField[col+2].sections[row-2].id : undefined},
                              { row: row - 1, col: col - 4, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-4 > 0  && col-4 <=11 ? dataField[col-5].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col-4 > 0  && col-4 <=11 ? dataField[col-5].sections[row-2].id : undefined },
                            
                              { row: row - 1, col: col + 4, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col+4 > 0  && col+4 <=11 ? dataField[col+3].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col+4 > 0  && col+4 <=11 ? dataField[col+3].sections[row-2].id : undefined },
                            ]
                           
                            
                          }else if(type1 === 2 &&row === row1+4 && col === col1) {
                          
                            array =
                        
                                [
                                  { row: row +1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id : undefined  },
                                  { row: row +1, col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row+1  <= 8 && row+1 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row].visible : undefined, id: row+1  <= 8 && row+1 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row].id : undefined  },
                                  { row: row +1, col: col - 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row+1 <= 8 && row+1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row].id : undefined },
                                    { row: row , col: col+2 , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row  >= 1 && col +2> 0   && col+2 <= 11? dataField[col+1].sections[row-1].visible : undefined , id: row <= 8 && row  >= 1 && col +2> 0   && col+2 <= 11? dataField[col+1].sections[row-1].id : undefined  },
                                    { row: row  , col: col - 2, type: 1, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].visible: undefined ,  id: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].id: undefined   },
                                  { row: row , col: col - 3, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row <= 8 && row >= 1 && col-3 > 0  && col-3 <=11 ? dataField[col-4].sections[row-1].visible : undefined , id: row <= 8 && row >= 1 && col-3 > 0  && col-3 <=11 ? dataField[col-4].sections[row-1].id : undefined },
                                  { row: row , col: col + 3, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row <= 8 && row >= 1 && col+3 > 0  && col+3 <=11 ? dataField[col+2].sections[row-1].visible : undefined , id: row <= 8 && row >= 1 && col+3 > 0  && col+3 <=11 ? dataField[col+2].sections[row-1].id : undefined },
                                  { row: row - 1, col: col - 4, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col-4 > 0  && col-4 <=11 ? dataField[col-5].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col-4 > 0  && col-4 <=11 ? dataField[col-5].sections[row-2].id : undefined },
                                
                                  { row: row - 1, col: col + 4, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col+4 > 0  && col+4 <=11 ? dataField[col+3].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col+4 > 0  && col+4 <=11 ? dataField[col+3].sections[row-2].id : undefined },
                                ]
                               
                                
                              } else if(type1 === 1 &&row === row1-4 && col===col1) {
                       
                            array =
                        
                                [
                                  { row: row -1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row-2].id : undefined  },
                                  { row: row -1, col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible:row-1 <= 8 && row-1>= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-2].visible : undefined , id:row-1 <= 8 && row-1>= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-2].id : undefined },
                                 { row: row -1, col: col - 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-2].id : undefined },
                               { row: row  , col: col +2 , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row>= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].visible : undefined  , id: row <= 8 && row>= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].id : undefined },
                                  { row: row  , col: col - 2, type: 1, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].visible: undefined ,  id: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].id: undefined   },
                                  { row: row + 1, col: col - 4, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+1 <= 8 && row+1 >= 1 && col-4 > 0  && col-4 <=11 ? dataField[col-5].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col-4 > 0  && col-4 <=11 ? dataField[col-5].sections[row].id : undefined},
                            
                               { row: row , col: col - 3, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row <= 8 && row >= 1 && col-3 > 0  && col-3 <=11 ? dataField[col-4].sections[row-1].visible : undefined , id: row <= 8 && row >= 1 && col-3 > 0  && col-3 <=11 ? dataField[col-4].sections[row-1].id : undefined },
                               { row: row , col: col +3, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row <= 8 && row >= 1 && col+3 > 0  && col+3 <=11 ? dataField[col+2].sections[row-1].visible : undefined , id: row <= 8 && row >= 1 && col+3 > 0  && col+3 <=11 ? dataField[col+2].sections[row-1].id : undefined },
                               { row: row +1, col: col + 4, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+1 <= 8 && row+1 >= 1 && col+4 > 0  && col+4 <=11 ? dataField[col+3].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col+4 > 0  && col+4 <=11 ? dataField[col+3].sections[row].id : undefined },
                              ]
                             
                               
                              } else if(type1 === 2 &&row === row1-4 && col===col1) {
                       
                                array =
                            
                                    [
                                      { row: row -1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row-1 <= 8 && row-1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row-2].id : undefined },
                                   { row: row , col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].visible : undefined , id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined  },
                                    { row: row , col: col - 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible:row <= 8 && row>= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].visible : undefined , id:row <= 8 && row>= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].id : undefined },
                                   { row: row  , col: col +2 , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row >= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].visible : undefined  , id: row <= 8 && row >= 1 && col+2 > 0   && col+2 <= 11? dataField[col+1].sections[row-1].id : undefined },
                                      { row: row  , col: col - 2, type: 1, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].visible: undefined ,   id: row <= 8 && row >= 1 && col-2 >0   && col-2 <=11 ?  dataField[col-3].sections[row-1].id: undefined },
                                      { row: row + 1, col: col - 4, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+1 <= 8 && row+1 >= 1 && col-4 > 0  && col-4 <=11 ? dataField[col-5].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col-4 > 0  && col-4 <=11 ? dataField[col-5].sections[row].id : undefined },
                                
                                   { row: row +1, col: col - 3, type: 2, kef: row+1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+1 <= 8 && row+1 >= 1 && col-3 > 0  && col-3 <=11 ? dataField[col-4].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col-3 > 0  && col-3 <=11 ? dataField[col-4].sections[row].id : undefined },
                                   { row: row +1 , col: col +3, type: 2, kef: row+1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+1 <= 8 && row+1 >= 1 && col+3 > 0  && col+3 <=11 ? dataField[col+2].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col+3 > 0  && col+3 <=11 ? dataField[col+2].sections[row].id : undefined },
                                   { row: row +1, col: col + 4, type: 2, kef: row+1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+1 <= 8 && row+1 >= 1 && col+4 > 0  && col+4 <=11 ? dataField[col+3].sections[row].visible : undefined , id: row+1 <= 8 && row+1 >= 1 && col+4 > 0  && col+4 <=11 ? dataField[col+3].sections[row].id : undefined },
                                  ]
                                 
                                   
                                  }else if(type1 === 1 &&row === row1 && col===col1+4) {
                       
                                array =
                            
                                    [
                                      { row: row +2, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row+2 <= 8 && row+2 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row+1].visible : undefined , id: row+2 <= 8 && row+2 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row+1].id : undefined },
                                { row: row -2, col: col +1, type: 1, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row -2 <= 8 && row-2 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-3].visible : undefined , id: row -2 <= 8 && row-2 >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-3].id : undefined  },
                                { row: row -1, col: col + 1, type: 1 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].id : undefined },
                                { row: row , col: col +1, type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row >= 1 && col+1> 0   && col+1 <= 11? dataField[col].sections[row-1].visible : undefined , id: row <= 8 && row >= 1 && col+1> 0   && col+1 <= 11? dataField[col].sections[row-1].id : undefined  },
                                { row: row +1 , col: col + 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row+1 <= 8 && row+1 >= 1 && col+1 >0   && col+1 <=11 ?  dataField[col].sections[row].visible: undefined , id: row+1 <= 8 && row+1 >= 1 && col+1 >0   && col+1 <=11 ?  dataField[col].sections[row].id: undefined  },
                               { row: row + 2, col: col + 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+2 <= 8 && row+2 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row+1].visible : undefined , id: row+2 <= 8 && row+2 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row+1].id : undefined },
                                     { row: row -3, col: col + 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-3 <= 8 && row-3 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row-4].visible : undefined, id: row-3 <= 8 && row-3 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row-4].id : undefined  },
                                    ]
                                 
                                   
                                  }else if(type1 === 2 &&row === row1 && col===col1+4) {
                       
                                    array =
                                
                                        [
                                          { row: row +2, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row+2 <= 8 && row+2 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row+1].visible : undefined , id: row+2 <= 8 && row+2 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row+1].id : undefined   },
                                          { row: row -1, col: col + 1, type: 1 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].visible : undefined, id: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].id : undefined  },
                                          { row: row , col: col +1, type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row >= 1 && col+1> 0   && col+1 <= 11? dataField[col].sections[row-1].visible : undefined , id: row <= 8 && row >= 1 && col+1> 0   && col+1 <= 11? dataField[col].sections[row-1].id : undefined   },
                                          { row: row +1 , col: col + 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row+1 <= 8 && row+1 >= 1 && col+1 >0   && col+1 <=11 ?  dataField[col].sections[row].visible: undefined ,  id: row+1 <= 8 && row+1 >= 1 && col+1 >0   && col+1 <=11 ?  dataField[col].sections[row].id: undefined  },
                                         { row: row + 2, col: col + 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+2 <= 8 && row+2 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row+1].visible : undefined, id: row+2 <= 8 && row+2 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row+1].id : undefined },
                                         { row: row + 3, col: col + 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+3 <= 8 && row+3 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row+2].visible : undefined , id: row+3 <= 8 && row+3 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row+2].id : undefined},
                                         { row: row -2, col: col + 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-2 <= 8 && row-2 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row-3].visible : undefined , id: row-2 <= 8 && row-2 >= 1 && col+1 > 0  && col+1 <=11 ? dataField[col].sections[row-3].id : undefined  },
                                        ]
                                     
                                       
                                      } else if(type1 === 1 &&row === row1 && col===col1-4) {
                       
                                    array =
                                
                                        [
                                          { row: row +2, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row+2 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row+1].visible : undefined , id: row+2 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row+1].id : undefined  },
                                          { row: row -2, col: col -1, type: 1, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined, visible: row-2  <= 8 && row-2 >= 1 && col -1  > 0 && col - 1 <= 11   ? dataField[col-2].sections[row-3].visible : undefined ,  id: row-2  <= 8 && row-2 >= 1 && col -1  > 0 && col - 1 <= 11   ? dataField[col-2].sections[row-3].id : undefined  },
                                          { row: row -1, col: col - 1, type: 1 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col -1 >0   && col-1 <= 11? dataField[col-2].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col -1 >0   && col-1 <= 11? dataField[col-2].sections[row-2].id : undefined },
                                      { row: row , col: col -1, type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row >= 1 && col-1 > 0   && col-1 <= 11? dataField[col-2].sections[row-1].visible : undefined , id: row <= 8 && row >= 1 && col-1 > 0   && col-1 <= 11? dataField[col-2].sections[row-1].id : undefined  },
                                         { row: row +1 , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row +1<= 8 && row +1>= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row].visible: undefined , id: row +1<= 8 && row +1>= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row].id: undefined  },
                                       { row: row + 2, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+2 <= 8 && row+2 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row+1].visible : undefined, id: row+2 <= 8 && row+2 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row+1].id : undefined },
                                         { row: row -3, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-3 <= 8 && row-3 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-4].visible : undefined, id: row-3 <= 8 && row-3 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-4].id : undefined },
                                        ]
                                     
                                       
                                      } else if(type1 === 2 &&row === row1 && col===col1-4) {
                       
                                        array =
                                    
                                            [
                                              { row: row +2, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined ,visible: row+2 <= 8 && row+2 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row+1].visible : undefined, id: row+2 <= 8 && row+2 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row+1].id : undefined   },
                                              { row: row -1, col: col - 1, type: 1 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined,visible: row-1 <= 8 && row-1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-2].visible : undefined , id: row-1 <= 8 && row-1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-2].id : undefined},
                                              { row: row , col: col -1, type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined ,visible: row <= 8 && row >= 1 && col-1 > 0   && col-1 <= 11? dataField[col-1].sections[row-1].visible : undefined , id: row <= 8 && row >= 1 && col-1 > 0   && col-1 <= 11? dataField[col-1].sections[row-1].id : undefined  },
                                              { row: row +1 , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined ,   visible: row+1 <= 8 && row+1 >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row].visible: undefined ,  id: row+1 <= 8 && row+1 >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row].id: undefined  },
                                              { row: row + 2, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+2 <= 8 && row+2 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row+1].visible : undefined, id: row+2 <= 8 && row+2 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row+1].id : undefined, },
                                             { row: row + 3, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row+3 <= 8 && row+3 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row+2].visible : undefined,   id: row+3 <= 8 && row+3 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row+2].id : undefined },
                                             { row: row -2, col: col - 1, type: 2, kef: row-1 <= 8 && row-1 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-2].kef : undefined,visible: row-2 <= 8 && row-2 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-3].visible : undefined, id: row-2 <= 8 && row-2 >= 1 && col-1 > 0  && col-1 <=11 ? dataField[col-2].sections[row-3].id : undefined, },
                                            ]
                                         
                                           
                                          } else {
                                        array =
                                
                                        [
                                         
                                        ]
                  
                  
                                      }
                          
                              return array
                            
                          }




    let returnedCoordinatesArray: ICanGo[] = [{ radius: 0, cells: [{id:0, row: 0, col: 0, type: 1,}] }]
    let _newArray: ICanGo = { radius: 0, cells: [{  row: row, col: col, type: type, visible:false}] }
    let returnedCoordinatesArray1: ICanGo[] = [{ radius: 0, cells: [{id:0, row: 0, col: 0, type: 1,}] }]
    let _newArray1: ICanGo = { radius: 0, cells: [{  row: row, col: col, type: type, visible:false}] }

   const s = returnedCoordinatesArray.map((cell) => cell.cells.map((cell) =>sector(row,col,type) )) 
   
  const g = s.flat(2).map((cell) => sector1(cell.row,cell.col,cell.type,type))
  const h5 = g.flat(1).map((cell) => sector2(cell.row,cell.col,cell.type,type))
  const h6 = h5.flat(3).map((cell) => sector3(cell.row,cell.col,cell.type,type))
  const h7 = h6.flat(3).map((cell) => sector4(cell.row,cell.col,cell.type,type))
 
  _newArray.cells.push(...s.flat(3),...g.flat(3),...h5.flat(3),...h6.flat(3),...h7.flat(3))
  returnedCoordinatesArray.push(_newArray)
 
  /*  for (let i = 0; i < 0; i++) {
      if (i === 0) {

    //    returnedCoordinatesArray[i].radius = 1
     //   returnedCoordinatesArray[i].cells = sector(row,col,type) //[ {row: 3, col: 2, type: 2}]
      //  returnedCoordinatesArray.map((cell) => cell.cells.map((cell) => sector1(cell.row,cell.col,cell.type)))
       }
       if (i > 0) {
      
        let _newArray: ICanGo = { radius: 0, cells: [{  row: row, col: col, type: type, visible:false}] }
        let cells: cell[] = [{ id:0, row: 1, col: 1, type: 1, kef:3 }]
        _newArray.radius = i+1
     
       returnedCoordinatesArray[i -1].cells.map(coordinate => {
          
      // const position = sector(coordinate.row, coordinate.col, coordinate.type )
         // console.log(position)
        // sector(coordinate.row, coordinate.col, coordinate.type )
      const position =   sector1(coordinate.row,coordinate.col,coordinate.type)



     _newArray.cells.push(...position)
         
         
       
          }
          
        )
      
        
        
      
      }
     
     
    
    }    */
    let j: cell
    let c: cell
    let o: cell
    let i: cell
   
    
    
   
 const s1 = returnedCoordinatesArray.map((cell) => cell.cells.map((cell) => {
    let mas1 = []
   
     
    
       
     if (  cell.row === row1+1 && cell.col === col1) {
                 
      for(let i =0;i <1;i++) {
        
         j = {row: row1 +1 , col: col1,type:type,  id: row1-2-i <= 8 && row1-2-i >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-3-i].id : undefined }
         mas1.push(j)
             }
          if( cell.visible === true && type === 1 ) {
            false5 = true
              k = {row: row1 +2 , col: col1+1,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
              c = {row: row1 +2 , col: col1-1,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
     
               mas1.push(j,k,c)
        
          
              
          }else if ( cell.visible === true && type === 2) {
             false5 = true
               k = {row: row1 +2 , col: col1+1,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
               c = {row: row1 +2 , col: col1-1,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
     
               mas1.push(j,k,c)
        



             }
             } else if (false5 && cell.row ===row1+2 && cell.col === col1 ){

  
                for(let i =0;i <1;i++) {
      
                    j = {row: row1 +2 , col: col1,type:type,  id: row1-3-i <= 8 && row1-3-i >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4-i].id : undefined }
              mas1.push(j)
                }
               if ( cell.visible === true) {

                   false6 = true
                  }
  


          } 
          else if (false6 && cell.row ===row1+3 && cell.col === col1) {
    
             for(let i =0;i<1; i++) {
        
             j = {row: row1 +3 , col: col1,type:type, id: row1-4-i <= 8 && row1-4-i >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-5-i].id : undefined }
             mas1.push(j)

              }
       
               if ( cell.visible === true) {
         
                 false7 = true
       
             }
      
           } else if (false7 && cell.row ===row1+4 && cell.col === col1) {
       
                for(let i =0;i<1; i++) {
         
               j = {row: row1 +4 , col: col1,type:type, id: row1-5 <= 8 && row1-5 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-6].id : undefined }
                mas1.push(j)
                }
             if ( cell.visible === true) {

                  false8 = true
               }


               
               } else if ( false8 ) {
                 for(let i =0;i<1; i++) {
           
                   j = {row: row1 +5 , col: col1,type:type, id: row1-5 <= 8 && row1-5 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-6].id : undefined }
                     mas1.push(j)
    
              
              
                    }
              } else if (  cell.row === row1-1 && cell.col === col1 ) {
                  
                  for(let i =0;i <1;i++) {
                    
                     j = {row: row1 -1 - i, col: col1,type:type,  id: row1-2-i <= 8 && row1-2-i >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-3-i].id : undefined }
                     mas1.push(j)
                  }
                  if( cell.visible === true && type === 1 ) {
                    false1 = true
                    k = {row: row1 -2 , col: col1+1,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                    c = {row: row1 -2 , col: col1-1,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                  
                    mas1.push(j,k,c)
                    
                      
                    
                  } else if ( cell.visible === true && type === 2) {
                    false0 = true
                    false1 = true
                    k = {row: row1 -1 , col: col1+1,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                    c = {row: row1 -1 , col: col1-1,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                    
                    mas1.push(j,k,c)
                     
 


                  }
                 }else if (false1 && cell.row ===row1-2 && cell.col === col1 ){
              
                
                for(let i =0;i <1;i++) {
                    
                   j = {row: row1 -2 - i, col: col1,type:type,  id: row1-3-i <= 8 && row1-3-i >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4-i].id : undefined }
                 mas1.push(j)
                 }
                    if ( cell.visible === true) {

                      false2 = true
                    }
                

      
                } 
                else if (false2 && cell.row ===row1-3 && cell.col === col1) {
                  
                      for(let i =0;i<1; i++) {
                      
                      j = {row: row1 -3 , col: col1,type:type, id: row1-4-i <= 8 && row1-4-i >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-5-i].id : undefined }
                      mas1.push(j)
            
                       }
                      
                         if ( cell.visible === true) {
                       
                        false3 = true
                     
                          }
                    
                     } else if (false3 && cell.row ===row1-4 && cell.col === col1) {
                     
                      for(let i =0;i<1; i++) {
                       
                        j = {row: row1 -4 , col: col1,type:type, id: row1-5 <= 8 && row1-5 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-6].id : undefined }
                        mas1.push(j)
                         }
                          if ( cell.visible === true) {
                           
                             false4 = true
                           }


                        
                        } else if ( false4 ) {
                          for(let i =0;i<1; i++) {
                         
                            j = {row: row1 -5 , col: col1,type:type, id: row1-5 <= 8 && row1-5 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-6].id : undefined }
                            mas1.push(j)
                  
                             }
                            
                        } else if ( cell.row === row1 && cell.col === col1-1|| cell.row === row1-1 && cell.col === col1-1 ) { // боковые пошли
                         
                             for(let i =0; i<1;i++){
                                 j = {row: type === 2 ?row1 : row1 -1, col: col1-1,type:type}
                                mas1.push(j)
                          
                             }
                           
                          if( row1 === 1 || col1 === 1  ? false :dataField[col1-2].sections[row1-2].visible === true && type === 1 ) {
                            false9 = true
                        
                            k = {row: row1 , col: col1-2,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                            c = {row:  row1-2  , col: col1-1,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                            
                            mas1.push(j,k,c)
                            
                              
                            
                          } else if ( cell.visible === true && type === 2) {
                            console.log()
                            false9 = true
                            k = {row: row1  , col: col1-2,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                            c = {row: row1 -1 , col: col1-1,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                           
                            mas1.push(j,k,c)



                          }

                        } else if (false9 && cell.row === row1-1 && cell.col === col1-2 ||  false9 &&  cell.row === row1-2 && cell.col === col1-2 ) {
                       
                             

                          for(let i =0; i<1;i++){
                            j = {row: type === 2  ?  row1 -1 : row1 -1,col: type === 2  ?  col1 -2 :  col1-2,type:type}
                            mas1.push(j)
                           
                          
                          }
                          if ( row1 === 8?false : cell.visible === true || dataField[col-2].sections[row].visible === true ) {

                            false10 = true
                          }
                         



                        }  else if ( false10 &&  cell.row === row1-1 && cell.col === col1-3 ||  false10 &&  cell.row === row1-2 && cell.col === col1-3) {
                              
                         

                          for(let i =0; i<1;i++){
                            j = {row: type === 2  ?  row1 -1 : row1 -2 , col: col1-3,type:type}
                            mas1.push(j)
                          
                          }
                          
                          if (cell.visible === true  ) {

                            false11 = true
                          }

                         
                        } else if ( false11    && cell.row === row1-2  ||  false11    && cell.row === row1-2 ) {
                          
                        
                          for(let i =0; i<1;i++){
                            j = {row: type === 2  ?  row1 -2 : row1 -2  , col: col1-4,type:type}
                            mas1.push(j)
                           
                          
                         


                          }
                         
                          if ( row1 === 7 || row1 === 2?false : cell.visible === true || dataField[col-4].sections[row+1].visible === true) {

                            false12 = true
                          }
                        
                         

                        }else if (false12) {
                          
                          
                          for(let i =0; i<1;i++){
                            j = {row:type === 2  ?  row1 -2 : row1 -3   , col: col1-5,type:type}
                            mas1.push(j)
                           
                          
                         


                          }
                         
                         
                        
                         

                        }    else if (  cell.row === row1+1 && cell.col === col1-1 || cell.row === row1 && cell.col === col1-1) { // боковые пошли
                         
                          for(let i =0; i<1;i++){
                              j = {row: type === 2  ?  row1 +1 : row1   , col: col1-1,type:type}
                             mas1.push(j)
                       
                          }
                        
                       if( col1 === 1 ? false:  dataField[col1-2].sections[row1-1].visible === true&& type === 1 ) {
                        false13 = true
                     
                         k = {row: row1  , col: col1-2,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                         c = {row: row1 +1 , col: col1-1,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                        
                         mas1.push(j,k,c)
                         
                           
                         
                       } else if ( cell.visible === true && type === 2 && dataField[col-2].sections[row].visible === true) {
                         false13 = true
                         k = {row: row1  , col: col1-2,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                         c = {row: row1 +2 , col: col1-1,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                        
                         mas1.push(j,k,c)



                       }

                     }  if (false13 &&  cell.row === row1+1 && cell.col === col1-2 ) {
                    
                     

                       for(let i =0; i<1;i++){
                         j = {row: type === 2 ? row1 +1 : row1 +1, col: col1-2,type:type}
                         mas1.push(j)
                        
                       
                       }
                       if ( cell.visible === true) {

                         false14 = true
                       }
                      



                     }  else if (false14 &&   cell.row === row1+2 && cell.col === col1-3 ||  false14 && cell.row === row1+1 && cell.col === col1-3) {
                    
                      

                       for(let i =0; i<1;i++){
                         j = {row: type === 2 ? row1 +2 : row1+2 , col: col1-3,type:type}
                         mas1.push(j)
                       
                       }
                      
                       if ( cell.visible === true) {

                         false15 = true
                       }

                      
                     } else if (false15 &&  cell.row === row1+2 && cell.col-1 === col1-3 || false15 && cell.row === row1+2  ) {
                       
                     
                       for(let i =0; i<1;i++){
                         j = {row: type === 2 ?  row1 +2 : row1+2 , col: col1-4,type:type}
                         mas1.push(j)
                        
                       
                      


                       }
                      
                       if ( cell.visible === true) {

                         false16 = true
                       }
                     
                      

                     }else if (false16) {
                       
                       
                       for(let i =0; i<1;i++){
                         j = {row: type === 2 ? row1 +3 : row1+2 , col: col1-5,type:type}
                         mas1.push(j)
                        
                       
                      


                       }
                      
                      
                     
                      

                     }   else if ( cell.row === row1+1 && cell.col === col1+1 ||  cell.row === row1 && cell.col === col1+1 ) { // боковые пошли
                         
                      for(let i =0; i<1;i++){
                          j = {row: type === 2? row1 +1 : row1, col: col1+1,type:type}
                         mas1.push(j)
                        
                      }
                    
                   if( col1 === 11 ||row1 === 1 ? false :dataField[col1].sections[row-1].visible === true && type === 1 ) {
                     false17 = true
                     
                     k = {row:  row1+1  , col: col1+1,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                     c = {row:   row1  , col: col1+2,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                    
                     mas1.push(j,k,c)
                     
                       
                     
                   } else if ( cell.visible === true && type === 2) {
                     false17 = true
                     k = {row: row1  , col: col1+2,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                     c = {row: row1 +2 , col: col1+1,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                    
                     mas1.push(j,k,c)



                   }

                 } else if (false17 && type === 2 && cell.row === row1+1 && cell.col === col1+2 || false17 &&  cell.row === row1+1 && cell.col === col1+2) {
                
                 

                   for(let i =0; i<1;i++){
                     j = {row:type === 2 ? row1 +1 : row+1 , col: col1+2,type:type}
                     mas1.push(j)
                    
                   
                   }
                   if ( cell.visible === true) {

                     false18 = true
                   }
                  



                 }  else if (false18  ) {
                
                   

                   for(let i =0; i<1;i++){
                     j = {row:type === 2 ? row1 +2:row1+1 , col: col1+3,type:type}
                     mas1.push(j)
                   
                   }
                  
                   if ( dataField[col1+2].sections[row].visible === true) {
                  
                     false19 = true
                   }

                  
                 }  if (false19  ) {
                  
                   
                   for(let i =0; i<1;i++){
                     j = {row: type === 2? row1 +2 :row1+2 , col: col1+4,type:type}
                     mas1.push(j)
                    
                   
                  


                   }
                  
                   if ( cell.visible === true || dataField[col1+3].sections[row+1].visible === true) {
                    
                     false20 = true
                   }
                 
                  

                 } if (false20) {
                   
                   
                   for(let i =0; i<1;i++){
                     j = {row: type ===2 ? row1 +3 :row+2 , col: col1+5,type:type}
                     mas1.push(j)
                    
                   
                  


                   }
                  
                  
                 
                  

                 }      else if ( cell.row === row1 && cell.col === col1+1 ||cell.row === row1 -1&& cell.col === col1+1 ) { // боковые пошли
                         
                  for(let i =0; i<1;i++){
                      j = {row: type === 2 ? row1:row1-1 , col: col1+1,type:type}
                     mas1.push(j)
               
                  }
                
               if( cell.visible === true && type === 1 ) {
                false21 = true
             
                 k = {row: row1 -2 , col: col1+1,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                 c = {row: row1  , col: col1+2,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                
                 mas1.push(j,k,c)
                 
                   
                 
               } else if ( row1 !== 8 || col1===2  ?false :  type === 2 && dataField[col].sections[row-1].visible === true) {
                 false21 = true
                 k = {row: row1  , col: col1+2,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                 c = {row: row1 -1 , col: col1+1,type:type,  id: row1-3 <= 8 && row1-3 >= 1 && col1   > 0  && col1 <= 11   ?  dataField[col1-1].sections[row1-4].id : undefined }
                 console.log(false1)
                 mas1.push(j,k,c)



               }

             } else if (false21 && type === 2 && cell.row === row1-1 && cell.col === col1+2 ||  false21 &&cell.row === row1-1 && cell.col === col1+2 ) {
            
             

               for(let i =0; i<1;i++){
                 j = {row: type ===2 ? row1 -1 : row1-1 , col: col1+2,type:type}
                 mas1.push(j)
                
               
               }
               if ( col1 === 1 || row1 === 1?false : cell.visible === true || dataField[col1+1].sections[row1-2].visible === true) {
                  
                 false22 = true
               }
              



             }  else if (false22 &&  cell.row === row1-2 && cell.col === col1+3) {
            
              
                          
               for(let i =0; i<1;i++){
                 j = {row: type === 2?row1 -1: row1-2 , col: col1+3,type:type}
                 mas1.push(j)
               
               }
              
               if (  row1 === 2?false :cell.visible === true || dataField[col1+2].sections[row1-3].visible === true) {
                     
                 false23 = true
               }

              
             }  if (false23 &&   cell.row === row1-2  ) {
                
             
               for(let i =0; i<1;i++){
                 j = {row: type === 2? row1 -2: row-2 , col: col1+4,type:type}
                 mas1.push(j)
                
               
              


               }
              
               if ( cell.visible === true) {

                 false24 = true
               }
             
              

             }else if (false24) {
               
               
               for(let i =0; i<1;i++){
                 j = {row: row1 -3 , col: col1+5,type:type}
                 mas1.push(j)
                
               
              


               }
              
              
             
              

             }

               if ( false1 && cell.col === col1-1 && row1-1 === cell.row ) { // лево-верху
                         

                          
                          if ( col1 === 1 ?false: dataField[col1-2 ].sections[row1-2].visible === true  && false1) {
                            c = {row: row1 -2 , col: col1-1,type:type}
                            mas1.push(c)
                             false25 = true
                          }

               } if ( !false9 && cell.col === col1-1 && row1-1 === cell.row) {

                          if (row1 ===1 || col1 === 1  ? false :dataField[col1-2].sections[row1-2].visible === true && false9) {
                            c = {row: row1 -2 , col: col1-2,type:type}
                            mas1.push(c)
                             false26 = true
                          } 
                          
               }else if (false9 && false1) {


                          if (dataField[col1-2].sections[row1-2].visible === true && false9 && false1) {
                            c = {row: row1 -2 , col: col1-2,type:type}
                            j = {row: row1 -2 , col: col1-1,type:type}
                            mas1.push(c,j)
                           false27 = true
                        
                              if (!false27 ) {
                                if ( row1 === 2 || col1 === 11 ||row1 === 1 ? false :dataField[col1-3].sections[row1-3].visible === true){
                                  console.log(33333)
                                c = {row: row1 -3 , col: col1-2,type:type}
                                j = {row: row1 -2 , col: col1-3,type:type}
                                false41 = true
                                mas1.push(c,j)
                                if ( false41 && dataField[col1-4].sections[row1-3].visible === true) {
                                  c = {row: row1 -3 , col: col1-3,type:type}
                                  j = {row: row1 -3 , col: col1-4,type:type}
                                  mas1.push(c,j)
                              }
                              


                                }



                               
                                  if ( col1 === 10 || col1 === 11 ||row1 === 1 ? false : dataField[col1-2].sections[row1-3].visible ===true){
                                    c = {row: row1 -3 , col: col1-1,type:type}
                                    j = {row: row1 -3 , col: col1-2,type:type}
                                    mas1.push(c,j)
                                    false42 = true
                                  
                                 
                                    if (false42 &&dataField[col1-2].sections[row1-4].visible === true) {
                                      c = {row: row1 -4 , col: col1-1,type:type}
                                      j = {row: row1 -4 , col: col1-2,type:type}
                                      mas1.push(c,j)
                                    }
                                           
                                  }


                                  if (false42&&false41 &&dataField[col1-3].sections[row1-4].visible === true) {
                                    c = {row: row1 -3 , col: col1-3,type:type}
                                    j = {row: row1 -4 , col: col1-2,type:type}
                                    mas1.push(c,j)
                                         
                          }


                              }
                          } 
                        
      
               
               
               
                       } else if ( false25 && cell.col === col1-1 && row1-2 === cell.row ) {

                          if(cell.visible === true) {
                             c = {row: row1 -3 , col: col1-1,type:type }
                             o = {row: row1 -3 , col: col1-2,type:type }
                            
                              false28 = true
                          mas1.push(c,o)
                          }
                            else if (cell.visible === false) {
                            o = {row: row1 -3 , col: col1-2,type:type}
                            mas1.push(c)

                          }

                        


              }  else if ( false28  ) {
                        
                           if(   row1 === 3 ? false : dataField[col-2].sections[row-4].visible === true) {
                            
                            c = {row: row1 -4 , col: col1-1,type:type}
                             
                            mas1.push(c)
                        
                                     

                           }

                         
                          
                        
                          
    
                      
              }  
               else if ( false26  ) {  ///
                       
                          if(dataField[col1-3].sections[row-3].visible === true) {
                           c = {row:row1-3, col: col1-2,type:type}
                          o = {row: type === 2?  row1 -2  : row1-3 , col: type === 2? col1-3 : col1-3,type:type}
                         
                            false40 = true
                          mas1.push(c,o)
                          } else if (false) {
                         o = {row: row1 -3 , col: col1-1,type:type}
                            mas1.push(c)
                             
                          }

                        


                       } else if (false40 ) {
                        if(dataField[col1-4].sections[row-3].visible === true) {
                          c = {row:row1-3, col: col1-4,type:type}
                      
                        
                         
                         mas1.push(c)
                         } 




                       }                 else if (  false5 && cell.col === col1-1 && row1+2 === cell.row) { // лево вниз
                         

                          
                        if  (   row1 === 7 || col1 === 1 ?false : dataField[col1-2].sections[row1+1].visible === true && false5) {
                              
                          c = {row: row1 +3 , col: col1-1,type:type}
                          mas1.push(c)
                           false50 = true
                        }

             }else if ( false13 && cell.col === col1-1 && row1+2 === cell.row) {

                        if ( row1 === 7||row1 === 8 ? false :dataField[col1-2].sections[row1+1].visible === true && false13) {
                          c = {row: row1 +2 , col: col1-2,type:type}
                          mas1.push(c)
                           false51 = true
                        } 
                        
             }else if (false5 && false13) {
                           

                        if (  row1 === 7 ? false: dataField[col1-2].sections[row1+1].visible === true && false5 && false13) {
                          c = {row: row1 +2 , col: col1-2,type:type}
                          j = {row: row1 +2 , col: col1-1,type:type}
                          mas1.push(c,j)
                         false52 = true
                       
                            if (false52) {
                              if (dataField[col1-3].sections[row1+1].visible === true){
                              c = {row: row1 +3 , col: col1-2,type:type}
                              j = {row: row1 +3 , col: col1-3,type:type}
                              false53 = true
                              mas1.push(c,j)
                              if ( false53 && dataField[col1-4].sections[row1+2].visible === true) {
                                c = {row: row1 +4 , col: col1-3,type:type}
                                j = {row: row1 +3 , col: col1-4,type:type}
                                mas1.push(c,j)
                            }
                            


                              }



                             
                                if ( row1 === 6 ? false :dataField[col1-2].sections[row1+2].visible ===true){
                                  c = {row: row1 +4 , col: col1-1,type:type}
                                  j = {row: row1 +3 , col: col1-2,type:type}
                                  mas1.push(c,j)
                                  false54 = true
                                
                               
                                  if (false54 &&dataField[col1-2].sections[row1+3].visible === true) {
                                    c = {row: row1 +5 , col: col1-1,type:type}
                                    j = {row: row1 +4 , col: col1-2,type:type}
                                    mas1.push(c,j)
                                  }
                                         
                                }


                                if (false54&&false53 &&dataField[col1-3].sections[row1+2].visible === true) {
                                  c = {row: row1 +4 , col: col1-3,type:type}
                                  j = {row: row1 +4 , col: col1-2,type:type}
                                  mas1.push(c,j)
                                       
                        }


                            }
                        } 
                      
    
             
             
             
                     } else if ( false50 && cell.col === col1-1 && row1+3 === cell.row ) {

                        if( row1 === 6 ? false :dataField[col1-2].sections[row1+2].visible === true) {
                           c = {row: row1 +4 , col: col1-1,type:type }
                           o = {row: row1 +3 , col: col1-2,type:type }
                          
                            false55 = true
                        mas1.push(c,o)
                        }
                          else if (cell.visible === false) {
                          o = {row: row1 -3 , col: col1-2,type:type}
                          mas1.push(c)

                        }

                      


            }  else if ( false55  ) {
                      
                         if( row1 === 5 ? false :  dataField[col-2].sections[row+3].visible === true) {
                          
                          c = {row: row1 +5 , col: col1-1,type:type}
                           
                          mas1.push(c)
                      
                                   

                         }

                       
                        
                      
                        
  
                    
            }  
             else if ( false51  ) {  ///
                    
                        if(row1 === 1? false :dataField[col1-3].sections[row+1].visible === true) {
                         c = {row:row1+3, col: col1-2,type:type}
                        o = {row: row1 +3 , col: col1-3,type:type}
                                       
                          false56 = true
                        mas1.push(c,o)
                        } else if (row1 === 2?false :row1 === 1? false :dataField[col1-3].sections[row-3].visible === false) {
                       o = {row: row1 -3 , col: col1-1,type:type}
                          mas1.push(c)
                           
                        }

                      


                     } else if (false56) {
                      if(dataField[col1-3].sections[row+2].visible === true) {
                        c = {row:row1+4, col: col1-2,type:type}
                    
                      
                       
                       mas1.push(c)
                       } 




                     }              else if (  false5 && cell.col === col1+1 && row1+2 === cell.row) { // право вниз
                         
                             
                          
                      if (  row1 === 7 ? false :dataField[col1].sections[row1+1].visible === true && false5) {
                             
                        c = {row: row1 +3 , col: col1+1,type:type}
                        mas1.push(c)
                         false60 = true
                      }

           }else if ( false17 && cell.col === col1+1 && row1+2 === cell.row) {

                      if (row1 === 1 || row1 === 8 || row1 === 7 ? false :dataField[col1+1].sections[row1+1].visible === true && false17) {
                        c = {row: row1 +2 , col: col1+2,type:type}
                        mas1.push(c)
                         false61 = true
                      } 
                      
           }else if (false5 && false17) {
                        

                      if (dataField[col1].sections[row1+1].visible === true && false5 && false17) {
                        c = {row: row1 +2 , col: col1+2,type:type}
                        j = {row: row1 +2 , col: col1+1,type:type}
                        mas1.push(c,j)
                       false65 = true
                     
                          if (false65) {
                            if (row1 === 6?false : dataField[col1].sections[row1+2].visible === true){
                            c = {row: row1 +4 , col: col1+1,type:type}
                            j = {row: row1 +3 , col: col1+2,type:type}
                            false66 = true
                            mas1.push(c,j)
                            if ( false66 && dataField[col1].sections[row1+3].visible === true) {
                              c = {row: row1 +5 , col: col1+1,type:type}
                              j = {row: row1 +4 , col: col1+2,type:type}
                              mas1.push(c,j)
                          }
                          


                            }



                           
                              if (dataField[col1+1].sections[row1+1].visible ===true){
                                c = {row: row1 +3 , col: col1+2,type:type}
                                j = {row: row1 +3 , col: col1+3,type:type}
                                mas1.push(c,j)
                                false67 = true
                              
                             
                                if (false67 &&dataField[col1+2].sections[row1+2].visible === true) {
                                  c = {row: row1 +3 , col: col1+4,type:type}
                                  j = {row: row1 +4 , col: col1+3,type:type}
                                  mas1.push(c,j)
                                }
                                       
                              }


                              if (false67&&false66 &&dataField[col1+1].sections[row1+2].visible === true) {
                                c = {row: row1 +4 , col: col1+2,type:type}
                                j = {row: row1 +4 , col: col1+3,type:type}
                                mas1.push(c,j)
                                     
                      }


                          }
                      } 
                    
  
           
           
           
                   } else if (false60) {
                 
                      if( row1 === 6 ? false :dataField[col1].sections[row1+2].visible === true) {
                         c = {row: row1 +3 , col: col1+2,type:type }
                         o = {row: row1 +4 , col: col1+1,type:type }
                        
                          false63 = true
                      mas1.push(c,o)
                      }
                        else if (cell.visible === false) {
                        o = {row: row1 -3 , col: col1-2,type:type}
                        mas1.push(c)

                      }

                    


                      }  else if ( false63  ) {
                    
                       if(  dataField[col+1].sections[row+3].visible === true) {
                        
                        c = {row: row1 +5 , col: col1+1,type:type}
                         
                        mas1.push(c)
                    
                                 

                       }

                     
                      
                    
                      

                  
                      }  
                     else if ( false61  ) {  ///
           
                   
                      if(dataField[col1+1].sections[row+1].visible === true) {
                       c = {row:row1+3, col: col1+2,type:type}
                      o = {row: row1 +3 , col: col1+3,type:type}
                     
                        false64 = true
                      mas1.push(c,o)
                      } else if (dataField[col1-3].sections[row-3].visible === false) {
                     o = {row: row1 -3 , col: col1-1,type:type}
                        mas1.push(c)
                         
                      }

                    


                   } else if (false64) {
                    if(dataField[col1+2].sections[row+2].visible === true) {
                      c = {row:row1+4, col: col1+3,type:type}
                  
                    
                     
                     mas1.push(c)
                     } 

  
                   

           
                    }
                      
                      
                      
                
                        

                
                           
                        
                      
                        
                      
                        
    
                          return mas1    }  ) ) 


                    let s10 =      returnedCoordinatesArray.map((cell) =>    cell.cells.map((cell) => {
                                  let mas2 = []

                                  if ( row1 === 1 || col1 === 1 ? false : dataField[col1-1].sections[row1-2].visible === true) { // право-верху
                                        
                                         
                           
                                  if ( row1 === 1 || col1 === 11 ? false  :dataField[col1].sections[row1-2].visible === true) {
                                    c = {row: row1 -2 , col: col1+1,type:type}
                                    mas2.push(c)
                                 
                                  }
                               
                                  
            
                                  }if ( row1 === 1 || col1 === 11 ? false  :dataField[col1].sections[row1-1].visible === true) {
                               
                                    if (row1 === 1 ||col1 === 1 ? false : dataField[col1].sections[row1-2].visible === true ) {
                                    c = {row: row1 -2 , col: col1+2,type:type}
                                    mas2.push(c)
                                    
                              
                                  } 
                                  
                                 }if ( row1 === 1 ||col1 === 1 || col1 === 11? false : dataField[col1-1].sections[row1-2].visible === true &&  dataField[col1].sections[row1-1].visible === true) {
                                    
              
                                  if (dataField[col1].sections[row1-2].visible === true && dataField[col1-1].sections[row1-2].visible === true &&  dataField[col1].sections[row1-1].visible === true) {
                                   
                                    c = {row: row1 -2 , col: col1+2,type:type}
                                    j = {row: row1 -2 , col: col1+1,type:type}
                                    mas2.push(c,j)
                          
                                 
                                      if (dataField[col1].sections[row1-1] && dataField[col1-1].sections[row1-2].visible ===true  && dataField[col1].sections[row1-2].visible === true && dataField[col1-1].sections[row1-2].visible === true &&  dataField[col1].sections[row1-1].visible === true &&dataField[col1].sections[row1-3].visible === true ) {
                                        if (dataField[col1-3].sections[row1-3].visible === true){
                                        c = {row: row1 -3 , col: col1+1,type:type}
                                        j = {row: row1 -3 , col: col1+2,type:type}
                                 
                                        mas2.push(c,j)
                                        if ( dataField[col1].sections[row1-1] && dataField[col1-1].sections[row1-2].visible ===true  && dataField[col1].sections[row1-3].visible === true && dataField[col1].sections[row1-2].visible === true && dataField[col1-1].sections[row1-2].visible === true &&  dataField[col1].sections[row1-1].visible === true &&dataField[col1].sections[row1-3].visible === true) {
                                          c = {row: row1 -4 , col: col1+1,type:type}
                                          j = {row: row1 -4 , col: col1+2,type:type}
                                          mas2.push(c,j)
                                      }
                                      
              
              
                                        }
              
              
              
                                       
                                          if (dataField[col1].sections[row1-1] && dataField[col1-1].sections[row1-2].visible ===true  &&dataField[col1].sections[row1-2].visible ===true && dataField[col1+1].sections[row1-3]){
                                            console.log(dataField[col1].sections[row1-2] )
                                            c = {row: row1 -3 , col: col1+2,type:type}
                                            j = {row: row1 -2 , col: col1+3,type:type}
                                            mas2.push(c,j)
                                          
                                          
                                         
                                            if (dataField[col1].sections[row1-1] && dataField[col1-1].sections[row1-2].visible ===true  && dataField[col1].sections[row1-2].visible ===true && dataField[col1+1].sections[row1-3]) {
                                              c = {row: row1 -3 , col: col1+3,type:type}
                                              j = {row: row1 -3 , col: col1+4,type:type}
                                              mas2.push(c,j)
                                            }
                                                   
                                          }
              
              
                                          if (dataField[col1].sections[row1-1] && dataField[col1-1].sections[row1-2].visible ===true && dataField[col1].sections[row1-1].visible === true && dataField[col1].sections[row1-3].visible === true && dataField[col1+1].sections[row1-3].visible == true && dataField[col1+1].sections[row1-4].visible === true ) {
                                          
                                            c = {row: row1 -3 , col: col1+3,type:type}
                                            j = {row: row1 -4 , col: col1+2,type:type}
                                            mas2.push(c,j)
                                                 
                                            }
              
              
                                      }
                                    }
                                
              
                       
                       
                       
                               } if ( row1 === 1||col1 === 2 ||row1 === 2  || col1 === 5  || col1 === 11 || row1 === 8 || col1 === 1 || col1 === 10?false :dataField[col1+1].sections[row1-3].visible === true && col1 === 1 ?false : dataField[col1].sections[row1-1].visible === true  ) {
                              
                                  
                                 
                                     c = {row: row1 -2 , col: col1+3,type:type }
                                     o = {row: row1 -3 , col: col1+2,type:type }
                                    
                                    
                                  mas2.push(c,o)
                                  
                                 
              
                                
              
              
                      
                                  
                                
                                  
              
                              
                    
                                }  
                       else if (row1 === 1 || col1 === 1 || col1 === 11 ||  row1 === 2 ?false : dataField[col1].sections[row1-2].visible === true && dataField[col1].sections[row1-3].visible === true) {  ///
                 
                                  
                                   c = {row:row1-3, col: col1+2,type:type}
                                  o = {row: row1 -3, col: col1+1,type:type}
                                 
                                    
                                  mas2.push(c,o)
                                  
              
                                
              
              
                               }  if (row1 === 3|| row1 === 1 || col1 === 1 || col1 === 11 ||  row1 === 2 ?false : dataField[col1].sections[row1-2].visible === true && dataField[col1].sections[row1-3].visible === true && dataField[col1].sections[row1-4].visible === true) {
                              
                                  c = {row:row1-4, col: col1+1,type:type}
                              
                                
                                 
                                 mas2.push(c)
                                 
              
              

                               }       
                                  if (   false9 ) { // лево лево
                                
       
                                 
                               if (    row1 === 1 || col1 === 2 ? false  : false9&& dataField[col1-3].sections[row1-2].visible === true && dataField[col1-3].sections[row1-1].visible     === true ) {
                                     
                                 c = {row: row1  , col: col1-3,type:type}
                                 mas2.push(c)
                                 false70 = true
                               }
       
                    } if ( false13 ) {
       
                               if (row1 === 8 || row1 === 1 ||  row1 === 2 ? false :dataField[col1-3].sections[row1-3].visible === true && false13 && dataField[col1-3].sections[row1-1].visible     === true) {
                                 c = {row: type === 2 ? row1+1 :row1 , col: col1-3,type:type}
                                 mas2.push(c)
                                  false71 = true
                               } 
                               
                    }if (false) {
                                
       
                               if (dataField[col1-2].sections[row1+1].visible === true && false5 && false13) {
                                 c = {row: row1 +2 , col: col1-2,type:type}
                                 j = {row: row1 +2 , col: col1-1,type:type}
                                 mas2.push(c,j)
                                false52 = true
                               console.log(dataField[col1-3].sections[row1-4])
                                   if (false52) {
                                     if (dataField[col1-3].sections[row1+1].visible === true){
                                     c = {row: row1 +3 , col: col1-2,type:type}
                                     j = {row: row1 +3 , col: col1-3,type:type}
                                     false53 = true
                                     mas2.push(c,j)
                                     if ( false53 && dataField[col1-4].sections[row1+2].visible === true) {
                                       c = {row: row1 +4 , col: col1-3,type:type}
                                       j = {row: row1 +3 , col: col1-4,type:type}
                                       mas2.push(c,j)
                                   }
                                   
       
       
                                     }
       
       
       
                                    
                                       if (dataField[col1-2].sections[row1+2].visible ===true){
                                         c = {row: row1 +4 , col: col1-1,type:type}
                                         j = {row: row1 +3 , col: col1-2,type:type}
                                         mas2.push(c,j)
                                         false54 = true
                                       
                                      
                                         if (false54 &&dataField[col1-2].sections[row1+3].visible === true) {
                                           c = {row: row1 +5 , col: col1-1,type:type}
                                           j = {row: row1 +4 , col: col1-2,type:type}
                                           mas2.push(c,j)
                                         }
                                                
                                       }
       
       
                                       if (false54&&false53 &&dataField[col1-3].sections[row1+2].visible === true) {
                                         c = {row: row1 +4 , col: col1-3,type:type}
                                         j = {row: row1 +4 , col: col1-2,type:type}
                                         mas2.push(c,j)
                                              
                               }
       
       
                                   }
                               } 
                             
           
                    
                    
                    
                            }  if (false70 ) {
                            
                               if(dataField[col1-4].sections[row1-1].visible === true &&dataField[col1-3].sections[row1-1].visible     === true) {
                                
                                  c = {row: row1  , col: col1-4,type:type }
                                  o = {row: row1 -1 , col: col1-4,type:type }
                                 
                                  
                               mas2.push(c,o)
                               }
                                if (dataField[col1-4].sections[row1-1].visible === true) {
                                  
                                 o = {row: row1 -1 , col: col1-4,type:type}
                                 mas2.push(c)
       
                               }
       
                             
       
       
                   }  else if ( false  ) {
                             
                                if(  dataField[col-2].sections[row+3].visible === true) {
                                 
                                 c = {row: row1 +5 , col: col1-1,type:type}
                                  
                                 mas2.push(c)
                             
                                          
       
                                }
       
                              
                               
                             
                               
         
                           
                   }  
                   if ( false71  ) {  ///
                            
                               if(dataField[col1-4].sections[row].visible === true &&dataField[col1-3].sections[row1-1].visible     === true) {
                              
                               o = {row:type === 2 ? row1  :row1 , col: col1-4,type:type}
                               c= {row: type === 2 ? row1 +1 :row1+1 , col: col1-4,type:type}
                              
                               mas2.push(c,o)
                               }  if (  dataField[col1-4].sections[row1-1].visible     === true) {
                              c= {row: row1  , col: col1-4,type:type}
                                 mas2.push(c)
                                  
                               }
       
                             
       
       
                            } else if (false) {
                             if(dataField[col1-3].sections[row+2].visible === true) {
                               c = {row:row1+4, col: col1-2,type:type}
                           
                             
                              
                              mas2.push(c)
                              } 
       
       
       
       
                            }    if (   false21 ) { // правоправо
                                
       
                                 
                              if ( row1 === 1 ? false  :false21&& dataField[col1+1].sections[row1-1].visible     === true ) {
                                     console.log(dataField[col1+1].sections[row1-2])
                                c = {row: row1  , col: col1+3,type:type}
                                mas2.push(c)
                                false75 = true
                              }
      
                   } if ( false17 ) {
      
                              if (row1 === 1?false : false17 && dataField[col1+1].sections[row1-1].visible     === true) {
                                c = {row: row1+1  , col: col1+3,type:type}
                                mas2.push(c)
                                 false76 = true
                              } 
                              
                   }if (false) {
                                  console.log()
      
                              if (dataField[col1-2].sections[row1+1].visible === true && false5 && false13) {
                                c = {row: row1 +2 , col: col1-2,type:type}
                                j = {row: row1 +2 , col: col1-1,type:type}
                                mas2.push(c,j)
                               false52 = true
                              console.log(dataField[col1-3].sections[row1-4])
                                  if (false52) {
                                    if (dataField[col1-3].sections[row1+1].visible === true){
                                    c = {row: row1 +3 , col: col1-2,type:type}
                                    j = {row: row1 +3 , col: col1-3,type:type}
                                    false53 = true
                                    mas2.push(c,j)
                                    if ( false53 && dataField[col1-4].sections[row1+2].visible === true) {
                                      c = {row: row1 +4 , col: col1-3,type:type}
                                      j = {row: row1 +3 , col: col1-4,type:type}
                                      mas2.push(c,j)
                                  }
                                  
      
      
                                    }
      
      
      
                                   
                                      if (dataField[col1-2].sections[row1+2].visible ===true){
                                        c = {row: row1 +4 , col: col1-1,type:type}
                                        j = {row: row1 +3 , col: col1-2,type:type}
                                        mas2.push(c,j)
                                        false54 = true
                                      
                                     
                                        if (false54 &&dataField[col1-2].sections[row1+3].visible === true) {
                                          c = {row: row1 +5 , col: col1-1,type:type}
                                          j = {row: row1 +4 , col: col1-2,type:type}
                                          mas2.push(c,j)
                                        }
                                               
                                      }
      
      
                                      if (false54&&false53 &&dataField[col1-3].sections[row1+2].visible === true) {
                                        c = {row: row1 +4 , col: col1-3,type:type}
                                        j = {row: row1 +4 , col: col1-2,type:type}
                                        mas2.push(c,j)
                                             
                              }
      
      
                                  }
                              } 
                            
          
                   
                   
                   
                           }  if (false75 ) {
                        
                              if(dataField[col1+2].sections[row1-1].visible === true &&dataField[col1+1].sections[row1-1].visible     === true) {
                               
                                 c = {row: row1  , col: col1+4,type:type }
                                 o = {row: row1 -1 , col: col1+4,type:type }
                                
                                 
                              mas2.push(c,o)
                              }
                               if (dataField[col1+2].sections[row1-1].visible === true) {
                                 
                                o = {row: row1 -1 , col: col1+4,type:type}
                                mas2.push(c)
      
                              }
      
                            
      
      
                  }  else if ( false  ) {
                            
                               if(  dataField[col-2].sections[row+3].visible === true) {
                                
                                c = {row: row1 +5 , col: col1-1,type:type}
                                 
                                mas2.push(c)
                            
                                         
      
                               }
      
                             
                              
                            
                              
        
                          
                  }  
                  if ( false76  ) {  ///
                       
                              if(dataField[col1+2].sections[row-1].visible === true &&dataField[col1+1].sections[row1-1].visible     === true) {
                             
                              o = {row: row1  , col: col1+4,type:type}
                              c= {row: row1 +1 , col: col1+4,type:type}
                             
                              mas2.push(c,o)
                              }  if (  dataField[col1+2].sections[row1-1].visible     === true) {
                             c= {row: row1  , col: col1+4,type:type}
                                mas2.push(c)
                                 
                              }
      
                            
      
      
                           } else if (false) {
                            if(dataField[col1-3].sections[row+2].visible === true) {
                              c = {row:row1+4, col: col1-2,type:type}
                          
                            
                             
                             mas2.push(c)
                             } 
      
                      
      
                           }
                           j={row:row1,col:col1,type:type}
                           mas2.push(j)

                            return mas2!
                      } ) )




                      


                         let result = []
                          
                  //      const leastArr = returnedCoordinatesArray[1].cells.length< s1.flat(3).length ? returnedCoordinatesArray[1].cells: s1.flat(3);
                  //        const biggestArr = returnedCoordinatesArray[1].cells.length >= s1.flat(3).length ? returnedCoordinatesArray[1].cells : s1.flat(3);
                           
                              
                               
                              
                  
        
   return  s1.flat(3).concat( s10.flat(3))//result
    
                        
  }

 