import { useState } from "react";
import Icon from "@/components/ui/icon";

const SEND_URL = "https://functions.poehali.dev/deba3d52-ed4b-4909-82bc-71d5a0abc943";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", company: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(SEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center">
          <Icon name="CheckCircle" size={32} className="text-green-400" />
        </div>
        <h3 className="text-white font-bold text-xl">Заявка отправлена!</h3>
        <p className="text-slate-400 text-sm max-w-xs">
          Мы свяжемся с вами в ближайшее время для обсуждения деталей.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-blue-400 text-sm hover:text-blue-300 transition-colors mt-2"
        >
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            required
            type="text"
            placeholder="Имя *"
            value={form.name}
            onChange={set("name")}
            className={inputClass}
          />
        </div>
        <div>
          <input
            required
            type="tel"
            placeholder="Телефон *"
            value={form.phone}
            onChange={set("phone")}
            className={inputClass}
          />
        </div>
      </div>
      <input
        type="text"
        placeholder="Компания"
        value={form.company}
        onChange={set("company")}
        className={inputClass}
      />
      <textarea
        rows={3}
        placeholder="Сообщение (необязательно)"
        value={form.message}
        onChange={set("message")}
        className={`${inputClass} resize-none`}
      />

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/30 px-4 py-3">
          <Icon name="AlertCircle" size={16} />
          Ошибка отправки. Проверьте соединение или напишите нам напрямую.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white px-6 py-4 uppercase tracking-wide text-sm font-semibold transition-colors duration-300 w-full"
      >
        {status === "loading" ? (
          <>
            <Icon name="Loader2" size={18} className="animate-spin" />
            Отправляем...
          </>
        ) : (
          <>
            <Icon name="Send" size={18} />
            Запросить коммерческое предложение
          </>
        )}
      </button>
      <p className="text-slate-500 text-xs text-center">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
}
