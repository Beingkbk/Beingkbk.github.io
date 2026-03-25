import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
} from "lucide-react";

export default function PortfolioApp() {
  const projects = [
    {
      title: "PPO Autonomous Agent (MetaDrive)",
      desc: "Developed a PPO-based autonomous driving agent in MetaDrive for lane-keeping and obstacle avoidance, with practical experimentation around reward shaping and policy learning.",
      tech: ["PyTorch", "MetaDrive", "Reinforcement Learning", "Python"],
      github: "https://github.com/Beingkbk/MetaDrive--PPO/tree/kartik",
      slides: "/presentations/ppo-autonomous-agent.pdf",
    },
    {
      title: "Modular Federated Learning for Manufacturing",
      desc: "Worked on modular neural networks, ModFL/FedPer and domain-adaptive approaches for ML-based quality prediction in heterogeneous manufacturing systems.",
      tech: ["PyTorch", "TensorFlow", "ModFL", "Manufacturing AI"],
      github: "https://github.com/AImotion-Bavaria/FEDIMA-Experiments",
    },
    {
      title: "Deep Q-Learning - Parachute Environment",
      desc: "Built a reinforcement learning setup for autonomous control in a parachute lander simulation using a discrete action space.",
      tech: ["DQN", "RL", "Gym", "Python"],
      github: "https://github.com/Beingkbk/padm_assignment",
      slides: "/presentations/deep-q-learning.pdf",
    },
    {
      title: "Survey: End-to-End vs Modular Architectures",
      desc: "Comparative study of end-to-end learning and modular approaches for autonomous driving systems, focusing on trade-offs and hybrid design directions.",
      tech: ["Research", "Autonomous Driving", "System Design"],
      github: "https://github.com/Beingkbk/e2e-vs-modular-survey",
      slides: "/presentations/survey-paper.pdf",
    },
  ];

  const experience = [
    {
      role: "Working Student - R&D (ThinKIsense)",
      org: "NETZSCH Pumpen & Systeme GmbH",
      time: "10/2025 - Present",
      points: [
        "Built Python-based data pipelines for time- and frequency-domain signal analysis and feature engineering.",
        "Designed, trained, and evaluated ML/DL models using PyTorch and scikit-learn.",
        "Developed AI algorithms for anomaly detection and performance prediction.",
      ],
    },
    {
      role: "Student Assistant - R&D (FEDIMA)",
      org: "Technische Hochschule Ingolstadt / AIMotion Bavaria",
      time: "04/2025 - Present",
      points: [
        "Worked on modular neural networks for quality prediction in manufacturing.",
        "Researched ModFL/FedPer and domain adversarial architectures for adaptive ML systems.",
        "Prepared heterogeneous industrial datasets and implemented modular learning pipelines.",
      ],
    },
    {
      role: "Senior Executive Operations - SCADA Distribution System",
      org: "Adani Electricity Mumbai Limited",
      time: "01/2023 - 08/2023",
      points: [
        "Led SCADA-based outage management and supported real-time system optimization.",
        "Worked on automation-oriented workflows and predictive maintenance related processes.",
      ],
    },
    {
      role: "Graduate Engineer Trainee - Operations & Maintenance",
      org: "Adani Electricity Mumbai Limited",
      time: "06/2022 - 01/2023",
      points: [
        "Worked on switchgear operations, system monitoring, fault detection and analysis.",
        "Built foundational experience in electrical systems and engineering operations.",
      ],
    },
  ];

  const certifications = [
    "NVIDIA DLI - Building LLM Applications with Prompt Engineering",
    "NVIDIA DLI - Fundamentals of Accelerated Data Science",
    "MathWorks - MATLAB Fundamentals",
    "MathWorks - Deep Learning Toolbox, Machine Learning, Simulink & Embedded Coder",
    "IBM / Coursera / Udemy - Python, Data Analysis, ML, LLM Engineering",
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-slate-100">
      <header className="w-full border-b border-white/10 backdrop-blur-sm sticky top-0 z-30 bg-black/30">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">Kartik Kapse</h1>
            <p className="text-sm text-slate-300">AI Engineer • ML • Reinforcement Learning • Industrial AI</p>
          </div>

          <nav className="hidden md:flex gap-5 items-center text-sm">
            <a className="text-slate-300 hover:text-white flex items-center gap-2" href="#projects">
              <Code size={16} /> Projects
            </a>
            <a className="text-slate-300 hover:text-white flex items-center gap-2" href="#experience">
              <Briefcase size={16} /> Experience
            </a>
            <a className="text-slate-300 hover:text-white flex items-center gap-2" href="#contact">
              <Mail size={16} /> Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <section className="grid lg:grid-cols-2 gap-10 items-center py-14 md:py-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-[0.2em] text-xs text-slate-400 mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              AI Engineering for Autonomous and Industrial Systems
            </h2>
            <p className="mt-5 text-slate-300 max-w-2xl text-base md:text-lg leading-7">
              Master’s student in AI Engineering for Autonomous Systems at Technische Hochschule Ingolstadt, with hands-on experience in reinforcement learning, industrial AI, modular learning systems, and ML model development for manufacturing and sensing applications.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition"
              >
                <Download size={16} /> Download CV
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-slate-700 rounded-xl hover:bg-slate-800 transition"
              >
                View Projects
              </a>
            </div>

            <div className="mt-7 flex items-center gap-4 text-slate-300">
              <a href="https://github.com/Beingkbk" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white">
                <Github />
              </a>
              <a href="https://linkedin.com/in/kartik-kapse" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
                <Linkedin />
              </a>
              <a href="mailto:kartik.b.kapse@gmail.com" aria-label="Email" className="hover:text-white">
                <Mail />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/10 p-3 shadow-2xl">
              <img
                src="/headshot.jpeg"
                alt="Kartik Kapse"
                className="w-full h-full rounded-[1.35rem] object-cover border border-white/10"
              />
            </div>
          </motion.div>
        </section>

        <section className="py-8">
          <h3 className="text-2xl font-semibold">Skills</h3>
          <p className="text-slate-400 mt-2">Selected technologies and competencies</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "Python",
              "PyTorch",
              "TensorFlow",
              "scikit-learn",
              "Reinforcement Learning",
              "LLMs",
              "MATLAB",
              "Simulink",
              "MLflow",
              "Computer Vision",
              "Industrial AI",
              "Git",
              "Linux",
              "SQL",
            ].map((s) => (
              <motion.span
                key={s}
                whileHover={{ scale: 1.04 }}
                className="px-3 py-1.5 bg-slate-800/70 rounded-full text-sm text-slate-200 border border-slate-700"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </section>

        <section id="projects" className="py-10">
          <h3 className="text-2xl font-semibold">Featured Projects</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="p-6 bg-slate-900/60 rounded-2xl border border-slate-800 shadow-lg"
              >
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="mt-2 text-slate-300 text-sm leading-6">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-slate-800 rounded-md border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-sm inline-flex items-center gap-2 text-slate-100 hover:underline">
                    <Github size={14} /> Source
                  </a>
                  {p.slides && (
                    <a href={p.slides} target="_blank" rel="noopener noreferrer" className="text-sm inline-flex items-center gap-2 text-indigo-300 hover:underline">
                      <FileText size={14} /> Presentation
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="py-10">
          <h3 className="text-2xl font-semibold">Experience</h3>
          <div className="mt-6 grid gap-5">
            {experience.map((item) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h4 className="font-semibold text-lg">{item.role}</h4>
                    <p className="text-slate-400">{item.org}</p>
                  </div>
                  <p className="text-sm text-slate-400">{item.time}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc pl-5">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-10 grid lg:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-semibold flex items-center gap-2"><GraduationCap size={22} /> Education</h3>
            <div className="mt-5 space-y-4 text-slate-300">
              <div>
                <p className="font-semibold">M.Eng - AI Engineering for Autonomous Systems</p>
                <p className="text-sm text-slate-400">Technische Hochschule Ingolstadt • 03/2024 - Present</p>
              </div>
              <div>
                <p className="font-semibold">B.Eng - Electrical Engineering</p>
                <p className="text-sm text-slate-400">Savitribai Phule Pune University • 07/2018 - 05/2022</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-semibold flex items-center gap-2"><Award size={22} /> Certifications</h3>
            <ul className="mt-5 space-y-3 text-slate-300 text-sm list-disc pl-5">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="py-10">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <div className="mt-5 grid lg:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
              <p className="text-slate-200 font-medium">kartik.b.kapse@gmail.com</p>
              <p className="text-slate-400 mt-2">Munich, Germany • Open to AI / ML / Working Student / Internship opportunities</p>
              <div className="mt-5 flex gap-4 items-center text-slate-300">
                <a href="https://github.com/Beingkbk" target="_blank" rel="noopener noreferrer"><Github /></a>
                <a href="https://linkedin.com/in/kartik-kapse" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
              </div>
            </div>

            <form
              action="https://formspree.io/f/xzzvokze"
              method="POST"
              className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-slate-200"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-slate-200"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-slate-200"
              />
              <div className="flex justify-end">
                <button type="submit" className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        <footer className="mt-12 py-8 border-t border-white/10 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Kartik Kapse - Built with React, Tailwind and Framer Motion
        </footer>
      </main>
    </div>
  );
}





// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Github,
//   Linkedin,
//   Mail,
//   Download,
//   Code,
//   FileText,
// } from "lucide-react";

// // Single-file React + Tailwind portfolio component
// // Drop this into a Vite + React + Tailwind project as src/App.jsx

// export default function PortfolioApp() {
//   const projects = [
//     {
//       title: "PPO Autonomous Agent (MetaDrive)",
//       desc: "Proximal Policy Optimization agent trained in MetaDrive for highway and urban scenarios. Integrated PyTorch training loop with curriculum and custom reward shaping.",
//       tech: ["PyTorch", "MetaDrive", "RL", "Python"],
//       github: "https://github.com/Beingkbk/MetaDrive--PPO/tree/kartik",
//       slides: "/presentations/ppo-autonomous-agent.pdf",
//     },
//     {
//       title: "Modular Federated Learning (Manufacturing)",
//       desc: "Implemented ModFL across multiple manufacturing lines with per-station embeddings and a concatenation-based modular classifier.",
//       tech: ["Modular Neural Networks", "PyTorch", "ModFL"],
//       github: "https://github.com/AImotion-Bavaria/FEDIMA-Experiments",
//       // slides: "/presentations/modfl.pdf", // add if you have a deck
//     },
//     {
//       title: "Deep Q-Learning - Parachute Env",
//       desc: "Custom environment and DQN baseline demonstrating stable control under wind perturbations.",
//       tech: ["RL", "DQN", "Gym"],
//       github: "https://github.com/Beingkbk/padm_assignment",
//       slides: "/presentations/deep-q-learning.pdf",
//     },
//     {
//       title: "Survey: End-to-End vs Modular Architectures",
//       desc: "Survey paper comparing architectures in autonomous driving systems with experiments and recommendations for hybrid designs.",
//       tech: ["Research", "Paper", "Autonomous Driving"],
//       github: "https://github.com/Beingkbk/e2e-vs-modular-survey",
//       slides: "/presentations/survey-paper.pdf",
//     },
//   ];

//   return (
//     <div className="w-full min-h-screen bg-gray-900 text-white">
//       <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-slate-100">
//         <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
//           <div>
//             <h1 className="text-2xl font-semibold">Kartik Kapse</h1>
//             <p className="text-sm text-slate-300">AI Engineer • ML & Autonomous Systems</p>
//           </div>
//           <nav className="flex gap-4 items-center">
//             <a
//               className="text-slate-300 hover:text-white flex items-center gap-2"
//               href="#projects"
//             >
//               <Code size={16} /> Projects
//             </a>
//             <a
//               className="text-slate-300 hover:text-white flex items-center gap-2"
//               href="#contact"
//             >
//               <Mail size={16} /> Contact
//             </a>
//           </nav>
//         </header>

//         <main className="w-full px-8 py-12">
//           {/* Hero */}
//           <section className="grid md:grid-cols-2 gap-8 items-center py-12">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//                 AI Engineering for Autonomous Systems
//               </h2>
//               <p className="mt-4 text-slate-300 max-w-xl">
//                 I'm pursuing a Master’s in AI Engineering for Autonomous Systems at
//                 Technische Hochschule Ingolstadt. I build RL agents, modular
//                 learning systems, and practical ML solutions for real-world
//                 embedded systems. Fast learner, collaborative, and driven by
//                 production-ready results.
//               </p>

//               <div className="mt-6 flex gap-3">
//                 <a
//                   href="/resume.pdf"
//                   download
//                   className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/40 rounded-xl hover:bg-slate-700"
//                 >
//                   <Download size={16} /> Download CV
//                 </a>

//                 <a
//                   href="#projects"
//                   className="inline-flex items-center gap-2 px-4 py-2 border border-slate-600 rounded-xl hover:bg-slate-700"
//                 >
//                   View Projects
//                 </a>
//               </div>

//               <div className="mt-6 flex items-center gap-4 text-slate-300">
//                 <a href="https://github.com/Beingkbk" aria-label="GitHub" className="hover:text-white">
//                   <Github />
//                 </a>
//                 <a href="https://linkedin.com/in/kartik-kapse" aria-label="LinkedIn" className="hover:text-white">
//                   <Linkedin />
//                 </a>
//                 <a href="mailto:kartik.b.kapse@gmail.com" aria-label="Email" className="hover:text-white">
//                   <Mail />
//                 </a>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.97 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.7 }}
//               className="w-full flex justify-center"
//             >
//               <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-transparent rounded-2xl shadow-2xl flex items-center justify-center">
//                 <div className="w-64 h-64 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center text-slate-200">
//                   <div className="text-center px-6">
//                     <p className="text-sm text-slate-400 mt-2"><img src="/headshot.jpeg" alt="Your headshot" className="rounded-xl w-64 h-64 object-cover" /></p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </section>

//           {/* Skills */}
//           <section className="py-8">
//             <h3 className="text-2xl font-semibold">Skills</h3>
//             <p className="text-slate-400 mt-2">Selected technologies & competencies</p>

//             <div className="mt-4 flex flex-wrap gap-3">
//               {["PyTorch", "Reinforcement Learning", "MetaDrive", "ModFL", "MATLAB", "Simulink", "Cloud", "MLflow", "CAN/LIN/Ethernet"].map((s) => (
//                 <motion.span
//                   key={s}
//                   whileHover={{ scale: 1.03 }}
//                   className="px-3 py-1.5 bg-slate-800/60 rounded-full text-sm text-slate-200 border border-slate-700"
//                 >
//                   {s}
//                 </motion.span>
//               ))}
//             </div>
//           </section>

//           {/* Projects */}
//           <section id="projects" className="py-8">
//             <h3 className="text-2xl font-semibold">Featured Projects</h3>
//             <div className="mt-6 grid md:grid-cols-2 gap-6">
//               {projects.map((p) => (
//                 <motion.article
//                   key={p.title}
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.45 }}
//                   className="p-5 bg-slate-800/40 rounded-2xl border border-slate-700"
//                 >
//                   <h4 className="font-semibold text-lg">{p.title}</h4>
//                   <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     {p.tech.map((t) => (
//                       <span key={t} className="text-xs px-2 py-1 bg-slate-700/40 rounded">
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="mt-4 flex items-center gap-3">
//                     <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-sm inline-flex items-center gap-2 text-slate-200 hover:underline">
//                       <Github size={14} /> Source
//                     </a>
//                     {p.slides && (
//                       <a href={p.slides} target="_blank" rel="noopener noreferrer" className="text-sm inline-flex items-center gap-2 text-slate-200 hover:underline">
//                         <FileText size={14} /> Presentation
//                       </a>
//                     )}
//                   </div>
//                 </motion.article>
//               ))}
//             </div>
//           </section>

//           {/* Education & Certifications */}
//           <section className="py-8 grid md:grid-cols-2 gap-6">
//             <div>
//               <h3 className="text-2xl font-semibold">Education</h3>
//               <div className="mt-4 space-y-3 text-slate-300">
//                 <div className="p-4 bg-slate-800/40 rounded-lg border border-slate-700">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <p className="font-semibold">MEng - AI Engineering for Autonomous Systems</p>
//                       <p className="text-sm text-slate-400">Technische Hochschule Ingolstadt</p>
//                     </div>
//                     <div className="text-sm text-slate-400">2024 - Present</div>
//                   </div>
//                 </div>

//                 <div className="p-4 bg-slate-800/40 rounded-lg border border-slate-700">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <p className="font-semibold">BEng - Electrical Engineering</p>
//                       <p className="text-sm text-slate-400">(SPPU)</p>
//                     </div>
//                     <div className="text-sm text-slate-400">2018 - 2022</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-2xl font-semibold">Certifications</h3>
//               <ul className="mt-4 space-y-3 text-slate-300">
//                 <li className="p-4 bg-slate-800/40 rounded-lg border border-slate-700">Nvidia- Building LLM applications with Prompt Engineering</li>
//                 <li className="p-4 bg-slate-800/40 rounded-lg border border-slate-700">MATLAB Fundamentals</li>
//                 <li className="p-4 bg-slate-800/40 rounded-lg border border-slate-700">Simulink & Simscape Onramp</li>
//                 <li className="p-4 bg-slate-800/40 rounded-lg border border-slate-700">MLflow (self-study)</li>
//               </ul>
//             </div>
//           </section>

//           {/* Contact */}
//           <section id="contact" className="py-8">
//             <h3 className="text-2xl font-semibold">Contact</h3>
//             <div className="mt-4 grid md:grid-cols-2 gap-6">
//               <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700">
//                 <p className="text-slate-300">kartik.b.kapse@gmail.com</p>
//                 <p className="text-slate-400 mt-2">Based in Germany • Open to internship roles & Master Thesis</p>

//                 <div className="mt-4 flex gap-3 items-center text-slate-300">
//                   <a href="https://github.com/Beingkbk"><Github /></a>
//                   <a href="https://linkedin.com/in/kartik-kapse"><Linkedin /></a>
//                 </div>
//               </div>

//               <form 
//                   action="https://formspree.io/f/xzzvokze" 
//                   method="POST" 
//                   className="space-y-4"
//                 >
//                   <input 
//                     type="text" 
//                     name="name" 
//                     placeholder="Your Name" 
//                     required
//                     className="w-full p-2 rounded-lg bg-slate-800 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
                  
//                   <input 
//                     type="email" 
//                     name="email" 
//                     placeholder="Your Email" 
//                     required
//                     className="w-full p-2 rounded-lg bg-slate-800 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
                  
//                   <textarea 
//                     name="message" 
//                     placeholder="Your Message" 
//                     required
//                     className="w-full p-2 rounded-lg bg-slate-800 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   ></textarea>
                  
//                   <button 
//                     type="submit"
//                     className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors"
//                   >
//                     Send
//                   </button>
//                 </form> 

//             </div>
//           </section>

//           <footer className="mt-12 py-8 text-center text-slate-500 text-sm">
//             © {new Date().getFullYear()} Kartik Kapse  - Built with React, Tailwind & Framer Motion
//           </footer>
//         </main>
//       </div>
//     </div>
//   );
// }
