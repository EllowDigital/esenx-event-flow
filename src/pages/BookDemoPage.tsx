import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Users, Building, Mail, Phone, User, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import FormSuccess from '@/components/FormSuccess'
import Footer from '@/components/Footer'

const BookDemoPage = () => {
  const navigate = useNavigate()
  const [showSuccess, setShowSuccess] = useState(false)

  return (
    <>
      <div className="min-h-screen bg-gradient-hero">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <Button variant="ghost" onClick={() => navigate('/')} className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </header>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold">
                Book Your <span className="text-primary">Free Demo</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                See Esenyx in action. Schedule a personalized demo with our team and discover how we
                can transform your event management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl shadow-2xl border border-border p-8 md:p-12"
            >
              <form
                action="https://formsubmit.co/ellowdigitalindia@gmail.com"
                method="POST"
                onSubmit={() => {
                  setTimeout(() => setShowSuccess(true), 100)
                }}
                className="space-y-6"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Demo Request - Esenyx" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_next"
                  value={`${window.location.origin}/book-demo?success=true`}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
                      <User className="w-4 h-4 text-primary" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                      <Mail className="w-4 h-4 text-primary" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      maxLength={255}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
                      <Phone className="w-4 h-4 text-primary" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      maxLength={20}
                      pattern="[0-9+\-\s()]+"
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Organization */}
                  <div className="space-y-2">
                    <label
                      htmlFor="organization"
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <Building className="w-4 h-4 text-primary" />
                      Organization *
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      required
                      maxLength={150}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Your Company Name"
                    />
                  </div>

                  {/* Event Type */}
                  <div className="space-y-2">
                    <label
                      htmlFor="eventType"
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <Calendar className="w-4 h-4 text-primary" />
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="event_type"
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    >
                      <option value="">Select Event Type</option>
                      <option value="Trade Show/Expo">Trade Show/Expo</option>
                      <option value="Corporate Summit">Corporate Summit</option>
                      <option value="Conference">Conference</option>
                      <option value="Workshop/Seminar">Workshop/Seminar</option>
                      <option value="Product Launch">Product Launch</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Expected Attendees */}
                  <div className="space-y-2">
                    <label
                      htmlFor="attendees"
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <Users className="w-4 h-4 text-primary" />
                      Expected Attendees *
                    </label>
                    <select
                      id="attendees"
                      name="expected_attendees"
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    >
                      <option value="">Select Range</option>
                      <option value="0-200">0-200</option>
                      <option value="201-500">201-500</option>
                      <option value="501-1000">501-1,000</option>
                      <option value="1001-2000">1,001-2,000</option>
                      <option value="2000+">2,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={1000}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us about your event requirements..."
                  />
                </div>

                {/* Submit Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
                  >
                    Schedule Demo
                  </Button>
                </motion.div>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted by our team.
                </p>
              </form>
            </motion.div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">30-Minute Demo</h3>
                <p className="text-sm text-muted-foreground">
                  Quick walkthrough of all features tailored to your needs
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Live Q&A</h3>
                <p className="text-sm text-muted-foreground">
                  Ask questions and get expert answers from our team
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Custom Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Get a personalized quote based on your event size
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />

      {/* Success Animation */}
      <AnimatePresence>
        {showSuccess && <FormSuccess onClose={() => setShowSuccess(false)} />}
      </AnimatePresence>
    </>
  )
}

export default BookDemoPage
