'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IMG } from '@/lib/images';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={IMG.dockLights} alt="Dock lights at dusk" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-deep-900/75" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center md:px-10 md:py-44">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-4xl leading-[1.1] md:text-6xl"
        >
          The 2026 season <br /> <span className="gradient-text">is filling up.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mx-auto mt-7 max-w-2xl text-base text-sand-100/85 md:text-lg"
        >
          Returning boaters have the run of April. Open slips go live on May 1st — put
          your name in now and we'll hold one for you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-coral-500 px-6 py-3 text-sm font-medium text-deep-900 transition hover:bg-coral-400"
          >
            Reserve a Slip <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-white/25 px-6 py-3 text-sm transition hover:border-sand-50"
          >
            See all services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
