'use client';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { PhoneCall, Ship, Wrench, Anchor } from 'lucide-react';

const steps = [
  {
    Icon: PhoneCall,
    label: 'Step 01',
    title: 'Call or write',
    desc: 'Tell us your boat, your timeline, and what needs doing. We quote within one business day.',
  },
  {
    Icon: Ship,
    label: 'Step 02',
    title: 'Bring it in',
    desc: 'We meet you at the fuel dock or on the trailer. Short-haul on our 35-ton lift takes under an hour.',
  },
  {
    Icon: Wrench,
    label: 'Step 03',
    title: 'We do the work',
    desc: 'All in-house: engines, rigging, electronics, paint. Nothing sublet, no surprises on the invoice.',
  },
  {
    Icon: Anchor,
    label: 'Step 04',
    title: 'Splash ready',
    desc: 'Commissioning, a sea trial with the tech who did the work, and your slip waiting at the other end.',
  },
];

const stats = [
  ['64', 'Years on the coast'],
  ['35t', 'Travel lift capacity'],
  ['220', 'Boats wintered yearly'],
  ['12', 'Full-time craftsmen'],
];

export default function ParallaxQuote() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <div className="mb-5 text-[11px] uppercase tracking-[0.35em] text-sea-400">
              ◆ 03 — How it works
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="max-w-xl font-display text-3xl leading-[1.15] md:text-5xl">
              Four steps from phone call to splash day.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="max-w-sm text-base text-sand-100/75">
            Most jobs clear the yard inside two weeks. Winter storage bookings open
            every September for the following spring.
          </p>
        </Reveal>
      </div>

      <ol className="mt-14 grid gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="relative border-t border-white/15 pt-6"
          >
            <span className="absolute left-0 top-0 h-px w-10 bg-coral-400" />
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.3em] text-sand-100/50">
                {s.label}
              </span>
              <s.Icon className="h-4 w-4 text-sea-400" />
            </div>
            <h3 className="mt-6 font-display text-xl">{s.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-sand-100/75">{s.desc}</p>
          </motion.li>
        ))}
      </ol>

      <div className="mt-20 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4">
        {stats.map(([n, l], i) => (
          <Reveal key={l} delay={i * 0.06}>
            <div>
              <div className="font-display text-4xl text-sand-50 md:text-5xl">{n}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-sand-100/50">
                {l}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
