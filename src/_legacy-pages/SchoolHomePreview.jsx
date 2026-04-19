import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, X, GraduationCap, Lightbulb, Heart, FlaskConical, Quote, Award, Newspaper, Star } from 'lucide-react';

/* ─── Standalone School Home Preview ───
   NOT part of main site. noindex. Not linked anywhere. */

const NAV_LINKS = [
  { label: 'Home', dropdown: false },
  { label: 'What do we do', dropdown: true },
  { label: 'Programs', dropdown: true },
  { label: 'Innovations', dropdown: true },
  { label: 'Contact', dropdown: false },
];

/* ─── HEADER ─── */
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-[#010224]/80 backdrop-blur-2xl border-b border-white/[0.06]" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ABE8] to-[#05057B] flex items-center justify-center shadow-lg shadow-[#00ABE8]/20">
            <img src="/assets/logo-88.webp" alt="Blue Blocks" className="h-7 w-7 rounded-lg" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-[15px] leading-tight tracking-tight">Blue Blocks</span>
            <span className="text-[10px] text-white/40 font-medium tracking-widest uppercase">Montessori School</span>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(l => (
            <span key={l.label} className="text-[13px] font-semibold text-white/60 hover:text-white hover:bg-white/[0.06] px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1">
              {l.label}
              {l.dropdown && <ChevronDown className="w-3 h-3 opacity-40" />}
            </span>
          ))}
          <button className="ml-4 px-5 py-2 text-[13px] font-semibold text-white bg-[#00ABE8] rounded-lg hover:bg-[#0095cc] transition-colors shadow-md shadow-[#00ABE8]/20">
            Enquire Now
          </button>
        </nav>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white/80 hover:text-white transition-colors p-2">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden overflow-hidden relative">
            <div className="bg-[#010224]/95 backdrop-blur-2xl border-t border-white/[0.06] px-6 py-5 space-y-1">
              {NAV_LINKS.map(l => <div key={l.label} className="text-white/70 text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-white/5">{l.label}</div>)}
              <button className="w-full mt-3 px-5 py-2.5 text-sm font-semibold text-white bg-[#00ABE8] rounded-lg">Enquire Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

/* ─── SECTION 1: HERO ─── */
const HeroSection = () => (
  <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#010224]">
    {/* Background layers */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/home/homepage-banner-01.webp)' }} />
      <div className="absolute inset-0 bg-gradient-to-br from-[#010224]/90 via-[#05057B]/50 to-[#010224]/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#010224] via-transparent to-transparent" />
    </div>
    {/* Node pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    {/* Decorative orbs */}
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00ABE8]/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#FFB87A]/8 rounded-full blur-[100px]" />

    <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-20 md:pt-40 md:pb-28 w-full">
      <div className="max-w-3xl">
        {/* Eyebrow */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#00ABE8]/80 bg-[#00ABE8]/[0.08] border border-[#00ABE8]/15 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ABE8] animate-pulse" />
            AMI Montessori · Hyderabad
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-white leading-[1.05] tracking-[-0.03em] mb-7">
          THE CHILD,{' '}
          <span className="bg-gradient-to-r from-[#00ABE8] to-[#7ECFFF] bg-clip-text text-transparent">UNDERSTOOD</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-white/50 font-semibold mb-5 tracking-tight">
          Authentic Montessori. The 0–16 Continuum. Education designed for the human spirit.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          className="text-[15px] md:text-base text-white/40 leading-[1.8] max-w-2xl mb-12">
          At Blue Blocks, we do not view children as empty vessels to be filled. We view them as complete human beings unfolding. While most schools rush to 'teach,' we take the time to observe. By understanding your child's natural development—without interference or pressure—we create the precise environment they need to construct themselves.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-3">
          <button className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00ABE8] to-[#0095cc] text-white font-semibold text-[15px] hover:shadow-xl hover:shadow-[#00ABE8]/25 transition-all duration-300 hover:-translate-y-0.5">
            Explore Our Programs <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-white/80 font-medium text-[15px] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/25 transition-all duration-300 backdrop-blur-sm">
            Visit the Campus
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/25 font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </div>
  </section>
);

/* ─── SECTION 2: OBSERVATION OVER INSTRUCTION ─── */
const ObservationSection = () => (
  <section className="py-24 md:py-32 bg-white relative overflow-hidden">
    {/* Subtle background accent */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ABE8]/[0.02] rounded-full blur-[100px]" />
    
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Image */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/10 aspect-[4/3] bg-[#F0F2F5]">
            <img src="/home-01/kids-being-part-sunday-school.webp" alt="Children observing and learning" className="w-full h-full object-cover" />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#FFE4CC] to-[#FFB87A] opacity-60 -z-10" />
          <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-gradient-to-br from-[#CCE8FF] to-[#00ABE8]/30 opacity-50 -z-10" />
        </motion.div>

        {/* Content */}
        <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#00ABE8] mb-5">Our Philosophy</span>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#010224] leading-[1.15] tracking-tight mb-8">
            OBSERVATION OVER<br />INSTRUCTION
          </h2>

          {/* Pull quote */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] border border-[#E2E8F0] px-8 py-7 mb-8">
            <Quote className="absolute top-5 left-5 w-8 h-8 text-[#00ABE8]/10" />
            <p className="relative z-10 font-serif italic text-[#010224] text-base md:text-lg leading-relaxed pl-4 border-l-[3px] border-[#00ABE8]">
              &ldquo;We do not view children as vessels to be filled. We view them as phenomena to be observed.&rdquo;
            </p>
          </div>

          <div className="space-y-5 text-[15px] md:text-base text-[#4B5563] leading-[1.85]">
            <p>While others race to finish a curriculum, we apply scientific rigor to the child's education — not as a series of tests, but as a carefully guided construction of the human being.</p>
            <p>A child's growth cannot be rushed, manufactured, or standardized. It must be understood. Through prepared environments, purposeful routines, and educators trained to observe before they intervene, we help children develop independence, emotional balance, and the confidence to learn deeply — not just for school, but for life.</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── SECTION 3: JOURNEY CARDS ─── */
const journeyCards = [
  { age: '15 Mo – 3Y', title: 'Nido & Toddler', gradient: 'from-[#FFF7ED] to-[#FFEDD5]', accent: '#F97316', pillBg: 'bg-[#F97316]/10 text-[#C2410C]', dot: 'bg-[#F97316]' },
  { age: '3 – 6Y', title: "Children's House", gradient: 'from-[#EFF6FF] to-[#DBEAFE]', accent: '#3B82F6', pillBg: 'bg-[#3B82F6]/10 text-[#1D4ED8]', dot: 'bg-[#3B82F6]' },
  { age: '6 – 12Y', title: 'Elementary', gradient: 'from-[#ECFDF5] to-[#D1FAE5]', accent: '#10B981', pillBg: 'bg-[#10B981]/10 text-[#047857]', dot: 'bg-[#10B981]' },
  { age: '12 – 18Y', title: 'Adolescent', gradient: 'from-[#F5F3FF] to-[#EDE9FE]', accent: '#8B5CF6', pillBg: 'bg-[#8B5CF6]/10 text-[#6D28D9]', dot: 'bg-[#8B5CF6]' },
];

const JourneySection = () => (
  <section className="py-24 md:py-32 bg-[#FAFBFC] relative">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="text-center mb-16">
        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#00ABE8] mb-4">The Continuum</span>
        <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#010224] tracking-tight">A DISRUPTION-FREE JOURNEY</h2>
      </div>

      {/* Timeline connector (desktop) */}
      <div className="hidden lg:block relative mb-4">
        <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#F97316]/30 via-[#3B82F6]/30 via-[#10B981]/30 to-[#8B5CF6]/30" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {journeyCards.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative">
            {/* Timeline dot (desktop) */}
            <div className={`hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full ${c.dot} ring-4 ring-white shadow-sm z-10`} />
            
            <div className={`relative bg-gradient-to-br ${c.gradient} rounded-2xl p-7 border border-black/[0.04] hover:shadow-xl hover:shadow-black/[0.06] transition-all duration-500 hover:-translate-y-1 h-full flex flex-col`}>
              <span className={`inline-block self-start text-[11px] font-bold px-3 py-1.5 rounded-full ${c.pillBg} mb-5`}>{c.age}</span>
              <h3 className="text-xl font-bold text-[#010224] mb-3">{c.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed flex-1 mb-5">The formative years are guided with independence and curiosity.</p>
              <button className="group/btn inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wider transition-colors" style={{ color: c.accent }}>
                Explore this Community <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION 4: EDUCATION FOR LIFE ─── */
const features = [
  { icon: GraduationCap, title: 'The Continuum', body: "A seamless journey from Infancy (15 Months) to Adolescence (16 Years). No jarring transitions between 'Primary' and 'High School'—just one continuous arc of growth.", accent: '#00ABE8' },
  { icon: Lightbulb, title: 'Interdisciplinary Minds', body: "We don't teach subjects in silos. Biology meets History; Math meets Art. It creates \"System Thinkers\" for 2050.", accent: '#F59E0B' },
  { icon: Heart, title: 'The Prepared Adult', body: "Our Guides are AMI-Trained observers. Their job is not to 'command' the room, but to remove obstacles so your child can conquer it themselves.", accent: '#EF4444' },
  { icon: FlaskConical, title: 'Scientific Observation', body: "We don't guess. We observe. Our unique internal research helps us tailor the environment to your child's specific needs, ensuring no one falls through the cracks.", accent: '#8B5CF6' },
];

const EducationSection = () => (
  <section className="py-24 md:py-32 bg-white relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#F5F3FF]/50 rounded-full blur-[120px]" />
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
      <div className="text-center mb-16">
        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#00ABE8] mb-4">Our Approach</span>
        <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#010224] tracking-tight mb-4">EDUCATION FOR LIFE</h2>
        <p className="text-lg text-[#9CA3AF] max-w-md mx-auto">We do not follow trends. We follow the child.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group bg-[#FAFBFC] rounded-2xl border border-[#F0F0F0] p-8 hover:bg-white hover:shadow-xl hover:shadow-black/[0.04] hover:border-transparent transition-all duration-500 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
              style={{ background: `${f.accent}12` }}>
              <f.icon className="w-7 h-7" style={{ color: f.accent }} />
            </div>
            <h3 className="text-lg font-bold text-[#010224] mb-3 tracking-tight">{f.title}</h3>
            <p className="text-sm text-[#6B7280] leading-[1.8]">{f.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION 5: AWARDS ─── */
const AwardsSection = () => (
  <section className="py-24 md:py-32 bg-[#010224] relative overflow-hidden">
    {/* Background accents */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFB87A]/5 rounded-full blur-[150px]" />
    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#00ABE8]/5 rounded-full blur-[120px]" />
    
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
      <div className="text-center mb-16">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-2 bg-[#FFB87A]/10 border border-[#FFB87A]/20 rounded-full px-4 py-1.5 mb-6">
            <Award className="w-3.5 h-3.5 text-[#FFB87A]" />
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#FFB87A]">Awarded the Best Pre-school in Hyderabad by</span>
          </div>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-3xl md:text-[2.75rem] font-bold text-white tracking-tight">
          TIMES OF INDIA <span className="text-white/40">for</span> Nine consecutive years
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
          { img: '/home-01/awards-01-min.webp', text: 'Blue Blocks ranked top in the West Zone School Category' },
          { img: '/home-01/awards-02-min.webp', text: 'Awarded with the Outstanding Innovation School in the Full School Category' },
        ].map((a, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
            className="group rounded-2xl overflow-hidden bg-white/[0.04] border border-white/[0.08] hover:border-white/15 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FFB87A]/5">
            <div className="aspect-[16/10] bg-[#0a0a2e] overflow-hidden">
              <img src={a.img} alt={a.text} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
            </div>
            <div className="p-6 flex items-start gap-3">
              <Star className="w-4 h-4 text-[#FFB87A] flex-shrink-0 mt-0.5" />
              <p className="text-white/80 font-medium text-[15px] leading-relaxed">{a.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION 6: MEDIA MENTIONS ─── */
const mediaLogos = ['News Arena India', 'The Hans India', 'The Siasat Daily', 'The New Indian Express', 'Telangana Today', 'India Today', 'Indiatoday', 'Hyderabad Mail', 'The Federal Telangana', 'NDTV', 'EdexLive'];

const MediaSection = () => (
  <section className="py-20 md:py-24 bg-white relative">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4">
          <Newspaper className="w-4 h-4 text-[#9CA3AF]" />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#9CA3AF]">Press & Coverage</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#010224] tracking-tight">Media Mentions</h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
        {mediaLogos.map((name, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
            className="px-5 py-2.5 bg-[#F9FAFB] rounded-xl border border-[#F0F0F0] grayscale hover:grayscale-0 opacity-50 hover:opacity-100 hover:bg-white hover:shadow-md hover:shadow-black/[0.04] hover:border-[#E5E7EB] transition-all duration-400 cursor-default">
            <span className="text-[13px] font-bold text-[#374151] whitespace-nowrap">{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION 7: LIFE AT BLUE BLOCKS ─── */
const lifeCards = [
  { pill1: 'The Guide', pill2: 'The Philosophy', title: 'Lining the Nest', meta: 'The definitive guide to the First Plane of Development (0-6). A handbook for parents navigating the "Absorbent Mind."', gradient: 'from-[#FFF7ED] to-[#FFF1E0]', pillColor: 'bg-[#F97316]/10 text-[#C2410C]', borderAccent: 'hover:border-[#F97316]/20' },
  { pill1: 'The Outcome', pill2: 'The Student Innovation', title: 'The Unscripted Learner', meta: 'Witness how our adolescents (Ages 12-16) are solving real-world agricultural problems—not because we told them to, but because they chose to.', gradient: 'from-[#EFF6FF] to-[#E0EFFE]', pillColor: 'bg-[#3B82F6]/10 text-[#1D4ED8]', borderAccent: 'hover:border-[#3B82F6]/20' },
  { pill1: 'The Insight', pill2: 'From the Director', title: 'Why We Wait', meta: "In Montessori, the hardest thing for an adult to do is nothing. Why pausing before helping builds your child's confidence.", gradient: 'from-[#ECFDF5] to-[#D5F5E8]', pillColor: 'bg-[#10B981]/10 text-[#047857]', borderAccent: 'hover:border-[#10B981]/20' },
];

const LifeSection = () => {
  const [expanded, setExpanded] = useState(null);
  return (
    <section className="py-24 md:py-32 bg-[#FAFBFC]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#00ABE8] mb-4">Stories & Insights</span>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#010224] tracking-tight mb-4">LIFE AT BLUE BLOCKS</h2>
          <p className="text-lg text-[#9CA3AF] max-w-lg mx-auto">Stories of independence, innovation, and community.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {lifeCards.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`rounded-2xl bg-gradient-to-br ${c.gradient} border border-black/[0.04] ${c.borderAccent} p-7 flex flex-col gap-4 transition-all duration-500 hover:shadow-lg hover:shadow-black/[0.04] hover:-translate-y-1`}>
              <div className="flex flex-wrap gap-2">
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${c.pillColor} uppercase tracking-wider`}>{c.pill1}</span>
                <span className="text-[10px] font-medium px-3 py-1 rounded-full bg-white/60 text-[#6B7280] border border-black/[0.04]">{c.pill2}</span>
              </div>
              <h3 className="text-xl font-bold text-[#010224] tracking-tight">{c.title}</h3>
              <p className="text-sm text-[#6B7280] leading-[1.75] flex-1">{c.meta}</p>
              <button onClick={() => setExpanded(expanded === i ? null : i)}
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#00ABE8] hover:text-[#0078A8] transition-colors mt-1 self-start">
                Read More <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {expanded === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden">
                    <div className="pt-3 border-t border-black/[0.06]">
                      <p className="text-sm text-[#9CA3AF] leading-relaxed">Full article content coming soon. This section will expand with the complete story.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── SECTION 8: RECOGNIZED STANDARDS ─── */
const RecognizedSection = () => (
  <section className="py-20 md:py-24 bg-white border-t border-[#F0F0F0]">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="text-center mb-12">
        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#9CA3AF] mb-4">Affiliations</span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#010224] tracking-tight">RECOGNIZED STANDARDS</h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
        {['EXAMIWORKS', 'CAMBRIDGE', 'AMI'].map((name, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="px-10 py-5 bg-[#F9FAFB] rounded-2xl border border-[#F0F0F0] hover:bg-white hover:shadow-lg hover:shadow-black/[0.03] hover:border-[#E5E7EB] transition-all duration-400">
            <span className="text-base font-bold text-[#374151] tracking-[0.1em]">{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION 9: FAQ ─── */
const faqItems = [
  { q: 'Why do you mix ages in one classroom?', a: "Because real life is not segregated by birth year. In a mixed-age community, younger children learn by watching, and older children master concepts by teaching. This builds deep social intelligence." },
  { q: "How do you handle the 'Real World'?", a: 'Details coming soon.' },
  { q: "What is your 'Research' approach?", a: 'Details coming soon.' },
];

const FAQSection = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24 md:py-32 bg-[#FAFBFC]">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#00ABE8] mb-4">Have Questions?</span>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#010224] tracking-tight">COMMUNITY QUESTIONS</h2>
        </div>
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className={`rounded-2xl overflow-hidden transition-all duration-400 ${
                open === i
                  ? 'bg-white border border-[#00ABE8]/15 shadow-xl shadow-[#00ABE8]/[0.04]'
                  : 'bg-white/60 border border-[#F0F0F0] hover:border-[#E5E7EB] hover:bg-white'
              }`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center gap-4 p-6 text-left">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  open === i ? 'bg-[#00ABE8]/10 text-[#00ABE8]' : 'bg-[#F3F4F6] text-[#9CA3AF]'
                }`}>{String(i + 1).padStart(2, '0')}</div>
                <span className={`flex-1 text-[15px] md:text-base font-semibold transition-colors ${open === i ? 'text-[#010224]' : 'text-[#374151]'}`}>{item.q}</span>
                <ChevronDown className={`w-4 h-4 text-[#9CA3AF] flex-shrink-0 transition-all duration-300 ${open === i ? 'rotate-180 text-[#00ABE8]' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <div className="px-6 pb-6 pt-0 pl-[4.5rem]">
                      <p className="text-[#6B7280] leading-[1.8] text-[15px]">{item.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── SECTION 10: CTA BANNER ─── */
const CTABanner = () => (
  <section className="relative py-24 md:py-32 overflow-hidden bg-[#010224]">
    {/* Background image */}
    <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2">
      <img src="/building-image-01.webp" alt="Campus building" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#010224] via-[#010224]/80 to-[#010224]/30" />
    </div>
    {/* Accent orbs */}
    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#00ABE8]/8 rounded-full blur-[100px]" />
    
    <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="max-w-xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight mb-2">
            Experience Learning
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-8">
            <span className="bg-gradient-to-r from-[#00ABE8] to-[#7ECFFF] bg-clip-text text-transparent">the Blue Blocks Way.</span>
          </h2>
          <p className="text-lg text-white/40 mb-10">Seats are filled on a first-come basis.</p>
          <button className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-xl bg-gradient-to-r from-[#00ABE8] to-[#0095cc] text-white font-semibold text-base hover:shadow-xl hover:shadow-[#00ABE8]/25 transition-all duration-300 hover:-translate-y-0.5">
            Book Admission Workshop <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── FOOTER ─── */
const Footer = () => (
  <footer className="bg-[#010224] border-t border-white/[0.06] py-16">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00ABE8] to-[#05057B] flex items-center justify-center">
              <img src="/assets/logo-88.webp" alt="Blue Blocks" className="h-6 w-6 rounded" />
            </div>
            <span className="font-bold text-white text-[15px]">Blue Blocks</span>
          </div>
          <p className="text-sm text-white/30 leading-relaxed max-w-xs">Authentic Montessori education for the human spirit. From infancy to adolescence.</p>
        </div>
        <div>
          <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-4">Quick Links</h4>
          <div className="space-y-2.5">
            {['Programs', 'Our Philosophy', 'Admissions', 'Contact'].map(l => (
              <div key={l} className="text-sm text-white/50 hover:text-white/80 transition-colors cursor-pointer">{l}</div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-4">Connect</h4>
          <div className="space-y-2.5">
            {['Facebook', 'Instagram', 'YouTube', 'LinkedIn'].map(l => (
              <div key={l} className="text-sm text-white/50 hover:text-white/80 transition-colors cursor-pointer">{l}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/25 text-xs">© {new Date().getFullYear()} Blue Blocks Montessori School. All rights reserved.</p>
        <p className="text-white/15 text-[10px] tracking-widest uppercase">Preview Build · Not for Production</p>
      </div>
    </div>
  </footer>
);

/* ─── MAIN PAGE ─── */
const SchoolHomePreview = () => (
  <>
    <Helmet>
      <title>School Home Preview — Blue Blocks</title>
      <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
    </Helmet>
    <div className="min-h-screen bg-white antialiased" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <Header />
      <HeroSection />
      <ObservationSection />
      <JourneySection />
      <EducationSection />
      <AwardsSection />
      <MediaSection />
      <LifeSection />
      <RecognizedSection />
      <FAQSection />
      <CTABanner />
      <Footer />
    </div>
  </>
);

export default SchoolHomePreview;
