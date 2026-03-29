const brands = [
  'Škoda', 'Volkswagen', 'BMW', 'Mercedes-Benz', 'Audi', 'Ford',
  'Opel', 'Toyota', 'Hyundai', 'Kia', 'Renault', 'Peugeot',
  'Citroën', 'Fiat', 'SEAT', 'Volvo', 'Honda', 'Nissan',
  'Mazda', 'Suzuki', 'Mitsubishi', 'Dacia', 'Alfa Romeo', 'Jeep',
  'Land Rover', 'Subaru', 'Chevrolet', 'Porsche', 'Lexus', 'Mini',
];

const doubled = [...brands, ...brands];

export default function CarBrands() {
  return (
    <section id="znacky" className="bg-black py-14 sm:py-20">
      <div className="section-divider mb-10 sm:mb-16 mx-5 sm:mx-8" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="h-px w-8 sm:w-12 bg-gold-500" />
              <span className="text-gold-400 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase">
                Servisujeme
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white tracking-wider">
              VŠECHNY ZNAČKY
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed">
            Opravujeme a servisujeme vozidla všech světových značek.
            Naši technici jsou vyškoleni pro práci s každým modelem.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="brands-track py-3 sm:py-4">
          {doubled.map((brand, index) => (
            <div key={index} className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
              <span className="text-gold-500 text-[10px]">◆</span>
              <span className="text-white/60 group-hover:text-white font-medium text-base sm:text-lg tracking-wide transition-colors whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>

        <div className="brands-track py-3 sm:py-4 mt-1 sm:mt-2" style={{ animationDirection: 'reverse' }}>
          {doubled.slice().reverse().map((brand, index) => (
            <div key={index} className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
              <span className="text-white/20 text-[10px]">◆</span>
              <span className="text-white/30 group-hover:text-white/60 font-light text-sm sm:text-base tracking-widest transition-colors whitespace-nowrap uppercase">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
          {[
            { label: 'Osobní vozy', count: '30+ značek' },
            { label: 'Dodávky', count: 'Všechny typy' },
            { label: 'SUV a terénní', count: 'Speciální péče' },
            { label: 'Motocykly', count: 'Servis & údržba' },
          ].map((item) => (
            <div
              key={item.label}
              className="border border-white/10 p-3.5 sm:p-5 hover:border-gold-500/50 transition-colors duration-300 group"
            >
              <div className="text-gold-400 font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1 group-hover:text-gold-300 transition-colors">
                {item.count}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-10 sm:mt-16 mx-5 sm:mx-8" />
    </section>
  );
}
