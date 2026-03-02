import {
  ChevronRight,
  Clock,
  Gift,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  ShoppingBag,
  Smile,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── Animation Variants ─────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: i * 0.1,
    },
  }),
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Whatsapp Link ────────────────────────────────────────────────────────────
const WHATSAPP_LINK = "https://wa.me/918123860592";

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Delivery", href: "#deliver" },
    { label: "Why Us", href: "#why" },
    { label: "Hours", href: "#hours" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#hero"
          className="font-fraunces text-lg font-semibold tracking-tight text-charcoal"
          data-ocid="nav.link"
        >
          Vipul Express
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal-muted hover:text-charcoal transition-colors"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-charcoal text-charcoal hover:bg-charcoal hover:text-background transition-colors rounded-sm"
          data-ocid="nav.primary_button"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Order on WhatsApp
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-charcoal"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`block h-px bg-charcoal transition-transform origin-center ${menuOpen ? "rotate-45 translate-y-[4px]" : ""}`}
            />
            <span
              className={`block h-px bg-charcoal transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px bg-charcoal transition-transform origin-center ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-charcoal-muted hover:text-charcoal transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium border border-charcoal text-charcoal hover:bg-charcoal hover:text-background transition-colors rounded-sm mt-2"
                onClick={() => setMenuOpen(false)}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-background pt-16"
    >
      {/* Background image — full bleed */}
      <div className="absolute inset-0">
        <img
          src="/assets/uploads/IMG_0039-1.jpeg"
          alt="Vipul Shopping Centre storefront"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Strong overlay to keep text legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <motion.div
          className="max-w-xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-gold border border-gold/30 bg-gold/5 px-3 py-1 rounded-sm mb-8">
              Express Delivery · Chikmagalur
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-fraunces text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-charcoal mb-6"
          >
            Your Favs <span className="font-semibold italic">Delivered</span>
            <br />
            in 30 Minutes.
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base text-charcoal-muted mb-2"
          >
            An express service by{" "}
            <span className="font-medium text-charcoal">
              Vipul Shopping Centre.
            </span>
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-sm text-charcoal-muted leading-relaxed mb-4"
          >
            Premium beauty, accessories & curated lifestyle essentials —
            delivered across Chikmagalur.
          </motion.p>

          {/* Tag line */}
          <motion.p
            variants={fadeUp}
            custom={4}
            className="text-xs tracking-wider uppercase text-charcoal-muted/70 mb-10"
          >
            No surge pricing.&nbsp; No waiting.&nbsp; Just your favourites.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={5}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-gold text-charcoal hover:brightness-95 transition-all rounded-sm"
              data-ocid="hero.primary_button"
            >
              <MessageCircle className="w-4 h-4" />
              Order on WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal/5 transition-all rounded-sm"
              data-ocid="hero.secondary_button"
            >
              Visit Vipul Shopping Centre
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── About / Value Statement ──────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Gold divider top */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px bg-gold mx-auto mb-12 origin-left"
        />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-fraunces text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-charcoal mb-8"
        >
          Beauty. Accessories.
          <br />
          <em>Gifting. Delivered.</em>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base leading-relaxed text-charcoal-muted max-w-2xl mx-auto"
        >
          Vipul Express brings the most loved selections from Vipul Shopping
          Centre directly to your doorstep. From everyday beauty essentials to
          last-minute gifting — fast, reliable and premium.
        </motion.p>

        {/* Gold divider bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="w-16 h-px bg-gold mx-auto mt-12 origin-right"
        />
      </div>
    </section>
  );
}

// ─── What We Deliver ──────────────────────────────────────────────────────────

const categories = [
  {
    icon: Sparkles,
    label: "Cosmetics & Skincare",
  },
  {
    icon: Heart,
    label: "Haircare & Personal Care",
  },
  {
    icon: Star,
    label: "Imitation Jewellery",
  },
  {
    icon: TrendingUp,
    label: "Korean Accessories",
  },
  {
    icon: Gift,
    label: "Gifts & Decorative Items",
  },
  {
    icon: Smile,
    label: "Toys & Lifestyle Picks",
  },
];

function WhatWeDeliver() {
  return (
    <section id="deliver" className="py-24 bg-warm-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-medium tracking-widest uppercase text-gold mb-3"
          >
            Curated Selection
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-fraunces text-3xl md:text-4xl font-light text-charcoal mb-3"
          >
            What We Deliver
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-sm text-charcoal-muted"
          >
            Carefully curated bestsellers from our store:
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              variants={fadeUp}
              custom={i}
              className="group flex items-center gap-4 p-6 bg-background border border-border rounded-sm hover:border-gold/40 transition-colors"
              data-ocid={`categories.item.${i + 1}`}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center">
                <cat.icon className="w-4 h-4 text-gold" />
              </div>
              <span className="text-sm font-medium text-charcoal leading-snug">
                {cat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 text-xs text-center tracking-wider uppercase text-charcoal-muted/70"
        >
          Selected for quality. Trusted by Chikmagalur.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Why Vipul Express ────────────────────────────────────────────────────────

const whyItems = [
  {
    icon: Shield,
    title: "Backed by Vipul Shopping Centre",
    desc: "A trusted retail destination in Chikmagalur.",
  },
  {
    icon: ShoppingBag,
    title: "Premium Selection",
    desc: "We stock what we recommend.",
  },
  {
    icon: Zap,
    title: "No Surge Pricing",
    desc: "Transparent and consistent.",
  },
  {
    icon: Clock,
    title: "Fast & Reliable",
    desc: "Delivered within 30 minutes (within 3 km radius).",
  },
];

function WhyVipulExpress() {
  return (
    <section id="why" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-medium tracking-widest uppercase text-gold mb-3"
          >
            Our Promise
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-fraunces text-3xl md:text-4xl font-light text-charcoal"
          >
            Why Vipul Express
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border"
        >
          {whyItems.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i}
              className="group bg-background p-10 hover:bg-warm-cream transition-colors"
              data-ocid={`why.item.${i + 1}`}
            >
              {/* Gold accent line */}
              <div className="w-6 h-px bg-gold mb-6" />
              <div className="flex items-start gap-4">
                <item.icon className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-fraunces text-lg font-semibold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

const steps = [
  { n: "01", label: "Send your list on WhatsApp" },
  { n: "02", label: "Confirm availability" },
  { n: "03", label: "Receive delivery within 30 minutes" },
];

function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-warm-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-medium tracking-widest uppercase text-gold mb-3"
          >
            Simple Process
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-fraunces text-3xl md:text-4xl font-light text-charcoal"
          >
            How It Works
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center"
        >
          {steps.map((step, i) => (
            <div
              key={step.n}
              className="relative flex flex-col md:flex-1 items-start md:items-center"
              data-ocid={`how.item.${i + 1}`}
            >
              {/* Connector line between steps (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2.5rem)] right-[calc(-50%+2.5rem)] h-px bg-border z-0" />
              )}

              <motion.div
                variants={fadeUp}
                custom={i}
                className="relative z-10 flex flex-col items-start md:items-center"
              >
                {/* Step number */}
                <span className="font-fraunces text-4xl md:text-5xl font-thin text-gold leading-none mb-4">
                  {step.n}
                </span>
                {/* Step label */}
                <p className="text-sm font-medium text-charcoal md:text-center max-w-[200px] leading-snug">
                  {step.label}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Closing line */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center font-fraunces text-xl font-light italic text-charcoal-muted"
        >
          Simple. Seamless. Premium.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Brand Story ──────────────────────────────────────────────────────────────

function BrandStory() {
  return (
    <section id="brand" className="py-24 bg-secondary">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-medium tracking-widest uppercase text-gold mb-4"
          >
            Our Story
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-fraunces text-3xl md:text-4xl font-light text-charcoal leading-tight mb-6"
          >
            A Modern Extension
            <br />
            of a Trusted Name
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base leading-relaxed text-charcoal-muted mb-8"
          >
            Vipul Express is designed for convenience — while Vipul Shopping
            Centre remains your destination for full collections, exclusive
            launches and in-store experience.
          </motion.p>
          <motion.a
            variants={fadeUp}
            custom={3}
            href="#contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-gold hover:text-gold/80 transition-colors"
            data-ocid="brand.link"
          >
            Visit us for the complete range
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Delivery Hours ───────────────────────────────────────────────────────────

function DeliveryHours() {
  const slots = [
    { time: "9:00 AM – 1:00 PM", label: "Morning" },
    { time: "5:00 PM – 9:00 PM", label: "Evening" },
  ];

  return (
    <section id="hours" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-medium tracking-widest uppercase text-gold mb-3"
          >
            When We Deliver
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-fraunces text-3xl md:text-4xl font-light text-charcoal mb-14"
          >
            Delivery Hours
          </motion.h2>

          <motion.div
            variants={stagger}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            {slots.map((slot, i) => (
              <motion.div
                key={slot.time}
                variants={fadeUp}
                custom={i + 2}
                className="flex-1 max-w-xs mx-auto sm:mx-0 border border-border bg-warm-cream rounded-sm px-8 py-8"
              >
                <p className="text-xs tracking-widest uppercase text-charcoal-muted/60 mb-2">
                  {slot.label}
                </p>
                <p className="font-fraunces text-2xl font-light text-charcoal">
                  {slot.time}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={4}
            className="text-xs text-charcoal-muted/70 tracking-wide"
          >
            Service available within select areas of Chikmagalur (3 km radius).
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer / Contact ─────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-charcoal text-footer">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <p className="font-fraunces text-2xl font-light text-footer mb-3">
              Vipul Express
            </p>
            <p className="text-xs text-footer/50 tracking-wide leading-relaxed max-w-xs">
              Your Favs Delivered in 30 Minutes. An express service by Vipul
              Shopping Centre.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="text-xs font-medium tracking-widest uppercase text-gold mb-6">
              Get in Touch
            </p>

            <div className="flex flex-col gap-5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-footer">
                    Vipul Shopping Centre
                  </p>
                  <p className="text-xs text-footer/50 mt-0.5">
                    Chikmagalur, Karnataka, India
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-footer hover:text-gold transition-colors"
                  data-ocid="footer.whatsapp_button"
                >
                  WhatsApp: +91 81238 60592
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+918123860592"
                    className="text-sm text-footer hover:text-gold transition-colors"
                  >
                    +91 81238 60592
                  </a>
                  <a
                    href="tel:+917349416120"
                    className="text-sm text-footer hover:text-gold transition-colors"
                  >
                    +91 73494 16120
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-footer/10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="text-xs text-footer/40">
            © {year} Vipul Express. An extension of Vipul Shopping Centre.
          </p>
          <p className="text-xs text-footer/30">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-footer/50 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <WhatWeDeliver />
        <WhyVipulExpress />
        <HowItWorks />
        <BrandStory />
        <DeliveryHours />
      </main>
      <Footer />
    </>
  );
}
