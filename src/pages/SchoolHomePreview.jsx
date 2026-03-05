import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, X, Eye, BookOpen, Users, Lightbulb, GraduationCap, FlaskConical, Heart, Sparkles } from 'lucide-react';

/* ─── Standalone School Home Preview ───
   NOT part of main site. noindex. Not linked anywhere. */

const NAV_LINKS = ['Home', 'What do we do', 'Programs', 'Innovations', 'Contact'];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#010224]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <img src="/assets/logo-88.webp" alt="Blue Blocks" className="h-9 w-9 rounded-lg" />
          <span className="font-bold text-white text-lg tracking-tight">Blue Blocks</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <span key={l} className="text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer">
              {l}{(l === 'What do we do' || l === 'Programs' || l === 'Innovations') && <ChevronDown className="inline w-3.5 h-3.5 ml-1 opacity-50" />}
            </span>
          ))}
        </nav>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden overflow-hidden bg-[#010224]/95 border-t border-white/10">
            <div className="px-6 py-4 space-y-3">
              {NAV_LINKS.map(l => <div key={l} className="text-white/80 text-sm font-medium py-2">{l}</div>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

/* ─── SECTION 1: HERO ─── */
const HeroSection = () => (
  <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/home/homepage-banner-01.webp)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#010224]/80 via-[#010224]/60 to-[#010224]/90" />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
    </div>
    <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-16 md:pt-32 md:pb-20 text-center">
      <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}>
        THE CHILD, UNDERSTOOD
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-xl text-white/80 font-medium mb-6 max-w-2xl mx-auto">
        Authentic Montessori. The 0–16 Continuum. Education designed for the human spirit.
      </motion.p>
      <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }} className="text-base md:text-lg text-white/65 leading-relaxed max-w-3xl mx-auto mb-10">
        At Blue Blocks, we do not view children as empty vessels to be filled. We view them as complete human beings unfolding. While most schools rush to 'teach,' we take the time to observe. By understanding your child's natural development—without interference or pressure—we create the precise environment they need to construct themselves.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#00ABE8] text-white font-semibold text-base hover:bg-[#0090c4] transition-colors shadow-lg shadow-[#00ABE8]/25">
          Explore Our Programs <ArrowRight className="w-4 h-4" />
        </button>
        <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-white/30 text-white font-medium text-base bg-white/5 hover:bg-white/15 transition-colors backdrop-blur-sm">
          Visit the Campus
        </button>
      </motion.div>
    </div>
  </section>
);

/* ─── SECTION 2: OBSERVATION OVER INSTRUCTION ─── */
const ObservationSection = () => (
  <section className="py-16 md:py-24 bg-[#F7F8FA]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-[#e8edf2]">
          <img src="/home-01/kids-being-part-sunday-school.webp" alt="Children observing" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#010224] tracking-tight">OBSERVATION OVER INSTRUCTION</h2>
          <blockquote className="relative rounded-xl border-l-4 border-[#00ABE8] bg-white px-7 py-6 shadow-sm">
            <span className="absolute text-[72px] font-serif text-[#05057B] opacity-[0.07] -top-2 left-3 select-none pointer-events-none" aria-hidden="true">&ldquo;</span>
            <p className="relative z-10 font-serif italic text-[#010224] text-base md:text-lg leading-relaxed">
              &ldquo;We do not view children as vessels to be filled. We view them as phenomena to be observed.&rdquo;
            </p>
          </blockquote>
          <p className="text-[#374151] leading-relaxed text-base md:text-lg">
            While others race to finish a curriculum, we apply scientific rigor to the child's education — not as a series of tests, but as a carefully guided construction of the human being.
          </p>
          <p className="text-[#374151] leading-relaxed text-base md:text-lg">
            A child's growth cannot be rushed, manufactured, or standardized. It must be understood. Through prepared environments, purposeful routines, and educators trained to observe before they intervene, we help children develop independence, emotional balance, and the confidence to learn deeply — not just for school, but for life.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── SECTION 3: JOURNEY CARDS ─── */
const journeyCards = [
  { age: '15 Mo – 3Y', title: 'Nido & Toddler', color: 'bg-[#FFF0E5]', border: 'border-[#FFB87A]', pill: 'bg-[#FF9A4D]/15 text-[#C66B20]' },
  { age: '3 – 6Y', title: "Children's House", color: 'bg-[#E8F7FF]', border: 'border-[#7ECFFF]', pill: 'bg-[#00ABE8]/10 text-[#0078A8]' },
  { age: '6 – 12Y', title: 'Elementary', color: 'bg-[#F0FFF4]', border: 'border-[#7AE8A0]', pill: 'bg-[#34C759]/10 text-[#1D8A3C]' },
  { age: '12 – 18Y', title: 'Adolescent', color: 'bg-[#F5F0FF]', border: 'border-[#B89AFF]', pill: 'bg-[#8B5CF6]/10 text-[#6D3FC0]' },
];

const JourneySection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-[#010224] text-center mb-14 tracking-tight">A DISRUPTION-FREE JOURNEY</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {journeyCards.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className={`rounded-2xl ${c.color} border ${c.border} p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow`}>
            <span className={`inline-block self-start text-xs font-bold px-3 py-1 rounded-full ${c.pill}`}>{c.age}</span>
            <h3 className="text-xl font-bold text-[#010224]">{c.title}</h3>
            <p className="text-sm text-[#4B5563] leading-relaxed flex-1">The formative years are guided with independence and curiosity.</p>
            <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00ABE8] hover:text-[#0078A8] transition-colors mt-2">
              Explore this Community <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION 4: EDUCATION FOR LIFE ─── */
const features = [
  { icon: GraduationCap, title: 'The Continuum', body: "A seamless journey from Infancy (15 Months) to Adolescence (16 Years). No jarring transitions between 'Primary' and 'High School'—just one continuous arc of growth." },
  { icon: Lightbulb, title: 'Interdisciplinary Minds', body: "We don't teach subjects in silos. Biology meets History; Math meets Art. It creates \"System Thinkers\" for 2050." },
  { icon: Heart, title: 'The Prepared Adult', body: "Our Guides are AMI-Trained observers. Their job is not to 'command' the room, but to remove obstacles so your child can conquer it themselves." },
  { icon: FlaskConical, title: 'Scientific Observation', body: "We don't guess. We observe. Our unique internal research helps us tailor the environment to your child's specific needs, ensuring no one falls through the cracks." },
];

const EducationSection = () => (
  <section className="py-16 md:py-24 bg-[#F7F8FA]">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-[#010224] text-center mb-3 tracking-tight">EDUCATION FOR LIFE</h2>
      <p className="text-lg text-[#6B7280] text-center mb-14 max-w-xl mx-auto">We do not follow trends. We follow the child.</p>
      <div className="grid sm:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="bg-white rounded-2xl border border-[#E5E7EB] p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#00ABE8]/10 flex items-center justify-center mb-5">
              <f.icon className="w-6 h-6 text-[#00ABE8]" />
            </div>
            <h3 className="text-lg font-bold text-[#010224] mb-3">{f.title}</h3>
            <p className="text-sm text-[#4B5563] leading-relaxed">{f.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION 5: AWARDS ─── */
const AwardsSection = () => (
  <section className="py-16 md:py-24 bg-[#010224]">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-[#00ABE8] text-sm font-semibold uppercase tracking-widest mb-3">Awarded the Best Pre-school in Hyderabad by</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-14 tracking-tight">TIMES OF INDIA for Nine consecutive years</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          { img: '/home-01/awards-01-min.webp', text: 'Blue Blocks ranked top in the West Zone School Category' },
          { img: '/home-01/awards-02-min.webp', text: 'Awarded with the Outstanding Innovation School in the Full School Category' },
        ].map((a, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="aspect-[16/10] bg-[#1a1a3e]">
              <img src={a.img} alt={a.text} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <p className="text-white/90 font-medium text-base">{a.text}</p>
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
  <section className="py-14 md:py-20 bg-white border-y border-[#E5E7EB]">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-[#010224] text-center mb-10 tracking-tight">Media Mentions</h2>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {mediaLogos.map((name, i) => (
          <div key={i} className="px-5 py-3 bg-[#F7F8FA] rounded-lg border border-[#E5E7EB] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-default">
            <span className="text-sm font-semibold text-[#374151] whitespace-nowrap">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION 7: LIFE AT BLUE BLOCKS ─── */
const lifeCards = [
  { pill1: 'The Guide', pill2: 'The Philosophy', title: 'Lining the Nest', meta: 'The definitive guide to the First Plane of Development (0-6). A handbook for parents navigating the "Absorbent Mind."', color: 'bg-[#FFF7ED]', pillColor: 'bg-[#FF9A4D]/15 text-[#C66B20]' },
  { pill1: 'The Outcome', pill2: 'The Student Innovation', title: 'The Unscripted Learner', meta: 'Witness how our adolescents (Ages 12-16) are solving real-world agricultural problems—not because we told them to, but because they chose to.', color: 'bg-[#EFF6FF]', pillColor: 'bg-[#3B82F6]/10 text-[#1D4ED8]' },
  { pill1: 'The Insight', pill2: 'From the Director', title: 'Why We Wait', meta: "In Montessori, the hardest thing for an adult to do is nothing. Why pausing before helping builds your child's confidence.", color: 'bg-[#F0FDF4]', pillColor: 'bg-[#22C55E]/10 text-[#15803D]' },
];

const LifeSection = () => {
  const [expanded, setExpanded] = useState(null);
  return (
    <section className="py-16 md:py-24 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#010224] text-center mb-3 tracking-tight">LIFE AT BLUE BLOCKS</h2>
        <p className="text-lg text-[#6B7280] text-center mb-14 max-w-xl mx-auto">Stories of independence, innovation, and community.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {lifeCards.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className={`rounded-2xl ${c.color} border border-[#E5E7EB] p-7 flex flex-col gap-4`}>
              <div className="flex flex-wrap gap-2">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.pillColor}`}>{c.pill1}</span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#F3F4F6] text-[#6B7280]">{c.pill2}</span>
              </div>
              <h3 className="text-xl font-bold text-[#010224]">{c.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{c.meta}</p>
              <button onClick={() => setExpanded(expanded === i ? null : i)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00ABE8] hover:text-[#0078A8] transition-colors mt-auto">
                Read More <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {expanded === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="text-sm text-[#6B7280] leading-relaxed pt-2 border-t border-[#E5E7EB]">Full article content coming soon. This section will expand with the complete story.</p>
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
  <section className="py-14 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-[#010224] text-center mb-10 tracking-tight">RECOGNIZED STANDARDS</h2>
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
        {['EXAMIWORKS', 'CAMBRIDGE', 'AMI'].map((name, i) => (
          <div key={i} className="px-8 py-4 bg-[#F7F8FA] rounded-xl border border-[#E5E7EB] flex items-center justify-center">
            <span className="text-base font-bold text-[#374151] tracking-wide">{name}</span>
          </div>
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
    <section className="py-16 md:py-24 bg-[#F7F8FA]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#010224] text-center mb-14 tracking-tight">COMMUNITY QUESTIONS</h2>
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 ${open === i ? 'bg-white border-[#00ABE8]/20 shadow-lg shadow-[#00ABE8]/5' : 'bg-white/80 border-[#E5E7EB]/60 hover:border-[#E5E7EB]'}`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center gap-4 p-5 md:p-6 text-left">
                <span className={`flex-1 text-base md:text-lg font-medium ${open === i ? 'text-[#010224]' : 'text-[#010224]/80'}`}>{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#6B7280] flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 text-[#00ABE8]' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <div className="px-5 md:px-6 pb-6 pt-0">
                      <p className="text-[#6B7280] leading-relaxed">{item.a}</p>
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
  <section className="relative py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 bg-[#010224]">
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <img src="/building-image-01.webp" alt="Campus" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#010224] via-[#010224]/60 to-transparent" />
      </div>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center lg:text-left">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">Experience Learning</h2>
      <h2 className="text-3xl md:text-5xl font-bold text-[#00ABE8] mb-6 tracking-tight">the Blue Blocks Way.</h2>
      <p className="text-lg text-white/60 mb-8">Seats are filled on a first-come basis.</p>
      <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00ABE8] text-white font-semibold text-base hover:bg-[#0090c4] transition-colors shadow-lg shadow-[#00ABE8]/25">
        Book Admission Workshop <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </section>
);

/* ─── FOOTER ─── */
const Footer = () => (
  <footer className="bg-[#010224] border-t border-white/10 py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/assets/logo-88.webp" alt="Blue Blocks" className="h-8 w-8 rounded-lg" />
          <span className="font-bold text-white text-base">Blue Blocks Montessori School</span>
        </div>
        <p className="text-white/40 text-sm">© {new Date().getFullYear()} Blue Blocks Montessori School. All rights reserved.</p>
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
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Manrope', sans-serif" }}>
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
