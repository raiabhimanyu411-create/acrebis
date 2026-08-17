import React from 'react'
import { ArrowRight, Building2 } from 'lucide-react'
import { CallToAction, Link, PageHero } from '../components/ui'
import { industries } from '../data/siteData'

export default function IndustriesPage({ onDemo }) {
  return <main className="page-enter">
    <PageHero eyebrow="SOLUTIONS BY INDUSTRY" title={<>One platform, shaped around<br/><em>the way your industry works.</em></>} copy="Adaptable workflows meet the specific pace, standards and frontline realities of every sector we serve." icon={Building2} onDemo={onDemo}/>
    <section className="directory-section"><div className="container"><div className="industry-directory">{industries.map(({slug,icon:Icon,title,copy},index) => <Link to={'/industries/' + slug} key={slug}><small>0{index + 1}</small><Icon/><h3>{title}</h3><p>{copy}</p><b>Explore industry <ArrowRight/></b></Link>)}</div></div></section>
    <CallToAction onDemo={onDemo} compact/>
  </main>
}
