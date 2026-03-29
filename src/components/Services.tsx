import { Wrench, Car, Truck, Sparkles, Search, ShoppingCart, Zap, Droplet as DropletIcon, Shield } from 'lucide-react';

const services = [
  {
    icon: <Car size={20} />,
    title: 'Výměna pneu',
    description: 'Výměna letních i zimních pneumatik přímo u vás. Osobní vozy, dodávky, SUV. Vyvažování kol na místě.',
    image: 'https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Nejoblíbenější',
  },
  {
    icon: <Wrench size={20} />,
    title: 'Opravy motoru',
    description: 'Výměna motoru, rozvody, opravy hlavy motoru, těsnění. Veškeré motorové opravy na místě nebo v dílně.',
    image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: <Zap size={20} />,
    title: 'Přijedeme k havárii',
    description: 'Nečekáte na odtahovou službu sami. Přijedeme na místo nehody a vyřešíme situaci přímo tam.',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: '24/7',
  },
  {
    icon: <Truck size={20} />,
    title: 'Odvoz a vrácení auta',
    description: 'Vyzvedneme vaše auto, opravíme ho a vrátíme zpět na původní místo. Vy nemusíte nikam jezdit.',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: <Sparkles size={20} />,
    title: 'Hloubkové čištění interiéru',
    description: 'Důkladné čištění sedaček, koberců, palubní desky a celého interiéru vozidla. Osobní vozy i dodávky.',
    image: 'https://images.pexels.com/photos/6873087/pexels-photo-6873087.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: <Search size={20} />,
    title: 'Diagnostika',
    description: 'Profesionální diagnostika přes OBD, kontrola chybových hlášení, přesná identifikace závad.',
    image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: <ShoppingCart size={20} />,
    title: 'Poradenství při koupi',
    description: 'Přijedeme s vámi prohlédnout ojeté auto. Technická kontrola, odhalení skrytých závad.',
    image: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: <DropletIcon size={20} />,
    title: 'Výměna oleje a filtrů',
    description: 'Rychlá výměna motorového oleje, olejového filtru, vzduchového a palivového filtru.',
    image: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: <Shield size={20} />,
    title: 'Zajištění STK',
    description: 'Postaráme se o technickou kontrolu vašeho vozu — zajistíme termín a odvoz na STK. Geometrii neprovádíme.',
    image: 'https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: <Wrench size={20} />,
    title: 'Údržba motocyklů',
    description: 'Výměna oleje, filtrů, svíček a řetězových sad motocyklů. Pravidelná údržba přímo u vás.',
    image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Services() {
  return (
    <section id="sluzby" className="bg-[#0a0a0a] py-14 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <div className="h-px w-8 sm:w-12 bg-gold-500" />
            <span className="text-gold-400 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase">
              Co nabízíme
            </span>
            <div className="h-px w-8 sm:w-12 bg-gold-500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white tracking-wider mb-3">
            NAŠE SLUŽBY
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Kompletní péče o vaše auto — kdekoliv a kdykoliv to potřebujete.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/5">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card relative bg-[#0a0a0a] group cursor-pointer overflow-hidden"
            >
              <div className="aspect-[16/9] sm:aspect-[4/3] overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-img w-full h-full object-cover transition-transform duration-700 brightness-50 group-hover:brightness-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                {service.tag && (
                  <div className="absolute top-2.5 right-2.5 gold-gradient text-black text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded tracking-wider">
                    {service.tag}
                  </div>
                )}
                <div className="absolute top-3 left-3 text-gold-400">
                  {service.icon}
                </div>
              </div>
              <div className="p-4 sm:p-5 border-b border-white/5 group-hover:border-gold-500/30 transition-colors duration-300">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1.5 group-hover:text-gold-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors duration-300 sm:text-sm">
                  {service.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
