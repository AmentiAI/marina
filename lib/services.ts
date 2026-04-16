import { IMG, ImgKey } from './images';
import { Anchor, Fuel, Wrench, Warehouse, Waves, LifeBuoy } from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  img: ImgKey;
  Icon: any;
  bullets: string[];
  sections: { heading: string; body: string }[];
  pricing?: { label: string; value: string }[];
  faqs?: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'dockage',
    title: 'Dockage',
    tagline: 'Floating concrete docks with deep water at every slip.',
    summary:
      'Every slip has 30/50A shore power, potable water, Wi-Fi, and a walking path to the ship store, bathhouse, and fuel dock.',
    img: 'dockMorning',
    Icon: Anchor,
    bullets: ['Seasonal (May–Oct)', 'Monthly & weekly', 'Transient up to 65 ft', 'Catamaran beams to 28 ft'],
    sections: [
      {
        heading: 'What you get',
        body: 'Floating concrete docks, kept level year-round. Every pedestal has two 30A and one 50A outlet, metered. Filtered dockside water, gigabit Wi-Fi, free pump-out at the pedestal, and a courtesy dock cart at the ramp. The bathhouse is heated and open 24/7 in season.',
      },
      {
        heading: 'Who it suits',
        body: 'Owners who want to walk aboard, step off, and not think about the boat in between. Works for anything from a 22-foot center console to a 65-foot motor yacht — we measure every slip before we assign it.',
      },
      {
        heading: 'The approach',
        body: 'Seven feet of controlling depth at mean low water, a marked channel from the breachway, and a dockhand on the radio from the moment you clear the jetties. Short-haul to the lift is a 90-second tow if the wind is against you.',
      },
    ],
    pricing: [
      { label: 'Seasonal', value: '$185 / ft' },
      { label: 'Monthly', value: '$42 / ft' },
      { label: 'Weekly', value: '$14 / ft' },
      { label: 'Transient', value: '$4.25 / ft · night' },
    ],
    faqs: [
      { q: 'Is power metered?', a: 'Yes — read the first of each month, billed on the 15th.' },
      { q: 'Can I live aboard?', a: 'Four liveaboard slips are offered each season, by application in February.' },
    ],
  },
  {
    slug: 'moorings',
    title: 'Moorings',
    tagline: 'Ninety protected balls in the harbor — launch on VHF 68.',
    summary:
      'Inspected every April, well-sheltered from every quarter, with a launch service running 7am to 10pm in season and a dinghy dock included.',
    img: 'sailboat',
    Icon: Waves,
    bullets: ['Launch on VHF 68', 'Dinghy dock included', 'Inspected each April', 'Guest moorings nightly'],
    sections: [
      {
        heading: 'The field',
        body: 'The mooring field sits on the east side of the channel in eight to twelve feet of water. Bottom is soft mud — excellent holding for 2,000-lb mushrooms inspected on a three-year rotation and pulled annually for pennant replacement.',
      },
      {
        heading: 'Launch service',
        body: 'Two launches run from 7am to 10pm, Memorial Day through Columbus Day. Hail them on channel 68. Outside those hours the dinghy dock is floodlit and has a locked gate — guests get a code at check-in.',
      },
      {
        heading: 'Guest moorings',
        body: 'Twelve guest balls are reserved for cruisers passing through. Call ahead or grab whatever is open and settle up at the fuel dock before 10am.',
      },
    ],
    pricing: [
      { label: 'Seasonal ball', value: '$2,400 / season' },
      { label: 'Monthly', value: '$450' },
      { label: 'Guest nightly', value: '$55' },
    ],
  },
  {
    slug: 'fuel-dock',
    title: 'Fuel Dock',
    tagline: 'Ethanol-free 90. Diesel. Pump-out. Good coffee.',
    summary:
      'The only ethanol-free 90 gas between Point Judith and Stonington, high-flow diesel, and free pump-out — open from first light to last.',
    img: 'fuelDock',
    Icon: Fuel,
    bullets: ['Ethanol-free 90', 'Diesel #2', 'Pump-out free', 'Open dawn to dusk'],
    sections: [
      {
        heading: 'The pumps',
        body: 'Two 90-octane non-ethanol nozzles and one high-flow diesel, all on calibrated meters. Flow rates fill a 150-gallon tank in under ten minutes without burping.',
      },
      {
        heading: 'What we carry',
        body: 'Ice (cubed and block), live bait, engine oil in the common weights, two-stroke for the kickers, charts, sunscreen, and a small cooler of local beer. If we don\'t stock it, the Charlestown General is a two-minute drive.',
      },
      {
        heading: 'Hours',
        body: 'Dawn to dusk, seven days, May 15 through September 15. Shoulder seasons we open at 8 and close at 5. Winter fuel is by appointment — call the shop.',
      },
    ],
  },
  {
    slug: 'service-yard',
    title: 'Service & Repair',
    tagline: 'A full marine shop — nothing sublet.',
    summary:
      'Certified techs on Yamaha, Mercury, Volvo Penta, Westerbeke, and Yanmar. 35-ton travel lift and heated indoor bays.',
    img: 'yacht',
    Icon: Wrench,
    bullets: ['Repower & rigging', 'Electronics install', 'Fiberglass & gel coat', 'Bottom paint & detail'],
    sections: [
      {
        heading: 'Mechanical',
        body: 'Factory-certified on the major gas and diesel lines. Repowers, top-ends, raw-water systems, transmissions, and the unglamorous ignition diagnostics that nobody else wants to chase down on a Friday afternoon.',
      },
      {
        heading: 'Rigging & electronics',
        body: 'Standing rigging replacement, furler overhaul, running rigging spec\'d to the boat. Full Garmin, Raymarine, and B&G installs with NMEA 2000 networking done right the first time.',
      },
      {
        heading: 'Cosmetics',
        body: 'Hull fiberglass, gel coat color matching, bottom paint by the season, compound-and-polish packages before the summer charter. We do the work we would want on our own boats.',
      },
    ],
    pricing: [
      { label: 'Shop rate', value: '$145 / hr' },
      { label: 'Short haul', value: '$12 / ft' },
      { label: 'Bottom paint', value: 'from $28 / ft' },
    ],
  },
  {
    slug: 'winter-storage',
    title: 'Winter Storage',
    tagline: 'Heated indoor, covered outdoor, shrink-wrap by the foot.',
    summary:
      'Haul in October, splash by Memorial Day. We check on every boat monthly — you get a photo and a note, whether anything needed attention or not.',
    img: 'heroBoats',
    Icon: Warehouse,
    bullets: ['Heated indoor', 'Covered outdoor', 'Shrink-wrap', 'Commissioning package'],
    sections: [
      {
        heading: 'Indoor',
        body: 'Forty heated bays for the classics and anything varnished — humidity-controlled, insured, and accessed by appointment all winter if you want to keep chipping away at a project.',
      },
      {
        heading: 'Outdoor',
        body: 'Covered outdoor for the workboats and trailerables, standard blocking and jack-stands, shrink-wrap with vents and a zipper door so you can get aboard without tearing plastic.',
      },
      {
        heading: 'Spring commissioning',
        body: 'A flat-rate commissioning package brings your boat back to life: batteries on, fluids checked, bottom touched up, running gear inspected, sea trial with the tech who worked on her over the winter.',
      },
    ],
    pricing: [
      { label: 'Heated indoor', value: '$68 / ft' },
      { label: 'Covered outdoor', value: '$38 / ft' },
      { label: 'Shrink-wrap', value: '$22 / ft' },
      { label: 'Commission pkg.', value: 'from $950' },
    ],
  },
  {
    slug: 'rescue-safety',
    title: 'Rescue & Safety',
    tagline: 'On the water before the first boat leaves the dock.',
    summary:
      'Vessel assist, harbor patrol, and in-water emergency response throughout the season — hail us on VHF 16.',
    img: 'heroHarbor',
    Icon: LifeBuoy,
    bullets: ['On-water VHF 16', 'Vessel assist', 'Safety inspections', 'Weather hotline'],
    sections: [
      {
        heading: 'Response',
        body: 'A dedicated 26-foot response boat is in the water May through October, staffed from 6am to 10pm. Tows in the harbor and out to the bell; we coordinate with TowBoatUS beyond that.',
      },
      {
        heading: 'Inspections',
        body: 'Free US Coast Guard–equivalent safety inspections by appointment. Courtesy, no paperwork, done in fifteen minutes — we will tell you what we would fix if it were our boat.',
      },
      {
        heading: 'Weather',
        body: 'A harbor weather hotline is updated by 6am daily in season — wind, chop on the bar, and whether the breachway is a place you want to be that morning.',
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
