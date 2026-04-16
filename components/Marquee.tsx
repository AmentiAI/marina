'use client';
const phrases = [
  'Slip Rentals',
  '·',
  'Deep-Water Moorings',
  '·',
  'Fuel & Pump-out',
  '·',
  'Winter Storage',
  '·',
  'Mechanical Service',
  '·',
  'Charlestown, RI',
  '·',
  'Since 1962',
  '·',
];
export default function Marquee() {
  const items = [...phrases, ...phrases];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-deep-800/60 py-2.5">
      <div className="marquee font-display text-sm md:text-base text-sand-50/70">
        {items.map((p, i) => (
          <span key={i} className="mx-6 whitespace-nowrap">
            {p === '·' ? <span className="text-coral-400">◆</span> : p}
          </span>
        ))}
      </div>
    </div>
  );
}
