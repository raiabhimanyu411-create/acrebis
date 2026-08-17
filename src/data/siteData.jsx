import {
  BarChart3, BookOpen, Boxes, Building2, CalendarCheck, CheckCircle2,
  ClipboardCheck, FileText, GraduationCap, Headphones, MessageSquareText,
  PackageCheck, ShieldCheck, ShoppingBag, Sparkles, Store, Target,
  TicketCheck, TrendingUp, Users, Zap
} from 'lucide-react'

export const modules = [
  { slug: 'task-management', icon: ClipboardCheck, title: 'Task Management & Checklists', short: 'Turn plans into clear, trackable action across every location.', outcome: 'Consistent execution' },
  { slug: 'team-communication', icon: MessageSquareText, title: 'Team Communication', short: 'Reach the right teams with targeted, measurable communication.', outcome: 'Faster alignment' },
  { slug: 'audits-inspections', icon: CheckCircle2, title: 'Audits & Inspections', short: 'Capture evidence, flag gaps and trigger corrective actions instantly.', outcome: 'Stronger standards' },
  { slug: 'staff-management', icon: Users, title: 'Staff Management', short: 'Give every person the right access, ownership and visibility.', outcome: 'Clear accountability' },
  { slug: 'learning-training', icon: GraduationCap, title: 'Learning & Knowledge Center', short: 'Deliver role-based learning, SOPs and answers at the point of need.', outcome: 'Confident teams' },
  { slug: 'compliance-management', icon: ShieldCheck, title: 'Compliance Management', short: 'Maintain complete, evidence-backed control over operational compliance.', outcome: 'Lower risk' },
  { slug: 'visual-merchandising', icon: Store, title: 'Visual Merchandising Execution', short: 'Launch, verify and improve every campaign across every store.', outcome: 'Perfect presentation' },
  { slug: 'promotion-management', icon: Target, title: 'Promotion Management', short: 'Coordinate promotional rollouts with real-time completion visibility.', outcome: 'Better campaign ROI' },
  { slug: 'roster-attendance', icon: CalendarCheck, title: 'Roster & Attendance', short: 'Simplify scheduling, attendance and frontline workforce planning.', outcome: 'Smarter coverage' },
  { slug: 'asset-management', icon: Boxes, title: 'Asset Management', short: 'Track ownership, condition and lifecycle from one source of truth.', outcome: 'Protected assets' },
  { slug: 'issue-resolution', icon: TicketCheck, title: 'Issue Tracking & Resolution', short: 'Route every issue to the right owner and close the loop faster.', outcome: 'Rapid resolution' },
]

export const industries = [
  { slug: 'retail', icon: ShoppingBag, title: 'Retail', copy: 'Create consistent execution and visibility across complex store networks.' },
  { slug: 'restaurants-qsr', icon: Store, title: 'Restaurants & QSR', copy: 'Protect service, food safety and brand standards every shift.' },
  { slug: 'grocery-convenience', icon: PackageCheck, title: 'Grocery & Convenience', copy: 'Coordinate high-frequency operations without slowing teams down.' },
  { slug: 'fashion-luxury', icon: Sparkles, title: 'Fashion & Luxury', copy: 'Deliver flawless launches, presentation and client experience.' },
  { slug: 'pharmacy-drug-store', icon: ShieldCheck, title: 'Pharmacy & Drug Store', copy: 'Strengthen compliance and operational precision at every location.' },
]

export const resources = [
  { slug: 'case-studies', icon: TrendingUp, title: 'Case Studies', copy: 'See how distributed teams improve execution with ACREBIS.' },
  { slug: 'blog', icon: FileText, title: 'Blog & Insights', copy: 'Practical ideas for modern frontline and retail leaders.' },
  { slug: 'help-center', icon: Headphones, title: 'Help Center & Support', copy: 'Guides, answers and product support when you need them.' },
]

export const journey = [
  { step: '01', label: 'Plan', title: 'Turn strategy into clear action', copy: 'Create recurring tasks, smart checklists and campaigns with ownership, deadlines and location-level targeting.', icon: ClipboardCheck },
  { step: '02', label: 'Communicate', title: 'Reach the people who need to know', copy: 'Replace noisy channels with focused updates, confirmations and conversations tied to operational work.', icon: MessageSquareText },
  { step: '03', label: 'Execute', title: 'Make great work easy to complete', copy: 'Give frontline teams one simple mobile workspace for tasks, knowledge, training and proof of execution.', icon: Zap },
  { step: '04', label: 'Verify', title: 'See standards in real time', copy: 'Use audits, photo evidence and exception alerts to know what is happening across every location.', icon: CheckCircle2 },
  { step: '05', label: 'Improve', title: 'Turn activity into performance', copy: 'Surface patterns, benchmark locations and use AI-powered recommendations to continuously improve.', icon: TrendingUp },
]

export const companyLinks = [
  { path: '/company/about', title: 'About Us', copy: 'Mission, story and executive team', icon: Building2 },
  { path: '/company/careers', title: 'Careers', copy: 'Build the future of frontline work', icon: Users },
  { path: '/company/partners', title: 'Partners', copy: 'Create more value together', icon: BarChart3 },
  { path: '/company/contact', title: 'Contact Us', copy: 'Talk to our team', icon: BookOpen },
]
