export const range_nabrosok = (row:number, col:number, row_attack:number,col_attack: number) => {
    let h3  = []
  
  if (col === col_attack) {
    let range_top: number
    let range_bottom: number
    if (row_attack > row) {
  
      range_top = row_attack - row
    
     
     return [{row:row_attack,col:col_attack,range:range_top}]
    } else {
  
       range_bottom = Math.abs(row) - row_attack
  
     
     return [{row:row_attack,col:col_attack,range:range_bottom}]
    }
  
  
  
  } else {
  let hhh = []
  let ggg = []
  let hhh1 = []
  let ggg1 = []
  for(let i =0; i < 6;i++) {
  
  let a = {row: col % 2 !==  0 ? row-i-1 :row-i,col:col+i+1+i,range:i+i} 
  let c = {row:row-i-1,col:col+i+2+i,range:i+1+i} 
  
  let b = {row:  col % 2 !==  0 ? row-i-1 :row-i,col:col-i-1-i,range:i+i} 
  let d = {row:row-i-1,col:col-i-2-i,range:i+1+i}
  
  let j = {row: col % 2 !==  0 ? row+i :row+i+1,col:col+i+1+i,range:i+i} 
  let l = {row:row+i+1,col:col+i+2+i,range:i+1+i}
  
  let p = {row:col % 2 !==  0 ? row+i :row+i+1,col:col-i-1-i,range:i+i} 
  let o = {row:row+i+1,col:col-i-2-i,range:i+1+i}
  
  
  console.log(a,b,c,d) 
  hhh.push(a,c)
  ggg.push(b,d)
  
  hhh1.push(j,l)
  ggg1.push(p,o)
  
  
  hhh.splice(6)
  ggg.splice(6)
  hhh1.splice(6)
  ggg1.splice(6)
  console.log(hhh,ggg,hhh1,ggg1)
  }
  
  const sector_range_right_top =(row1:number, col1:number,range1:number) => {
  let hhh1 = []
  let jjj1 = []
  
  for(let j=0; j<range1;j++) {
    let h1 = {row: col1 % 2 === 0 ?  row1-j : row1-j-1 , col:col1-j-1-j, range: range1+1}
    let h3 = {row: col1 % 2 === 0 ?  row1-j-1 : row1-j-1 , col:col1-j-2-j, range: range1+1}
    let h2 = {row:  row1+j+1 ,col:col1, range: range1+1}
  
  jjj1.push(h2)
  hhh1.push(h1,h3)
  hhh1.splice(range1)
  
  
  }
  
  hhh1.push(...jjj1)
  console.log(hhh1)
  return hhh1
  }
  const sector_range_left_top =(row1:number, col1:number,range1:number) => {
    let hhh2 = []
    let jjj2 = []
    
    for(let j=0; j<range1;j++) {
      let h1 = {row: col1 % 2 === 0 ?  row1-j : row1-j-1 , col:col1+j+1+j, range: range1+1}
      let h3 = {row: col1 % 2 === 0 ?  row1-j-1 : row1-j-1 , col:col1+j+2+j, range: range1+1}
      let h2 = {row:  row1+j+1 ,col:col1, range: range1+1}
    
    jjj2.push(h2)
    hhh2.push(h1,h3)
    hhh2.splice(range1)
    
    
    }
    
    hhh2.push(...jjj2)
    console.log(hhh2)
    return hhh2
  
  
  }
  
  const sector_range_left_bottom =(row1:number, col1:number,range1:number) => {
    let hhh3 = []
    let jjj3 = []
    
    for(let j=0; j<range1;j++) {
      let h1 = {row: col1 % 2 === 0 ?  row1+j+1 : row1+j , col:col1+j+1+j, range: range1+1}
      let h3 = {row: col1 % 2 === 0 ?  row1+j+1 : row1+j+1 , col:col1+j+2+j, range: range1+1}
      let h2 = {row:  row1-j-1 ,col:col1, range: range1+1}
    
    jjj3.push(h2)
    hhh3.push(h1,h3)
    hhh3.splice(range1)
    
    
    }
    
    hhh3.push(...jjj3)
    console.log(hhh3)
    return hhh3
  
  
  }
  
  const sector_range_right_bottom =(row1:number, col1:number,range1:number) => {
    let hhh4 = []
    let jjj4 = []
    
    for(let j=0; j<range1;j++) {
      let h1 = {row: col1 % 2 === 0 ?  row1+j+1 : row1+j , col:col1-j-1-j, range: range1+1}
      let h3 = {row: col1 % 2 === 0 ?  row1+j+1 : row1+j+1 , col:col1-j-2-j, range: range1+1}
      let h2 = {row:  row1-j-1 ,col:col1, range: range1+1}
    
    jjj4.push(h2)
    hhh4.push(h1,h3)
    hhh4.splice(range1)
    
    
    }
    
    hhh4.push(...jjj4)
    console.log(hhh4)
    return hhh4
  
  
  }
  
  
  
  
  let g = hhh.map((cell) => { return sector_range_right_top(cell.row,cell.col,cell.range)
  })
  let h1 = ggg.map((cell) => { return sector_range_left_top(cell.row,cell.col,cell.range)
  })
  let h12 = ggg1.map((cell) => { return sector_range_left_bottom(cell.row,cell.col,cell.range)
  })
  let h16 =hhh1.map((cell) => { return sector_range_right_bottom(cell.row,cell.col,cell.range)
  })
  
   h3 = [...g.flat(),...h1.flat(),...h12.flat(),...h16.flat()]
  
  
  let s = hhh.map((cell) =>   { return {row: cell.row, col: cell.col, range:cell.range+1 }})
  let h = ggg.map((cell) => { return {row: cell.row, col: cell.col, range:cell.range+1 } })
  let p = hhh1.map((cell) =>   { return {row: cell.row, col: cell.col, range:cell.range+1 }})
  let j = ggg1.map((cell) => { return {row: cell.row, col: cell.col, range:cell.range+1 } })
  console.log(p,j)
  h3.push(...s,...h,...p,...j)
  
  }
  
  
  
  
  
  
  
  return h3
  }