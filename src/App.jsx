import React, { useMemo, useState } from 'react';
import {
  Award,
  ChevronRight,
  Code,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Globe,
  Layers,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Settings,
  Smartphone,
  Terminal,
  Zap,
} from 'lucide-react';

const App = () => {
  const [lang, setLang] = useState('es');
  const [showAllExperience, setShowAllExperience] = useState(false);

  const t = {
    en: {
      nav: { about: 'About', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
      badge: 'C1 Advanced English Certified',
      download: 'Download CV',
      pitch:
        'Technical support leader blending SaaS product thinking, customer empathy, and data-driven ops to ship reliable experiences.',
      availability: 'Available for remote & hybrid roles',
      featured: 'Impact highlights',
      stats: [
        { label: 'Experience', val: '9+ Years', icon: <Settings size={20} /> },
        { label: 'AI Projects', val: '3 Active', icon: <Cpu size={20} /> },
        { label: 'E‑commerce', val: 'Specialist', icon: <Globe size={20} /> },
        { label: 'Support', val: 'Level 3', icon: <Smartphone size={20} /> },
      ],
      history: 'Professional History',
      showMore: 'Show full history (+7 roles)',
      showLess: 'Show less',
      skills: 'Skills',
      edu: 'Education',
      directContact: 'Direct Contact',
      ctaTitle: 'See the platforms I design and maintain',
      ctaDesc: 'Live systems, transport operations and automation work in production.',
      work: 'Selected live work',
      sitesLabel: 'Open site',
    },
    es: {
      nav: { about: 'Sobre mí', experience: 'Experiencia', skills: 'Habilidades', contact: 'Contacto' },
      badge: 'Certificado de inglés C1 Avanzado',
      download: 'Descargar CV',
      pitch:
        'Líder de soporte técnico que combina producto SaaS, empatía con el cliente y operaciones basadas en datos para entregar experiencias confiables.',
      availability: 'Disponible para roles remotos o híbridos',
      featured: 'Impacto probado',
      stats: [
        { label: 'Experiencia', val: '9+ Años', icon: <Settings size={20} /> },
        { label: 'Proyectos IA', val: '3 Activos', icon: <Cpu size={20} /> },
        { label: 'E‑commerce', val: 'Especialista', icon: <Globe size={20} /> },
        { label: 'Soporte', val: 'Nivel 3', icon: <Smartphone size={20} /> },
      ],
      history: 'Historial profesional',
      showMore: 'Ver historial completo (+7 roles)',
      showLess: 'Ver menos',
      skills: 'Habilidades',
      edu: 'Educación',
      directContact: 'Contacto directo',
      ctaTitle: 'Mira las plataformas que diseño y opero',
      ctaDesc: 'Sistemas en vivo, operaciones de transporte y automatizaciones en producción.',
      work: 'Trabajo en producción',
      sitesLabel: 'Abrir sitio',
    },
  };

  const userData = {
    name: 'Blas Antonio Pérez Chávez',
    titles: {
      en: 'Technical Support Specialist | Field Service Management | Process Improvement',
      es: 'Especialista en Soporte Técnico | Gestión de Servicios de Campo | Mejora de Procesos',
    },
    summaries: {
      en: 'Results-driven technical professional with 9+ years of experience optimizing customer support processes and implementing data-driven solutions. Expert in troubleshooting complex systems, managing field services, and designing user-friendly interfaces in SaaS environments.',
      es: 'Profesional orientado a resultados con más de 9 años optimizando soporte al cliente e implementando soluciones basadas en datos. Experto en resolver sistemas complejos y diseñar interfaces en entornos SaaS.',
    },
    contact: {
      location: 'Escorza 760A, Guadalajara, Jalisco, Mexico',
      phone: '3333371063',
      email: 'bpperez815@gmail.com',
      linkedin: 'https://www.linkedin.com/in/bpecha/',
      github: 'https://github.com/blasperez',
      sites: ['https://apptools.online/', 'https://transportesrino.com/'],
    },
    skills: {
      technical: ['Advanced Excel', 'SQL', 'HTML', 'CSS', 'APIs', 'Power BI', 'SEO', 'Responsive Design', 'Custom Computer Assembly'],
      software: ['Adobe Illustrator', 'Photoshop', 'Premiere Pro', 'Salesforce', 'Bitrix24', 'CRM/ERP Implementation', 'MDM Admin'],
      systems: ['Electrical Engineering', 'Electronics', 'Automation Systems', 'Hardware Diagnostics', 'Operating Systems'],
    },
    experience: [
      {
        company: 'Welo Data',
        role: { en: 'AI Data & Content Quality Evaluator', es: 'Evaluador de Calidad de Datos y Contenido IA' },
        period: '01/2026 – Present',
        bullets: {
          en: ['Lyric Translation Reviewer: Accuracy and cultural relevance.', 'Podcast Content Reviewer: Moderation policies and AI training.', 'Scout Search Quality Rater: Intent matching and relevance.'],
          es: ['Revisor de Traducción de Letras: Precisión y relevancia cultural.', 'Revisor de Contenido de Podcast: Políticas de moderación y entrenamiento de IA.', 'Evaluador de Calidad de Búsqueda: Relevancia e intención del usuario.'],
        },
      },
      {
        company: 'ACON Worldwide Logística',
        role: { en: 'IT & Digital Strategy Manager', es: 'Gerente de TI y Estrategia Digital' },
        period: '11/2025 – 02/2026',
        bullets: {
          en: ['Led Bitrix24 implementation.', 'Custom API integrations for logistics automation.', 'Managed corporate identity and digital assets.'],
          es: ['Lideré la implementación de Bitrix24.', 'Integraciones de API personalizadas para automatización logística.', 'Gestión de identidad corporativa y activos digitales.'],
        },
      },
      {
        company: 'Transportes Rino',
        role: { en: 'IT Manager', es: 'Gerente de TI' },
        period: '10/2025 – 01/2026',
        bullets: {
          en: ['End-to-end Salesforce CRM implementation.', 'Data migration and strategic roadmap definition.', 'Coordinated cross-functional technical teams.'],
          es: ['Implementación integral de Salesforce CRM.', 'Migración de datos y definición de roadmap estratégico.', 'Coordinación de equipos técnicos multidisciplinarios.'],
        },
      },
      {
        company: 'Avantive Solutions',
        role: { en: 'Bilingual Sales Agent', es: 'Agente de Ventas Bilingüe' },
        period: '03/2025 – 04/2025',
        bullets: {
          en: ['Cold calling with 75% closing rate.', 'Processed compensation claims with high precision.'],
          es: ['Ventas en frío con tasa de cierre del 75%.', 'Procesamiento de reclamos de compensación con alta precisión.'],
        },
      },
      {
        company: 'InTouch (BELIVEO MEXICO)',
        role: { en: 'Bilingual Customer Service Representative', es: 'Representante de Servicio al Cliente Bilingüe' },
        period: '11/2024 – 11/2024',
        bullets: {
          en: ['95% first-call resolution for JCPenney.', 'Managed high volume of online order support.'],
          es: ['95% de resolución en la primera llamada para JCPenney.', 'Gestión de alto volumen de soporte para pedidos online.'],
        },
      },
      {
        company: 'XtendOps',
        role: { en: 'Bilingual Customer Service Agent', es: 'Agente de Servicio al Cliente Bilingüe' },
        period: '01/2024 – 04/2024',
        bullets: {
          en: ['98% CSAT for HelloFresh and EveryPlate.', 'Systematic protocols for damaged/incomplete deliveries.'],
          es: ['98% de satisfacción para HelloFresh y EveryPlate.', 'Protocolos sistemáticos para entregas dañadas/incompletas.'],
        },
      },
      {
        company: 'Bon’s Cafe Restaurant',
        role: { en: 'Project Manager (Front End Testing)', es: 'Project Manager (Pruebas Front End)' },
        period: '01/2021 – 12/2022',
        bullets: {
          en: ['Custom e-commerce platform with hierarchical admin.', 'Role-based permission system implementation.', 'Completed 10% under budget.'],
          es: ['Plataforma e-commerce personalizada con admin jerárquico.', 'Implementación de sistema de permisos por roles.', 'Completado un 10% bajo el presupuesto.'],
        },
      },
      {
        company: 'Materiales Castell',
        role: { en: 'Web Sales and E-commerce Designer', es: 'Diseñador de E-commerce y Ventas Web' },
        period: '01/2021 – 01/2022',
        bullets: {
          en: ['CRM/ERP integration for lead management.', '28% increase in online conversions through UX optimization.', 'Responsive website programming.'],
          es: ['Integración CRM/ERP para gestión de leads.', 'Aumento del 28% en conversiones mediante optimización UX.', 'Programación de sitio web responsive.'],
        },
      },
      {
        company: 'Teleperformance',
        role: { en: 'Bilingual Customer Service Specialist', es: 'Especialista en Servicio al Cliente Bilingüe' },
        period: '01/2019 – 01/2020',
        bullets: {
          en: ['Handled complex billing and technical inquiries.', 'Maintained high quality scores in communication standards.'],
          es: ['Gestión de facturación compleja y consultas técnicas.', 'Mantuvo altos estándares de calidad en comunicación.'],
        },
      },
      {
        company: 'CIE',
        role: { en: 'Customer Service Specialist', es: 'Especialista en Servicio al Cliente' },
        period: '01/2017 – 01/2019',
        bullets: {
          en: ['Inbound support for general inquiries.', 'Efficient database management and ticket resolution.'],
          es: ['Soporte inbound para consultas generales.', 'Gestión eficiente de bases de datos y resolución de tickets.'],
        },
      },
      {
        company: 'Negocio Propio',
        role: { en: 'Computer & Mobile Repair Owner', es: 'Dueño de Negocio de Reparación' },
        period: '01/2015 – 01/2017',
        bullets: {
          en: ['Founded mobile and computer repair service.', 'Specialist in custom PC assembly and hardware diagnostics.', '98% customer satisfaction rate.'],
          es: ['Fundé servicio de reparación de móviles y PCs.', 'Especialista en ensamble de PC y diagnóstico de hardware.', '98% de tasa de satisfacción del cliente.'],
        },
      },
    ],
    education: [
      {
        degree: { en: 'Bachelor of Digital Business Management', es: 'Licenciatura en Gestión de Negocios Digitales' },
        school: 'Universidad de Colima (UCOL)',
        period: '2015 - 2019',
      },
      {
        degree: { en: 'Computer Programming & Hardware Tech', es: 'Técnico en Programación y Mantenimiento' },
        school: 'CEIP, Manzanillo',
        period: '2017 - 2020',
      },
    ],
  };

  const featuredWins = [
    {
      icon: <Cpu className="text-emerald-300" size={18} />,
      title: { en: 'AI QA & training', es: 'QA y entrenamiento IA' },
      desc: {
        en: 'Evaluated AI content for quality, safety and cultural fit while improving intent matching.',
        es: 'Evalué contenido de IA para calidad, seguridad y adecuación cultural mejorando el match de intención.',
      },
    },
    {
      icon: <Settings className="text-blue-300" size={18} />,
      title: { en: 'Field service playbooks', es: 'Playbooks de servicio en campo' },
      desc: {
        en: 'Standardized on-site diagnostics and escalations to keep SLAs predictable.',
        es: 'Estandaricé diagnósticos y escalaciones en sitio para SLAs predecibles.',
      },
    },
    {
      icon: <Globe className="text-amber-200" size={18} />,
      title: { en: 'Commerce & CRM', es: 'E-commerce y CRM' },
      desc: {
        en: 'Rolled out Salesforce/Bitrix24 with clean data migration and adoption training.',
        es: 'Implementé Salesforce/Bitrix24 con migración de datos limpia y capacitación de adopción.',
      },
    },
  ];

  const visibleExperience = useMemo(
    () => (showAllExperience ? userData.experience : userData.experience.slice(0, 5)),
    [showAllExperience, userData.experience],
  );

  const current = t[lang];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Portfolio</p>
              <p className="text-base font-semibold text-white">Blas Pérez</p>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm font-semibold text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">
              {current.nav.about}
            </a>
            <a href="#experience" className="hover:text-white">
              {current.nav.experience}
            </a>
            <a href="#skills" className="hover:text-white">
              {current.nav.skills}
            </a>
            <a href="#contact" className="hover:text-white">
              {current.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex overflow-hidden rounded-full border border-white/10 bg-white/5 p-1">
              {['es', 'en'].map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-3 py-1 text-xs font-bold tracking-wide transition-all ${
                    lang === code ? 'bg-white text-slate-900' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>

            <a
              href="mailto:bpperez815@gmail.com?subject=Vamos%20a%20trabajar"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 hover:shadow-xl lg:flex"
            >
              <Mail size={14} />
              {current.directContact}
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-14 lg:px-10 lg:pb-24">
        <section id="about" className="grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-blue-950/30 backdrop-blur">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-100">
              <Globe size={14} />
              {current.badge}
            </div>

            <h1 className="mb-4 text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              {userData.name.split(' ').map((word) => (
                <span key={word} className="block">
                  {word}
                </span>
              ))}
            </h1>
            <p className="mb-5 text-base font-semibold uppercase tracking-[0.2em] text-blue-200">
              {userData.titles[lang]}
            </p>
            <p className="mb-8 text-lg leading-relaxed text-slate-200">{userData.summaries[lang]}</p>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <button
                onClick={() => window.print()}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Download size={16} />
                {current.download}
              </button>
              <a
                href={`tel:${userData.contact.phone}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-blue-300/40 bg-blue-500/20 px-4 py-3 text-sm font-semibold text-blue-50 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <Phone size={16} />
                {current.availability}
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {current.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-white/5">
                  <div className="mb-2 text-blue-200">{stat.icon}</div>
                  <p className="text-xl font-bold text-white">{stat.val}</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex h-full flex-col gap-4">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-xl shadow-blue-950/40">
              <img
                src="/perfilweb.png"
                alt={userData.name}
                className="mx-auto mb-4 h-[320px] w-full max-w-[320px] rounded-2xl object-cover object-center shadow-2xl shadow-blue-900/40"
              />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{current.featured}</p>
              <div className="mt-4 space-y-3">
                {featuredWins.map((item) => (
                  <div key={item.title.en} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mt-1 h-8 w-8 rounded-full bg-white/5 p-2">{item.icon}</div>
                    <div>
                      <p className="text-sm font-bold text-white">{item.title[lang]}</p>
                      <p className="text-sm text-slate-300">{item.desc[lang]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={userData.contact.linkedin}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-blue-300/60 hover:bg-blue-500/10"
              >
                <div className="flex items-center gap-3">
                  <ExternalLink size={18} />
                  LinkedIn
                </div>
                <ChevronRight size={14} />
              </a>
              <a
                href={userData.contact.github}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-purple-300/60 hover:bg-purple-500/10"
              >
                <div className="flex items-center gap-3">
                  <Code size={18} />
                  GitHub
                </div>
                <ChevronRight size={14} />
              </a>
              <a
                href={`mailto:${userData.contact.email}`}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-emerald-500/10"
              >
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  {userData.contact.email}
                </div>
                <ExternalLink size={14} />
              </a>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white">
                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  {userData.contact.location}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mt-14 space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-blue-500/20 text-blue-200">
              <Award className="m-1.5" size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Timeline</p>
              <h2 className="text-2xl font-bold text-white">{current.history}</h2>
            </div>
          </div>

          <div className="relative space-y-10 border-l border-white/10 pl-6">
            <div className="absolute left-0 top-2 h-full w-[2px] bg-gradient-to-b from-blue-400 via-purple-400 to-transparent" />
            {visibleExperience.map((job) => (
              <article key={job.company + job.period} className="relative">
                <div className="absolute -left-[23px] top-2 h-3 w-3 rounded-full border-2 border-slate-900 bg-gradient-to-br from-blue-400 to-purple-400 shadow-lg shadow-blue-900/50" />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-blue-950/30">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="rounded-full bg-blue-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100">
                      {job.period}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{job.role[lang]}</h3>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{job.company}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-200">
                    {job.bullets[lang].map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {!showAllExperience && (
              <button
                onClick={() => setShowAllExperience(true)}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-blue-300/60 hover:bg-blue-500/10"
              >
                {current.showMore}
              </button>
            )}
            {showAllExperience && (
              <button
                onClick={() => setShowAllExperience(false)}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-purple-300/60 hover:bg-purple-500/10"
              >
                {current.showLess}
              </button>
            )}
          </div>
        </section>

        <section id="skills" className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-blue-950/30">
            <div className="mb-4 flex items-center gap-3">
              <Code size={18} className="text-blue-200" />
              <h2 className="text-xl font-bold text-white">{current.skills}</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <SkillGroup title="Técnicas" icon={<Terminal size={16} />} items={userData.skills.technical} tone="dark" />
              <SkillGroup title="Software" icon={<Layers size={16} />} items={userData.skills.software} tone="light" />
              <SkillGroup title="Sistemas" icon={<Zap size={16} />} items={userData.skills.systems} tone="emerald" />
              <SkillGroup title="Data & Infra" icon={<Database size={16} />} items={['Power BI dashboards', 'API debugging', 'MDM policies', 'Hardware diagnostics']} tone="blue" />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-blue-950/30">
            <div className="mb-4 flex items-center gap-3">
              <Monitor size={18} className="text-amber-200" />
              <h3 className="text-xl font-bold text-white">{current.edu}</h3>
            </div>
            <div className="space-y-4">
              {userData.education.map((edu) => (
                <div key={edu.period} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{edu.period}</p>
                  <p className="text-base font-semibold text-white">{edu.degree[lang]}</p>
                  <p className="text-sm text-slate-300">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-4 flex items-center gap-3">
            <Globe size={18} className="text-emerald-200" />
            <h3 className="text-xl font-bold text-white">{current.work}</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {userData.contact.sites.map((site) => (
              <a
                key={site}
                href={site}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-emerald-200/50 hover:bg-emerald-500/10"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">{current.sitesLabel}</p>
                  <p className="text-lg font-semibold text-white">{site.replace('https://', '')}</p>
                </div>
                <ExternalLink size={16} className="text-emerald-200 transition group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-slate-900 p-8 shadow-2xl shadow-blue-950/40">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-200">CTA</p>
              <h3 className="mt-2 text-3xl font-bold text-white">{current.ctaTitle}</h3>
              <p className="mt-3 text-lg text-slate-200">{current.ctaDesc}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={userData.contact.linkedin}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-blue-900/30"
                >
                  <ExternalLink size={16} />
                  LinkedIn
                </a>
                <a
                  href={`mailto:${userData.contact.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-5 py-3 text-sm font-semibold text-white"
                >
                  <Mail size={16} />
                  {userData.contact.email}
                </a>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <ContactChip icon={<Phone size={16} />} label={userData.contact.phone} />
              <ContactChip icon={<MapPin size={16} />} label={userData.contact.location} />
              <ContactChip icon={<Code size={16} />} label="GitHub" href={userData.contact.github} />
              <ContactChip icon={<ExternalLink size={16} />} label="LinkedIn" href={userData.contact.linkedin} />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-xs uppercase tracking-[0.24em] text-slate-500">
        © {new Date().getFullYear()} {userData.name} • Guadalajara, Jalisco
      </footer>
    </div>
  );
};

const SkillGroup = ({ title, icon, items, tone }) => {
  const tones = {
    dark: 'bg-slate-900 text-slate-50 border-white/10',
    light: 'bg-white/10 text-slate-50 border-white/10',
    emerald: 'bg-emerald-500/10 text-emerald-50 border-emerald-200/30',
    blue: 'bg-blue-500/10 text-blue-50 border-blue-200/30',
  };

  return (
    <div className={`rounded-2xl border p-4 ${tones[tone] || tones.light}`}>
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em]">
        {icon}
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const ContactChip = ({ icon, label, href }) => {
  const content = (
    <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
      <div className="text-blue-100">{icon}</div>
      <span className="truncate">{label}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
};

export default App;
