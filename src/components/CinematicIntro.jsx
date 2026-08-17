import React from 'react'
import { Logo } from './ui'

export default function CinematicIntro({ onSkip }) {
  return <div className="cinematic-intro" onClick={onSkip} onKeyDown={event => (event.key === 'Enter' || event.key === ' ') && onSkip()} role="button" tabIndex="0" aria-label="Skip introduction">
    <div className="intro-grid"/>
    <div className="intro-light one"/><div className="intro-light two"/>
    <div className="intro-scene">
      <span className="intro-orbit orbit-one"/><span className="intro-orbit orbit-two"/><span className="intro-orbit orbit-three"/>
      <span className="intro-node node-one"/><span className="intro-node node-two"/><span className="intro-node node-three"/>
    </div>
    <div className="intro-brand"><Logo light/><div className="intro-rule"><i/></div><p>RETAIL OPERATIONS. IN PERFECT SYNC.</p></div>
    <span className="intro-skip">CLICK TO SKIP</span>
  </div>
}
