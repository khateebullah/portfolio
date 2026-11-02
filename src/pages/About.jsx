import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { site, skills, experience } from '../data/content'

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about my background, skills and approach to SEO and digital marketing."
      />
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">About me</span>
            <h1>Hi, I'm <span className="gradient-text">{site.name}</span></h1>
            <p className="lead">
              I'm a digital marketer and SEO expert based in {site.location}. I help businesses
              get found on Google, build their brand on social media and generate leads with
              paid campaigns. My approach is simple: understand the customer, test fast and let
              the data decide.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container two-col">
          {/* Skills */}
          <Reveal>
            <h2 className="sub">Skills</h2>
            <div className="skills">
              {skills.map((s) => (
                <div key={s.name} className="skill">
                  <div className="skill-top">
                    <span>{s.name}</span>
                    <span className="muted">{s.level}%</span>
                  </div>
                  <div className="bar">
                    <motion.div
                      className="bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Experience */}
          <Reveal delay={0.15}>
            <h2 className="sub">Experience</h2>
            <div className="timeline">
              {experience.map((e) => (
                <div key={e.title} className="timeline-item">
                  <span className="muted year">{e.year}</span>
                  <h3>{e.title}</h3>
                  <p className="muted">{e.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}