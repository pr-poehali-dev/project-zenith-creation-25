import Icon from "@/components/ui/icon";

const risks = [
  {
    icon: "AlertTriangle",
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/30",
    title: "Вспышки болезней",
    desc: "Без автоматического мониторинга очаг заражения обнаруживают слишком поздно. Карантин до 12 месяцев.",
  },
  {
    icon: "ShieldX",
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/30",
    title: "Нарушение дезинфекции",
    desc: "60 сотрудников — 60 точек риска. Ручной контроль дезбарьеров не работает в промышленных масштабах.",
  },
  {
    icon: "WifiOff",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/30",
    title: "Нет автоматического контроля",
    desc: "Аварии оборудования без оповещений. Данные по микроклимату — только на бумаге. Реакция с опозданием.",
  },
];

const controls = [
  { icon: "Car", label: "Распознавание номеров авто на въезде" },
  { icon: "Droplets", label: "Дезинфекционный барьер с контролем прохода" },
  { icon: "ShirtIcon", label: "Контроль спецодежды и алкотест" },
  { icon: "Thermometer", label: "Температурный скрининг персонала" },
  { icon: "TrafficCone", label: "Светофорная система для диспетчера" },
  { icon: "MapPin", label: "Разграничение чистых и грязных зон" },
];

export default function Featured() {
  return (
    <div id="risks" className="bg-slate-950">
      {/* Риски */}
      <section className="px-6 py-20 md:py-28 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-blue-400 mb-4">Почему это происходит</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Три причины, по которым<br />
            <span className="text-orange-400">птицефабрики теряют поголовье</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {risks.map((r) => (
            <div key={r.title} className={`border rounded-sm p-8 ${r.bg}`}>
              <Icon name={r.icon} size={36} className={`${r.color} mb-4`} />
              <h3 className="text-white font-bold text-lg mb-3">{r.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Въездная группа */}
      <section id="control" className="flex flex-col lg:flex-row lg:items-stretch min-h-screen">
        <div className="flex-1 bg-slate-900 px-8 md:px-16 py-20 flex flex-col justify-center">
          <div className="text-xs uppercase tracking-widest text-blue-400 mb-4">Уровень 1</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Въездная группа<br />
            <span className="text-blue-400">под полным контролем</span>
          </h2>
          <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-lg">
            Каждый человек, автомобиль и предмет проходят обязательный контроль. Светофорная система мгновенно сигнализирует диспетчеру о нарушениях.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {controls.map((c) => (
              <div key={c.label} className="flex items-center gap-3 text-slate-300 text-sm">
                <Icon name={c.icon} size={18} className="text-blue-400 shrink-0" />
                <span>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 relative min-h-[400px] lg:min-h-0">
          <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-500/20 border border-green-500/40 rounded-sm p-6 text-center">
                  <Icon name="CheckCircle" size={32} className="text-green-400 mx-auto mb-2" />
                  <div className="text-green-400 font-bold text-sm uppercase tracking-wide">ЧИСТАЯ ЗОНА</div>
                  <div className="text-slate-400 text-xs mt-1">Корпуса, кормоцех</div>
                </div>
                <div className="bg-red-500/20 border border-red-500/40 rounded-sm p-6 text-center">
                  <Icon name="XCircle" size={32} className="text-red-400 mx-auto mb-2" />
                  <div className="text-red-400 font-bold text-sm uppercase tracking-wide">ГРЯЗНАЯ ЗОНА</div>
                  <div className="text-slate-400 text-xs mt-1">Въезд, санпропускник</div>
                </div>
              </div>
              <div className="bg-blue-500/20 border border-blue-500/40 rounded-sm p-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse" />
                  <div className="w-4 h-4 rounded-full bg-yellow-500" />
                  <div className="w-4 h-4 rounded-full bg-green-500" />
                </div>
                <div className="text-blue-300 font-semibold text-sm">Светофорная система</div>
                <div className="text-slate-400 text-xs mt-1">Диспетчер видит всё в реальном времени</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Мониторинг корпусов */}
      <section className="bg-slate-950 px-6 py-20 md:py-28 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-green-400 mb-4">Уровень 2</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Единый контроль<br />
            <span className="text-green-400">всех 10 корпусов</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Все параметры на одном экране. Авария в любом корпусе — мгновенное SMS или Telegram диспетчеру.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[
            { icon: "Thermometer", label: "Температура", val: "18–22°C" },
            { icon: "Wind", label: "CO₂", val: "< 3000 ppm" },
            { icon: "FlaskConical", label: "Аммиак", val: "< 10 ppm" },
            { icon: "Wheat", label: "Корм", val: "Авто-учёт" },
            { icon: "Droplets", label: "Вода", val: "Расход/час" },
            { icon: "Zap", label: "Энергия", val: "кВт·ч" },
          ].map((item) => (
            <div key={item.label} className="bg-slate-900 border border-slate-800 rounded-sm p-5 text-center">
              <Icon name={item.icon} size={28} className="text-green-400 mx-auto mb-3" />
              <div className="text-slate-300 text-sm font-medium">{item.label}</div>
              <div className="text-green-400 text-xs mt-1 font-mono">{item.val}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-sm p-6 flex items-center gap-4">
            <Icon name="MessageSquare" size={28} className="text-blue-400 shrink-0" />
            <div>
              <div className="text-white font-semibold text-sm">SMS / Telegram</div>
              <div className="text-slate-400 text-xs mt-1">Аварийное оповещение за секунды</div>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-sm p-6 flex items-center gap-4">
            <Icon name="Video" size={28} className="text-blue-400 shrink-0" />
            <div>
              <div className="text-white font-semibold text-sm">Видеоконтроль</div>
              <div className="text-slate-400 text-xs mt-1">Запись с таймкодом, доступ 24/7</div>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-sm p-6 flex items-center gap-4">
            <Icon name="Monitor" size={28} className="text-blue-400 shrink-0" />
            <div>
              <div className="text-white font-semibold text-sm">Диспетчерская</div>
              <div className="text-slate-400 text-xs mt-1">Все корпуса на одном экране</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}