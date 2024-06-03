export interface ICell {
  row: number;
  col: number;
  kef: number
  id: number;
}

export interface IDataField {
  name: string;
  kef: number;
  type: number;
  sections: ICell[];
}
export interface ICoordinatesTank {
  top: number;
  left: number;
  col: number;
  row: number;
  type: number;
  id?: number
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

export interface ITank {
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
  with?:number;
  heght?:number;
  top1?:number;
  left?:number;
  trajectory?: any,
  visibible?: any,
  defend_sector?: any,
  defend_side?: any ,
  tank_attack?: any,
  tank_attack_number?: any,
  tank_attack_number1?: any,
  order?:any,
  order1?:any,
  tank_attack_bli?:any,
  tank_attack1?: any,
}
export interface iserver1 {
  name1: any[];
  name2: string[];
  
  
}