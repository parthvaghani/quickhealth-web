import Header from '../../components/layout/Header';
import Footer from "../../components/layout/Footer";
import Home from "./home";
import { useEffect } from 'react';

export default function Index() {
  function printColorfulMessage() {
    const styles = [
        'color: #FF5733', // Orange
        'color: #FFC300', // Yellow
        'color: #DAF7A6', // Light Green
    ];
    // const message = "";
    // console.log(message, ...styles);
    console.log('%cRIPPLESTACKS', 'font-weight: bold; font-size: 40px;color: orange; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113) ');
    console.log('%cAre you looking for web and mobile app developers or individual freelancers for your business or website? Check out https://ripplestacks.com or connect at +916353528830', 'background-color:#F7AB30; padding:20px; font-weight:bold; font-size:16px')

}
  useEffect(() => {
  setTimeout(() => {
    printColorfulMessage()
  }, 3000);
  }, [])
  
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}
