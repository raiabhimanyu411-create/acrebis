import React, { useState } from 'react'
import {
  AlertCircle, ArrowRight, ArrowUpRight, BarChart3, Check, CheckCircle2,
  ClipboardCheck, MessageSquareText, Play, ShieldCheck, Sparkles, Store,
  TrendingUp, Users, WandSparkles, Zap
} from 'lucide-react'
import DashboardPreview from '../components/DashboardPreview'
import { ButtonLink, CallToAction, Link, SectionHeading } from '../components/ui'
import { industries, journey, modules, resources } from '../data/siteData'

export default function HomePage({ onDemo }) {
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
