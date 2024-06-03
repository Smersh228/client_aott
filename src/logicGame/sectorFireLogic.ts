

import React, { useState } from 'react'
import { dataField, mockActions, mockTanks, sections, tanks } from '../mockData/mockData'
import { IDataField, ICell, ICoordinatesTank} from '../types/types';
import { changeCoordinates } from './changeCoordinates';
import { ICanGo } from '../gameComponents/Field/Field';
import { arch } from 'os';



interface cell {
    row: number, col: number, type: number, kef?: number, id?:number,
}


interface IReturnedArray {
  radius: number
  cells: cell[]
}
//
export const sectorFire = (row: number, col:number, type:number ,row1:number,col1:number ,col3:number ,col4: number) => {
  
  let row5 = row
  let col5 = col
  let h : cell
  let k : cell
  let u : cell
  let dfd = []
  let dfd1 = []
  let dfd2 = []
  let dfd3 = []
  console.log(row,col,col3,col4)
  if( type === 1 &&row  === col3  && col4 + 1  === col  ||type === 1 &&  col   ===  col4 - 1 && row   ===  col3  ) {
    console.log(1)
    //боковые верхние стороны
  for(let i = 0; i < col1;i++){
    h = {row:row - i ,col:col,type:type}
     dfd.push(h)
  }
}else if( type === 2 && row  === col3-1  && col4+1   === col || type === 2 &&row  === col3+1  && col4 + 1  === col  ||  type === 2 &&row+1===col3 && col   ===  col4 - 1) {
    console.log(555)
    //боковые верхние стороны и фронт
    for(let i = 0; i < col1;i++){
      h = {row:row - i ,col:col,type:type}
       
       dfd.push(h)
}

 }else if(type === 2 &&  col   ===  col4 - 1 || type === 2 &&  col   ===  col4 + 1 || type === 1 &&  col   ===  col4 + 1 || type === 1 &&  col   ===  col4 - 1 ) {
  console.log(5551)
  //нижние боковые
  for(let i = 0; i < col1;i++){
    h = {row:row + i ,col:col,type:type}
    
     dfd.push(h)
}

}else if(type ===1 &&row + 1  === col3  && col4   === col ) {
    for(let i = 0; i < col1;i++){
      console.log(133333)
     //фронтальная(основаяние)
    
    if( i === 1) {  k = {row:row ,col:col+1  ,type:type}
    h = {row:row-1  ,col:col ,type:type}
    u = {row:row  ,col:col-1 ,type:type}
     dfd.push(k)
     dfd1.push(h)
     dfd2.push(u)
    }else if(i === 2|| i ===3 ) {
      h = {row: i === 3 ? row -1: row , col:i ===3 ? col +3 :col+2  ,type: type}
      k = {row:  i ===3 ? row -2 :row -2 ,col: i ===3 ? col -2 :col-1  ,type:type}
      u = {row: i === 3 ? row-1 : row , col:i ===3 ? col-3  :col-2   ,type: type}
      console.log(i)
      dfd1.push(k)
        dfd.push(h)
        dfd2.push(u)
      }else if(i === 4|| i ===5 ) {
        h = {row:  i ===5 ? row-3  :row- 3    ,col: i ===5 ? col -4 :col-3   ,type:type}
        u = {row: i === 5 ? row -2: row-1 , col:i ===5 ? col-5  :col-4   ,type: type}
      dfd1.push(h)
      dfd2.push(u)
        k = {row: i ===5 ? row -2 :row  -1  ,col: i ===5 ? col+5  :col+4   ,type: type}
          dfd.push(k)
      }
       else if(i === 5|| i ===6 ) {
        k = {row:  i ===6 ? row- 4  :row- 4    ,col: i ===6 ? col -5 :col-4   ,type:type}
        u = {row: i === 5 ? row -3: row-2 , col:i ===5 ? col-6  :col-5   ,type: type}
       
        h = {row: i ===6 ? row -2 :row  -2  ,col: i ===6 ? col+6  :col+5   ,type: type}
        dfd.push(h)
        dfd2.push(u)
        dfd1.push(k)
      }
        else if(i === 7|| i ===8 ) {
          k = {row:  i ===8 ? row- 5  :row- 4    ,col: i ===8 ? col -5 :col-6   ,type:type}
          dfd1.push(k)
         h = {row: i ===8 ? row -3 :row  -3  ,col: i ===8 ? col+8  :col+7   ,type: type}
        dfd.push(h)
        u = {row: i ===8 ? row -3 :row  -3  ,col: i ===8 ? col-8  :col-7   ,type: type}
        dfd2.push(u)
      }
        else if(i === 9|| i ===10 ) {
          k = {row:  i ===10 ? row- 6  :row- 6    ,col: i ===10 ? col -7 :col-6   ,type:type}
          dfd1.push(k)
        h = {row: i ===10 ? row -4 :row  -4  ,col: i ===10 ? col+10  :col+9   ,type: type }
        dfd.push(h)
      } 
      else if(i === 10|| i ===11 ) {
        k = {row:row- 6   ,col:col +i-1  ,type:type}
        dfd1.push(k)
        h = {row:row -6  ,col:col - i ,type:type}
        dfd.push(h)
      }
      else if(i === 11|| i ===12 ) {
        k = {row:row- 7   ,col:col +i-1  ,type:type}
        dfd1.push(k)
        h = {row:row -7  ,col:col - i ,type:type}
        dfd.push(h)
      }      
      else{
       
        k = {row:row +1  ,col:col  ,type:type}
        dfd.push(k)
      
      }
    
    }
   
  
      }else if( type ===2 &&row + 1  === col3  && col4   === col ) {
        for(let i = 0; i < col1;i++){
          
         
        
        if( i === 1) {  k = {row:row  ,col:col +i ,type: type}
        h = {row:row -1  ,col:col  ,type:type}
         dfd.push(k)
         dfd1.push(h)
        }else if(i === 2|| i ===3 ) {
          h = {row: row -1 ,col:col+i  ,type:type}
          k = {row: i === 3? row-2 : row-1,col: col+i-1  ,type:type}
          console.log(i)
          dfd1.push(k)
            dfd.push(h)
          }else if(i === 4|| i ===5 ) {
            h = {row: i === 5? row-3 : row-2  ,col:col+i -1 ,type:type}
          dfd1.push(h)
            k = {row: row-2 ,col: col + i  ,type: type}
              dfd.push(k)
          }
           else if(i === 5|| i ===6 ) {
            k = {row: i ===6 ? row -3 :row- 3   ,col:i ===6 ?  col+5  :col -4  ,type:type}
            dfd1.push(k)
            h = {row: row- 3   ,col:col + i ,type:type}
            dfd.push(h)
          }
            else if(i === 7|| i ===8 ) {
              k = {row:row- 4   ,col:col +i-1  ,type:type}
              dfd1.push(k)
             h = {row:  i ===8  ?   row -4  :row-3 ,col:col + i ,type:type}
            dfd.push(h)
          }
            else if(i === 9|| i ===10 ) {
              k = {row:row- 5   ,col:col +i-1  ,type:type}
              dfd1.push(k)
            h = {row:i ===9  ?   row -4  :row-5  ,col:col + i ,type:type}
            dfd.push(h)
          } 
          else if(i === 10|| i ===11 ) {
            k = {row:row- 6   ,col:col +i-1  ,type:type}
            dfd1.push(k)
            h = {row:row -6  ,col:col - i ,type:type}
            dfd.push(h)
          }
          else if(i === 11|| i ===12 ) {
            k = {row:row- 7   ,col:col +i-1  ,type:type}
            dfd1.push(k)
            h = {row:row -7  ,col:col - i ,type:type}
            dfd.push(h)
          }      
          else{
           
            k = {row:row   ,col:col  ,type:type}
            dfd.push(k)
          }
          }
        }else if(type ===1 &&row - 1  === col3  && col4   === col ) {
            console.log(2222222)
            for(let i = 0; i < col1;i++){
              
             
            
            if( i === 1) {  k = {row:row+1 ,col:col-1  ,type:type}
            h = {row:row+1  ,col:col ,type:type}
            u = {row:row-1  ,col:col+1 ,type:type}
             dfd.push(k)
             dfd1.push(h)
             dfd2.push(u)
            }else if(i === 2|| i ===3 ) {
              h = {row: i === 3 ? row +2: row+2 , col:i ===3 ? col -3 :col-2  ,type: type}
              k = {row:  i ===3 ? row +2 :row +1 ,col: i ===3 ? col -2 :col-1  ,type:type}
              u = {row: i === 3 ? row : row , col:i ===3 ? col+3  :col+2   ,type: type}
              console.log(i)
              dfd1.push(k)
                dfd.push(h)
                dfd2.push(u)
              }else if(i === 4|| i ===5 ) {
                h = {row:  i ===5 ? row+4  :row+1    ,col: i ===5 ? col -4 :col-3   ,type:type}
                u = {row: i === 5 ? row+4 : row+4 , col:i ===5 ? col+5  :col+4   ,type: type}
              dfd1.push(h)
              dfd2.push(u)
                k = {row: i ===5 ? row +3 :row  +3  ,col: i ===5 ? col-5  :col-4   ,type: type}
                  dfd.push(k)
              }
               else if(i === 5|| i ===6 ) {
                k = {row:  i ===6 ? row- 4  :row- 4    ,col: i ===6 ? col -5 :col-4   ,type:type}
                u = {row: i === 5 ? row -3: row-2 , col:i ===5 ? col-6  :col-5   ,type: type}
               
                h = {row: i ===6 ? row -2 :row  -2  ,col: i ===6 ? col+6  :col+5   ,type: type}
                dfd.push(h)
                dfd2.push(u)
                dfd1.push(k)
              }
                else if(i === 7|| i ===8 ) {
                  k = {row:  i ===8 ? row- 5  :row- 4    ,col: i ===8 ? col -5 :col-6   ,type:type}
                  dfd1.push(k)
                 h = {row: i ===8 ? row -3 :row  -3  ,col: i ===8 ? col+8  :col+7   ,type: type}
                dfd.push(h)
                u = {row: i ===8 ? row -3 :row  -3  ,col: i ===8 ? col-8  :col-7   ,type: type}
                dfd2.push(u)
              }
                else if(i === 9|| i ===10 ) {
                  k = {row:  i ===10 ? row- 6  :row- 6    ,col: i ===10 ? col -7 :col-6   ,type:type}
                  dfd1.push(k)
                h = {row: i ===10 ? row -4 :row  -4  ,col: i ===10 ? col+10  :col+9   ,type: type }
                dfd.push(h)
              } 
              else if(i === 10|| i ===11 ) {
                k = {row:row- 6   ,col:col +i-1  ,type:type}
                dfd1.push(k)
                h = {row:row -6  ,col:col - i ,type:type}
                dfd.push(h)
              }
              else if(i === 11|| i ===12 ) {
                k = {row:row- 7   ,col:col +i-1  ,type:type}
                dfd1.push(k)
                h = {row:row -7  ,col:col - i ,type:type}
                dfd.push(h)
              }      
              else{
               
                k = {row:row +1  ,col:col  ,type:type}
                dfd.push(k)
              
              }
            
            }}else if( type ===2 &&row - 1  === col3  && col4   === col ) {
              for(let i = 0; i < col1;i++){
                
               
              
              if( i === 1) {  k = {row:row +2 ,col:col-1  ,type: type}
              h = {row:row +1  ,col:col  ,type:type}
              u = {row:row  ,col:col+1 ,type:type}
               dfd.push(k)
               dfd1.push(h)
               dfd2.push(u)
              }else if(i === 2|| i ===3 ) {
                h = {row: i===3 ?row+3:row+2 ,col: i===3 ? col-3 : col -2  ,type:type}
                k = {row:  i ===3 ? row +2 :row +1 ,col: i ===3 ? col -2 :col-1  ,type:type}
                console.log(i)
                u = {row: i === 3 ? row+1 : row , col:i ===3 ? col+3  :col+2   ,type: type}
                dfd1.push(k)
                  dfd.push(h)
                  dfd2.push(u)
                }else if(i === 4|| i ===5 ) {
                  h = {row:  i ===5 ? row+4  :row+2    ,col: i ===5 ? col -4 :col-3   ,type:type}
                dfd1.push(h)
                  k = {row: i===5 ?row+4:row+3 ,col: i===5 ? col-5 : col -4  ,type:type}
                    dfd.push(k)
                   
                     u = {row: i === 5 ? row+1 : row+1 , col:i ===5 ? col+5  :col+4   ,type: type}
                     dfd2.push(u)
                }
                 else if(i === 5|| i ===6 ) {
                  k = {row: i ===6 ? row -3 :row- 3   ,col:i ===6 ?  col+5  :col -4  ,type:type}
                  dfd1.push(k)
                  h = {row: row- 3   ,col:col + i ,type:type}
                  dfd.push(h)
                }
                  else if(i === 7|| i ===8 ) {
                    k = {row:row- 4   ,col:col +i-1  ,type:type}
                    dfd1.push(k)
                   h = {row:  i ===8  ?   row -4  :row-3 ,col:col + i ,type:type}
                  dfd.push(h)
                }
                  else if(i === 9|| i ===10 ) {
                    k = {row:row- 5   ,col:col +i-1  ,type:type}
                    dfd1.push(k)
                  h = {row:i ===9  ?   row -4  :row-5  ,col:col + i ,type:type}
                  dfd.push(h)
                } 
                else if(i === 10|| i ===11 ) {
                  k = {row:row- 6   ,col:col +i-1  ,type:type}
                  dfd1.push(k)
                  h = {row:row -6  ,col:col - i ,type:type}
                  dfd.push(h)
                }
                else if(i === 11|| i ===12 ) {
                  k = {row:row- 7   ,col:col +i-1  ,type:type}
                  dfd1.push(k)
                  h = {row:row -7  ,col:col - i ,type:type}
                  dfd.push(h)
                }      
                else{
                 
                  k = {row:row+1   ,col:col  ,type:type}
                  dfd.push(k)
                }
              }
        
        }
   console.log(dfd1)
   console.log(dfd)
   console.log(dfd2)
   const sectors = (row:number,col:number,type:number) => {
    let arr =[]
    if(type === 1 && row5  === col3  && col4 + 1  === col5){
     //боковая (правая)
     console.log(3)
    for(let j = 0; j < col1;j++){
      
      
      if(j === 2|| j ===3 ) {
        h = {row:row +1  ,col:col + j ,type:type}
        arr.push(h)
      }else if(j === 4|| j ===5 ) {
        
          h = {row:row +2  ,col:col + j ,type:type}
          arr.push(h)
      }
       else if(j === 5|| j ===6 ) {
        
        h = {row:row +3  ,col:col + j ,type:type}
        arr.push(h)
      }
        else if(j === 7|| j ===8 ) {
        console.log(1)
         h = {row:   j === 7 ?  row +3 :row +4 ,col:col + j ,type:type}
        arr.push(h)
      }
        else if(j === 9|| j ===10 ) {
        
        h = {row:row +3  ,col:col + j ,type:type}
        arr.push(h)
      } 
      else if(j === 10|| j ===11 ) {
        
        h = {row:row +6  ,col:col + j ,type:type}
        arr.push(h)
      }
      else if(j === 11|| j ===12 ) {
        
        h = {row:row +7  ,col:col + j ,type:type}
        arr.push(h)
      }      
      else{
        h = {row:row   ,col:col + j ,type:type}
        arr.push(h)
      }
    } } else if(type === 1 &&row5  === col3 && col4 -1 === col5) {
      //боковая (левая)
      console.log(2)
      for(let j = 0; j < col1;j++){
        if(j === 2|| j ===3 ) {
          h = {row:row +1  ,col:col - j ,type:type}
          arr.push(h)
        }else if(j === 4|| j ===5 ) {
          
            h = {row:row +2  ,col:col - j ,type:type}
            arr.push(h)
        }
         else if(j === 5|| j ===6 ) {
          
          h = {row:row +3  ,col:col - j ,type:type}
          arr.push(h)
        }
          else if(j === 7|| j ===8 ) {
          
           h = {row: j === 8 ? row +4 : row +3  ,col:col - j ,type:type}
          arr.push(h)
        }
          else if(j === 9|| j ===10 ) {
          
          h = {row:row +5  ,col:col - j ,type:type}
          arr.push(h)
        } 
        else if(j === 10|| j ===11 ) {
          
          h = {row:row +6  ,col:col - j ,type:type}
          arr.push(h)
        }
        else if(j === 11|| j ===12 ) {
          
          h = {row:row +7  ,col:col - j ,type:type}
          arr.push(h)
        }      
        else{
          h = {row:row   ,col:col - j ,type:type}
          arr.push(h)
        }
       
      } 
    }else if (  row5  === col3+1 && col4 -1 === col5 ) {
      for(let j = 0; j < col1;j++){
        //боковая (левая нижняя)
        console.log(544)
        
        if(j === 2|| j ===3  || j ===1 ) {
          h = {row: j === 3 ? row-2 : row-1,col:col - j ,type:type}
          arr.push(h)
        }else if(j === 4|| j ===5 ) {
          
            h = {row:j === 5 ? row-3 : row-2  ,col:col - j ,type:type}
            arr.push(h)
        }
         else if(j === 5|| j ===6 ) {
          
          h = {row:j === 6 ? row-3 : row-3   ,col:col - j ,type:type}
          arr.push(h)
        }
          else if(j === 7|| j ===8 ) {
          
           h = {row:  j=== 8 ? row-4 : row-4  ,col:col - j ,type:type}
          arr.push(h)
        }
          else if(j === 9|| j ===10 ) {
          
          h = {row:row +5  ,col:col - j ,type:type}
          arr.push(h)
        } 
        else if(j === 10|| j ===11 ) {
          
          h = {row:row +6  ,col:col - j ,type:type}
          arr.push(h)
        }
        else if(j === 11|| j ===12 ) {
          
          h = {row:row +7  ,col:col - j ,type:type}
          arr.push(h)
        }      
        else{
          h = {row:row   ,col:col - j ,type:type}
          arr.push(h)
        }
       
      } 

    }else if (  row5  === col3+1 && col4 +1 === col5 ) {
      for(let j = 0; j < col1;j++){
        //боковая (левая нижния)
        console.log(333)
        
        if(j === 2|| j ===3  || j ===1 ) {
          h = {row: j === 3 ? row-2 : row-1,col:col + j ,type:type}
          arr.push(h)
        }else if(j === 4|| j ===5 ) {
          
            h = {row:j === 5 ? row-3 : row-2  ,col:col + j ,type:type}
            arr.push(h)
        }
         else if(j === 5|| j ===6 ) {
          
          h = {row:j === 6 ? row-3 : row-3   ,col:col + j ,type:type}
          arr.push(h)
        }
          else if(j === 7|| j ===8 ) {
          
           h = {row:  j=== 8 ? row-4 : row-4  ,col:col + j ,type:type}
          arr.push(h)
        }
          else if(j === 9|| j ===10 ) {
          
          h = {row:row +5  ,col:col - j ,type:type}
          arr.push(h)
        } 
        else if(j === 10|| j ===11 ) {
          
          h = {row:row +6  ,col:col - j ,type:type}
          arr.push(h)
        }
        else if(j === 11|| j ===12 ) {
          
          h = {row:row +7  ,col:col - j ,type:type}
          arr.push(h)
        }      
        else{
          h = {row:row   ,col:col - j ,type:type}
          arr.push(h)
        }
       
      } 

    }
  
     else if ( type===2 &&row5 + 1  === col3  && col4   === col5 ) {
      for(let j = 0; j < col1;j++){
       
           

       if(j === 1 ) {   h = {row: row   ,col:col-j  ,type: type}
      
        arr.push(h)
       
       } else if(j === 2|| j ===3  ) {
          h = {row:row -1   ,col:col- j   ,type:type  }
       
          arr.push(h)
        }else if(j === 4|| j ===5 ) {
          
            h = {row:row -2  ,col:col- j  ,type:type}
            arr.push(h)
        }
         else if(j === 5|| j ===6 ) {
          
           h = {row:row -3  ,col:col- j  ,type:type}
          arr.push(h)
        }
          else if(j === 7|| j ===8 ) {
          
           h = {row:j === 8 ? row-4:row-3 ,col: j === 8 ? col -j :col -j ,type:type}
          arr.push(h)
        }
          else if(j === 9|| j ===10 ) {
          
            h = {row:j === 10 ? row-5:row-4 ,col: j === 10 ? col -j :col -j ,type:type}
          arr.push(h)
        } 
        else if(j === 10|| j ===11 ) {
          
          h = {row:row -6  ,col:col -j  ,type:type}
          arr.push(h)
        }
        else if(j === 11|| j ===12 ) {
          
          h = {row:row -7  ,col:col  ,type:type}
          arr.push(h)
        }      
        else{
          h = {row: row ,col:col   ,type: type}
         
          arr.push(h)
        }
      }
    
    }else if ( type===1 &&row5 + 1  === col3  && col4   === col5 ) {
      for(let j = 0; j < col1;j++){
       
           console.log(4545)

       if(j === 1 ) {   h = {row: row -1  ,col:col  ,type: type}
      
        arr.push(h)
       
       } else if(j === 2|| j ===3  ) {
          h = {row: j === 3 ? row-2  :row-2  ,col:j === 3 ?col-2   :col -2   ,type:type   }
       
          arr.push(h)
        }else if(j === 4|| j ===5 ) {
          
            h = {row:j === 5 ? row  -3 :row -3  ,col:j === 5 ?col-4   :col -4  ,type:type}
            arr.push(h)
        }
         else if(j === 5|| j ===6 ) {
          
          h = {row:j === 6 ? row  -4 :row -4  ,col:j === 6 ?col-6   :col -6  ,type:type}
          arr.push(h)
        }
          else if(j === 7|| j ===8 ) {
          
           h = {row:j === 8 ? row  -5 :row -4  ,col:j === 8 ?col-8   :col -6  ,type:type}
          arr.push(h)
        }
          else if(j === 9|| j ===10 ) {
          
          h = {row:j === 10 ? row  -6 :row -6  ,col:j === 10 ?col-10   :col -10  ,type:type}
          arr.push(h)
        } 
        else if(j === 10|| j ===11 ) {
          
          h = {row:row -6  ,col:col  ,type:type}
          arr.push(h)
        }
        else if(j === 11|| j ===12 ) {
          
          h = {row:row -7  ,col:col  ,type:type}
          arr.push(h)
        }      
        else{
          h = {row: row-1 ,col:col   ,type: type}
         
          arr.push(h)
        }
      }
    }else if ( type === 2 && col4 + 1  === col&& row5 === col3-1 ) {
      for(let j = 0; j < col1;j++){
         console.log(333)
         
         if(j === 1 ) {
          h = {row:j === 1?row+1:row,col:j === 1?col+1:col  ,type:type}
          arr.push(h)
         }else if(j === 2|| j ===3 ) {
          h = {row:j === 3? row+2:row+1,col:j === 3?col+3:col+2   ,type:type}
          arr.push(h)
        }else if(j === 4|| j ===5 ) {
          
          h = {row:j === 5? row+3:row+2,col:j === 5?col+5:col+4   ,type:type}
            arr.push(h)
        }
         else if(j === 5|| j ===6 ) {
          
          h = {row:j === 6? row+3:row+3,col:j === 6?col+6:col+5   ,type:type}
          arr.push(h)
        }
          else if(j === 7|| j ===8 ) {
          
            h = {row:j === 8? row+4:row+4,col:j === 8?col+8:col+7   ,type:type}
          arr.push(h)
        }
          else if(j === 9|| j ===10 ) {
          
            h = {row:j === 10? row+5:row+5,col:j === 10?col+10:col+9   ,type:type}
          arr.push(h)
        } 
        else if(j === 10|| j ===11 ) {
          
          h = {row:row +6  ,col:col - j ,type:type}
          arr.push(h)
        }
        else if(j === 11|| j ===12 ) {
          
          h = {row:row +7  ,col:col - j ,type:type}
          arr.push(h)
        }      
        else{
          h = {row:row   ,col:col  ,type:type}
          arr.push(h)
        }
       
      } 

    }else if (  col === col4-1 && type === 2 && row5 === col3-1 ) {
      for(let j = 0; j < col1;j++){
         
         if(j === 1   ) {
           
          h = {row:j === 1   ?row+1:row,col:j === 1?col-1:col  ,type:type}
          arr.push(h)

         }else if(j === 2 || j ===3 ) {
          h = {row:j === 3? row+2:row+1,col:j === 3?col-3:col-2   ,type:type}
          arr.push(h)
        }else if(j === 4|| j ===5 ) {
          
          h = {row:j === 5? row+3:row+2,col:j === 5?col-5:col-4   ,type:type}
            arr.push(h)
        }
         else if(j === 5|| j ===6 ) {
          
          h = {row:j === 6? row-3:row-3,col:j === 6?col-6:col-5   ,type:type}
          arr.push(h)
        }
          else if(j === 7|| j ===8 ) {
          
            h = {row:j === 8? row+4:row+4,col:j === 8?col-8:col-7   ,type:type}
          arr.push(h)
        }
          else if(j === 9|| j ===10 ) {
          
            h = {row:j === 10? row+5:row+5,col:j === 10?col-10:col-9   ,type:type}
          arr.push(h)
        } 
        else if(j === 10|| j ===11 ) {
          
          h = {row:row +6  ,col:col - j ,type:type}
          arr.push(h)
        }
        else if(j === 11|| j ===12 ) {
          
          h = {row:row +7  ,col:col - j ,type:type}
          arr.push(h)
        }      
        else{
          h = {row:row  ,col:col  ,type:type}
          arr.push(h)
        }
       
      } 
    }else if ( type === 2 && col4 - 1  === col && row5 === col3 ) {
      for(let j = 0; j < col1;j++){
         console.log(col,col3,col4,row,row1)
         
         if(j === 1 ) {
          h = {row:j === 1?row:row,col:j === 1?col-1:col  ,type:type}
          arr.push(h)
         }else if(j === 2|| j ===3 ) {
          h = {row:j === 3? row-1:row-1,col:j === 3?col-3:col-2   ,type:type}
          arr.push(h)
        }else if(j === 4|| j ===5 ) {
          
          h = {row:j === 5? row-2:row-2,col:j === 5?col-5:col-4   ,type:type}
            arr.push(h)
        }
         else if(j === 5|| j ===6 ) {
          
          h = {row:j === 6? row-3:row-3,col:j === 6?col-6:col-5   ,type:type}
          arr.push(h)
        }
          else if(j === 7|| j ===8 ) {
          
            h = {row:j === 8? row-4:row-3,col:j === 8?col-8:col-7   ,type:type}
          arr.push(h)
        }
          else if(j === 9|| j ===10 ) {
          
            h = {row:j === 10? row-5:row-4,col:j === 10?col-10:col-9   ,type:type}
          arr.push(h)
        } 
        else if(j === 10|| j ===11 ) {
          
          h = {row:row +6  ,col:col - j ,type:type}
          arr.push(h)
        }
        else if(j === 11|| j ===12 ) {
          
          h = {row:row +7  ,col:col - j ,type:type}
          arr.push(h)
        }      
        else{
          h = {row:row   ,col:col  ,type:type}
          arr.push(h)
        }
       
      } 
    }else if ( type === 2 && col4 + 1  === col && row5 === col3) {
      for(let j = 0; j < col1;j++){
         console.log(333)
         
         if(j === 1 ) {
          h = {row:j === 1?row:row,col:j === 1?col+1:col  ,type:type}
          arr.push(h)
         }else if(j === 2|| j ===3 ) {
          h = {row:j === 3? row-1:row-1,col:j === 3?col+3:col+2   ,type:type}
          arr.push(h)
        }else if(j === 4|| j ===5 ) {
          
          h = {row:j === 5? row-2:row-2,col:j === 5?col+5:col+4   ,type:type}
            arr.push(h)
        }
         else if(j === 5|| j ===6 ) {
          
          h = {row:j === 6? row-3:row-3,col:j === 6?col+6:col+5   ,type:type}
          arr.push(h)
        }
          else if(j === 7|| j ===8 ) {
          
            h = {row:j === 8? row+4:row+4,col:j === 8?col+8:col+7   ,type:type}
          arr.push(h)
        }
          else if(j === 9|| j ===10 ) {
          
            h = {row:j === 10? row+5:row+5,col:j === 10?col+10:col+9   ,type:type}
          arr.push(h)
        } 
        else if(j === 10|| j ===11 ) {
          
          h = {row:row +6  ,col:col - j ,type:type}
          arr.push(h)
        }
        else if(j === 11|| j ===12 ) {
          
          h = {row:row +7  ,col:col - j ,type:type}
          arr.push(h)
        }      
        else{
          h = {row:row   ,col:col  ,type:type}
          arr.push(h)
        }
       
      } 
    }else if ( type === 2 && col4 + 1  === col&& row5 === col ) {
      for(let j = 0; j < col1;j++){
         console.log(333)
         
         if(j === 1 ) {
          h = {row:j === 1?row+1:row,col:j === 1?col+1:col  ,type:type}
          arr.push(h)
         }else if(j === 2|| j ===3 ) {
          h = {row:j === 3? row+2:row+1,col:j === 3?col+3:col+2   ,type:type}
          arr.push(h)
        }else if(j === 4|| j ===5 ) {
          
          h = {row:j === 5? row+3:row+2,col:j === 5?col+5:col+4   ,type:type}
            arr.push(h)
        }
         else if(j === 5|| j ===6 ) {
          
          h = {row:j === 6? row+3:row+3,col:j === 6?col+6:col+5   ,type:type}
          arr.push(h)
        }
          else if(j === 7|| j ===8 ) {
          
            h = {row:j === 8? row+4:row+4,col:j === 8?col+8:col+7   ,type:type}
          arr.push(h)
        }
          else if(j === 9|| j ===10 ) {
          
            h = {row:j === 10? row+5:row+5,col:j === 10?col+10:col+9   ,type:type}
          arr.push(h)
        } 
        else if(j === 10|| j ===11 ) {
          
          h = {row:row +6  ,col:col - j ,type:type}
          arr.push(h)
        }
        else if(j === 11|| j ===12 ) {
          
          h = {row:row +7  ,col:col - j ,type:type}
          arr.push(h)
        }      
        else{
          h = {row:row   ,col:col  ,type:type}
          arr.push(h)
        }
       
      } }else if ( type===1 &&row5 - 1  === col3  && col4   === col5 ) {
        for(let j = 0; j < col1;j++){
         
             console.log(4545)
  
         if(j === 1 ) {   h = {row: row -1  ,col:col  ,type: type}
        
          arr.push(h)
         
         } else if(j === 2|| j ===3  ) {
            h = {row: j === 3 ? row  :row  ,col:j === 3 ?col +2 :col+2    ,type:type   }
         
            arr.push(h)
          }else if(j === 4|| j ===5 ) {
            
              h = {row:j === 5 ? row  +1 :row +1  ,col:j === 5 ?col +4 :col +4  ,type:type}
              arr.push(h)
          }
           else if(j === 5|| j ===6 ) {
            
            h = {row:j === 6 ? row  -4 :row -4  ,col:j === 6 ?col-6   :col -6  ,type:type}
            arr.push(h)
          }
            else if(j === 7|| j ===8 ) {
            
             h = {row:j === 8 ? row  -5 :row -4  ,col:j === 8 ?col-8   :col -6  ,type:type}
            arr.push(h)
          }
            else if(j === 9|| j ===10 ) {
            
            h = {row:j === 10 ? row  -6 :row -6  ,col:j === 10 ?col-10   :col -10  ,type:type}
            arr.push(h)
          } 
          else if(j === 10|| j ===11 ) {
            
            h = {row:row -6  ,col:col  ,type:type}
            arr.push(h)
          }
          else if(j === 11|| j ===12 ) {
            
            h = {row:row -7  ,col:col  ,type:type}
            arr.push(h)
          }      
          else{
            h = {row: row-1 ,col:col   ,type: type}
           
            arr.push(h)
          }
        }}else if ( type===2 &&row5 - 1  === col3  && col4   === col5 ) {
          for(let j = 0; j < col1;j++){
           console.log(322323)
               
    
           if(j === 1 ) {   h = {row: row -1  ,col:col  ,type: type}
          
            arr.push(h)
           
           } else if(j === 2|| j ===3  ) {
              h = {row:row    ,col:col +2  ,type:type  }
           
              arr.push(h)
            }else if(j === 4|| j ===5 ) {
              
                h = {row:row+1   ,col:col+4 ,type:type}
                arr.push(h)
            }
             else if(j === 5|| j ===6 ) {
              
               h = {row:row -3  ,col:col- j  ,type:type}
              arr.push(h)
            }
              else if(j === 7|| j ===8 ) {
              
               h = {row:j === 8 ? row-4:row-3 ,col: j === 8 ? col -j :col -j ,type:type}
              arr.push(h)
            }
              else if(j === 9|| j ===10 ) {
              
                h = {row:j === 10 ? row-5:row-4 ,col: j === 10 ? col -j :col -j ,type:type}
              arr.push(h)
            } 
            else if(j === 10|| j ===11 ) {
              
              h = {row:row -6  ,col:col -j  ,type:type}
              arr.push(h)
            }
            else if(j === 11|| j ===12 ) {
              
              h = {row:row -7  ,col:col  ,type:type}
              arr.push(h)
            }      
            else{
              h = {row: row-1 ,col:col   ,type: type}
             
              arr.push(h)
            }
          }
    }
     return arr

   
     
  }
   const sectors1 = (row:number,col:number,type:number) => {
    let arr1 =[]
     if ( type === 2 &&row5 + 1  === col3  && col4   === col5 ) {
      for(let j = 0; j < col1;j++){
       
           

       if(j === 1 ) {   h = {row: row   ,col:col,type: type}
      
       console.log(arr1)
        arr1.push(h)
       
       } else if(j === 2|| j ===3  ) {
          h = {row: j === 3? row-1 : row    ,col:j === 3? col-2 : col -1 ,type:type  }
       console.log(j)
          arr1.push(h)
        }else if(j === 4|| j ===5 ) {
          console.log(1)
            h = {row: j === 5? row-2 : row -1,col:j === 5? col-4 : col -3  ,type:type}
            arr1.push(h)
        }
         else if(j === 5|| j ===6 ) {
          
          h = {row: j === 6? row-2 : row -1,col:j === 6? col-5 : col -4  ,type:type}
          arr1.push(h)
        }
          else if(j === 7|| j ===8 ) {
          
            h = {row: j === 8? row-3 : row -3,col:j === 8? col-7 : col -6  ,type:type}
          arr1.push(h)
        }
          else if(j === 9|| j ===10 ) {
          
            h = {row: j === 10? row-4 : row -4,col:j === 10? col-7 : col -8  ,type:type}
          arr1.push(h)
        } 
        else if(j === 10|| j ===11 ) {
          
          h = {row:row -6  ,col:col  ,type:type}
          arr1.push(h)
        }
        else if(j === 11|| j ===12 ) {
          
          h = {row:row -7  ,col:col  ,type:type}
          arr1.push(h)
        }      
        else{
          h = {row: row ,col:col   ,type: type}
         
          arr1.push(h)
        }
      
      }
    
    }else if(type === 1 &&row5 + 1  === col3  && col4   === col5) {
      for(let j = 0; j < col1;j++){
       
           

        if(j === 1 ) {   h = {row: row   ,col:col  ,type: type}
       
        console.log(arr1)
         arr1.push(h)
        
        } else if(j === 2|| j ===3  ) {
         ///исправьь
          h = {row:  j ===3 ? row-1: row   ,col:j === 3 ? col+2  : col  +2 ,type:type  }
        console.log(j)
           arr1.push(h)
         }else if(j === 4|| j ===5 ) {
           console.log(1)
         
             h = {row: j ===5 ? row-2 :row -1 ,col: col === 5 ? col +4: col +4  ,type:type}
             arr1.push(h)
         }
          else if(j === 5|| j ===6 ) {
          
           h = {row:j ===6 ? row -2:row -2 ,col:col === 6 ? col +6 : col +6 ,type:type}
         
           arr1.push(h)
         }
           else if(j === 7|| j ===8 ) {
           
            h = {row:j ===8 ? row -4:row -3 ,col:col === 6 ? col +8 : col +6 ,type:type}
           arr1.push(h)
         }
           else if(j === 9|| j ===10 ) {
           
            h = {row:j ===10 ? row -3:row -3 ,col:col === 6 ? col +8 : col +8 ,type:type}
           arr1.push(h)
         } 
         else if(j === 10|| j ===11 ) {
           
           h = {row:row -6  ,col:col  ,type:type}
           arr1.push(h)
         }
         else if(j === 11|| j ===12 ) {
           
           h = {row:row -7  ,col:col  ,type:type}
           arr1.push(h)
         }      
         else{
           h = {row: row ,col:col   ,type: type}
          
           arr1.push(h)
         }
       
       }}else if(type === 1 &&row5 - 1  === col3  && col4   === col5) {
        for(let j = 0; j < col1;j++){
         
             
  
          if(j === 1 ) {   h = {row: row   ,col:col  ,type: type}
         
          console.log(arr1)
           arr1.push(h)
          
          } else if(j === 2|| j ===3  ) {
           ///исправьь
            h = {row:  j ===3 ? row+1: row   ,col:j === 3 ? col+2  : col  +2 ,type:type  }
          console.log(j)
             arr1.push(h)
           }else if(j === 4|| j ===5 ) {
             console.log(1)
           
               h = {row: j ===5 ? row+2 :row +1 ,col: col === 5 ? col +4: col +4  ,type:type}
               arr1.push(h)
           }
            else if(j === 5|| j ===6 ) {
            
             h = {row:j ===6 ? row -2:row -2 ,col:col === 6 ? col +6 : col +6 ,type:type}
           
             arr1.push(h)
           }
             else if(j === 7|| j ===8 ) {
             
              h = {row:j ===8 ? row -4:row -3 ,col:col === 6 ? col +8 : col +6 ,type:type}
             arr1.push(h)
           }
             else if(j === 9|| j ===10 ) {
             
              h = {row:j ===10 ? row -3:row -3 ,col:col === 6 ? col +8 : col +8 ,type:type}
             arr1.push(h)
           } 
           else if(j === 10|| j ===11 ) {
             
             h = {row:row -6  ,col:col  ,type:type}
             arr1.push(h)
           }
           else if(j === 11|| j ===12 ) {
             
             h = {row:row -7  ,col:col  ,type:type}
             arr1.push(h)
           }      
           else{
             h = {row: row ,col:col   ,type: type}
            
             arr1.push(h)
           }}}else if(type === 2 &&row5 - 1  === col3  && col4   === col5) {
            for(let j = 0; j < col1;j++){
             
                 
      
              if(j === 1 ) {   h = {row: row   ,col:col  ,type: type}
             
              console.log(arr1)
               arr1.push(h)
              
              } else if(j === 2|| j ===3  ) {
               ///исправьь
                h = {row:  j ===3 ? row+1: row   ,col:j === 3 ? col+2  : col+2   ,type:type  }
              console.log(j)
                 arr1.push(h)
               }else if(j === 4|| j ===5 ) {
                 console.log(1)
               
                   h = {row: j ===5 ? row+2 :row+1  ,col: col === 5 ? col +4: col+4   ,type:type}
                   arr1.push(h)
               }
                else if(j === 5|| j ===6 ) {
                
                 h = {row:j ===6 ? row -2:row -2 ,col:col === 6 ? col +6 : col +6 ,type:type}
               
                 arr1.push(h)
               }
                 else if(j === 7|| j ===8 ) {
                 
                  h = {row:j ===8 ? row -4:row -3 ,col:col === 6 ? col +8 : col +6 ,type:type}
                 arr1.push(h)
               }
                 else if(j === 9|| j ===10 ) {
                 
                  h = {row:j ===10 ? row -3:row -3 ,col:col === 6 ? col +8 : col +8 ,type:type}
                 arr1.push(h)
               } 
               else if(j === 10|| j ===11 ) {
                 
                 h = {row:row -6  ,col:col  ,type:type}
                 arr1.push(h)
               }
               else if(j === 11|| j ===12 ) {
                 
                 h = {row:row -7  ,col:col  ,type:type}
                 arr1.push(h)
               }      
               else{
                 h = {row: row ,col:col   ,type: type}
                
                 arr1.push(h)
               }


    }
  }
     return arr1
  
  }
     const sectors2 = (row:number,col:number,type:number) => {
      let arr2 =[]
       if ( type === 2 &&row5 + 1  === col3  && col4   === col5 ) {
        for(let j = 0; j < col1;j++){
         
             
  
         if(j === 1 ) {   h = {row: row   ,col:col -j ,type: type}
         console.log(arr2)
          arr2.push(h)
         
         } else if(j === 2|| j ===3  ) {
            h = {row: j === 2 ? row  : row-1      ,col:col -2  ,type:type  }
         console.log(j)
            arr2.push(h)
          }else if(j === 4|| j ===5 ) {
            console.log(1)
              h = {row: j ===4 ? row-1 :row -2  ,col:col-4  ,type:type}
              arr2.push(h)
          }
           else if(j === 5|| j ===6 ) {
            
            h = {row:j ===5 ? row-1 :row -2  ,col:col -6 ,type:type}
            arr2.push(h)
          }
            else if(j === 7|| j ===8 ) {
            
              h = {row:j ===8 ? row-1 :row -2  ,col:col -8 ,type:type}
            arr2.push(h)
          }
            else if(j === 9|| j ===10 ) {
            
              h = {row:j ===10 ? row-1 :row -2  ,col:col -10 ,type:type}
            arr2.push(h)
          } 
          else if(j === 10|| j ===11 ) {
            
            h = {row:row -6  ,col:col  ,type:type}
            arr2.push(h)
          }
          else if(j === 11|| j ===12 ) {
            
            h = {row:row -7  ,col:col  ,type:type}
            arr2.push(h)
          }      
          else{
            h = {row: row ,col:col   ,type: type}
           
            arr2.push(h)
          }
        
        }
      
      }else if(type === 1 &&row5 + 1  === col3  && col4   === col5) {
        for(let j = 0; j < col1;j++){
         
             
  
          if(j === 1 ) {   h = {row: row-1   ,col:col  ,type: type}
          console.log(arr2)
           arr2.push(h)
          
          } else if(j === 2|| j ===3  ) {
             h = {row: j === 3 ? row -2 : row-2      ,col:j === 3 ? col+2  : col+2    ,type:type  }
          console.log(j)
             arr2.push(h)
           }else if(j === 4|| j ===5 ) {
             console.log(1)
               h = {row: j ===4 ? row-3 :row - 3 ,col:j === 4 ? col+4  : col+4    ,type:type}
               arr2.push(h)
           }
            else if(j === 5|| j ===6 ) {
             
             h = {row: j ===6 ? row-4 :row - 4 ,col:j === 6 ? col+6  : col+6    ,type:type}
             arr2.push(h)
           }
             else if(j === 7|| j ===8 ) {
             
              h = {row: j ===8 ? row-5 :row - 4 ,col:j === 8 ? col+8  : col+7    ,type:type}
             arr2.push(h)
           }
             else if(j === 9|| j ===10 ) {
             
             h = {row: j ===10 ? row-6 :row - 5 ,col:j === 10 ? col+10  : col+10    ,type:type}
             arr2.push(h)
           } 
           else if(j === 10|| j ===11 ) {
             
             h = {row:row -6  ,col:col  ,type:type}
             arr2.push(h)
           }
           else if(j === 11|| j ===12 ) {
             
             h = {row:row -7  ,col:col  ,type:type}
             arr2.push(h)
           }      
           else{
             h = {row: row-1 ,col:col   ,type: type}
            
             arr2.push(h)
           }
         
         }}else if(type === 1 &&row5 - 1  === col3  && col4   === col5) {
          for(let j = 0; j < col1;j++){
           
               
    
            if(j === 1 ) {   h = {row: row+1   ,col:col  ,type: type}
            console.log(arr2)
             arr2.push(h)
            
            } else if(j === 2|| j ===3  ) {
               h = {row: j === 3 ? row +2 : row+2      ,col:j === 3 ? col-2  : col-2    ,type:type  }
            console.log(j)
               arr2.push(h)
             }else if(j === 4|| j ===5 ) {
               console.log(1)
                 h = {row: j ===4 ? row+3 :row + 3 ,col:j === 4 ? col-4  : col-4    ,type:type}
                 arr2.push(h)
             }
              else if(j === 5|| j ===6 ) {
               
               h = {row: j ===6 ? row-4 :row - 4 ,col:j === 6 ? col+6  : col+6    ,type:type}
               arr2.push(h)
             }
               else if(j === 7|| j ===8 ) {
               
                h = {row: j ===8 ? row-5 :row - 4 ,col:j === 8 ? col+8  : col+7    ,type:type}
               arr2.push(h)
             }
               else if(j === 9|| j ===10 ) {
               
               h = {row: j ===10 ? row-6 :row - 5 ,col:j === 10 ? col+10  : col+10    ,type:type}
               arr2.push(h)
             } 
             else if(j === 10|| j ===11 ) {
               
               h = {row:row -6  ,col:col  ,type:type}
               arr2.push(h)
             }
             else if(j === 11|| j ===12 ) {
               
               h = {row:row -7  ,col:col  ,type:type}
               arr2.push(h)
             }      
             else{
               h = {row: row+1 ,col:col   ,type: type}
              
               arr2.push(h)
             }
  
            }}else if(type === 2 &&row5 - 1  === col3  && col4   === col5) {
              for(let j = 0; j < col1;j++){
               
                   
        
                if(j === 1 ) {   h = {row: row+1   ,col:col  ,type: type}
                console.log(arr2)
                 arr2.push(h)
                
                } else if(j === 2|| j ===3  ) {
                   h = {row: j === 3 ? row +2 : row+2      ,col:j === 3 ? col-2  : col-2    ,type:type  }
                console.log(j)
                   arr2.push(h)
                 }else if(j === 4|| j ===5 ) {
                   console.log(1)
                     h = {row: j ===4 ? row+3 :row + 3 ,col:j === 4 ? col-4  : col-4    ,type:type}
                     arr2.push(h)
                 }
                  else if(j === 5|| j ===6 ) {
                   
                   h = {row: j ===6 ? row-4 :row - 4 ,col:j === 6 ? col+6  : col+6    ,type:type}
                   arr2.push(h)
                 }
                   else if(j === 7|| j ===8 ) {
                   
                    h = {row: j ===8 ? row-5 :row - 4 ,col:j === 8 ? col+8  : col+7    ,type:type}
                   arr2.push(h)
                 }
                   else if(j === 9|| j ===10 ) {
                   
                   h = {row: j ===10 ? row-6 :row - 5 ,col:j === 10 ? col+10  : col+10    ,type:type}
                   arr2.push(h)
                 } 
                 else if(j === 10|| j ===11 ) {
                   
                   h = {row:row -6  ,col:col  ,type:type}
                   arr2.push(h)
                 }
                 else if(j === 11|| j ===12 ) {
                   
                   h = {row:row -7  ,col:col  ,type:type}
                   arr2.push(h)
                 }      
                 else{
                   h = {row: row+1 ,col:col   ,type: type}
                  
                   arr2.push(h)
                 }
                }
      }
       return arr2
    
   }
   
   //let l = dfd.map((cell,index,arr) =>arr.slice(index,index+1) )
   
   let g = dfd.map((cell,index,arr)=> arr.slice(index,index+1))
   let a = dfd.map((cell,index,arr)=> arr.slice(index,index+1).map((cell) =>sectors(cell.row,cell.col,cell.type)))
   console.log(a)
   
   let i = g
   console.log( i.map((cell)=> cell.map((cell)=> sectors(cell.row,cell.col,cell.type))))

   console.log(g.map((cell)=> cell.map((cells) => sectors(cells.row,cells.col,cells.type))))
   let o = dfd1.map((cell,index,arr)=> arr.slice(index,index+1))
   let p = dfd2.map((cell,index,arr)=> arr.slice(index,index+1))
   let c = p.map((cell) => cell.map((cell) => sectors2(cell.row,cell.col,cell.type)))
   let l = o.map((cell) => cell.map((cell) => sectors1(cell.row,cell.col,cell.type)))
 
   const sector = (row:number, col:number,type:number,kef?:number, id?:number,) => {
    let array: cell[]
 
   if(type === 1) {
    array =

        [
          { row: row + 1, col: col     , type: 1 , kef: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].kef : undefined,id: row+1 <= 8 && row+1 >= 1 && col   > 0  && col <= 11 ? dataField[col-1].sections[row].id : undefined    },
          { row: row , col: col +1, type: 2, kef: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].kef : undefined , id: row  <= 8 && row >= 1 && col +1  > 0 && col + 1 <= 11   ? dataField[col].sections[row-1].id : undefined },
          {row: row - 1, col: col + 1, type: 2 , kef: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].kef : undefined , id: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col].sections[row-2].id : undefined },
          { row: row - 1, col: col , type: 1 ,kef: row-1 <= 8 && row-1 >= 1 && col > 0   && col <= 11? dataField[col-1].sections[row-2].kef : undefined , id: row-1 <= 8 && row-1 >= 1 && col + 1 >0   && col+1 <= 11? dataField[col-1].sections[row-2].id : undefined  },
          { row: row  , col: col - 1, type: 2, kef: row <= 8 && row >= 1 && col-1 >0   && col-1 <=11 ?  dataField[col-2].sections[row-1].kef: undefined , id: row-1 <= 8 && row-1 >= 1 && col - 1 >0   && col-1 <= 11? dataField[col-2].sections[row-1].id : undefined  },
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
  let d = g.map((cell)=> cell.map((cell)=> sectors(cell.row,cell.col,cell.type)))
 // console.log(d)
  let returnedCoordinatesArray: IReturnedArray[] = [{ radius: 0, cells: [{id:0, row: 0, col: 0, type: 0, kef:col4 }] }]
  let _newArray: IReturnedArray = { radius: 0, cells: [{ row: row, col: col, type: type,kef:col4}] }
        let cells: cell[] = [{ id:0, row: 1, col: 1, type: 1, kef:3 }]
        _newArray.radius = 0
        returnedCoordinatesArray[0].cells.map(coordinate => {
          const position = sector(coordinate.row, coordinate.col, coordinate.type, coordinate.kef!,coordinate.id! )
          _newArray.cells.push(...position)
          
        })
        returnedCoordinatesArray.push(_newArray)
        _newArray.cells = d.flat(3).concat(c.flat(3),l.flat(3))
      console.log(returnedCoordinatesArray)
    return returnedCoordinatesArray
  }





