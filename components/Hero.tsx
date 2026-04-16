'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { IMG } from '@/lib/images';
import { ArrowRight, Compass } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const title = 'Full-service marina,'.split(' ');
  const title2 = 'storage & repair.'.split(' ');

  return (
    <section ref={ref} className="relative h-[72svh] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <video
          src="/video/banner.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={IMG.heroSunset}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-900/40 via-deep-900/30 to-deep-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(2,19,31,0.65)_90%)]" />
      </motion.div>

      <motion.div
        style={{ y: titleY, opacity }}
        className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-start px-6 pt-28 md:px-10 md:pt-32"
      >
        <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-sand-100/70">
          <Compass className="h-3.5 w-3.5 text-sea-400 animate-float-slow" />
          <span>Charlestown · Rhode Island · 02813</span>
        </div>

        <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
          {title.map((w, i) => (
            <motion.span
              key={i}
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mr-[0.2em] inline-block"
            >
              {w}
            </motion.span>
          ))}
          <br />
          {title2.map((w, i) => (
            <motion.span
              key={i}
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55 + i * 0.08, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mr-[0.2em] inline-block italic text-sand-100/90"
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-sand-100/85 md:text-xl"
        >
          A working harbor on the Rhode Island south coast. We service, repair, haul,
          and store boats of every size — trusted to do it right since 1962.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9 }}
          className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-center"
        >
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
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-sand-50/60"
      >
        <span>Scroll</span>
        <div className="relative h-10 w-px bg-sand-50/30">
          <motion.div
            className="absolute inset-x-0 top-0 h-4 bg-sand-50"
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
