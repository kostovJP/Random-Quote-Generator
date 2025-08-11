import './App.css';
import Counter from './components/counter';
import Navbar from './components/navbar';
import QuoteApp from './components/quote_app';
import QuoteFetcher from './components/quote_fetcher';
import { useState, useEffect } from 'react';

export default function App(){
  const [color, setColor] = useState("dark");
  // const darkScheme = () => {
  //   setColor("dark");
  // }

  // const lightScheme = () => {
  //   setColor("light");
  // }

  useEffect(() => {
    if(color === "dark"){ document.body.style.backgroundColor = "#343a40"; }
    else { document.body.style.backgroundColor = "#f8f9fa"; }
  }, [color]);

  return (
    <div className=''>
        {/* <Counter incVal={1}/> */}
        {/* <QuoteFetcher/> */}
        <QuoteApp colorInfo={color} colorFunc={setColor}/>
    </div>
  )
}