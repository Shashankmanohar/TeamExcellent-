import React from "react";
import { motion } from "framer-motion";
import {
  Layers, Award, BookOpen, FileQuestion,
  CheckCircle2, Timer, Minus, BarChart3,
  Monitor, ExternalLink, ArrowRight,
  Zap, ShieldCheck, Cpu, Globe,
} from "lucide-react";

/* ─── Animations ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

/* ════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════ */
export default function MockTestSection() {
  return (
    <section className="w-full" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* ── HERO ─────────────────────────────── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0a0a23 0%,#12052e 40%,#1a0840 70%,#0d1b3e 100%)" }}
      >
        {/* grid */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.04,
            backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* glow orbs */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ top: -128, right: -128, width: 600, height: 600, background: "radial-gradient(circle,rgba(139,92,246,0.18) 0%,transparent 70%)" }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ bottom: -96, left: -96, width: 500, height: 500, background: "radial-gradient(circle,rgba(59,130,246,0.14) 0%,transparent 70%)" }}
        />

        {/* floating dots */}
        {[
          { left: "8%",  top: "20%", size: 8,  color: "#a78bfa" },
          { left: "15%", top: "65%", size: 6,  color: "#60a5fa" },
          { left: "88%", top: "30%", size: 10, color: "#fbbf24" },
          { left: "78%", top: "75%", size: 6,  color: "#c084fc" },
          { left: "50%", top: "82%", size: 8,  color: "#818cf8" },
        ].map((d, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full pointer-events-none"
            style={{ left: d.left, top: d.top, width: d.size, height: d.size, background: d.color, opacity: 0.5 }}
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 sm:py-32 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full text-xs font-extrabold uppercase"
            style={{
              letterSpacing: "0.18em", color: "#fbbf24",
              background: "rgba(251,191,36,0.1)",
              border: "1px solid rgba(251,191,36,0.25)",
            }}
          >
            <Zap className="w-3.5 h-3.5" />
            Practice Mock Tests · CBT Format
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6"
            style={{ lineHeight: 1.08, letterSpacing: "-0.02em" }}
          >
            Experience India's Best
            <br />
            <span style={{
              background: "linear-gradient(90deg,#f59e0b,#a78bfa,#818cf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              CBT Test Simulator
            </span>
            <span className="text-white"> — Free!</span>
          </motion.h2>

          {/* Sub */}
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            style={{ color: "#94a3b8" }}
          >
            Powered by{" "}
            <span className="text-white font-semibold">AITS Online Examination Practice Centre</span>
            {" "}— Team Excellent's dedicated CBT platform with exact NTA interface replica.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="https://test.teamexcellent-aits.online/"
              target="_blank" rel="noopener noreferrer"
              id="cbt-hero-start-btn"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full font-extrabold text-base text-white"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#5b21b6)",
                boxShadow: "0 8px 32px rgba(124,58,237,0.4)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(124,58,237,0.5)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(124,58,237,0.4)";
              }}
            >
              <Zap className="w-4 h-4" />
              Start Practice Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://test.teamexcellent-aits.online/"
              target="_blank" rel="noopener noreferrer"
              id="cbt-hero-explore-btn"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full font-semibold text-base"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                color: "#cbd5e1",
                transition: "color 0.3s, transform 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#cbd5e1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <ExternalLink className="w-4 h-4" /> Explore Portal
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { value: "50+", label: "Mock Papers",     Icon: FileQuestion },
              { value: "4",   label: "Exam Categories", Icon: Layers },
              { value: "3",   label: "Languages",       Icon: Globe },
              { value: "∞",   label: "Free Attempts",   Icon: Zap },
            ].map((s) => (
              <motion.div
                key={s.label} variants={fadeUp}
                className="rounded-2xl p-5 text-center"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <s.Icon className="w-5 h-5 mx-auto mb-2" style={{ color: "#a78bfa" }} />
                <div
                  className="text-2xl sm:text-3xl font-black mb-1"
                  style={{
                    background: "linear-gradient(180deg,#fbbf24,#a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </div>
                <div className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "#64748b" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── EXAM CATEGORY CARDS ──────────────────── */}
      <div className="w-full py-20 px-6" style={{ background: "linear-gradient(180deg,#f8fafc 0%,#ffffff 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase mb-4"
              style={{ letterSpacing: "0.2em", color: "#572C7A", background: "#f5f3ff", border: "1px solid #e9d5ff" }}
            >
              Choose Your Stream
            </span>
            <h3 className="text-3xl sm:text-4xl font-black" style={{ color: "#0f172a" }}>
              Pick Your <span style={{ color: "#572C7A" }}>Exam Category</span>
            </h3>
            <p className="text-sm sm:text-base mt-3 max-w-lg mx-auto" style={{ color: "#64748b" }}>
              Click any card to jump into CBT mock tests — no sign-up needed.
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                Icon: Layers,       label: "IIT-JEE", sub: "Main & Advanced",
                desc: "Full-syllabus mocks with negative marking & official JEE patterns.",
                topBar: "linear-gradient(90deg,#3b82f6,#6366f1)",
                iconBg: "linear-gradient(135deg,#3b82f6,#6366f1)",
                tag: "Most Popular", tagBg: "#eff6ff", tagColor: "#1d4ed8",
                ctaColor: "#3b82f6", id: "cbt-cat-jee",
              },
              {
                Icon: Award,        label: "NEET",    sub: "Medical Entrance",
                desc: "Biology, Physics & Chemistry practice aligned with NEET syllabus.",
                topBar: "linear-gradient(90deg,#10b981,#0d9488)",
                iconBg: "linear-gradient(135deg,#10b981,#0d9488)",
                tag: "Top Rated",   tagBg: "#f0fdf4", tagColor: "#15803d",
                ctaColor: "#10b981", id: "cbt-cat-neet",
              },
              {
                Icon: BookOpen,     label: "Board",   sub: "Class 11 & 12",
                desc: "CBSE & State board chapter-wise preparation tests.",
                topBar: "linear-gradient(90deg,#f59e0b,#ea580c)",
                iconBg: "linear-gradient(135deg,#f59e0b,#ea580c)",
                tag: "Foundation",  tagBg: "#fffbeb", tagColor: "#b45309",
                ctaColor: "#f59e0b", id: "cbt-cat-board",
              },
              {
                Icon: FileQuestion, label: "NCERT",   sub: "& Previous Year Qs",
                desc: "Curated NCERT exercises and PYQ banks with step-by-step solutions.",
                topBar: "linear-gradient(90deg,#8b5cf6,#7c3aed)",
                iconBg: "linear-gradient(135deg,#8b5cf6,#7c3aed)",
                tag: "New",         tagBg: "#faf5ff", tagColor: "#7e22ce",
                ctaColor: "#8b5cf6", id: "cbt-cat-ncert",
              },
            ].map((cat) => (
              <motion.a
                key={cat.label}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                href="https://test.teamexcellent-aits.online/"
                target="_blank" rel="noopener noreferrer"
                id={cat.id}
                className="flex flex-col overflow-hidden rounded-[1.75rem] cursor-pointer"
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  transition: "box-shadow 0.3s",
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)"; }}
              >
                {/* top colour strip */}
                <div style={{ height: 6, background: cat.topBar }} />

                <div className="p-6 flex flex-col flex-1">
                  <span
                    className="self-start text-[10px] font-extrabold px-2.5 py-1 rounded-full mb-4"
                    style={{ background: cat.tagBg, color: cat.tagColor, letterSpacing: "0.05em" }}
                  >
                    {cat.tag}
                  </span>

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: cat.iconBg, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
                  >
                    <cat.Icon className="w-7 h-7 text-white" />
                  </div>

                  <h4 className="text-xl font-black mb-0.5" style={{ color: "#0f172a" }}>{cat.label}</h4>
                  <p className="text-xs font-bold uppercase mb-3" style={{ color: "#94a3b8", letterSpacing: "0.1em" }}>
                    {cat.sub}
                  </p>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#64748b" }}>{cat.desc}</p>

                  <div className="flex items-center gap-1.5 mt-5 font-bold text-sm" style={{ color: cat.ctaColor }}>
                    Practice Now <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── FEATURES ─────────────────────────────── */}
      <div className="w-full py-20 px-6" style={{ background: "linear-gradient(180deg,#faf7ff 0%,#ffffff 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase mb-4"
              style={{ letterSpacing: "0.2em", color: "#572C7A", background: "#f5f3ff", border: "1px solid #e9d5ff" }}
            >
              Platform Features
            </span>
            <h3 className="text-3xl sm:text-4xl font-black" style={{ color: "#0f172a" }}>
              Why the <span style={{ color: "#572C7A" }}>AITS CBT Platform</span> Wins
            </h3>
            <p className="text-sm sm:text-base mt-3 max-w-lg mx-auto" style={{ color: "#64748b" }}>
              Every feature built to replicate your exact exam-day environment.
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {[
              { Icon: Monitor,      title: "Real CBT UI Replica",  desc: "Exact NTA / JEE / NEET CBT interface simulation.",          iconBg: "#eff6ff", iconColor: "#2563eb", num: "01" },
              { Icon: Minus,        title: "Negative Marking",     desc: "Automatic penalty scoring just like the real exam.",         iconBg: "#fff1f2", iconColor: "#e11d48", num: "02" },
              { Icon: Timer,        title: "Live Countdown Timer", desc: "Section timers to build speed and time management.",         iconBg: "#fffbeb", iconColor: "#d97706", num: "03" },
              { Icon: BarChart3,    title: "Detailed Scorecards",  desc: "Subject-wise analysis instantly on submission.",             iconBg: "#f0fdf4", iconColor: "#16a34a", num: "04" },
              { Icon: CheckCircle2, title: "Question Palette",     desc: "Color-coded Answered / Unanswered / Marked for Review.",    iconBg: "#faf5ff", iconColor: "#7c3aed", num: "05" },
              { Icon: ShieldCheck,  title: "Mobile & Desktop",     desc: "Fully responsive — practice anytime, anywhere.",            iconBg: "#eef2ff", iconColor: "#4338ca", num: "06" },
            ].map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="flex items-start gap-5 p-6 rounded-2xl"
                style={{
                  background: "#fff",
                  border: "1px solid #f1f5f9",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  transition: "box-shadow 0.3s, transform 0.3s",
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 16px 40px rgba(91,45,124,0.10)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)"; }}
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: f.iconBg }}
                >
                  <f.Icon className="w-5 h-5" style={{ color: f.iconColor }} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-extrabold text-sm sm:text-[15px]" style={{ color: "#0f172a" }}>{f.title}</h4>
                    <span className="text-[10px] font-bold" style={{ color: "#94a3b8" }}>#{f.num}</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#64748b" }}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── FINAL CTA ────────────────────────────── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ background: "linear-gradient(135deg,#3b0764 0%,#5b21b6 50%,#7c3aed 100%)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.05,
            backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ top: -80, right: -80, width: 320, height: 320, background: "radial-gradient(circle,rgba(167,139,250,0.3) 0%,transparent 70%)" }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ bottom: -64, left: -64, width: 256, height: 256, background: "radial-gradient(circle,rgba(99,102,241,0.25) 0%,transparent 70%)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* Left */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex-1 text-center lg:text-left"
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase mb-5"
                style={{
                  letterSpacing: "0.15em", color: "#fbbf24",
                  background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)",
                }}
              >
                <Zap className="w-3.5 h-3.5" /> No Registration Required
              </div>
              <h3
                className="text-3xl sm:text-5xl font-black text-white mb-4"
                style={{ lineHeight: 1.1 }}
              >
                Ready to Crack<br />
                <span style={{
                  background: "linear-gradient(90deg,#fbbf24,#c084fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  JEE & NEET?
                </span>
              </h3>
              <p className="text-base sm:text-lg max-w-md mx-auto lg:mx-0" style={{ color: "#c4b5fd" }}>
                Launch the CBT practice portal and start your first full mock test in under 30 seconds.
              </p>
            </motion.div>

            {/* Right card */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex-shrink-0 w-full lg:w-auto"
            >
              <div
                className="rounded-3xl p-8 text-center"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(16px)",
                  minWidth: 300,
                }}
              >
                <Cpu className="w-12 h-12 mx-auto mb-4" style={{ color: "#a78bfa" }} />
                <p className="text-white font-bold text-lg mb-1">AITS CBT Platform</p>
                <p className="text-sm mb-6" style={{ color: "#a78bfa" }}>
                  50+ papers · JEE · NEET · Board · NCERT
                </p>

                <a
                  href="https://test.teamexcellent-aits.online/"
                  target="_blank" rel="noopener noreferrer"
                  id="cbt-final-launch-btn"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-extrabold text-base"
                  style={{
                    background: "linear-gradient(135deg,#ffffff,#f3e8ff)",
                    color: "#5B2D7C",
                    boxShadow: "0 8px 30px rgba(255,255,255,0.15)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 20px 50px rgba(255,255,255,0.25)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(255,255,255,0.15)";
                  }}
                >
                  Launch CBT Practice Portal
                  <ExternalLink className="w-5 h-5" />
                </a>

                <p className="text-xs mt-4" style={{ color: "rgba(167,139,250,0.7)" }}>
                  Free · Instant · No Login Required
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
