'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wrench, Warehouse, Anchor, Fuel, LifeBuoy, Waves } from 'lucide-react';
import Reveal from './Reveal';

const services = [
  {
    Icon: Wrench,
    title: 'Service & Repair',
    desc: 'Certified techs on Yamaha, Mercury, Volvo Penta, Yanmar, and Westerbeke. Diagnostics, repower, electronics, rigging, fiberglass, and gel coat.',
    tags: ['Engines', 'Electronics', 'Rigging', 'Fiberglass'],
  },
  {
    Icon: Warehouse,
    title: 'Haul-out & Storage',
    desc: 'A 35-ton travel lift, heated indoor bays for the classics, covered outdoor for everything else, and shrink-wrap by the foot. Splash-ready by Memorial Day.',
    tags: ['35-ton lift', 'Heated indoor', 'Covered outdoor', 'Shrink-wrap'],
  },
  {
    Icon: Anchor,
    title: 'Slips & Moorings',
    desc: 'Floating docks with 30/50A power, Wi-Fi, and pump-out at every pedestal. Ninety inspected moorings in the harbor with launch service all season.',
    tags: ['Seasonal', 'Transient', 'Launch svc.', 'Pump-out'],
  },
  {
    Icon: Fuel,
    title: 'Fuel & Ship Store',
    desc: 'Ethanol-free 90 gas and diesel on the T-dock — the only one between Point Judith and Stonington. Ice, bait, charts, oil, and good coffee inside.',
    tags: ['Non-ethanol', 'Diesel', 'Ice & bait', 'Charts'],
  },
  {
    Icon: Waves,
    title: 'Moorings',
    desc: 'Ninety inspected mushroom moorings in the harbor. Well-protected, soft mud holding, and a launch on VHF 68 running 7am to 10pm.',
    tags: ['Seasonal', 'Guest', 'Launch', 'Dinghy dock'],
  },
  {
    Icon: LifeBuoy,
    title: 'Rescue & Safety',
    desc: 'Dedicated response boat in the water May through October. Tows, on-water assists, and free USCG-equivalent safety inspections.',
    tags: ['VHF 16', 'Vessel assist', 'Inspections', 'Weather'],
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative border-y border-white/5 bg-deep-800/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div>
            <Reveal>
              <div className="mb-5 text-[11px] uppercase tracking-[0.35em] text-sea-400">
                ◆ 02 — What we do
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="max-w-2xl font-display text-3xl leading-[1.15] md:text-5xl">
                One yard. One phone number. <br />
                <span className="text-sand-100/60 italic">Everything you need for the season.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/services"
              className="rounded-full border border-white/20 px-5 py-2.5 text-[13px] tracking-wide transition hover:border-sea-400 hover:text-sea-400"
            >
              Full service list →
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col bg-deep-900 p-8 transition-colors hover:bg-deep-800"
            >
              <div className="flex items-start justify-between">
                <s.Icon className="h-5 w-5 text-coral-400 transition-transform duration-500 group-hover:-translate-y-0.5" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-sand-100/40">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl leading-tight">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-sand-100/75">{s.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-sand-100/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
