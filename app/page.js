import Image from "next/image";
import ProboBitcoinCalculator from "./_components/ProboBitcoinCalculator";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📈</text></svg>"
      />
      <Head>
        <meta
          name="description"
          content="Get the latest Bitcoin price, news, charts, and more. Stay updated with Bitcoin-related information including its value, prediction, and mining."
        />
        <meta
          name="keywords"
          content="bitcoin price, bitcoin price usd, bitcoin price today, bitcoin news, price of bitcoin, bitcoin etf, bitcoin halving, bitcoin stock, bitcoin to usd, bitcoin usd, bitcoin value, bitcoin price prediction, bitcoin cash, bitcoin mining, bitcoin price live, bitcoin price chart, bitcoin chart, bitcoin halving countdown, what is bitcoin, probo, probo app, probo app download, probo apk, probo apk download, probo referral code, probo mod apk download, probo app download play store, probo download, probo mod apk, probo app download new version, www probo in, probo app download apk, probo apk download new version, probo app download android, probo referral code 2024, probo app download free, probo ऐप डाउनलोड, probo login, probo app real or fake"
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
