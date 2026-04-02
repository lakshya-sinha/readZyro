"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  UserIcon, LockIcon, SearchIcon, ShoppingCartIcon,
  HomeIcon, DownloadIcon, PlusIcon, ImageIcon,
  FileTextIcon, ShieldCheckIcon, CheckCircleIcon, DollarSignIcon,
  StarIcon, ChevronDownIcon, ZapIcon, ShieldIcon, SmartphoneIcon,
  BadgeCheckIcon, RefreshCwIcon, ArrowRightIcon,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Step = {
  tag: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  ai?: boolean;
};

type FloatItem = {
  type: "book" | "leaf";
  x: string; y: string;
  rot: number; size: number;
  delay: number; dur: number;
  color: string; op: number;
  floatY: number;
};

type Testimonial = {
  stars: number;
  text: string;
  name: string;
  role: string;
  initials: string;
  accent: "blue" | "teal" | "indigo";
};

type FaqItem = {
  q: string;
  a: string;
};

// ─── Data ────────────────────────────────────────────────────────────────────

const buySteps: Step[] = [
  { tag: "Start here", title: "Create your account",    desc: "Sign up with email. Takes under a minute, free to register.",              icon: UserIcon },
  { tag: "Access",     title: "Log in to your account", desc: "Enter your credentials and jump straight into the library.",               icon: LockIcon },
  { tag: "Explore",    title: "Browse & pick an eBook", desc: "Search thousands of titles. Filter by topic, author, or rating.",          icon: SearchIcon },
  { tag: "Purchase",   title: 'Click "Buy" & checkout', desc: "Secure payment, instant order confirmation, no waiting.",                  icon: ShoppingCartIcon },
  { tag: "Your library", title: "Visit your profile",   desc: "All purchased books live in your profile, always available.",              icon: HomeIcon },
  { tag: "Enjoy",      title: "Read or download",       desc: 'Hit "Read" for in-browser, or "Download" to keep the file forever.',      icon: DownloadIcon },
];

const sellSteps: Step[] = [
  { tag: "Start here", title: "Create your account",    desc: "Register as an author — same quick sign-up, no fees upfront.",            icon: UserIcon },
  { tag: "Access",     title: "Log in to your account", desc: "Sign in and head to your seller dashboard.",                              icon: LockIcon },
  { tag: "List",       title: 'Click "Start Selling"',  desc: "Hit the sell button and open the book submission form.",                  icon: PlusIcon },
  { tag: "Upload",     title: "Add cover thumbnail",    desc: "Upload a high-quality cover image for your eBook listing.",               icon: ImageIcon },
  { tag: "Upload",     title: "Upload the full PDF",    desc: "Submit your complete eBook file in PDF format.",                          icon: FileTextIcon, ai: true },
  { tag: "Verify",     title: "AI verification",        desc: "Our AI scans your eBook for quality and policy compliance.",              icon: ShieldCheckIcon, ai: true },
  { tag: "Live",       title: "Published after 2 days", desc: "After approval your book goes live to all ReadZyro readers.",             icon: CheckCircleIcon },
];

const stats = [
  { num: "12K+",  label: "eBooks Available", accent: false },
  { num: "840+",  label: "Active Authors",   accent: false },
  { num: "4.8★",  label: "Avg Rating",       accent: true  },
  { num: "80%",   label: "Author Revenue",   accent: true  },
];

const trustBadges = [
  { icon: ShieldIcon,      label: "Secure SSL Payment",   color: "blue"  },
  { icon: ZapIcon,         label: "Instant Download",     color: "teal"  },
  { icon: BadgeCheckIcon,  label: "AI Quality Verified",  color: "green" },
  { icon: RefreshCwIcon,   label: "30-Day Refund Policy", color: "amber" },
  { icon: SmartphoneIcon,  label: "Read on Any Device",   color: "blue"  },
] as const;

const commissionPills = [
  { label: "80% Revenue Share", accent: true  },
  { label: "Monthly Payouts",   accent: false },
  { label: "No Listing Fees",   accent: false },
  { label: "Instant Activation",accent: false },
  { label: "Global Audience",   accent: false },
];

const testimonials: Testimonial[] = [
  {
    stars: 5,
    text: "ReadZyro made it incredibly easy to find niche tech books. The in-browser reader is buttery smooth and I love having everything in one place.",
    name: "Arjun Rathore", role: "Software Engineer, Pune",
    initials: "AR", accent: "blue",
  },
  {
    stars: 5,
    text: "I uploaded my finance guide and it was live within 2 days. Already made more than I expected in the first month. The 80% cut is genuinely amazing.",
    name: "Priya Menon", role: "Author & Financial Coach",
    initials: "PM", accent: "teal",
  },
  {
    stars: 4,
    text: "The AI verification caught a formatting issue in my PDF that I'd missed. Super helpful process. Would recommend ReadZyro to any aspiring author.",
    name: "Sahil Khan", role: "Self-published Author, Delhi",
    initials: "SK", accent: "indigo",
  },
];

const faqs: FaqItem[] = [
  { q: "Is it free to create an account on ReadZyro?",          a: "Yes! Creating an account is completely free for both readers and authors. Readers only pay when they purchase an eBook, and authors have no upfront listing fees." },
  { q: "What payment methods are supported?",                    a: "We support all major credit/debit cards, UPI, Net Banking, and popular wallets. All transactions are secured with SSL encryption and processed via trusted payment gateways." },
  { q: "How long does AI verification take for sellers?",        a: "Our AI scans your eBook within a few hours. Once cleared, a human review is done and your book typically goes live within 2 business days of submission." },
  { q: "Can I sell eBooks in regional languages?",               a: "Absolutely! ReadZyro supports eBooks in Hindi, Tamil, Telugu, Kannada, Bengali, and many other languages. We actively encourage multilingual content to serve a broader audience." },
  { q: "What is the refund policy for buyers?",                  a: "We offer a 30-day refund policy. If you're unsatisfied with a purchase for any reason, contact our support team and we'll process the refund within 3–5 business days." },
  { q: "When and how do authors receive their payouts?",         a: "Author payouts happen monthly, directly to your linked bank account or UPI ID. You keep 80% of each sale and can track your earnings in real time from your seller dashboard." },
];

// ─── Float configs ────────────────────────────────────────────────────────────

const leftFloats: FloatItem[] = [
  { type: "book", x: "2%",  y: "6%",  rot: -22, size: 42, delay: 0,   dur: 5.2, color: "#3b82f6", op: 0.25, floatY: -9 },
  { type: "leaf", x: "0%",  y: "24%", rot: 28,  size: 28, delay: 0.7, dur: 6.0, color: "#60a5fa", op: 0.20, floatY:  7 },
  { type: "book", x: "4%",  y: "44%", rot: 15,  size: 34, delay: 1.3, dur: 5.7, color: "#1d4ed8", op: 0.18, floatY: -7 },
  { type: "leaf", x: "1%",  y: "63%", rot: -35, size: 24, delay: 1.9, dur: 6.4, color: "#93c5fd", op: 0.16, floatY:  8 },
  { type: "book", x: "3%",  y: "82%", rot: 20,  size: 38, delay: 0.4, dur: 5.5, color: "#bfdbfe", op: 0.22, floatY: -6 },
];

const rightFloats: FloatItem[] = [
  { type: "leaf", x: "91%", y: "5%",  rot: 18,  size: 34, delay: 0.3, dur: 5.6, color: "#14b8a6", op: 0.25, floatY:  8 },
  { type: "book", x: "93%", y: "23%", rot: -22, size: 30, delay: 1.0, dur: 6.2, color: "#0d9488", op: 0.20, floatY: -9 },
  { type: "leaf", x: "89%", y: "44%", rot: 38,  size: 26, delay: 1.6, dur: 5.9, color: "#2dd4bf", op: 0.18, floatY:  7 },
  { type: "book", x: "92%", y: "63%", rot: -12, size: 40, delay: 0.5, dur: 6.3, color: "#14b8a6", op: 0.22, floatY: -8 },
  { type: "leaf", x: "90%", y: "84%", rot: 25,  size: 28, delay: 2.1, dur: 5.4, color: "#0f766e", op: 0.17, floatY:  6 },
];

// ─── SVG Decoratives ──────────────────────────────────────────────────────────

function FloatBook({ color, opacity, size }: { color: string; opacity: number; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" style={{ opacity }}>
      <rect x="3"  y="2"  width="20" height="32" rx="3" fill={color} />
      <rect x="5"  y="4"  width="16" height="28" rx="2" fill="white" fillOpacity="0.2" />
      <rect x="8"  y="9"  width="10" height="2"  rx="1" fill={color} fillOpacity="0.45" />
      <rect x="8"  y="13" width="8"  height="2"  rx="1" fill={color} fillOpacity="0.45" />
      <rect x="8"  y="17" width="10" height="2"  rx="1" fill={color} fillOpacity="0.45" />
      <rect x="8"  y="21" width="6"  height="2"  rx="1" fill={color} fillOpacity="0.45" />
      <rect x="23" y="2"  width="10" height="32" rx="3" fill={color} fillOpacity="0.55" />
    </svg>
  );
}

function FloatLeaf({ color, opacity, size }: { color: string; opacity: number; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" style={{ opacity }}>
      <path d="M15 26C15 26 3 19 3 10C3 5.03 8.37 1 15 1C21.63 1 27 5.03 27 10C27 19 15 26 15 26Z" fill={color} />
      <line x1="15" y1="26" x2="15" y2="10" stroke="white" strokeWidth="1" strokeOpacity="0.35" strokeLinecap="round" />
      <path d="M15 15C12 13 8 12 5 11"  stroke="white" strokeWidth="0.8" strokeOpacity="0.3" strokeLinecap="round" />
      <path d="M15 19C18 17 22 16 25 15" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" strokeLinecap="round" />
    </svg>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.46, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

type ColProps = { steps: Step[]; type: "buy" | "sell" };

function StepsColumn({ steps, type }: ColProps) {
  const isBuy = type === "buy";

  const dotBg    = isBuy ? "bg-blue-700"    : "bg-teal-700";
  const tagColor = isBuy ? "text-blue-700"  : "text-teal-700";
  const tagBg    = isBuy ? "bg-blue-50"     : "bg-teal-50";
  const lineBg   = isBuy ? "bg-blue-400/40" : "bg-teal-400/40";
  const cardHover= isBuy ? "hover:border-blue-300" : "hover:border-teal-300";
  const accentBar= isBuy ? "bg-blue-600"    : "bg-teal-600";
  const iconBg   = isBuy ? "bg-blue-50"     : "bg-teal-50";
  const iconColor= isBuy ? "text-blue-600"  : "text-teal-700";
  const badgeHeadBg = isBuy ? "bg-blue-100 text-blue-800" : "bg-teal-100 text-teal-800";
  const pulseShadow = isBuy
    ? ["0 0 0 0 rgba(37,99,235,.3)","0 0 0 8px rgba(37,99,235,0)","0 0 0 0 rgba(37,99,235,.3)"]
    : ["0 0 0 0 rgba(15,118,110,.3)","0 0 0 8px rgba(15,118,110,0)","0 0 0 0 rgba(15,118,110,.3)"];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Column header */}
      <div className="flex items-center gap-2.5 pb-3.5 mb-4 border-b border-gray-100">
        <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${badgeHeadBg}`}>
          {isBuy ? <ShoppingCartIcon size={10} /> : <DollarSignIcon size={10} />}
          {isBuy ? "Buy steps" : "Sell steps"}
        </span>
        <span className="text-sm font-medium text-gray-900">
          {isBuy ? "How to buy an eBook" : "How to sell your eBook"}
        </span>
      </div>

      {/* Steps */}
      {steps.map((step, i) => {
        const Icon = step.icon;
        const isLast = i === steps.length - 1;
        return (
          <motion.div key={i} className="flex items-start gap-3" variants={itemVariants}>
            {/* Number + connector */}
            <div className="flex flex-col items-center flex-shrink-0 w-9">
              <motion.div
                className={`w-9 h-9 rounded-full ${dotBg} text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 z-10`}
                animate={{ boxShadow: pulseShadow }}
                transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.35 }}
              >
                {i + 1}
              </motion.div>
              {!isLast && (
                <motion.div
                  className={`w-px flex-1 min-h-[18px] my-1 rounded-full ${lineBg}`}
                  initial={{ scaleY: 0, originY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                />
              )}
            </div>

            {/* Card */}
            <motion.div
              className={`flex-1 bg-white border border-gray-100 rounded-xl px-4 py-3 mb-3.5 relative overflow-hidden cursor-pointer ${cardHover} transition-colors duration-200`}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
            >
              {/* Accent bar on hover */}
              <motion.div
                className={`absolute left-0 top-0 bottom-0 w-[3px] ${accentBar}`}
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.16 }}
                style={{ originY: 0, borderRadius: "0 2px 2px 0" }}
              />

              <span className={`block text-[9px] font-semibold uppercase tracking-widest ${tagColor} ${tagBg} w-fit px-1.5 py-0.5 rounded mb-1.5`}>
                {step.tag}
              </span>
              <p className="text-[13px] font-medium text-gray-900 mb-0.5 leading-snug pr-9">{step.title}</p>
              <p className="text-[11.5px] text-gray-500 leading-relaxed pr-9">{step.desc}</p>

              {step.ai && (
                <span className="inline-flex items-center gap-1 text-[9.5px] font-medium text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full mt-1.5">
                  <ShieldCheckIcon size={9} />
                  AI verified
                </span>
              )}

              {/* Icon */}
              <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 ${iconBg} rounded-lg flex items-center justify-center`}>
                <Icon size={13} className={iconColor} />
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────

function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-100 bg-white">
      {stats.map((s, i) => (
        <motion.div
          key={i}
          className="py-5 px-4 text-center border-r border-gray-100 last:border-r-0 hover:bg-blue-50/40 transition-colors duration-200"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
        >
          <div className={`text-2xl font-bold leading-none mb-1 ${s.accent ? "text-teal-700" : "text-blue-700"}`}
               style={{ fontFamily: "'Playfair Display', serif" }}>
            {s.num}
          </div>
          <div className="text-[10.5px] text-gray-400 font-medium uppercase tracking-wide">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Trust Badges ─────────────────────────────────────────────────────────────

const trustIconBg: Record<string, string> = {
  blue:  "bg-blue-50 text-blue-600",
  teal:  "bg-teal-50 text-teal-600",
  green: "bg-green-50 text-green-600",
  amber: "bg-amber-50 text-amber-600",
};

function TrustStrip() {
  return (
    <div className="border-b border-gray-100 py-3 px-6"
         style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f0fdfa 100%)" }}>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {trustBadges.map(({ icon: Icon, label, color }, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-1.5 text-[11.5px] font-medium text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${trustIconBg[color]}`}>
              <Icon size={10} />
            </div>
            {label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Commission Banner ────────────────────────────────────────────────────────

function CommissionBanner() {
  return (
    <div className="py-8 px-6 text-center text-white"
         style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #0d9488 100%)" }}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Authors keep 80% of every sale
        </h3>
        <p className="text-sm opacity-80 mb-5">No hidden fees. No upfront costs. Get paid directly to your account every month.</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {commissionPills.map((p, i) => (
            <span
              key={i}
              className={`text-xs font-medium px-4 py-1.5 rounded-full border ${
                p.accent
                  ? "bg-white text-blue-700 border-white"
                  : "bg-white/15 text-white border-white/30"
              }`}
            >
              {p.label}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const avatarBg: Record<Testimonial["accent"], string> = {
  blue:   "from-blue-400 to-blue-700",
  teal:   "from-teal-400 to-teal-700",
  indigo: "from-indigo-400 to-indigo-700",
};

const cardAccent: Record<Testimonial["accent"], string> = {
  blue:   "bg-blue-50 border-blue-100",
  teal:   "bg-teal-50 border-teal-100",
  indigo: "bg-indigo-50 border-indigo-100",
};

function Testimonials() {
  return (
    <div className="bg-white border-b border-gray-100 py-12 px-6">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2">What People Say</p>
        <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
          Loved by readers & authors
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={`rounded-2xl border p-5 ${cardAccent[t.accent]}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, s) => (
                <StarIcon
                  key={s}
                  size={12}
                  className={s < t.stars ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}
                />
              ))}
            </div>
            <p className="text-[12.5px] text-gray-600 leading-relaxed italic mb-4">"{t.text}"</p>
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${avatarBg[t.accent]} flex items-center justify-center text-white text-[11px] font-semibold flex-shrink-0`}>
                {t.initials}
              </div>
              <div>
                <p className="text-[12px] font-semibold text-gray-900">{t.name}</p>
                <p className="text-[10.5px] text-gray-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-gray-50/60 border-b border-gray-100 py-12 px-6">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2">Got Questions?</p>
        <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
          Frequently Asked Questions
        </h3>
      </motion.div>

      <div className="max-w-2xl mx-auto divide-y divide-gray-100">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between py-4 text-left gap-4 group"
            >
              <span className={`text-[13.5px] font-medium transition-colors duration-200 ${open === i ? "text-blue-700" : "text-gray-800 group-hover:text-blue-700"}`}>
                {faq.q}
              </span>
              <motion.div
                className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${open === i ? "bg-blue-100" : "bg-gray-100"}`}
                animate={{ rotate: open === i ? 180 : 0 }}
                transition={{ duration: 0.22 }}
              >
                <ChevronDownIcon size={12} className={open === i ? "text-blue-700" : "text-gray-500"} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-[12.5px] text-gray-500 leading-relaxed pb-4">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── CTA Bottom ───────────────────────────────────────────────────────────────

function CTABottom() {
  return (
    <div className="bg-white py-12 px-6 text-center border-b border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Ready to get started?
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          Join thousands of readers and authors already on ReadZyro. It only takes a minute.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <motion.button
            className="inline-flex items-center gap-2 bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors duration-200"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            📚 Start Reading
            <ArrowRightIcon size={14} />
          </motion.button>
          <motion.button
            className="inline-flex items-center gap-2 border-2 border-teal-600 text-teal-700 text-sm font-medium px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors duration-200"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            ✍️ Become an Author
            <ArrowRightIcon size={14} />
          </motion.button>
        </div>
        <p className="text-[11px] text-gray-400 mt-4">
          No credit card required to sign up &nbsp;·&nbsp; Free forever for readers
        </p>
      </motion.div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function BuySellSteps() {
  return (
    <section className="w-full relative overflow-hidden">

      {/* Top gradient border */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-20 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #3b82f6 0%, #1d4ed8 20%, #6366f1 40%, #0d9488 60%, #14b8a6 80%, #3b82f6 100%)" }}
      />

      {/* ── Hero ── */}
      <div className="relative bg-white border-b border-gray-100 overflow-hidden">
        {/* dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.09) 1px, transparent 1px)", backgroundSize: "26px 26px" }}
        />
        <motion.div
          className="relative z-10 text-center px-6 pt-14 pb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
            ReadZyro Platform
          </span>
          <h2
            className="text-4xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How ReadZyro Works
          </h2>
          <p className="text-[15px] text-gray-500 max-w-lg mx-auto leading-relaxed">
            Your all-in-one destination for buying and selling digital knowledge. Whether you're a curious reader or an expert author — we've got you covered.
          </p>
        </motion.div>
      </div>

      {/* ── Stats ── */}
      <StatsBar />

      {/* ── Trust Badges ── */}
      <TrustStrip />

      {/* ── Steps ── */}
      <div className="relative bg-white border-b border-gray-100 overflow-hidden">
        {/* left gradient wash */}
        <div className="absolute left-0 top-0 bottom-0 w-44 pointer-events-none z-0"
             style={{ background: "linear-gradient(to right, rgba(219,234,254,0.55) 0%, transparent 100%)" }} />
        {/* right gradient wash */}
        <div className="absolute right-0 top-0 bottom-0 w-44 pointer-events-none z-0"
             style={{ background: "linear-gradient(to left, rgba(204,251,241,0.55) 0%, transparent 100%)" }} />
        {/* dot grid */}
        <div className="absolute inset-0 pointer-events-none z-0"
             style={{ backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.08) 1px, transparent 1px)", backgroundSize: "26px 26px" }} />

        {/* Floating left */}
        {leftFloats.map((f, i) => (
          <motion.div
            key={`lf-${i}`}
            className="absolute pointer-events-none select-none z-[1]"
            style={{ left: f.x, top: f.y }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: f.delay, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [0, f.floatY, 0], rotate: [f.rot, f.rot + 5, f.rot - 3, f.rot] }}
              transition={{ duration: f.dur, repeat: Infinity, ease: "easeInOut", delay: f.delay * 0.5 }}
            >
              {f.type === "book"
                ? <FloatBook color={f.color} opacity={f.op} size={f.size} />
                : <FloatLeaf color={f.color} opacity={f.op} size={f.size} />}
            </motion.div>
          </motion.div>
        ))}

        {/* Floating right */}
        {rightFloats.map((f, i) => (
          <motion.div
            key={`rf-${i}`}
            className="absolute pointer-events-none select-none z-[1]"
            style={{ left: f.x, top: f.y }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: f.delay, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [0, f.floatY, 0], rotate: [f.rot, f.rot - 5, f.rot + 4, f.rot] }}
              transition={{ duration: f.dur, repeat: Infinity, ease: "easeInOut", delay: f.delay * 0.5 }}
            >
              {f.type === "book"
                ? <FloatBook color={f.color} opacity={f.op} size={f.size} />
                : <FloatLeaf color={f.color} opacity={f.op} size={f.size} />}
            </motion.div>
          </motion.div>
        ))}

        {/* Steps grid */}
        <div className="relative z-10 px-6 md:px-16 lg:px-24 py-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-8 md:gap-12 max-w-4xl mx-auto">
            <StepsColumn steps={buySteps} type="buy" />
            <div className="hidden md:block bg-gray-100" />
            <StepsColumn steps={sellSteps} type="sell" />
          </div>
        </div>
      </div>

      {/* ── Commission Banner ── */}
      <CommissionBanner />

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── CTA ── */}
      <CTABottom />

      {/* ── Footer Strip ── */}
   

    </section>
  );
}