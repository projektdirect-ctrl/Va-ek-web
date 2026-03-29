import { Phone, ChevronDown, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Mobilní autoservis"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/92" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px gold-gradient opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-24 pb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-gold-500" />
            <span className="text-gold-400 text-xs sm:text-sm font-medium tracking-[0.25em] sm:tracking-[0.3em] uppercase">
              Václav Paták — Mobilní servis po celém regionu
            </span>
          </div>

          <h1 className="font-display leading-none mb-4 tracking-wider">
            <span className="text-white block text-5xl sm:text-7xl md:text-8xl lg:text-9xl">PŘIJEDEME</span>
            <span className="gold-text-gradient block text-5xl sm:text-7xl md:text-8xl lg:text-9xl">KAM POTŘEBUJETE</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light leading-relaxed mt-4 sm:mt-6 mb-7 sm:mb-10 max-w-2xl">
            Profesionální mobilní autoservis — opravy, výměna pneu, hloubkové čištění interiéru,
            diagnostika a poradenství. Specializujeme se na BMW a Škoda, obsluhujeme i ostatní značky.
            Přijedeme k vám domů, do práce nebo přímo na místo havárie.
          </p>

          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 items-stretch xs:items-center">
            <a
              href="tel:+420735237360"
              className="group flex items-center justify-center gap-3 gold-gradient text-black font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded hover:opacity-90 transition-all duration-300 text-base sm:text-lg"
            >
              <Phone size={18} className="group-hover:animate-pulse shrink-0" />
              +420 735 237 360
            </a>
            <a
              href="#sluzby"
              className="flex items-center justify-center gap-2 border border-white/30 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded hover:border-gold-500 hover:text-gold-400 transition-all duration-300 text-sm sm:text-base"
            >
              Zobrazit služby
              <ChevronDown size={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-5 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
            {[
              { value: '10+', label: 'Let zkušeností' },
              { value: '5 000+', label: 'Zákazníků' },
              { value: '24/7', label: 'Dostupnost' },
              { value: '100 km', label: 'Dosah servisu' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl sm:text-3xl md:text-4xl gold-text-gradient tracking-widest">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
        <a href="#sluzby" className="flex flex-col items-center gap-2 text-gold-500 hover:text-gold-300 transition-colors">
          <span className="text-xs tracking-[0.3em] uppercase font-medium">Více informací</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-5 py-3 bg-black/80 backdrop-blur-sm border-t border-white/10 sm:hidden">
        <MapPin size={14} className="text-gold-500 shrink-0" />
        <span className="text-gray-300 text-xs">Přijedeme kamkoliv — Ústecký kraj a okolí</span>
      </div>
    </section>
  );
}
