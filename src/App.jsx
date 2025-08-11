import './App.css';
import Counter from './components/counter';
import Navbar from './components/navbar';
import QuoteApp from './components/quote_app';
import QuoteFetcher from './components/quote_fetcher';
import { useState, useEffect } from 'react';

export default function App(){

  useEffect(() => {
    document.body.style.backgroundColor = "#343a40";
  }, []);

  return (
    <div className=''>
        {/* <Counter incVal={1}/> */}
        {/* <QuoteFetcher/> */}
        <QuoteApp/>
    </div>
  )
}