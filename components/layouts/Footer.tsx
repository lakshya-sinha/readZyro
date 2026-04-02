export default function Component() {
  return (
    <>
           <div className="bg-gray-900 py-4 px-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
        <span className="text-[11px] text-gray-500">© 2025 ReadZyro</span>
        {["Privacy Policy", "Terms of Service", "Contact Support", "Author Guidelines"].map((l) => (
          <a key={l} href="#" className="text-[11px] text-gray-500 hover:text-gray-200 transition-colors duration-150">{l}</a>
        ))}
      </div>
    </>
  );
}