import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { IMG } from '@/lib/images';
import CTA from '@/components/CTA';

const timeline = [
  { year: '1962', title: 'The Bennett family opens the first pier', body: 'Five wooden slips, one hand-cranked fuel pump, and a hand-painted sign.' },
  { year: '1978', title: 'The harbor is dredged', body: 'Seven feet of controlling depth opens the marina to larger sailing yachts.' },
  { year: '1994', title: 'New service yard', body: 'A full mechanical shop and the first travel lift south of Wickford.' },
  { year: '2011', title: 'Junior sailing returns', body: 'A fleet of Optis and 420s rebuilds the program from the bottom up.' },
  { year: '2024', title: 'Solar array goes live', body: 'The harbor now runs on 110% of its own power across the season.' },
  { year: '2026', title: 'Today', body: 'Four generations in, and we still meet the first boat on the first warm morning.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Sixty-four seasons in Charlestown."
        image={IMG.fog}
        caption="A family-run harbor on Rhode Island's south coast — quiet by design, working every day."
      />

      <section className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="font-display text-2xl leading-[1.15] md:text-3xl">
                Built the old way, <span className="italic text-sand-100/80">on purpose.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-sand-100/80">
                <p>
                  Most of what we do could be automated. We've chosen not to. When you
                  call, a person answers. When you pull in, someone's on the dock
                  waving you down. When something breaks, we fix it ourselves or we
                  know the person in Westerly who can.
                </p>
                <p>
                  The rest of the coast has gotten louder. We have chosen to stay the
                  same — a working harbor, a kind dockhand, a cold beer at the end of
                  a long passage.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <div className="relative aspect-[5/6] overflow-hidden rounded-sm">
              <Image src={IMG.sailorHands} alt="Hands on a sheet" fill className="object-cover" sizes="60vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative border-y border-white/5 bg-deep-800/40 py-28 md:py-40">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Reveal>
            <div className="mb-14 text-xs uppercase tracking-[0.35em] text-sea-400">◆ Timeline</div>
          </Reveal>
          <ol className="relative space-y-16 border-l border-white/10 pl-8 md:pl-12">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06}>
                <li className="relative">
                  <span className="absolute -left-[41px] md:-left-[53px] top-2 h-3 w-3 rounded-full bg-coral-500 ring-4 ring-deep-900" />
                  <div className="flex flex-col gap-2 md:flex-row md:gap-10">
                    <div className="font-display text-2xl text-sea-400 md:w-28">{t.year}</div>
                    <div>
                      <h3 className="font-display text-lg">{t.title}</h3>
                      <p className="mt-2 max-w-xl text-sm text-sand-100/75">{t.body}</p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { v: 'Kept small', d: 'Two hundred boats. No more, no fewer — the way we stay a harbor instead of a parking lot.' },
            { v: 'Locally crewed', d: 'Twelve full-timers. Most grew up fishing this coast. All of them will learn your name.' },
            { v: 'Low-impact', d: 'Solar on every roof, eelgrass restored off the north shore, pump-out free and mandatory.' },
          ].map((c, i) => (
            <Reveal key={c.v} delay={i * 0.08}>
              <div className="glass h-full p-10">
                <div className="font-display text-xl text-coral-400">{c.v}</div>
                <p className="mt-3 text-sm text-sand-100/80">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
