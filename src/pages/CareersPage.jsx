import React from 'react'
import { Building2 } from 'lucide-react'
import { CallToAction, PageHero } from '../components/ui'

export default function CareersPage({ onDemo }) {
  const values = [
    ['01','Solve real problems','Build tools that make everyday work tangibly better.'],
    ['02','Think with care','Pair ambition with judgment, empathy and craft.'],
    ['03','Own the outcome','Work across boundaries and stay close to customer value.'],
    ['04','Grow together','Share context, feedback and success generously.'],
  ]
  return <main className="page-enter">
    <PageHero eyebrow="CAREERS" title={<>Do work that helps millions<br/><em>of frontline people thrive.</em></>} copy="Join a thoughtful, ambitious team building simpler and smarter ways to operate." icon={Building2} onDemo={onDemo}/>
    <section className="company-section"><div className="container company-layout">
      <div><span className="eyebrow-text">LIFE AT ACREBIS</span><h2>Build with purpose.</h2><p>We are creating a category-defining platform with people who care deeply about customers, quality and one another. Open roles will be published here as the team grows.</p></div>
      <div className="principle-grid">{values.map(([number,title,copy]) => <article key={number}><small>{number}</small><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>
    <CallToAction onDemo={onDemo} compact/>
  </main>
}
