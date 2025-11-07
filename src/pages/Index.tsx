import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Statistics from '@/components/Statistics'
import Pricing from '@/components/Pricing'
import Dashboard from '@/components/Dashboard'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import OurWork from '@/components/OurWork'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Statistics />
      <Pricing />
      <Dashboard />
      <Team />
      <Testimonials />
      <OurWork />
      <FAQ />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  )
}

export default Index
