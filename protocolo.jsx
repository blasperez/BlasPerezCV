import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import imageMark from "./favicon.jpg";

export default function TrainingProtocolPresentation() {
  const modules = [
    {
      title: "Día 1 — Introducción & Navegación",
      subtitle: "Familiarización con Salesforce y el flujo llamada → CRM → cita",
      bullets: [
        "Demo guiada del trainer: 20–30 min",
        "Tour práctico: ubicar Leads, Cuentas, Contactos, Oportunidades",
        "Role-play: pedir correo y agendar cita (pair exercise)",
        "Entrega: checklist imprimible para cada vendedor"
      ]
    },
    {
      title: "Día 2 — Gestión de Leads y Registro de Llamadas",
      subtitle: "Captura de datos mínimos y conversión efectiva",
      bullets: [
        "Crear leads con campos mínimos: empresa, teléfono, correo, nota",
        "Role-play: manejo de gatekeepers y objeciones para obtener correo",
        "Tarea: registrar 3 leads reales o ficticios en Salesforce"
      ]
    },
    {
      title: "Día 3 — Oportunidades (con enfoque en llamadas)",
      subtitle: "Registrar resultados de llamadas y avanzar el pipeline",
      bullets: [
        "Actualizar etapa tras cada interacción",
        "Asignación de la oportunidad al vendedor de campo (Mario)",
        "Simulación: 3 escenarios (correo, cita, no interés)"
      ]
    },
    {
      title: "Día 4 — Cotizaciones por Unidad de Negocio",
      subtitle: "Generar PDFs según reglas de cada unidad",
      bullets: [
        "Rino/Tremex: tarifas por ruta, peso y tipo de servicio",
        "VGP: normas y servicios adicionales como productos en la oportunidad",
        "CIE: productos editables con montos manuales",
        "ACON: selección de puertos y sumatoria de productos"
      ]
    },
    {
      title: "Día 5 — Reportes, Dashboards y Evaluación",
      subtitle: "Medir desempeño y certificar operativa CRM",
      bullets: [
        "Reporte: oportunidades abiertas, correos obtenidos, citas agendadas",
        "Dashboard personal: embudo de ventas y conversiones",
        "Evaluación práctica + teórica (80%/100% registro)"
      ]
    }
  ];

  const coldCallScript = {
    intro:
      "Hola, buen día. Habla [TU NOMBRE] de [Transportes Rino / Tremex / VGP / CIE / ACON]. ¿Hablo con la persona encargada de logística / importaciones / transporte?",
    value:
      "Llamamos porque ayudamos a empresas como la suya a reducir tiempos y costos en transporte/aduana cuando contratan más de un servicio con nosotros; además compartimos alertas relevantes sobre NOMS y cambios regulatorios que pueden impactar sus operaciones.",
    keyQuestion:
      "¿Con quién podría coordinar para enviarle una breve propuesta por correo —o, mejor aún, agendar una visita rápida de nuestro ejecutivo Mario para revisar opciones en 15–20 minutos?",
    closeForEmail:
      "Perfecto, ¿me puedes dar el correo del responsable para enviar la información y un par de opciones de fecha para la visita?",
    voicemail:
      "Hola, habla [Tu nombre] de [Empresa]. Tengo una propuesta breve que puede optimizar sus costos de logística —si le parece, le envío un correo con un resumen. ¿Cuál es el mejor correo? Mi número: [tel]. Gracias.",
    tactics: [
      "Ofrecer valor (guía NOMs, checklist de importación) a cambio del correo.",
      "Pedir el correo del responsable y confirmar ortografía.",
      "Registrar consentimiento para uso de datos (LFPDPPP) como nota en CRM."
    ]
  };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const backgroundShift = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const accentShift = useTransform(scrollYProgress, [0, 1], [80, -160]);
  const glowOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.12, 0.4]),
    { stiffness: 80, damping: 20, mass: 0.4 }
  );

  const sectionVariants = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-800"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ y: backgroundShift }}
      >
        <div className="absolute -left-32 top-32 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-64 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-sky-500/20 blur-3xl"
        style={{ y: accentShift, opacity: glowOpacity }}
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <motion.header
          className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur md:flex md:items-center md:justify-between"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="flex flex-1 items-center gap-4"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
          >
            <motion.div
              className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-blue-600 text-lg font-bold text-white sm:h-16 sm:w-16 sm:text-xl"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            >
              <img src={imageMark} alt="Marca" className="h-full w-full object-cover" />
            </motion.div>
            <div className="min-w-0">
              <h1 className="text-xl font-semibold leading-snug sm:text-2xl">
                Protocolo de Entrenamiento — Vendedores
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Salesforce + Cold Calls • Presentación ejecutiva
              </p>
            </div>
          </motion.div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-0">
            <motion.button
              onClick={() => window.print()}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Imprimir / Exportar
            </motion.button>
            <motion.a
              href="#modules"
              className="text-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
              whileHover={{ x: 4 }}
            >
              Ir a módulos ↘
            </motion.a>
          </div>
        </motion.header>

        <main className="mt-10 space-y-16">
          <motion.section
            className="grid gap-6 md:grid-cols-3"
            variants={sectionVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="md:col-span-2 rounded-2xl border border-slate-200/60 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold">Resumen ejecutivo</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Programa de 5 días diseñado para capacitar al equipo de ventas en técnicas outbound (cold calls desde línea fija), captura de correos y registro riguroso en Salesforce para convertir oportunidades y coordinar visitas del ejecutivo de campo.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <motion.div
                  className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 16 }}
                >
                  <h3 className="text-sm font-semibold">Objetivo operativo</h3>
                  <p className="mt-2 text-xs text-slate-500">
                    Captar correo del responsable, agendar citas para ventas en campo y cuando sea posible cerrar servicios directamente.
                  </p>
                </motion.div>
                <motion.div
                  className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 16 }}
                >
                  <h3 className="text-sm font-semibold">KPIs sugeridos</h3>
                  <ul className="mt-2 space-y-1 text-xs text-slate-500">
                    <li>60–120 dials/día</li>
                    <li>Connect rate objetivo: 5–12%</li>
                    <li>Correos capturados/día: mínimo 3</li>
                    <li>Conversión a cita: 3–8% de correos</li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                className="mt-6 rounded-xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-4 shadow-sm"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-md font-semibold">Guión estratégico (extracto)</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Introduce el pitch de valor en 20 segundos, pide el correo como objetivo mínimo y ofrece la visita de Mario como objetivo ideal. Registrar consentimiento para marketing en la nota del CRM.
                </p>
                <div className="mt-3 rounded-md border border-slate-200/80 bg-slate-50/80 p-4">
                  <pre className="whitespace-pre-wrap break-words text-xs text-slate-700">
{`${coldCallScript.intro}

${coldCallScript.value}

${coldCallScript.keyQuestion}`}
                  </pre>
                </div>
              </motion.div>
            </div>

            <motion.aside
              className="flex flex-col gap-6 rounded-2xl border border-blue-100/80 bg-gradient-to-br from-white/95 to-blue-50/70 p-6 shadow-sm backdrop-blur"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
            >
              <div>
                <h3 className="text-sm font-semibold">Prioridad del proyecto</h3>
                <p className="mt-2 text-xs text-slate-500">
                  Proyecto con inversión y expectativa de excelencia. Entregar capacitación medible, replicable y certificable.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Materiales del trainer
                </h4>
                <ul className="mt-3 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-blue-500" />
                    Lista objetivo segmentada (CSV/Sheet) con 150–300 empresas: giro, tamaño, teléfono directo, ubicación, DNC.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-blue-500" />
                    Scripts de llamada por escenario (apertura, gatekeeper, decisor) y guiones de voicemail.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-blue-500" />
                    Guía de objeciones y cierres rápidos específicos de transporte (2–3 cierres estándar).
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-blue-500" />
                    Códigos de disposición y definiciones (connect, buzón, ocupado, interesado, cita, no interés).
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-blue-500" />
                    Checklist de campos mínimos en CRM por llamada (empresa, contacto, teléfono, resultado, próxima acción).
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-blue-500" />
                    Plantilla de agenda para bloques de llamadas (timeboxing) con descanso de 15 min a la mitad.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-blue-500" />
                    Mapa de unidades de negocio y ofertas (Rino, Tremex, VGP, CIE, ACON) para el pitch.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-blue-500" />
                    Rúbrica de evaluación y checklist de certificación del vendedor.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Cumplimiento
                </h4>
                <p className="mt-2 text-xs text-slate-500">
                  Registrar consentimiento y ofrecer opt-out. Consultar asesoría legal para avisos de privacidad y campañas de email.
                </p>
              </div>
            </motion.aside>
          </motion.section>

          <motion.section
            id="modules"
            className="space-y-4"
            variants={sectionVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-lg font-semibold">Programa día a día (detallado)</h2>
              <motion.span
                className="text-sm text-slate-500"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Desplázate para recorrer cada bloque de entrenamiento
              </motion.span>
            </div>

            {modules.map((m, i) => (
              <motion.article
                key={m.title}
                className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-sm backdrop-blur"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.995 }}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-800">{m.title}</h3>
                    <p className="text-xs text-slate-500">{m.subtitle}</p>
                  </div>
                  <div className="text-xs text-slate-400 sm:text-sm">Duración estimada: 2–3 hrs</div>
                </div>
                <ul className="mt-3 space-y-1 text-sm leading-relaxed text-slate-600">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-blue-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.section>

          <motion.section
            className="space-y-6"
            variants={sectionVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-lg font-semibold">Guión completo y tácticas</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <motion.div
                className="rounded-2xl border border-slate-200/70 bg-slate-50/90 p-5 shadow-sm backdrop-blur"
                whileHover={{ scale: 1.01 }}
              >
                <h4 className="font-semibold">Pitch y preguntas clave</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {coldCallScript.value}
                </p>
                <div className="mt-3">
                  <h5 className="text-sm font-semibold">Pregunta clave</h5>
                  <p className="text-sm text-slate-600">{coldCallScript.keyQuestion}</p>
                </div>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-sm backdrop-blur"
                whileHover={{ scale: 1.01 }}
              >
                <h4 className="font-semibold">Tácticas</h4>
                <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600">
                  {coldCallScript.tactics.map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3">
                  <h5 className="text-sm font-semibold">Voicemail</h5>
                  <pre className="mt-2 whitespace-pre-wrap break-words rounded-md bg-slate-50/80 p-3 text-xs text-slate-700">
                    {coldCallScript.voicemail}
                  </pre>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-sm backdrop-blur"
              whileHover={{ y: -4 }}
            >
              <h4 className="font-semibold">Rúbrica de evaluación (resumen)</h4>
              <ul className="mt-2 list-disc space-y-1 text-sm text-slate-600 sm:list-outside sm:pl-6">
                <li>Presentación y tono (0–5)</li>
                <li>Claridad del valor (0–5)</li>
                <li>Obtención de correo (0–10)</li>
                <li>Cierre para cita (0–10)</li>
                <li>Registro correcto en Salesforce (0–10)</li>
              </ul>
            </motion.div>
          </motion.section>

          <motion.section
            className="space-y-6"
            variants={sectionVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-lg font-semibold">Siguientes pasos sugeridos</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "1. Listado objetivo",
                  body: "Importar 50 empresas priorizadas como dataset inicial y asignar por vendedor.",
                  accent: "from-blue-500/15 to-blue-500/5"
                },
                {
                  title: "2. Entrenamiento de campo",
                  body: "Sesiones de role-play diarias y práctica supervisada en CRM.",
                  accent: "from-violet-500/15 to-violet-500/5"
                },
                {
                  title: "3. Medición",
                  body: "Definir panel de KPIs y frecuencia de reportes (diario / semanal).",
                  accent: "from-sky-500/15 to-sky-500/5"
                }
              ].map((card, idx) => (
                <motion.div
                  key={card.title}
                  className={`rounded-2xl border border-slate-200/70 bg-gradient-to-br ${card.accent} p-5 shadow-sm backdrop-blur`}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 150, damping: 18 }}
                >
                  <h4 className="font-semibold text-slate-800">{card.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>

        <motion.footer
          className="mt-12 rounded-2xl border border-white/50 bg-white/80 p-6 text-center text-sm text-slate-500 shadow-sm backdrop-blur sm:text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Preparado por: Equipo Comercial • Grupo Rino — Versión para presentación
        </motion.footer>
      </div>
    </div>
  );
}
