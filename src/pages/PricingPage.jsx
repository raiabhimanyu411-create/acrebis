import React from 'react'
import { BarChart3, Check } from 'lucide-react'
import { PageHero } from '../components/ui'

export default function PricingPage({ onDemo }) {
  return <main className="page-enter">
    <PageHero eyebrow="PRICING" title={<>A platform that grows<br/><em>with your operation.</em></>} copy="ACREBIS pricing is tailored to your locations, modules and rollout needs. Start focused and expand at your pace." icon={BarChart3} onDemo={onDemo}/>
    <section className="pricing-section"><div className="container pricing-grid">
      <article><span>START</span><h3>Focused rollout</h3><p>For teams digitising a priority workflow or selected group of locations.</p><ul><li><Check/> Selected core modules</li><li><Check/> Mobile and web access</li><li><Check/> Guided implementation</li><li><Check/> Standard reporting</li></ul><button onClick={onDemo} className="button button-outline">Talk to sales</button></article>
      <article className="featured"><span>MOST FLEXIBLE</span><h3>Connected operations</h3><p>For multi-location businesses connecting people, work and insight.</p><ul><li><Check/> Multiple connected modules</li><li><Check/> Advanced analytics</li><li><Check/> Integrations and SSO</li><li><Check/> Dedicated success support</li></ul><button onClick={onDemo} className="button button-light">Build your plan</button></article>
      <article><span>ENTERPRISE</span><h3>At-scale transformation</h3><p>For complex organisations standardising execution across markets.</p><ul><li><Check/> Enterprise configuration</li><li><Check/> AI-powered performance</li><li><Check/> Custom integrations</li><li><Check/> Strategic rollout services</li></ul><button onClick={onDemo} className="button button-outline">Contact us</button></article>
    </div></section>
  </main>
}
