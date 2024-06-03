import { useEffect } from "react";
import { Header } from "../../components/header/header";
import { useLocation, useParams } from "react-router-dom";

export const MainPage = () => {
  let location = useLocation()
  useEffect(() => {
    console.log(location)
    const soket = new WebSocket('ws://localhost:5000/')
    soket.onopen = () => {
     
        
    }
    soket.onmessage = (event) => {
     
     }

  },)
  return (
    <>
      <Header />
 
    </>
  );
};
