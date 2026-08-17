import React from 'react'
import { ArrowRight } from 'lucide-react'
import { industries } from '../data/siteData'
import { Link, Logo } from './ui'

export default function Footer({ onDemo }) {
  return <footer className="site-footer">
    <div className="container footer-top">
      <div className="footer-brand"><Logo light/><p>Every location. Every team.<br/>One operating rhythm.</p><button onClick={onDemo}>Book a Demo <ArrowRight/></button></div>
      <div><b>Platform</b><Link to="/platform">Overview</Link><Link to="/platform/modules">Modules</Link><Link to="/platform/integrations">Integrations</Link><Link to="/platform/ai-performance">AI Performance</Link></div>
      <div><b>Industries</b>{industries.map(item => <Link key={item.slug} to={'/industries/' + item.slug}>{item.title}</Link>)}</div>
      <div><b>Resources</b><Link to="/resources/case-studies">Case Studies</Link><Link to="/resources/blog">Blog</Link><Link to="/resources/help-center">Help Center</Link><Link to="/pricing">Pricing</Link></div>
      <div><b>Company</b><Link to="/company/about">About Us</Link><Link to="/company/careers">Careers</Link><Link to="/company/partners">Partners</Link><Link to="/company/contact">Contact Us</Link></div>
    </div>
    <div className="container footer-bottom"><span>© 2026 ACREBIS AI. All rights reserved.</span><div><Link to="/legal">Legal</Link><Link to="/privacy-policy">Privacy</Link><Link to="/terms-cookies">Terms & Cookies</Link><Link to="/security">Security</Link></div></div>
  </footer>
}
