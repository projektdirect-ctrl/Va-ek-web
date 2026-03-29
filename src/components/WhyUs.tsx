import { Clock, MapPin, Shield, BadgeCheck, Banknote, Headphones } from 'lucide-react';

const reasons = [
  {
    icon: <Clock size={28} />,
    title: 'Dostupní 24/7',
    description: 'Porucha se nevybírá. Jsme vám k dispozici kdykoliv — ve dne i v noci, o víkendech i svátcích.',
  },
  {
    icon: <MapPin size={28} />,
    title: 'Přijedeme kamkoliv',
    description: 'Nemusíte nikam jezdit. Přijedeme k vám domů, do zaměstnání, nebo přímo na místo havárie.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Záruční opravy',
    description: 'Na všechny naše práce poskytujeme písemnou záruku. Kvalita a spolehlivost je naší prioritou.',
  },
  {
    icon: <BadgeCheck size={28} />,
    title: 'Certifikovaní technici',
    description: 'Tým zkušených a certifikovaných mechaniků s letitou praxí na všech typech vozidel.',
  },
  {
    icon: <Banknote size={28} />,
    title: 'Transparentní ceny',
    description: 'Žádná skrytá přirážka. Cenu vám sdělíme předem a vy se svobodně rozhodnete.',
  },
  {
    icon: <Headphones size={28} />,
    title: 'Stálá péče o zákazníky',
    description: 'Hledáme stálé zákazníky, o které se pečlivě staráme. Poradíme bezplatně — ať jde o závadu, koupi, nebo pravidelný servis.',
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#0a0a0a] py-14 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-10 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="h-px w-8 sm:w-12 bg-gold-500" />
              <span className="text-gold-400 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase">
                Proč my
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white tracking-wider leading-none">
              PROČ SI VYBRAT
              <span className="block gold-text-gradient">NÁS?</span>
            </h2>
          </div>
          <div>
            <p className="text-gray-400 text-sm sm:text-lg leading-relaxed mb-5 sm:mb-6">
              Záleží nám na dlouhodobém vztahu se zákazníky. Nehledáme jednorázové zakázky —
              chceme být vaším servisem, na který se vždy spolehneš. Bez skrytých cen. Poskytujeme záruku
              na všechny naše práce — ale upozorňujeme: pokud po naší opravě navštívíte jiný servis,
              záruka u nás tímto dnem zaniká.
            </p>
            <div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/10 pt-5 sm:pt-6">
              {[
                { value: '10+', label: 'Let praxe' },
                { value: '98%', label: 'Spokojených' },
                { value: '4.9', label: 'Hodnocení' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl sm:text-4xl gold-text-gradient tracking-widest">{s.value}</div>
                  <div className="text-gray-500 text-xs sm:text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] p-5 sm:p-8 group hover:bg-[#111] transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-500" />
              <div className="text-gold-500 mb-4 sm:mb-5 group-hover:text-gold-300 transition-colors duration-300">
                {reason.icon}
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2 sm:mb-3 group-hover:text-gold-400 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
