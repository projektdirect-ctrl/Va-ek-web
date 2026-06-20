import { Phone, MapPin, Clock, MessageCircle, Mail } from 'lucide-react';

const openingHours = [
  { day: 'Pondělí — Pátek', hours: '7:00 — 20:00' },
  { day: 'Sobota', hours: '8:00 — 18:00' },
  { day: 'Neděle', hours: 'Dle domluvy' },
  { day: 'Havárie & Poruchy', hours: '24 / 7' },
];

export default function Contact() {
  return (
    <section id="kontakt" className="bg-black py-14 sm:py-24">
      <div className="section-divider mb-14 sm:mb-24 mx-5 sm:mx-8" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <div className="h-px w-8 sm:w-12 bg-gold-500" />
            <span className="text-gold-400 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase">
              Kontakt
            </span>
            <div className="h-px w-8 sm:w-12 bg-gold-500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white tracking-wider mb-3">
            KONTAKTUJTE NÁS
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-xl mx-auto">
            Zavolejte nebo napište. Jsme tu pro vás.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 mb-8 sm:mb-16">
          {[
            {
              icon: <Phone size={20} />,
              label: 'Telefon',
              main: '+420 735 237 360',
              sub: 'Volejte kdykoliv — i o víkendech',
              href: 'tel:+420735237360',
              isLink: true,
            },
            {
              icon: <MessageCircle size={20} />,
              label: 'WhatsApp / SMS',
              main: 'Napište nám',
              sub: 'Rychlá odpověď do 15 minut',
              href: 'https://wa.me/420735237360',
              isLink: true,
            },
            {
              icon: <Mail size={20} />,
              label: 'E-mail',
              main: 'Napište nám',
              sub: 'Mobilniservisvozidel@seznam.cz',
              href: 'mailto:Mobilniservisvozidel@seznam.cz',
              isLink: true,
            },
            {
              icon: <MapPin size={20} />,
              label: 'Oblast servisu',
              main: 'Ústecký kraj',
              sub: 'Ústecký kraj a okolí do 100 km',
              href: null,
              isLink: false,
            },
          ].map((card) => (
            <div key={card.label} className="bg-black p-5 sm:p-8 group hover:bg-[#0d0d0d] transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-500/0 group-hover:bg-gold-500 transition-colors duration-300" />
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4 sm:mb-6 group-hover:bg-gold-500 group-hover:text-black group-hover:border-gold-500 transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="text-gray-400 text-xs font-medium tracking-[0.3em] uppercase mb-2 sm:mb-3">
                {card.label}
              </h3>
              {card.isLink && card.href ? (
                <a
                  href={card.href}
                  className="block text-white text-lg sm:text-2xl font-semibold hover:text-gold-400 transition-colors mb-1"
                >
                  {card.main}
                </a>
              ) : (
                <p className="text-white text-lg sm:text-2xl font-semibold mb-1">{card.main}</p>
              )}
              <p className="text-gray-500 text-xs sm:text-sm">{card.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          <div className="border border-white/10 p-5 sm:p-8 hover:border-white/20 transition-colors">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <Clock size={18} className="text-gold-400" />
              <h3 className="text-white font-semibold text-base sm:text-lg">Otevírací doba</h3>
            </div>
            <div className="space-y-0">
              {openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center py-3 border-b border-white/5 last:border-0"
                >
                  <span className="text-gray-400 text-xs sm:text-sm">{item.day}</span>
                  <span
                    className={`font-medium text-xs sm:text-sm ${
                      item.day.includes('Havárie') ? 'text-gold-400 font-bold' : 'text-white'
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white/10 p-5 sm:p-8 hover:border-white/20 transition-colors flex flex-col justify-between gap-5">
            <div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-3">Rychlá poptávka</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Potřebujete rychlou pomoc nebo chcete domluvit termín? Zavolejte nám nebo
                napište na WhatsApp. Odpovídáme okamžitě.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href="tel:+420735237360"
                className="w-full gold-gradient text-black font-bold py-3.5 sm:py-4 rounded flex items-center justify-center gap-2.5 hover:opacity-90 transition-opacity text-sm sm:text-base"
              >
                <Phone size={18} />
                Zavolat: +420 735 237 360
              </a>
              <a
                href="https://wa.me/420735237360"
                className="w-full border border-white/20 text-white font-medium py-3.5 sm:py-4 rounded flex items-center justify-center gap-2.5 hover:border-gold-500 hover:text-gold-400 transition-all text-sm sm:text-base"
              >
                <MessageCircle size={18} />
                Napsat na WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
