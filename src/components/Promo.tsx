import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Icon from "@/components/ui/icon";

const aiFeatures = [
  { icon: "Flame", label: "Детекция возгораний", desc: "ИИ распознаёт очаг до срабатывания датчика" },
  { icon: "UserX", label: "Контроль персонала", desc: "Сигнал если сотрудник отсутствует >15 минут" },
  { icon: "Egg", label: "Подсчёт яиц", desc: "Нейроаналитика считает яйца без участия человека" },
  { icon: "Fuel", label: "Запрет заправки авто", desc: "ИИ фиксирует нарушение на личном транспорте" },
  { icon: "Shield", label: "Охрана СЗЗ", desc: "Видеоконтроль санитарно-защитной зоны 24/7" },
  { icon: "Eye", label: "Видеоаналитика", desc: "Запись с таймкодом и архив инцидентов" },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <>
      {/* Promo — ИИ-помощники с параллаксом */}
      <div
        ref={container}
        className="relative flex items-center justify-center h-screen overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <img
              src="/images/spiral-circles.jpg"
              alt="ИИ аналитика"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/75" />
          </motion.div>
        </div>

        <h3 className="absolute top-12 right-6 text-blue-400 uppercase z-10 text-sm md:text-base tracking-widest">
          Уровень 3 — ИИ-аналитика
        </h3>

        <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-xs sm:max-w-md md:max-w-lg z-10 text-right">
          Искусственный интеллект видит то, что не замечает человек — и реагирует за секунды.
        </p>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto px-6">
          {aiFeatures.map((f) => (
            <div key={f.label} className="bg-slate-900/80 border border-slate-700/60 backdrop-blur-sm rounded-sm p-5">
              <Icon name={f.icon} size={24} className="text-blue-400 mb-3" />
              <div className="text-white font-semibold text-sm mb-1">{f.label}</div>
              <div className="text-slate-400 text-xs leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Экономика */}
      <section id="economics" className="bg-slate-950 px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest text-green-400 mb-4">Окупаемость</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Инвестиции 38,5 млн —<br />
              <span className="text-green-400">возврат за 3,5 месяца</span>
            </h2>
          </div>

          {/* Таблица экономии */}
          <div className="bg-slate-900 border border-slate-800 rounded-sm overflow-hidden mb-10">
            <div className="grid grid-cols-3 bg-slate-800 px-6 py-3 text-xs uppercase tracking-widest text-slate-400">
              <div>Статья экономии</div>
              <div className="text-center">Тип</div>
              <div className="text-right">Сумма, млн руб./год</div>
            </div>
            {[
              { item: "Предотвращение карантина и потерь поголовья", type: "Защита", val: "115,0" },
              { item: "Сокращение потерь продукции (яйцо, бройлер)", type: "Экономия", val: "30,0" },
              { item: "Оптимизация энергопотребления", type: "Экономия", val: "18,0" },
              { item: "Снижение расходов на охрану (ручной труд)", type: "Экономия", val: "12,6" },
              { item: "Рост прозрачности для ветнадзора", type: "Выгода", val: "31,0" },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 px-6 py-4 border-t border-slate-800 ${i % 2 === 0 ? "bg-slate-900" : "bg-slate-950"}`}>
                <div className="text-slate-300 text-sm">{row.item}</div>
                <div className="text-center">
                  <span className={`text-xs px-2 py-1 rounded-sm ${row.type === "Защита" ? "bg-orange-500/20 text-orange-400" : row.type === "Выгода" ? "bg-blue-500/20 text-blue-400" : "bg-green-500/20 text-green-400"}`}>
                    {row.type}
                  </span>
                </div>
                <div className="text-right text-green-400 font-mono font-bold">{row.val}</div>
              </div>
            ))}
            <div className="grid grid-cols-3 px-6 py-4 border-t border-blue-500/40 bg-blue-500/10">
              <div className="text-white font-bold">ИТОГО экономия</div>
              <div />
              <div className="text-right text-green-400 font-mono font-bold text-lg">206,6</div>
            </div>
          </div>

          {/* Ключевые показатели */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-900 border border-slate-800 rounded-sm p-8 text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">38,5</div>
              <div className="text-slate-400 text-sm">млн руб. инвестиций</div>
            </div>
            <div className="bg-slate-900 border border-green-500/40 rounded-sm p-8 text-center ring-1 ring-green-500/20">
              <div className="text-5xl font-bold text-green-400 mb-2">3,5</div>
              <div className="text-slate-400 text-sm">месяца — срок окупаемости</div>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-sm p-8 text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">206,6</div>
              <div className="text-slate-400 text-sm">млн руб. экономии в год</div>
            </div>
          </div>

          {/* Стоимость по блокам */}
          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-widest text-slate-400 mb-8">Из чего складывается стоимость</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "СКУД", price: "8–10 млн", icon: "KeyRound" },
                { label: "Нейроаналитика + видео", price: "8–10 млн", icon: "Brain" },
                { label: "Микроклимат", price: "6–8 млн", icon: "Thermometer" },
                { label: "ИИ-помощники", price: "3–4 млн", icon: "Bot" },
                { label: "Диспетчерская", price: "3–5 млн", icon: "Monitor" },
                { label: "Проектирование", price: "0,5–1,5 млн", icon: "FileText" },
              ].map((b) => (
                <div key={b.label} className="bg-slate-900 border border-slate-800 rounded-sm p-5 flex flex-col items-center text-center gap-3">
                  <Icon name={b.icon} size={24} className="text-blue-400" />
                  <div className="text-slate-300 text-sm font-medium">{b.label}</div>
                  <div className="text-green-400 font-mono font-bold text-sm">{b.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-900 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-blue-400 mb-4">Частые вопросы</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">FAQ</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Можно ли протестировать решение?", a: "Да. Пилотный проект запускается за 1 месяц и стоит от 1 до 5 млн руб. По итогам вы получаете полные данные для принятия решения." },
              { q: "Можно ли использовать своё оборудование?", a: "Да, при наличии открытого API. Наши специалисты проводят совместимость на этапе проектирования." },
              { q: "Работает ли система на нескольких площадках?", a: "Да. Система масштабируется на любое количество объектов. Единая диспетчерская позволяет управлять всеми площадками из одной точки." },
              { q: "Сколько времени занимает внедрение?", a: "Автоматизация 10 корпусов занимает 4–6 месяцев под ключ, включая проектирование и обучение персонала." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-sm p-6">
                <div className="flex items-start gap-4">
                  <Icon name="CircleHelp" size={20} className="text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-semibold mb-2">{item.q}</div>
                    <div className="text-slate-400 text-sm leading-relaxed">{item.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
