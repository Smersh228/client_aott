import pz from "../img/unit_pz2.png";
import t26_USSR from "../img/unit_t-26k.png";
import t34 from "../img/t34.png";
import pz3g from "../img/pz3gg.png";
import cellVeryHard from "../img/les.png"
import cellLight from "../img/field2.png"
import cellMiddle from "../img/field3.png"
import cellHard from "../img/fieldBust.png"
import cellveryMiddle from "../img/test1.png"
// import test from "../img/les.png"

export const sections = {

  hard:{
    img:cellHard, kef: 1.25,  baseDefend: { tanks:0,  humans: 1 }, visible: false
  
  },
  veryHard:{
      img: cellVeryHard, kef: 3, baseDefend: {tanks:1,humans:2}, visible: false
  },
  light:{
    img:cellLight, kef:0.75, visible: true
  },
  middle:{
    img:cellMiddle, kef: 1, visible: true
  },
  veryMiddle:{
      img: cellveryMiddle, kef: 2, baseDefend: { tanks: 1, humans: 1 },visible: false
  },
}




export const dataField = [
  {
    name: "column1",
        sections: [
       { id: 0, col: 1, row: 1, kef: sections.veryMiddle.kef, img: sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible },
      { id: 1, col: 1, row: 2,  kef: sections.middle.kef, img:sections.middle.img , visible: sections.middle.visible },
      { id: 2, col: 1, row: 3,  kef: sections.middle.kef, img:sections.middle.img, visible: sections.middle.visible },
      { id: 3, col: 1, row: 4, kef: sections.hard.kef, img:sections.hard.img, visible: sections.hard.visible},
      { id: 4, col: 1, row: 5, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible },
      { id: 5, col: 1, row: 6, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible},
      { id: 6, col: 1, row: 7, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible },
      { id: 7, col: 1, row: 8, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible},


    ],
    kef: 1,
    type: 1,
  },
  {
    name: "column2",
    sections: [
      { id: 8, col: 2, row: 1,  kef:  sections.middle.kef, img:sections.middle.img, visible: sections.middle.visible },
      { id: 9, col: 2, row: 2, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img,baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible },
      { id: 10, col: 2, row: 3,kef: sections.middle.kef, img:sections.middle.img, visible: sections.middle.visible},
      { id: 11, col: 2, row: 4, kef: sections.hard.kef, img:sections.hard.img,baseDefend: sections.hard.baseDefend, visible: sections.hard.visible },
      { id: 12, col: 2, row: 5, kef: sections.middle.kef, img:sections.middle.img, visible: sections.middle.visible },
      { id: 13, col: 2, row: 6, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.hard.visible },
      { id: 14, col: 2, row: 7, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible },
      { id: 15, col: 2, row: 8, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible },




    ],
    kef: 2,
    type: 2,
  },
  {
    name: "column3",
    sections: [
      { id: 16, col: 3, row: 1, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible},
      { id: 17, col: 3, row: 2,  kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible },
      { id: 18, col: 3, row: 3, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible},
      { id: 19, col: 3, row: 4,  kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible},
      { id: 20, col: 3, row: 5,  kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryHard.visible},
      { id: 21, col: 3, row: 6,  kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible},
      { id: 22, col: 3, row: 7,  kef: sections.middle.kef, img:sections.middle.img, visible: sections.middle.visible },
      { id: 23, col: 3, row: 8,  kef: sections.middle.kef, img:sections.middle.img, visible: sections.middle.visible },

    ],
    kef: 3,
    type: 1,
  },
  {
    name: "column4",
    sections: [
      { id: 24, col: 4, row: 1,kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible},
      { id: 25, col: 4, row: 2,  kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible },
      { id: 26, col: 4, row: 3, kef: sections.middle.kef, img:sections.middle.img, visible: sections.middle.visible},
      { id: 27, col: 4, row: 4, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible},
      { id: 28, col: 4, row: 5, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible},
      { id: 29, col: 4, row: 6, kef: sections.middle.kef, img:sections.middle.img, visible: sections.middle.visible},
      { id: 30, col: 4, row: 7, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible },
      { id: 31, col: 4, row: 8, kef: sections.middle.kef, img:sections.middle.img, visible: sections.middle.visible },

    ],
    kef: 4,
    type: 2,
  },
  {
    name: "column5",
    sections: [
      { id: 32, col: 5, row: 1,  kef: sections.veryMiddle.kef, img:sections.veryMiddle.img , baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible},
      { id: 33, col: 5, row: 2, kef: sections.veryHard.kef, img:sections.veryHard.img,  baseDefend: sections.veryHard.baseDefend, visible: sections.hard.visible},
      { id: 34, col: 5, row: 3, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible },
      { id: 35, col: 5, row: 4,  kef: sections.veryHard.kef, img:sections.veryHard.img,  baseDefend: sections.veryHard.baseDefend, visible: sections.hard.visible},
      { id: 36, col: 5, row: 5,  kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, visible: sections.hard.visible},
      { id: 37, col: 5, row: 6, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible },
      { id: 38, col: 5, row: 7,  kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.hard.visible },
      { id: 39, col: 5, row: 8, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible},

    ],
    kef: 5,
    type: 1,
  },
  {
    name: "column6",
    sections: [
      { id: 40, col: 6, row: 1,kef: sections.light.kef, img:sections.light.img, visible: sections.light.visible },
      { id: 41, col: 6, row: 2, kef: sections.light.kef, img:sections.light.img, visible: sections.light.visible },
      { id: 42, col: 6, row: 3,kef: sections.light.kef, img:sections.light.img, visible: sections.light.visible },
      { id: 43, col: 6, row: 4, kef: sections.light.kef, img:sections.light.img, visible: sections.light.visible },
      { id: 44, col: 6, row: 5, kef: sections.light.kef, img:sections.light.img, visible: sections.middle.visible},
      { id: 45, col: 6, row: 6, kef: sections.light.kef, img:sections.light.img, visible: sections.light.visible },
      { id: 46, col: 6, row: 7, kef: sections.light.kef, img:sections.light.img, visible: sections.light.visible },
      { id: 47, col: 6, row: 8, kef: sections.light.kef, img:sections.light.img, visible: sections.light.visible },

    ],
    kef: 6,
    type: 2,
  },
  {
    name: "column7",
    sections: [
      { id: 48, col: 7, row: 1, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible },
      { id: 49, col: 7, row: 2, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible },
      { id: 50, col: 7, row: 3, kef: sections.hard.kef, img:sections.hard.img , baseDefend: sections.hard.baseDefend, visible: sections.hard.visible},
      { id: 51, col: 7, row: 4, kef: sections.middle.kef, img:sections.middle.img, visible: sections.middle.visible},
      { id: 52, col: 7, row: 5, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible },
      { id: 53, col: 7, row: 6,kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.hard.visible},
      { id: 54, col: 7, row: 7, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.hard.visible },
      { id: 55, col: 7, row: 8, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible },

    ],
    kef: 7,
    type: 1,
  },
  {
    name: "column8",
    sections: [
      { id: 56, col: 8, row: 1,  kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible },
      { id: 57, col: 8, row: 2, kef: sections.veryHard.kef, img:sections.veryHard.img, baseDefend: sections.veryHard.baseDefend, visible: sections.veryHard.visible },
      { id: 58, col: 8, row: 3, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.hard.visible },
      { id: 59, col: 8, row: 4, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.hard.visible},
      { id: 60, col: 8, row: 5,  kef: sections.hard.kef, img:sections.hard.img , baseDefend: sections.hard.baseDefend, visible: sections.hard.visible},
      { id: 61, col: 8, row: 6,  kef: sections.hard.kef, img:sections.hard.img , baseDefend: sections.hard.baseDefend, visible: sections.hard.visible},
      { id: 62, col: 8, row: 7,  kef: sections.hard.kef, img:sections.hard.img , baseDefend: sections.hard.baseDefend, visible: sections.hard.visible},
      { id: 63, col: 8, row: 8, kef: sections.middle.kef, img:sections.middle.img, visible: sections.middle.visible  },

    ],
    kef: 8,
    type: 2,
  },
  {
    name: "column9",
    sections: [
      { id:  64, col: 9, row: 1, kef: sections.middle.kef, img:sections.middle.img, visible: sections.middle.visible  },
      { id: 65, col: 9, row: 2, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible },
      { id: 66, col: 9, row: 3, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible},
      { id: 67, col: 9, row: 4, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible },
      { id: 68, col: 9, row: 5, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible },
      { id: 69, col: 9, row: 6, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible },
      { id: 70, col: 9, row: 7, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible },
      { id: 71, col: 9, row: 8, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible },

    ],
    kef: 9,
    type: 1,
  },
  {
  name: "column10",
  sections: [
    { id: 72, col: 10, row: 1, kef: sections.middle.kef, img:sections.middle.img, visible: sections.middle.visible  },
    { id: 73, col: 10, row: 2, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible },
    { id: 74, col: 10, row: 3, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible},
    { id: 75, col: 10, row: 4, kef: sections.hard.kef, img:sections.hard.img , baseDefend: sections.hard.baseDefend, visible: sections.hard.visible},
    { id: 76, col: 10, row: 5, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img , baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible},
    { id: 77, col: 10, row: 6, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible },
    { id: 78, col: 10, row: 7, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible },
    { id: 79, col: 10, row: 8, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible },

  ],
  kef: 10,
  type: 2,
},

{
  name: "column11",
  sections: [
    { id: 80, col: 11, row: 1, kef: sections.middle.kef, img:sections.middle.img, visible: sections.middle.visible  },
    { id: 81, col: 11, row: 2, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible   },
    { id: 82, col: 11, row: 3, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible  },
    { id: 83, col: 11, row: 4, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible   },
    { id: 84, col: 11, row: 5, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible   },
    { id: 85, col: 11, row: 6, kef: sections.hard.kef, img:sections.hard.img , baseDefend: sections.hard.baseDefend, visible: sections.hard.visible  },
    { id: 86, col: 11, row: 7, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend, visible: sections.hard.visible   },
    { id: 87, col: 11, row: 8, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend, visible: sections.veryMiddle.visible   },

  ],
  kef: 11,
  type: 1,
},


];

export const mockActions = {
  move: "move",
  fire: "fire",
  fire_hard: "fire_hard",
  defend: "defend",
  fire_move: "fire_move",
  ambush: "ambush",
  attack: "attack"
};

export const tanks = [
  {
    id: 1,
    name: "pz2-c",
    img: pz,
    type: "light",
    count: 3,
    actions: {
      move: 3,
      defend: 2,
      fire: {
        range: 3,
        ammunition: 10,
        precision: [3, 2, 1],
        intensity: { light: [5, 6, 7], middle: [4, 3, 2], humans: [9, 10, 11] },
      },
    },
  },
  {
    id: 2,
    name: "pz3-g",
    img: pz3g,
    type: "middle",
    count: 3,
    actions: {
      move: 3,
      defend: 2,
      fire: {
        range: 4,
        ammunition: 10,
        precision: [2, 2, 1, 1],
        intensity: { light: [7, 8, 9], middle: [4, 5, 6], humans: [6, 8, 10] },
      },
    },
  },
  {
    id: 3,
    name: "t26",
    img: t26_USSR,
    type: "light",
    count: 3,
    actions: {
      move: 3,
      defend: 1,
      fire: {
        range: 4,
        ammunition: 10,
        precision: [2, 2, 1, 1],
        intensity: { light: [5, 6, 7], middle: [3, 4, 5], humans: [5, 7, 9] },
      },
    },
  },
  {
    id: 4,
    name: "t34",
    img: t34,
    type: "middle",
    count: 3,
    actions: {
      move: 3,
      defend: 2,
      fire: {
        range: 4,
        ammunition: 10,
        precision: [2, 2, 1, 1],
        intensity: {
          light: [9, 10, 11],
          middle: [8, 9, 10],
          humans: [7, 9, 11],
        },
      },
    },
  },
];

export const mockTanks = [
 {
    id: 1,
    name: tanks[1].name,
    img: tanks[1].img,
    team: 2,
    activeTank: true, //для дисэйбла огня
    count: 3,
    type: tanks[1].type,
    prevDeffStep: 0,
    afterStepData: { move: 3, defend: 2 },
    coordinates: {
      row: 1,
      col: 1,
      top: 0,
      left: 0,
      type: 2,
      id:8,
    }, 
    actions: {
      range: 4,
      move: 3,
      defend: 2,
      fire: {
    
        ammunition: 10,
        precision: [2, 2, 1, 1],
        intensity: { light: [7, 8, 9], middle: [4, 5, 6], humans: [6, 8, 10] },
      },
    },
    trajectory: [],
    visibible: [],
    defend_sector: [],
    defend_side: {} ,
    tank_attack: "none",
    order: "none",
    order1: "none",
    tank_attack1: "none",
    tank_attack_number:0,
  },
  { 
    id: 2,   // norm
    name: tanks[1].name,
    img: tanks[1].img,
    team: 2,
    activeTank: true,
    count: 3,
    type: tanks[1].type,
    prevDeffStep: 0,
    afterStepData: { move: 3, defend: 2 },
    coordinates: {
      row: 1,
      col: 2,
      top: 0,
      left: 0,
      type: 1,
      id: 0,
    },
    actions: {
      range: 4,
      move: 3,
      defend: 2,
      fire: {
        
        ammunition: 10,
        precision: [2, 2, 1, 1],
        intensity: { light: [7, 8, 9], middle: [4, 5, 6], humans: [6, 8, 10] },
      },
    },
    trajectory: [],
    visibible: [],
    defend_sector: [],
    defend_side: {} ,
    tank_attack: "none",
    order: "none",
    order1: "none",
    tank_attack1: "none",
    tank_attack_number:0,
  },  {
    id: 3,
    name: tanks[0].name,
    img: tanks[0].img,
    team: 2,
    activeTank: true,
    count: 3,
    type: tanks[0].type,
    prevDeffStep: 0,
    afterStepData: { move: 3, defend: 2 },
    coordinates: {
      row: 7,
      col: 2,
      top: 0,
      left: 0,
      type: 2,
      id: 0,
    },
    actions: {
      range: 3,
      move: 3,
      defend: 2,
      fire: {
        ammunition: 10,
        precision: [3, 2, 1],
        intensity: { light: [5, 6, 7], middle: [2, 3, 4], humans: [9, 10, 11] },
      },
    },
    trajectory: [],
    visibible: [],
    defend_sector: [],
    defend_side: {} ,
    tank_attack: "none",
    order: "none",
    order1: "none",
    tank_attack1: "none",
    tank_attack_number:0,
  },
   { 
    id: 4,
    name: tanks[3].name,
    img: tanks[3].img,
    team: 1,
    activeTank: true,
    count: tanks[3].count,
    type: tanks[3].type,
    prevDeffStep: 0,
    afterStepData: { move: 3, defend: 3 },
    coordinates: {
      row: 1,
      col: 11,
      top: 0,
      left: 0,
      type: 1,
    },
    actions: {
      range: 4,
      move: 3,
      defend: 3,
      fire: {
        ammunition: 10,
        precision: [2, 2, 1, 1],
        intensity: { light: [9, 10, 11], middle: [8, 9, 10], humans: [7, 9, 11] },
      },
    },
    trajectory: [],
    visibible: [],
    defend_sector: [],
    defend_side: {} ,
    tank_attack: "none",
    order: "none",
    order1: "none",
    tank_attack1: "none",
    tank_attack_number:0,
  },
   {
   id: 5,
    name: tanks[2].name,
    img: tanks[2].img,
    team: 1,
    activeTank: true,
    count: tanks[2].count,
    type: tanks[2].type,
    prevDeffStep: 0,
    afterStepData: { move: 3, defend: 1 },
    coordinates: {
      row: 5,
      col: 4,
      top: 0,
      left: 0,
      type: 2,
    },
    actions: {
      range: 4,
      move: 3,
      defend: 1,
      fire: {
        ammunition: 10,
        precision:[2, 2, 1, 1],
        intensity:  { light: [5, 6, 7], middle: [3, 4, 5], humans: [5, 7, 9] },
      },
    },
    trajectory: [],
    visibible: [],
    defend_sector: [],
    defend_side: {} ,
    tank_attack: "none",
    order: "none",

    tank_attack_number:0,
 }, 
  {
    id: 6,
    name: tanks[2].name,
    img: tanks[2].img,
    team: 1,
    activeTank: true,
    count: tanks[2].count,
    type: tanks[2].type,
    prevDeffStep: 0,
    afterStepData: { move: 3, defend: 1 },
    coordinates: {
      row: 5,
      col: 4,
      top: 0,
      left: 0,
      type: 2,
    },
    actions: {
      range: 4,
      move: 3,
      defend: 1,
      fire: {
        ammunition: 10,
        precision:[2, 2, 1, 1],
        intensity:  { light: [5, 6, 7], middle: [3, 4, 5], humans: [5, 7, 9] },
      },
    },
    trajectory: [],
    visibible: [],
    defend_sector: [],
    defend_side: {} ,
    tank_attack: "none",
    order: "none",

    tank_attack_number:0,
  },
  {
    id: 7,
    name: tanks[0].name,
    img: tanks[0].img,
    team: 2,
    activeTank: true,
    count: 3,
    type: tanks[0].type,
    prevDeffStep: 0,
    afterStepData: { move: 3, defend: 2 },
    coordinates: {
      row: 7,
      col: 2,
      top: 0,
      left: 0,
      type: 2,
      id:3,
    },
    actions: {
      range: 3,
      move: 3,
      defend: 2,
      fire: {
        ammunition: 10,
        precision: [3, 2, 1],
        intensity: { light: [5, 6, 7], middle: [2, 3, 4], humans: [9, 10, 11] },
      },
    },
    trajectory: [],
    visibible: [],
    defend_sector: [],
    defend_side: {} ,
    tank_attack: "none",
    order: "none",
    order1: "none",
    tank_attack1: "none",
    tank_attack_number:0,
  },
  { 
    id: 8,
    name: tanks[2].name,
    img: tanks[2].img,
    team: 1,
    activeTank: true,
    count: tanks[2].count,
    type: tanks[2].type,
    prevDeffStep: 0,
    afterStepData: { move: 3, defend: 1 },
    coordinates: {
      row: 5,
      col: 11,
      top: 0,
      left: 0,
      type: 2,
    },
    actions: {
      range: 4,
      move: 3,
      defend: 1,
      fire: {
        ammunition: 10,
        precision: [2, 2, 1, 1],
        intensity: { light: [5, 6, 7], middle: [3, 4, 5], humans: [5, 7, 9] },
      },
    },
    trajectory: [],
    visibible: [],
    defend_sector: [],
    defend_side: {} ,
    tank_attack: "none",
    order: "none",
    order1: "none",
    tank_attack1: "none",
    tank_attack_number:0,
  },
  {
    id: 9,
    name: tanks[2].name,
    img: tanks[2].img,
    team: 1,
    activeTank: true,
    count: tanks[2].count,
    type: tanks[2].type,
    prevDeffStep: 0,
    afterStepData: { move: 3, defend: 1 },
    coordinates: {
      row: 8,
      col: 11,
      top: 0,
      left: 0,
      type: 2,
    },
    actions: {
      range: 4,
      move: 3,
      defend: 1,
      fire: {
        ammunition: 10,
        precision:[2, 2, 1, 1],
        intensity: { light: [5, 6, 7], middle: [3, 4, 5], humans: [5, 7, 9] },
      },
    },
    trajectory: [],
    visibible: [],
    defend_sector: [],
    defend_side: {} ,
    tank_attack: "none",
    order: "none",
    order1: "none",
    tank_attack1: "none",
    tank_attack_number:0,
  },  
];

// export const respawnTanksAfterMove = [

// ]
