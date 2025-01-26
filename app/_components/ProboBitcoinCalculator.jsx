"use client";
import React, { useState } from "react";

// Spinner Component
const Spinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

export default function ProboBitcoinCalculator() {
  const [investment, setInvestment] = useState(25);
  const [stockPrice, setStockPrice] = useState(0.5);
  const [maxStockValue, setMaxStockValue] = useState(10);
  const [commissionPercentage, setCommissionPercentage] = useState(0);
  const [result, setResult] = useState(null);
  const [profit, setProfit] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculatePayout = () => {
    setIsCalculating(true);
    setResult(null);
    setProfit(null);

    // Simulate calculation delay
    setTimeout(() => {
      const numberOfStocks = investment / stockPrice;
      const maxPayout = numberOfStocks * maxStockValue;
      const commissionAmount = maxPayout * (commissionPercentage / 100);
      const calculatedProfit = maxPayout - investment - commissionAmount;

      setResult(maxPayout);
      setProfit(calculatedProfit);
      setIsCalculating(false);
    }, 1000);
  };

  const seoQuestions = [
    "What is Bitcoin",
    "How to Buy Bitcoin",
    "Bitcoin Halving",
    "How to Mine Bitcoin",
    "Bitcoin Price",
    "Bitcoin Investment",
    "How Bitcoin Works",
    "Bitcoin Price USD",
    "Bitcoin News",
    "Bitcoin ETF",
    "Bitcoin Stock",
    "Bitcoin to USD",
    "Bitcoin USD",
    "Bitcoin Value",
    "Bitcoin Cash",
    "Bitcoin Mining",
    "Bitcoin Price Live",
    "Bitcoin Price Chart",
    "Bitcoin Chart",
    "Bitcoin Halving Countdown",
  ];

  return (
    <>
      <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold  mb-4 text-gray-800 md:col-span-2">
              Probo Bitcoin Investment Calculator
            </h1>

            <div>
              <label htmlFor="investment" className="block mb-2 text-gray-700">
                Investment (₹):
              </label>
              <input
                type="number"
                id="investment"
                className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
              />
            </div>

            <div>
              <label htmlFor="stockPrice" className="block mb-2 text-gray-700">
                Price per Stock (₹):
              </label>
              <input
                type="number"
                id="stockPrice"
                className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200"
                value={stockPrice}
                onChange={(e) => setStockPrice(Number(e.target.value))}
              />
            </div>

            <div>
              <label
                htmlFor="maxStockValue"
                className="block mb-2 text-gray-700"
              >
                Maximum Stock Value (₹):
              </label>
              <input
                type="number"
                id="maxStockValue"
                className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200"
                value={maxStockValue}
                onChange={(e) => setMaxStockValue(Number(e.target.value))}
              />
            </div>

            <div>
              <label htmlFor="commission" className="block mb-2 text-gray-700">
                Commission (%):
              </label>
              <input
                type="number"
                id="commission"
                className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200"
                value={commissionPercentage}
                onChange={(e) =>
                  setCommissionPercentage(Number(e.target.value))
                }
              />
            </div>

            <button
              onClick={calculatePayout}
              className="w-full bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold py-2 rounded-lg"
              disabled={isCalculating}
            >
              Calculate Maximum Payout
            </button>
          </div>

          <div className="flex items-center justify-center">
            {isCalculating ? (
              <Spinner />
            ) : result !== null && profit !== null ? (
              <div className="w-full p-6 bg-gray-100 rounded-lg space-y-4 border border-gray-200 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Results
                </h2>
                <p className="text-lg font-bold text-gray-800">
                  Total Payout: ₹
                  {new Intl.NumberFormat().format(result.toFixed(2))}
                </p>
                <p className="text-lg font-bold text-green-600">
                  Profit Earned: ₹
                  {new Intl.NumberFormat().format(profit.toFixed(2))}
                </p>
              </div>
            ) : (
              <div className="w-full p-6 bg-gray-100 rounded-lg border border-gray-200 text-center text-gray-500">
                Calculate to see results
              </div>
            )}
          </div>
        </div>

        {/* SEO Footer */}
        <footer className="w-full max-w-4xl mt-8 bg-gray-100 p-6 rounded-2xl border border-gray-200">
          <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
            Popular Bitcoin Queries and Answers
          </h2>
          <div className="space-y-4">
            {seoQuestions.map((question, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold text-lg text-blue-600">
                  {question}
                </h3>
                <p className="text-gray-700">
                  {question === "What is Bitcoin" && (
                    <span>
                      Bitcoin is a decentralized digital currency, without a
                      central bank or single administrator, that can be sent
                      from user to user on the peer-to-peer Bitcoin network
                      without the need for intermediaries.
                    </span>
                  )}
                  {question === "How to Buy Bitcoin" && (
                    <span>
                      You can buy Bitcoin through exchanges like Coinbase,
                      Binance, or Kraken. After creating an account, you can
                      deposit funds and purchase Bitcoin directly.
                    </span>
                  )}
                  {question === "Bitcoin Halving" && (
                    <span>
                      Bitcoin Halving is an event that occurs approximately
                      every four years, where the reward for mining Bitcoin is
                      halved, reducing the number of new Bitcoins generated.
                    </span>
                  )}
                  {question === "How to Mine Bitcoin" && (
                    <span>
                      Bitcoin mining involves using specialized hardware to
                      solve complex cryptographic puzzles, securing the network
                      and confirming transactions in exchange for newly minted
                      Bitcoins.
                    </span>
                  )}
                  {question === "Bitcoin Price" && (
                    <span>
                      The price of Bitcoin is highly volatile and fluctuates
                      depending on market demand, news, and adoption. Check
                      reliable cryptocurrency exchanges for the latest price.
                    </span>
                  )}
                  {question === "Bitcoin Investment" && (
                    <span>
                      Bitcoin investment refers to buying and holding Bitcoin as
                      a long-term investment. However, it's important to
                      consider the volatility and risks involved.
                    </span>
                  )}
                  {question === "How Bitcoin Works" && (
                    <span>
                      Bitcoin operates on a decentralized peer-to-peer network
                      that allows for secure, transparent, and irreversible
                      transactions using blockchain technology.
                    </span>
                  )}
                  {question === "Bitcoin Price USD" && (
                    <span>
                      The price of Bitcoin (BTC) in USD varies constantly. You
                      can check the real-time price on popular cryptocurrency
                      platforms like Coinbase, Binance, or Kraken.
                    </span>
                  )}
                  {question === "Bitcoin News" && (
                    <span>
                      Bitcoin news refers to the latest updates about Bitcoin's
                      market, technology, regulations, and other developments.
                      Stay up-to-date with news sources like CoinDesk,
                      CoinTelegraph, or Bitcoin Magazine.
                    </span>
                  )}
                  {question === "Bitcoin ETF" && (
                    <span>
                      A Bitcoin ETF (Exchange-Traded Fund) is a financial
                      product that allows investors to buy Bitcoin through
                      traditional stock markets. It provides exposure to Bitcoin
                      without directly purchasing or storing the digital asset.
                    </span>
                  )}
                  {question === "Bitcoin Stock" && (
                    <span>
                      Bitcoin stock refers to stocks of companies that are
                      involved with Bitcoin or blockchain technology. It’s
                      different from buying Bitcoin directly, as you’re
                      purchasing shares of the company that works with Bitcoin.
                    </span>
                  )}
                  {question === "Bitcoin to USD" && (
                    <span>
                      Bitcoin to USD refers to the conversion of Bitcoin to
                      United States Dollars. This exchange rate fluctuates based
                      on market demand and supply. You can check the live
                      exchange rate on platforms like CoinMarketCap.
                    </span>
                  )}
                  {question === "Bitcoin USD" && (
                    <span>
                      Bitcoin USD is the value of one Bitcoin expressed in
                      United States Dollars. The value of Bitcoin fluctuates and
                      can be checked in real-time through exchange platforms and
                      cryptocurrency data aggregators.
                    </span>
                  )}
                  {question === "Bitcoin Value" && (
                    <span>
                      The value of Bitcoin is determined by the market price and
                      is influenced by supply, demand, global adoption, and
                      macroeconomic factors. Its value can be highly volatile.
                    </span>
                  )}
                  {question === "Bitcoin Cash" && (
                    <span>
                      Bitcoin Cash (BCH) is a peer-to-peer electronic cash
                      system that aims to allow fast, low-cost transactions. It
                      was created as a fork from Bitcoin in 2017.
                    </span>
                  )}
                  {question === "Bitcoin Mining" && (
                    <span>
                      Bitcoin mining is the process of using computing power to
                      solve complex mathematical problems and validate Bitcoin
                      transactions. Miners are rewarded with new Bitcoins for
                      their work.
                    </span>
                  )}
                  {question === "Bitcoin Price Live" && (
                    <span>
                      Bitcoin's live price refers to the current market price of
                      Bitcoin in real-time. You can find this information on
                      cryptocurrency exchange websites like Binance, Coinbase,
                      or Kraken.
                    </span>
                  )}
                  {question === "Bitcoin Price Chart" && (
                    <span>
                      A Bitcoin price chart shows the historical price movements
                      of Bitcoin over time. It’s often used by traders to
                      analyze market trends and predict future price movements.
                    </span>
                  )}
                  {question === "Bitcoin Chart" && (
                    <span>
                      Bitcoin charts visually represent Bitcoin’s price and
                      trading volume over specific time frames. Traders use them
                      to understand market trends and make informed decisions.
                    </span>
                  )}
                  {question === "Bitcoin Halving Countdown" && (
                    <span>
                      Bitcoin halving is an event that occurs every four years,
                      reducing the block reward miners receive by half. This
                      event impacts Bitcoin's supply and, in turn, its price.
                      You can find countdown timers for the next halving event
                      online.
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </footer>
      </div>

      {/* SEO-Optimized Meta Tags */}
      <head>
        <meta
          name="description"
          content="Use our Bitcoin Investment Calculator to find out potential profits and calculate the maximum payout based on your investment and stock price. Answers to common Bitcoin queries included."
        />
        <meta
          name="keywords"
          content="bitcoin, bitcoin price, bitcoin investment, bitcoin halving, bitcoin mining, bitcoin news, bitcoin stock, bitcoin to usd, bitcoin usd, bitcoin cash, bitcoin value, buy bitcoin, bitcoin calculator"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Probo Bitcoin Investment Calculator"
        />
        <meta
          property="og:description"
          content="Use our Bitcoin Investment Calculator to calculate your potential profit and maximum payout from your Bitcoin investment. Learn more about Bitcoin in our FAQ."
        />
        <meta property="og:image" content="path_to_image.jpg" />
        <meta property="og:url" content="your_website_url" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Probo Bitcoin Investment Calculator"
        />
        <meta
          name="twitter:description"
          content="Calculate potential profits and maximum payouts from your Bitcoin investment with our easy-to-use calculator. Discover answers to Bitcoin questions."
        />
      </head>
    </>
  );
}
