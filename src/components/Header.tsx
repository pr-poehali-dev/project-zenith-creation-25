interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-50 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-white font-bold text-lg tracking-wide">
          <span className="text-blue-400">BIO</span>GUARD
        </div>
        <nav className="flex gap-6 md:gap-8">
          <a href="#risks" className="text-white hover:text-blue-400 transition-colors duration-300 uppercase text-xs tracking-wide hidden md:block">Риски</a>
          <a href="#control" className="text-white hover:text-blue-400 transition-colors duration-300 uppercase text-xs tracking-wide hidden md:block">Контроль</a>
          <a href="#economics" className="text-white hover:text-blue-400 transition-colors duration-300 uppercase text-xs tracking-wide hidden md:block">Экономика</a>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 text-xs uppercase tracking-wide transition-colors duration-300"
          >
            Связаться
          </a>
        </nav>
      </div>
    </header>
  );
}
