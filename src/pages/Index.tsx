import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Statistics from '@/components/Statistics'
import Dashboard from '@/components/Dashboard'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Team from '@/components/Team'
import OurWork from '@/components/OurWork'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Statistics />
      <Dashboard />
      <Pricing />
      <Testimonials />
      <Team />
      <OurWork />
      <FAQ />
      <CTASection />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Index
