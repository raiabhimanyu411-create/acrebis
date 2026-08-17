import React, { useEffect, useState } from 'react'
import CinematicIntro from './components/CinematicIntro'
import DemoModal from './components/DemoModal'
import Footer from './components/Footer'
import Header from './components/Header'
import { industries, modules, resources } from './data/siteData'
import AboutPage from './pages/AboutPage'
import CareersPage from './pages/CareersPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import IndustriesPage from './pages/IndustriesPage'
import IndustryPage from './pages/IndustryPage'
import LegalPage from './pages/LegalPage'
import LoginPage from './pages/LoginPage'
import ModulePage from './pages/ModulePage'
import ModulesPage from './pages/ModulesPage'
import NotFoundPage from './pages/NotFoundPage'
import PartnersPage from './pages/PartnersPage'
import PlatformPage from './pages/PlatformPage'
import PricingPage from './pages/PricingPage'
import ResourceDetailPage from './pages/ResourceDetailPage'
import ResourcesPage from './pages/ResourcesPage'
import TourPage from './pages/TourPage'

function pathFromLocation() {
  if (window.location.hash.startsWith('#/')) {
    const legacyPath = window.location.hash.slice(1)
    window.history.replaceState({},'',legacyPath)
  }
  const value = window.location.pathname.replace(/\/+$/, '') || '/'
  return value.startsWith('/') ? value : '/' + value
}

function RouteView({ path, onDemo }) {
  if (path === '/') return <HomePage onDemo={onDemo}/>
  if (path === '/platform') return <PlatformPage onDemo={onDemo}/>
  if (path === '/platform/modules') return <ModulesPage onDemo={onDemo}/>
  if (path === '/platform/integrations') return <PlatformPage type="integrations" onDemo={onDemo}/>
  if (path === '/platform/ai-performance') return <PlatformPage type="ai" onDemo={onDemo}/>
  if (path.startsWith('/platform/module/')) return <ModulePage item={modules.find(item => item.slug === path.split('/').pop()) || modules[0]} onDemo={onDemo}/>
  if (path === '/industries') return <IndustriesPage onDemo={onDemo}/>
  if (path.startsWith('/industries/')) {
    const industry = industries.find(item => item.slug === path.split('/').pop())
    return industry ? <IndustryPage item={industry} onDemo={onDemo}/> : <NotFoundPage/>
  }
  if (path === '/resources') return <ResourcesPage onDemo={onDemo}/>
  if (path.startsWith('/resources/')) {
    const resource = resources.find(item => item.slug === path.split('/').pop())
    return resource ? <ResourceDetailPage item={resource} onDemo={onDemo}/> : <NotFoundPage/>
  }
  if (path === '/company/about') return <AboutPage onDemo={onDemo}/>
  if (path === '/company/careers') return <CareersPage onDemo={onDemo}/>
  if (path === '/company/partners') return <PartnersPage onDemo={onDemo}/>
  if (path === '/company/contact') return <ContactPage onDemo={onDemo}/>
  if (path === '/pricing') return <PricingPage onDemo={onDemo}/>
  if (path === '/login') return <LoginPage/>
  if (path === '/tour') return <TourPage onDemo={onDemo}/>
  if (path === '/legal') return <LegalPage type="legal"/>
  if (path === '/privacy-policy') return <LegalPage type="privacy"/>
  if (path === '/terms-cookies') return <LegalPage type="terms"/>
  if (path === '/security') return <LegalPage type="security"/>
  return <NotFoundPage/>
}

export default function App() {
  const [path,setPath] = useState(pathFromLocation)
  const [demoOpen,setDemoOpen] = useState(false)
  const [introOpen,setIntroOpen] = useState(true)

  useEffect(() => {
    const change = () => setPath(pathFromLocation())
    window.addEventListener('popstate',change)
    return () => window.removeEventListener('popstate',change)
  },[])

  useEffect(() => {
    window.scrollTo({top:0,behavior:'instant'})
    const lastPart = path.split('/').filter(Boolean).pop() || 'Home'
    document.title = path === '/' ? 'ACREBIS | Connected Retail Operations' : 'ACREBIS | ' + lastPart.replaceAll('-',' ').replace(/\b\w/g,letter => letter.toUpperCase())
  },[path])

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroOpen(false), 2450)
    const skip = event => event.key === 'Escape' && setIntroOpen(false)
    window.addEventListener('keydown',skip)
    return () => { window.clearTimeout(timer); window.removeEventListener('keydown',skip) }
  },[])

  useEffect(() => {
    const glow = document.querySelector('.cursor-glow')
    const onPointerMove = event => {
      if (glow) glow.style.transform = 'translate3d(' + event.clientX + 'px,' + event.clientY + 'px,0)'
    }
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--scroll-progress', (max > 0 ? (window.scrollY / max) * 100 : 0) + '%')
    }
    const onPointerDown = event => {
      if (!event.target.closest('a,button')) return
      const ripple = document.createElement('span')
      ripple.className = 'click-ripple'
      ripple.style.left = event.clientX + 'px'
      ripple.style.top = event.clientY + 'px'
      document.body.appendChild(ripple)
      ripple.addEventListener('animationend', () => ripple.remove(), {once:true})
    }
    window.addEventListener('pointermove',onPointerMove)
    window.addEventListener('scroll',onScroll,{passive:true})
    window.addEventListener('pointerdown',onPointerDown)
    onScroll()
    return () => {
      window.removeEventListener('pointermove',onPointerMove)
      window.removeEventListener('scroll',onScroll)
      window.removeEventListener('pointerdown',onPointerDown)
    }
  },[])

  useEffect(() => {
    let observer
    const frame = window.requestAnimationFrame(() => {
      const items = document.querySelectorAll('.section-heading,.journey-tabs,.journey-panel,.value-grid article,.module-card,.industry-card,.insight-card,.resource-card,.cta-panel,.inner-hero-layout,.directory-card,.feature-grid article,.benefit-band,.article-grid article,.pricing-grid article,.company-layout,.portal-grid button')
      items.forEach((item,index) => {
        item.classList.add('reveal-item')
        item.style.setProperty('--reveal-delay', ((index % 6) * 55) + 'ms')
      })
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }),{threshold:.1})
      items.forEach(item => observer.observe(item))
    })
    return () => {
      window.cancelAnimationFrame(frame)
      observer?.disconnect()
    }
  },[path])

  return <>
    {introOpen && <CinematicIntro onSkip={() => setIntroOpen(false)}/>}
    <div className="scroll-progress"/><div className="cursor-glow"/>
    <div className="top-line"/>
    <Header onDemo={() => setDemoOpen(true)}/>
    <RouteView path={path} onDemo={() => setDemoOpen(true)}/>
    <Footer onDemo={() => setDemoOpen(true)}/>
    {demoOpen && <DemoModal onClose={() => setDemoOpen(false)}/>}
  </>
}
