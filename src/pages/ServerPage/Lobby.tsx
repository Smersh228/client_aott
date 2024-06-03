import { FC, useEffect, useState } from "react";
// import { Board } from "../../models/Board";
// import BoardComponent from "../../components/BoardComponent";
import { Header } from "../../components/header/header";
import style from "./Server.module.css"
import { Field } from "../../gameComponents/Field/Field";
import { Link, useLocation, useNavigate , redirect} from "react-router-dom";
import { NavBar } from "../../components/navBar/navBar";
import { UserLobby } from "./UserLobby";
import tanks from "../PlayPage/tanks.jpg"
import { useParams } from "react-router-dom";
// export const PlayPage = () => {
//     const [board, setBoard] = useState(new Board())
    
//     useEffect(() => {
//         restart()

//     }, [])

//     function restart() {
//         const newBoard = new Board();
//         newBoard.initCells()
//         newBoard.addUnits()
//         setBoard(newBoard)
        
//     }



//     return (
//         <div className="app">
//    <Header />
//             <BoardComponent
//                 board={board}
//                 setBoard={setBoard}
                

             
//             />


//         </div>

//     );
// }

interface player {
  ready:string
  player:string
  fraction:number


}

interface iplyers {
  method:string
  login:string
  id:string
  id1:number
  fraction:string
  ready:string
  redirect_play: boolean
  players: player[]

}
let msg12: iplyers
let msg: iplyers

export const Lobby = () => {

  const [ready1,setReady1] = useState<string>()
  const [ready3,setReady3] = useState<any>(0)
  const [ready34,setReady34] = useState<any>(0)
  const [ready345,setReady345] = useState<number>()
  const [ready3445,setReady3454] = useState<iplyers>()
  const [ready,setReady] = useState<string>(" Не Готов")
  const [ready1111,setReady1111] = useState<number>(0)
  const [fraction,setFraction] = useState<number>(0)
 const location = useLocation()
 const location1 = useParams()
 const navigate = useNavigate()
  let parems = useParams<string>()
 let msg12 = msg
 let msg123: number
 let msg333: number
 msg333 = 1
 let msss =  msg12 === undefined ? undefined : msg12
console.log(msss)
 const [ready12,setReady12] = useState<iplyers>(msg12)
 location.state.id =  location.state.create === true && msg !== undefined ? msg.id1 : ''

  const func = () => {
   
    const socket = new WebSocket('ws://localhost:5000/')
    socket.onopen = () => {
     
      socket.send(JSON.stringify({
       method:'createLobby1',
       id:parems,
       player:location.state.login,
       ready:ready3
      }))
     if ( location.state.create === undefined) {
     
       socket.send(JSON.stringify({
         method:'createLobby2',
         id:parems,
         players:[{ready:ready, player:location.state.login, fraction: fraction, ready_play:false,mocktanks:[] }]
        }))
 
 
 
     }
   
   
     
 
     console.log(msg)
     
     
       
   }

  return msg
  }
  const functs = () => {
    if (ready3 === 0) {
  setReady3(ready3+1)
    } 
  }
    
const ssss = (msg:iplyers) => {
  console.log(msg === undefined  ?[] : msg)
    return msg === undefined  ?[] : msg.players.map((cells) => <UserLobby player={cells.player} fraction1={cells.fraction}  Ready={cells.ready}  /> )


}
 


const dfgdg = () => {
 
  
  
  const socket = new WebSocket('ws://localhost:5000/')

  location.state = {login: location.state.login, create:location.state.create, fraction}
  location.state.fraction = fraction
  console.log(location.state)
  socket.onopen = () => {
   if (location.state.create === true) {
   socket.send(JSON.stringify({
    method:'createLobby1',
    id:parems.id,
    player:location.state.login,
    fraction:fraction,
    ready: msg.players[0].ready
   }))
 
  
}

  else if (  location.state.create === undefined ) {
    console.log(1)
    socket.send(JSON.stringify({
      method:'fraction',
      id:parems.id,
     
      fraction: fraction,
      
     }))
   


  }


  
   



 

 




    
}

console.log(msg)
  return msg
}


const dfgdg12 = () => {
 
  
  console.log(1)
  const socket = new WebSocket('ws://localhost:5000/')
  console.log(location.state.create)
  socket.onopen = () => {
   if (location.state.create === true) {
   socket.send(JSON.stringify({
    method:'createLobby1',
    id:parems.id,
    player:location.state.login,
    fraction:ready,
    ready:ready
   }))
  }
  else if (  location.state.create === undefined ) {
    console.log(1)
    socket.send(JSON.stringify({
      method:'ready',
      id:parems.id,
     
     
      ready: ready
     }))
   


  }


  
  



 
  }
console.log(msg)
  return msg
}


setTimeout(functs,200)


  useEffect(() => {
  
    
    
    console.log(1)
    const socket = new WebSocket('ws://localhost:5000/')
    console.log(location.state.create)
    socket.onopen = () => {
     if ( location.state.create === true) {
     socket.send(JSON.stringify({
      method:'createLobby1',
      id:parems.id,
      player:location.state.login,
      fraction: 0,
      ready: 'Готов'
     }))
    }
    else if ( location.state.create === undefined  ) {
      console.log(1)
      socket.send(JSON.stringify({
        method:'createLobby2',
        id:parems.id,
        players:   {ready:'Не Готов', player:location.state.login, fraction: 0, id:parems.id, ready_play:false,mocktanks:[] },
        
        
       }))
      



    } 


  if (ready3 === 0   ) {
   
socket.onmessage = (event:MessageEvent<string>) => {
   let msg5 = JSON.parse(event.data)
   msg = JSON.parse(event.data)
     
      console.log(msg.method)
      if (msg5.method !== 'new') {
         msg = JSON.parse(event.data)
         msg123 = msg.players.length
         console.log( msg.players.length )
         console.log(msg)
         setReady3454(msg)
        
         if (msg.players.length === 2 && ready34 === 0 ) {
          setReady34(ready34+1)
         
        }
       
        
      }
    console.log(msg)
    ssss(msg)
    if (msg.redirect_play === true) {
     navigate(`/sueta111/play/${parems.id}`,{state:location.state , replace:true})

    }
    }
    
  }
  
  

      
 }
    
},[ready34])



const redirect1 = () => {
  const socket = new WebSocket('ws://localhost:5000/')
  console.log(location)
  socket.onopen = () => {
   
   socket.send(JSON.stringify({
    method:'redirect_play',
    id:parems.id,
    player:location.state.login,
    fraction:fraction,
    redirect_play: true,
    ready:ready
   }))

   socket.onmessage = (event:MessageEvent<string>) => {
    let msg5 = JSON.parse(event.data)
    msg = JSON.parse(event.data)
    console.log(msg)
       console.log(msg.method)
       if (msg5.method !== 'new') {
          msg = JSON.parse(event.data)
          msg123 = msg.players.length
          console.log( msg.players.length )
          console.log(msg)
          setReady3454(msg)
         
          if (msg.players.length === 2 && ready34 === 0 ) {
           setReady34(ready34+1)
          
         }
        
         
       }
     
      
     }


  
}
}




return(


<div  className={style.lobbyDiv}>

<div className={style.h1h}> <h1  >Карта</h1> <h1 style={{paddingLeft:'25% ',paddingRight:'25% '}} >Задачи</h1> <h1  >Игроки</h1> </div>
<div className={style.h2h} > <div  className={style.lobbyCart} style={{}}> </div> <div className={style.lobbyCart} style={{}}><p className={style.text}>Задача сторон: Взять дорогу и удерживать её в течение 3 хода(Ходы будут считаться, если у врага нету юнита на дороге)! </p></div> <div   className={style.lobbyCart}>  {ssss(msg) }<div className={style.buttons}><button  onClick={ () => {  dfgdg() ;setFraction( fraction === 2 ? fraction-2 : fraction+1)} } style={{top:'70%', left:'83.7%', width:'170px'}} className={style.lobbyButtonCreate}>Смена Фракции</button> <button onClick={() => { if (!location.state.create) {  dfgdg12(); setReady( ready === 'Готов'   ? 'Не Готов' : 'Готов' )} else {redirect1() }}} style={{top:'70%', left:'70%'}} className={style.lobbyButtonCreate}>{ location.state.create? 'В бой' :  ready !== 'Готов' ? 'Не Готов' : 'Готов' }</button></div> </div> </div>








</div>



)
}

