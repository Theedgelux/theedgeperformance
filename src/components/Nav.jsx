import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#mission', label: 'Mission' },
    { href: '#founder', label: 'Fondateur' },
    { href: '#offers', label: 'Programmes' },
    { href: '#why', label: 'Pourquoi nous' },
    { href: '#contact', label: 'Contact' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          borderBottomColor: scrolled ? 'rgba(201,168,76,0.25)' : 'rgba(201,168,76,0.15)',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none',
          transition: 'border-bottom-color 0.3s, box-shadow 0.3s',
        }}
      >
        <div className="nav-logo">THE <em>EDGE</em> PERFORMANCE</div>
        <ul className="nav-links">
          {links.map((l, i) => (
            <li key={l.href}>
              <motion.a
                href={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i + 0.4 }}
                whileHover={{ color: 'var(--gold)' }}
              >
                {l.label}
              </motion.a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">Session découverte</a>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.4rem',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? 'var(--gold)' : 'var(--white)', transition: 'transform 0.3s, background 0.3s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}></span>
          <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? 'transparent' : 'var(--white)', transition: 'background 0.3s' }}></span>
          <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? 'var(--gold)' : 'var(--white)', transition: 'transform 0.3s, background 0.3s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}></span>
        </button>
      </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-mobile-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="nav-mobile-cta"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              Session découverte
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
