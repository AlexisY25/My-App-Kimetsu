import SplashScreen from "./src/page/SplashScreenView";
import Home from './src/page/HomeMain';
import { useEffect, useState } from "react";


export default function App() {

  const[isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3700);
  });

  return (
    <>
    {isShowSplash ? (
      <SplashScreen/>
    ) : (
      <Home/>
    )}
    </>
  );
};
