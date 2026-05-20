import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/56f8c47c-5852-40b3-a800-510f1bac2a4c/files/443cc9ae-764e-484c-ab40-8daf1f9e771b.jpg"
          alt="Птицефабрика с воздуха"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/90" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs uppercase tracking-widest px-4 py-2 mb-8">
          ⚠ Реальный кейс: ООО «Фирма» — птицефабрика, 190 млн яиц/год
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          <span className="text-white">ОДИН КАРАНТИН</span>
          <br />
          <span className="text-orange-400">= 250 МЛН РУБ.</span>
          <br />
          <span className="text-blue-400">УБЫТКА</span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-slate-300 leading-relaxed">
          Эпизоотия выкосила 900 тыс. голов за один сезон. Причина — человеческий фактор и отсутствие автоматизации. Мы решили эту проблему.
        </p>

        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-10">
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-orange-400">900 тыс.</div>
            <div className="text-xs md:text-sm text-slate-400 mt-1">голов потеряно</div>
          </div>
          <div className="text-center border-x border-slate-700">
            <div className="text-2xl md:text-4xl font-bold text-blue-400">1,3 млрд</div>
            <div className="text-xs md:text-sm text-slate-400 mt-1">руб. под угрозой</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-green-400">0,33 года</div>
            <div className="text-xs md:text-sm text-slate-400 mt-1">окупаемость</div>
          </div>
        </div>

        <a
          href="#control"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 uppercase tracking-wide text-sm font-semibold transition-colors duration-300"
        >
          Посмотреть решение
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 z-10">
        <span className="text-xs uppercase tracking-widest">Листай вниз</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent" />
      </div>
    </div>
  );
}