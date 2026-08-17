import React from 'react'
import { ArrowRight } from 'lucide-react'

export function Logo({ light = false }) {
  return <span className={'brand ' + (light ? 'brand-light' : '')} aria-label="ACREBIS AI">
    <span>acrebis</span><i>•</i><b>ai</b>
  </span>
}

export function Link({ to, className = '', children, onClick }) {
  const navigate = event => {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    if (window.location.pathname !== to) window.history.pushState({},'',to)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
  return <a href={to} className={className} onClick={navigate}>{children}</a>
}

export function ButtonLink({ to, variant = 'primary', children, onClick }) {
  return <Link to={to} className={'button button-' + variant} onClick={onClick}>{children}</Link>
}

export function SectionHeading({ eyebrow, title, copy, center = false }) {
  return <div className={'section-heading ' + (center ? 'center' : '')}>
    <span className="eyebrow-text">{eyebrow}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>
}

export function CallToAction({ onDemo, compact = false }) {
  return <section className={'cta-section ' + (compact ? 'compact' : '')}>
    <div className="container cta-panel">
      <div><span>READY TO MOVE AS ONE?</span><h2>Turn every location into<br/>your best-performing location.</h2></div>
      <div className="button-row">
        <button className="button button-light" onClick={onDemo}>Book a Demo <ArrowRight/></button>
        <ButtonLink to="/company/contact" variant="ghost-light">Contact Us</ButtonLink>
      </div>
    </div>
  </section>
}

export function PageHero({ eyebrow, title, copy, icon: Icon, onDemo }) {
  return <section className="inner-hero">
    <div className="container inner-hero-layout">
      <div>
        <span className="eyebrow-text">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{copy}</p>
        <div className="button-row">
          <button className="button button-primary" onClick={onDemo}>Book a Demo <ArrowRight/></button>
          <ButtonLink to="/platform" variant="outline">Explore Platform</ButtonLink>
        </div>
      </div>
      <div className="inner-hero-art">
        <span><Icon/></span><i/><i/><i/><b>Connected operations.<br/>Measurable performance.</b>
      </div>
    </div>
  </section>
}
