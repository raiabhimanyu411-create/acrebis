import React from 'react'
import { Mail } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import { CallToAction, PageHero } from '../components/ui'

export default function ContactPage({ onDemo }) {
  return <main className="page-enter">
    <PageHero eyebrow="CONTACT US" title={<>Let’s talk about<br/><em>your operation.</em></>} copy="Tell us what you want to improve and our team will help you find the right next step." icon={Mail} onDemo={onDemo}/>
    <section className="company-section"><div className="container company-layout">
      <div><span className="eyebrow-text">START A CONVERSATION</span><h2>We would love to hear from you.</h2><p>Share a little about your team and priorities. We will connect you with the right ACREBIS specialist.</p></div>
      <ContactForm/>
    </div></section>
    <CallToAction onDemo={onDemo} compact/>
  </main>
}
