import React from 'react'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '../components/ui'

export default function NotFoundPage() {
  return <main className="not-found"><span>404</span><h1>That page is not here.</h1><p>Let’s get you back to connected operations.</p><ButtonLink to="/" variant="primary">Back to home <ArrowRight/></ButtonLink></main>
}
