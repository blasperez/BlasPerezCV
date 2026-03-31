import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Code, 
  Database, 
  Settings, 
  Award,
  Globe,
  Download,
  Terminal,
  Cpu,
  Smartphone,
  Layers,
  Zap,
  Monitor
} from 'lucide-react';

const heroImage = `${import.meta.env.BASE_URL}perfilweb.png`;

const App = () => {
  const [lang, setLang] = useState('en');
  const [showAllExperience, setShowAllExperience] = useState(false);

  const t = {
    en: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      download: "Download CV",
      certified: "C1 Advanced English Certified",
      history: "Professional History",
      showMore: "Show full history (+7 more roles)",
      showLess: "Show less",
      edu: "Education",
      directContact: "Direct Contact",
      ctaTitle: "Want to see my work live?",
      ctaDesc: "Explore the systems I've designed and the transport platforms I currently manage.",
      stats: [
        { label: "Experience", val: "9+ Years", icon: <Settings size={20} /> },
        { label: "AI Projects", val: "3 Active", icon: <Cpu size={20} /> },
        { label: "E-commerce", val: "Specialist", icon: <Globe size={20} /> },
        { label: "Support", val: "Level 3", icon: <Smartphone size={20} /> }
      ]
    },
    es: {
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Habilidades",
      contact: "Contacto",
      download: "Descargar CV",
      certified: "Certificado Inglés C1 Avanzado",
      history: "Historial Profesional",
      showMore: "Ver historial completo (+7 roles más)",
      showLess: "Ver menos",
      edu: "Educación",
      directContact: "Contacto Directo",
      ctaTitle: "¿Quieres ver mi trabajo en vivo?",
      ctaDesc: "Explora los sistemas que he diseñado y las plataformas de transporte que gestiono actualmente.",
      stats: [
        { label: "Experiencia", val: "9+ Años", icon: <Settings size={20} /> },
        { label: "Proyectos IA", val: "3 Activos", icon: <Cpu size={20} /> },
        { label: "E-commerce", val: "Especialista", icon: <Globe size={20} /> },
        { label: "Soporte", val: "Nivel 3", icon: <Smartphone size={20} /> }
      ]
    }
  };

  const userData = {
    name: "Blas Antonio Pérez Chávez",
    titles: {
      en: "Technical Support Specialist | Field Service Management | Process Improvement",
      es: "Especialista en Soporte Técnico | Gestión de Servicios de Campo | Mejora de Procesos"
    },
    summaries: {
      en: "Results-driven technical professional with 9+ years of experience optimizing customer support processes and implementing data-driven solutions. Expert in troubleshooting complex systems, managing field services, and designing user-friendly interfaces in SaaS environments.",
      es: "Profesional técnico orientado a resultados con más de 9 años de experiencia en la optimización de procesos de soporte al cliente e implementación de soluciones basadas en datos. Experto en resolución de problemas de sistemas complejos y diseño de interfaces en entornos SaaS."
    },
    contact: {
      location: "Escorza 760A, Guadalajara, Jalisco, Mexico",
      phone: "3333371063",
      email: "bpperez815@gmail.com",
      linkedin: "https://www.linkedin.com/in/bpecha/",
      github: "https://github.com/blasperez",
      sites: ["https://apptools.online/", "https://transportesrino.com/"]
    },
    skills: {
      technical: ["Advanced Excel", "SQL", "HTML", "CSS", "APIs", "Power BI", "SEO", "Responsive Design", "Custom Computer Assembly"],
      software: ["Adobe Illustrator", "Photoshop", "Premiere Pro", "Salesforce", "Bitrix24", "CRM/ERP Implementation", "MDM Admin"],
      systems: ["Electrical Engineering", "Electronics", "Automation Systems", "Hardware Diagnostics", "Operating Systems"]
    },
    experience: [
      {
        company: "Welo Data",
        role: { en: "AI Data & Content Quality Evaluator", es: "Evaluador de Calidad de Datos y Contenido IA" },
        period: "01/2026 – Present",
        bullets: {
          en: ["Lyric Translation Reviewer: Accuracy and cultural relevance.", "Podcast Content Reviewer: Moderation policies and AI training.", "Scout Search Quality Rater: Intent matching and relevance."],
          es: ["Revisor de Traducción de Letras: Precisión y relevancia cultural.", "Revisor de Contenido de Podcast: Políticas de moderación y entrenamiento de IA.", "Evaluador de Calidad de Búsqueda: Relevancia e intención del usuario."]
        }
      },
      {
        company: "ACON Worldwide Logística",
        role: { en: "IT & Digital Strategy Manager", es: "Gerente de TI y Estrategia Digital" },
        period: "11/2025 – 02/2026",
        bullets: {
          en: ["Led Bitrix24 implementation.", "Custom API integrations for logistics automation.", "Managed corporate identity and digital assets."],
          es: ["Lideré la implementación de Bitrix24.", "Integraciones de API personalizadas para automatización logística.", "Gestión de identidad corporativa y activos digitales."]
        }
      },
      {
        company: "Transportes Rino",
        role: { en: "IT Manager", es: "Gerente de TI" },
        period: "10/2025 – 01/2026",
        bullets: {
          en: ["End-to-end Salesforce CRM implementation.", "Data migration and strategic roadmap definition.", "Coordinated cross-functional technical teams."],
          es: ["Implementación integral de Salesforce CRM.", "Migración de datos y definición de roadmap estratégico.", "Coordinación de equipos técnicos multidisciplinarios."]
        }
      },
      {
        company: "Avantive Solutions",
        role: { en: "Bilingual Sales Agent", es: "Agente de Ventas Bilingüe" },
        period: "03/2025 – 04/2025",
        bullets: {
          en: ["Cold calling with 75% closing rate.", "Processed compensation claims with high precision."],
          es: ["Ventas en frío con tasa de cierre del 75%.", "Procesamiento de reclamos de compensación con alta precisión."]
        }
      },
      {
        company: "InTouch (BELIVEO MEXICO)",
        role: { en: "Bilingual Customer Service Representative", es: "Representante de Servicio al Cliente Bilingüe" },
        period: "11/2024 – 11/2024",
        bullets: {
          en: ["95% first-call resolution for JCPenney.", "Managed high volume of online order support."],
          es: ["95% de resolución en la primera llamada para JCPenney.", "Gestión de alto volumen de soporte para pedidos online."]
        }
      },
      {
        company: "XtendOps",
        role: { en: "Bilingual Customer Service Agent", es: "Agente de Servicio al Cliente Bilingüe" },
        period: "01/2024 – 04/2024",
        bullets: {
          en: ["98% CSAT for HelloFresh and EveryPlate.", "Systematic protocols for damaged/incomplete deliveries."],
          es: ["98% de satisfacción para HelloFresh y EveryPlate.", "Protocolos sistemáticos para entregas dañadas/incompletas."]
        }
      },
      {
        company: "Bon’s Cafe Restaurant",
        role: { en: "Project Manager (Front End Testing)", es: "Project Manager (Pruebas Front End)" },
        period: "01/2021 – 12/2022",
        bullets: {
          en: ["Custom e-commerce platform with hierarchical admin.", "Role-based permission system implementation.", "Completed 10% under budget."],
          es: ["Plataforma e-commerce personalizada con admin jerárquico.", "Implementación de sistema de permisos por roles.", "Completado un 10% bajo el presupuesto."]
        }
      },
      {
        company: "Materiales Castell",
        role: { en: "Web Sales and E-commerce Designer", es: "Diseñador de E-commerce y Ventas Web" },
        period: "01/2021 – 01/2022",
        bullets: {
          en: ["CRM/ERP integration for lead management.", "28% increase in online conversions through UX optimization.", "Responsive website programming."],
          es: ["Integración CRM/ERP para gestión de leads.", "Aumento del 28% en conversiones mediante optimización UX.", "Programación de sitio web responsive."]
        }
      },
      {
        company: "Teleperformance",
        role: { en: "Bilingual Customer Service Specialist", es: "Especialista en Servicio al Cliente Bilingüe" },
        period: "01/2019 – 01/2020",
        bullets: {
          en: ["Handled complex billing and technical inquiries.", "Maintained high quality scores in communication standards."],
          es: ["Gestión de facturación compleja y consultas técnicas.", "Mantuvo altos estándares de calidad en comunicación."]
        }
      },
      {
        company: "CIE",
        role: { en: "Customer Service Specialist", es: "Especialista en Servicio al Cliente" },
        period: "01/2017 – 01/2019",
        bullets: {
          en: ["Inbound support for general inquiries.", "Efficient database management and ticket resolution."],
          es: ["Soporte inbound para consultas generales.", "Gestión eficiente de bases de datos y resolución de tickets."]
        }
      },
      {
        company: "Negocio Propio",
        role: { en: "Computer & Mobile Repair Owner", es: "Dueño de Negocio de Reparación" },
        period: "01/2015 – 01/2017",
        bullets: {
          en: ["Founded mobile and computer repair service.", "Specialist in custom PC assembly and hardware diagnostics.", "98% customer satisfaction rate."],
          es: ["Fundé servicio de reparación de móviles y PCs.", "Especialista en ensamble de PC y diagnóstico de hardware.", "98% de tasa de satisfacción del cliente."]
        }
      }
    ],
    education: [
      {
        degree: { en: "Bachelor of Digital Business Management", es: "Licenciatura en Gestión de Negocios Digitales" },
        school: "Universidad de Colima (UCOL)",
        period: "2015 - 2019"
      },
      {
        degree: { en: "Computer Programming & Hardware Tech", es: "Técnico en Programación y Mantenimiento" },
        school: "CEIP, Manzanillo",
        period: "2017 - 2020"
      }
    ]
  };

  const visibleExperience = showAllExperience ? userData.experience : userData.experience.slice(0, 4);

  return (
    <div 
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
      className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 flex flex-col items-center overflow-x-hidden"
    >
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(37, 99, 235, 0.1); border-color: rgba(226, 232, 240, 1); }
          50% { box-shadow: 0 0 20px rgba(37, 99, 235, 0.3); border-color: rgba(37, 99, 235, 0.4); }
        }
        .animate-glow-slow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center w-full">
          <h1 className="text-xl font-bold text-slate-900">BLAS<span className="text-blue-600">PÉREZ</span></h1>
          
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider text-slate-500">
              <a href="#experience" className="hover:text-blue-600 transition-colors">{t[lang].experience}</a>
              <a href="#skills" className="hover:text-blue-600 transition-colors">{t[lang].skills}</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">{t[lang].contact}</a>
            </nav>

            <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200">
              <button onClick={() => setLang('en')} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}>EN</button>
              <button onClick={() => setLang('es')} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'es' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}>ES</button>
            </div>

            <button onClick={() => window.print()} className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
              <Download size={16} /> <span className="hidden sm:inline">{t[lang].download}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative w-full min-h-screen border-b border-slate-100 mb-24 flex items-center bg-white overflow-hidden">
        
        {/* IMAGEN: Mitad perfecta (100vw) y altura total. Especificado con clases exclusivas de Tailwind. */}
        <div className="absolute top-0 right-0 w-full md:w-[100vw] h-full z-0 pointer-events-none flex justify-end items-end">
          <img 
            src={heroImage} 
            alt={userData.name}
            className="w-full h-full object-contain object-right-bottom"
            onError={(e) => { e.target.src = "https://via.placeholder.com/800x1200?text=Blas+Perez"; }}
          />
        </div>

        {/* TEXTO: Mitad izquierda (50%) para que no toque la imagen en absoluto. */}
        <div className="max-w-7xl mx-auto px-6 w-full relative z-20 flex">
          <div className="w-full md:w-[50%] py-16 md:py-24 pr-4 lg:pr-12 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-8 tracking-wider uppercase border border-emerald-100 w-fit shadow-sm bg-white/80 backdrop-blur-sm">
              <Globe size={14} /> {t[lang].certified}
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              {userData.name.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h2>
            
            <p className="text-xl text-blue-600 font-bold mb-8 tracking-wider uppercase">
              {userData.titles[lang]}
            </p>
            
            <p className="text-slate-700 leading-relaxed text-lg mb-12">
              {userData.summaries[lang]}
            </p>
            
            <div className="flex flex-wrap gap-8">
              <a href={userData.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors font-bold text-sm uppercase tracking-wider bg-white/50 px-2 py-1 rounded">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href={userData.contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors font-bold text-sm uppercase tracking-wider bg-white/50 px-2 py-1 rounded">
                <Github size={20} /> GitHub
              </a>
              <a href={`mailto:${userData.contact.email}`} className="flex items-center gap-2 text-slate-900 hover:text-red-500 transition-colors font-bold text-sm uppercase tracking-wider bg-white/50 px-2 py-1 rounded">
                <Mail size={20} /> Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 w-full relative z-10 bg-white pt-10">
        
        {/* Stats Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {t[lang].stats.map((stat, i) => (
            <div key={i} className="group">
              <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <p className="text-4xl font-bold text-slate-900 leading-tight">{stat.val}</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-2 font-bold">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Two Column Layout for Main Data */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-20 pb-24">
          
          {/* Experience Column */}
          <section id="experience">
            <div className="flex items-center gap-4 mb-16">
              <h3 className="text-3xl font-bold uppercase text-slate-900">{t[lang].history}</h3>
              <div className="h-1 flex-1 bg-slate-200"></div>
            </div>
            
            <div className="space-y-20">
              {visibleExperience.map((job, index) => (
                <div key={index} className="relative group">
                  <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4">
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-1.5 rounded-full">{job.period}</span>
                    <h4 className="text-2xl font-bold text-slate-900 uppercase">{job.role[lang]}</h4>
                  </div>
                  <p className="text-slate-500 font-bold text-sm uppercase tracking-wider mb-6">{job.company}</p>
                  <ul className="space-y-4 max-w-2xl">
                    {job.bullets[lang].map((bullet, i) => (
                      <li key={i} className="flex gap-4 text-slate-600 text-base leading-relaxed">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {!showAllExperience && (
              <button 
                onClick={() => setShowAllExperience(true)}
                className="mt-20 w-full py-6 border-2 border-slate-200 rounded-2xl text-slate-900 font-bold hover:text-blue-600 hover:border-blue-600 transition-all uppercase text-sm tracking-wider bg-white animate-glow-slow shadow-sm"
              >
                {t[lang].showMore}
              </button>
            )}

            {showAllExperience && (
              <button 
                onClick={() => setShowAllExperience(false)}
                className="mt-20 w-full py-6 border-2 border-slate-200 rounded-2xl text-slate-900 font-bold hover:text-blue-600 transition-all uppercase text-sm tracking-wider bg-white"
              >
                {t[lang].showLess}
              </button>
            )}
          </section>

          {/* Sidebar with HIGH CONTRAST Skills */}
          <aside className="space-y-20">
            <section id="skills">
              <h3 className="text-2xl font-bold uppercase mb-12 text-slate-900 border-b-2 border-blue-600 w-fit pb-2">
                {t[lang].skills}
              </h3>
              
              <div className="space-y-12">
                {/* TÉCNICAS */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-6 flex items-center gap-3 tracking-wider uppercase">
                    <Terminal size={18} className="text-blue-600" /> TÉCNICAS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {userData.skills.technical.map((s, i) => (
                      <span key={i} className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors cursor-default">{s}</span>
                    ))}
                  </div>
                </div>
                
                {/* SOFTWARE */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-6 flex items-center gap-3 tracking-wider uppercase">
                    <Layers size={18} className="text-purple-600" /> SOFTWARE
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {userData.skills.software.map((s, i) => (
                      <span key={i} className="bg-slate-100 text-slate-900 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border border-slate-200 hover:border-purple-600 transition-colors cursor-default">{s}</span>
                    ))}
                  </div>
                </div>

                {/* SISTEMAS */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-6 flex items-center gap-3 tracking-wider uppercase">
                    <Zap size={18} className="text-emerald-600" /> SISTEMAS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {userData.skills.systems.map((s, i) => (
                      <span key={i} className="bg-slate-100 text-slate-900 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border border-slate-200 hover:border-emerald-600 transition-colors cursor-default">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-2xl font-bold uppercase mb-12 text-slate-900 border-b-2 border-slate-900 w-fit pb-2">
                {t[lang].edu}
              </h3>
              <div className="space-y-10">
                {userData.education.map((edu, i) => (
                  <div key={i} className="border-l-2 border-slate-100 pl-6">
                    <p className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wider">{edu.period}</p>
                    <p className="font-bold text-slate-900 text-base leading-tight uppercase mb-2">{edu.degree[lang]}</p>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{edu.school}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Card */}
            <section id="contact" className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-8 opacity-50">{t[lang].directContact}</h3>
              <div className="space-y-6 relative z-10">
                <a href={`mailto:${userData.contact.email}`} className="flex items-center gap-4 text-base hover:text-blue-400 transition-colors font-bold">
                  <Mail size={20} className="text-blue-500" />
                  <span className="truncate">{userData.contact.email}</span>
                </a>
                <div className="flex items-center gap-4 text-base font-bold">
                  <Phone size={20} className="text-blue-500" />
                  <span>{userData.contact.phone}</span>
                </div>
                <div className="flex items-start gap-4 text-sm font-normal opacity-80 leading-relaxed">
                  <MapPin size={20} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span>{userData.contact.location}</span>
                </div>
              </div>
            </section>
          </aside>
        </div>

        {/* Footer CTA */}
        <section className="mb-24 bg-slate-900 rounded-3xl p-12 md:p-24 text-white text-center shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 relative z-10 leading-tight">{t[lang].ctaTitle}</h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-12 text-xl relative z-10 font-normal leading-relaxed">{t[lang].ctaDesc}</p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            {userData.contact.sites.map((site, i) => (
              <a key={i} href={site} target="_blank" rel="noreferrer" className="bg-white text-slate-900 hover:bg-blue-600 hover:text-white px-10 py-5 rounded-full flex items-center gap-3 transition-all font-bold text-sm uppercase tracking-wider shadow-xl">
                <Globe size={18} /> {site.replace('https://', '')}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full text-center py-12 text-slate-400 text-xs font-bold uppercase tracking-wider border-t border-slate-100">
        © {new Date().getFullYear()} {userData.name} • GUADALAJARA, JALISCO
      </footer>
    </div>
  );
};

export default App;
