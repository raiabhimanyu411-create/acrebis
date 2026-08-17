import React, { useState } from 'react'
import { ArrowRight, Building2, ChevronDown, ChevronRight, LayoutDashboard, LockKeyhole, Plug, WandSparkles, X, Menu } from 'lucide-react'
import { companyLinks, industries, modules, resources } from '../data/siteData'
import { Link, Logo } from './ui'

export default function Header({ onDemo }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mega, setMega] = useState('')
  const [mobileGroup, setMobileGroup] = useState('')
  const closeAll = () => { setMobileOpen(false); setMega(''); setMobileGroup('') }

  const dropdown = (name, label, content) => <div
    className={'nav-group ' + (mega === name ? 'is-open' : '')}
    onMouseEnter={() => setMega(name)}
    onMouseLeave={() => setMega('')}
  >
    <button onClick={() => setMega(mega === name ? '' : name)} aria-expanded={mega === name}>{label}<ChevronDown size={14}/></button>
    <div className={'mega mega-' + name}>{content}</div>
  </div>

  return <header className="site-header">
    <div className="container header-inner">
      <Link to="/" className="brand-link" onClick={closeAll}><Logo/></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {dropdown('platform', 'Platform', <>
          <div className="mega-feature">
            <span className="mini-label">PLATFORM OVERVIEW</span>
            <h3>One operating system for every location.</h3>
            <p>Connect planning, people, execution and insight in one intelligent workspace.</p>
            <Link to="/platform" onClick={closeAll}>Explore the platform <ArrowRight size={15}/></Link>
          </div>
          <div className="mega-column">
            <span className="mega-title">Core modules</span>
            {modules.slice(0,6).map(item => <Link key={item.slug} to={'/platform/module/' + item.slug} onClick={closeAll}>{item.title}</Link>)}
            <Link to="/platform/modules" className="mega-more" onClick={closeAll}>View all modules <ArrowRight size={13}/></Link>
          </div>
          <div className="mega-column">
            <span className="mega-title">Technology</span>
            <Link to="/platform/integrations" onClick={closeAll}><Plug size={15}/> Integrations</Link>
            <Link to="/platform/ai-performance" onClick={closeAll}><WandSparkles size={15}/> AI-Powered Performance</Link>
          </div>
        </>)}
        {dropdown('industries', 'Industries', <div className="mega-list-grid">
          {industries.map(({slug, icon: Icon, title, copy}) => <Link key={slug} to={'/industries/' + slug} className="mega-list-item" onClick={closeAll}>
            <Icon/><span><b>{title}</b><small>{copy}</small></span><ChevronRight/>
          </Link>)}
          <Link to="/industries" className="mega-index-link" onClick={closeAll}>View all industries <ArrowRight size={14}/></Link>
        </div>)}
        {dropdown('resources', 'Resources', <div className="mega-list-grid compact">
          {resources.map(({slug, icon: Icon, title, copy}) => <Link key={slug} to={'/resources/' + slug} className="mega-list-item" onClick={closeAll}>
            <Icon/><span><b>{title}</b><small>{copy}</small></span><ChevronRight/>
          </Link>)}
        </div>)}
        {dropdown('company', 'Company', <div className="mega-list-grid compact">
          {companyLinks.map(item => <Link key={item.path} to={item.path} className="mega-list-item" onClick={closeAll}>
            <Building2/><span><b>{item.title}</b><small>{item.copy}</small></span><ChevronRight/>
          </Link>)}
        </div>)}
        <Link to="/pricing" className="simple-nav">Pricing</Link>
      </nav>
      <div className="header-actions">
        <Link to="/login" className="login-link"><LockKeyhole size={15}/> Login</Link>
        <button className="demo-button" onClick={onDemo}>Book a Demo <ArrowRight size={15}/></button>
      </div>
      <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen ? <X/> : <Menu/>}</button>
    </div>
    <div className={'mobile-panel ' + (mobileOpen ? 'open' : '')}>
      {[
        ['platform','Platform', [
          ['/platform','Overview'], ['/platform/modules','All Modules'], ['/platform/integrations','Integrations'], ['/platform/ai-performance','AI-Powered Performance']
        ]],
        ['industries','Industries', industries.map(i => ['/industries/' + i.slug, i.title])],
        ['resources','Resources', resources.map(i => ['/resources/' + i.slug, i.title])],
        ['company','Company', companyLinks.map(i => [i.path, i.title])],
      ].map(([key,label,items]) => <div className="mobile-group" key={key}>
        <button onClick={() => setMobileGroup(mobileGroup === key ? '' : key)}>{label}<ChevronDown/></button>
        <div className={mobileGroup === key ? 'open' : ''}>{items.map(([path,title]) => <Link key={path} to={path} onClick={closeAll}>{title}</Link>)}</div>
      </div>)}
      <Link to="/pricing" onClick={closeAll}>Pricing</Link>
      <Link to="/login" onClick={closeAll}>Login</Link>
      <button className="demo-button" onClick={() => { closeAll(); onDemo() }}>Book a Demo</button>
    </div>
  </header>
}
