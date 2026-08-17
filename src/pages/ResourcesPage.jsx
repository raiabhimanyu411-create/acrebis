import React from 'react'
import { ArrowRight, BookOpen } from 'lucide-react'
import { CallToAction, Link, PageHero } from '../components/ui'
import { resources } from '../data/siteData'

export default function ResourcesPage({ onDemo }) {
  return <main className="page-enter">
    <PageHero eyebrow="RESOURCES & INSIGHTS" title={<>Ideas, guidance and support<br/><em>for better operations.</em></>} copy="Explore practical content for leaders building more connected, consistent and capable frontline teams." icon={BookOpen} onDemo={onDemo}/>
    <section className="directory-section"><div className="container resource-grid">{resources.map(({slug,icon:Icon,title,copy}) => <Link to={'/resources/' + slug} className="resource-card" key={slug}><span><Icon/></span><small>RESOURCE CENTRE</small><h3>{title}</h3><p>{copy}</p><b>Explore <ArrowRight/></b></Link>)}</div></section>
    <CallToAction onDemo={onDemo} compact/>
  </main>
}
