import { useState, FC } from "react";
import style from "./actionMenu.module.css";
import commandGoImg from "../../img/taskGo.png";
import fire from "../../img/fireNew1.png";
import fire_move from "../../img/fireMove.png";
import def from "../../img/defense.png";
import attack from "../../img/attack.png";
import hardF from "../../img/fire_fast.png";
interface IActionMenu {
  visible: string;
  setAction?: any;
  setActiveTank: any;
}
export const ActionMenu: FC<IActionMenu> = ({
  visible = "none",
  setAction,
  setActiveTank,
}) => {
  const [activeMenu, setActiveMenu] = useState(false);
  // setAction('')
  return (
    <div style={{ display: visible }} className={style.menu}>
      <div onClick={() => setAction("move")} className={style.menu_item}>
        <img src={commandGoImg} alt="go" />
      </div>
      <div onClick={() => setAction("fire")} className={style.menu_item}>
        <img src={fire} alt="fire" />
      </div>
      <div onClick={() => setAction("defend")} className={style.menu_item}>
        <img src={def} alt="deff" />
      </div>
      <div onClick={() => setAction("fire_hard")} className={style.menu_item}>
        <img src={hardF} alt="hard_fire" />
      </div>
      <div onClick={() => setAction("attack")} className={style.menu_item}>
        <img src={attack} alt="att" />
      </div>
      <div onClick={() => setAction("fire_move")} className={style.menu_item}>
        <img src={fire_move} alt="att" />
      </div>
      {/* <div onClick={() => setActiveTank(0)} className={style.menu_item}>
        Выйти
      </div> */}
    </div>
  );
};
