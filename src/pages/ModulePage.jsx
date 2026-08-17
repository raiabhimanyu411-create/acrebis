import React from 'react'
import { BarChart3, CheckCircle2, Target, Users } from 'lucide-react'
import { ButtonLink, CallToAction, PageHero, SectionHeading } from '../components/ui'

export default function ModulePage({ item, onDemo }) {
  const Icon = item.icon
  return <main className="page-enter">
    <PageHero eyebrow="ACREBIS MODULE" title={<>{item.title}<br/><em>made effortlessly consistent.</em></>} copy={item.short + ' Built for fast adoption, complete visibility and measurable results across every location.'} icon={Icon} onDemo={onDemo}/>
    <section className="feature-section"><div className="container">
      <SectionHeading center eyebrow="HOW IT WORKS" title="From assignment to verified outcome." copy="A simple workflow for teams, with the control and intelligence leaders need."/>
      <div className="feature-grid">
        {[
          [Target,'Set the standard','Define the workflow, audience, timing and evidence required.'],
          [Users,'Guide every team','Give each person a clear, mobile-first experience.'],
          [BarChart3,'Measure the outcome','Monitor completion, quality, exceptions and trends live.'],
        ].map(([FeatureIcon,title,copy],index) => <article key={title}><small>0{index + 1}</small><span><FeatureIcon/></span><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
      <div className="benefit-band"><div><span><CheckCircle2/></span><h3>{item.outcome}</h3><p>Connect this module with the rest of ACREBIS for one operational view and a continuous improvement loop.</p></div><ButtonLink to="/platform/modules" variant="light">View all modules</ButtonLink></div>
    </div></section>
    <CallToAction onDemo={onDemo} compact/>
  </main>
}
