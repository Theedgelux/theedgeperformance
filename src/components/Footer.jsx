import { motion } from 'framer-motion'

const NAV_LINKS = [
  { href: '#mission', label: 'Mission' },
  { href: '#founder', label: 'Fondateur' },
  { href: '#offers', label: 'Programmes' },
  { href: '#why', label: 'Pourquoi nous' },
  { href: '#vision', label: 'Vision' },
  { href: '#contact', label: 'Contact' },
]

const SOCIAL_LINKS = [
  {
    href: 'https://linkedin.com/in/herve-ngongo',
    label: 'LinkedIn',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: 'https://instagram.com/theedgeperformance',
    label: 'Instagram',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: 'https://wa.me/352000000000',
    label: 'WhatsApp',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      role="contentinfo"
    >
      <div className="footer-main">
        {/* Brand column */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo" aria-label="Retour en haut de page">
            THE <em>EDGE</em> PERFORMANCE
          </a>
          <p className="footer-desc">
            Facilitateur de dynamiques humaines par le mouvement. Coaching performance pour équipes &amp; entreprises à Luxembourg et dans la Grande Région.
          </p>
          <nav className="footer-social" aria-label="Réseaux sociaux">
            {SOCIAL_LINKS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="footer-social-link"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </nav>
        </div>

        {/* Navigation */}
        <div>
          <div className="footer-col-title">Navigation</div>
          <ul className="footer-links" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href} role="listitem">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Programmes */}
        <div>
          <div className="footer-col-title">Programmes</div>
          <ul className="footer-links" role="list">
            <li role="listitem"><a href="#offers">Edge Break</a></li>
            <li role="listitem"><a href="#offers">Edge Team Session</a></li>
            <li role="listitem"><a href="#offers">Edge Team Building</a></li>
            <li role="listitem"><a href="#offers">Edge Morning Boost</a></li>
            <li role="listitem"><a href="#contact">Séance découverte</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="footer-col-title">Contact</div>
          <div className="footer-contact-item">
            <div className="footer-contact-label">Email</div>
            <div className="footer-contact-val">contact@theedgeperformance.lu</div>
          </div>
          <div className="footer-contact-item">
            <div className="footer-contact-label">Localisation</div>
            <div className="footer-contact-val">Luxembourg & Grande Région</div>
          </div>
          <div className="footer-contact-item">
            <div className="footer-contact-label">Disponibilité</div>
            <div className="footer-contact-val">Lundi — Vendredi, 7h–19h</div>
          </div>
          <motion.a
            href="#contact"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--black)',
              background: 'var(--gold)',
              padding: '0.7rem 1.5rem',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            whileHover={{ background: 'var(--gold-light)', y: -1 }}
            transition={{ duration: 0.2 }}
            aria-label="Prendre contact"
          >
            Nous contacter
          </motion.a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          © {year} THE EDGE PERFORMANCE — Hervé Ngongo. Tous droits réservés.
        </div>
        <nav className="footer-legal" aria-label="Liens légaux">
          <a href="#contact">Politique de confidentialité</a>
          <a href="#contact">Mentions légales</a>
        </nav>
        <div className="footer-loc">Luxembourg 🇱🇺</div>
      </div>
    </motion.footer>
  )
}

