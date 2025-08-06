import React, { useEffect, useRef, useState } from 'react'
import SectionHeading from '../components/common/SectionHeading'
import { generalRules } from '../utils/statics';

const Glossary = () => {

    const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

    // Glossary data organized by alphabet
    const glossaryData = {
        a: [
            { term: "Ask Price", definition: "The lowest price a seller is willing to accept for an asset." },
            { term: "Asset", definition: "Any resource with economic value, especially tradable instruments like stocks, forex pairs, or commodities." },
            { term: "Account Balance", definition: "The total amount of money in a trading account excluding open trades." },
            { term: "Allocation", definition: "Distribution of capital across various instruments or sectors." },
            { term: "Arbitrage", definition: "Exploiting price differences of the same asset in different markets." },
            { term: "ATR (Average True Range)", definition: "A volatility indicator." },
            { term: "API (Application Programming Interface)", definition: "Allows automated trading and data sharing." },
            { term: "AUM (Assets Under Management)", definition: "The total market value managed by a firm." },
            { term: "Auto Trading", definition: "Trading executed by algorithms or bots." },
            { term: "Altcoins", definition: "Cryptocurrencies other than Bitcoin." },
            { term: "ASIC", definition: "Regulatory body in Australia; important for broker licensing." },
            { term: "Alpha", definition: "The excess return on an investment relative to the market." },
            { term: "Ask-Bid Spread", definition: "The difference between ask and bid prices." },
            { term: "Asset Class", definition: "Categories of assets like equities, forex, crypto, or commodities." },
            { term: "Average Fill Price", definition: "The average price at which a trade is executed." }
        ],
        b: [
            { term: "Bid Price", definition: "The highest price a buyer is willing to pay for an asset." },
            { term: "Bear Market", definition: "A market condition where prices are falling." },
            { term: "Broker", definition: "An individual or firm that facilitates trading between buyers and sellers." },
            { term: "Backtesting", definition: "The process of testing a trading strategy on historical data." },
            { term: "Breakout", definition: "When the price moves outside a defined support or resistance level." },
            { term: "Bull Market", definition: "A market condition where prices are rising." },
            { term: "Base Currency", definition: "The first currency in a forex pair." },
            { term: "Balance", definition: "The amount of money in your account, excluding profits or losses from open positions." },
            { term: "Beta", definition: "A measure of an asset's volatility compared to the market." },
            { term: "Book Value", definition: "The value of an asset as per accounting records." },
            { term: "Bollinger Bands", definition: "A technical analysis tool used to gauge market volatility." },
            { term: "Breach", definition: "A violation of trading rules or account conditions." },
            { term: "Buy Limit Order", definition: "An order to buy at or below a specified price." },
            { term: "Break-Even Point", definition: "The price at which gains equal losses." },
            { term: "Broker Fee", definition: "Charges by a broker for executing trades." }
        ],
        c: [
            { term: "Candlestick Chart", definition: "A chart that shows price movement with high, low, open, and close values." },
            { term: "CFD (Contract for Difference)", definition: "A derivative allowing traders to speculate on price movement without owning the asset." },
            { term: "Challenge Account", definition: "A simulated or real trading account used in prop firm evaluations." },
            { term: "Copy Trading", definition: "A strategy where traders mimic the trades of experienced professionals." },
            { term: "Commission", definition: "Fee charged by a broker per trade." },
            { term: "Correlation", definition: "A statistical measure of how assets move in relation to each other." },
            { term: "CTA (Call To Action)", definition: "Instructions that encourage users to take specific actions." },
            { term: "Currency Pair", definition: "Two currencies traded in forex (e.g., EUR/USD)." },
            { term: "CPI (Consumer Price Index)", definition: "An economic indicator used to gauge inflation." },
            { term: "Cross Pair", definition: "A forex pair that does not include USD." },
            { term: "Correction", definition: "A temporary price decline within an uptrend." },
            { term: "Candle Body", definition: "The thick part of a candlestick chart that shows the open-close range." },
            { term: "Capital Preservation", definition: "A strategy focused on preventing loss." },
            { term: "Cost Basis", definition: "The original value of an asset for tax purposes." },
            { term: "Clearing", definition: "Settling trades between buyers and sellers." }
        ],
        d: [
            { term: "Drawdown", definition: "The reduction of one's trading account after a series of losing trades." },
            { term: "Derivatives", definition: "Financial instruments that derive their value from an underlying asset." },
            { term: "Day Trading", definition: "A strategy involving buying and selling assets within the same trading day." },
            { term: "Dashboard", definition: "User interface showing key performance and trade data." },
            { term: "Deposit", definition: "Funds added to a trading account." },
            { term: "Dealing Desk", definition: "A type of broker that takes the opposite side of a client's trade." },
            { term: "Diversification", definition: "A Risk management strategy involving different assets." },
            { term: "Discipline", definition: "Trader's ability to stick to a strategy." },
            { term: "Double Top/Bottom", definition: "Chart patterns signaling potential trend reversal." },
            { term: "Demo Account", definition: "Practice account with simulated funds." },
            { term: "Downtrend", definition: "A sequence of lower highs and lower lows in price." },
            { term: "Delta", definition: "A measure of how much an option's price is expected to move." },
            { term: "Deleveraging", definition: "Reducing debt or leverage exposure." },
            { term: "Deviation", definition: "Difference from expected price or value." },
            { term: "Doji", definition: "A candlestick with little or no body, indicating indecision." }
        ],
        e: [
            { term: "ECN (Electronic Communication Network)", definition: "A system that matches buy and sell orders directly without intermediaries." },
            { term: "Equity", definition: "The value of a trader's account, including open positions." },
            { term: "Earnings Report", definition: "A quarterly report by a public company that can impact stock prices." },
            { term: "Entry Point", definition: "The price at which a trader enters a position." },
            { term: "ETF (Exchange Traded Fund)", definition: "A basket of assets traded like a stock." },
            { term: "Execution", definition: "The act of completing a buy or sell order." },
            { term: "Exponential Moving Average (EMA)", definition: "A weighted moving average that gives more importance to recent data." },
            { term: "EOD (End of Day)", definition: "Refers to trading activity that takes place at the end of the trading day." },
            { term: "Economic Calendar", definition: "A schedule of major economic events (e.g., NFP, CPI) that impact the markets." },
            { term: "Exit Strategy", definition: "A plan for closing a trade to maximize profit or minimize loss." },
            { term: "Exposure", definition: "The total amount a trader has at risk in the market." },
            { term: "Elliott Wave Theory", definition: "A form of technical analysis using wave patterns to predict market direction." },
            { term: "Error Margin", definition: "Acceptable deviation in trade execution or strategy." },
            { term: "Escrow", definition: "A third-party arrangement used in certain funding and payout processes." },
            { term: "Execution Risk", definition: "The risk that an order may not be filled at the intended price." }
        ],
        f: [
            { term: "Forex (Foreign Exchange)", definition: "The global market for trading currencies." },
            { term: "FOMC (Federal Open Market Committee)", definition: "A branch of the U.S. Federal Reserve that sets interest rates and monetary policy." },
            { term: "Fundamental Analysis", definition: "Evaluating an asset's value using economic and financial factors." },
            { term: "Fill", definition: "The completion of a buy or sell order in the market." },
            { term: "Futures", definition: "Contracts to buy or sell an asset at a future date and price." },
            { term: "Flat Market", definition: "A market with little price movement or direction." },
            { term: "Fibonacci Retracement", definition: "A technical analysis tool used to identify potential support and resistance levels." },
            { term: "Fiat Currency", definition: "Government-issued currency not backed by a physical commodity (e.g., USD, EUR)." },
            { term: "Floating Spread", definition: "A spread that changes based on market conditions." },
            { term: "Fill Price", definition: "The actual price at which an order is executed." },
            { term: "Free Margin", definition: "The amount of equity not tied up in current trades and available for new positions." },
            { term: "Financial Instrument", definition: "A tradable asset such as a stock, bond, or currency." },
            { term: "Forced Liquidation", definition: "When a broker closes a trader's position due to insufficient margin." },
            { term: "Forex Pair", definition: "A set of two currencies traded against each other (e.g., GBP/JPY)." },
            { term: "Fractional Pips (Pipettes)", definition: "Smaller units of a pip used for more precise pricing in forex." }
        ],
        g: [
            { term: "Go4Trades", definition: "A prop trading platform offering funding opportunities to traders." },
            { term: "Gain", definition: "The increase in account value over time." },
            { term: "Gap", definition: "A sharp move in price between trading sessions." },
            { term: "Grid Trading", definition: "A strategy involving multiple buy/sell orders at preset intervals." },
            { term: "GDP (Gross Domestic Product)", definition: "A key economic indicator of national performance." },
            { term: "Gearing", definition: "Another term for leverage, commonly used in the UK." },
            { term: "Gold Standard", definition: "A historic monetary system tying currencies to gold." },
            { term: "Growth Stock", definition: "A stock expected to grow at a rate higher than the market average." },
            { term: "Grey Market", definition: "Informal market where new assets are traded before official launch." },
            { term: "GTC (Good 'Til Cancelled)", definition: "An order that remains active until filled or cancelled." },
            { term: "Gap Fill", definition: "A trading strategy based on prices returning to previous gaps." },
            { term: "Gamma", definition: "Measures the rate of change in an option's delta." },
            { term: "Gross Profit", definition: "Total earnings before expenses." },
            { term: "Green Candle", definition: "Indicates that a trading instrument closed higher than it opened." },
            { term: "Guidance", definition: "A company's future outlook, often shared during earnings calls." }
        ],
        h: [
            { term: "Hedge", definition: "A strategy used to reduce risk by taking an offsetting position in a related asset." },
            { term: "High-Frequency Trading (HFT)", definition: "A type of algorithmic trading that executes large volumes of orders at extremely high speeds." },
            { term: "Holding Period", definition: "The amount of time an asset is held before being sold." },
            { term: "Hypothetical Performance", definition: "Simulated trading results, not based on actual trades, are often used in strategy testing." },
            { term: "Hard Stop", definition: "A fixed stop-loss level that doesn't change regardless of market conditions." },
            { term: "Hammer", definition: "A candlestick pattern that signals a potential reversal after a downtrend." },
            { term: "Head and Shoulders", definition: "A chart pattern that can indicate a trend reversal." },
            { term: "High/Low", definition: "The highest and lowest price of an asset during a specific time frame." },
            { term: "Handle", definition: "The slight dip in price that forms a 'cup and handle' pattern." },
            { term: "Hot Wallet", definition: "A cryptocurrency wallet connected to the internet, used for easy access and trading." },
            { term: "Halving (Crypto)", definition: "A programmed event in certain cryptocurrencies (e.g., Bitcoin) where block rewards are cut in half, impacting supply." }
        ],
        i: [
            { term: "IB (Introducing Broker)", definition: "A person or company that refers clients to a broker and earns a commission." },
            { term: "ICO (Initial Coin Offering)", definition: "A way for new crypto projects to raise capital by offering tokens before launching." },
            { term: "Index", definition: "A group of stocks used to represent a segment of the market (e.g., S&P 500, NASDAQ)." },
            { term: "Inflation", definition: "The rate at which prices for goods and services increase over time, reducing purchasing power." },
            { term: "Indicator", definition: "A tool used in technical analysis to help predict market trends (e.g., RSI, MACD)." },
            { term: "Initial Margin", definition: "The minimum amount of capital required to open a leveraged trade." },
            { term: "Institutional Investor", definition: "Large organizations like banks or hedge funds that trade large volumes." },
            { term: "Interest Rate", definition: "The cost of borrowing money, often set by a central bank and closely watched by traders." },
            { term: "Intraday Trading", definition: "Buying and selling financial instruments within the same trading day." },
            { term: "Illiquid Market", definition: "A market with low trading volume and wider spreads, making it harder to execute large orders." },
            { term: "Imbalance", definition: "A significant difference between buy and sell orders that can move prices quickly." },
            { term: "Index Fund", definition: "A fund designed to track the performance of a market index." },
            { term: "Inverse ETF", definition: "An exchange-traded fund that gains value when the underlying index falls." },
            { term: "IPO (Initial Public Offering)", definition: "When a company offers its shares to the public for the first time." },
            { term: "Impermanent Loss", definition: "A DeFi concept where liquidity providers temporarily lose value when prices fluctuate." }
        ],
        j: [
            { term: "J Curve", definition: "A chart pattern that shows initial losses followed by significant gains, commonly used in investment analysis." },
            { term: "Jamais Vu", definition: "The feeling of unfamiliarity with something that should be known, affecting traders' decision-making." },
            { term: "JPY (Japanese Yen)", definition: "The currency of Japan, often traded in currency pairs in forex markets." },
            { term: "Jump Trading", definition: "A high-frequency trading firm known for algorithmic strategies." },
            { term: "Jobber", definition: "A term used for traders who buy and sell frequently in a market, often speculating on price movements." },
            { term: "Junior Trader", definition: "A trader with less experience, typically under the supervision of a senior trader." },
            { term: "Jargon", definition: "Specialized terminology used in trading and finance." },
            { term: "Joint Account", definition: "A trading account shared by two or more individuals." },
            { term: "Judgmental Trading", definition: "Trading based on intuition, experience, or subjective decision-making, rather than rules or strategies." },
            { term: "Jitter", definition: "Fluctuations or irregularities in the execution speed of orders in high-frequency trading." },
            { term: "Jump Risk", definition: "The risk associated with large price moves in short time frames, often caused by news events or market shock." },
            { term: "Just-in-Time", definition: "A risk management strategy where traders make quick, decisive trades based on real-time market conditions." }
        ],
        k: [
            { term: "KYC (Know Your Customer)", definition: "A standard procedure used by brokers and financial institutions to verify the identity of clients." },
            { term: "Key Level", definition: "A significant price level in technical analysis, such as support, resistance, or pivot points." },
            { term: "Kite", definition: "A trading platform used in India, offering stock and commodities trading." },
            { term: "Keltner Channel", definition: "A volatility-based envelope indicator used to identify potential price breakouts." },
            { term: "Killer Spread", definition: "A spread in forex trading that's significantly higher than the typical spread, often due to market volatility or low liquidity." },
            { term: "Knock-In Option", definition: "An option that only becomes active if the underlying asset reaches a specified price." },
            { term: "Knock-Out Option", definition: "An option that expires worthless if the underlying asset reaches a specific price." },
            { term: "Kama (Kaufman Adaptive Moving Average)", definition: "A type of moving average that adjusts to market volatility." },
            { term: "Kip (Kipling)", definition: "A measure of volatility in cryptocurrency markets, often used in the context of arbitrage trading." },
            { term: "Kettle Option", definition: "A rare type of exotic option used in the derivatives market." },
            { term: "Korean Won (KRW)", definition: "The currency of South Korea, sometimes traded in the forex market." },
            { term: "Kurtosis", definition: "A statistical term measuring the 'tailedness' of the probability distribution of a market's return." },
            { term: "Key Risk Indicators (KRIs)", definition: "Metrics used to assess the potential risks of a trading strategy or investment." },
            { term: "Karma Trading", definition: "A trading strategy that blends technical analysis with long-term market sentiment." }
        ],
        l: [
            { term: "Leverage", definition: "The ability to control a large position with a smaller amount of capital." },
            { term: "Liquidity", definition: "The ability to buy or sell an asset quickly without affecting its price." },
            { term: "Limit Order", definition: "An order placed to buy or sell an asset at a specific price or better." },
            { term: "Long Position", definition: "A position taken in the expectation that the asset's price will rise." },
            { term: "Loss Aversion", definition: "The tendency for traders to prefer avoiding losses over acquiring equivalent gains." },
            { term: "Lags", definition: "A delay between a price move and the execution of a trade, often seen in high-frequency trading." },
            { term: "LIFO (Last In, First Out)", definition: "An inventory accounting method, also used in computing the cost basis of trades." },
            { term: "Liquidity Risk", definition: "The risk of an asset being difficult to buy or sell without affecting its market price." },
            { term: "Lookback Option", definition: "An exotic option that allows the holder to 'look back' at past prices to determine the payoff." },
            { term: "Lead Indicator", definition: "An economic or technical indicator that is used to predict future market movements." },
            { term: "Leverage Ratio", definition: "The ratio of borrowed capital to equity in a trading account." },
            { term: "Loss Cutting", definition: "A technique in risk management used to minimize losses on a position by exiting the trade early." },
            { term: "Limit Down", definition: "A situation in which the price of an asset is falling to the limit set by an exchange, often indicating panic selling." },
            { term: "Lender's Yield", definition: "The return on investment for those lending funds in margin trading or loans." },
            { term: "Liquidity Pool", definition: "A collection of funds used in decentralized finance (DeFi) platforms to provide liquidity for trades." }
        ],
        m: [
            { term: "Margin", definition: "The amount of money required to open and maintain a position in the market." },
            { term: "Market Order", definition: "An order placed to buy or sell an asset at the current market price." },
            { term: "Moving Average", definition: "A commonly used technical analysis tool that smooths out price data to identify trends." },
            { term: "Market Maker", definition: "A firm or individual that provides liquidity in a market by buying and selling assets." },
            { term: "Margin Call", definition: "A demand by a broker for additional funds to maintain an open position due to insufficient margin." },
            { term: "MACD (Moving Average Convergence Divergence)", definition: "A technical analysis indicator used to identify trend reversals." },
            { term: "Market Risk", definition: "The risk of losses due to market fluctuations." },
            { term: "Meme Coin", definition: "A cryptocurrency that gains popularity through social media trends and memes, often with little inherent value." },
            { term: "Mini Futures", definition: "A type of futures contract with a smaller contract size than regular futures." },
            { term: "Monetary Policy", definition: "The actions taken by a central bank to manage money supply and interest rates to influence the economy." },
            { term: "Market Depth", definition: "The volume of buy and sell orders in the order book of an asset." },
            { term: "Maturity Date", definition: "The date when a financial contract, like an option or bond, expires." },
            { term: "Money Flow Index (MFI)", definition: "A technical indicator that measures the flow of money into and out of an asset." },
            { term: "Momentum Trading", definition: "A strategy where traders buy assets that are trending upward and sell assets that are trending downward." },
            { term: "Minting", definition: "The process of creating new units of a cryptocurrency, typically associated with Proof-of-Work or Proof-of-Stake mechanisms." }
        ],
        n: [
            { term: "NAV (Net Asset Value)", definition: "The total value of a portfolio or investment fund, calculated by subtracting liabilities from assets." },
            { term: "Non-Farm Payroll (NFP)", definition: "A key economic indicator that measures the number of jobs added in the U.S. economy, excluding farm workers." },
            { term: "Negative Beta", definition: "A negative correlation between an asset's price movement and the market's overall movement." },
            { term: "Naked Option", definition: "A trading strategy where the trader sells options without owning the underlying asset." },
            { term: "Net Margin", definition: "The difference between revenue and expenses, representing the profitability of a company or trading strategy." },
            { term: "Net Worth", definition: "The total value of assets owned by an individual or firm, minus liabilities." },
            { term: "New Highs/Lows", definition: "Refers to assets reaching their highest or lowest price in a certain time frame." },
            { term: "Narrow Market", definition: "A market where there are few assets or limited trading activity, leading to lower liquidity." },
            { term: "Night Trading", definition: "The act of trading during off-market hours, typically outside of regular business hours." },
            { term: "Neutral Position", definition: "A trading strategy where no bias is held, and positions are taken in anticipation of price volatility rather than directional movement." },
            { term: "No-Load Fund", definition: "An investment fund that does not charge any sales commission or fees." },
            { term: "Net P&L", definition: "The net profit or loss in a trading account after accounting for all gains and expenses." },
            { term: "Noise", definition: "Random price fluctuations that do not contribute to a discernible market trend." },
            { term: "Non-Standard Contract", definition: "A derivative contract with terms that differ from conventional options or futures contracts." }
        ],
        o: [
            { term: "Options", definition: "Financial derivatives that give the buyer the right, but not the obligation, to buy or sell an asset at a predetermined price within a specific period." },
            { term: "Open Position", definition: "A trade that has been initiated but not yet closed." },
            { term: "Order Book", definition: "A list of all current buy and sell orders for an asset in the market." },
            { term: "Overbought", definition: "A condition where an asset is considered too expensive, often indicating a potential reversal." },
            { term: "Oversold", definition: "A condition where an asset is considered too cheap, often indicating a potential reversal." },
            { term: "Option Premium", definition: "The price paid for an option contract." },
            { term: "Order Execution", definition: "The process of completing an order for buying or selling an asset." },
            { term: "Out-of-the-Money", definition: "A term used for options that have no intrinsic value." },
            { term: "Open Interest", definition: "The total number of outstanding contracts in options or futures markets." },
            { term: "Options Strategy", definition: "A method or approach used to trade options, like straddle, strangle, or butterfly." },
            { term: "Over-the-Counter (OTC)", definition: "A type of market where assets are traded directly between two parties without being listed on an exchange." },
            { term: "Obligation", definition: "A trader's responsibility to fulfill an order, such as executing a trade or delivering the underlying asset in case of options trading." },
            { term: "Order Flow", definition: "The flow of buy and sell orders in the market, impacting liquidity and price movements." },
            { term: "Offset", definition: "A transaction that negates the effect of a previous one in the futures market." },
            { term: "Open Market Operations", definition: "Actions taken by central banks to control the money supply by buying or selling government bonds." }
        ],
        p: [
            { term: "Pip", definition: "The smallest price movement in forex markets, typically representing 0.0001 of a currency pair." },
            { term: "Prop Firm (Proprietary Trading Firm)", definition: "A company that uses its own capital to trade in various financial markets." },
            { term: "P&L (Profit and Loss)", definition: "A financial statement showing the profits and losses for a specific period." },
            { term: "Pullback", definition: "A short-term price movement against the prevailing trend, often seen as an opportunity to enter a trade." },
            { term: "Penny Stocks", definition: "Stocks that trade at very low prices, often under $5 per share, with higher volatility." },
            { term: "Position Size", definition: "The amount of capital allocated to a particular trade, determined by risk management rules." },
            { term: "Portfolio", definition: "A collection of financial assets held by an individual or institution." },
            { term: "Pivot Point", definition: "A technical analysis indicator used to determine potential support and resistance levels." },
            { term: "Put Option", definition: "An option that gives the buyer the right to sell an asset at a specified price within a specific time frame." },
            { term: "Price Action", definition: "The analysis of price movements on a chart to make trading decisions without relying on indicators." },
            { term: "Pyramid", definition: "A trading strategy where profits from successful trades are used to increase the size of the position." },
            { term: "Personal Account", definition: "An account held by an individual for personal trading, not under the management of a firm." },
            { term: "Pump and Dump", definition: "A fraudulent scheme where the price of an asset is artificially inflated and then sold off for profit." }
        ],
        q: [
            { term: "Quantitative Analysis (Quant)", definition: "The use of mathematical and statistical models to analyze financial markets and securities, often used in algorithmic trading." },
            { term: "Quantitative Easing (QE)", definition: "A monetary policy where a central bank buys government securities to increase the money supply and encourage lending and investment." },
            { term: "Quoting", definition: "The act of providing a buy and sell price for an asset or security." },
            { term: "Quote Currency", definition: "The second currency in a currency pair, representing how much of it is needed to buy one unit of the base currency." },
            { term: "Quick Ratio", definition: "A liquidity ratio that measures a company's ability to pay its short-term obligations with its most liquid assets." },
            { term: "Qualified Investor", definition: "An investor who meets specific financial criteria set by regulators, allowing them to invest in certain restricted financial products." },
            { term: "Quantitative Trader", definition: "A trader who uses algorithms and mathematical models to make decisions rather than relying on traditional methods like technical or fundamental analysis." },
            { term: "Quarterly Earnings", definition: "Financial reports released every three months by publicly traded companies detailing their earnings, expenses, and profits for that period." }
        ],
        r: [
            { term: "Risk Management", definition: "The process of identifying, assessing, and controlling potential losses in trading." },
            { term: "Rollover", definition: "The process of extending the settlement date of an open position, often used in forex markets when positions are held overnight." },
            { term: "Resistance", definition: "A price level at which an asset faces downward pressure, preventing its price from rising further." },
            { term: "Range", definition: "The difference between the high and low prices of an asset over a specified period." },
            { term: "Rebalancing", definition: "The process of adjusting the weight of assets in a portfolio to maintain the desired asset allocation." },
            { term: "Recession", definition: "A period of economic decline, typically defined by two consecutive quarters of negative GDP growth." },
            { term: "Return on Investment (ROI)", definition: "A measure of the profitability of an investment, calculated by dividing the net profit by the initial investment cost." },
            { term: "Risk-Reward Ratio", definition: "A ratio used by traders to measure the potential reward of a trade relative to its risk." },
            { term: "Roll Yield", definition: "The profit or loss generated from rolling over futures contracts, often used in commodities trading." },
            { term: "Repurchase Agreement (Repo)", definition: "A short-term loan agreement where one party sells an asset to another with the promise to repurchase it at a later date." },
            { term: "Range-Bound Market", definition: "A market where the price of an asset fluctuates within a defined range without breaking through resistance or support levels." },
            { term: "Realized P&L", definition: "The actual profit or loss made on a trade after it has been closed." },
            { term: "R-squared", definition: "A statistical measure that represents the correlation between the movement of an asset's price and a benchmark." },
            { term: "Risk Appetite", definition: "The amount of risk an investor or trader is willing to take on to achieve potential returns." }
        ],
        s: [
            { term: "Spread", definition: "The difference between the buy and sell price of an asset or the cost of executing a trade." },
            { term: "Scalping", definition: "A trading strategy that involves making many small trades over short time frames to capture small price movements." },
            { term: "Slippage", definition: "The difference between the expected price of a trade and the actual price at which the trade is executed." },
            { term: "Stop Loss", definition: "An order placed to automatically sell an asset at a predetermined price to limit potential losses." },
            { term: "Support", definition: "A price level at which an asset has a tendency to find buying interest, preventing the price from falling further." },
            { term: "Stock Split", definition: "A corporate action in which a company divides its existing shares into multiple shares, reducing the price per share while maintaining the total value." },
            { term: "Spread Betting", definition: "A form of speculation where traders bet on the price movement of an asset without owning it." },
            { term: "Swing Trading", definition: "A trading strategy that seeks to capture short- to medium-term price movements in an asset." },
            { term: "Synthetic Position", definition: "A position created by combining different financial instruments, such as options, to mimic the payoff of another asset or position." },
            { term: "Systematic Risk", definition: "The risk inherent to the entire market or a particular sector, which cannot be eliminated through diversification." },
            { term: "Support Level", definition: "A price level where a downtrend can be expected to pause due to a concentration of demand." },
            { term: "Sharpe Ratio", definition: "A measure of risk-adjusted return, used to evaluate the performance of an investment or trading strategy." },
            { term: "Settlement", definition: "The completion of a trade where the buyer pays for the asset and the seller delivers it." },
            { term: "Speculation", definition: "The act of making high-risk investments with the expectation of a significant return based on future price movements." }
        ],
        t: [
            { term: "Take Profit", definition: "An order placed to automatically sell an asset at a predetermined price to lock in profits once the price reaches that level." },
            { term: "Technical Analysis", definition: "The analysis of historical price movements and trading volumes to forecast future price movements." },
            { term: "Time Decay", definition: "The reduction in the value of options as time passes, especially as the expiration date nears." },
            { term: "Tick", definition: "The minimum price movement of an asset or security in the market." },
            { term: "Theta", definition: "A measure of the time decay of an option's value, representing the rate at which the option's value decreases as expiration approaches." },
            { term: "Trend", definition: "The general direction in which the price of an asset is moving, either upward (bullish) or downward (bearish)." },
            { term: "Trailing Stop", definition: "A type of stop-loss order that moves with the price, maintaining a set distance or percentage from the current price." },
            { term: "Tapering", definition: "The gradual reduction of the central bank's monetary stimulus, often following quantitative easing programs." },
            { term: "Token", definition: "A digital asset issued on a blockchain that can represent various forms of value, such as currency, assets, or rights." },
            { term: "T-bills", definition: "Short-term debt securities issued by the U.S. government with maturities of one year or less." },
            { term: "Tranche", definition: "A portion or segment of a larger financial product, often used in reference to structured products or debt securities." },
            { term: "Tick Size", definition: "The smallest possible price movement in a given market for a specific asset." },
            { term: "Theoretical Price", definition: "The estimated price of an asset or option based on models such as the Black-Scholes model for options pricing." },
            { term: "Treasury Bonds", definition: "Long-term debt securities issued by the U.S. government with maturities greater than 10 years." }
        ],
        u: [
            { term: "Underwriter", definition: "A financial institution or individual responsible for evaluating and assuming the risk of an investment or insurance policy." },
            { term: "Unrealized P&L", definition: "The profit or loss of an open trade, which has not yet been realized by closing the position." },
            { term: "Upside Potential", definition: "The maximum potential gain of an asset, often in reference to its price movement." },
            { term: "Underlying Asset", definition: "The asset upon which a derivative contract (such as an option or futures contract) is based." },
            { term: "Uptick", definition: "A price movement where the current price is higher than the previous price." },
            { term: "Utility Token", definition: "A type of cryptocurrency used within a specific platform to access certain features or services." },
            { term: "User Interface (UI)", definition: "The design and layout of a trading platform that allows users to interact with and execute trades." },
            { term: "Underperformance", definition: "When an asset or investment performs worse than expected or relative to a benchmark." }
        ],
        v: [
            { term: "Volatility", definition: "A statistical measure of the price fluctuations of an asset, indicating the level of risk involved." },
            { term: "Volume", definition: "The number of shares, contracts, or units traded in a given time period." },
            { term: "VIX (Volatility Index)", definition: "A market index that measures the level of implied volatility in the S&P 500 options market." },
            { term: "Virtual Currency", definition: "A digital form of currency that exists only in electronic form and has no physical counterpart." },
            { term: "Venture Capital", definition: "Financing provided to early-stage companies with high growth potential, often in exchange for equity." },
            { term: "Value Investing", definition: "A strategy that involves buying undervalued assets based on fundamental analysis and holding them for the long term." },
            { term: "Volatility Index (VIX)", definition: "A measure of market volatility, often referred to as the 'fear gauge.'" },
            { term: "VaR (Value at Risk)", definition: "A risk management measure that estimates the potential loss in value of a portfolio at a given confidence level over a specified time horizon." },
            { term: "Vanilla Options", definition: "Standard options contracts with simple terms, as opposed to more complex exotic options." },
            { term: "Venture Debt", definition: "A type of loan offered to startups and emerging businesses, typically in addition to venture capital funding." }
        ],
        w: [
            { term: "Whitepaper", definition: "A detailed document outlining the vision, technology, and operational framework of a cryptocurrency project or blockchain application." },
            { term: "Warrant", definition: "A security that gives the holder the right to purchase an asset at a specific price within a specified time frame." },
            { term: "Weak Hands", definition: "Traders or investors who panic and sell assets at the first sign of trouble, often leading to losses." },
            { term: "Whipsaw", definition: "A price movement in which an asset experiences rapid price changes in both directions, causing confusion and potential losses." },
            { term: "Wash Sale", definition: "A sale of an asset at a loss followed by the repurchase of the same or a similar asset, typically to avoid paying taxes on the loss." },
            { term: "Withdrawal", definition: "The process of taking funds out of a trading account." },
            { term: "Warrants", definition: "Options that give the holder the right to buy securities at a specific price for a specific time period." }
        ],
        x: [
            { term: "XIRR (Extended Internal Rate of Return)", definition: "A financial metric used to measure the performance of an investment, taking into account irregular time periods for cash flows." },
            { term: "X-Axis", definition: "The horizontal axis of a chart, typically representing time or price levels." },
            { term: "Xenocurrency", definition: "A foreign currency that is used in a country other than its issuing country." }
        ],
        y: [
            { term: "Yield", definition: "The income generated from an investment, expressed as a percentage of the investment's current value." },
            { term: "YTD (Year to Date)", definition: "A measurement of the performance or changes in an asset or portfolio from the beginning of the current calendar year." },
            { term: "Yen", definition: "The currency of Japan, often traded in the forex market." },
            { term: "Yield Curve", definition: "A graph that plots the interest rates of bonds with different maturities but the same credit quality, typically showing the relationship between short-term and long-term interest rates." }
        ],
        z: [
            { term: "Zero-Coupon Bond", definition: "A bond that does not pay periodic interest but is issued at a discount to its face value." },
            { term: "Z-Score", definition: "A statistical measure that quantifies the likelihood of an asset defaulting, often used in credit risk modeling." },
            { term: "Zeroth Order", definition: "Refers to a situation where there is no real interest rate in a model, often used in the context of options pricing." },
            { term: "Zero Day to Expiry (0DTE)", definition: "The period when an options contract is about to expire, with no time remaining." },
            { term: "Z-Spread", definition: "The spread over the risk-free rate used to value a bond with embedded options." }
        ]
    };

    const [activeIndex, setActiveIndex] = useState(0);
    const span = useRef(null);
    const container = useRef(null);

    useEffect(() => {

        var clickedBtn = container.current.querySelector(`#button-${activeIndex}`);
        if (clickedBtn && span.current) {
            span.current.style.left = `${clickedBtn.offsetLeft}px`;
            span.current.style.width = `${clickedBtn.offsetWidth}px`;
        }

    }, [activeIndex])

    return (
        <section className='glossary pt-[12rem]' ref={container}>
            <div className="container">
                <SectionHeading heading="Glossary" />

                <div className="package-navs w-full mx-auto mb-20 flex overflow-x-auto">
                    <ul className='flex items-center justify-between relative min-w-max w-full shrink-0 z-[2] border-1 border-[#004986] rounded-full'>
                        {alphabets.map((item, index) => (
                            <li key={index} className='w-full'><button id={`button-${index}`} onClick={() => setActiveIndex(index)} type='button' className={`text-[12px] sm:text-[16px] lg:text-[22px] text-[#FFFFFF] font-normal cursor-pointer rounded-full d-flex justify-center items-center w-[45px] h-[45px] md:px-4 transition uppercase ${activeIndex === index
                                ? 'active'
                                : ''
                                }`}>{item}</button></li>
                        ))}
                        <span ref={span} className='bg-border'></span>
                    </ul>
                </div>

                <div className="content-main-box">
                    {alphabets.map((item, index) => {
                        const letterData = glossaryData[item] || [];
                        return (
                            <div key={index} className={`content ${(activeIndex == index) ? '' : 'hidden'}`}>
                                <h2 className='mb-7 uppercase'>{item}</h2>

                                {letterData.length > 0 ? (
                                    letterData.map((entry, entryIndex) => (
                                        <div key={entryIndex}>
                                            <h4 className='text-[#FCFCFC] text-[20px] md:text-[24px] font-medium mb-2'>{entry.term}:</h4>
                                            <p className='text-[#FCFCFC] text-[16px] md:text-[18px] font-extralight mb-7'>{entry.definition}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className='text-[#FCFCFC] text-[16px] md:text-[18px] font-extralight'>No terms available for this letter.</p>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    )
}

export default Glossary