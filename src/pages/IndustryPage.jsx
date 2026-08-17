import React from 'react'
import { ClipboardCheck, ShieldCheck, TrendingUp } from 'lucide-react'
import { CallToAction, PageHero, SectionHeading } from '../components/ui'

export default function IndustryPage({ item, onDemo }) {
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
