import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const SPORTS = ['Football', 'Muay Thaï', 'Karaté', 'Lutte', 'Préparation physique', 'Spinning', 'Aqua fitness', 'Renforcement', 'Boxe', 'Coaching collectif']

const DIFF_CARDS = [
  { num: '01', title: 'Expertise du mouvement', body: 'Plus de 15 années de coaching, animation de groupes et développement physique.' },
  { num: '02', title: 'Expertise entrepreneuriale', body: "Gestion d'équipes, développement d'activités et réalités concrètes du monde des affaires." },
  { num: '03', title: 'Dynamique humaine', body: "Création d'environnements favorisant l'engagement, la cohésion et les interactions positives." },
]

export default function Founder() {
  return (
    <>
      <section className="founder s-pad" id="founder" aria-labelledby="founder-title">
        <div className="founder-inner">
          <motion.div
            className="founder-photo-wrap"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="founder-photo-frame">
              <img
                src="/herve-ngongo.jpg"
                alt="Hervé Ngongo — Fondateur de THE EDGE PERFORMANCE, coach performance et facilitateur de dynamiques humaines"
                loading="lazy"
              />
              <div className="fc fc-tl" aria-hidden="true" />
              <div className="fc fc-tr" aria-hidden="true" />
              <div className="fc fc-bl" aria-hidden="true" />
              <div className="fc fc-br" aria-hidden="true" />
            </div>
            <div className="founder-badge" aria-label="15 ans d'expérience">
              <div className="founder-badge-n">15+</div>
              <div className="founder-badge-l">Années</div>
            </div>
          </motion.div>

          <motion.div
            className="founder-text"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div className="s-eyebrow" variants={fadeUp} aria-hidden="true">Le fondateur</motion.div>
            <motion.div className="founder-name" variants={fadeUp} id="founder-title">HERVÉ NGONGO</motion.div>
            <motion.div className="founder-role" variants={fadeUp}>
              Facilitateur de dynamique humaine par le mouvement
            </motion.div>

            <motion.blockquote className="founder-quote" variants={fadeUp}>
              "Pendant longtemps, j'ai évolué dans deux univers qui semblent différents mais qui reposent en réalité sur les mêmes fondations : le sport et l'entreprise. L'énergie est à la base de toute performance durable."
            </motion.blockquote>

            <motion.p className="founder-body" variants={fadeUp}>
              Depuis l'âge de 17 ans, le mouvement fait partie intégrante de ma vie. Football de compétition, sports de combat, préparation physique et coaching m'ont permis de comprendre très tôt une réalité essentielle : <strong style={{ color: 'var(--gold)' }}>l'énergie est à la base de toute performance durable.</strong><br /><br />
              J'ai également construit et développé plusieurs activités entrepreneuriales, dirigé des équipes et accompagné la croissance de structures ambitieuses. J'ai vécu les exigences du développement, la gestion des responsabilités, la pression des résultats et les défis humains liés à la croissance.<br /><br />
              Cette double expérience m'a permis de prendre conscience d'un élément fondamental : les entreprises investissent énormément dans leurs outils et leurs technologies. Mais la véritable source de performance reste <strong style={{ color: 'var(--gold)' }}>l'énergie des femmes et des hommes qui les font vivre.</strong>
            </motion.p>

            <motion.div
              style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}
              variants={fadeUp}
              aria-label="Disciplines pratiquées"
            >
              <span style={{ display: 'block', width: '20px', height: '1px', background: 'var(--gold)' }} aria-hidden="true" />
              Disciplines pratiquées
            </motion.div>

            <motion.div className="sport-tags" variants={fadeUp} role="list" aria-label="Liste des disciplines">
              {SPORTS.map(tag => (
                <motion.span
                  key={tag}
                  className="stag"
                  role="listitem"
                  whileHover={{ background: 'rgba(201,168,76,0.18)', scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.div className="diff-grid" variants={fadeUp} role="list" aria-label="Différenciateurs">
              {DIFF_CARDS.map(card => (
                <motion.div
                  key={card.num}
                  className="diff-card"
                  role="listitem"
                  whileHover={{ background: 'var(--black-3)' }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="diff-num" aria-hidden="true">{card.num}</div>
                  <div className="diff-title">{card.title}</div>
                  <div className="diff-body">{card.body}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="divider" role="separator" />
    </>
  )
}
