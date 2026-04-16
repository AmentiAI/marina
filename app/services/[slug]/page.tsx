import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import { IMG } from '@/lib/images';
import { services, getService } from '@/lib/services';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: `${s.title} — Ninigret Marina`,
    description: s.summary,
  };
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={`◆ Services / ${s.title}`} title={s.tagline} image={IMG[s.img]} caption={s.summary} />

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-sand-100/60 hover:text-sea-400"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All services
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-8 space-y-14">
            {s.sections.map((sec, i) => (
              <Reveal key={sec.heading} delay={i * 0.06}>
                <div>
                  <div className="mb-3 text-[11px] uppercase tracking-[0.35em] text-sea-400">
                    0{i + 1}
                  </div>
                  <h2 className="font-display text-2xl leading-[1.15] md:text-4xl">{sec.heading}</h2>
                  <p className="mt-5 text-base leading-relaxed text-sand-100/80 md:text-lg">{sec.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <aside className="md:col-span-4">
            <Reveal>
              <div className="glass sticky top-28 space-y-8 p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <s.Icon className="h-5 w-5 text-coral-400" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-sand-100/60">
                    {s.title}
                  </span>
                </div>

                <div>
                  <div className="mb-3 text-[11px] uppercase tracking-[0.3em] text-sand-100/50">
                    Included
                  </div>
                  <ul className="space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-sand-50/90">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-coral-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {s.pricing && (
                  <div>
                    <div className="mb-3 text-[11px] uppercase tracking-[0.3em] text-sand-100/50">
                      Rates (2026)
                    </div>
                    <dl className="divide-y divide-white/10">
                      {s.pricing.map((p) => (
                        <div key={p.label} className="flex items-center justify-between py-2.5">
                          <dt className="text-sm text-sand-100/75">{p.label}</dt>
                          <dd className="font-display text-base text-sand-50">{p.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-coral-500 px-5 py-3 text-sm font-medium text-deep-900 transition hover:bg-coral-400"
                >
                  Request a quote <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>

        {s.faqs && s.faqs.length > 0 && (
          <div className="mt-24 border-t border-white/10 pt-14">
            <Reveal>
              <h3 className="font-display text-2xl md:text-3xl">Frequently asked</h3>
            </Reveal>
            <div className="mt-8 space-y-5">
              {s.faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.05}>
                  <details className="group border-b border-white/10 pb-5">
                    <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-sand-50 md:text-lg">
                      {f.q}
                      <span className="text-sand-100/60 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm text-sand-100/75 md:text-base">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="border-t border-white/5 bg-deep-800/40 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <div className="mb-10 flex items-end justify-between">
              <h3 className="font-display text-2xl md:text-4xl">Keep exploring</h3>
              <Link href="/services" className="text-[13px] uppercase tracking-[0.3em] text-sand-100/70 hover:text-sea-400">
                All →
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${o.slug}`}
                  className="group relative block overflow-hidden rounded-sm border border-white/10"
                >
                  <div className="relative aspect-[5/4]">
                    <Image src={IMG[o.img]} alt={o.title} fill sizes="33vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-900/80 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <o.Icon className="mb-3 h-5 w-5 text-coral-400" />
                    <div className="font-display text-xl">{o.title}</div>
                    <div className="mt-1 text-sm text-sand-100/70">{o.tagline}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
