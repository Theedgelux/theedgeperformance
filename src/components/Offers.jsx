import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const offers = [
  {
    num: '01',
    name: 'EDGE BREAK',
    sub: '30 à 40 min — Quotidien',
    desc: "Sessions dynamiques directement au sein de l'entreprise. Réactivez le corps, stimulez l'énergie et favorisez la concentration pour la seconde partie de journée.",
    goals: [
      'Boxe & pratique sportive',
      'Réduire la sédentarité',
      'Réactiver le corps en milieu de journée',
      'Favoriser la concentration',
      'Améliorer le bien-être au travail',
    ],
    price: '590€',
    priceUnit: '/ mois — 1 séance par semaine',
    featured: false,
  },
  {
    num: '02',
    name: 'EDGE TEAM',
    sub: '45 à 60 min — Hebdomadaire',
    desc: "Sessions collectives adaptées à tous les niveaux. Développez l'esprit d'équipe, renforcez les liens entre collaborateurs et générez une énergie collective durable.",
    goals: [
      "Développer l'esprit d'équipe",
      'Renforcer les liens entre collaborateurs',
      'Créer une dynamique collective positive',
      'Favoriser la communication inter-services',
      'Générer une énergie collective durable',
    ],
    price: '990€',
    priceUnit: '/ mois — 2 séances par semaine',
    featured: true,
    featuredLabel: 'Le plus populaire',
  },
  {
    num: '03',
    name: 'EDGE TEAM BUILDING',
    sub: '½ journée ou journée — Événementiel',
    desc: 'Expériences collectives sur mesure pour marquer les esprits et créer une dynamique qui dure bien au-delà de l\'événement.',
    goals: [
      "Renforcer la culture d'entreprise",
      'Développer la collaboration',
      'Créer des souvenirs communs',
      'Favoriser la cohésion inter-équipes',
      'Idéal séminaires & off-sites',
    ],
    price: 'Sur devis',
    priceUnit: '½ journée ou journée complète',
    featured: false,
    priceNote: 'Tarif selon groupe, durée et lieu d\'intervention',
  },
  ,
  {
    num: '04',
    name: 'EDGE MORNING BOOST',
    sub: 'Sur demande | S�ance matinale',
    desc: "D�marrez la journ�e avec une �nergie maximale. Une s�ance courte et intense pour activer le corps et l'esprit avant que la journ�e ne commence.",
    goals: [
      'Activer le corps d�s le matin',
      'Booster la concentration et la clart� mentale',
      'Cr�er une dynamique positive en d�but de journ�e',
      'Renforcer la coh�sion avant les r�unions cl�s',
      'Id�al avant s�minaires ou journ�es strat�giques',
    ],
    price: 'Sur demande',
    priceUnit: 'Tarif selon format et groupe',
    featured: false,
    priceNote: 'Disponible sur demande uniquement',
  }
]
export default function Offers() {
  return (
    <>
      <section className="offers s-pad" id="offers" aria-labelledby="offers-title">
        <div className="offers-header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="s-eyebrow" aria-hidden="true">Programmes</div>
            <h2 className="s-title" id="offers-title">NOS INTERVENTIONS</h2>
            <p className="s-intro">Trois formats pensés pour s'intégrer naturellement dans le quotidien de votre entreprise.</p>
          </motion.div>
          <motion.a
            href="#contact"
            className="btn-gold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Demander un devis
          </motion.a>
        </div>

        <div className="offers-grid" role="list">
          {offers.map((offer, i) => (
            <motion.article
              key={offer.num}
              className={`offer-card${offer.featured ? ' featured' : ''}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              role="listitem"
              aria-label={`Programme ${offer.name}`}
            >
              {offer.featured && offer.featuredLabel && (
                <div className="offer-featured-badge" aria-label="Programme recommandé">
                  {offer.featuredLabel}
                </div>
              )}
              <div className="offer-num" aria-hidden="true">{offer.num}</div>
              <h3 className="offer-name">{offer.name}</h3>
              <div className="offer-sub">{offer.sub}</div>
              <p className="offer-desc">{offer.desc}</p>
              <ul className="offer-goals" aria-label="Objectifs du programme">
                {offer.goals.map(g => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
              <div className="offer-price-wrap">
                {offer.priceNote
                  ? <div className="offer-price-from" style={{ fontSize: '0.75rem' }}>{offer.priceNote}</div>
                  : <div className="offer-price-from">À partir de</div>
                }
                <div className="offer-price" style={offer.priceNote ? { fontSize: '1.8rem', letterSpacing: '0.05em' } : {}}>
                  {offer.price}
                </div>
                <div className="offer-price-unit">{offer.priceUnit}</div>
              </div>
              <a
                href="#contact"
                className={offer.featured ? 'offer-cta' : 'offer-cta-ghost'}
                aria-label={`Choisir le programme ${offer.name}`}
              >
                {offer.featured ? 'Démarrer maintenant' : 'En savoir plus'}
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <div className="divider" role="separator" />
    </>
  )
}


