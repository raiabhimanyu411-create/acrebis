import React from 'react'
import { HeartHandshake } from 'lucide-react'
import { CallToAction, PageHero } from '../components/ui'

export default function AboutPage({ onDemo }) {
  const principles = [
    ['01','Built for people','Tools that respect the realities of frontline work.'],
    ['02','Designed for clarity','The right information and action at the right time.'],
    ['03','Focused on outcomes','Technology that creates measurable operating value.'],
    ['04','Ready to scale','A secure foundation for complex organisations.'],
  ]
  return <main className="page-enter">
    <PageHero eyebrow="ABOUT ACREBIS" title={<>Building the operating system<br/><em>for exceptional frontline work.</em></>} copy="Our mission is to help every distributed business turn strategy into confident, measurable execution." icon={HeartHandshake} onDemo={onDemo}/>
    <section className="company-section"><div className="container company-layout">
      <div><span className="eyebrow-text">OUR MISSION</span><h2>Simple. Smart. Seamless. Scalable.</h2><p>We believe operational technology should make work clearer—not add another layer of complexity. That principle shapes our platform, our team and every customer partnership.</p></div>
      <div className="principle-grid">{principles.map(([number,title,copy]) => <article key={number}><small>{number}</small><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>
    <CallToAction onDemo={onDemo} compact/>
  </main>
}
