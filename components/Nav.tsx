'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Anchor, Menu, X, ChevronDown } from 'lucide-react';
import { services } from '@/lib/services';

const links = [
  { href: '/', label: 'Harbor' },
  { href: '/about', label: 'Our Story' },
  { href: '/services', label: 'Services', hasDropdown: true },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative grid h-9 w-9 place-items-center rounded-full border border-sea-400/40 bg-deep-800/60">
              <Anchor className="h-4 w-4 text-sea-400 transition-transform duration-700 group-hover:rotate-[360deg]" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-base tracking-wide">Ninigret Marina</div>
              <div className="text-[9px] uppercase tracking-[0.25em] text-sand-100/60">
                est. 1962 · Charlestown, RI
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) =>
              l.hasDropdown ? (
                <div
                  key={l.href}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                  className="relative"
                >
                  <Link
                    href={l.href}
                    className="group relative flex items-center gap-1 px-3 py-2 text-[13px] tracking-wide text-sand-50/80 transition hover:text-sand-50"
                  >
                    {l.label}
                    <ChevronDown className={`h-3 w-3 transition-transform ${dropdown ? 'rotate-180' : ''}`} />
                    <span className="pointer-events-none absolute inset-x-3 -bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-sea-400 to-coral-400 transition-transform duration-500 group-hover:scale-x-100" />
                  </Link>
                  <AnimatePresence>
                    {dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full w-[540px] -translate-x-1/2 pt-4"
                      >
                        <div className="glass grid grid-cols-2 gap-1 rounded-md border border-white/10 p-3 shadow-2xl">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              className="group flex items-start gap-3 rounded-md p-3 transition hover:bg-white/5"
                            >
                              <s.Icon className="mt-0.5 h-4 w-4 shrink-0 text-coral-400" />
                              <div>
                                <div className="text-[13px] font-medium text-sand-50 group-hover:text-coral-400">
                                  {s.title}
                                </div>
                                <div className="mt-0.5 text-[11px] leading-snug text-sand-100/55">
                                  {s.tagline}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group relative px-3 py-2 text-[13px] tracking-wide text-sand-50/80 transition hover:text-sand-50"
                >
                  {l.label}
                  <span className="pointer-events-none absolute inset-x-3 -bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-sea-400 to-coral-400 transition-transform duration-500 group-hover:scale-x-100" />
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="ml-3 rounded-full bg-coral-500 px-4 py-2 text-[13px] font-medium text-deep-900 transition hover:bg-coral-400"
            >
              Reserve a Slip
            </Link>
          </nav>

          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="md:hidden rounded-full border border-white/15 p-2"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-deep-900/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between p-6">
              <span className="font-display text-lg">Ninigret Marina</span>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col px-8 pt-6 pb-16">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-b border-white/5"
                >
                  {l.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileServices((v) => !v)}
                        className="flex w-full items-center justify-between py-5 font-display text-3xl"
                      >
                        {l.label}
                        <ChevronDown className={`h-5 w-5 transition-transform ${mobileServices ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServices && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-1 pb-4 pl-2">
                              <Link
                                href="/services"
                                onClick={() => setOpen(false)}
                                className="block py-2 text-sm text-sand-100/70"
                              >
                                All services →
                              </Link>
                              {services.map((s) => (
                                <Link
                                  key={s.slug}
                                  href={`/services/${s.slug}`}
                                  onClick={() => setOpen(false)}
                                  className="flex items-center gap-3 py-2 text-base text-sand-50"
                                >
                                  <s.Icon className="h-4 w-4 text-coral-400" /> {s.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-5 font-display text-3xl"
                    >
                      {l.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
