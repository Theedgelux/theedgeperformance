import { motion } from 'framer-motion'

const manifesto = [
  {
    num: 'I',
    title: 'Bouger son corps',
    body: "Réactiver l'énergie physique pour retrouver clarté, concentration et performance au quotidien.",
  },
  {
    num: 'II',
    title: 'Stimuler son esprit',
    body: 'Créer des interactions et favoriser les échanges pour renforcer la dynamique collective.',
  },
  {
    num: 'III',
    title: "Retrouver de l'élan",
    body: "Développer une culture du mouvement durable, vecteur d'engagement et de performance à long terme.",
  },
]

export default function Vision() {
  return (
    <>
      <div className="divider" role="separator" />
      <section className="vision s-pad" id="vision" aria-labelledby="vision-title">
        <div className="vision-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="s-eyebrow" style={{ justifyContent: 'center' }} aria-hidden="true">Vision</div>
            <h2 className="s-title" id="vision-title" style={{ textAlign: 'center' }}>UNE CULTURE, PAS UN ÉVÉNEMENT</h2>
            <p className="vision-body">
              Le mouvement ne doit pas être considéré comme un événement ponctuel. Il doit devenir une habitude. Une culture.<br /><br />
              Les entreprises investissent dans leurs technologies. Elles investissent dans leurs infrastructures. Elles investissent dans leurs processus.<br /><br />
              <strong style={{ color: 'var(--gold)' }}>Mais leur véritable avantage compétitif reste l'énergie de leurs collaborateurs.</strong>
            </p>
          </motion.div>

          <motion.div
            className="vision-manifesto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
            role="list"
          >
            {manifesto.map(item => (
              <motion.div
                key={item.num}
                className="vm-item"
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                role="listitem"
              >
                <div className="vm-num" aria-hidden="true">{item.num}</div>
                <div className="vm-title">{item.title}</div>
                <div className="vm-body">{item.body}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
