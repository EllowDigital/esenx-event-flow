import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Preloader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate minimum loading time for smooth experience
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="/assets/images/logo.png"
                alt="Esenyx logo"
                className="w-32 h-32 object-contain"
              />
              {/* Pulsing ring */}
              <motion.div
                className="absolute inset-0 border-4 border-primary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center space-y-2"
            >
              <h2 className="text-2xl font-bold text-foreground">Esenyx</h2>
              <p className="text-sm text-muted-foreground">powered by EllowDigital</p>
            </motion.div>

            {/* Spinner removed as requested */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
