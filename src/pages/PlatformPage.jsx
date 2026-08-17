import React from 'react'
import { BarChart3, ClipboardCheck, LayoutDashboard, MessageSquareText, Plug, Rocket, Search, ShieldCheck, Target, TrendingUp, WandSparkles } from 'lucide-react'
import { CallToAction, Link, PageHero, SectionHeading } from '../components/ui'
import { modules } from '../data/siteData'

export default function PlatformPage({ onDemo, type = 'overview' }) {
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
    {!isIntegrations && <section className="mini-directory"><div className="container"><SectionHeading eyebrow="MODULAR BY DESIGN" title="Start with what matters most."/><div>{modules.slice(0,4).map(({slug,title,icon: ModuleIcon}) => <Link key={slug} to={'/platform/module/' + slug}><ModuleIcon/><b>{title}</b><ArrowFallback/></Link>)}</div></div></section>}
    <CallToAction onDemo={onDemo} compact/>
  </main>
}

function ArrowFallback() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
}
