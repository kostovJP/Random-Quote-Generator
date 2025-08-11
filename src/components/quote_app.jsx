import { useState} from "react";
import Navbar from "./navbar";
import QuoteFetcher from "./quote_fetcher";


export default function QuoteApp(){
    const [colorScheme, setColorScheme] = useState(false);

    return (
        <main>
            <Navbar/>
            <QuoteFetcher/>
        </main>
    )
}