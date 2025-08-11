import './App.css';
import Counter from './components/counter';
import Navbar from './components/navbar';
import QuoteApp from './components/quote_app';
import QuoteFetcher from './components/quote_fetcher';

export default function App(){
  return (
    <div className='border-2'>
        {/* <Counter incVal={1}/> */}
        {/* <QuoteFetcher/> */}
        <QuoteApp/>
    </div>
  )
}