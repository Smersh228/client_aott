import { dataField, mockActions, mockTanks } from "../mockData/mockData";
import { ITank } from "../types/types";
import { range_nabrosok } from "./rangeLogic";

interface IFireFunc {
  num: number;
}


export const fireFunc = (
  activeTank: ITank,
  attackedTank: ITank,
  actionCommand: string,
  randomNumber1:number[],
) => {
  console.log(randomNumber1)
  const randomNumber = function (int:number) {
   let randoms = randomNumber1[int]
     

    return  randoms ;
  };
  
  if (
    actionCommand === mockActions.fire_hard &&
    activeTank.actions.fire.ammunition < 3
  ) {
    alert(
      "не хватает патронов для огня на подавление. используй обычную стрельбу"
    );
    return;
  } 
 
    let cellDefend
    const _findCell = dataField.filter((col) => {
  
        const trueCell = col.sections.find(cell => cell.col === attackedTank.coordinates.col && cell.row === attackedTank.coordinates.row)
        if (trueCell) {
            cellDefend = trueCell.baseDefend?.tanks
            //тут поиск по типу юнита (танк или парниша)
        }
    })
    console.log(cellDefend);
  let arrayRandom: number[] = [];
  let hits = 0;
  //@ts-ignore
  const intensityActiveTank = activeTank.actions.fire.intensity[attackedTank.type][activeTank.count-1];
  console.log(intensityActiveTank)
  let kefIntensity;
  if (activeTank.actions.move !== 3) {
    kefIntensity = intensityActiveTank / 1.5;
  } else if (actionCommand === mockActions.fire_hard) {
    kefIntensity = intensityActiveTank * 1.5;
  }  else if (actionCommand === mockActions.attack) {

    kefIntensity = intensityActiveTank
    }
   else {
    kefIntensity = intensityActiveTank;
  }
  console.log(activeTank.actions.fire.precision.length)
  for (let i = 0; i < kefIntensity; i++) {
    const newNumber = randomNumber(i);
    console.log(newNumber)
    const attack_tank = range_nabrosok(activeTank.coordinates.row,activeTank.coordinates.col,attackedTank.coordinates.row,attackedTank.coordinates.col)
    const range = attack_tank.find((tank) => { return attackedTank.coordinates.row === tank.row && attackedTank.coordinates.col === tank.col })
    let range1 = []

   console.log(attack_tank)
   let s =  actionCommand === "attack" ? activeTank.actions.fire.precision[0]  : activeTank.actions.fire.precision[range!.range-1]
   for(let i=0;i<s;i++) {

    range1.push(i+1)
   }
   console.log(range1)
  if ( actionCommand !== mockActions.attack ) {
    const truth = range1.find(
      (num: number) =>  num === newNumber
    
    );
     console.log(truth)
    if (truth) {
      hits = hits + 1;
    }
    arrayRandom.push(newNumber);
    console.log(newNumber)
  




  } else {
    const truth = activeTank.actions.fire.precision.find(
      (num: number,numb,number) =>   num === newNumber
    
    );
     console.log(truth)
    if (truth) {
      hits = hits + 1;
    }
    arrayRandom.push(newNumber);
    console.log(newNumber)
  
  }






 /*   if ( (activeTank.coordinates.type === 2  && activeTank.coordinates.row  - attackedTank.coordinates.row === -4 || activeTank.coordinates.row  - attackedTank.coordinates.row-1 === -4 || activeTank.coordinates.row  - attackedTank.coordinates.row-2 === -4 ||  activeTank.coordinates.col  - attackedTank.coordinates.col === -4  || activeTank.coordinates.col  - attackedTank.coordinates.col === 4 || activeTank.coordinates.row  - attackedTank.coordinates.row === 4 || activeTank.coordinates.row  - attackedTank.coordinates.row-1 === 4|| activeTank.coordinates.row  - attackedTank.coordinates.row-2 === 4 )  ||  (activeTank.coordinates.type === 1  && activeTank.coordinates.row  - attackedTank.coordinates.row === -4 || activeTank.coordinates.row  - attackedTank.coordinates.row-1 === -4 ||   activeTank.coordinates.col  - attackedTank.coordinates.col === -4  || activeTank.coordinates.col  - attackedTank.coordinates.col === 4 || activeTank.coordinates.row  - attackedTank.coordinates.row === 4 || activeTank.coordinates.row  - attackedTank.coordinates.row-1 === 4 )  ) {
      const truth = activeTank.actions.fire.precision.find(
        (num: number) => num === newNumber
      
      );
     
      if (truth) {
        hits = hits + 1;
      }
      arrayRandom.push(newNumber);
      console.log(newNumber)
    }
    else if( (activeTank.coordinates.type === 2  && activeTank.coordinates.row  - attackedTank.coordinates.row === -3 || activeTank.coordinates.row  - attackedTank.coordinates.row-1 === -3 || activeTank.coordinates.col  - attackedTank.coordinates.col === -3  || activeTank.coordinates.col  - attackedTank.coordinates.col === 3 || activeTank.coordinates.row  - attackedTank.coordinates.row === 3 || activeTank.coordinates.row  - attackedTank.coordinates.row-1 === 3 ) || (  activeTank.coordinates.type === 1  && activeTank.coordinates.row  - attackedTank.coordinates.row === -3 || activeTank.coordinates.row  - attackedTank.coordinates.row-1 === -3 || activeTank.coordinates.col  - attackedTank.coordinates.col === -3  || activeTank.coordinates.col  - attackedTank.coordinates.col === 3 || activeTank.coordinates.row  - attackedTank.coordinates.row === 3 || activeTank.coordinates.row  - attackedTank.coordinates.row-1 === 3)  ) {
      const truth = activeTank.actions.fire.precision.find(
        (num: number) =>   (num-2 && num !== 0 ) === newNumber
      
      );
    if (truth) {
      hits = hits + 1;
    }
    arrayRandom.push(newNumber);
    console.log(newNumber)
  } else if ( ( activeTank.coordinates.type === 2 &&  activeTank.coordinates.row  - attackedTank.coordinates.row === -2 || activeTank.coordinates.row  - attackedTank.coordinates.row-1 === -2 || activeTank.coordinates.col  - attackedTank.coordinates.col === -2  || activeTank.coordinates.col  - attackedTank.coordinates.col === 2 || activeTank.coordinates.row  - attackedTank.coordinates.row === 2 || activeTank.coordinates.row  - attackedTank.coordinates.row-1 === 2 ) || ( activeTank.coordinates.type === 1 &&  activeTank.coordinates.row  - attackedTank.coordinates.row === -2 ||  activeTank.coordinates.col  - attackedTank.coordinates.col === -2  || activeTank.coordinates.col  - attackedTank.coordinates.col === 2 || activeTank.coordinates.row  - attackedTank.coordinates.row === 2  ) ) {
    const truth = activeTank.actions.fire.precision.find(
      (num: number) =>    activeTank.actions.fire.precision.length === 3 ? (num-1 && num !== 0 ) === newNumber : num  === newNumber
    
    );
      
    
  
     
    if (truth) {
      hits = hits + 1;
    }
    arrayRandom.push(newNumber);
    console.log(truth)

    } else if (activeTank.coordinates.row  - attackedTank.coordinates.row === -1 || activeTank.coordinates.col  - attackedTank.coordinates.col === -1  || activeTank.coordinates.col  - attackedTank.coordinates.col === 1 || activeTank.coordinates.row  - attackedTank.coordinates.row === 1 ){
      const truth = activeTank.actions.fire.precision.find(
        (num: number) =>    activeTank.actions.fire.precision.length === 3 ? num === newNumber :  num === newNumber
      
      );
      
      if (truth) {
        hits = hits + 1;
      }
      arrayRandom.push(newNumber);
      console.log(newNumber)
    
    } else if (  actionCommand === mockActions.attack ){
      const truth = activeTank.actions.fire.precision.find(
        (num: number) =>    num === newNumber
      
      );
      
      if (truth) {
        hits = hits + 1;
      }
      arrayRandom.push(newNumber);
      console.log(newNumber)
    
    }*/


  } 
  

  let _newDataForActiveTank = { ...activeTank };
  let _newDataForAttackedTank = { ...attackedTank };
  _newDataForActiveTank.activeTank = false
  _newDataForActiveTank.actions.fire.ammunition =
    actionCommand === mockActions.fire_hard
      ? activeTank.actions.fire.ammunition - 3
      : activeTank.actions.fire.ammunition - 1;
  ;

console.log(hits);
  console.log(intensityActiveTank)
    if (cellDefend) {
        hits = hits - cellDefend
    }
  console.log(hits);
  for (let i = 0; i < hits; i++) {
    if (_newDataForAttackedTank.actions.defend !== 0 || _newDataForAttackedTank.actions.defend < 0) {
      _newDataForAttackedTank.actions.defend = attackedTank.actions.defend - 1;
    }  else {
      _newDataForAttackedTank.count = _newDataForAttackedTank.count - 1
    }
    console.log(mockTanks)
  }
  return [_newDataForActiveTank,_newDataForAttackedTank];
};

//на подавление 1.5(интенсивность)(3 снаряда) на хооду(0.5)(после хода)

// deff +1у каждого но не больше изначального
