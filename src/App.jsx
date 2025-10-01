import React from "react";
import { motion } from "framer-motion";

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
    intro: "Hola, buen día. Habla [TU NOMBRE] de [Transportes Rino / Tremex / VGP / CIE / ACON]. ¿Hablo con la persona encargada de logística / importaciones / transporte?",
    value: "Llamamos porque ayudamos a empresas como la suya a reducir tiempos y costos en transporte/aduana cuando contratan más de un servicio con nosotros; además compartimos alertas relevantes sobre NOMS y cambios regulatorios que pueden impactar sus operaciones.",
    keyQuestion: "¿Con quién podría coordinar para enviarle una breve propuesta por correo —o, mejor aún, agendar una visita rápida de nuestro ejecutivo Mario para revisar opciones en 15–20 minutos?",
    closeForEmail: "Perfecto, ¿me puedes dar el correo del responsable para enviar la información y un par de opciones de fecha para la visita?",
    voicemail: "Hola, habla [Tu nombre] de [Empresa]. Tengo una propuesta breve que puede optimizar sus costos de logística —si le parece, le envío un correo con un resumen. ¿Cuál es el mejor correo? Mi número: [tel]. Gracias.",
    tactics: [
      "Ofrecer valor (guía NOMs, checklist de importación) a cambio del correo.",
      "Pedir el correo del responsable y confirmar ortografía.",
      "Registrar consentimiento para uso de datos (LFPDPPP) como nota en CRM."
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 p-8 text-slate-800">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <header className="flex items-center justify-between p-8 border-b">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-blue-600 text-white font-bold text-xl">R</div>
            <div>
              <h1 className="text-2xl font-semibold">Protocolo de Entrenamiento — Vendedores</h1>
              <p className="text-sm text-slate-500 mt-1">Salesforce + Cold Calls • Presentación ejecutiva</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow">Imprimir / Exportar</button>
            <a href="#modules" className="text-sm text-slate-500 hover:text-slate-700">Ir a módulos</a>
          </div>
        </header>

        <main className="p-8">
          <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h2 className="text-lg font-semibold">Resumen ejecutivo</h2>
                <p className="text-sm text-slate-600 mt-2">Programa de 5 días diseñado para capacitar al equipo de ventas en técnicas outbound (cold calls desde línea fija), captura de correos y registro riguroso en Salesforce para convertir oportunidades y coordinar visitas del ejecutivo de campo.</p>

                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border">
                    <h3 className="text-sm font-semibold">Objetivo operativo</h3>
                    <p className="text-xs text-slate-500 mt-2">Captar correo del responsable, agendar citas para ventas en campo y cuando sea posible cerrar servicios directamente.</p>
                  </div>
                  <div className="p-4 rounded-lg border">
                    <h3 className="text-sm font-semibold">KPIs sugeridos</h3>
                    <ul className="text-xs text-slate-500 mt-2 space-y-1">
                      <li>60–120 dials/día</li>
                      <li>Connect rate objetivo: 5–12%</li>
                      <li>Correos capturados/día: mínimo 3</li>
                      <li>Conversión a cita: 3–8% de correos</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-md font-semibold">Guión estratégico (extracto)</h3>
                  <p className="text-sm text-slate-600 mt-2">Introduce el pitch de valor en 20 segundos, pide el correo como objetivo mínimo y ofrece la visita de Mario como objetivo ideal. Registrar consentimiento para marketing en la nota del CRM.</p>
                  <div className="mt-3 p-4 bg-slate-50 rounded-md border">
                    <pre className="text-xs">{coldCallScript.intro}\n\n{coldCallScript.value}\n\n{coldCallScript.keyQuestion}</pre>
                  </div>
                </div>
              </div>

              <aside className="p-4 rounded-lg border">
                <h3 className="text-sm font-semibold">Prioridad del proyecto</h3>
                <p className="text-xs text-slate-500 mt-2">Proyecto con inversión y expectativa de excelencia. Entregar capacitación medible, replicable y certificable.</p>

                <div className="mt-4">
                  <h4 className="text-xs font-semibold">Materiales del trainer</h4>
                  <ul className="text-xs text-slate-500 mt-2 space-y-1">
                    <li>50 empresas objetivo (listado CSV)</li>
                    <li>Casos ficticios y scripts</li>
                    <li>Rúbrica de evaluación y checklist</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-semibold">Cumplimiento</h4>
                  <p className="text-xs text-slate-500 mt-2">Registrar consentimiento y ofrecer opt-out. Consultar asesoría legal para avisos de privacidad y campañas de email.</p>
                </div>
              </aside>
            </div>
          </motion.section>

          <motion.section id="modules" className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <h2 className="text-lg font-semibold mb-4">Programa día a día (detallado)</h2>

            <div className="space-y-4">
              {modules.map((m, i) => (
                <motion.article key={m.title} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{m.title}</h3>
                      <p className="text-xs text-slate-500">{m.subtitle}</p>
                    </div>
                    <div className="text-sm text-slate-400">Duración estimada: 2–3 hrs</div>
                  </div>
                  <ul className="mt-3 text-sm text-slate-600 space-y-1 list-disc list-inside">
                    {m.bullets.map(b => <li key={b}>{b}</li>)}
                  </ul>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h2 className="text-lg font-semibold">Guión completo y tácticas</h2>
            <div className="mt-3 grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-slate-50">
                <h4 className="font-semibold">Pitch y preguntas clave</h4>
                <p className="text-sm text-slate-600 mt-2">{coldCallScript.value}</p>
                <div className="mt-3">
                  <h5 className="text-sm font-semibold">Pregunta clave</h5>
                  <p className="text-sm text-slate-600">{coldCallScript.keyQuestion}</p>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Tácticas</h4>
                <ul className="text-sm text-slate-600 mt-2 list-disc list-inside">
                  {coldCallScript.tactics.map(t => <li key={t}>{t}</li>)}
                </ul>
                <div className="mt-3">
                  <h5 className="text-sm font-semibold">Voicemail</h5>
                  <pre className="text-xs mt-2 bg-slate-50 p-2 rounded">{coldCallScript.voicemail}</pre>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 border rounded-lg bg-white">
              <h4 className="font-semibold">Rúbrica de evaluación (resumen)</h4>
              <ul className="text-sm text-slate-600 mt-2 list-disc list-inside">
                <li>Presentación y tono (0–5)</li>
                <li>Claridad del valor (0–5)</li>
                <li>Obtención de correo (0–10)</li>
                <li>Cierre para cita (0–10)</li>
                <li>Registro correcto en Salesforce (0–10)</li>
              </ul>
            </div>
          </motion.section>

          <motion.section className="mt-8 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
            <h2 className="text-lg font-semibold">Siguientes pasos sugeridos</h2>
            <div className="mt-3 grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">1. Listado objetivo</h4>
                <p className="text-sm text-slate-600 mt-2">Importar 50 empresas priorizadas como dataset inicial y asignar por vendedor.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">2. Entrenamiento de campo</h4>
                <p className="text-sm text-slate-600 mt-2">Sesiones de role-play diarias y práctica supervisada en CRM.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">3. Medición</h4>
                <p className="text-sm text-slate-600 mt-2">Definir panel de KPIs y frecuencia de reportes (diario / semanal).</p>
              </div>
            </div>
          </motion.section>
        </main>

        <footer className="p-6 border-t text-sm text-slate-500">Preparado por: Equipo Comercial • Grupo Rino — Versión para presentación</footer>
      </div>
    </div>
  );
}

