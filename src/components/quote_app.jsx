import { useState, useEffect } from "react";
import Navbar from "./navbar";
import QuoteFetcher from "./quote_fetcher";

export default function QuoteApp({ colorInfo, colorFunc }) {
  // const [colorScheme, setColorScheme] = useState(false);

  return (
    <main>
      <Navbar colorInfo={colorInfo} colorFunc={colorFunc} />
      <QuoteFetcher colorInfo={colorInfo} />
    </main>
  );
}
