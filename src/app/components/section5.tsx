import Image from 'next/image';

export default function Section5() {
  const cardRows = [
    [
      { type: 'icon' as const, title: 'Energy Intensity', iconSrc: '/images/s401.png' },
      { type: 'image' as const, imageSrc: '/images/s41.png' },
      { type: 'image' as const, imageSrc: '/images/renames42.png' },
    ],
    [
      { type: 'icon' as const, title: 'Tariff Exposure', iconSrc: '/images/s402.png' },
      { type: 'image' as const, imageSrc: '/images/s43.png' },
      { type: 'image' as const, imageSrc: '/images/s44.png' },
    ],
    [
      { type: 'icon' as const, title: 'ESG Reporting Time', iconSrc: '/images/s403.png' },
      { type: 'image' as const, imageSrc: '/images/s45.png' },
      { type: 'image' as const, imageSrc: '/images/s46.png' },
    ],
    [
      { type: 'icon' as const, title: 'Reconciliation', iconSrc: '/images/s404.png' },
      { type: 'image' as const, imageSrc: '/images/s47.png' },
      { type: 'image' as const, imageSrc: '/images/s48.png' },
    ]
  ];

  return (
    <section className="w-full bg-gray-100 py-8 sm:py-12 md:py-16 lg:py-24 flex justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20">
      <div className="max-w-[1280px] w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#141A46] text-center leading-tight sm:leading-snug lg:leading-normal" style={{ fontFamily: 'Segoe UI' }}>
          Why Davinci is Unmatched
        </h2>

        {/* Tab Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="p-4 sm:p-6 flex items-center justify-center">
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-[24px] text-[#FE7A3E] font-semibold leading-tight">Impact Area</p>
          </div>
          <div className="p-4 sm:p-6 bg-[#FE7A3E] flex items-center justify-center">
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-[24px] text-white font-semibold leading-tight">Pre-Davinci Baseline</p>
          </div>
          <div className="p-4 sm:p-6 bg-[#FE7A3E] flex items-center justify-center sm:col-span-2 lg:col-span-1">
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-[24px] text-white font-semibold leading-tight">Davinci Operational Outcome</p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 sm:mt-12 md:mt-16 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          {cardRows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {row.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="relative rounded-[6px] overflow-hidden flex items-center justify-center h-[200px] sm:h-[220px] md:h-[240px] lg:h-[253px]"
                >
                  {card.type === 'icon' ? (
                    <div className="w-full h-[140px] p-4 sm:p-6 flex flex-col gap-4 sm:gap-6">
                      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <div className="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] lg:w-[90px] lg:h-[90px] rounded-full shadow bg-white flex items-center justify-center">
                          <Image src={card.iconSrc} alt="icon" width={30} height={30} className="sm:w-[35px] sm:h-[35px] lg:w-[42px] lg:h-[41px]" />
                        </div>
                        <div className="text-[#4F4F4F] text-base sm:text-lg md:text-xl lg:text-[24px] font-semibold leading-tight text-center sm:text-left" style={{ fontFamily: 'Segoe UI' }}>
                          {card.title}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={card.imageSrc || ''}
                      alt="Card image"
                      fill
                      className="object-cover w-full h-full absolute top-0 left-0"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
