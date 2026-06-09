import { motion } from 'framer-motion'

const items = [
  {
    title: 'Cohésion immédiate',
    desc: 'Le mouvement libère les barrières invisibles entre collègues. Les dynamiques humaines se transforment naturellement.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Énergie & productivité',
    desc: "Quand l'énergie circule, l'engagement suit. Vos collaborateurs retrouvent clarté, présence et connexion.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Zéro contrainte logistique',
    desc: "Aucune infrastructure nécessaire. Nous intervenons dans votre environnement existant — le mouvement s'adapte à vous.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'ROI RH mesurable',
    desc: "Moins de 1 000 € par mois pour transformer durablement les dynamiques humaines de vos équipes.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
]

const EQUATION = ['Mouvement', 'Énergie', 'Engagement', 'Performance']

export default function WhyBlock() {
  return (
    <section className="why-block" id="why" aria-labelledby="why-title">
      <div className="why-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="why-title" id="why-title">POURQUOI LES ENTREPRISES NOUS FONT CONFIANCE</h2>
          <p className="why-body">
            Parce que nous comprenons à la fois les réalités du sport et celles de l'entreprise.<br /><br />
            Une organisation performante ne repose pas uniquement sur ses outils ou ses procédures. Elle repose avant tout sur <strong>la qualité de l'énergie humaine</strong> qui circule au sein de ses équipes.<br /><br />
            Notre rôle : créer les conditions favorables pour que cette énergie s'exprime pleinement.
          </p>
          <div className="equation" role="img" aria-label="Mouvement → Énergie → Engagement → Performance">
            {EQUATION.map((item, i) => (
              <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="eq-block">{item}</span>
                {i < EQUATION.length - 1 && <span className="eq-arrow" aria-hidden="true">→</span>}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="why-chain"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          role="list"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              className="wchain-item"
              variants={{ hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
              role="listitem"
            >
              <div className="wchain-icon">{item.icon}</div>
              <div>
                <div className="wchain-title">{item.title}</div>
                <div className="wchain-desc">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
