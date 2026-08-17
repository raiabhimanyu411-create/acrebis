import React from 'react'
import { ArrowRight } from 'lucide-react'
import { CallToAction, Link, PageHero, SectionHeading } from '../components/ui'

export default function ResourceDetailPage({ item, onDemo }) {
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
