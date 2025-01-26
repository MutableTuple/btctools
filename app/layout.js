import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google"; // Import Google Analytics
import Head from "next/head"; // Import Head
import ProboBitcoinCalculator from "./_components/ProboBitcoinCalculator";
import "./globals.css";

// Load the Poppins font
const poppins = Poppins({
  weight: ["400", "600", "700"], // Adjust weights as needed
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Probo Bitcoin Calculator - Live Bitcoin Price and More",
  description:
    "Stay updated with the latest Bitcoin price, news, charts, and more. Get the best Bitcoin insights including price predictions, mining info, and the latest Bitcoin news.",
  keywords:
    "bitcoin price, bitcoin price usd, bitcoin price today, bitcoin news, price of bitcoin, bitcoin etf, bitcoin halving, bitcoin stock, bitcoin to usd, bitcoin usd, bitcoin value, bitcoin price prediction, bitcoin cash, bitcoin mining, bitcoin price live, bitcoin price chart, bitcoin chart, bitcoin halving countdown, what is bitcoin",
  author: "Your Name or Company",
  openGraph: {
    title: "Probo Bitcoin Calculator - Live Bitcoin Price and More",
    description:
      "Stay updated with the live Bitcoin price, Bitcoin news, and price predictions with the Probo Bitcoin Calculator.",
    url: "https://www.yourwebsite.com",
    image: "URL to an image",
  },
  twitter: {
    card: "summary_large_image",
    title: "Probo Bitcoin Calculator - Live Bitcoin Price and More",
    description:
      "Stay updated with the live Bitcoin price, Bitcoin news, and price predictions with the Probo Bitcoin Calculator.",
    image: "URL to an image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <GoogleAnalytics trackId="YOUR_TRACKING_ID" />
        {/* Replace with your GA4 tracking ID */}
        {/* Meta tags for SEO */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📈</text></svg>"
        />
        <meta
          name="description"
          content="Get the latest Bitcoin price, news, charts, and more. Stay updated with Bitcoin-related information including its value, prediction, and mining."
        />
        <meta
          name="keywords"
          content=" probo, probo app, probo app download, probo apk, probo apk download, probo referral code, probo mod apk download, probo app download play store, probo download, probo mod apk, probo app download new version, www probo in, probo app download apk, probo apk download new version, probo app download android, probo referral code 2024, probo app download free, probo ऐप डाउनलोड, probo login, probo app real or fake,bitcoin price, bitcoin price usd, bitcoin price today, bitcoin news, price of bitcoin, bitcoin etf, bitcoin halving, bitcoin stock, bitcoin to usd, bitcoin usd, bitcoin value, bitcoin price prediction, bitcoin cash, bitcoin mining, bitcoin price live, bitcoin price chart, bitcoin chart, bitcoin halving countdown, what is bitcoin,"
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
      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
