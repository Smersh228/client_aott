//simport React, { useEffect, useState } from 'react';
import "./App.css";
// import BoardComponent from "./components/BoardComponent";
// import UnitComponent from './components/UnitComponent';
// import { Board } from "./models/Board";
// import { Fraction } from './models/Fraction';
// import { Hex } from './models/Hex';
// import { ToolTipUnit } from './models/ToolTipUnit';
// import { Unit } from './models/unit/Unit';
import { PlayPage } from './pages/PlayPage/PLayPage';
import { MainPage } from './pages/MainPage/MainPage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { InfoPage } from './pages/PlayPage/InfoPage';
import { Server } from "./pages/ServerPage/Server";
import { Lobby } from "./pages/ServerPage/Lobby";
import { Connect } from "./pages/ConnectPage/Connect";
import { LobbyCreate } from "./pages/ServerPage/LobbyCreate";
import { useEffect, useState } from "react";
import { InfoPageAot } from "./pages/InfoAoV/InfoPageAot";
import { CartServer } from "./pages/PlayPage/CartSever";
import { RequireAuth } from "./pages/ConnectPage/RequireAuth";


const App = () => {
  const [sss,setSSS] = useState<any>()
  const [sss1,setSSS1] = useState<any>()
  let player: any
  let ff;
  player = ff
useEffect(() => {

    const soket = new WebSocket('ws://localhost:5000/')
    soket.onopen = () => {
    
   

  
    
     soket.onmessage =  (event) => {
     
   
        player = JSON.parse(event.data)
       
      }
      
    }



})


    return (
       
        <div className="body1" >
        
        <BrowserRouter>
        <Routes>
        <Route path='/sueta111/' element={<Connect/>} />

<Route path='/sueta111/lobbycreate'  element={<LobbyCreate player={player}  />}/>
<Route path='/sueta111/main' element={<RequireAuth  >
<MainPage/>


</RequireAuth>



 }/>
<Route path='/sueta111/play' element={<PlayPage/>}/>
<Route path='/sueta111/info' element={<InfoPage/>}/>
<Route path='/sueta111/server' element={<Server />}/>
<Route path='/sueta111/lobby/:id' element={<Lobby/>}/>
<Route path='/sueta111/play/:id' element={<CartServer/>}/>
<Route path='/sueta111/infopage' element={<InfoPageAot/>}/>
        </Routes>
        </BrowserRouter>
        </div>
    );
};

export default App;

