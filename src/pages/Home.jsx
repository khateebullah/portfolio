import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import { services, stats, process } from '../data/content'

export default function Home() {
  return (
    <>
      <SEO
        title="Digital Marketer & SEO Expert"
        description="SEO, social media marketing and Meta ads that grow traffic, leads and revenue for your business."
      />

      {/* HERO */}
      <section className="hero">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="container hero-inner">
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              Hello, I'm <span className="gradient-text">Aqsa</span>
            </motion.h1>
            <motion.p
              className="hero-role"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              A Digital Marketer & SEO Expert
            </motion.p>
            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              I help brands rank higher, reach the right audience and turn clicks into
              customers through data-driven strategy.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link to="/contact" className="btn btn-primary">
                Start a Project <FiArrowRight />
              </Link>
              <Link to="/services" className="btn btn-ghost">View Services</Link>
            </motion.div>
          </div>

          <motion.div
            className="hero-photo"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="photo-wrap">
              <img
                src="/profile.jpg"
                alt="Aqsa, Digital Marketer and SEO Expert"
                width="340"
                height="340"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="container stats">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="stat">
            <h3 className="gradient-text">{s.value}</h3>
            <p className="muted">{s.label}</p>
          </Reveal>
        ))}
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">What I do</span>
              <h2>Services built for growth</h2>
            </div>
          </Reveal>
          <div className="grid">
            {services.slice(0, 3).map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
          <div className="center mt">
            <Link to="/services" className="btn btn-ghost">See all services <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section alt">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">How it works</span>
              <h2>A simple, proven process</h2>
            </div>
          </Reveal>
          <div className="grid grid-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="card">
                  <span className="step gradient-text">{p.step}</span>
                  <h3>{p.title}</h3>
                  <p className="muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta">
              <h2>Ready to grow your online presence?</h2>
              <p className="muted">Let's talk about your goals and build a plan that delivers results.</p>
              <Link to="/contact" className="btn btn-primary">Get in Touch <FiArrowRight /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}