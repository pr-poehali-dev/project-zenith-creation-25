import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <div
      id="contact"
      className="relative h-[500px] sm:h-[650px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] sm:h-[calc(100vh+650px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[500px] sm:h-[650px] lg:h-[800px] sticky top-[calc(100vh-500px)] sm:top-[calc(100vh-650px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-slate-950 border-t border-blue-500/20 py-6 sm:py-8 lg:py-10 px-6 sm:px-8 h-full w-full flex flex-col justify-between">
            <div className="flex flex-col md:flex-row md:justify-between gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-slate-400 text-xs tracking-widest">Решение</h3>
                <a href="#risks" className="text-slate-300 hover:text-white transition-colors duration-300 text-sm">Анализ рисков</a>
                <a href="#control" className="text-slate-300 hover:text-white transition-colors duration-300 text-sm">Система контроля</a>
                <a href="#economics" className="text-slate-300 hover:text-white transition-colors duration-300 text-sm">Экономика и окупаемость</a>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-slate-400 text-xs tracking-widest">Контакты</h3>
                <a href="https://bgtm.ru" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2">
                  <Icon name="Globe" size={14} />
                  bgtm.ru
                </a>
                <a href="tel:+78127791070" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2">
                  <Icon name="Phone" size={14} />
                  8 (812) 779 10 70
                </a>
                <a href="mailto:project@telecom-master.ru" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  project@telecom-master.ru
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-slate-400 text-xs tracking-widest">Следующий шаг</h3>
                <p className="text-slate-400 text-sm max-w-xs leading-relaxed mb-4">
                  Пилотный проект за 1 месяц. Автоматизация 10 корпусов за 4–6 месяцев под ключ.
                </p>
                <a
                  href="mailto:project@telecom-master.ru"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 text-sm uppercase tracking-wide font-semibold transition-colors duration-300 w-fit"
                >
                  <Icon name="Send" size={16} />
                  Запросить КП
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <h1 className="text-[16vw] sm:text-[14vw] lg:text-[12vw] leading-[0.8] text-white font-bold tracking-tight opacity-20 select-none">
                BIOGUARD
              </h1>
              <p className="text-slate-500 text-xs">© {new Date().getFullYear()} Телеком-Мастер. Все права защищены.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
