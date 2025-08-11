import { useState, useEffect } from "react";

const random_quote_url = "https://api.api-ninjas.com/v1/quotes"
const api_key = import.meta.env.VITE_QUOTES_API_KEY;

export default function QuoteFetcher() {
    const [Quote, setQuote] = useState({quote_text: "", author_name: "",});
    const [QuoteFetched, setQuoteFetched] = useState(false);

    useEffect(() => {
        FetchQuote();
    }, []);
    
    const FetchQuote = async () => {
        const response = await fetch(random_quote_url,{headers: {'X-Api-Key': api_key}});
        const jsonResponse = await response.json();
        const random_quote = jsonResponse[0].quote;
        const author = jsonResponse[0].author;
        console.log(random_quote, author);
        setQuoteFetched(true);
        setQuote((prev) => {
            return {...prev, quote_text: random_quote, author_name: author }
        });
    }
    return (
        <div className="w-80 md:w-175 lg:w-200 border-none bg-blue-100 justify-self-center m-2 p-2 grid grid-cols-1
            rounded-lg mt-5
        ">
            <button className="bg-blue-300 w-60 md:w-75 justify-self-center rounded-lg 
                border-2 border-transparent hover:border-2 hover:border-blue-600 hover:cursor-pointer
                transition-all delay-1 active:bg-gray-400"
                onClick={FetchQuote}
            >
                click here to see a random quote
            </button>
            {QuoteFetched && 
            <p className={`text-center mt-2 text-3xl grid grid-cols-1 opacity-0
             transition-opacity delay-700 ease-in-out ${QuoteFetched ? 'opacity-100': ''}
            `}>
                    "{Quote.quote_text}"<span className="text-gray-400 text-lg mt-1 text-left"> - {`by ${Quote.author_name}`}</span>
            </p>}
        </div>
    )
}