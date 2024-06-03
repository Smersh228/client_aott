import { Link, useLocation, useParams } from "react-router-dom";

import style from "./navBar.module.css"
import { FC, useEffect, useState } from "react";

interface INavbar {
  setAction?: any;


}


export const NavBar: FC<INavbar> = ({setAction  }) => {
  interface ilobbys {
    id:string
    cartLobby:string
    method:string
    name:string
    cartLobby1:string
  
  
  
  }
  
  const [msg1,setMsg] = useState<any>()
  const [obnov,setObnov] = useState<boolean>()
  const location = useLocation()
  console.log(location)
  const [bool,setBool] = useState<boolean>(true)
  const locs = useParams()
 const [sss,setSSS] = useState<boolean>(false)
 const [sss5,setSSS5] = useState<boolean>(true)
 const [sss1,setSSS1] = useState<ilobbys[]>()
 let msg: ilobbys[]
 let msg12: ilobbys[]
 const sueta1 = () => {
  
 
  setSSS5(sss5 === true ? false : true)




}

  const sueta12 = () => {
   
    setSSS5(sss5 === false ? true : false)
    setTimeout(sueta1,1000)
      setSSS(sss === false ? true : false)
      let msg1: ilobbys
      const soket = new WebSocket('ws://localhost:5000/')
      soket.onopen = () => {
        
          soket.send(JSON.stringify({
             method:'new',
             id:locs.id
  
          }))
      
     
  
    
      
       soket.onmessage =  (event) => {
       
     
          msg = JSON.parse(event.data)
        
           msg1 = event.data
        
        console.log(msg)
        }
        
      }
     
      return msg
      }



console.log(sss5)

  
  return (
  <div className={style.navBar}>
  <Link to="/sueta111/main">
  { location.pathname === '/sueta111/server' || location.pathname === '/sueta111/infopage' || location.pathname === '/sueta111/lobby' ? <div style={{}} className={style.navBar_item}>Назад в меню</div> : location.pathname !== '/sueta111/main' ? <div className={style.navBar_item}>Главное меню</div> : '' }
  
  </Link>
  <Link to="/sueta111/info">
  { location.pathname === '/sueta111/info' ||location.pathname === '/sueta111/server' || location.pathname === '/sueta111/infopage' || location.pathname === '/sueta111/play' ? '' : <div className={ bool ? style.navBar_item: style.navBar_item10 }>Одиночная игра</div>}
  
  </Link>
  <Link state={location.state} onClickCapture={(e)=> setBool(false)} to="/sueta111/server">
  { location.pathname === '/sueta111/server' || location.pathname === '/sueta111/infopage'||location.pathname === '/sueta111/play' ? '' : <div className={style.navBar_item}>Сетевая игра</div>}
  
  </Link>
  <Link onClickCapture={(e)=> setBool(false)} to="/sueta111/infopage">
  { location.pathname === '/sueta111/infopage' || location.pathname === '/sueta111/server'|| location.pathname === "/sueta111/play" ? '':<div style={{paddingLeft:'20px ' , paddingRight:'20px'}} className={style.navBar_item}>Справочник AoV</div> }
  
  </Link>
  <Link state={location.state} onClickCapture={(e)=> setBool(false)} to="/sueta111/lobbycreate">
  { location.pathname === '/sueta111/server' ? <div style={{paddingLeft:'20px ' , paddingRight:'20px'}} className={style.navBar_item}>Создать лобби</div> : '' }
  
  </Link>
  { location.pathname === '/sueta111/server' ? <button  disabled={!sss5} style={{width:'150px',height:'76px'} } onClick={() => { setSSS5( sss5 === true ? false: true) ; setTimeout((() =>{ setAction(sss5) ;  }),1000);setTimeout((() => { setSSS5( sss5 === false ? false: true) }),800)}} className={sss5 ? style.navBar_item : style.navBar_item12}>Обновить сервера</button> : '' }
  { location.pathname === '/sueta111/main' ? <div style={{marginLeft:'700px'}} className={style.main_text}>Art Of Victory</div> :'' }
  
  </div>
  
  );
  };
