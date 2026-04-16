'use client';
import Image from 'next/image';
import Link from 'next/link';
import { IMG } from '@/lib/images';
import Reveal from './Reveal';
import { ArrowUpRight } from 'lucide-react';

export default function Intro() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-16 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <Reveal>
            <div className="mb-5 text-[11px] uppercase tracking-[0.35em] text-sea-400">
              ◆ 01 — The Marina
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl leading-[1.15] md:text-5xl">
              A small marina that does the big work.
              <span className="block text-sand-100/60">
                Service, repair, haul-out, winter storage, and a slip to come home to.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-sand-100/80 md:text-lg">
              Ninigret Marina has been hauling, fixing, and wintering boats out of
              Charlestown since 1962. Four generations, one yard, and the same
              answer to every question: we'll take care of it.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 border-b border-sand-50/40 pb-1 text-sand-50 transition hover:border-coral-400 hover:text-coral-400"
              >
                What we do <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 border-b border-sand-50/40 pb-1 text-sand-50 transition hover:border-coral-400 hover:text-coral-400"
              >
                Our story <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image src={IMG.yacht} alt="Boat in the yard" fill className="object-cover" sizes="40vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-900/50 to-transparent" />
            <span className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.3em] text-sand-50/90">
              In the yard — April 2026
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
