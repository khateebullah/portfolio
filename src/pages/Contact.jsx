import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { site } from '../data/content'

// Create a free form at https://formspree.io and paste your form ID here
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <SEO title="Contact" description="Get in touch for SEO, social media marketing and advertising services." />
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1>Let's <span className="gradient-text">work together</span></h1>
            <p className="lead">Tell me about your project and I'll get back to you within 24 hours.</p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container two-col contact-grid">
          <Reveal>
            <div className="contact-info">
              <div className="info-item">
                <FiMail />
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${site.email}`} className="muted">{site.email}</a>
                </div>
              </div>
              <div className="info-item">
                <FiPhone />
                <div>
                  <h4>Phone</h4>
                  <a href={`tel:${site.phone}`} className="muted">{site.phoneDisplay}</a>
                </div>
              </div>
              <div className="info-item">
                <FiMapPin />
                <div>
                  <h4>Location</h4>
                  <span className="muted">{site.location}</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form className="card form" onSubmit={handleSubmit}>
              <label>
                Name
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
              </label>
              <label>
                Service
                <select name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  <option>SEO Optimization</option>
                  <option>Social Media Marketing</option>
                  <option>Meta & Google Ads</option>
                  <option>Content Marketing</option>
                  <option>Website Development</option>
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows="5" value={form.message} onChange={handleChange} required placeholder="Tell me about your project..." />
              </label>

              <button className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : <>Send Message <FiSend /></>}
              </button>

              {status === 'success' && <p className="msg success">Thanks! Your message has been sent.</p>}
              {status === 'error' && <p className="msg error">Something went wrong. Please try again or email me directly.</p>}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}