import React from "react";

const seoQuestions = [
  "Probo app real or fake",
  "Is Probo app safe",
  "Probo app kya hai",
  "What is Probo app",
  "Is Probo app legal in India",
  "What is Probo",
  "Probo app se paise kaise kamaye",
  "Probo kya hai",
  "Probo app kya hai in Hindi",
  "Probo is legal in India",
  "Is Probo legal in India",
  "Probo se paise kaise kamaye",
  "Probo is safe or not",
  "Probo app is real or fake",
  "Probo real or fake",
  "Probo is real or fake",
  "Probo kya hai in Hindi",
  "Probo app safe or not",
  "Probo app is safe",
  "What is Probo app in Hindi",
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
export default function QnA() {
  return (
    <div className="space-y-4">
      {seoQuestions.map((question, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold text-lg text-blue-600">{question}</h3>
          <p className="text-gray-700">
            {question === "Probo app real or fake" && (
              <span>
                Probo app is a legitimate platform that allows users to predict
                on various topics and earn rewards. However, like any other
                platform, it's always a good idea to verify the legitimacy by
                checking reviews and feedback from actual users.
              </span>
            )}
            {question === "Is Probo app safe" && (
              <span>
                Probo app is generally considered safe, but it's important to
                follow their guidelines and use caution while interacting with
                the platform.
              </span>
            )}
            {question === "Probo app kya hai" && (
              <span>
                Probo app is a platform where users can predict outcomes on
                various topics and earn money based on the accuracy of their
                predictions.
              </span>
            )}
            {question === "What is Probo app" && (
              <span>
                Probo is an app that allows users to predict on various topics
                such as sports, politics, and current events, and earn rewards
                for accurate predictions.
              </span>
            )}
            {question === "Is Probo app legal in India" && (
              <span>
                Probo app is legal in India as it operates within the guidelines
                of predicting and forecasting, similar to other online
                prediction platforms.
              </span>
            )}
            {question === "What is Probo" && (
              <span>
                Probo is a prediction-based app where users can forecast
                outcomes on various topics and earn rewards based on their
                predictions.
              </span>
            )}
            {question === "Probo app se paise kaise kamaye" && (
              <span>
                You can earn money on Probo by predicting outcomes correctly on
                various topics. Accurate predictions will earn you rewards in
                the form of points or cash.
              </span>
            )}
            {question === "Probo kya hai" && (
              <span>
                Probo is a platform where users can make predictions on various
                subjects and earn money based on the accuracy of their
                predictions.
              </span>
            )}
            {question === "Probo app kya hai in Hindi" && (
              <span>
                Probo app ek platform hai jahan users apne predictions bana kar
                paise kama sakte hain. Yeh app kai topics jaise politics,
                sports, aur current events pe prediction karne ki suvidha deta
                hai.
              </span>
            )}
            {question === "Probo is legal in India" && (
              <span>
                Probo operates legally in India, as it functions within the
                boundaries of forecasting and prediction platforms.
              </span>
            )}
            {question === "Is Probo legal in India" && (
              <span>
                Yes, Probo is legal in India as it adheres to legal guidelines
                regarding prediction-based platforms.
              </span>
            )}
            {question === "Probo se paise kaise kamaye" && (
              <span>
                To earn money on Probo, you need to make accurate predictions on
                various topics. Your earnings depend on the correctness of your
                forecasts.
              </span>
            )}
            {question === "Probo is safe or not" && (
              <span>
                Probo is generally safe for users, as long as you follow the
                app's safety measures and avoid sharing sensitive personal
                information.
              </span>
            )}
            {question === "Probo app is real or fake" && (
              <span>
                Probo app is real. It allows users to engage in predictions and
                earn rewards for accuracy. However, always check reviews before
                using any app.
              </span>
            )}
            {question === "Probo real or fake" && (
              <span>
                Probo is a legitimate platform, but always check user feedback
                and reviews for confirmation.
              </span>
            )}
            {question === "Probo is real or fake" && (
              <span>
                Probo is a genuine app, but as with any platform, it's important
                to verify its authenticity through user reviews and online
                research.
              </span>
            )}
            {question === "Probo kya hai in Hindi" && (
              <span>
                Probo ek aisa platform hai jahan users apni predictions bana kar
                paisa kama sakte hain. Isme kai alag topics hote hain jisme
                users prediction kar sakte hain.
              </span>
            )}
            {question === "Probo app safe or not" && (
              <span>
                Probo app is safe for use, but as with any online platform, it
                is always recommended to be cautious and protect your privacy.
              </span>
            )}
            {question === "Probo app is safe" && (
              <span>
                Yes, Probo app is considered safe to use as long as you follow
                the safety precautions.
              </span>
            )}
            {question === "What is Probo app in Hindi" && (
              <span>
                Probo app ek platform hai jahan users apne predictions bana kar
                paisa kama sakte hain. Yeh app kai topics par predictions karne
                ki suvidha deta hai.
              </span>
            )}

            {question === "What is Bitcoin" && (
              <span>
                Bitcoin is a decentralized digital currency, without a central
                bank or single administrator, that can be sent from user to user
                on the peer-to-peer Bitcoin network without the need for
                intermediaries.
              </span>
            )}
            {question === "How to Buy Bitcoin" && (
              <span>
                You can buy Bitcoin through exchanges like Coinbase, Binance, or
                Kraken. After creating an account, you can deposit funds and
                purchase Bitcoin directly.
              </span>
            )}
            {question === "Bitcoin Halving" && (
              <span>
                Bitcoin Halving is an event that occurs approximately every four
                years, where the reward for mining Bitcoin is halved, reducing
                the number of new Bitcoins generated.
              </span>
            )}
            {question === "How to Mine Bitcoin" && (
              <span>
                Bitcoin mining involves using specialized hardware to solve
                complex cryptographic puzzles, securing the network and
                confirming transactions in exchange for newly minted Bitcoins.
              </span>
            )}
            {question === "Bitcoin Price" && (
              <span>
                The price of Bitcoin is highly volatile and fluctuates depending
                on market demand, news, and adoption. Check reliable
                cryptocurrency exchanges for the latest price.
              </span>
            )}
            {question === "Bitcoin Investment" && (
              <span>
                Bitcoin investment refers to buying and holding Bitcoin as a
                long-term investment. However, it's important to consider the
                volatility and risks involved.
              </span>
            )}
            {question === "How Bitcoin Works" && (
              <span>
                Bitcoin operates on a decentralized peer-to-peer network that
                allows for secure, transparent, and irreversible transactions
                using blockchain technology.
              </span>
            )}
            {question === "Bitcoin Price USD" && (
              <span>
                The price of Bitcoin (BTC) in USD varies constantly. You can
                check the real-time price on popular cryptocurrency platforms
                like Coinbase, Binance, or Kraken.
              </span>
            )}
            {question === "Bitcoin News" && (
              <span>
                Bitcoin news refers to the latest updates about Bitcoin's
                market, technology, regulations, and other developments. Stay
                up-to-date with news sources like CoinDesk, CoinTelegraph, or
                Bitcoin Magazine.
              </span>
            )}
            {question === "Bitcoin ETF" && (
              <span>
                A Bitcoin ETF (Exchange-Traded Fund) is a financial product that
                allows investors to buy Bitcoin through traditional stock
                markets. It provides exposure to Bitcoin without directly
                purchasing or storing the digital asset.
              </span>
            )}
            {question === "Bitcoin Stock" && (
              <span>
                Bitcoin stock refers to stocks of companies that are involved
                with Bitcoin or blockchain technology. It’s different from
                buying Bitcoin directly, as you’re purchasing shares of the
                company that works with Bitcoin.
              </span>
            )}
            {question === "Bitcoin to USD" && (
              <span>
                Bitcoin to USD refers to the conversion of Bitcoin to United
                States Dollars. This exchange rate fluctuates based on market
                demand and supply. You can check the live exchange rate on
                platforms like CoinMarketCap.
              </span>
            )}
            {question === "Bitcoin USD" && (
              <span>
                Bitcoin USD is the value of one Bitcoin expressed in United
                States Dollars. The value of Bitcoin fluctuates and can be
                checked in real-time through exchange platforms and
                cryptocurrency data aggregators.
              </span>
            )}
            {question === "Bitcoin Value" && (
              <span>
                The value of Bitcoin is determined by the market price and is
                influenced by supply, demand, global adoption, and macroeconomic
                factors. Its value can be highly volatile.
              </span>
            )}
            {question === "Bitcoin Cash" && (
              <span>
                Bitcoin Cash (BCH) is a peer-to-peer electronic cash system that
                aims to allow fast, low-cost transactions. It was created as a
                fork from Bitcoin in 2017.
              </span>
            )}
            {question === "Bitcoin Mining" && (
              <span>
                Bitcoin mining is the process of using computing power to solve
                complex mathematical problems and validate Bitcoin transactions.
                Miners are rewarded with new Bitcoins for their work.
              </span>
            )}
            {question === "Bitcoin Price Live" && (
              <span>
                Bitcoin's live price refers to the current market price of
                Bitcoin in real-time. You can find this information on
                cryptocurrency exchange websites like Binance, Coinbase, or
                Kraken.
              </span>
            )}
            {question === "Bitcoin Price Chart" && (
              <span>
                A Bitcoin price chart shows the historical price movements of
                Bitcoin over time. It’s often used by traders to analyze market
                trends and predict future price movements.
              </span>
            )}
            {question === "Bitcoin Chart" && (
              <span>
                Bitcoin charts visually represent Bitcoin’s price and trading
                volume over specific time frames. Traders use them to understand
                market trends and make informed decisions.
              </span>
            )}
            {question === "Bitcoin Halving Countdown" && (
              <span>
                Bitcoin halving is an event that occurs every four years,
                reducing the block reward miners receive by half. This event
                impacts Bitcoin's supply and, in turn, its price. You can find
                countdown timers for the next halving event online.
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
