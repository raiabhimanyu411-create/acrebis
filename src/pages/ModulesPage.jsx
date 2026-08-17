import React from 'react'
import { ArrowUpRight, LayoutDashboard } from 'lucide-react'
import { CallToAction, Link, PageHero, SectionHeading } from '../components/ui'
import { modules } from '../data/siteData'

export default function ModulesPage({ onDemo }) {
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
