"use client";
import React, { useState } from "react";
import QnA from "./QnA";

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
          <QnA />
        </footer>
      </div>
    </>
  );
}
