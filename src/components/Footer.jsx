import { Link } from 'react-router-dom'
import { FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi'
import { site } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="logo">{site.name.split(' ')[0]}<span>.</span></div>
          <p className="muted footer-text">
            {site.role}. Helping brands grow with data-driven marketing.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="socials">
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></a>
          <a href={site.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FiFacebook /></a>
        </div>
      </div>
      <div className="container copyright muted">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}