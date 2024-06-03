import { ICanGo } from "../gameComponents/Field/Field"
import { ICell, ICoordinatesTank, IDataField } from "../types/types"

interface IChangeCoordinates {
    cell: ICell
    col: IDataField
   
    /*kef: Idatafield*/
}



interface IChangeCoordinates1 {
    cell1: ICoordinatesTank
    col: IDataField
    
    /*kef: Idatafield*/
}

export const respawnCoordinates = (row: number, col: number, id:number) => {
    const type = col % 2 ? 1 : 2
    let line = type === 1 ? 1 + (12.5 * (row - 2)) : 6.5 + (13 * (row - 1))
    let column = 1 + (8 * (col - 1))
    const newCoordinates = { top: line, left: column, col: col, row: row, type: type,id:id }
    
    return newCoordinates
}

export const changeCoordinates = ({ cell, col }: IChangeCoordinates) => {
    let row = col.type === 1 ? 1 + (13 * (cell.row - 1)) : 6.5 + (13 * (cell.row - 1))
    let column = 1 + (8 * (cell.col - 1))
    const newCoordinates = { top: row, left: column, col: cell.col, row: cell.row, type: col.type}
    
    return newCoordinates
    
}


    
