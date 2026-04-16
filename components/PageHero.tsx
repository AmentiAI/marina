'use client';
import Image from 'next/image';

export default function PageHero({
  eyebrow,
  title,
  image,
  video,
  caption,
}: {
  eyebrow: string;
  title: string;
  image: string;
  video?: string;
  caption?: string;
}) {
  return (
    <section className="relative h-[72svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        {video ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={image}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <Image src={image} alt={title} fill priority className="object-cover" sizes="100vw" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-900/60 via-deep-900/40 to-deep-900" />
      </div>
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-start px-6 pt-32 md:px-10 md:pt-36">
        <div className="mb-6 text-xs uppercase tracking-[0.35em] text-sea-400">
          {eyebrow}
        </div>
        <h1 className="max-w-4xl font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {caption && (
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-sand-100/85 md:text-xl">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
