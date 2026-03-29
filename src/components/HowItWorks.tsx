import { Phone, CalendarCheck, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Phone size={24} />,
    title: 'Zavolejte nebo napište',
    description: 'Kontaktujte nás telefonicky nebo přes WhatsApp. Popište závadu nebo jakou službu potřebujete.',
  },
  {
    number: '02',
    icon: <CalendarCheck size={24} />,
    title: 'Domluvíme termín',
    description: 'Rychle se domluvíme na termínu, který vám vyhovuje. U havárií přijíždíme okamžitě.',
  },
  {
    number: '03',
    icon: <Truck size={24} />,
    title: 'Přijedeme k vám',
    description: 'Technik dorazí na vámi určené místo s veškerým vybavením a náhradními díly.',
  },
  {
    number: '04',
    icon: <CheckCircle size={24} />,
    title: 'Práce hotova',
    description: 'Oprava proběhne přímo na místě. Platíte až po dokončení práce. Vystavíme doklad.',
  },
];

export default function HowItWorks() {
  return (
    <section id="jak-to-funguje" className="bg-[#0d0d0d] py-14 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <div className="h-px w-8 sm:w-12 bg-gold-500" />
            <span className="text-gold-400 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase">
              Proces
            </span>
            <div className="h-px w-8 sm:w-12 bg-gold-500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white tracking-wider mb-3">
            JAK TO FUNGUJE
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-xl mx-auto">
            Jednoduše, rychle a bez zbytečného zdržování
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-black group-hover:border-gold-500 transition-all duration-500 bg-[#0d0d0d]">
                    {step.icon}
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-black border border-gold-500 flex items-center justify-center">
                    <span className="text-gold-400 text-[9px] font-bold">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base mb-2 sm:mb-3 group-hover:text-gold-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-16 p-5 sm:p-8 border border-white/10 bg-white/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 to-transparent pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div>
              <p className="text-gold-400 text-xs font-medium tracking-wider uppercase mb-1">
                Havárie nebo porucha?
              </p>
              <h3 className="text-white text-lg sm:text-2xl font-semibold">
                Volejte okamžitě — jsme dostupní 24/7
              </h3>
            </div>
            <a
              href="tel:+420735237360"
              className="shrink-0 gold-gradient text-black font-bold px-5 sm:px-8 py-3 sm:py-4 rounded text-base sm:text-lg hover:opacity-90 transition-opacity flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
            >
              <Phone size={18} />
              +420 735 237 360
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
