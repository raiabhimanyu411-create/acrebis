import React, { useEffect, useState } from 'react'
import { ArrowRight, Check, CheckCircle2, Rocket, X } from 'lucide-react'
import { Logo } from './ui'

export default function DemoModal({ onClose }) {
  const [sent,setSent] = useState(false)
  useEffect(() => {
    const close = event => event.key === 'Escape' && onClose()
    window.addEventListener('keydown',close)
    return () => window.removeEventListener('keydown',close)
  },[onClose])
  return <div className="modal-backdrop" onMouseDown={onClose}><div className="demo-modal" onMouseDown={event => event.stopPropagation()}>
    <button className="modal-close" onClick={onClose}><X/></button>
    <div className="modal-intro"><Logo light/><span><Rocket/></span><h2>See what connected execution could look like for your team.</h2><p>Tell us a little about your operation and we’ll tailor the conversation.</p><div><b><Check/> 30-minute discovery call</b><b><Check/> Relevant platform walkthrough</b><b><Check/> No obligation</b></div></div>
    {sent ? <div className="modal-success"><CheckCircle2/><h3>Thanks — you’re all set.</h3><p>The demo request has been captured in this prototype.</p><button className="button button-primary" onClick={onClose}>Continue exploring</button></div> : <form onSubmit={event => {event.preventDefault();setSent(true)}}>
      <span className="eyebrow-text">BOOK A DEMO</span><h3>Let’s start with the basics.</h3>
      <label>Full name<input required placeholder="Your full name"/></label>
      <label>Work email<input required type="email" placeholder="you@company.com"/></label>
      <label>Company<input required placeholder="Company name"/></label>
      <label>Number of locations<select defaultValue=""><option value="" disabled>Select a range</option><option>1–20</option><option>21–100</option><option>101–500</option><option>500+</option></select></label>
      <button className="button button-primary">Request my demo <ArrowRight/></button>
    </form>}
  </div></div>
}
