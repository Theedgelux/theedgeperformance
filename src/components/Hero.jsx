import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const STATS = [
  { num: '+15', label: 'Années terrain' },
  { num: '+30', label: 'Équipes managées' },
  { num: '3.5M€', label: 'CA en 5 ans' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <>
      <motion.section
        ref={ref}
        className="hero"
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        aria-label="Section d'accueil"
      >
        <motion.div className="hero-video-bg" style={{ y }} />
        <div className="hero-grid" aria-hidden="true" />

        {/* Abstract human movement SVG background */}
        <div className="hero-figure" aria-hidden="true">
          <svg viewBox="0 0 600 800" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#C9A84C" strokeWidth="0.8">
            <circle cx="300" cy="80" r="45" />
            <line x1="300" y1="125" x2="300" y2="320" />
            <line x1="300" y1="180" x2="180" y2="280" />
            <line x1="300" y1="180" x2="420" y2="260" />
            <line x1="300" y1="320" x2="220" y2="480" />
            <line x1="300" y1="320" x2="390" y2="500" />
            <line x1="220" y1="480" x2="200" y2="640" />
            <line x1="390" y1="500" x2="420" y2="650" />
            <path d="M 80 200 Q 200 150 180 280" strokeDasharray="4 8" opacity="0.4" />
            <path d="M 520 160 Q 400 200 420 310" strokeDasharray="4 8" opacity="0.4" />
            <path d="M 100 400 Q 160 500 220 480" strokeDasharray="4 8" opacity="0.3" />
            <path d="M 500 420 Q 440 500 390 500" strokeDasharray="4 8" opacity="0.3" />
            <circle cx="300" cy="400" r="200" strokeDasharray="2 12" opacity="0.12" />
            <circle cx="300" cy="400" r="280" strokeDasharray="2 16" opacity="0.06" />
            <circle cx="180" cy="280" r="5" fill="#C9A84C" opacity="0.5" />
            <circle cx="420" cy="260" r="5" fill="#C9A84C" opacity="0.5" />
            <circle cx="200" cy="640" r="5" fill="#C9A84C" opacity="0.5" />
            <circle cx="420" cy="650" r="5" fill="#C9A84C" opacity="0.5" />
          </svg>
        </div>
        <div className="hero-accent" aria-hidden="true" />

        <motion.div className="hero-content" style={{ opacity }}>
          <motion.div
            className="hero-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Facilitateur de Dynamiques Humaines par le Mouvement
          </motion.div>

          <motion.h1
            className="hero-h1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            MOVE BETTER.<br /><span className="g">PERFORM</span> BETTER.
          </motion.h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            La performance durable commence par l'énergie humaine.
          </motion.p>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            Remettre le mouvement au cœur du quotidien professionnel — parce qu'une équipe qui bouge est une équipe qui respire, qui échange, et qui progresse ensemble.
          </motion.p>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
          >
            <a href="#contact" className="btn-gold">Réserver une session découverte</a>
            <a href="#mission" className="btn-ghost">Découvrir notre approche</a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.25 }}
            role="list"
            aria-label="Statistiques clés"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                role="listitem"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
              >
                <div className="hstat-n" aria-label={stat.num}>{stat.num}</div>
                <div className="hstat-l">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      <div className="divider" role="separator" />
    </>
  )
}
