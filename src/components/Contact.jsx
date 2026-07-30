import { motion } from 'framer-motion'
import { useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', program: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success

  const validate = () => {
    const errs = {}
    if (!fields.name.trim()) errs.name = 'Veuillez indiquer votre nom et société.'
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errs.email = 'Adresse email invalide.'
    }
    if (!fields.program) errs.program = 'Veuillez sélectionner un programme.'
    if (!fields.message.trim()) errs.message = 'Veuillez écrire un message.'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => { const c = { ...e }; delete c[name]; return c })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setStatus('loading')
    // Simulate async submit — replace with real API call
    setTimeout(() => setStatus('success'), 1500)
  }

  if (status === 'success') {
    return (
      <div className="contact-form-success" role="status" aria-live="polite">
        <div className="contact-form-success-icon" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="9 12 11 14 15 10" />
          </svg>
        </div>
        <div className="contact-form-success-title">Message envoyé !</div>
        <p className="contact-form-success-text">
          Merci pour votre message. Hervé vous contactera dans les 24h.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Formulaire de contact">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        <div>
          <label htmlFor="contact-name" style={{ display: 'none' }}>Nom et société</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Votre nom & société"
            value={fields.name}
            onChange={handleChange}
            className={`contact-form-input${errors.name ? ' error' : ''}`}
            aria-describedby={errors.name ? 'contact-name-err' : undefined}
            aria-invalid={!!errors.name}
            autoComplete="organization"
          />
          {errors.name && <span id="contact-name-err" className="contact-form-error" role="alert">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="contact-email" style={{ display: 'none' }}>Email professionnel</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="Votre email professionnel"
            value={fields.email}
            onChange={handleChange}
            className={`contact-form-input${errors.email ? ' error' : ''}`}
            aria-describedby={errors.email ? 'contact-email-err' : undefined}
            aria-invalid={!!errors.email}
            autoComplete="email"
          />
          {errors.email && <span id="contact-email-err" className="contact-form-error" role="alert">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="contact-program" style={{ display: 'none' }}>Programme souhaité</label>
          <select
            id="contact-program"
            name="program"
            value={fields.program}
            onChange={handleChange}
            className={`contact-form-select${errors.program ? ' error' : ''}`}
            aria-describedby={errors.program ? 'contact-program-err' : undefined}
            aria-invalid={!!errors.program}
          >
            <option value="">Programme souhaité</option>
            <option value="break">EDGE BREAK — 30 à 40 min</option>
            <option value="team">EDGE TEAM SESSION — 45 à 60 min</option>
            <option value="building">EDGE TEAM BUILDING — Sur devis</option>
            <option value="discovery">Je veux d'abord une séance découverte</option>
          </select>
          {errors.program && <span id="contact-program-err" className="contact-form-error" role="alert">{errors.program}</span>}
        </div>
        <div>
          <label htmlFor="contact-message" style={{ display: 'none' }}>Message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Votre message (nombre de collaborateurs, fréquence souhaitée...)"
            rows={3}
            value={fields.message}
            onChange={handleChange}
            className={`contact-form-textarea${errors.message ? ' error' : ''}`}
            aria-describedby={errors.message ? 'contact-message-err' : undefined}
            aria-invalid={!!errors.message}
          />
          {errors.message && <span id="contact-message-err" className="contact-form-error" role="alert">{errors.message}</span>}
        </div>
        <button
          type="submit"
          className="contact-form-btn"
          disabled={status === 'loading'}
          aria-busy={status === 'loading'}
        >
          {status === 'loading' ? (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 0.8s linear infinite' }}>
                <path d="M12 2a10 10 0 1 0 10 10" />
              </svg>
              Envoi en cours...
            </span>
          ) : 'Envoyer le message'}
        </button>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </form>
  )
}

const SOCIAL_LINKS = [
  {
    href: 'https://linkedin.com/in/herve-ngongo',
    label: 'LinkedIn',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#C9A84C" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/magic_hx_d?igsh=MThsbnBzdnFkZ3JiOQ%3D%3D&utm_source=qr',
    label: 'Instagram',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section className="contact s-pad" id="contact" aria-labelledby="contact-title">
      {/* CONTACT HERO */}
      <motion.div
        style={{ textAlign: 'center', marginBottom: '5rem' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="s-eyebrow" style={{ justifyContent: 'center' }} aria-hidden="true">Contact</div>
        <h2 className="contact-title" id="contact-title">ACTIVONS VOS ÉQUIPES</h2>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', fontStyle: 'italic', color: 'var(--white-dim)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
          Commencez par une séance découverte offerte de 30 minutes — sans engagement, directement dans vos locaux.
        </p>
      </motion.div>

      {/* 3 WAYS TO CONNECT */}
      <motion.div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginBottom: '5rem' }}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        role="list"
        aria-label="Façons de nous contacter"
      >
        {/* WhatsApp */}
        <motion.div
          variants={fadeUp}
          style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'var(--glass-blur)',
            WebkitBackdropFilter: 'var(--glass-blur)',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            transition: 'border-color 0.3s, box-shadow 0.3s',
          }}
          whileHover={{ borderColor: 'rgba(201,168,76,0.35)', boxShadow: '0 16px 40px rgba(0,0,0,0.35)' }}
          role="listitem"
        >
          <div style={{ width: '56px', height: '56px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' }} aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </div>
          <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Message direct</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', letterSpacing: '0.06em', marginBottom: '0.8rem' }}>WHATSAPP</div>
          <p style={{ fontSize: '0.875rem', color: 'var(--white-dim)', lineHeight: 1.7, marginBottom: '1.5rem' }}>Réponse rapide pour toute question sur nos programmes.</p>
          <motion.a
            href="https://wa.me/352000000000?text=Bonjour%20Herv%C3%A9%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20THE%20EDGE%20PERFORMANCE"
            style={{ display: 'inline-block', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--black)', background: 'var(--gold)', padding: '0.8rem 1.8rem', textDecoration: 'none', cursor: 'pointer' }}
            whileHover={{ background: 'var(--gold-light)', y: -1 }}
            transition={{ duration: 0.2 }}
            aria-label="Écrire sur WhatsApp"
          >
            Écrire sur WhatsApp
          </motion.a>
        </motion.div>

        {/* Formulaire de contact */}
        <motion.div
          variants={fadeUp}
          style={{
            background: 'rgba(201,168,76,0.04)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderTop: '2px solid var(--gold)',
            backdropFilter: 'var(--glass-blur)',
            WebkitBackdropFilter: 'var(--glass-blur)',
            padding: '2.5rem 2rem',
          }}
          role="listitem"
        >
          <div style={{ width: '56px', height: '56px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' }} aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem', textAlign: 'center' }}>Formulaire</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', letterSpacing: '0.06em', marginBottom: '1.2rem', textAlign: 'center' }}>NOUS ÉCRIRE</div>
          <ContactForm />
        </motion.div>

        {/* Rendez-vous */}
        <motion.div
          variants={fadeUp}
          style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'var(--glass-blur)',
            WebkitBackdropFilter: 'var(--glass-blur)',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            transition: 'border-color 0.3s, box-shadow 0.3s',
          }}
          whileHover={{ borderColor: 'rgba(201,168,76,0.35)', boxShadow: '0 16px 40px rgba(0,0,0,0.35)' }}
          role="listitem"
        >
          <div style={{ width: '56px', height: '56px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' }} aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Rendez-vous</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', letterSpacing: '0.06em', marginBottom: '0.8rem' }}>SÉANCE DÉCOUVERTE</div>
          <p style={{ fontSize: '0.875rem', color: 'var(--white-dim)', lineHeight: 1.7, marginBottom: '1rem' }}>30 minutes offertes pour découvrir notre approche directement dans vos locaux.</p>
          <div style={{ background: 'rgba(8,8,8,0.5)', border: '1px solid rgba(201,168,76,0.12)', padding: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.3rem' }}>Disponibilités</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--white-dim)' }}>Lundi au Vendredi</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--white-dim)' }}>7h00 — 19h00</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--white-dim)' }}>Luxembourg &amp; Grande Région</div>
          </div>
          <motion.a
            href="mailto:contact@theedgeperformance.lu?subject=Demande%20de%20s%C3%A9ance%20d%C3%A9couverte%20EDGE%20Performance"
            style={{ display: 'inline-block', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--black)', background: 'var(--gold)', padding: '0.8rem 1.8rem', textDecoration: 'none', cursor: 'pointer' }}
            whileHover={{ background: 'var(--gold-light)', y: -1 }}
            transition={{ duration: 0.2 }}
            aria-label="Réserver une séance découverte par email"
          >
            Réserver ma séance
          </motion.a>
        </motion.div>
      </motion.div>

      {/* SOCIAL MEDIA */}
      <motion.div
        style={{ textAlign: 'center', paddingTop: '3rem', borderTop: '1px solid rgba(201,168,76,0.15)' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <span style={{ display: 'block', width: '40px', height: '1px', background: 'var(--gold)' }} aria-hidden="true" />
          Suivez THE EDGE PERFORMANCE
          <span style={{ display: 'block', width: '40px', height: '1px', background: 'var(--gold)' }} aria-hidden="true" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {SOCIAL_LINKS.map(s => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'var(--black-3)', border: '1px solid rgba(201,168,76,0.2)', padding: '0.85rem 1.5rem', textDecoration: 'none', cursor: 'pointer' }}
              whileHover={{ borderColor: 'var(--gold)', y: -2, boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}
              transition={{ duration: 0.2 }}
              aria-label={`Suivre sur ${s.label}`}
            >
              {s.icon}
              <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--white-dim)' }}>{s.label}</span>
            </motion.a>
          ))}

          <motion.a
            href="https://wa.me/352000000000"
            target="_blank"
            rel="noreferrer noopener"
            style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'var(--gold)', border: '1px solid var(--gold)', padding: '0.85rem 1.5rem', textDecoration: 'none', cursor: 'pointer' }}
            whileHover={{ background: 'var(--gold-light)', y: -2 }}
            transition={{ duration: 0.2 }}
            aria-label="Contacter sur WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.8" aria-hidden="true">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--black)' }}>WhatsApp</span>
          </motion.a>
        </div>

        {/* Email + Location */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', marginTop: '3rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Email', val: 'contact@theedgeperformance.lu' },
            { label: 'Localisation', val: 'Luxembourg & Grande Région' },
            { label: 'Disponibilité', val: 'Lundi — Vendredi' },
          ].map(item => (
            <div key={item.label}>
              <div style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.4rem' }}>{item.label}</div>
              <div style={{ fontSize: '0.9375rem', color: 'var(--white-dim)' }}>{item.val}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
