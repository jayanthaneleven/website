"use client";

const offers = [
  "20% off to our Friends",
  "12% off selected Style",
  "25% off your first Project",
];

export default function Section7() {
  // Duplicate offers multiple times for seamless loop
  const repeatedOffers = [...offers, ...offers, ...offers, ...offers];

  return (
    <section className="bg-[#F5E6C3] h-[40px] overflow-hidden relative">
      <div className="flex items-center h-full animate-marquee whitespace-nowrap">
        {repeatedOffers.map((offer, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="text-white text-[10px] font-sans font-medium px-5">
              ++
            </span>
            <span className="text-black text-[13px] font-sans font-medium">
              {offer + "   "}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
