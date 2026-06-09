import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const PILLARS = [
  { icon: '↑', label: 'Énergie' },
  { icon: '↑', label: 'Cohésion' },
  { icon: '↑', label: 'Performance' },
]

export default function Mission() {
  return (
    <>
      <section className="mission s-pad" id="mission" aria-labelledby="mission-title">
        <div className="mission-inner">
          <motion.div
            className="mission-text"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="s-eyebrow" variants={fadeUp} aria-hidden="true">Notre mission</motion.div>
            <motion.h2 className="s-title" variants={fadeUp} id="mission-title">
              UNE APPROCHE DIFFÉRENTE DE LA PERFORMANCE
            </motion.h2>
            <motion.p className="mission-body" variants={fadeUp}>
              Depuis l'aube de l'humanité, notre survie et notre développement ont reposé sur un besoin fondamental : <strong>bouger ensemble</strong>.<br /><br />
              Aujourd'hui, dans un environnement où les collaborateurs passent une grande partie de leur journée assis, la sédentarité est devenue un enjeu majeur.<br /><br />
              Fatigue, baisse de concentration, stress, manque d'interactions, perte d'engagement : ces phénomènes ont un impact direct sur la performance collective.<br /><br />
              Chaque organisation est animée par des <strong>dynamiques humaines invisibles</strong> qui influencent directement sa performance : l'énergie des collaborateurs, la qualité des interactions, l'engagement individuel, la confiance collective.<br /><br />
              Lorsque ces dynamiques sont positives, les équipes collaborent mieux et développent naturellement une culture de performance durable. C'est précisément là que <strong>le mouvement devient un levier puissant</strong>.
            </motion.p>
            <motion.div className="mission-pillars" variants={fadeUp} role="list" aria-label="Les trois piliers">
              {PILLARS.map(p => (
                <div className="mpillar" key={p.label} role="listitem">
                  <div className="mpillar-n" aria-hidden="true">{p.icon}</div>
                  <div className="mpillar-l">{p.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="mission-visual"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mission-quote-block">
              <blockquote className="mission-quote">
                "Lorsque les individus bougent ensemble, quelque chose change. Les barrières tombent. Les échanges deviennent plus naturels. La confiance se développe. L'énergie circule différemment."
              </blockquote>
              <div className="mission-quote-attr">— Hervé Ngongo, Fondateur</div>
              <svg style={{ marginTop: '2rem', width: '100%', height: '90px', opacity: 0.35 }} viewBox="0 0 360 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="30" cy="45" r="8" fill="#C9A84C" />
                <circle cx="100" cy="20" r="6" fill="#C9A84C" opacity="0.7" />
                <circle cx="160" cy="55" r="10" fill="#C9A84C" />
                <circle cx="230" cy="25" r="6" fill="#C9A84C" opacity="0.6" />
                <circle cx="300" cy="50" r="8" fill="#C9A84C" opacity="0.8" />
                <circle cx="350" cy="30" r="5" fill="#C9A84C" opacity="0.5" />
                <line x1="38" y1="45" x2="94" y2="26" stroke="#C9A84C" strokeWidth="1" opacity="0.4" />
                <line x1="106" y1="22" x2="150" y2="52" stroke="#C9A84C" strokeWidth="1" opacity="0.4" />
                <line x1="170" y1="52" x2="224" y2="30" stroke="#C9A84C" strokeWidth="1" opacity="0.4" />
                <line x1="236" y1="28" x2="292" y2="48" stroke="#C9A84C" strokeWidth="1" opacity="0.4" />
                <line x1="308" y1="48" x2="345" y2="32" stroke="#C9A84C" strokeWidth="1" opacity="0.4" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider" role="separator" />
    </>
  )
}
