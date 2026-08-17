import React from 'react'
import { Link } from '../components/ui'

const legalContent = {
  legal: ['Legal','Important information about ACREBIS, our services and use of this website.'],
  privacy: ['Privacy Policy','How ACREBIS collects, uses, stores and protects personal information.'],
  terms: ['Terms & Cookie Policy','The terms governing website use and how cookies support your experience.'],
  security: ['Security','Our approach to protecting customer data, access and platform availability.'],
}

export default function LegalPage({ type = 'legal' }) {
  const content = legalContent[type] || legalContent.legal
  return <main className="page-enter legal-page"><section className="legal-hero"><div className="container"><span className="eyebrow-text">ACREBIS LEGAL</span><h1>{content[0]}</h1><p>{content[1]}</p></div></section><section><div className="container legal-layout"><aside>{Object.entries(legalContent).map(([key,value]) => <Link key={key} to={'/' + (key === 'legal' ? 'legal' : key === 'privacy' ? 'privacy-policy' : key === 'terms' ? 'terms-cookies' : 'security')}>{value[0]}</Link>)}</aside><article><p className="updated">Last updated: 17 August 2026</p><h2>Our commitment</h2><p>ACREBIS is committed to operating responsibly, transparently and securely. This page is prepared as a structured placeholder for final legal copy supplied by qualified counsel.</p><h2>Scope</h2><p>The final policy will explain its scope, the responsibilities of ACREBIS and its users, and the controls available to customers and website visitors.</p><h2>Questions</h2><p>For questions about this policy, contact the ACREBIS team through the Contact Us page.</p></article></div></section></main>
}
