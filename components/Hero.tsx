'use client';
import { ArrowRight, Compass } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const title = 'Full-service marina,'.split(' ');
  const title2 = 'storage & repair.'.split(' ');

  return (
    <section className="relative h-[72svh] w-full overflow-hidden bg-deep-900">
      <div className="absolute inset-0">
        <video
          src="/video/banner.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-900/40 via-deep-900/30 to-deep-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(2,19,31,0.65)_90%)]" />
      </div>

      <div
        className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-start px-6 pt-28 md:px-10 md:pt-32"
      >
        <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-sand-100/70">
          <Compass className="h-3.5 w-3.5 text-sea-400 animate-float-slow" />
          <span>Charlestown · Rhode Island · 02813</span>
        </div>

        <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
          {title.join(' ')}
          <br />
          <span className="italic text-sand-100/90">{title2.join(' ')}</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-sand-100/85 md:text-xl">
          A working harbor on the Rhode Island south coast. We service, repair, haul,
          and store boats of every size — trusted to do it right since 1962.
        </p>

        <div className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full bg-sand-50 px-6 py-3 text-sm font-medium text-deep-900 transition hover:bg-sand-100"
          >
            Plan Your Season
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 text-sm tracking-wide text-sand-50/80 transition hover:text-sand-50"
          >
            <span className="h-px w-10 bg-sand-50/50 transition-all group-hover:w-16 group-hover:bg-sand-50" />
            Sixty-four years on the south coast
          </Link>
        </div>
      </div>
    </section>
  );
}
