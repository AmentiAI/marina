import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { IMG } from '@/lib/images';
import CTA from '@/components/CTA';
import { services } from '@/lib/services';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A full-service harbor, on your schedule."
        image={IMG.yacht}
        caption="Everything under one dock. Nothing we would not use ourselves."
      />

      <section className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <div className="mb-5 text-[11px] uppercase tracking-[0.35em] text-sea-400">
              ◆ The full list
            </div>
            <h2 className="font-display text-3xl leading-[1.15] md:text-5xl">
              Eight departments, one phone number.
            </h2>
            <p className="mt-5 text-base text-sand-100/80 md:text-lg">
              Tap any service for rates, details, and how to get started. All work is
              done in-house — we do not sublet.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                href={`/services/${s.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-white/10 bg-deep-800/40 transition hover:border-coral-400/40"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={IMG[s.img]}
                    alt={s.title}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-900/70 to-transparent" />
                  <s.Icon className="absolute left-5 top-5 h-5 w-5 text-coral-400" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-2xl">{s.title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-sand-100/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral-400" />
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-sand-100/75">{s.tagline}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
