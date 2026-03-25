"use client";

import { motion } from "motion/react";
import {
  UserIcon, LockIcon, SearchIcon, ShoppingCartIcon,
  HomeIcon, DownloadIcon, PlusIcon, ImageIcon,
  FileTextIcon, ShieldCheckIcon, CheckCircleIcon, DollarSignIcon,
} from "lucide-react";

type Step = {
  tag: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  ai?: boolean;
};

const buySteps: Step[] = [
  { tag: "Start here", title: "Create your account", desc: "Sign up with email. Takes under a minute, free to register.", icon: UserIcon },
  { tag: "Access", title: "Log in to your account", desc: "Enter your credentials and jump straight into the library.", icon: LockIcon },
  { tag: "Explore", title: "Browse & pick an eBook", desc: "Search thousands of titles. Filter by topic, author, or rating.", icon: SearchIcon },
  { tag: "Purchase", title: 'Click "Buy" & checkout', desc: "Secure payment, instant order confirmation, no waiting.", icon: ShoppingCartIcon },
  { tag: "Your library", title: "Visit your profile", desc: "All purchased books live in your profile, always available.", icon: HomeIcon },
  { tag: "Enjoy", title: "Read or download", desc: 'Hit "Read" for in-browser, or "Download" to keep the file.', icon: DownloadIcon },
];

const sellSteps: Step[] = [
  { tag: "Start here", title: "Create your account", desc: "Register as an author — same quick sign-up, no fees upfront.", icon: UserIcon },
  { tag: "Access", title: "Log in to your account", desc: "Sign in and head to your seller dashboard.", icon: LockIcon },
  { tag: "List", title: 'Click "Start Selling"', desc: "Hit the sell button and open the book submission form.", icon: PlusIcon },
  { tag: "Upload", title: "Add cover thumbnail", desc: "Upload a high-quality cover image for your eBook listing.", icon: ImageIcon },
  { tag: "Upload", title: "Upload the full PDF", desc: "Submit your complete eBook file in PDF format.", icon: FileTextIcon, ai: true },
  { tag: "Verify", title: "AI verification", desc: "Our AI scans your eBook for quality and policy compliance.", icon: ShieldCheckIcon, ai: true },
  { tag: "Live", title: "Published after 2 days", desc: "After approval your book goes live to all ReadZyro readers.", icon: CheckCircleIcon },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Decorative floating book SVG ─── */
function FloatBook({ color, opacity, size }: { color: string; opacity: number; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" style={{ opacity }}>
      <rect x="3" y="2" width="20" height="32" rx="3" fill={color} />
      <rect x="5" y="4" width="16" height="28" rx="2" fill="white" fillOpacity="0.2" />
      <rect x="8" y="9" width="10" height="2" rx="1" fill={color} fillOpacity="0.45" />
      <rect x="8" y="13" width="8" height="2" rx="1" fill={color} fillOpacity="0.45" />
      <rect x="8" y="17" width="10" height="2" rx="1" fill={color} fillOpacity="0.45" />
      <rect x="8" y="21" width="6" height="2" rx="1" fill={color} fillOpacity="0.45" />
      <rect x="23" y="2" width="10" height="32" rx="3" fill={color} fillOpacity="0.55" />
    </svg>
  );
}

/* ─── Decorative floating leaf SVG ─── */
function FloatLeaf({ color, opacity, size }: { color: string; opacity: number; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" style={{ opacity }}>
      <path d="M15 26C15 26 3 19 3 10C3 5.03 8.37 1 15 1C21.63 1 27 5.03 27 10C27 19 15 26 15 26Z" fill={color} />
      <line x1="15" y1="26" x2="15" y2="10" stroke="white" strokeWidth="1" strokeOpacity="0.35" strokeLinecap="round" />
      <path d="M15 15C12 13 8 12 5 11" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" strokeLinecap="round" />
      <path d="M15 19C18 17 22 16 25 15" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Float configs ─── */
type FloatItem = {
  type: "book" | "leaf";
  x: string; y: string;
  rot: number; size: number;
  delay: number; dur: number;
  color: string; op: number;
  floatY: number;
};

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

/* ─── Column ─── */
type ColProps = { steps: Step[]; type: "buy" | "sell" };

function StepsColumn({ steps, type }: ColProps) {
  const isBuy = type === "buy";
  const dotBg       = isBuy ? "bg-blue-700"              : "bg-teal-700";
  const tagColor    = isBuy ? "text-blue-700"             : "text-teal-700";
  const tagBg       = isBuy ? "bg-blue-50"                : "bg-teal-50";
  const lineBg      = isBuy ? "bg-blue-400/40"            : "bg-teal-400/40";
  const cardHover   = isBuy ? "hover:border-blue-400"     : "hover:border-teal-400";
  const accentBar   = isBuy ? "bg-blue-600"               : "bg-teal-600";
  const iconBg      = isBuy ? "bg-blue-50"                : "bg-teal-50";
  const iconColor   = isBuy ? "text-blue-600"             : "text-teal-700";
  const badgeHeadBg = isBuy ? "bg-blue-100 text-blue-800" : "bg-teal-100 text-teal-800";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex items-center gap-2.5 mb-5 pb-3.5 border-b border-gray-100">
        <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full ${badgeHeadBg}`}>
          {isBuy ? <ShoppingCartIcon size={10} /> : <DollarSignIcon size={10} />}
          {isBuy ? "Buy steps" : "Sell steps"}
        </span>
        <span className="text-sm font-medium text-gray-900">
          {isBuy ? "How to buy an eBook" : "How to sell your eBook"}
        </span>
      </div>

      {steps.map((step, i) => {
        const Icon = step.icon;
        const isLast = i === steps.length - 1;
        return (
          <motion.div key={i} className="flex items-start gap-3.5" variants={itemVariants}>
            <div className="flex flex-col items-center flex-shrink-0 w-9">
              <motion.div
                className={`w-9 h-9 rounded-full ${dotBg} text-white text-xs font-medium flex items-center justify-center flex-shrink-0 z-10`}
                animate={{
                  boxShadow: isBuy
                    ? ["0 0 0 0 rgba(37,99,235,.3)","0 0 0 8px rgba(37,99,235,0)","0 0 0 0 rgba(37,99,235,.3)"]
                    : ["0 0 0 0 rgba(15,118,110,.3)","0 0 0 8px rgba(15,118,110,0)","0 0 0 0 rgba(15,118,110,.3)"],
                }}
                transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.35 }}
              >
                {i + 1}
              </motion.div>
              {!isLast && (
                <motion.div
                  className={`w-px flex-1 min-h-5 my-0.5 rounded-full ${lineBg}`}
                  initial={{ scaleY: 0, originY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                />
              )}
            </div>

            <motion.div
              className={`flex-1 bg-white border border-gray-100 rounded-xl px-4 py-3 mb-3.5 relative overflow-hidden cursor-pointer ${cardHover} transition-colors duration-200`}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
            >
              <motion.div
                className={`absolute left-0 top-0 bottom-0 w-0.5 ${accentBar}`}
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.18 }}
                style={{ originY: 0, borderRadius: "0 2px 2px 0" }}
              />
              <span className={`block text-[10px] font-medium uppercase tracking-wider ${tagColor} ${tagBg} w-fit px-1.5 py-0.5 rounded mb-1`}>
                {step.tag}
              </span>
              <p className="text-sm font-medium text-gray-900 mb-0.5 leading-snug pr-10">{step.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed pr-10">{step.desc}</p>
              {step.ai && (
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full mt-1.5">
                  <ShieldCheckIcon size={9} />
                  AI verified
                </span>
              )}
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

/* ─── Main export ─── */
export default function BuySellSteps() {
  return (
    <section className="w-full relative overflow-hidden border-b border-gray-100">

      {/* ── Top gradient border ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-20"
        style={{
          background:
            "linear-gradient(90deg, #3b82f6 0%, #1d4ed8 20%, #6366f1 40%, #0d9488 60%, #14b8a6 80%, #3b82f6 100%)",
        }}
      />

      {/* ── Left blue gradient wash ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-52 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to right, rgba(219,234,254,0.6) 0%, rgba(219,234,254,0.22) 55%, transparent 100%)",
        }}
      />

      {/* ── Right teal gradient wash ── */}
      <div
        className="absolute right-0 top-0 bottom-0 w-52 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to left, rgba(204,251,241,0.6) 0%, rgba(204,251,241,0.22) 55%, transparent 100%)",
        }}
      />

      {/* ── Subtle dot-grid ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(148,163,184,0.10) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* ── Floating LEFT items ── */}
      {leftFloats.map((f, i) => (
        <motion.div
          key={`lf-${i}`}
          className="absolute pointer-events-none select-none z-[1]"
          style={{ left: f.x, top: f.y, rotate: f.rot }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: f.delay, ease: "easeOut" }}
          animate={{ y: [0, f.floatY, 0], rotate: [f.rot, f.rot + 5, f.rot - 3, f.rot] }}
          // motion `animate` loops — override transition just for the float:
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

      {/* ── Floating RIGHT items ── */}
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

      {/* ── Main content ── */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 py-5">
        <motion.div
          className="text-center mb-10 pt-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">How ReadZyro works</h2>
          <p className="text-gray-500 text-base">
            Follow the steps below — whether you&apos;re here to read or to sell your knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-4xl mx-auto pb-8">
          <StepsColumn steps={buySteps} type="buy" />
          <div className="hidden md:block w-px bg-gray-100 mx-auto" />
          <StepsColumn steps={sellSteps} type="sell" />
        </div>
      </div>
    </section>
  );
}