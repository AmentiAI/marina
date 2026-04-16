'use client';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { IMG } from '@/lib/images';
import { Phone, Mail, MapPin, Radio } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come find us on the south coast."
        image={IMG.heroSunset}
        video="/video/banner.mp4"
        caption="74 Harbor Way — five minutes off Route 1, a lifetime from the interstate."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5 space-y-10">
            <Reveal>
              <div>
                <div className="mb-3 text-xs uppercase tracking-[0.35em] text-sea-400">◆ Visit</div>
                <h2 className="font-display text-2xl leading-[1.15] md:text-3xl">
                  We pick up on the first ring.
                </h2>
              </div>
            </Reveal>

            {[
              { Icon: MapPin, label: 'Harbor', value: '74 Harbor Way\nCharlestown, RI 02813' },
              { Icon: Phone, label: 'Phone', value: '(401) 555-0162' },
              { Icon: Mail, label: 'Email', value: 'dockmaster@ninigretmarina.com' },
              { Icon: Radio, label: 'Hailing', value: 'VHF Channel 68' },
            ].map((r, i) => (
              <Reveal delay={0.1 + i * 0.05} key={r.label}>
                <div className="flex gap-5 border-t border-white/10 pt-6">
                  <r.Icon className="mt-1 h-5 w-5 text-coral-400" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-sand-100/60">
                      {r.label}
                    </div>
                    <div className="mt-1 whitespace-pre-line font-display text-base">
                      {r.value}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.4}>
              <div className="glass p-6 text-sm text-sand-100/80">
                <div className="mb-2 text-xs uppercase tracking-[0.3em] text-sea-400">Season hours</div>
                <div className="grid grid-cols-2 gap-2">
                  <span>Apr 15 — May 14</span><span>8a — 5p</span>
                  <span>May 15 — Sep 15</span><span>6a — 9p</span>
                  <span>Sep 16 — Oct 31</span><span>8a — 6p</span>
                  <span>Winter</span><span>By appointment</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal y={40}>
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="glass relative overflow-hidden p-8 md:p-12"
              >
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-coral-500/20 blur-3xl" />
                <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-sea-500/20 blur-3xl" />
                <div className="relative">
                  <h3 className="font-display text-xl md:text-2xl">Reserve a slip or just say hello.</h3>
                  <p className="mt-2 text-sm text-sand-100/70">
                    Tell us a little about your boat and your plans — we will get back inside one business day.
                  </p>

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {[
                      { n: 'Name', t: 'text' },
                      { n: 'Email', t: 'email' },
                      { n: 'Boat (make & LOA)', t: 'text' },
                      { n: 'Arrival date', t: 'date' },
                    ].map((f) => (
                      <label key={f.n} className="block">
                        <span className="text-xs uppercase tracking-[0.25em] text-sand-100/60">{f.n}</span>
                        <input
                          required
                          type={f.t}
                          className="mt-2 w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-sand-50 outline-none transition focus:border-sea-400"
                        />
                      </label>
                    ))}
                    <label className="md:col-span-2">
                      <span className="text-xs uppercase tracking-[0.25em] text-sand-100/60">Message</span>
                      <textarea
                        rows={4}
                        className="mt-2 w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-sand-50 outline-none transition focus:border-sea-400"
                      />
                    </label>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="mt-10 inline-flex items-center gap-3 rounded-full bg-coral-500 px-8 py-4 text-sm font-medium text-deep-900 transition hover:bg-coral-400"
                  >
                    {sent ? 'Thank you — see you on the dock.' : 'Send message →'}
                  </motion.button>
                </div>
              </form>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-6 overflow-hidden rounded-sm border border-white/10">
                <iframe
                  title="Ninigret Marina location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-71.69%2C41.35%2C-71.61%2C41.39&layer=mapnik&marker=41.371%2C-71.652"
                  className="h-80 w-full border-0 bg-deep-800"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
