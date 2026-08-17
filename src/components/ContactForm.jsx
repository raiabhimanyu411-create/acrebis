import React, { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [sent,setSent] = useState(false)
  if (sent) return <div className="form-success"><CheckCircle2/><h3>Thank you.</h3><p>Your message is ready for the ACREBIS team.</p></div>
  return <form className="contact-form" onSubmit={event => {event.preventDefault();setSent(true)}}>
    <label>Full name<input required placeholder="Your name"/></label>
    <label>Work email<input required type="email" placeholder="name@company.com"/></label>
    <label>Company<input required placeholder="Company name"/></label>
    <label>How can we help?<textarea required placeholder="Tell us about your priorities"/></label>
    <button className="button button-primary">Send message <ArrowRight/></button>
  </form>
}
