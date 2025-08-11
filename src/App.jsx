import './App.css';
import Counter from './components/counter';
import QuoteFetcher from './components/quote_fetcher';

export default function App(){
  return (
    <div className='App'>
        {/* <Counter incVal={1}/> */}
        <QuoteFetcher/>
    </div>
  )
}