import { Phone, MapPin, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-4 sm:mb-5">
              <img
                src="/WhatsApp_Image_2026-03-29_at_09.29.11-removebg-preview.png"
                alt="Mobilní Servis Vozidel"
                className="h-24 sm:h-28 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-sm mb-4 sm:mb-6">
              Profesionální mobilní autoservis s více než 10 lety zkušeností.
              Přijedeme tam, kde nás potřebujete — v pracovní dny i o víkendech.
            </p>
            <div className="flex gap-3">
              {[
                { href: 'tel:+420735237360', icon: <Phone size={15} />, label: 'Telefon' },
                { href: 'https://wa.me/420735237360', icon: <MessageCircle size={15} />, label: 'WhatsApp' },
                { href: '#kontakt', icon: <MapPin size={15} />, label: 'Mapa' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:border-gold-500 hover:text-gold-400 transition-all"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4 sm:mb-5">Služby</h4>
            <ul className="space-y-2">
              {[
                'Výměna pneu',
                'Opravy motoru',
                'Pomoc při havárii',
                'Odvoz a vrácení',
                'Čištění interiéru',
                'Diagnostika',
                'STK příprava',
                'Poradenství',
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#sluzby"
                    className="text-gray-500 text-xs hover:text-gold-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500/50 shrink-0" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4 sm:mb-5">Kontakt</h4>
            <div className="space-y-3.5">
              <div className="flex items-start gap-2.5">
                <Phone size={14} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+420735237360" className="text-gray-300 text-xs hover:text-gold-400 transition-colors">
                    +420 735 237 360
                  </a>
                  <p className="text-gray-600 text-[11px] mt-0.5">Po–Pá 7–20 hod</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs">Ústecký kraj</p>
                  <p className="text-gray-600 text-[11px] mt-0.5">Dosah 100 km</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MessageCircle size={14} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <a href="https://wa.me/420735237360" className="text-gray-300 text-xs hover:text-gold-400 transition-colors">
                    WhatsApp 24/7
                  </a>
                  <p className="text-gray-600 text-[11px] mt-0.5">Havárie & poruchy</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail size={14} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <a href="mailto:Mobilniservisvozidel@seznam.cz" className="text-gray-300 text-xs hover:text-gold-400 transition-colors break-all">
                    Mobilniservisvozidel@seznam.cz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Mobilní Autoservis. Všechna práva vyhrazena.
          </p>
          <p className="text-gray-600 text-xs text-center sm:text-right">
            Servis osobních vozů, dodávek a SUV — celý Ústecký kraj
          </p>
        </div>
      </div>
    </footer>
  );
}
