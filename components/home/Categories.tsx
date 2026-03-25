import Link from "next/link";
import {
  BookOpen, BriefcaseBusinessIcon, Calendar1Icon, FlaskConical,
  Gift, Lightbulb, Megaphone, PenTool, School, SquareActivity, TimerIcon
} from "lucide-react";

const categories = [
  { href: "/books", label: "All Books", icon: <BookOpen size={16} />, active: true },
  { href: "/books", label: "Business", icon: <BriefcaseBusinessIcon size={16} /> },
  { href: "/books", label: "Technology", icon: <Calendar1Icon size={16} /> },
  { href: "/books", label: "Self Help", icon: <Lightbulb size={16} /> },
  { href: "/books", label: "Finance", icon: <TimerIcon size={16} /> },
  { href: "/books", label: "Marketing", icon: <Megaphone size={16} /> },
  { href: "/books", label: "Fiction", icon: <Gift size={16} /> },
  { href: "/books", label: "Design", icon: <PenTool size={16} /> },
  { href: "/books", label: "Health", icon: <SquareActivity size={16} /> },
  { href: "/books", label: "Science", icon: <FlaskConical size={16} /> },
  { href: "/books", label: "Education", icon: <School size={16} /> },
];

export default function Categories() {
  return (
    <aside className="w-full md:w-[220px] md:shrink-0 md:flex-col md:gap-4 md:border-r md:border-gray-100 md:pr-4 md:py-2 flex flex-col">

      {/* ── MOBILE: horizontal scroll row ── */}
      <div className="flex md:hidden flex-col gap-3">
        {/* Scrollable category chips */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 px-1">
          {categories.map(({ href, label, icon, active }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-200
                                ${active
                  ? "bg-blue-700 text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              <span>{icon}</span>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile price filter — inline compact */}
        <div className="flex items-center gap-3 px-1 py-2 border border-gray-100 rounded-xl bg-gray-50">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider shrink-0">Price</span>
          <input
            type="range"
            min="0"
            max="5000"
            className="flex-1 accent-blue-700 cursor-pointer"
          />
          <Link
            href="/filter"
            className="shrink-0 text-xs font-semibold bg-blue-700 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg transition-colors duration-200"
          >
            Filter
          </Link>
        </div>
      </div>

      {/* ── DESKTOP: vertical sidebar ── */}
      <div className="hidden md:flex flex-col gap-4">
        {/* Category list */}
        <div className="flex flex-col gap-1">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest px-2 mb-1">
            Categories
          </h2>
          {categories.map(({ href, label, icon, active }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200
                                ${active
                  ? "bg-blue-50 text-blue-700 shadow-sm"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
            >
              <span className={active ? "text-blue-600" : "text-gray-400"}>
                {icon}
              </span>
              {label}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100" />

        {/* Price filter */}
        <div className="flex flex-col gap-3 px-1">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
            Price Range
          </h2>
          <input
            type="range"
            min="0"
            max="5000"
            className="w-full accent-blue-700 cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 font-medium">
            <span>₹0</span>
            <span>₹5,000+</span>
          </div>
          <Link
            href="/filter"
            className="w-full text-center text-sm font-semibold bg-blue-700 hover:bg-blue-600 text-white py-2 rounded-xl transition-colors duration-200"
          >
            Apply Filter
          </Link>
        </div>
      </div>
    </aside>
  );
}