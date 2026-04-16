'use client';
import Reveal from './Reveal';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: 'They pulled my Hinckley in a squall, found a cracked stringer nobody else had spotted, and had me back on the water in eleven days.',
    name: 'Peter M.',
    where: 'Westerly, RI · Hinckley 42',
  },
  {
    text: 'I have wintered with four yards between here and Maine. This is the only one that calls in November to tell me how my boat is doing.',
    name: 'Sarah D.',
    where: 'Stonington, CT · Sabre 38',
  },
];

const logos = ['Yamaha', 'Mercury', 'Volvo Penta', 'Yanmar', 'Westerbeke', 'Garmin'];

export default function Mosaic() {
  return (
    <section className="relative border-y border-white/5 bg-deep-800/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="mb-12 text-[11px] uppercase tracking-[0.35em] text-sea-400">
            ◆ 04 — What owners say
          </div>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.1}>
              <figure className="relative">
                <Quote className="absolute -left-2 -top-4 h-8 w-8 text-coral-400/30" />
                <blockquote className="font-display text-2xl leading-[1.3] text-sand-50/90 md:text-3xl">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.3em] text-sand-100/60">
                  {q.name} <span className="text-sand-100/40">· {q.where}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
            <span className="text-[10px] uppercase tracking-[0.35em] text-sand-100/40">
              Certified on
            </span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {logos.map((l) => (
                <span
                  key={l}
                  className="font-display text-base text-sand-100/55 transition hover:text-sand-50"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
