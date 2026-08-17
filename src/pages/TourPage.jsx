import React from 'react'
import { Play } from 'lucide-react'
import { CallToAction, PageHero } from '../components/ui'

export default function TourPage({ onDemo }) {
  return <main className="page-enter"><PageHero eyebrow="PRODUCT TOUR" title={<>See connected execution<br/><em>in action.</em></>} copy="Take a guided look at how ACREBIS connects plans, teams, workflows and insight." icon={Play} onDemo={onDemo}/><section className="tour-section"><div className="container"><div className="video-placeholder"><span><Play fill="currentColor"/></span><small>ACREBIS PLATFORM TOUR</small><h3>Every location. Every team. One operating rhythm.</h3><p>Product video placeholder — ready for the final hosted video.</p></div></div></section><CallToAction onDemo={onDemo} compact/></main>
}
