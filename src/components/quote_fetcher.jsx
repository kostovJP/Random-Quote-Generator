import { useState, useEffect } from "react";

const random_quote_url = "https://api.api-ninjas.com/v1/quotes";
const api_key = import.meta.env.VITE_QUOTES_API_KEY;

export default function QuoteFetcher({ colorInfo }) {
  const [Quote, setQuote] = useState({ quote_text: "", author_name: "" });
  const [QuoteFetched, setQuoteFetched] = useState(false);

  useEffect(() => {
    FetchQuote();
  }, []);

  const FetchQuote = async () => {
    const response = await fetch(random_quote_url, {
      headers: { "X-Api-Key": api_key },
    });
    const jsonResponse = await response.json();
    const random_quote = jsonResponse[0].quote;
    const author = jsonResponse[0].author;
    console.log(random_quote, author);
    setQuoteFetched(true);
    setQuote((prev) => {
      return { ...prev, quote_text: random_quote, author_name: author };
    });
  };
  return (
    <div
      className={`w-80 md:w-175 lg:w-200 border-none ${
        colorInfo === "dark"
          ? "bg-zinc-950 text-white"
          : "bg-[#ddbea9] text-[#772f1a]"
      }
        justify-self-center m-2 p-2 grid grid-cols-1
            rounded-lg mt-5
        `}
    >
      <button
        className={`${
          colorInfo === "dark"
            ? "bg-zinc-700  hover:border-gray-400 active:bg-zinc-900"
            : "bg-[#9d6b53] text-black hover:border-[#774936] active:bg-[#8a5a44]"
        } 
        w-60 md:w-75 justify-self-center rounded-lg 
                border-3 border-transparent hover:border-3 hover:cursor-pointer
                transition-all delay-1 `}
        onClick={() => {setQuoteFetched(false); FetchQuote(); }}
      >
        click here to see a random quote
      </button>
      {!QuoteFetched && <span className={
        `${colorInfo === "dark" ? "text-gray-500": "text-orange-900"} text-sm text-center`
      }>Loading quote.....</span>}
      {QuoteFetched && (
        <p
          className={`text-center mt-2 text-3xl grid grid-cols-1 opacity-0
             transition-opacity delay-700 ease-in-out ${
               QuoteFetched ? "opacity-100" : ""
             }
            `}
        >
          "{Quote.quote_text}"
          <span
            className={`${
              colorInfo === "dark" ? "text-gray-400" : "text-[#b07d62]"
            }  text-lg mt-1 text-left `}
          >
            {" "}
            - {`by ${Quote.author_name}`}
          </span>
        </p>
      )}
    </div>
  );
}
