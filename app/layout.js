import { Poppins, Geist, Geist_Mono } from "next/font/google";
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
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
