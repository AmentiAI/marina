import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Intro from '@/components/Intro';
import ServicesPreview from '@/components/ServicesPreview';
import ParallaxQuote from '@/components/Parallax';
import Mosaic from '@/components/Mosaic';
import CTA from '@/components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <ServicesPreview />
      <ParallaxQuote />
      <Mosaic />
      <CTA />
    </>
  );
}
