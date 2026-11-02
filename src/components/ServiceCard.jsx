import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

export default function ServiceCard({ service, detailed = false }) {
  const Icon = service.icon
  return (
    <motion.div
      className="card service-card"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="icon-box"><Icon /></div>
      <h3>{service.title}</h3>
      <p className="muted">{service.desc}</p>
      {detailed && (
        <ul className="feature-list">
          {service.features.map((f) => (
            <li key={f}><FiCheck /> {f}</li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}