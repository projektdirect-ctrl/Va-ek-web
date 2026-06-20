const galleryItems = [
  {
    src: 'https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Výměna pneu',
  },
  {
    src: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Opravy na místě',
  },
  {
    src: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Výměna motoru',
  },
  {
    src: 'https://images.pexels.com/photos/6873087/pexels-photo-6873087.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Čištění interiéru',
  },
  {
    src: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Diagnostika',
  },
  {
    src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Pomoc při havárii',
  },
];

export default function Gallery() {
  return (
    <section id="galerie" className="bg-black py-14 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="h-px w-8 sm:w-12 bg-gold-500" />
              <span className="text-gold-400 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase">
                Galerie
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white tracking-wider">
              NAŠE PRÁCE
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base max-w-xs leading-relaxed">
            Ukázky naší práce přímo v terénu. Přijíždíme s plným vybavením pro každou zakázku.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden group cursor-pointer"
            >
              <div className="aspect-square">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-60"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-4 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-semibold text-xs sm:text-sm tracking-wide">{item.label}</span>
              </div>
              <div className="absolute top-2 left-2 w-5 h-5 sm:w-6 sm:h-6 border border-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 w-5 h-5 sm:w-6 sm:h-6 border border-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
