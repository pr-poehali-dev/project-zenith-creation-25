import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Promo />

      {/* Секция с формой заявки */}
      <section id="contact" className="bg-slate-900 px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="text-xs uppercase tracking-widest text-blue-400 mb-4">Следующий шаг</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Запросите КП<br />
                <span className="text-blue-400">за 1 рабочий день</span>
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Расскажите о вашем предприятии — мы подготовим расчёт под конкретный объект и ответим на все вопросы.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "Clock", text: "Пилот запускается за 1 месяц — от 1 до 5 млн руб." },
                  { icon: "TrendingUp", text: "Окупаемость 3,5 месяца на птицефабрике 190 млн яиц/год" },
                  { icon: "ShieldCheck", text: "Защита от карантина и штрафов ветнадзора" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <Icon name={item.icon} size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col gap-2">
                <a href="tel:+78127791070" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm">
                  <Icon name="Phone" size={15} className="text-blue-400" />
                  8 (812) 779 10 70
                </a>
                <a href="mailto:ra@telecom-master.ru" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm">
                  <Icon name="Mail" size={15} className="text-blue-400" />
                  ra@telecom-master.ru
                </a>
                <a href="https://bgtm.ru" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm">
                  <Icon name="Globe" size={15} className="text-blue-400" />
                  bgtm.ru
                </a>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 p-8">
              <h3 className="text-white font-semibold mb-6 text-lg">Оставьте заявку</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
