import React from "react";
import { motion } from "framer-motion";

export default function BlasPerezCV() {
  const personalInfo = {
    name: "Blas Pérez",
    title: "Desarrollador Full Stack",
    email: "blas.perez@email.com",
    phone: "+52 55 1234 5678",
    location: "Ciudad de México, México",
    linkedin: "linkedin.com/in/blasperez",
    github: "github.com/blasperez"
  };

  const skills = [
    "JavaScript", "React", "Node.js", "Python", "SQL", "MongoDB", 
    "Git", "Docker", "AWS", "TypeScript", "Express", "PostgreSQL"
  ];

  const experience = [
    {
      title: "Desarrollador Full Stack",
      company: "Empresa Tecnológica",
      period: "2022 - Presente",
      description: "Desarrollo de aplicaciones web completas usando React y Node.js. Implementación de APIs REST y gestión de bases de datos."
    },
    {
      title: "Desarrollador Frontend",
      company: "Startup Digital",
      period: "2020 - 2022",
      description: "Desarrollo de interfaces de usuario responsivas y optimización de rendimiento web."
    }
  ];

  const education = [
    {
      degree: "Ingeniería en Sistemas Computacionales",
      institution: "Universidad Tecnológica",
      period: "2016 - 2020"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-8 text-slate-800">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold">
              BP
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold">{personalInfo.name}</h1>
              <p className="text-xl text-blue-100 mt-2">{personalInfo.title}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm">
                <span>📧 {personalInfo.email}</span>
                <span>📱 {personalInfo.phone}</span>
                <span>📍 {personalInfo.location}</span>
              </div>
            </div>
          </div>
        </motion.header>

        <main className="p-8">
          {/* Skills */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Habilidades Técnicas</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Experiencia Profesional</h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="border-l-4 border-blue-500 pl-6 py-4"
                >
                  <h3 className="text-xl font-semibold text-slate-800">{job.title}</h3>
                  <p className="text-blue-600 font-medium">{job.company}</p>
                  <p className="text-slate-500 text-sm mb-2">{job.period}</p>
                  <p className="text-slate-600">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Educación</h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-slate-50 p-4 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-slate-800">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium">{edu.institution}</p>
                  <p className="text-slate-500 text-sm">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Contacto</h2>
            <div className="flex justify-center gap-6">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enviar Email
              </a>
              <a 
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-900 transition-colors"
              >
                GitHub
              </a>
            </div>
          </motion.section>
        </main>

        <footer className="bg-slate-100 p-6 text-center text-slate-500">
          <p>© 2024 {personalInfo.name} - Desarrollado con React y Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}
