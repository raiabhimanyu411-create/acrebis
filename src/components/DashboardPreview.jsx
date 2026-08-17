import React, { useRef, useState } from 'react'
import { BarChart3, Bell, CheckCircle2, ClipboardCheck, LayoutDashboard, Search, Store, Target, TicketCheck, Users } from 'lucide-react'

export default function DashboardPreview() {
  const [tab, setTab] = useState('Overview')
  const stageRef = useRef(null)
  const tilt = event => {
    if (!stageRef.current) return
    const bounds = stageRef.current.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - .5
    const y = (event.clientY - bounds.top) / bounds.height - .5
    stageRef.current.style.setProperty('--tilt-x', (y * -5) + 'deg')
    stageRef.current.style.setProperty('--tilt-y', (x * 7) + 'deg')
    stageRef.current.style.setProperty('--pointer-x', ((x + .5) * 100) + '%')
    stageRef.current.style.setProperty('--pointer-y', ((y + .5) * 100) + '%')
  }
  const resetTilt = () => {
    if (!stageRef.current) return
    stageRef.current.style.setProperty('--tilt-x','1deg')
    stageRef.current.style.setProperty('--tilt-y','-3deg')
  }
  return <div className="product-stage" ref={stageRef} onPointerMove={tilt} onPointerLeave={resetTilt}>
    <div className="product-aura"/>
    <div className="product-window">
      <aside>
        <span className="app-mark">a<i>•</i></span>
        {[LayoutDashboard, ClipboardCheck, Store, Users, BarChart3].map((Icon,index) => <span key={index} className={index === 0 ? 'active' : ''}><Icon/></span>)}
      </aside>
      <div className="product-main">
        <div className="product-top">
          <div><small>MONDAY, 17 AUGUST</small><h4>Good morning, Priya</h4></div>
          <div><Search/><Bell/><span>PN</span></div>
        </div>
        <div className="product-tabs">{['Overview','Tasks','Audits'].map(name => <button className={tab === name ? 'active' : ''} onClick={() => setTab(name)} key={name}>{name}</button>)}</div>
        <div className="product-metrics">
          <div><span>Execution score</span><strong>92.4%</strong><small>↑ 4.2%</small></div>
          <div><span>Active locations</span><strong>1,248</strong><small>All connected</small></div>
          <div><span>Open actions</span><strong>128</strong><small>18 high priority</small></div>
        </div>
        <div className="product-grid">
          <div className="performance-card">
            <div><small>EXECUTION PULSE</small><b>{tab} performance</b></div>
            <div className="bars">{[42,58,52,74,66,87,93].map((height,index) => <i key={index} style={{height: height + '%'}}><span>{['M','T','W','T','F','S','S'][index]}</span></i>)}</div>
          </div>
          <div className="activity-list">
            <small>LIVE ACTIVITY</small>
            <div><CheckCircle2/><span><b>Opening audit complete</b><small>Store #124 · 2m</small></span></div>
            <div><TicketCheck/><span><b>Priority issue assigned</b><small>Store #287 · 8m</small></span></div>
            <div><Target/><span><b>Campaign verified</b><small>North region · 14m</small></span></div>
          </div>
        </div>
      </div>
    </div>
    <div className="floating-card float-left"><CheckCircle2/><span><small>ACTION COMPLETED</small><b>Campaign display verified</b></span></div>
    <div className="floating-card float-right"><i/><span><b>1,248 locations</b><small>Connected live</small></span></div>
  </div>
}
