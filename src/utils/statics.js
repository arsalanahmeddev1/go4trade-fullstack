import flag from '../assets/images/flag.png';
import flag1 from '../assets/images/flag1.png';
import flag2 from '../assets/images/flag2.png';
import flag3 from '../assets/images/flag3.png';
import discord from '../assets/icons/discord.png';
import facebook from '../assets/icons/facebook.png';
import instagram from '../assets/icons/instagram.png';
import linkedin from '../assets/icons/linkedin.png';
import twitter from '../assets/icons/twitter.png';
import guide01 from '../assets/images/guides/guide-01.png';
import guide02 from '../assets/images/guides/guide-02.png';
import guide03 from '../assets/images/guides/guide-03.png';
import guide04 from '../assets/images/guides/guide-04.png';
import guide05 from '../assets/images/guides/guide-05.png';
import guide06 from '../assets/images/guides/guide-06.png';
import guide07 from '../assets/images/guides/guide-07.png';
import guide08 from '../assets/images/guides/guide-08.png';
import guide09 from '../assets/images/guides/guide-09.png';
import { Key1, Key2, Key3, Key4, Key5, ProTip1, ProTip2, ProTip3, ProTip4, ProTip5, ProTip6, ProTip7, ProTip8, ProTip9, Rules1, Rules10, Rules11, Rules2, Rules4, Rules5, Rules6, Rules7, Rules8, Rules9 } from '../assets';

export const navs = [
  { id: 0, name: 'Home', path: '/' },
  {
    id: 0,
    name: 'Learn',
    inner: [
      { name: 'Academy', path: '/academy' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Market Holidays/Hours', path: '/market-hours' },
      { name: 'Guides & E-book', path: '/guide' },
    ]
  },
  {
    id: 0,
    name: 'Trade',
    inner: [
      { name: 'How it works', path: '/packages' },
      { name: 'Challenges', path: '/challenges' },
      { name: 'Rules', path: '/general-rules' },
      { name: 'Calculators', path: '/trading-calculators' },
      { name: 'Limitless Plan', path: '/scaling-plan' },
      { name: 'Limitless Plan FAQs', path: '/scaling-plan' },
    ]
  },
  {
    id: 0,
    name: 'Grow',
    inner: [
      { name: 'Affiliate Program', path: '/affiliate-program' },
      { name: 'Affiliate FAQs', path: '/affiliate-program' },
    ]
  },
  {
    id: 0,
    name: 'Support',
    inner: [
      { name: 'FAQs', path: '/faqs' },
      { name: 'Contact us', path: '/contact-us' },
      { name: 'Live chat', path: '/404' },
      { name: 'Discord', path: 'https://discord.gg/G2PEumeRsB' },
    ]
  },
  {
    id: 0,
    name: 'More',
    inner: [
      { name: 'About us', path: '/about' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Careers', path: '/careers' },

      { name: 'Policies', path: '/privacy-policy' },
      { name: 'Community', path: 'https://discord.gg/G2PEumeRsB' },
    ]
  },

]

export const countrySlider = [
  { name: "Germany", img: flag },
  { name: "United States", img: flag1 },
  { name: "United Kingdom", img: flag2 },
  { name: "European Union", img: flag3 },
]

export const FooterSocials = [
  { link: "https://discord.gg/G2PEumeRsB", img: discord },
  { link: "https://www.instagram.com/go4tradescom/", img: instagram },
  { link: "https://twitter.com/Go4Tradescom", img: twitter },
  { link: "https://twitter.com/Go4Tradescom", img: facebook },
  { link: "https://twitter.com/Go4Tradescom", img: linkedin },
]


export const FooterQuickLinks = [
  { name: "Pricing & Plans", link: "/packages" },
  { name: "About us", link: "/about" },
  { name: "Testimonial", link: "#" },
  { name: "Academy", link: "/academy" },
]

export const FooterHelp = [
  { name: "Contact us", link: "#" },
  { name: "FAQs", link: "#" },
  { name: "Live chat", link: "#" },
]

export const FooterLegal = [
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Terms & Conditions", link: "/terms-condition" },
  { name: "AML Policy", link: "#" },
  { name: "Disclaimer", link: "#" },
  { name: "Risk Disclosure Statement", link: "#" },
]

// Footer navigation sections based on the image
export const FooterLearn = [
  { name: "Academy", link: "/academy" },
  { name: "Glossary", link: "/glossary" },
  { name: "Market holidays/ Market trading hours", link: "/market-hours" },
  { name: "Guides & Ebooks", link: "/guide" },
]

export const FooterTrade = [
  { name: "How it works", link: "/packages" },
  { name: "Challenges", link: "/challenges" },
  { name: "Rules", link: "/general-rules" },
  { name: "Calculator", link: "/trading-calculators" },
  { name: "Limitless Plan", link: "/scaling-plan" },
  { name: "Limitless Plan FAQs", link: "/scaling-plan" },
]

export const FooterGrow = [
  { name: "Affiliate Program", link: "/affiliate-program" },
  { name: "Affiliate Program FAQs", link: "/affiliate-program" },
]

export const FooterSupport = [
  { name: "Contact us", link: "/contact-us" },
  { name: "FAQs", link: "/faqs" },
  { name: "Live chat", link: "/404" },
]

export const FooterMore = [
  { name: "About us", link: "/about" },
  { name: "Blogs", link: "/blogs" },
  { name: "Careers", link: "/careers" },
  { name: "Community", link: "https://discord.gg/G2PEumeRsB" },
  { name: "Policies", link: "/privacy-policy" },
]
// packages data
export const packagesData = [
  {
    buttonName: "$8,000",
    packages: [
      {
        step: "1-Step",
        discountPrice: '$49',
        price: "$64",
        accounts: "8K Account",
        list: [
          { key: "Profit Target", value: "10%" },
          { key: "Leverage", value: "1:30" },
          { key: "Max Loss", value: "6%" },
          { key: "Daily Loss", value: "3%" },
          { key: "Reset Discount", value: "40%" },
          { key: "Swaps", value: "YES" },
          { key: "Payouts", value: "Bi-weekly" },
          { key: "Profit Split up to", value: "85%" },
          { key: "Refund", value: "70%" },
          { key: "Unlimited Trading Period", value: "Unlimited" },
          { key: "Minimum Trading Days", value: "5" },
          { key: "Expert Advisor", value: "Yes" },
          { key: "Trade copiers", value: "Yes" }
        ]
      },
      {
        step: "2-Step",
        price: "$72",
        discountPrice: '$55',
        accounts: "8K Account",
        gradient: 1,
        list: [
          { key: "Profit Target in step one", value: "8%" },
          { key: "Profit Target in step two", value: "5%" },
          { key: "Leverage", value: "1:100" },
          { key: "Max Loss", value: "8%" },
          { key: "Daily Loss", value: "5%" },
          { key: "Reset Discount", value: "40%" },
          { key: "Swaps", value: "YES" },
          { key: "Payouts", value: "Bi-weekly" },
          { key: "Profit Split up to", value: "85%" },
          { key: "Refund", value: "70%" },
          { key: "Unlimited Trading Period", value: "Unlimited" },
          { key: "Minimum Trading Days", value: "5" },
          { key: "Expert Advisor", value: "yes" },
          { key: "Trade copiers", value: "yes" }
        ]
      },
      {
        step: "Instant",
        price: "$89",
        discountPrice: '$69',
        accounts: "3K Account",
        list: [
          { key: "Profit Target", value: "no" },
          { key: "Leverage", value: "1:10" },
          { key: "Max Loss", value: "5%" },
          { key: "Daily Loss", value: "3%" },
          { key: "Swaps", value: "YES" },
          { key: "Payouts", value: "Bi-weekly" },
          { key: "Profit Split up to", value: "90%" },
          { key: "Minimum Trading Days", value: "7" },
          { key: "Expert Advisor", value: "yes" },
          { key: "Trade copiers", value: "yes" }
        ]
      }
    ]
  },
  {
    buttonName: "$15,000",
    packages: [
      {
        step: "1-Step",
        price: "$168",
        discountPrice: '$129',
        accounts: "15K Account",
        list: [
          { key: "Profit Target", value: "10%" },
          { key: "Leverage", value: "1:30" },
          { key: "Max Loss", value: "6%" },
          { key: "Daily Loss", value: "3%" },
          { key: "Reset Discount", value: "40%" },
          { key: "Swaps", value: "YES" },
          { key: "Payouts", value: "Bi-weekly" },
          { key: "Profit Split up to", value: "85%" },
          { key: "Refund", value: "80%" },
          { key: "Unlimited Trading Period", value: "Unlimited" },
          { key: "Minimum Trading Days", value: "5" },
          { key: "Expert Advisor", value: "Yes" },
          { key: "Trade copiers", value: "Yes" }
        ]
      },
      {
        step: "2-Step",
        price: "$179",
        discountPrice: '$139',
        accounts: "15K Account",
        gradient: 1,
        list: [
          { key: "Profit Target in step one", value: "8%" },
          { key: "Profit Target in step two", value: "5%" },
          { key: "Leverage", value: "1:100" },
          { key: "Max Loss", value: "8%" },
          { key: "Daily Loss", value: "5%" },
          { key: "Reset Discount", value: "40%" },
          { key: "Swaps", value: "YES" },
          { key: "Payouts", value: "Bi-weekly" },
          { key: "Profit Split up to", value: "85%" },
          { key: "Refund", value: "80%" },
          { key: "Unlimited Trading Period", value: "Unlimited" },
          { key: "Minimum Trading Days", value: "5" },
          { key: "Expert Advisor", value: "yes" },
          { key: "Trade copiers", value: "yes" }
        ]
      },
      {
        step: "Instant",
        price: "$229",
        discountPrice: '$175',
        accounts: "5K Account",
        list: [
          { key: "Profit Target", value: "no" },
          { key: "Leverage", value: "1:10" },
          { key: "Max Loss", value: "3%" },
          { key: "Daily Loss", value: "3%" },
          { key: "Swaps", value: "YES" },
          { key: "Payouts", value: "Bi-weekly" },
          { key: "Profit Split up to", value: "90%" },
          { key: "Minimum Trading Days", value: "7" },
          { key: "Expert Advisor", value: "yes" },
          { key: "Trade copiers", value: "yes" }
        ]
      }
    ]
  },
  {
    buttonName: "$30,000",
    packages: [
      {
        step: "1-Step",
        price: "$324",
        discountPrice: "$249",
        accounts: "30K Account",
        list: [
          { key: "Profit Target", value: "10%" },
          { key: "Leverage", value: "1:30" },
          { key: "Max Loss", value: "6%" },
          { key: "Daily Loss", value: "3%" },
          { key: "Reset Discount", value: "40%" },
          { key: "Swaps", value: "YES" },
          { key: "Payouts", value: "Bi-weekly" },
          { key: "Profit Split up to", value: "85%" },
          { key: "Refund", value: "90%" }
        ]
      },
      {
        step: "2-Step",
        price: "$349",
        discountPrice: "$269",
        accounts: "30K Account",
        gradient: 1,
        list: [
          { key: "Profit Target in step one", value: "8%" },
          { key: "Profit Target in step two", value: "5%" },
          { key: "Leverage", value: "1:100" },
          { key: "Max Loss", value: "8%" },
          { key: "Daily Loss", value: "5%" },
          { key: "Reset Discount", value: "40%" },
          { key: "Swaps", value: "YES" },
          { key: "Payouts", value: "Bi-weekly" },
          { key: "Profit Split up to", value: "85%" },
          { key: "Refund", value: "90%" }
        ]
      },
      {
        step: "Instant",
        price: "$439",
        discountPrice: "$399", // Adjusted from PDF inconsistency
        accounts: "15K Account",
        list: [
          { key: "Profit Target", value: "no" },
          { key: "Leverage", value: "1:10" },
          { key: "Max Loss", value: "3%" },
          { key: "Daily Loss", value: "3%" },
          { key: "Swaps", value: "YES" },
          { key: "Payouts", value: "Bi-weekly" },
          { key: "Profit Split up to", value: "90%" }
        ]
      },
    ]
  },
  {
    buttonName: "$50,000",
    packages: [
      {
        step: "1-Step",
        price: "$389",
        discountPrice: "$299",
        accounts: "50K Account",
        list: [
          { key: "Profit Target", value: "10%" },
          { key: "Leverage", value: "1:30" },
          { key: "Max Loss", value: "6%" },
          { key: "Daily Loss", value: "3%" },
          { key: "Reset Discount", value: "50%" },
          { key: "Swaps", value: "YES" },
          { key: "Payouts", value: "Bi-weekly" },
          { key: "Profit Split up to", value: "90%" },
          { key: "Refund", value: "95%" }
        ]
      },
      {
        step: "2-Step",
        price: "$415",
        discountPrice: "$319",
        accounts: "50K Account",
        gradient: 1,
        list: [
          { key: "Profit Target in step one", value: "8%" },
          { key: "Profit Target in step two", value: "5%" },
          { key: "Leverage", value: "1:100" },
          { key: "Max Loss", value: "8%" },
          { key: "Daily Loss", value: "5%" },
          { key: "Reset Discount", value: "50%" },
          { key: "Swaps", value: "YES" },
          { key: "Payouts", value: "Bi-weekly" },
          { key: "Profit Split up to", value: "90%" },
          { key: "Refund", value: "95%" }
        ]
      },
      {
        step: "Instant",
        price: "$519",
        discountPrice: "$399",
        accounts: "30K Account",
        list: [
          { key: "Profit Target", value: "no" },
          { key: "Leverage", value: "1:10" },
          { key: "Max Loss", value: "3%" },
          { key: "Daily Loss", value: "3%" },
          { key: "Swaps", value: "YES" },
          { key: "Payouts", value: "Bi-weekly" },
          { key: "Profit Split up to", value: "90%" }
        ]
      }
    ]
  },
  {
    buttonName: "$100,000",
    packages: [
      {
        step: "1-Step",
        price: "$688",
        discountPrice: "$529",
        accounts: "100K Account",
        list: [
          { key: "Profit Target", value: "10%" },
          { key: "Leverage", value: "1:30" },
          { key: "Max Loss", value: "6%" },
          { key: "Daily Loss", value: "3%" },
          { key: "Reset Discount", value: "50%" },
          { key: "Swaps", value: "YES" },
          { key: "Payouts", value: "Bi-weekly" },
          { key: "Profit Split up to", value: "90%" },
          { key: "Refund", value: "100%" }
        ]
      },
      {
        step: "2-Step",
        price: "$713",
        discountPrice: "$549",
        accounts: "100K Account",
        gradient: 1,
        list: [
          { key: "Profit Target in step one", value: "8%" },
          { key: "Profit Target in step two", value: "5%" },
          { key: "Leverage", value: "1:100" },
          { key: "Max Loss", value: "8%" },
          { key: "Daily Loss", value: "5%" },
          { key: "Reset Discount", value: "50%" },
          { key: "Swaps", value: "YES" },
          { key: "Payouts", value: "Bi-weekly" },
          { key: "Profit Split up to", value: "90%" },
          { key: "Refund", value: "100%" }
        ]
      },
      {
        step: "Instant",
        price: "$889",
        discountPrice: "$685",
        accounts: "50K Account",
        list: [
          { key: "Profit Target", value: "no" },
          { key: "Leverage", value: "1:10" },
          { key: "Max Loss", value: "3%" },
          { key: "Daily Loss", value: "3%" },
          { key: "Swaps", value: "YES" },
          { key: "Payouts", value: "Bi-weekly" },
          { key: "Profit Split up to", value: "90%" }
        ]
      }
    ]
  },

   {
    buttonName: "$200,000",
    packages: [
      {
        step: "1-Step",
        price: "$1,299",
        discountPrice: "$999",
        accounts: "200K Account",
        list: [
          { key: "Profit Target", value: "10%" },
          { key: "Leverage", value: "1:30" },
          { key: "Max Loss", value: "6%" },
          { key: "Daily Loss", value: "3%" },
          { key: "Reset Discount", value: "50%" },
          { key: "Swaps", value: "YES" },
          { key: "Payouts", value: "Bi-weekly" },
          { key: "Profit Split up to", value: "90%" },
          { key: "Refund", value: "100%" }
        ]
      },
      {
        step: "2-Step",
        price: "$1,429",
        discountPrice: "$1,099",
        accounts: "200K Account",
        gradient: 1,
        list: [
          { key: "Profit Target in step one", value: "8%" },
          { key: "Profit Target in step two", value: "5%" },
          { key: "Leverage", value: "1:100" },
          { key: "Max Loss", value: "8%" },
          { key: "Daily Loss", value: "5%" },
          { key: "Reset Discount", value: "50%" },
          { key: "Swaps", value: "YES" },
          { key: "Payouts", value: "Bi-weekly" },
          { key: "Profit Split up to", value: "90%" },
          { key: "Refund", value: "100%" }
        ]
      }
    ]
  },
]

export const generalRules = [
  {
    buttonName: "What’s Allowed",
    boxes: [
      {
        heading: "Copy Trading",
        para: "You can copy trades from your own Go4Trades account, which will serve as your Master account. However, copying trades from other individuals’ accounts to your Go4Trades account is not permitted. This ensures that your performance reflects your own trading skills.",
        img: Rules1,
      },
      {
        heading: "High-Impact News",
        para: "You can keep your trades open during high-impact news, but you can’t open or close any trades within 5 minutes before or after the news release. Stay focused and plan ahead.",
        img: Rules2,
      },
      {
        heading: "Trade Through the Weekend",
        para: "You’re free to hold your trades over the weekend, giving you the flexibility to capture opportunities, even when the markets are officially closed.",
        img: Rules5,
      },
      {
        heading: "Expert Advisors are your trading ally",
        para: `We encourage you to enhance your trading journey with the help of Expert Advisors (EAs). These tools are designed to support your strategies and streamline your trading activities. Here are some rules to keep things fair: <br />
        <strong>Allowed:</strong> You’re welcome to use EAs that complement and support your personal trading decisions.<br />
        <strong>Not Allowed:</strong> EAs that automate the Trading Challenge or complete it on your behalf are not allowed. The challenge is designed to evaluate your skills, so autonomous scripts or software are strictly prohibited.<br />
        Remember, the goal is to demonstrate your trading ability. Make sure any EA you use supports your personal strategy.`,
        img: Rules4,
      },
    ]
  },
  {
    buttonName: "What’s Not Allowed",
    boxes: [
      {
        heading: "Arbitrage Trading",
        para: `<strong>Hedge Arbitrage</strong> This involves placing two offsetting trades to manage risk, like balancing opposing bets to secure potential profit in both directions.<br />
        <strong>Reverse Arbitrage</strong> It’s when you buy an asset at a lower price in one market and sell it at a higher price in another, taking advantage of price variations between markets.<br />
        <strong> Latency Arbitrage</strong> This strategy focuses on exploiting market delays by executing trades based on faster access to price data, aiming to capitalize on brief moments of opportunity. <br />
        These strategies are limited to promoting fairness and preventing the exploitation of market inefficiencies.`,
        img: Rules5,
      },
      {
        heading: "HFT",
        para: "High-Frequency Trading (HFT) uses sophisticated algorithms and high-speed computing to carry out multiple trades in fractions of a second, capitalizing on small price variations. While it provides liquidity to the market, it has raised concerns regarding fairness and increased volatility. Trading with intervals of less than five seconds is prohibited. By limiting such rapid trading, we promote strategies that are focused on long-term stability and minimize the risk of market manipulation.",
        img: Rules4,
      },
      {
        heading: "40% Margin Rule",
        para: `To ensure responsible risk management and prevent overexposure, we restrict the use of more than 40% of your available margin on a single trade or multiple trades on the same asset in the same direction. <br />
        One-Sided Risk: This strategy involves using a large portion of your available margin on a single trade or multiple trades on the same asset, all betting the market will move in one direction. This increases the risk significantly.<br /><br />
        <strong>Available Margin:</strong> The funds in your account that are available to open new positions. It’s calculated based on your account balance, leverage, and margin requirements of any open trades.<br /><br />
        <strong>Leverage:</strong> Leverage allows you to control larger trades with a smaller capital. For example, 1:125 leverage lets you control a trade worth 125 times your investment, while 1:40 leverage controls a trade worth 40 times your investment.<br /><br />
        <strong>Single or Multiple Trades on the Same Instrument:</strong> This means making one large trade or several smaller trades, all betting on the same market direction (buy or sell) for the same instrument.`,
        img: Rules6,
      },
      {
        heading: "Application of the Rule",
        para: `<strong>$100,000 Account with 1:125 Leverage:</strong><br /><br />
        <strong>Total Trading Power:</strong> With 1:125 leverage, your $100,000 allows you to control up to $12,500,000 in positions ($100,000 * 125).<br />
        <strong>40% Margin Rule:</strong> You are restricted from using more than 40% of your available margin for any single trade or multiple trades on the same instrument in the same direction. This limits your commitment to $5,000,000 ($12,500,000 * 40%) for any one trade or group of trades.<br />
        <strong>Max Lot Size for a Trade:</strong> If each lot is valued at $100,000, the maximum lot size you can take is 50 lots ($5,000,000 / $100,000).<br /><br />
        <strong>$100,000 Account with 1:40 Leverage:</strong><br /><br />
        <strong>Total Trading Power:</strong> With 1:40 leverage, your $100,000 gives you control over positions worth up to $4,000,000 ($100,000 * 40)<br />
        <strong>40% Margin Rule:</strong> You can’t allocate more than 40% of your margin to a single trade or multiple trades on the same instrument in the same direction. This means the most you can commit is $1,600,000 ($4,000,000 * 40%) for any one trade or set of trades.<br />
        <strong>Max Lot Size for a Trade:</strong> With each lot valued at $100,000, the maximum lot size you can handle is 16 lots ($1,600,000 / $100,000).`,
        img: Rules4,
      },
      {
        heading: "Grid Trading",
        para: `Grid trading involves placing a series of buy and sell orders at fixed price levels, allowing you to take advantage of market movements and volatility. This strategy works in both rising and falling markets but can be seen as a risk in certain environments. It's important to note that it may be restricted in some cases due to concerns about market manipulation or exploiting market inefficiencies. By limiting this strategy, we make sure that everyone has access to the same resources and operates under the same conditions, maintaining a level playing field for all.`,
        img: Rules1,
      },
      {
        heading: "Tick Scalping",
        para: `Tick scalping, a strategy focused on capturing rapid price changes (or "ticks") within seconds to minutes, can be highly effective but is restricted for your benefit. While it may seem attractive for quick profits, the need for constant monitoring and rapid decision-making can increase the risk of impulsive trades and higher volatility exposure. To ensure a more controlled and stable approach, tick scalping is limited, helping you focus on strategies that support long-term growth and stability.`,
        img: Rules7,
      },
      {
        heading: "Use of Automated Bots",
        para: `The use of bots and emulators is prohibited.<br />
        To help you develop your skills and ensure fair evaluation, the use of automated bots and emulators is restricted. All trades must be placed manually to focus on enhancing your personal trading abilities.`,
        img: Rules8,
      },
      {
        heading: "Personal Account Integrity",
        para: `To maintain the integrity of your account and ensure fair evaluation, we require that all trades are made under your own name and ideally from the same IP address. Sharing your password or granting account access to others can jeopardize your account and may lead to its closure. This policy is in place to protect you and your trading journey.`,
        img: Rules9,
      },
      {
        heading: "Hedging",
        para: `Hedging is allowed to manage risk, but it is important to note that hedging between multiple accounts, especially across different challenges, is not permitted. This ensures a fair and consistent evaluation of your individual trading performance, preventing any unfair advantage or conflict between accounts.`,
        img: Rules10,
      },
      {
        heading: "Gambling",
        para: `In order to foster responsible and sustainable trading practices, we do not allow actions that resemble gambling, such
as high-risk behavior and impulsive decisions. These practices, including overleveraging, one-sided bets, and
unrealistic profit targets, can jeopardize both your account and the integrity of the challenge. <br />
Identifying Risky Practices: <br />
<strong>Overleveraging:</strong> Taking on excessive risk without a well-thought-out strategy or proper risk management. <br />
<strong>One-Sided Betting:</strong> Focusing on large trades for high payouts without proper market analysis. <br />
<strong>Account Rolling:</strong> Continuously starting new challenges with high-risk strategies, disregarding safe trading principles. <br />
<strong>Passing Challenge with One Trade:</strong> We do not allow achieving the challenge’s profit target with a single large trade or a
series of trades on the same symbol that exceeds 70% of the profit target. This ensures we can properly assess your
consistency and skill over time.
These guidelines are in place to ensure that your trading journey remains structured, consistent, and based on real
skills rather than high-risk actions. <br /><br />

<strong>We reserve the right to reset a trader’s challenge or apply specific regulations to individual accounts based on
observed trading patterns and behaviors. If necessary, we may impose certain limitations or requirements on accounts to
ensure compliance.</strong> <br /><br />

These measures are implemented to promote a trading environment that values long-term strategies and effective risk
management over quick profits and high-risk approaches. Our goal is to maintain the integrity of the trading process and
encourage all participants to engage in responsible, thoughtful trading practices.<br /><br />
 
<strong>What Happens If I Break the Rules?</strong><br />
- A serious violation may lead to removal from the challenge and closure of your accounts. <br />
- We understand that mistakes happen and evaluate each situation individually, distinguishing between intentional and
unintentional errors.`,
        img: Rules11,
      },
    ]
  }
]

export const GrowthData = [
  {
    buttonName: "Start",
    inital: "$400,000",
    account_growth: "-",
    maxLoss: "$20,000",
    dailyLoss: "$8,000",
  },
  {
    buttonName: "4 month",
    inital: "$560,000",
    account_growth: "+40%",
    maxLoss: "$28,000",
    dailyLoss: "$11,200",
  },
  {
    buttonName: "8 month",
    inital: "$784,000",
    account_growth: "+40%",
    maxLoss: "$39,200",
    dailyLoss: "$15,680",
  },
  {
    buttonName: "12 month",
    inital: "$1,097,600",
    account_growth: "+40%",
    maxLoss: "$54,880",
    dailyLoss: "$21,952",
  },
  {
    buttonName: "16 month",
    inital: "$1,536,640",
    account_growth: "+40%",
    maxLoss: "$76,832",
    dailyLoss: "$30,732",
  },
]

export const ScalingPlanKeys = [
  {
    heading: "Initial Capital Allocation ",
    para: "Your journey begins with a smart starting point. When you showcase your trading skills and strategy in the demo phase, we trust you with capital to grow. Prove your ability, and we'll support your success.",
    img: Key5
  },
  {
    heading: "Performance Milestones",
    para: "Reach key targets like profit percentages, drawdown limits, and consistent performance. These milestones aren't just numbers—they’re your ticket to bigger rewards and faster growth.",
    img: Key4
  },
  {
    heading: "Scaling Increments",
    para: "As you hit milestones, we increase your capital. It’s like leveling up in a game! A 25% increase every 4 months when you hit a 10% profit target—your progress fuels bigger opportunities.",
    img: Key3
  },
  {
    heading: "Risk Parameters",
    para: "Keep your gains protected with smart risk management—only risking 1-2% per trade. This ensures your journey to growth remains steady and controlled, even as you scale.",
    img: Key2
  },
  {
    heading: "Psychological Preparation",
    para: "Scaling up isn't just about numbers—it’s about mindset. Stay calm, focused, and disciplined as you grow. You’ve got this! Remember, a strong mind leads to bigger wins.",
    img: Key1
  },
]

export const ChallengeTable = [
  {
    ButtonName: "1-step",
    TableHeadContent: ["$8,000", "$15,000", "$30,000", "$50,000", "$100,000", "$200,000"],
    TableContent: [
      {
        main: "Profit Target in %",
        data: ["10%", "10%", "10%", "10%", "10%", "10%"]
      },
      {
        main: "Leverage",
        data: ["1:30", "1:30", "1:30", "1:30", "1:30", "1:30"]
      },
      {
        main: "Max Loss in %",
        data: ["6%", "6%", "6%", "6%", "6%", "6%"]
      },
      {
        main: "Daily Loss in %",
        data: ["3%", "3%", "3%", "3%", "3%", "3%"]
      },
      {
        main: "Reset discount %",
        data: ["40%", "40%", "40%", "50%", "50%", "50%"]
      },
      {
        main: "Swaps",
        data: ["YES", "YES", "YES", "YES", "YES", "YES"]
      },
      {
        main: "Payouts",
        data: ["Bi-weekly", "Bi-weekly", "Bi-weekly", "Bi-weekly", "Bi-weekly", "Bi-weekly"]
      },
      {
        main: "Profit Split up to",
        data: ["85%", "85%", "85%", "90%", "90%", "90%"]
      },
      {
        main: "Refund",
        data: ["70%", "80%", "90%", "95%", "100%", "100%"]
      },
      {
        main: "Price",
        data: ["$64", "$168", "$324", "$389", "$688", "$1,299"]
      },
      {
        main: "Discount Price (30%) ",
        data: ["$49", "$129", "$249", "$299", "$529", "$999"]
      },
    ],
    Includes: [
      {
        key: 'Unlimited Trading Period',
        value: 'Unlimited'
      },
      {
        key: 'Minimum Trading Days',
        value: '5'
      },
      {
        key: 'Expert Advisor ',
        value: 'Yes'
      },
      {
        key: 'Trade copiers',
        value: 'Yes'
      },
    ]
  },
  {
    ButtonName: "2-step",
    TableHeadContent: ["$8,000", "$15,000", "$30,000", "$50,000", "$100,000", "$200,000"],
    TableContent: [
      {
        main: "Profit Target in step one",
        data: ["8%", "8%", "8%", "8%", "8%", "8%"]
      },
      {
        main: "Profit Target in step two",
        data: ["5%", "5%", "5%", "5%", "5%", "5%"]
      },
      {
        main: "Leverage",
        data: ["1:100", "1:100", "1:100", "1:100", "1:100", "1:100"]
      },
      {
        main: "Max Loss ",
        data: ["8%", "8%", "8%", "8%", "8%", "8%"]
      },
      {
        main: "Daily Loss",
        data: ["5%", "5%", "5%", "5%", "5%", "5%"]
      },
      {
        main: "Reset discount",
        data: ["40%", "40%", "40%", "50%", "50%", "50%"]
      },
      {
        main: "Swaps",
        data: ["YES", "YES", "YES", "YES", "YES", "YES"]
      },
      {
        main: "Payouts",
        data: ["Bi-weekly", "Bi-weekly", "Bi-weekly", "Bi-weekly", "Bi-weekly", "Bi-weekly"]
      },
      {
        main: "Profit Split up to",
        data: ["85%", "85%", "85%", "90%", "90%", "90%"]
      },
      {
        main: "Refund",
        data: ["70%", "80%", "90%", "95%", "100%", "100%"]
      },
      {
        main: "Price",
        data: ["$72", "$179", "$349", "$415", "$713", "$1,429"]
      },
      {
        main: "Discount Price (30%) ",
        data: ["$55", "$139", "$269", "$319", "$549", "$1,099"]
      },
    ],
    Includes: [
      {
        key: 'Trading Period',
        value: 'Unlimited'
      },
      {
        key: 'Minimum Trading Days',
        value: '5'
      },
      {
        key: 'Expert Advisor',
        value: 'Yes'
      },
      {
        key: 'Trade copiers',
        value: 'Yes'
      },
    ]
  },
  {
    ButtonName: "Instant Funded",
    TableHeadContent: ["$3,000", "$5,000", "$15,000", "$30,000", "$50,000"],
    TableContent: [
      {
        main: "Profit Target ",
        data: ["no", "no", "no", "no", "no"]
      },
      {
        main: "Leverage",
        data: ["1:10", "1:10", "1:10", "1:10", "1:10"]
      },
      {
        main: "Max Loss",
        data: ["5%", "3%", "3%", "3%", "3%"]
      },
      {
        main: "Daily Loss",
        data: ["3%", "3%", "3%", "3%", "3%"]
      },
      {
        main: "Payouts",
        data: ["Bi-weekly", "Bi-weekly", "Bi-weekly", "Bi-weekly", "Bi-weekly"]
      },
      {
        main: "Profit Split up to ",
        data: ["90%", "90%", "90%", "90%", "90%"]
      },
      {
        main: "Price",
        data: ["$89", "$229", "$439", "$519", "$889"]
      },
      {
        main: "Discount Price (30%)",
        data: ["$69", "$175", "$519", "$399", "$685"]
      },
    ],
    Includes: [
      {
        key: 'Trading Period',
        value: 'Unlimited'
      },
      {
        key: 'Minimum Trading Days',
        value: '7'
      },
      {
        key: 'Expert Advisor ',
        value: 'Yes'
      },
      {
        key: 'Trade copiers',
        value: 'Yes'
      },
    ]
  },
]

export const marketHolidays = [
  {
    holiday: 'New Year’s Day ',
    affectedMarket: 'All major markets',
    month: 'January 1',
  },
  {
    holiday: 'Good Friday',
    affectedMarket: 'Most global markets ',
    month: 'April 18',
  },
  {
    holiday: 'Easter Monday',
    affectedMarket: 'Europe, Australia',
    month: 'April 21',
  },
  {
    holiday: 'Labor Day',
    affectedMarket: 'Europe',
    month: 'May 1',
  },
  {
    holiday: 'Independence Day',
    affectedMarket: 'U.S. (NYSE, NASDAQ)',
    month: 'July 4',
  },
  {
    holiday: 'Summer Bank Holiday',
    affectedMarket: 'UK (London)',
    month: 'August 25',
  },
  {
    holiday: 'Thanksgiving',
    affectedMarket: 'U.S.',
    month: 'November 27',
  },
  {
    holiday: 'Christmas Day',
    affectedMarket: 'Global',
    month: 'December 25',
  },
  {
    holiday: 'Boxing Day ',
    affectedMarket: 'UK, Canada, Australia ',
    month: 'December 26',
  },
]


export const marketHours = [
  {
    market: 'Sydney',
    openingHours: '10:00 PM – 7:00 AM ',
    notes: 'Kicks off the trading week',
    color: '#004986',
  },
  {
    market: 'Tokyo',
    openingHours: '12:00 AM – 9:00 AM ',
    notes: 'Major Asian market ',
    color: '#684BD3',
  },
  {
    market: 'London',
    openingHours: '8:00 AM – 5:00 PM ',
    notes: 'High volatility, overlaps with NY ',
    color: '#80DBB4',
  },
  {
    market: 'New York',
    openingHours: '1:00 PM – 10:00 PM ',
    notes: 'Second-largest volume; overlaps London ',
    color: '#4831B5',
  },
]

export const proTips = [
  {
    img: ProTip1,
    heading: 'Trade during peak volatility:',
    para: 'London/New York overlap is your best friend. '
  },
  {
    img: ProTip2,
    heading: 'Stick to a session:',
    para: 'Overtrading across time zones leads to burnout, not profits'
  },
  {
    img: ProTip3,
    heading: 'Journal everything:',
    para: 'The trades you hate looking at are the ones you’ll learn from.'
  },
  {
    img: ProTip4,
    heading: 'Avoid news bombs: ',
    para: 'High-impact events can wreck clean setups. Know when to stay out.  '
  },
  {
    img: ProTip5,
    heading: 'Have a “no-trade” day rule:',
    para: 'Forcing trades just to feel productive will cost you.'
  },
  {
    img: ProTip6,
    heading: 'Risk small, scale fast:',
    para: 'Consistency beats big wins in prop firm challenges.'
  },
  {
    img: ProTip7,
    heading: 'End-of-day review = non-negotiable:',
    para: 'Check your stats, mindset, and plan for tomorrow'
  },
  {
    img: ProTip8,
    heading: 'Less is more:',
    para: 'One crisp setup a day > five random FOMO trades.'
  },
  {
    img: ProTip9,
    heading: 'Volume ≠ Volatility:',
    para: 'Markets may open but behave differently around major events. '
  },
]

export const careerCardContent = [
  {
    shiftTime: 'Full Time / Part Time',
    title: 'Marketing Adviser',
    para: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    link: './localhost', 
    linkText: 'Apply Now',
  },
  {
    shiftTime: 'Full Time / Part Time',
    title: 'Supervisor',
    para: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    link: './localhost',
    linkText: 'Apply Now',
  },
  {
    shiftTime: 'Full Time / Part Time',
    title: 'Field Agent',
    para: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    link: './localhost',
    linkText: 'Apply Now',
  },
  {
    shiftTime: 'Full Time / Part Time',
    title: 'Receptionist',
    para: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    link: './localhost',
    linkText: 'Apply Now',
  },
]

export const careersBottomCardsContent = [
  {
    title: 'Award Winning',
    para: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt'
  },
  {
    title: 'Well Allowance',
    para: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt'
  },
  {
    title: 'Full Insurance',
    para: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt'
  },
]

export const guideCardsContent = [
  {
    title: 'What Is Prop Trading?',
    link: '/pdf/guide-01.pdf',
    linkText: 'DOWNLOAD',
    img: guide01,
  },
  {
    title: 'Choosing the Best Prop Firm',
    link: '/pdf/guide-02.pdf',
    linkText: 'DOWNLOAD',
    img: guide02,
  },
  {
    title: ' A Guide for New & Experienced Traders with Go4Trades',
    link: '/pdf/guide-03.pdf',
    linkText: 'DOWNLOAD',
    img: guide03,
  },
  {
    title: 'Why Choose Go4Trades Over Brokers?',
    link: '/pdf/guide-04.pdf',
    linkText: 'DOWNLOAD',
    img: guide04,
  },
  {
    title: 'Understanding Prop Firm Payouts and  Reward Sharing with Go4Trades',
    link: '/pdf/guide-05.pdf',
    linkText: 'DOWNLOAD',
    img: guide05,
  },
  {
    title: 'Mastering Forex Charts & Trading Strategies with Go4Trades',
    link: '/pdf/guide-06.pdf',
    linkText: 'DOWNLOAD',
    img: guide06,
  },
  {
    title: 'The Real Game: Mastering Your Mind While Trading',
    link: '/pdf/guide-07.pdf',
    linkText: 'DOWNLOAD',
    img: guide07,
  },
  {
    title: 'Choose Your Playground: Exploring Popular Asset Classes',
    link: '/pdf/guide-08.pdf',
    linkText: 'DOWNLOAD',
    img: guide08,
  },
  {
    title: 'Choosing a Prop Firm: Why Go4Trades?',
    link: '/pdf/guide-09.pdf',
    linkText: 'DOWNLOAD',
    img: guide09,
  },
  
]

export const CanvasImages = `
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(1).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(2).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(3).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(4).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(5).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(6).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(7).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(8).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(9).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(10).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(11).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(12).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(13).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(14).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(15).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(16).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(17).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(18).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(19).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(20).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(21).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(22).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(23).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(24).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(25).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(26).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(27).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(28).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(29).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(30).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(31).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(32).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(33).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(34).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(35).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(36).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(37).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(38).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(39).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(40).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(41).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(42).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(43).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(44).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(45).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(46).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(47).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(48).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(49).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(50).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(51).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(52).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(53).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(54).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(55).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(56).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(57).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(58).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(59).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(60).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(61).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(62).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(63).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(64).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(65).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(66).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(67).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(68).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(69).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(70).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(71).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(72).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(73).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(74).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(75).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(76).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(77).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(78).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(79).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(80).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(81).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(82).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(83).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(84).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(85).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(86).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(87).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(88).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(89).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(90).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(91).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(92).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(93).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(94).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(95).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(96).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(97).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(98).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(99).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(100).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(101).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(102).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(103).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(104).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(105).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(106).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(107).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(108).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(109).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(110).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(111).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(112).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(113).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(114).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(115).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(116).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(117).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(118).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(119).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(120).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(121).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(122).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(123).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(124).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(125).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(126).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(127).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(128).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(129).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(130).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(131).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(132).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(133).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(134).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(135).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(136).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(137).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(138).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(139).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(140).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(141).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(142).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(143).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(144).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(145).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(146).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(147).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(148).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(149).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(150).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(151).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(152).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(153).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(154).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(155).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(156).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(157).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(158).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(159).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(160).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(161).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(162).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(163).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(164).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(165).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(166).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(167).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(168).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(169).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(170).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(171).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(172).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(173).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(174).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(175).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(176).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(177).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(178).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(179).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(180).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(181).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(182).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(183).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(184).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(185).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(186).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(187).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(188).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(189).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(190).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(191).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(192).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(193).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(194).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(195).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(196).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(197).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(198).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(199).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(200).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(201).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(202).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(203).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(204).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(205).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(206).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(207).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(208).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(209).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(210).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(211).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(212).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(213).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(214).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(215).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(216).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(217).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(218).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(219).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(220).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(221).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(222).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(223).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(224).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(225).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(226).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(227).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(228).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(229).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(230).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(231).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(232).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(233).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(234).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(235).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(236).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(237).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(238).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(239).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(240).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(241).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(242).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(243).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(244).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(245).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(246).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(247).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(248).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(249).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(250).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(251).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(252).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(253).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(254).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(255).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(256).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(257).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(258).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(259).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(260).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(261).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(262).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(263).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(264).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(265).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(266).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(267).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(268).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(269).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(270).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(271).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(272).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(273).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(274).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(275).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(276).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(277).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(278).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(279).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(280).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(281).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(282).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(283).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(284).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(285).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(286).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(287).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(288).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(289).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(290).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(291).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(292).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(293).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(294).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(295).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(296).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(297).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(298).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(299).jpg
/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(300).jpg
`