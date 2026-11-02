import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/content'

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="SEO, social media marketing, Meta ads, content marketing, analytics and website development."
      />
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Services</span>
            <h1>Everything you need to <span className="gradient-text">grow online</span></h1>
            <p className="lead">End-to-end digital marketing, from ranking on Google to converting traffic into leads.</p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1}>
              <ServiceCard service={s} detailed />
            </Reveal>
          ))}
        </div>

        <div className="container mt">
          <Reveal>
            <div className="cta">
              <h2>Not sure what you need?</h2>
              <p className="muted">Book a free consultation and we'll find the best fit for your goals.</p>
              <Link to="/contact" className="btn btn-primary">Book a Free Call <FiArrowRight /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}