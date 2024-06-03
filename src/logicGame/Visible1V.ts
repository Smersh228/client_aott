
import { dataField } from "../mockData/mockData"


interface cell1 {
    row: number, col: number, type: number, kef?: number, id?:number, visible?:boolean
}
let j : cell1
export const Visible1V =(row:number,col:number) => {
let h = {row:row,col:col,visible:true}
    let right_visible_top_type1 = []
    let left_visible_top_type1 = []
    let right_visible_bottom_type1 = []
    let left_visible_bottom_type1 = []

    let right_visible_top_type2 = []
    let left_visible_top_type2 = []
    let right_visible_bottom_type2 = []
    let left_visible_bottom_type2 = []

    let top_visibile_type1 = []

    let botttom_visibile_type1 = []


    let right_visible_top_type1_is = []
    let right_visible_bottom_type1_is = []
    let left_visible_top_type1_is = []
    let left_visible_bottom_type1_is = []

    let right_visible_top_type1_is2 = []
    let right_visible_bottom_type1_is2 = []
    let left_visible_top_type1_is2 = []
    let left_visible_bottom_type1_is2 = []

    let right_visible_top_type1_is3 = []
    let left_visible_bottom_type1_is3 = []
    let right_visible_bottom_type1_is3 = []
    let left_visible_top_type1_is3 = []

    let right_visible_top_type2_is = []
    let right_visible_bottom_type2_is = []
    let left_visible_top_type2_is = []
    let left_visible_bottom_type2_is = []

    let right_visible_top_type2_is2 = []
    let right_visible_bottom_type2_is2 = []
    let left_visible_top_type2_is2 = []
    let left_visible_bottom_type2_is2 = []

    let right_visible_top_type2_is3 = []
    let left_visible_bottom_type2_is3 = []
    let right_visible_bottom_type2_is3 = []
    let left_visible_top_type2_is3 = []

    let visible_ready = []
    let visible_ready1 = []
    visible_ready1.push(h)
    if (col % 2 !==0) {
      for(let i =0; i <= 2;i++) {
      let s =  {row:row-i-1,col:col+i+i+1, visible: col+i+i+1 >= 1 && col+i+i+1  <= 11 && row-i-1 >= 1 && row-i-1 <=8 ? dataField[col+i+i].sections[row-i-2].visible : undefined}
      let d  = {row:row-i-1,col:col+i+i+2, visible: col+i+i+2 >= 1 && col+i+i+2  <= 11 && row-i-1 >= 1 && row-i-1 <=8 ?  dataField[col+i+i+1].sections[row-i-2].visible : undefined }
      right_visible_top_type1.push(s,d)

      console.log(right_visible_top_type1)
      
    }
    for(let i =0; i <= 2;i++) {
      let m =  {row:row-i-1,col:col-i-i-1, visible:  col-i-i-1 >= 1 && col-i-i-1 <= 11 && row-i-1 >= 1 && row-i-1 <=8 ?    dataField[col-i-i-2].sections[row-i-2].visible : undefined} 
      let h  = {row:row-i-1,col:col-i-i-2, visible: col-i-i-2 >= 1 && col-i-i-2 <= 11 && row-i-1 >= 1 && row-i-1 <=8 ?    dataField[col-i-i-3].sections[row-i-2].visible : undefined }
      left_visible_top_type1.push(m,h)
   
      console.log(left_visible_top_type1)
    }
    for(let i =0; i <= 2;i++) {

      let q =  {row:row+i,col:col+i+i+1, visible: col+i+i+1 >= 1 && col+i+i+1 <= 11 && row+i >= 1 && row+i <=8 ? dataField[col+i+i].sections[row+i-1].visible : undefined}
      let y  = {row:row+i+1,col:col+i+i+2, visible: col+i+i+2 >= 1 && col+i+i+2 <= 11 && row+i+1 >= 1 && row+i+1 <=8 ? dataField[col+i+i+1].sections[row+i].visible : undefined }
      right_visible_bottom_type1.push(q,y)

      console.log(right_visible_bottom_type1)

    }
    for(let i =0; i <= 2;i++) {
      console.log(col-i-i-1,col-i-i-2)
   
      let n =  {row:row+i,col:col-i-i-1, visible: col-i-i-1 >= 1 && col-i-i-1 <= 11 && row+i >= 1 && row+i <=8 ?  dataField[col-i-i-2].sections[row+i-1].visible : undefined}
      let l1  = {row:row+i+1,col:col-i-i-2, visible: col-i-i-2 >= 1 && col-i-i-2 <= 11 && row+i+1 >= 1 && row+i+1 <=8 ?   dataField[col-i-i-3].sections[row+i+1-1].visible:undefined }
      left_visible_bottom_type1.push(n,l1)
      console.log(left_visible_bottom_type1)

    }
    for(let i =0; i <= 1;i++) {
      console.log(col-i-i-1,col-i-i-2)
      let n =  {row:row-1-i-i-i,col:col+1+i+i, visible: col+1+i+i >= 1 && col+1+i+i <= 11 && row-1-i-i-i >= 1 && row-1-i-i-i <=8 ?  dataField[col+1+i+i-1].sections[row-1-i-i-i-1].visible : undefined}
      let l1  = {row:row-2-i-i-i,col:col+1+i+i, visible: col+1+i+i >= 1 && col+1+i+i <= 11 && row-2-i-i-i >= 1 && row-2-i-i-i <=8 ?   dataField[col+1+i+i-1].sections[row-2-i-i-i-1].visible:undefined }
      let l12  = {row:row-2-i,col:col+2, visible: col+2 >= 1 && col+2 <= 11 && row-2-i >= 1 && row-2-i <=8 ?   dataField[col+2-1].sections[row-2-i-1].visible:undefined }
       
       if (i === 0) {
        right_visible_bottom_type1_is.push(n,l1,l12) 

       } else {
        right_visible_bottom_type1_is.push(l12,n,l1) 

       }
      console.log(right_visible_bottom_type1_is)

    }
    for(let i =0; i <= 1;i++) {
      console.log()
   
      let n =  {row:row-1-i-i-i-i,col:col+i+i+i, visible: col+i+i+i >= 1 && col+i+i+i <= 11 && row-1-i-i-i-i >= 1 && row-1-i-i-i-i <=8 ?  dataField[col+i+i+i-1].sections[row-1-i-i-i-i-1].visible : undefined}
      let l1  = {row:row-2-i,col:col+1+i, visible: col+1+i >= 1 && col+1+i <= 11 && row-2-i >= 1 && row-2-i <=8 ?   dataField[col+1+i-1].sections[row-2-i-1].visible:undefined }
      let l12  = {row:row-3-i,col:col+1+i, visible: col+1+i >= 1 && col+1+i <= 11 && row-3-i >= 1 && row-3-i <=8 ?   dataField[col+1+i-1].sections[row-3-i-1].visible:undefined }
       
       if (i === 0) {
        right_visible_top_type1_is.push(n,l1,l12) 

       } else {
        right_visible_top_type1_is.push(l1,l12,n) 

       }


      console.log(right_visible_top_type1_is)

    }
    for(let i =0; i <= 1;i++) {
      console.log(col-i-i-1,col-i-i-2)
      let n =  {row:row-1-i-i-i,col:col-1-i-i, visible: col-1-i-i >= 1 && col-1-i-i <= 11 && row-1-i-i-i >= 1 && row-1-i-i-i <=8 ?  dataField[col-1-i-i-1].sections[row-1-i-i-i-1].visible : undefined}
      let l1  = {row:row-2-i-i-i,col:col-1-i-i, visible: col-1-i-i >= 1 && col-1-i+-i <= 11 && row-2-i-i-i >= 1 && row-2-i-i-i <=8 ?   dataField[col-1-i-i-1].sections[row-2-i-i-i-1].visible:undefined }
      let l12  = {row:row-2-i,col:col-2, visible: col-2 >= 1 && col-2 <= 11 && row-2-i >= 1 && row-2-i <=8 ?   dataField[col-2-1].sections[row-2-i-1].visible:undefined }
       
       if (i === 0) {
        left_visible_bottom_type1_is.push(n,l1,l12) 

       } else {
        left_visible_bottom_type1_is.push(l12,n,l1) 

       }
      console.log(left_visible_bottom_type1_is)

    }
    for(let i =0; i <= 1;i++) {

   
      let n =  {row:row-1-i-i-i-i,col:col-i-i-i, visible: col-i-i-i >= 1 && col-i-i-i <= 11 && row-1-i-i-i-i >= 1 && row-1-i-i-i-i <=8 ?  dataField[col-i-i-i-1].sections[row-1-i-i-i-i-1].visible : undefined}
      let l1  = {row:row-2-i,col:col-1-i, visible: col-1-i >= 1 && col-1-i <= 11 && row-2-i >= 1 && row-2-i <=8 ?   dataField[col-1-i-1].sections[row-2-i-1].visible:undefined }
      let l12  = {row:row-3-i,col:col-1-i, visible: col-1-i >= 1 && col-1-i <= 11 && row-3-i >= 1 && row-3-i <=8 ?   dataField[col-1-i-1].sections[row-3-i-1].visible:undefined }
       
       if (i === 0) {
        left_visible_top_type1_is.push(n,l1,l12) 

       } else {
        left_visible_top_type1_is.push(l1,l12,n) 

       }


      console.log(left_visible_top_type1_is)

    }

    for(let i =0; i <= 1;i++) {
      console.log(col-i-i-1,col-i-i-2)
      let n =  {row:row+1+i+i+i-1,col:col-1-i-i, visible: col-1-i-i >= 1 && col-1-i-i <= 11 && row+1+i+i+i-1 >= 1 && row+1+i+i+i-1 <=8 ?  dataField[col-1-i-i-1].sections[row+1+i+i+i-1-1].visible : undefined}
      let l1  = {row:row+2+i+i+i-1,col:col-1-i-i, visible: col-1-i-i >= 1 && col-1-i+-i <= 11 && row+2+i+i+i-1 >= 1 && row+2+i+i+i-1 <=8 ?   dataField[col-1-i-i-1].sections[row+2+i+i+i-1-1].visible:undefined }
      let l12  = {row:row+2+i,col:col-2, visible: col-2 >= 1 && col-2 <= 11 && row+2+i >= 1 && row+2+i <=8 ?   dataField[col-2-1].sections[row+2+i-1].visible:undefined }
       
       if (i === 0) {
        left_visible_top_type1_is2.push(n,l1,l12) 

       } else {
        left_visible_top_type1_is2.push(l12,n,l1) 

       }
      console.log(left_visible_top_type1_is2)

    }
    for(let i =0; i <= 1;i++) {
      console.log()
   
      let n =  {row:row+1+i+i+i,col:col-i-i-i, visible: col-i-i-i >= 1 && col-i-i-i <= 11 && row+1+i+i+i >= 1 && row+1+i+i+i <=8 ?  dataField[col-i-i-i-1].sections[row+1+i+i+i-1].visible : undefined}
      let l1  = {row:row+2+i-1+i,col:col-1-i, visible: col-1-i >= 1 && col-1-i <= 11 && row+2+i-1+i >= 1 && row+2+i-1+i <=8 ?   dataField[col-1-i-1].sections[row+2+i-1+i-1].visible:undefined }
      let l12  = {row:row+3+i-1+i,col:col-1-i, visible: col-1-i >= 1 && col-1-i <= 11 && row+3+i-1+i >= 1 && row+3+i-1+i <=8 ?   dataField[col-1-i-1].sections[row+3+i-1+i-1].visible:undefined }
       
       if (i === 0) {
        left_visible_bottom_type1_is2.push(n,l1,l12) 

       } else {
        left_visible_bottom_type1_is2.push(l1,l12,n) 

       }


      console.log(left_visible_bottom_type1_is2)

    }
    for(let i =0; i <= 1;i++) {
      console.log(col-i-i-1,col-i-i-2)
      let n =  {row:row+1+i+i+i-1,col:col+1+i+i, visible: col+1+i+i >= 1 && col+1+i+i <= 11 && row+1+i+i+i-1 >= 1 && row+1+i+i+i-1 <=8 ?  dataField[col+1+i+i-1].sections[ row+1+i+i+i-1-1].visible : undefined}
      let l1  = {row:row+2+i+i+i-1,col:col+1+i+i, visible: col+1+i+i >= 1 && col+1+i+i <= 11 && row+2+i+i+i-1 >= 1 && row+2+i+i+i-1 <=8 ?   dataField[col+1+i+i-1].sections[row+2+i+i+i-1-1].visible:undefined }
      let l12  = {row:row+2+i,col:col+2, visible: col+2 >= 1 && col+2 <= 11 && row+2+i >= 1 && row+2+i <=8 ?   dataField[ col+2-1].sections[row+2+i-1].visible:undefined }
       
       if (i === 0) {
        right_visible_top_type1_is2.push(n,l1,l12) 

       } else {
        right_visible_top_type1_is2.push(l12,n,l1) 

       }
      console.log(right_visible_top_type1_is2)

    }
    for(let i =0; i <= 1;i++) {
      console.log()
   
      let n =  {row:row+1+i+i+i,col:col+i+i+i, visible: col+i+i+i >= 1 && col+i+i+i <= 11 && row+1+i+i+i >= 1 && row+1+i+i+i <=8 ?  dataField[col+i+i+i-1].sections[row+1+i+i+i-1].visible : undefined}
      let l1  = {row:row+2+i-1+i,col:col+1+i, visible: col+1+i>= 1 && col+1+i <= 11 && row+2+i-1+i >= 1 && row+2+i-1+i <=8 ?   dataField[col+1+i-1].sections[row+2+i-1+i-1].visible:undefined }
      let l12  = {row:row+3+i-1+i,col:col+1+i, visible: col+1+i >= 1 && col+1+i <= 11 && row+3+i-1+i >= 1 && row+3+i-1+i <=8 ?   dataField[col+1+i-1].sections[row+3+i-1+i-1].visible:undefined }
       
       if (i === 0) {
        right_visible_bottom_type1_is2.push(n,l1,l12) 

       } else {
        right_visible_bottom_type1_is2.push(l1,l12,n) 

       }


      console.log(right_visible_bottom_type1_is2)

    }

    for(let i =0; i <= 1;i++) {
      console.log(col-i-i-1,col-i-i-2)
      let n =  {row:row-1+i,col:col+1+i+i+i, visible: col+1+i+i+i >= 1 && col+1+i+i+i <= 11 && row-1+i >= 1 && row-1+i <=8 ?  dataField[col+1+i+i+i-1].sections[row-1+i-1].visible : undefined}
      let l1  = {row:row-i,col:col+2+i+i+i, visible: col+2+i+i+i >= 1 && col+2+i+i+i <= 11 && row-i >= 1 && row-i <=8 ?   dataField[col+2+i+i+i-1].sections[row-i-1].visible:undefined }
      let l12  = {row:row-1+i,col:col+3+i+i+i, visible:col+3+i+i+i >= 1 &&col+3+i+i+i <= 11 && row-1+i >= 1 && row-1+i <=8 ?   dataField[col+3+i+i+i-1].sections[row-1+i-1].visible:undefined }
       
       if (i === 0) {
        right_visible_top_type1_is3.push(n,l1,l12) 

       } else {
        right_visible_top_type1_is3.push(n,l1,l12) 

       }
      console.log(right_visible_top_type1_is3)

    }
    for(let i =0; i <= 1;i++) {
      console.log()
   
      let n =  {row:row,col:col+1+i+i, visible: col+1+i+i >= 1 && col+1+i+i <= 11 && row >= 1 && row <=8 ?  dataField[col+1+i+i-1].sections[row-1].visible : undefined}
      let l1  = {row:row,col:col+2+i+i, visible: col+2+i+i >= 1 && col+2+i+i <= 11 && row >= 1 && row <=8 ?   dataField[col+2+i+i-1].sections[row-1].visible:undefined }
      let l12  = {row:row,col:col+3+i+i, visible: col+3+i+i >= 1 && col+3+i+i <= 11 && row >= 1 && row <=8 ?   dataField[col+3+i+i-1].sections[row-1].visible:undefined }
       
       if (i === 0) {
        right_visible_bottom_type1_is3.push(n,l1,l12) 

       } else {
        right_visible_bottom_type1_is3.push(l1,l12,n) 

       }


      console.log(right_visible_bottom_type1_is3)

    }
    for(let i =0; i <= 1;i++) {
      console.log(col-i-i-1,col-i-i-2)
      let n =  {row:row-1+i,col:col-1-i-i-i, visible: col-1-i-i-i >= 1 &&col-1-i-i-i <= 11 && row-1+i >= 1 && row-1+i <=8 ?  dataField[col-1-i-i-i-1].sections[row-1+i-1].visible : undefined}
      let l1  = {row:row-i,col:col-2-i-i-i, visible: col-2-i-i-i >= 1 && col-2-i-i-i  <= 11 &&row-i >= 1 && row-i <=8 ?   dataField[col-2-i-i-i-1].sections[row-i-1].visible:undefined }
      let l12  = {row:row-1+i,col:col-3-i-i-i, visible: col-3-i-i-i >= 1 && col-3-i-i-i <= 11 && row-1+i >= 1 && row-1+i <=8 ?   dataField[col-3-i-i-i-1].sections[row-1+i-1].visible:undefined }
       
       if (i === 0) {
        left_visible_top_type1_is3.push(n,l1,l12) 

       } else {
        left_visible_top_type1_is3.push(n,l1,l12) 

       }
      console.log(left_visible_top_type1_is3)

    }
    for(let i =0; i <= 1;i++) {
 
   
      let n =  {row:row,col:col-1-i-i-i-i-i, visible: col-1-i-i-i-i-i >= 1 && col-1-i-i-i-i-i <= 11 && row >= 1 && row <=8 ?  dataField[col-1-i-i-i-i-i-1].sections[row-1].visible : undefined}
      let l1  = {row:row,col:col-2-i-i, visible: col-2-i-i >= 1 && col-2-i-i <= 11 && row  >= 1 && row <=8 ?   dataField[col-2-i-i-1].sections[row-1].visible:undefined }
      let l12  = {row:row,col:col-3-i-i, visible: col-3-i-i >= 1 && col-3-i-i <= 11 && row >= 1 && row <=8 ?   dataField[col-3-i-i-1].sections[row-1].visible:undefined }
       
       if (i === 0) {
        left_visible_bottom_type1_is3.push(n,l1,l12) 

       } else {
        left_visible_bottom_type1_is3.push(l1,l12,n) 

       }


      console.log(left_visible_bottom_type1_is3)

    }

  } else {
    for(let i =0; i <= 2;i++) {
      let s =  {row:row-i,col:col+i+i+1, visible: col+i+i+1 >= 1 && col+i+i+1 <= 11 && row-i >= 1 && row-i <=8 ? dataField[col+i+i].sections[row-i-1].visible : undefined}
      let d  = {row:row-i-1,col:col+i+i+2, visible: col+i+i+2 >= 1 && col+i+i+2 <= 11 &&row-i-1 >= 1 && row-i-1 <=8 ?  dataField[col+i+i+1].sections[row-i-2].visible : undefined }
      right_visible_top_type2.push(s,d)

      console.log(right_visible_top_type2)
      
    }
    for(let i =0; i <= 2;i++) {
      let m =  {row:row-i,col:col-i-i-1, visible:  col-i-i-1 >= 1 && col-i-i-1 <= 11 && row-i >= 1 && row-i <=8 ?    dataField[col-i-i-2].sections[row-i-1].visible : undefined} 
      let h  = {row:row-i-1,col:col-i-i-2, visible: col-i-i-2 >= 1 && col-i-i-2 <= 11 && row-i-1 >= 1 && row-i-1 <=8 ?    dataField[col-i-i-3].sections[row-i-2].visible : undefined }
      left_visible_top_type2.push(m,h)
   
      console.log(left_visible_top_type2)
    }
    for(let i =0; i <= 2;i++) {
      console.log(row+i+1,col+i+i+1)
      let q =  {row:row+i+1,col:col+i+i+1, visible: col+i+i+1 >= 1 && col+i+i+1 <= 11 && row+i+1 >= 1 && row+i+1 <=8 ? dataField[col+i+i].sections[row+i].visible : undefined}
      let y  = {row:row+i+1,col:col+i+i+2, visible: col+i+i+2 >= 1 && col+i+i+2 <= 11 && row+i+1 >= 1 && row+i+1 <=8 ? dataField[col+i+i+1].sections[row+i].visible : undefined }
      right_visible_bottom_type2.push(q,y)

      console.log(right_visible_bottom_type2)

    }
    for(let i =0; i <= 2;i++) {
        console.log(row+i+1,col-i-i-1)
      
      let n =  {row:row+i+1,col:col-i-i-1, visible: col-i-i-1 >= 1 && col-i-i-1 <= 11 && row+i+1 >= 1 && row+i+1 <=8 ?  dataField[col-i-i-2].sections[row+i].visible : undefined}
      let l1  = {row:row+i+1,col:col-i-i-2, visible: col-i-i-2 >= 1 && col-i-i-2 <= 11 && row+i+1 >= 1 && row+i+1 <=8 ?   dataField[col-i-i-3].sections[row+i].visible:undefined }
      left_visible_bottom_type2.push(n,l1)


    }

    for(let i =0; i <= 1;i++) {
      console.log(row-1-i-i-i,col+1+i+i)
      
      let n =  {row:row-1-i-i-i,col:col+1+i+i, visible: col+1+i+i >= 1 && col+1+i+i <= 11 && row-1-i-i-i >= 1 && row-1-i-i-i <=8 ?  dataField[col+1+i+i-1].sections[row-1-i-i-i-1].visible : undefined}
      let l1  = {row:row-2-i-i-i,col:col+1+i+i, visible: col+1+i+i >= 1 && col+1+i+i <= 11 && row-2-i-i-i >= 1 && row-2-i-i-i <=8 ?   dataField[col+1+i+i-1].sections[row-2-i-i-i-1].visible:undefined }
      let l12  = {row:row-2-i,col:col+2, visible: col+2 >= 1 && col+2 <= 11 && row-2-i >= 1 && row-2-i <=8 ?   dataField[col+2-1].sections[row-2-i-1].visible:undefined }
       
       if (i === 0) {
        right_visible_bottom_type2_is.push(n,l1,l12) 

       } else {
        right_visible_bottom_type2_is.push(l12,n,l1) 

       }
      console.log(right_visible_bottom_type2_is)

    }
    for(let i =0; i <= 1;i++) {
      console.log()
   
      let n =  {row:row-1-i-i-i-i,col:col+i+i+i, visible: col+i+i+i >= 1 && col+i+i+i <= 11 && row-1-i-i-i-i >= 1 && row-1-i-i-i-i <=8 ?  dataField[col+i+i+i-1].sections[row-1-i-i-i-i-1].visible : undefined}
      let l1  = {row:row-2-i,col:col+1+i, visible: col+1+i >= 1 && col+1+i <= 11 && row-2-i >= 1 && row-2-i <=8 ?   dataField[col+1+i-1].sections[row-2-i-1].visible:undefined }
      let l12  = {row:row-3-i,col:col+1+i, visible: col+1+i >= 1 && col+1+i <= 11 && row-3-i >= 1 && row-3-i <=8 ?   dataField[col+1+i-1].sections[row-3-i-1].visible:undefined }
       
       if (i === 0) {
        right_visible_top_type2_is.push(n,l1,l12) 

       } else {
        right_visible_top_type2_is.push(l1,l12,n) 

       }


      console.log(right_visible_top_type2_is)

    }
    for(let i =0; i <= 1;i++) {
     
      let n =  {row:row-1-i-i-i,col:col-1-i-i, visible: col-1-i-i >= 1 && col-1-i-i <= 11 && row-1-i-i-i >= 1 && row-1-i-i-i <=8 ?  dataField[col-1-i-i-1].sections[row-1-i-i-i-1].visible : undefined}
      let l1  = {row:row-2-i-i-i,col:col-1-i-i, visible: col-1-i-i >= 1 && col-1-i-i <= 11 && row-2-i-i-i >= 1 && row-2-i-i-i <=8 ?   dataField[col-1-i-i-1].sections[row-2-i-i-i-1].visible:undefined }
      let l12  = {row:row-2-i,col:col-2, visible: col-2 >= 1 && col-2 <= 11 && row-2-i >= 1 && row-2-i <=8 ?   dataField[col-2-1].sections[row-2-i-1].visible:undefined }
       
       if (i === 0) {
        left_visible_bottom_type2_is.push(n,l1,l12) 

       } else {
        left_visible_bottom_type2_is.push(l12,n,l1) 

       }
      console.log(left_visible_bottom_type2_is)

    }
    for(let i =0; i <= 1;i++) {

   
      let n =  {row:row-1-i-i-i-i,col:col-i-i-i, visible: col-i-i-i >= 1 && col-i-i-i <= 11 && row-1-i-i-i-i >= 1 && row-1-i-i-i-i <=8 ?  dataField[col-i-i-i-1].sections[row-1-i-i-i-i-1].visible : undefined}
      let l1  = {row:row-2-i,col:col-1-i, visible: col-1-i >= 1 && col-1-i <= 11 && row-2-i >= 1 && row-2-i <=8 ?   dataField[col-1-i-1].sections[row-2-i-1].visible:undefined }
      let l12  = {row:row-3-i,col:col-1-i, visible: col-1-i >= 1 && col-1-i <= 11 && row-3-i >= 1 && row-3-i <=8 ?   dataField[col-1-i-1].sections[row-3-i-1].visible:undefined }
       
       if (i === 0) {
        left_visible_top_type2_is.push(n,l1,l12) 

       } else {
        left_visible_top_type2_is.push(l1,l12,n) 

       }


      console.log(left_visible_top_type2_is)

    }

    for(let i =0; i <= 1;i++) {
      console.log(col-i-i-1,col-i-i-2)
      let n =  {row:row+1+i+i+i-1,col:col-1-i-i, visible: col-1-i-i >= 1 && col-1-i-i <= 11 && row+1+i+i+i-1 >= 1 && row+1+i+i+i-1 <=8 ?  dataField[col-1-i-i-1].sections[row+1+i+i+i-1-1].visible : undefined}
      let l1  = {row:row+2+i+i+i-1,col:col-1-i-i, visible: col-1-i-i >= 1 && col-1-i+-i <= 11 && row+2+i+i+i-1>= 1 && row+2+i+i+i-1 <=8 ?   dataField[col-1-i-i-1].sections[row+2+i+i+i-1-1].visible:undefined }
      let l12  = {row:row+2+i,col:col-2, visible: col-2 >= 1 && col-2 <= 11 && row+2+i >= 1 &&row+2+i <=8 ?   dataField[col-2-1].sections[row+2+i-1].visible:undefined }
       
       if (i === 0) {
        left_visible_top_type2_is2.push(n,l1,l12) 

       } else {
        left_visible_top_type2_is2.push(l12,n,l1) 

       }
      console.log(left_visible_top_type2_is2)

    }
    for(let i =0; i <= 1;i++) {
      console.log()
   
      let n =  {row:row+1+i+i+i,col:col-i-i-i, visible: col-i-i-i >= 1 && col-i-i-i <= 11 && row+1+i+i+i >= 1 && row+1+i+i+i <=8 ?  dataField[col-i-i-i-1].sections[row+1+i+i+i-1].visible : undefined}
      let l1  = {row:row+2+i-1+i,col:col-1-i, visible: col-1-i >= 1 && col-1-i <= 11 && row+2+i-1+i >= 1 && row+2+i-1+i <=8 ?   dataField[col-1-i-1].sections[row+2+i-1+i-1].visible:undefined }
      let l12  = {row:row+3+i-1+i,col:col-1-i, visible: col-1-i >= 1 && col-1-i <= 11 && row+3+i-1+i >= 1 && row+3+i-1+i <=8 ?   dataField[col-1-i-1].sections[row+3+i-1+i-1].visible:undefined }
       
       if (i === 0) {
        left_visible_bottom_type2_is2.push(n,l1,l12) 

       } else {
        left_visible_bottom_type2_is2.push(l1,l12,n) 

       }


      console.log(left_visible_bottom_type2_is2)

    }
    for(let i =0; i <= 1;i++) {
      console.log(col-i-i-1,col-i-i-2)
      let n =  {row:row+1+i+i+i-1,col:col+1+i+i, visible: col+1+i+i >= 1 && col+1+i+i <= 11 && row+1+i+i+i-1 >= 1 && row+1+i+i+i-1 <=8 ?  dataField[col+1+i+i-1].sections[ row+1+i+i+i-1-1].visible : undefined}
      let l1  = {row:row+2+i+i+i-1,col:col+1+i+i, visible: col+1+i+i >= 1 && col+1+i+i <= 11 && row+2+i+i+i-1 >= 1 && row+2+i+i+i-1 <=8 ?   dataField[col+1+i+i-1].sections[row+2+i+i+i-1-1].visible:undefined }
      let l12  = {row:row+2+i,col:col+2, visible: col+2 >= 1 && col+2 <= 11 && row+2+i >= 1 && row+2+i <=8 ?   dataField[ col+2-1].sections[row+2+i-1].visible:undefined }
       
       if (i === 0) {
        right_visible_top_type2_is2.push(n,l1,l12) 

       } else {
        right_visible_top_type2_is2.push(l12,n,l1) 

       }
      console.log(right_visible_top_type2_is2)

    }
    for(let i =0; i <= 1;i++) {
      console.log()
   
      let n =  {row:row+1+i+i+i,col:col+i+i+i, visible: col+i+i+i >= 1 && col+i+i+i <= 11 && row+1+i+i+i >= 1 && row+1+i+i+i <=8 ?  dataField[col+i+i+i-1].sections[row+1+i+i+i-1].visible : undefined}
      let l1  = {row:row+2+i-1+i,col:col+1+i, visible: col+1+i>= 1 && col+1+i <= 11 && row+2+i-1+i >= 1 && row+2+i-1+i <=8 ?   dataField[col+1+i-1].sections[row+2+i-1+i-1].visible:undefined }
      let l12  = {row:row+3+i-1+i,col:col+1+i, visible: col+1+i >= 1 && col+1+i <= 11 && row+3+i-1+i >= 1 && row+3+i-1+i <=8 ?   dataField[col+1+i-1].sections[row+3+i-1+i-1].visible:undefined }
       
       if (i === 0) {
        right_visible_bottom_type2_is2.push(n,l1,l12) 

       } else {
        right_visible_bottom_type2_is2.push(l1,l12,n) 

       }


      console.log(right_visible_bottom_type2_is2)

    }

    for(let i =0; i <= 1;i++) {
      console.log(col-i-i-1,col-i-i-2)
      let n =  {row:row-1+i,col:col+1+i+i+i, visible: col+1+i+i+i >= 1 && col+1+i+i+i <= 11 && row-1+i >= 1 && row-1+i <=8 ?  dataField[col+1+i+i+i-1].sections[row-1+i-1].visible : undefined}
      let l1  = {row:row-i,col:col+2+i+i+i, visible: col+2+i+i+i >= 1 && col+2+i+i+i <= 11 && row-i >= 1 && row-i <=8 ?   dataField[col+2+i+i+i-1].sections[row-i-1].visible:undefined }
      let l12  = {row:row-1+i,col:col+3+i+i+i, visible:col+3+i+i+i >= 1 &&col+3+i+i+i <= 11 && row-1+i >= 1 && row-1+i <=8 ?   dataField[col+3+i+i+i-1].sections[row-1+i-1].visible:undefined }
       
       if (i === 0) {
        right_visible_top_type2_is3.push(n,l1,l12) 

       } else {
        right_visible_top_type2_is3.push(n,l1,l12) 

       }
      console.log(right_visible_top_type2_is3)

    }
    for(let i =0; i <= 1;i++) {
      console.log()
   
      let n =  {row:row,col:col+1+i+i, visible: col+1+i+i >= 1 && col+1+i+i <= 11 && row >= 1 && row <=8 ?  dataField[col+1+i+i-1].sections[row-1].visible : undefined}
      let l1  = {row:row,col:col+2+i+i, visible: col+2+i+i >= 1 && col+2+i+i <= 11 && row >= 1 && row <=8 ?   dataField[col+2+i+i-1].sections[row-1].visible:undefined }
      let l12  = {row:row,col:col+3+i+i, visible: col+3+i+i >= 1 && col+3+i+i <= 11 && row >= 1 && row <=8 ?   dataField[col+3+i+i-1].sections[row-1].visible:undefined }
       
       if (i === 0) {
        right_visible_bottom_type2_is3.push(n,l1,l12) 

       } else {
        right_visible_bottom_type2_is3.push(l1,l12,n) 

       }


      console.log(right_visible_bottom_type2_is3)

    }
    for(let i =0; i <= 1;i++) {
      console.log(col-i-i-1,col-i-i-2)
      let n =  {row:row-1+i,col:col-1-i-i-i, visible: col-1-i-i-i >= 1 &&col-1-i-i-i <= 11 && row-1+i >= 1 && row-1+i <=8 ?  dataField[col-1-i-i-i-1].sections[row-1+i-1].visible : undefined}
      let l1  = {row:row-i,col:col-2-i-i-i, visible: col-2-i-i-i >= 1 && col-2-i-i-i  <= 11 &&row-i >= 1 && row-i <=8 ?   dataField[col-2-i-i-i-1].sections[row-i-1].visible:undefined }
      let l12  = {row:row-1+i,col:col-3-i-i-i, visible: col-3-i-i-i >= 1 && col-3-i-i-i <= 11 && row-1+i >= 1 && row-1+i <=8 ?   dataField[col-3-i-i-i-1].sections[row-1+i-1].visible:undefined }
       
       if (i === 0) {
        left_visible_top_type2_is3.push(n,l1,l12) 

       } else {
        left_visible_top_type2_is3.push(n,l1,l12) 

       }
      console.log(left_visible_top_type2_is3)

    }
    for(let i =0; i <= 1;i++) {
 
   
      let n =  {row:row,col:col-1-i-i-i-i-i, visible: col-1-i-i-i-i-i >= 1 && col-1-i-i-i-i-i <= 11 && row >= 1 && row <=8 ?  dataField[col-1-i-i-i-i-i-1].sections[row-1].visible : undefined}
      let l1  = {row:row,col:col-2-i-i, visible: col-2-i-i >= 1 && col-2-i-i <= 11 && row  >= 1 && row <=8 ?   dataField[col-2-i-i-1].sections[row-1].visible:undefined }
      let l12  = {row:row,col:col-3-i-i, visible: col-3-i-i >= 1 && col-3-i-i <= 11 && row >= 1 && row <=8 ?   dataField[col-3-i-i-1].sections[row-1].visible:undefined }
       
       if (i === 0) {
        left_visible_bottom_type2_is3.push(n,l1,l12) 

       } else {
        left_visible_bottom_type2_is3.push(l1,l12,n) 

       }


      console.log(left_visible_bottom_type2_is3)

    }






  }

    for(let i =1; i <= 6;i++) {
      console.log(col-i-i-1,col-i-i-2)
      let n4 =  {row:row-i,col:col, visible: col >= 1 && col <= 11 && row-i >= 1 && row-i <=8 ?  dataField[col-1].sections[row-i-1].visible : undefined}

      top_visibile_type1.push(n4)
     

    }
   

    for(let i =1; i <= 6;i++) {
      
    console.log()
      let n5 =  {row:row+i,col:col, visible: col >= 1 && col <= 11 && row+i >= 1 && row+i <=8 ?  dataField[col-1].sections[row+i-2].visible : undefined}
    
      botttom_visibile_type1.push(n5)
      console.log(botttom_visibile_type1)

    }
 


if (col % 2 !== 0) {   
for(let j = 0; j <= right_visible_top_type1.length; j++) {
  visible_ready1.push(right_visible_top_type1[j])
if (right_visible_top_type1[j].visible ===  undefined || right_visible_top_type1[j].visible ===  false  ) { 
       break;
       }
}
for(let j = 0; j <= right_visible_bottom_type1.length; j++) {
visible_ready1.push(right_visible_bottom_type1[j])
if (right_visible_bottom_type1[j].visible ===  undefined || right_visible_bottom_type1[j].visible ===  false  ) {
  
      break;
}
}
for(let j = 0; j <= left_visible_top_type1.length; j++) {
visible_ready1.push(left_visible_top_type1[j])
if (left_visible_top_type1[j].visible ===  undefined || left_visible_top_type1[j].visible ===  false  ) {
  
      break;
}
}
for(let j = 0; j <= left_visible_bottom_type1.length; j++) {
visible_ready1.push(left_visible_bottom_type1[j])
if (left_visible_bottom_type1[j].visible ===  undefined || left_visible_bottom_type1[j].visible ===  false  ) {
  
      break;
}
}
for(let j = 0; j <=top_visibile_type1.length; j++) {
visible_ready1.push(top_visibile_type1[j])
if (top_visibile_type1[j].visible ===  undefined || top_visibile_type1[j].visible ===  false  ) {
  
      break;
}
}
for(let j = 0; j <= botttom_visibile_type1.length; j++) {
visible_ready1.push(botttom_visibile_type1[j])
if (botttom_visibile_type1[j].visible ===  undefined || botttom_visibile_type1[j].visible ===  false  ) {
  
      break;
}
}

for(let j = 0; j <= right_visible_top_type1_is.length; j++) {
visible_ready1.push(right_visible_top_type1_is[j])
if (right_visible_top_type1_is[j].visible ===  undefined || right_visible_top_type1_is[j].visible ===  false  ) { 
   break;
   }
}
for(let j = 0; j <= right_visible_bottom_type1_is.length; j++) {
visible_ready1.push(right_visible_bottom_type1_is[j])
if (right_visible_bottom_type1_is[j].visible ===  undefined || right_visible_bottom_type1_is[j].visible ===  false  ) {

  break;
}
}
for(let j = 0; j <= left_visible_top_type1_is.length; j++) {
visible_ready1.push(left_visible_top_type1_is[j])
if (left_visible_top_type1_is[j].visible ===  undefined || left_visible_top_type1_is[j].visible ===  false  ) {

  break;
}
}
for(let j = 0; j <= left_visible_bottom_type1_is.length; j++) {
visible_ready1.push(left_visible_bottom_type1_is[j])
if (left_visible_bottom_type1_is[j].visible ===  undefined || left_visible_bottom_type1_is[j].visible ===  false  ) {

  break;
}
}

for(let j = 0; j <= right_visible_top_type1_is2.length; j++) {
visible_ready1.push(right_visible_top_type1_is2[j])
if (right_visible_top_type1_is2[j].visible ===  undefined || right_visible_top_type1_is2[j].visible ===  false  ) { 
   break;
   }
}
for(let j = 0; j <= right_visible_bottom_type1_is2.length; j++) {
visible_ready1.push(right_visible_bottom_type1_is2[j])
if (right_visible_bottom_type1_is2[j].visible ===  undefined || right_visible_bottom_type1_is2[j].visible ===  false  ) {

  break;
}
}
for(let j = 0; j <= left_visible_top_type1_is2.length; j++) {
visible_ready1.push(left_visible_top_type1_is2[j])
if (left_visible_top_type1_is2[j].visible ===  undefined || left_visible_top_type1_is2[j].visible ===  false  ) {

  break;
}
}
for(let j = 0; j <= left_visible_bottom_type1_is2.length; j++) {
visible_ready1.push(left_visible_bottom_type1_is2[j])
if (left_visible_bottom_type1_is2[j].visible ===  undefined || left_visible_bottom_type1_is2[j].visible ===  false  ) {

  break;
}
}

for(let j = 0; j <= right_visible_top_type1_is3.length; j++) {
visible_ready1.push(right_visible_top_type1_is3[j])
if (right_visible_top_type1_is3[j].visible ===  undefined || right_visible_top_type1_is3[j].visible ===  false  ) { 
   break;
   }
}
for(let j = 0; j <= right_visible_bottom_type1_is3.length; j++) {
visible_ready1.push(right_visible_bottom_type1_is3[j])
if (right_visible_bottom_type1_is3[j].visible ===  undefined || right_visible_bottom_type1_is3[j].visible ===  false  ) {

  break;
}
}
for(let j = 0; j <= left_visible_top_type1_is3.length; j++) {
visible_ready1.push(left_visible_top_type1_is3[j])
if (left_visible_top_type1_is3[j].visible ===  undefined || left_visible_top_type1_is3[j].visible ===  false  ) {

  break;
}
}
for(let j = 0; j <= left_visible_bottom_type1_is3.length; j++) {
visible_ready1.push(left_visible_bottom_type1_is3[j])
if (left_visible_bottom_type1_is3[j].visible ===  undefined || left_visible_bottom_type1_is3[j].visible ===  false  ) {

  break;
}
}

}  else {


for(let j = 0; j <= right_visible_top_type2.length; j++) {
visible_ready1.push(right_visible_top_type2[j])
if (right_visible_top_type2[j].visible ===  undefined || right_visible_top_type2[j].visible ===  false  ) { 
   break;
   }
}
for(let j = 0; j <= right_visible_bottom_type2.length; j++) {
visible_ready1.push(right_visible_bottom_type2[j])
if (right_visible_bottom_type2[j].visible ===  undefined || right_visible_bottom_type2[j].visible ===  false  ) {

  break;
}
}
for(let j = 0; j <= left_visible_top_type2.length; j++) {
visible_ready1.push(left_visible_top_type2[j])
if (left_visible_top_type2[j].visible ===  undefined || left_visible_top_type2[j].visible ===  false  ) {

  break;
}
}
for(let j = 0; j <= left_visible_bottom_type2.length; j++) {
visible_ready1.push(left_visible_bottom_type2[j])
if (left_visible_bottom_type2[j].visible ===  undefined || left_visible_bottom_type2[j].visible ===  false  ) {

  break;
}
}


for(let j = 0; j <= right_visible_top_type2_is.length; j++) {
visible_ready1.push(right_visible_top_type2_is[j])
if (right_visible_top_type2_is[j].visible ===  undefined || right_visible_top_type2_is[j].visible ===  false  ) { 
break;
}
}
for(let j = 0; j <= right_visible_bottom_type2_is.length; j++) {
visible_ready1.push(right_visible_bottom_type2_is[j])
if (right_visible_bottom_type2_is[j].visible ===  undefined || right_visible_bottom_type2_is[j].visible ===  false  ) {

break;
}
}
for(let j = 0; j <= left_visible_top_type2_is.length; j++) {
visible_ready1.push(left_visible_top_type2_is[j])
if (left_visible_top_type2_is[j].visible ===  undefined || left_visible_top_type2_is[j].visible ===  false  ) {

break;
}
}
for(let j = 0; j <= left_visible_bottom_type2_is.length; j++) {
visible_ready1.push(left_visible_bottom_type2_is[j])
if (left_visible_bottom_type2_is[j].visible ===  undefined || left_visible_bottom_type2_is[j].visible ===  false  ) {

break;
}
}

for(let j = 0; j <= right_visible_top_type2_is2.length; j++) {
visible_ready1.push(right_visible_top_type2_is2[j])
if (right_visible_top_type2_is2[j].visible ===  undefined || right_visible_top_type2_is2[j].visible ===  false  ) { 
break;
}
}
for(let j = 0; j <= right_visible_bottom_type2_is2.length; j++) {
visible_ready1.push(right_visible_bottom_type2_is2[j])
if (right_visible_bottom_type2_is2[j].visible ===  undefined || right_visible_bottom_type2_is2[j].visible ===  false  ) {

break;
}
}
for(let j = 0; j <= left_visible_top_type2_is2.length; j++) {
visible_ready1.push(left_visible_top_type2_is2[j])
if (left_visible_top_type2_is2[j].visible ===  undefined || left_visible_top_type2_is2[j].visible ===  false  ) {

break;
}
}
for(let j = 0; j <= left_visible_bottom_type2_is2.length; j++) {
visible_ready1.push(left_visible_bottom_type2_is2[j])
if (left_visible_bottom_type2_is2[j].visible ===  undefined || left_visible_bottom_type2_is2[j].visible ===  false  ) {

break;
}
}

for(let j = 0; j <= right_visible_top_type2_is3.length; j++) {
visible_ready1.push(right_visible_top_type2_is3[j])
if (right_visible_top_type2_is3[j].visible ===  undefined || right_visible_top_type2_is3[j].visible ===  false  ) { 
break;
}
}
for(let j = 0; j <= right_visible_bottom_type2_is3.length; j++) {
visible_ready1.push(right_visible_bottom_type2_is3[j])
    if (right_visible_bottom_type2_is3[j].visible ===  undefined || right_visible_bottom_type2_is3[j].visible ===  false  ) {

break;
}
}
for(let j = 0; j <= left_visible_top_type2_is3.length; j++) {
visible_ready1.push(left_visible_top_type2_is3[j])
 if (left_visible_top_type2_is3[j].visible ===  undefined || left_visible_top_type2_is3[j].visible ===  false  ) {

break;
}
}
for(let j = 0; j <= left_visible_bottom_type2_is3.length; j++) {
visible_ready1.push(left_visible_bottom_type2_is3[j])
if (left_visible_bottom_type2_is3[j].visible ===  undefined || left_visible_bottom_type2_is3[j].visible ===  false  ) {

break;
}
}
console.log(botttom_visibile_type1)
for(let j = 0; j <top_visibile_type1.length; j++) {
visible_ready1.push(top_visibile_type1[j])

if (top_visibile_type1[j].visible ===  undefined || top_visibile_type1[j].visible ===  false  ) {
 
      break;
}
}
for(let j = 0; j < botttom_visibile_type1.length; j++) {
  console.log(botttom_visibile_type1[j])
visible_ready1.push(botttom_visibile_type1[j])

if (botttom_visibile_type1[j].visible ===  undefined || botttom_visibile_type1[j].visible ===  false  ) {
  
      break;
}
}

}

    console.log(visible_ready1)
   if (col % 2 !== 0) {
    visible_ready.push(...right_visible_bottom_type1,...right_visible_bottom_type1_is,...right_visible_bottom_type1_is2,...right_visible_bottom_type1_is3,...left_visible_bottom_type1,...left_visible_bottom_type1_is,...left_visible_bottom_type1_is2,...left_visible_bottom_type1_is3,...left_visible_top_type1,...left_visible_top_type1_is,...left_visible_top_type1_is2,...left_visible_top_type1_is3,...top_visibile_type1,...botttom_visibile_type1,...right_visible_top_type1_is,...right_visible_top_type1,...right_visible_top_type1_is2,...right_visible_top_type1_is3)

   } else {
    visible_ready.push(...right_visible_bottom_type2,...right_visible_bottom_type2_is,...right_visible_bottom_type2_is2,...right_visible_bottom_type2_is3,...left_visible_bottom_type2,...left_visible_bottom_type2_is,...left_visible_bottom_type2_is2,...left_visible_bottom_type2_is3,...left_visible_top_type2,...left_visible_top_type2_is,...left_visible_top_type2_is2,...left_visible_top_type2_is3,...top_visibile_type1,...botttom_visibile_type1,...right_visible_top_type2_is,...right_visible_top_type2,...right_visible_top_type2_is2,...right_visible_top_type2_is3)
   }

   
 
     return visible_ready1





}