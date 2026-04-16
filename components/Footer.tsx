import Link from 'next/link';
import { Anchor, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-40 overflow-hidden border-t border-white/5 bg-deep-900">
      <div className="wave-divider absolute inset-x-0 -top-px text-deep-800">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full">
          <path fill="currentColor" d="M0,32 C240,80 480,0 720,32 C960,64 1200,16 1440,48 L1440,0 L0,0 Z" />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl grid gap-10 px-6 py-20 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Anchor className="h-5 w-5 text-sea-400" />
            <span className="font-display text-lg">Ninigret Marina</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-sand-100/70">
            A full-service marina in Charlestown, Rhode Island —
            servicing, repairing, and storing boats for four generations.
          </p>
          <div className="mt-8 flex gap-3">
            {[Instagram, Facebook, Mail].map((I, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:border-sea-400 hover:text-sea-400"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-5 text-xs uppercase tracking-[0.25em] text-sand-100/60">Harbor</h4>
          <ul className="space-y-3 text-sm text-sand-100/85">
            <li><Link href="/about" className="hover:text-sea-400">Our Story</Link></li>
            <li><Link href="/services" className="hover:text-sea-400">Services</Link></li>
            <li><Link href="/services/winter-storage" className="hover:text-sea-400">Winter Storage</Link></li>
            <li><Link href="/services/service-yard" className="hover:text-sea-400">Service & Repair</Link></li>
            <li><Link href="/contact" className="hover:text-sea-400">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-5 text-xs uppercase tracking-[0.25em] text-sand-100/60">Visit</h4>
          <p className="text-sm text-sand-100/85">
            74 Harbor Way<br />
            Charlestown, RI 02813<br />
            <span className="text-sand-100/60">41.3709° N, 71.6523° W</span>
          </p>
          <p className="mt-4 text-sm text-sand-100/85">(401) 555-0162</p>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-sand-100/50 md:flex-row md:items-center md:px-10">
          <span>© {new Date().getFullYear()} Ninigret Marina. All rights reserved.</span>
          <span className="tracking-[0.3em] uppercase">Made on the south coast</span>
        </div>
      </div>
    </footer>
  );
}
