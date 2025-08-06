import { Routes, Route } from 'react-router-dom'
// import './styles/index.css'
import Layout from './Layouts/Layout'
import { Challenges, GeneralRules, Home, NotFound, PricavyPolicy, ScalingPlan, TermsCondition, Glossary, Academy, AffiliateProgram, Guide, Calculators, Packages, MarketHours, Blogs, Contact, Careers, Faq, FaqDetail, BlogsDetail } from './pages';
import { About } from './pages';
import SmoothLayout from './components/ScrollSmoother';
import ScrollTriggerRefresher from './components/ScrollTriggerRefresher';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <SmoothLayout >
      <Layout>
      <ScrollToTop />
        <ScrollTriggerRefresher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/general-rules" element={<GeneralRules />} />
          <Route path="/scaling-plan" element={<ScalingPlan />} />
          <Route path="/packages" element={<Challenges />} />
          <Route path="/privacy-policy" element={<PricavyPolicy />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/affiliate-program" element={<AffiliateProgram />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/trading-calculators" element={<Calculators />} />
          <Route path="/challenges" element={<Packages />} />
          <Route path="/market-hours" element={<MarketHours />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogsDetail />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/faqs/:slug" element={<FaqDetail />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Layout>
    </SmoothLayout>
  )
}

export default App
