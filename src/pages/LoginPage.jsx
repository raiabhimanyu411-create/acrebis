import React from 'react'
import { ArrowRight, HeartHandshake, LayoutDashboard, UserRoundCheck } from 'lucide-react'

export default function LoginPage() {
  const portals = [
    [UserRoundCheck,'Customer Login','Access your organisation workspace.'],
    [LayoutDashboard,'Admin Login','Manage teams, workflows and reporting.'],
    [HeartHandshake,'Partner Login','Access partner resources and opportunities.'],
  ]
  return <main className="page-enter login-page"><div className="container login-layout"><div><span className="eyebrow-text">WELCOME BACK</span><h1>Choose your<br/><em>ACREBIS portal.</em></h1><p>Secure access for customers, administrators and partners.</p></div><div className="portal-grid">{portals.map(([Icon,title,copy]) => <button key={title}><span><Icon/></span><div><h3>{title}</h3><p>{copy}</p></div><ArrowRight/></button>)}</div></div></main>
}
