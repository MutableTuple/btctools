import Image from "next/image";
import ProboBitcoinCalculator from "./_components/ProboBitcoinCalculator";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Get the latest Bitcoin price, news, charts, and more. Stay updated with Bitcoin-related information including its value, prediction, and mining."
        />
        <meta
          name="keywords"
          content="bitcoin price, bitcoin price usd, bitcoin price today, bitcoin news, price of bitcoin, bitcoin etf, bitcoin halving, bitcoin stock, bitcoin to usd, bitcoin usd, bitcoin value, bitcoin price prediction, bitcoin cash, bitcoin mining, bitcoin price live, bitcoin price chart, bitcoin chart, bitcoin halving countdown, what is bitcoin"
        />
        <meta name="author" content="Your Name or Company" />
        <meta
          property="og:title"
          content="Probo Bitcoin Calculator - Live Bitcoin Price and More"
        />
        <meta
          property="og:description"
          content="Stay updated with the live Bitcoin price, Bitcoin news, and price predictions with the Probo Bitcoin Calculator."
        />
        <meta property="og:image" content="URL to an image" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Probo Bitcoin Calculator - Live Bitcoin Price and More"
        />
        <meta
          name="twitter:description"
          content="Stay updated with the live Bitcoin price, Bitcoin news, and price predictions with the Probo Bitcoin Calculator."
        />
        <meta name="twitter:image" content="URL to an image" />
      </Head>
      <ProboBitcoinCalculator />
    </>
  );
}
