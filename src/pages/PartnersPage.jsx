import React from 'react'
import { Users } from 'lucide-react'
import { CallToAction, PageHero } from '../components/ui'

export default function PartnersPage({ onDemo }) {
  const partnerTypes = [
    ['01','Technology partners','Connect systems and create a seamless customer ecosystem.'],
    ['02','Implementation partners','Help customers move from ambition to adoption faster.'],
    ['03','Advisory partners','Combine operational expertise with connected execution.'],
    ['04','Referral partners','Introduce organisations ready to transform frontline work.'],
  ]
  return <main className="page-enter">
    <PageHero eyebrow="PARTNERS" title={<>Create more value.<br/><em>Together.</em></>} copy="Partner with ACREBIS to deliver connected technology, expertise and outcomes for customers." icon={Users} onDemo={onDemo}/>
    <section className="company-section"><div className="container company-layout">
      <div><span className="eyebrow-text">PARTNER ECOSYSTEM</span><h2>Better connected.</h2><p>Our partner programme brings complementary technology, market knowledge and delivery expertise together around customer success.</p></div>
      <div className="principle-grid">{partnerTypes.map(([number,title,copy]) => <article key={number}><small>{number}</small><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>
    <CallToAction onDemo={onDemo} compact/>
  </main>
}
