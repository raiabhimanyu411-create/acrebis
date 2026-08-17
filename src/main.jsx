import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  AlertCircle, ArrowRight, ArrowUpRight, BarChart3, Bell, BookOpen, Boxes,
  Building2, CalendarCheck, Check, CheckCircle2, ChevronDown, ChevronRight,
  ClipboardCheck, FileText, GraduationCap, Headphones, HeartHandshake,
  LayoutDashboard, LockKeyhole, Mail, Menu, MessageSquareText, PackageCheck,
  Play, Plug, Rocket, Search, ShieldCheck, ShoppingBag, Sparkles, Store, Target,
  TicketCheck, TrendingUp, UserRoundCheck, Users, WandSparkles, X, Zap
} from 'lucide-react'
import './styles.css'

const modules = [
  { slug: 'task-management', icon: ClipboardCheck, title: 'Task Management & Checklists', short: 'Turn plans into clear, trackable action across every location.', outcome: 'Consistent execution' },
  { slug: 'team-communication', icon: MessageSquareText, title: 'Team Communication', short: 'Reach the right teams with targeted, measurable communication.', outcome: 'Faster alignment' },
  { slug: 'audits-inspections', icon: CheckCircle2, title: 'Audits & Inspections', short: 'Capture evidence, flag gaps and trigger corrective actions instantly.', outcome: 'Stronger standards' },
  { slug: 'staff-management', icon: Users, title: 'Staff Management', short: 'Give every person the right access, ownership and visibility.', outcome: 'Clear accountability' },
  { slug: 'learning-training', icon: GraduationCap, title: 'Learning & Knowledge Center', short: 'Deliver role-based learning, SOPs and answers at the point of need.', outcome: 'Confident teams' },
  { slug: 'compliance-management', icon: ShieldCheck, title: 'Compliance Management', short: 'Maintain complete, evidence-backed control over operational compliance.', outcome: 'Lower risk' },
  { slug: 'visual-merchandising', icon: Store, title: 'Visual Merchandising Execution', short: 'Launch, verify and improve every campaign across every store.', outcome: 'Perfect presentation' },
  { slug: 'promotion-management', icon: Target, title: 'Promotion Management', short: 'Coordinate promotional rollouts with real-time completion visibility.', outcome: 'Better campaign ROI' },
  { slug: 'roster-attendance', icon: CalendarCheck, title: 'Roster & Attendance', short: 'Simplify scheduling, attendance and frontline workforce planning.', outcome: 'Smarter coverage' },
  { slug: 'asset-management', icon: Boxes, title: 'Asset Management', short: 'Track ownership, condition and lifecycle from one source of truth.', outcome: 'Protected assets' },
  { slug: 'issue-resolution', icon: TicketCheck, title: 'Issue Tracking & Resolution', short: 'Route every issue to the right owner and close the loop faster.', outcome: 'Rapid resolution' },
]

const industries = [
  { slug: 'retail', icon: ShoppingBag, title: 'Retail', copy: 'Create consistent execution and visibility across complex store networks.' },
  { slug: 'restaurants-qsr', icon: Store, title: 'Restaurants & QSR', copy: 'Protect service, food safety and brand standards every shift.' },
  { slug: 'grocery-convenience', icon: PackageCheck, title: 'Grocery & Convenience', copy: 'Coordinate high-frequency operations without slowing teams down.' },
  { slug: 'fashion-luxury', icon: Sparkles, title: 'Fashion & Luxury', copy: 'Deliver flawless launches, presentation and client experience.' },
  { slug: 'pharmacy-drug-store', icon: ShieldCheck, title: 'Pharmacy & Drug Store', copy: 'Strengthen compliance and operational precision at every location.' },
]

const resources = [
  { slug: 'case-studies', icon: TrendingUp, title: 'Case Studies', copy: 'See how distributed teams improve execution with ACREBIS.' },
  { slug: 'blog', icon: FileText, title: 'Blog & Insights', copy: 'Practical ideas for modern frontline and retail leaders.' },
  { slug: 'help-center', icon: Headphones, title: 'Help Center & Support', copy: 'Guides, answers and product support when you need them.' },
]

const journey = [
  { step: '01', label: 'Plan', title: 'Turn strategy into clear action', copy: 'Create recurring tasks, smart checklists and campaigns with ownership, deadlines and location-level targeting.', icon: ClipboardCheck },
  { step: '02', label: 'Communicate', title: 'Reach the people who need to know', copy: 'Replace noisy channels with focused updates, confirmations and conversations tied to operational work.', icon: MessageSquareText },
  { step: '03', label: 'Execute', title: 'Make great work easy to complete', copy: 'Give frontline teams one simple mobile workspace for tasks, knowledge, training and proof of execution.', icon: Zap },
  { step: '04', label: 'Verify', title: 'See standards in real time', copy: 'Use audits, photo evidence and exception alerts to know what is happening across every location.', icon: CheckCircle2 },
  { step: '05', label: 'Improve', title: 'Turn activity into performance', copy: 'Surface patterns, benchmark locations and use AI-powered recommendations to continuously improve.', icon: TrendingUp },
]

const companyLinks = [
  { path: '/company/about', title: 'About Us', copy: 'Mission, story and executive team' },
  { path: '/company/careers', title: 'Careers', copy: 'Build the future of frontline work' },
  { path: '/company/partners', title: 'Partners', copy: 'Create more value together' },
  { path: '/company/contact', title: 'Contact Us', copy: 'Talk to our team' },
]

function pathFromLocation() {
  if (window.location.hash.startsWith('#/')) {
    const legacyPath = window.location.hash.slice(1)
    window.history.replaceState({},'',legacyPath)
  }
  const value = window.location.pathname.replace(/\/+$/, '') || '/'
  return value.startsWith('/') ? value : '/' + value
}

function Logo({ light = false }) {
  return <span className={'brand ' + (light ? 'brand-light' : '')} aria-label="ACREBIS AI">
    <span>acrebis</span><i>•</i><b>ai</b>
  </span>
}

function CinematicIntro({ onSkip }) {
  return <div className="cinematic-intro" onClick={onSkip} onKeyDown={event => (event.key === 'Enter' || event.key === ' ') && onSkip()} role="button" tabIndex="0" aria-label="Skip introduction">
    <div className="intro-grid"/>
    <div className="intro-light one"/><div className="intro-light two"/>
    <div className="intro-scene">
      <span className="intro-orbit orbit-one"/><span className="intro-orbit orbit-two"/><span className="intro-orbit orbit-three"/>
      <span className="intro-node node-one"/><span className="intro-node node-two"/><span className="intro-node node-three"/>
    </div>
    <div className="intro-brand"><Logo light/><div className="intro-rule"><i/></div><p>RETAIL OPERATIONS. IN PERFECT SYNC.</p></div>
    <span className="intro-skip">CLICK TO SKIP</span>
  </div>
}

function Link({ to, className = '', children, onClick }) {
  const navigate = event => {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    if (window.location.pathname !== to) window.history.pushState({},'',to)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
  return <a href={to} className={className} onClick={navigate}>{children}</a>
}

function ButtonLink({ to, variant = 'primary', children, onClick }) {
  return <Link to={to} className={'button button-' + variant} onClick={onClick}>{children}</Link>
}

function Header({ onDemo }) {
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

function DashboardPreview() {
  const [tab, setTab] = useState('Overview')
  const stageRef = useRef(null)
  const tilt = event => {
    if (!stageRef.current) return
    const bounds = stageRef.current.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - .5
    const y = (event.clientY - bounds.top) / bounds.height - .5
    stageRef.current.style.setProperty('--tilt-x', (y * -5) + 'deg')
    stageRef.current.style.setProperty('--tilt-y', (x * 7) + 'deg')
    stageRef.current.style.setProperty('--pointer-x', ((x + .5) * 100) + '%')
    stageRef.current.style.setProperty('--pointer-y', ((y + .5) * 100) + '%')
  }
  const resetTilt = () => {
    if (!stageRef.current) return
    stageRef.current.style.setProperty('--tilt-x','1deg')
    stageRef.current.style.setProperty('--tilt-y','-3deg')
  }
  return <div className="product-stage" ref={stageRef} onPointerMove={tilt} onPointerLeave={resetTilt}>
    <div className="product-aura"/>
    <div className="product-window">
      <aside>
        <span className="app-mark">a<i>•</i></span>
        {[LayoutDashboard, ClipboardCheck, Store, Users, BarChart3].map((Icon,index) => <span key={index} className={index === 0 ? 'active' : ''}><Icon/></span>)}
      </aside>
      <div className="product-main">
        <div className="product-top">
          <div><small>MONDAY, 17 AUGUST</small><h4>Good morning, Priya</h4></div>
          <div><Search/><Bell/><span>PN</span></div>
        </div>
        <div className="product-tabs">{['Overview','Tasks','Audits'].map(name => <button className={tab === name ? 'active' : ''} onClick={() => setTab(name)} key={name}>{name}</button>)}</div>
        <div className="product-metrics">
          <div><span>Execution score</span><strong>92.4%</strong><small>↑ 4.2%</small></div>
          <div><span>Active locations</span><strong>1,248</strong><small>All connected</small></div>
          <div><span>Open actions</span><strong>128</strong><small>18 high priority</small></div>
        </div>
        <div className="product-grid">
          <div className="performance-card">
            <div><small>EXECUTION PULSE</small><b>{tab} performance</b></div>
            <div className="bars">{[42,58,52,74,66,87,93].map((height,index) => <i key={index} style={{height: height + '%'}}><span>{['M','T','W','T','F','S','S'][index]}</span></i>)}</div>
          </div>
          <div className="activity-list">
            <small>LIVE ACTIVITY</small>
            <div><CheckCircle2/><span><b>Opening audit complete</b><small>Store #124 · 2m</small></span></div>
            <div><TicketCheck/><span><b>Priority issue assigned</b><small>Store #287 · 8m</small></span></div>
            <div><Target/><span><b>Campaign verified</b><small>North region · 14m</small></span></div>
          </div>
        </div>
      </div>
    </div>
    <div className="floating-card float-left"><CheckCircle2/><span><small>ACTION COMPLETED</small><b>Campaign display verified</b></span></div>
    <div className="floating-card float-right"><i/><span><b>1,248 locations</b><small>Connected live</small></span></div>
  </div>
}

function SectionHeading({ eyebrow, title, copy, center = false }) {
  return <div className={'section-heading ' + (center ? 'center' : '')}>
    <span className="eyebrow-text">{eyebrow}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>
}

function Home({ onDemo }) {
  const [activeJourney, setActiveJourney] = useState(0)
  const ActiveIcon = journey[activeJourney].icon
  return <main className="page-enter">
    <section className="hero-section">
      <div className="hero-orb"/>
      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="hero-pill"><Sparkles/> The operating system for modern retail</span>
          <h1>Every location.<br/>Every team.<br/><em>One operating rhythm.</em></h1>
          <p>ACREBIS connects head office strategy with frontline execution—giving every team the clarity, tools and intelligence to perform at their best.</p>
          <div className="button-row">
            <button className="button button-primary" onClick={onDemo}>Book a Demo <ArrowRight/></button>
            <ButtonLink to="/tour" variant="outline"><Play/> Watch Product Tour</ButtonLink>
          </div>
          <div className="hero-proof">
            <div><Check/> Fast to deploy</div><div><Check/> Built for frontline teams</div><div><Check/> Enterprise-ready</div>
          </div>
        </div>
        <DashboardPreview/>
      </div>
      <div className="container trust-strip">
        <span>One connected platform for</span>
        <div><b><Store/> Locations</b><b><Users/> Teams</b><b><ClipboardCheck/> Execution</b><b><BarChart3/> Insight</b></div>
      </div>
    </section>

    <section className="journey-section">
      <div className="container">
        <SectionHeading center eyebrow="FROM PLAN TO PERFORMANCE" title={<>Five workflows. <em>One connected system.</em></>} copy="Move from intention to measurable execution without the disconnected tools, manual follow-ups and blind spots."/>
        <div className="journey-tabs">
          {journey.map((item,index) => <button key={item.step} className={activeJourney === index ? 'active' : ''} onClick={() => setActiveJourney(index)}>
            <span>{item.step}</span><b>{item.label}</b><i/>
          </button>)}
        </div>
        <div className="journey-panel">
          <div className="journey-copy"><span className="journey-icon"><ActiveIcon/></span><small>STEP {journey[activeJourney].step}</small><h3>{journey[activeJourney].title}</h3><p>{journey[activeJourney].copy}</p><Link to="/platform">Explore the platform <ArrowRight/></Link></div>
          <div className="journey-visual">
            <div className="workflow-line"/>
            {journey.map(({icon: Icon,label},index) => <div className={activeJourney === index ? 'active' : ''} key={label}><span><Icon/></span><b>{label}</b></div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="why-section">
      <div className="container">
        <SectionHeading eyebrow="WHY ACREBIS" title={<>Turn operational complexity into <em>confident execution.</em></>} copy="Built for the realities of distributed businesses: fast-moving priorities, diverse teams and standards that cannot slip."/>
        <div className="value-grid">
          {[
            [TrendingUp,'See clearly','A live, role-relevant view of execution, exceptions and performance.'],
            [Zap,'Act faster','Automated routing, alerts and ownership that keep work moving.'],
            [ShieldCheck,'Stay consistent','Repeatable workflows and evidence-backed standards at scale.'],
          ].map(([Icon,title,copy]) => <article key={title}><span><Icon/></span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>

    <section className="platform-section">
      <div className="container split-heading">
        <SectionHeading eyebrow="PLATFORM OVERVIEW" title={<>Everything your frontline needs.<br/><em>Nothing it doesn’t.</em></>} />
        <div><p>One modular platform for communication, execution, learning, compliance and continuous improvement.</p><ButtonLink to="/platform/modules" variant="text">Explore all modules <ArrowRight/></ButtonLink></div>
      </div>
      <div className="container module-preview-grid">
        {modules.slice(0,6).map(({slug, icon: Icon, title, short},index) => <Link key={slug} to={'/platform/module/' + slug} className={'module-card ' + (index === 1 ? 'accent-card' : '')}>
          <span><Icon/></span><h3>{title}</h3><p>{short}</p><i><ArrowUpRight/></i>
        </Link>)}
      </div>
    </section>

    <section className="industries-section">
      <div className="container">
        <SectionHeading center eyebrow="SOLUTIONS BY INDUSTRY" title={<>Purpose-built for the way <em>your world works.</em></>} copy="Flexible workflows meet the unique standards, pace and complexity of your industry."/>
        <div className="industry-grid">
          {industries.map(({slug, icon: Icon, title, copy},index) => <Link key={slug} to={'/industries/' + slug} className="industry-card">
            <span className="industry-number">0{index + 1}</span><Icon/><h3>{title}</h3><p>{copy}</p><b>Explore solution <ArrowRight/></b>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="ai-section">
      <div className="container ai-layout">
        <div>
          <span className="eyebrow-text light">AI-POWERED PERFORMANCE</span>
          <h2>Know what happened.<br/><em>Understand what to do next.</em></h2>
          <p>ACREBIS turns operational activity into focused recommendations—helping leaders spot patterns, prioritise action and improve every cycle.</p>
          <ButtonLink to="/platform/ai-performance" variant="light">Explore ACREBIS Intelligence <ArrowRight/></ButtonLink>
        </div>
        <div className="insight-stack">
          <div className="insight-card"><span><WandSparkles/></span><div><small>AI RECOMMENDATION</small><b>Prioritise closing audits in West Region</b><p>Completion is 11% below the network benchmark.</p></div></div>
          <div className="insight-card"><span><AlertCircle/></span><div><small>EARLY SIGNAL</small><b>Display compliance is trending down</b><p>6 locations need attention before Friday.</p></div></div>
          <div className="insight-card"><span><TrendingUp/></span><div><small>PERFORMANCE WIN</small><b>Training improved task quality by 18%</b><p>Recommended for rollout across all regions.</p></div></div>
        </div>
      </div>
    </section>

    <section className="resource-section">
      <div className="container">
        <div className="split-heading">
          <SectionHeading eyebrow="RESOURCES & INSIGHTS" title={<>Ideas for better<br/><em>frontline performance.</em></>}/>
          <ButtonLink to="/resources" variant="outline">View all resources <ArrowRight/></ButtonLink>
        </div>
        <div className="resource-grid">
          {resources.map(({slug, icon: Icon, title, copy}) => <Link to={'/resources/' + slug} className="resource-card" key={slug}>
            <span><Icon/></span><small>ACREBIS RESOURCE</small><h3>{title}</h3><p>{copy}</p><b>Explore <ArrowRight/></b>
          </Link>)}
        </div>
      </div>
    </section>

    <CallToAction onDemo={onDemo}/>
  </main>
}

function CallToAction({ onDemo, compact = false }) {
  return <section className={'cta-section ' + (compact ? 'compact' : '')}>
    <div className="container cta-panel">
      <div><span>READY TO MOVE AS ONE?</span><h2>Turn every location into<br/>your best-performing location.</h2></div>
      <div className="button-row"><button className="button button-light" onClick={onDemo}>Book a Demo <ArrowRight/></button><ButtonLink to="/company/contact" variant="ghost-light">Contact Us</ButtonLink></div>
    </div>
  </section>
}

function PageHero({ eyebrow, title, copy, icon: Icon, onDemo }) {
  return <section className="inner-hero">
    <div className="container inner-hero-layout">
      <div><span className="eyebrow-text">{eyebrow}</span><h1>{title}</h1><p>{copy}</p><div className="button-row"><button className="button button-primary" onClick={onDemo}>Book a Demo <ArrowRight/></button><ButtonLink to="/platform" variant="outline">Explore Platform</ButtonLink></div></div>
      <div className="inner-hero-art"><span><Icon/></span><i/><i/><i/><b>Connected operations.<br/>Measurable performance.</b></div>
    </div>
  </section>
}

function ModulesPage({ onDemo }) {
  return <main className="page-enter">
    <PageHero eyebrow="PLATFORM MODULES" title={<>Everything your teams need<br/><em>in one place.</em></>} copy="Choose the capabilities you need today and expand as your operation grows. Every module shares one source of truth." icon={LayoutDashboard} onDemo={onDemo}/>
    <section className="directory-section"><div className="container">
      <SectionHeading eyebrow="CORE CAPABILITIES" title="Built around the work that drives performance." copy="Each module is powerful on its own and more valuable when connected."/>
      <div className="directory-grid">{modules.map(({slug, icon: Icon, title, short, outcome},index) => <Link to={'/platform/module/' + slug} className="directory-card" key={slug}>
        <span className="directory-index">{String(index + 1).padStart(2,'0')}</span><span className="directory-icon"><Icon/></span><h3>{title}</h3><p>{short}</p><b>{outcome}</b><ArrowUpRight/>
      </Link>)}</div>
    </div></section>
    <CallToAction onDemo={onDemo} compact/>
  </main>
}

function ModulePage({ item, onDemo }) {
  const Icon = item.icon
  return <main className="page-enter">
    <PageHero eyebrow="ACREBIS MODULE" title={<>{item.title}<br/><em>made effortlessly consistent.</em></>} copy={item.short + ' Built for fast adoption, complete visibility and measurable results across every location.'} icon={Icon} onDemo={onDemo}/>
    <section className="feature-section"><div className="container">
      <SectionHeading center eyebrow="HOW IT WORKS" title="From assignment to verified outcome." copy="A simple workflow for teams, with the control and intelligence leaders need."/>
      <div className="feature-grid">
        {[
          [Target,'Set the standard','Define the workflow, audience, timing and evidence required.'],
          [Users,'Guide every team','Give each person a clear, mobile-first experience.'],
          [BarChart3,'Measure the outcome','Monitor completion, quality, exceptions and trends live.'],
        ].map(([FeatureIcon,title,copy],index) => <article key={title}><small>0{index + 1}</small><span><FeatureIcon/></span><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
      <div className="benefit-band"><div><span><CheckCircle2/></span><h3>{item.outcome}</h3><p>Connect this module with the rest of ACREBIS for one operational view and a continuous improvement loop.</p></div><ButtonLink to="/platform/modules" variant="light">View all modules <ArrowRight/></ButtonLink></div>
    </div></section>
    <CallToAction onDemo={onDemo} compact/>
  </main>
}

function PlatformPage({ onDemo, type = 'overview' }) {
  const isIntegrations = type === 'integrations'
  const isAi = type === 'ai'
  const title = isIntegrations ? <>Connect the tools your teams<br/><em>already rely on.</em></> : isAi ? <>Operational intelligence that<br/><em>turns insight into action.</em></> : <>One platform. Every location.<br/><em>Complete operational clarity.</em></>
  const copy = isIntegrations ? 'Bring ACREBIS into your existing technology ecosystem with secure, flexible integrations and connected data.' : isAi ? 'Surface the patterns, risks and next-best actions hidden across your operation with AI-powered performance intelligence.' : 'Plan, communicate, execute, verify and improve from one modular workspace built for distributed teams.'
  const Icon = isIntegrations ? Plug : isAi ? WandSparkles : LayoutDashboard
  return <main className="page-enter">
    <PageHero eyebrow={isIntegrations ? 'TECHNOLOGY & INTEGRATIONS' : isAi ? 'AI-POWERED PERFORMANCE' : 'PLATFORM OVERVIEW'} title={title} copy={copy} icon={Icon} onDemo={onDemo}/>
    <section className="feature-section"><div className="container">
      <SectionHeading center eyebrow="CONNECTED BY DESIGN" title={isIntegrations ? 'A flexible foundation for connected operations.' : isAi ? 'Intelligence that works at operational speed.' : 'One source of truth from strategy to store floor.'} copy="Secure, scalable and simple enough for every team to use."/>
      <div className="feature-grid">
        {(isIntegrations ? [
          [Plug,'Open integrations','Connect HR, BI, SSO, communications and business systems.'],
          [ShieldCheck,'Enterprise security','Role-based access, auditability and secure data practices.'],
          [Rocket,'Built to scale','Support changing structures, workflows and global expansion.'],
        ] : isAi ? [
          [Search,'Find patterns','See exceptions and trends that are easy to miss manually.'],
          [Target,'Prioritise action','Focus teams on the work with the greatest operational impact.'],
          [TrendingUp,'Improve continuously','Measure interventions and build repeatable performance gains.'],
        ] : [
          [ClipboardCheck,'Plan & execute','Translate priorities into clear, accountable work.'],
          [MessageSquareText,'Align & enable','Connect communication, knowledge and learning to action.'],
          [BarChart3,'Verify & improve','Measure outcomes and continuously raise performance.'],
        ]).map(([FeatureIcon,label,text],index) => <article key={label}><small>0{index + 1}</small><span><FeatureIcon/></span><h3>{label}</h3><p>{text}</p></article>)}
      </div>
    </div></section>
    {!isIntegrations && <section className="mini-directory"><div className="container"><SectionHeading eyebrow="MODULAR BY DESIGN" title="Start with what matters most."/><div>{modules.slice(0,4).map(({slug,title,icon: ModuleIcon}) => <Link key={slug} to={'/platform/module/' + slug}><ModuleIcon/><b>{title}</b><ArrowRight/></Link>)}</div></div></section>}
    <CallToAction onDemo={onDemo} compact/>
  </main>
}

function IndustriesPage({ item, onDemo }) {
  if (!item) return <main className="page-enter">
    <PageHero eyebrow="SOLUTIONS BY INDUSTRY" title={<>One platform, shaped around<br/><em>the way your industry works.</em></>} copy="Adaptable workflows meet the specific pace, standards and frontline realities of every sector we serve." icon={Building2} onDemo={onDemo}/>
    <section className="directory-section"><div className="container"><div className="industry-directory">{industries.map(({slug,icon:Icon,title,copy},index) => <Link to={'/industries/' + slug} key={slug}><small>0{index + 1}</small><Icon/><h3>{title}</h3><p>{copy}</p><b>Explore industry <ArrowRight/></b></Link>)}</div></div></section>
    <CallToAction onDemo={onDemo} compact/>
  </main>
  const Icon = item.icon
  return <main className="page-enter">
    <PageHero eyebrow={'SOLUTIONS FOR ' + item.title.toUpperCase()} title={<>Raise standards across every<br/><em>{item.title.toLowerCase()} location.</em></>} copy={item.copy + ' ACREBIS gives leaders control without adding complexity for frontline teams.'} icon={Icon} onDemo={onDemo}/>
    <section className="feature-section"><div className="container">
      <SectionHeading center eyebrow="BUILT FOR YOUR OPERATION" title="Consistency without compromise." copy="Create the right operating rhythm across people, processes and locations."/>
      <div className="feature-grid">{[
        [ClipboardCheck,'Standardise execution','Digitise daily, weekly and campaign workflows with clear proof.'],
        [ShieldCheck,'Protect every standard','Identify compliance gaps early and close corrective action loops.'],
        [TrendingUp,'Improve performance','Compare locations, surface patterns and share what works.'],
      ].map(([FeatureIcon,title,copy],index) => <article key={title}><small>0{index + 1}</small><span><FeatureIcon/></span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>
    <CallToAction onDemo={onDemo} compact/>
  </main>
}

function ResourcePage({ item, onDemo }) {
  if (!item) return <main className="page-enter">
    <PageHero eyebrow="RESOURCES & INSIGHTS" title={<>Ideas, guidance and support<br/><em>for better operations.</em></>} copy="Explore practical content for leaders building more connected, consistent and capable frontline teams." icon={BookOpen} onDemo={onDemo}/>
    <section className="directory-section"><div className="container resource-grid">{resources.map(({slug,icon:Icon,title,copy}) => <Link to={'/resources/' + slug} className="resource-card" key={slug}><span><Icon/></span><small>RESOURCE CENTRE</small><h3>{title}</h3><p>{copy}</p><b>Explore <ArrowRight/></b></Link>)}</div></section>
    <CallToAction onDemo={onDemo} compact/>
  </main>
  const Icon = item.icon
  return <main className="page-enter">
    <PageHero eyebrow="RESOURCES & INSIGHTS" title={<>{item.title}<br/><em>for modern operators.</em></>} copy={item.copy + ' New ACREBIS resources will be published here.'} icon={Icon} onDemo={onDemo}/>
    <section className="article-section"><div className="container">
      <SectionHeading eyebrow="FEATURED" title="Latest from ACREBIS."/>
      <div className="article-grid">{['The connected frontline playbook','Why operational visibility changes performance','From checklists to continuous improvement'].map((title,index) => <article key={title}><span>{item.title}</span><div className="article-art"><Icon/></div><small>8 MIN READ · INSIGHT 0{index + 1}</small><h3>{title}</h3><p>Practical guidance for making distributed operations clearer, faster and more consistent.</p><Link to="/company/contact">Read more <ArrowRight/></Link></article>)}</div>
    </div></section>
    <CallToAction onDemo={onDemo} compact/>
  </main>
}

const companyPageContent = {
  about: ['ABOUT ACREBIS', <>Building the operating system<br/><em>for exceptional frontline work.</em></>, 'Our mission is to help every distributed business turn strategy into confident, measurable execution.', HeartHandshake],
  careers: ['CAREERS', <>Do work that helps millions<br/><em>of frontline people thrive.</em></>, 'Join a thoughtful, ambitious team building simpler and smarter ways to operate.', Building2],
  partners: ['PARTNERS', <>Create more value.<br/><em>Together.</em></>, 'Partner with ACREBIS to deliver connected technology, expertise and outcomes for customers.', Users],
  contact: ['CONTACT US', <>Let’s talk about<br/><em>your operation.</em></>, 'Tell us what you want to improve and our team will help you find the right next step.', Mail],
}

function CompanyPage({ type = 'about', onDemo }) {
  const content = companyPageContent[type] || companyPageContent.about
  const Icon = content[3]
  return <main className="page-enter">
    <PageHero eyebrow={content[0]} title={content[1]} copy={content[2]} icon={Icon} onDemo={onDemo}/>
    <section className="company-section"><div className="container company-layout">
      <div><span className="eyebrow-text">{type === 'contact' ? 'START A CONVERSATION' : 'WHAT GUIDES US'}</span><h2>{type === 'contact' ? 'We would love to hear from you.' : 'Simple. Smart. Seamless. Scalable.'}</h2><p>{type === 'contact' ? 'Share a little about your team and priorities. We will connect you with the right ACREBIS specialist.' : 'We believe operational technology should make work clearer—not add another layer of complexity. That principle shapes every decision we make.'}</p></div>
      {type === 'contact' ? <ContactForm/> : <div className="principle-grid">{[
        ['01','Built for people','Tools that respect the realities of frontline work.'],
        ['02','Designed for clarity','The right information and action at the right time.'],
        ['03','Focused on outcomes','Technology that creates measurable operating value.'],
        ['04','Ready to scale','A secure foundation for complex organisations.'],
      ].map(([number,title,copy]) => <article key={number}><small>{number}</small><h3>{title}</h3><p>{copy}</p></article>)}</div>}
    </div></section>
    <CallToAction onDemo={onDemo} compact/>
  </main>
}

function ContactForm() {
  const [sent,setSent] = useState(false)
  if (sent) return <div className="form-success"><CheckCircle2/><h3>Thank you.</h3><p>Your message is ready for the ACREBIS team.</p></div>
  return <form className="contact-form" onSubmit={event => {event.preventDefault();setSent(true)}}>
    <label>Full name<input required placeholder="Your name"/></label>
    <label>Work email<input required type="email" placeholder="name@company.com"/></label>
    <label>Company<input required placeholder="Company name"/></label>
    <label>How can we help?<textarea required placeholder="Tell us about your priorities"/></label>
    <button className="button button-primary">Send message <ArrowRight/></button>
  </form>
}

function PricingPage({ onDemo }) {
  return <main className="page-enter">
    <PageHero eyebrow="PRICING" title={<>A platform that grows<br/><em>with your operation.</em></>} copy="ACREBIS pricing is tailored to your locations, modules and rollout needs. Start focused and expand at your pace." icon={BarChart3} onDemo={onDemo}/>
    <section className="pricing-section"><div className="container pricing-grid">
      <article><span>START</span><h3>Focused rollout</h3><p>For teams digitising a priority workflow or selected group of locations.</p><ul><li><Check/> Selected core modules</li><li><Check/> Mobile and web access</li><li><Check/> Guided implementation</li><li><Check/> Standard reporting</li></ul><button onClick={onDemo} className="button button-outline">Talk to sales</button></article>
      <article className="featured"><span>MOST FLEXIBLE</span><h3>Connected operations</h3><p>For multi-location businesses connecting people, work and insight.</p><ul><li><Check/> Multiple connected modules</li><li><Check/> Advanced analytics</li><li><Check/> Integrations and SSO</li><li><Check/> Dedicated success support</li></ul><button onClick={onDemo} className="button button-light">Build your plan</button></article>
      <article><span>ENTERPRISE</span><h3>At-scale transformation</h3><p>For complex organisations standardising execution across markets.</p><ul><li><Check/> Enterprise configuration</li><li><Check/> AI-powered performance</li><li><Check/> Custom integrations</li><li><Check/> Strategic rollout services</li></ul><button onClick={onDemo} className="button button-outline">Contact us</button></article>
    </div></section>
  </main>
}

function LoginPage() {
  const portals = [
    [UserRoundCheck,'Customer Login','Access your organisation workspace.'],
    [LayoutDashboard,'Admin Login','Manage teams, workflows and reporting.'],
    [HeartHandshake,'Partner Login','Access partner resources and opportunities.'],
  ]
  return <main className="page-enter login-page"><div className="container login-layout"><div><span className="eyebrow-text">WELCOME BACK</span><h1>Choose your<br/><em>ACREBIS portal.</em></h1><p>Secure access for customers, administrators and partners.</p></div><div className="portal-grid">{portals.map(([Icon,title,copy]) => <button key={title}><span><Icon/></span><div><h3>{title}</h3><p>{copy}</p></div><ArrowRight/></button>)}</div></div></main>
}

const legalContent = {
  legal: ['Legal','Important information about ACREBIS, our services and use of this website.'],
  privacy: ['Privacy Policy','How ACREBIS collects, uses, stores and protects personal information.'],
  terms: ['Terms & Cookie Policy','The terms governing website use and how cookies support your experience.'],
  security: ['Security','Our approach to protecting customer data, access and platform availability.'],
}

function LegalPage({ type = 'legal' }) {
  const content = legalContent[type] || legalContent.legal
  return <main className="page-enter legal-page"><section className="legal-hero"><div className="container"><span className="eyebrow-text">ACREBIS LEGAL</span><h1>{content[0]}</h1><p>{content[1]}</p></div></section><section><div className="container legal-layout"><aside>{Object.entries(legalContent).map(([key,value]) => <Link key={key} to={'/' + (key === 'legal' ? 'legal' : key === 'privacy' ? 'privacy-policy' : key === 'terms' ? 'terms-cookies' : 'security')}>{value[0]}</Link>)}</aside><article><p className="updated">Last updated: 17 August 2026</p><h2>Our commitment</h2><p>ACREBIS is committed to operating responsibly, transparently and securely. This page is prepared as a structured placeholder for final legal copy supplied by qualified counsel.</p><h2>Scope</h2><p>The final policy will explain its scope, the responsibilities of ACREBIS and its users, and the controls available to customers and website visitors.</p><h2>Questions</h2><p>For questions about this policy, contact the ACREBIS team through the Contact Us page.</p></article></div></section></main>
}

function TourPage({ onDemo }) {
  return <main className="page-enter"><PageHero eyebrow="PRODUCT TOUR" title={<>See connected execution<br/><em>in action.</em></>} copy="Take a guided look at how ACREBIS connects plans, teams, workflows and insight." icon={Play} onDemo={onDemo}/><section className="tour-section"><div className="container"><div className="video-placeholder"><span><Play fill="currentColor"/></span><small>ACREBIS PLATFORM TOUR</small><h3>Every location. Every team. One operating rhythm.</h3><p>Product video placeholder — ready for the final hosted video.</p></div></div></section><CallToAction onDemo={onDemo} compact/></main>
}

function NotFound() {
  return <main className="not-found"><span>404</span><h1>That page is not here.</h1><p>Let’s get you back to connected operations.</p><ButtonLink to="/" variant="primary">Back to home <ArrowRight/></ButtonLink></main>
}

function DemoModal({ onClose }) {
  const [sent,setSent] = useState(false)
  useEffect(() => {
    const close = event => event.key === 'Escape' && onClose()
    window.addEventListener('keydown',close)
    return () => window.removeEventListener('keydown',close)
  },[onClose])
  return <div className="modal-backdrop" onMouseDown={onClose}><div className="demo-modal" onMouseDown={event => event.stopPropagation()}>
    <button className="modal-close" onClick={onClose}><X/></button>
    <div className="modal-intro"><Logo light/><span><Rocket/></span><h2>See what connected execution could look like for your team.</h2><p>Tell us a little about your operation and we’ll tailor the conversation.</p><div><b><Check/> 30-minute discovery call</b><b><Check/> Relevant platform walkthrough</b><b><Check/> No obligation</b></div></div>
    {sent ? <div className="modal-success"><CheckCircle2/><h3>Thanks — you’re all set.</h3><p>The demo request has been captured in this prototype.</p><button className="button button-primary" onClick={onClose}>Continue exploring</button></div> : <form onSubmit={event => {event.preventDefault();setSent(true)}}>
      <span className="eyebrow-text">BOOK A DEMO</span><h3>Let’s start with the basics.</h3>
      <label>Full name<input required placeholder="Your full name"/></label>
      <label>Work email<input required type="email" placeholder="you@company.com"/></label>
      <label>Company<input required placeholder="Company name"/></label>
      <label>Number of locations<select defaultValue=""><option value="" disabled>Select a range</option><option>1–20</option><option>21–100</option><option>101–500</option><option>500+</option></select></label>
      <button className="button button-primary">Request my demo <ArrowRight/></button>
    </form>}
  </div></div>
}

function Footer({ onDemo }) {
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

function RouteView({ path, onDemo }) {
  if (path === '/') return <Home onDemo={onDemo}/>
  if (path === '/platform') return <PlatformPage onDemo={onDemo}/>
  if (path === '/platform/modules') return <ModulesPage onDemo={onDemo}/>
  if (path === '/platform/integrations') return <PlatformPage type="integrations" onDemo={onDemo}/>
  if (path === '/platform/ai-performance') return <PlatformPage type="ai" onDemo={onDemo}/>
  if (path.startsWith('/platform/module/')) return <ModulePage item={modules.find(item => item.slug === path.split('/').pop()) || modules[0]} onDemo={onDemo}/>
  if (path === '/industries') return <IndustriesPage onDemo={onDemo}/>
  if (path.startsWith('/industries/')) return <IndustriesPage item={industries.find(item => item.slug === path.split('/').pop())} onDemo={onDemo}/>
  if (path === '/resources') return <ResourcePage onDemo={onDemo}/>
  if (path.startsWith('/resources/')) return <ResourcePage item={resources.find(item => item.slug === path.split('/').pop())} onDemo={onDemo}/>
  if (path.startsWith('/company/')) return <CompanyPage type={path.split('/').pop()} onDemo={onDemo}/>
  if (path === '/pricing') return <PricingPage onDemo={onDemo}/>
  if (path === '/login') return <LoginPage/>
  if (path === '/tour') return <TourPage onDemo={onDemo}/>
  if (path === '/legal') return <LegalPage type="legal"/>
  if (path === '/privacy-policy') return <LegalPage type="privacy"/>
  if (path === '/terms-cookies') return <LegalPage type="terms"/>
  if (path === '/security') return <LegalPage type="security"/>
  return <NotFound/>
}

function App() {
  const [path,setPath] = useState(pathFromLocation)
  const [demoOpen,setDemoOpen] = useState(false)
  const [introOpen,setIntroOpen] = useState(true)
  useEffect(() => {
    const change = () => setPath(pathFromLocation())
    window.addEventListener('popstate',change)
    return () => window.removeEventListener('popstate',change)
  },[])
  useEffect(() => {
    window.scrollTo({top:0,behavior:'instant'})
    const lastPart = path.split('/').filter(Boolean).pop() || 'Home'
    document.title = path === '/' ? 'ACREBIS | Connected Retail Operations' : 'ACREBIS | ' + lastPart.replaceAll('-',' ').replace(/\b\w/g,letter => letter.toUpperCase())
  },[path])
  useEffect(() => {
    const timer = window.setTimeout(() => setIntroOpen(false), 2450)
    const skip = event => event.key === 'Escape' && setIntroOpen(false)
    window.addEventListener('keydown',skip)
    return () => { window.clearTimeout(timer); window.removeEventListener('keydown',skip) }
  },[])
  useEffect(() => {
    const glow = document.querySelector('.cursor-glow')
    const onPointerMove = event => {
      if (glow) glow.style.transform = 'translate3d(' + event.clientX + 'px,' + event.clientY + 'px,0)'
    }
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--scroll-progress', (max > 0 ? (window.scrollY / max) * 100 : 0) + '%')
    }
    const onPointerDown = event => {
      if (!event.target.closest('a,button')) return
      const ripple = document.createElement('span')
      ripple.className = 'click-ripple'
      ripple.style.left = event.clientX + 'px'
      ripple.style.top = event.clientY + 'px'
      document.body.appendChild(ripple)
      ripple.addEventListener('animationend', () => ripple.remove(), {once:true})
    }
    window.addEventListener('pointermove',onPointerMove)
    window.addEventListener('scroll',onScroll,{passive:true})
    window.addEventListener('pointerdown',onPointerDown)
    onScroll()
    return () => {
      window.removeEventListener('pointermove',onPointerMove)
      window.removeEventListener('scroll',onScroll)
      window.removeEventListener('pointerdown',onPointerDown)
    }
  },[])
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const items = document.querySelectorAll('.section-heading,.journey-tabs,.journey-panel,.value-grid article,.module-card,.industry-card,.insight-card,.resource-card,.cta-panel,.inner-hero-layout,.directory-card,.feature-grid article,.benefit-band,.article-grid article,.pricing-grid article,.company-layout,.portal-grid button')
      items.forEach((item,index) => {
        item.classList.add('reveal-item')
        item.style.setProperty('--reveal-delay', ((index % 6) * 55) + 'ms')
      })
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }),{threshold:.1})
      items.forEach(item => observer.observe(item))
      window.__acrebisRevealObserver = observer
    })
    return () => {
      window.cancelAnimationFrame(frame)
      window.__acrebisRevealObserver?.disconnect()
    }
  },[path])
  return <>
    {introOpen && <CinematicIntro onSkip={() => setIntroOpen(false)}/>} 
    <div className="scroll-progress"/><div className="cursor-glow"/>
    <div className="top-line"/>
    <Header onDemo={() => setDemoOpen(true)}/>
    <RouteView path={path} onDemo={() => setDemoOpen(true)}/>
    <Footer onDemo={() => setDemoOpen(true)}/>
    {demoOpen && <DemoModal onClose={() => setDemoOpen(false)}/>}
  </>
}

createRoot(document.getElementById('root')).render(<App/>)
