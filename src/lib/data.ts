export const IMG = {
  farm: "https://image.qwenlm.ai/generated-images/7f65aace-fa6f-4d91-988b-baefe680d283/_result.png",
  rooftop:
    "https://image.qwenlm.ai/generated-images/34e3aa6d-3b94-4b90-b6a4-88a6b429f88b/_result.png",
  bess: "https://image.qwenlm.ai/generated-images/9cc93ba8-cdbe-475d-83a5-56d0786c8cd6/_result.png",
  civil:
    "https://image.qwenlm.ai/generated-images/b3b19080-fa90-4d62-9693-7af8891b630e/_result.png",
  maintenance:
    "https://image.qwenlm.ai/generated-images/ff5e0ffb-f6bb-42d8-a18c-398b81cb74b5/_result.png",
  substation:
    "https://image.qwenlm.ai/generated-images/752dd1d4-92b2-4dc7-b68d-3b11d1f7cb15/_result.png",
};

export const BRAND = {
  name: "Simco Renewables",
  legal: "Simco Renewables Solutions Ltd",
  email: "sales@simcorenewablesolutions.org.uk",
  phoneDisplay: "+44 (0)7778 790 229",
  phoneHref: "tel:+447778790229",
  city: "London, United Kingdom",
  coordinates: "51.5072° N · 0.1276° W",
};

export interface Service {
  id: string;
  title: string;
  blurb: string;
  tags: string[];
  img: string;
}

export const SERVICES: Service[] = [
  {
    id: "solar-pv",
    title: "Solar PV Installation & Maintenance",
    blurb:
      "Rooftop and ground-mount arrays, designed, installed and looked after for a 30-year service life.",
    tags: ["C&I Rooftops", "Domestic", "O&M"],
    img: IMG.rooftop,
  },
  {
    id: "solar-farms",
    title: "Utility-Scale Solar Farms",
    blurb:
      "EPC delivery of ground-mount parks — from land consent and grid offers to full energisation.",
    tags: ["EPC", "Grid Offers", "40 MW+"],
    img: IMG.farm,
  },
  {
    id: "bess",
    title: "Battery Energy Storage (BESS)",
    blurb:
      "Grid-scale and behind-the-meter storage, from container pads and HVAC to stack commissioning.",
    tags: ["Grid-Scale", "C&I", "Revenue Stacking"],
    img: IMG.bess,
  },
  {
    id: "structures",
    title: "Solar Structures & Panel Mounting",
    blurb:
      "Bespoke racking — ballasted, fixed-tilt and carport systems engineered to UK wind loading.",
    tags: ["Racking", "Ballasted", "Carports"],
    img: IMG.rooftop,
  },
  {
    id: "electrical",
    title: "Electrical & Telecom Systems",
    blurb:
      "LV/HV distribution, switchgear, SCADA and private fibre that keep every asset observable.",
    tags: ["LV / HV", "SCADA", "Fibre"],
    img: IMG.substation,
  },
  {
    id: "mechanical",
    title: "Electrical & Mechanical Works",
    blurb:
      "Cable infrastructure, containment, plant rooms and the mechanical balance-of-plant in between.",
    tags: ["BoP", "Containment", "Plant Rooms"],
    img: IMG.maintenance,
  },
  {
    id: "civil",
    title: "Civil Engineering",
    blurb:
      "Earthworks, drainage, access roads and attenuation designed around the energy asset, not against it.",
    tags: ["Earthworks", "Drainage", "Access"],
    img: IMG.civil,
  },
  {
    id: "groundworks",
    title: "Groundworks & Concrete Foundations",
    blurb:
      "Piling, trenching and reinforced foundations poured to millimetre tolerances, on programme.",
    tags: ["Piling", "Foundations", "Trenching"],
    img: IMG.civil,
  },
  {
    id: "consultancy",
    title: "Renewable Energy Consultancy",
    blurb:
      "Feasibility, yield modelling and route-to-market advice for landowners, developers and funds.",
    tags: ["Feasibility", "Yield", "PPAs"],
    img: IMG.maintenance,
  },
  {
    id: "pm",
    title: "Project Management & EPC",
    blurb:
      "One accountable team from gate-one to grid — with transparent controls, cost and reporting.",
    tags: ["EPCM", "Controls", "Reporting"],
    img: IMG.farm,
  },
  {
    id: "hs",
    title: "Health & Safety Consultancy",
    blurb:
      "CDM 2015 support, RAMS, audits and site supervision built on a zero-harm culture.",
    tags: ["CDM 2015", "RAMS", "Audits"],
    img: IMG.substation,
  },
  {
    id: "efficiency",
    title: "Energy Efficiency Solutions",
    blurb:
      "Metering, LED, HVAC controls and fabric retrofits that cut demand before generation covers it.",
    tags: ["Retrofit", "Metering", "ISO 50001"],
    img: IMG.bess,
  },
];

export interface Project {
  index: string;
  sector: string;
  title: string;
  location: string;
  img: string;
  specs: { label: string; value: string }[];
  outcome: string;
}

export const PROJECTS: Project[] = [
  {
    index: "P-01",
    sector: "Utility-Scale Solar",
    title: "Thames Gateway Solar Park",
    location: "Bexley, Greater London",
    img: IMG.farm,
    specs: [
      { label: "Capacity", value: "42 MWp" },
      { label: "Panels", value: "76,400" },
      { label: "Programme", value: "11 months" },
      { label: "Scope", value: "Full EPC + civils" },
    ],
    outcome: "Energised six weeks ahead of grid deadline, LCOE 9% under model.",
  },
  {
    index: "P-02",
    sector: "C&I Rooftop Array",
    title: "Meridian Business Park Rooftops",
    location: "Croydon, South London",
    img: IMG.rooftop,
    specs: [
      { label: "Capacity", value: "3.8 MWp" },
      { label: "Roofs", value: "9 blocks" },
      { label: "Programme", value: "14 weeks" },
      { label: "Scope", value: "Design, install, O&M" },
    ],
    outcome: "Cuts the estate's imported power by 61% — 25-yr private-wire PPA.",
  },
  {
    index: "P-03",
    sector: "Battery Storage",
    title: "Lea Valley BESS Facility",
    location: "Enfield, North London",
    img: IMG.bess,
    specs: [
      { label: "Power / Energy", value: "20 MW / 40 MWh" },
      { label: "Containers", value: "10 units" },
      { label: "Programme", value: "9 months" },
      { label: "Scope", value: "Civils, HV, commissioning" },
    ],
    outcome: "Stacking frequency response + arbitrage from month one.",
  },
  {
    index: "P-04",
    sector: "Grid Infrastructure",
    title: "M4 Corridor Network Upgrade",
    location: "Heathrow fringe, West London",
    img: IMG.substation,
    specs: [
      { label: "Voltage", value: "11 kV / 400 V" },
      { label: "Route", value: "14 km cable" },
      { label: "Programme", value: "7 months" },
      { label: "Scope", value: "Electrical + telecoms" },
    ],
    outcome: "Grid headroom unlocked for 6,000 homes' worth of new load.",
  },
];

export interface Stat {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 312, suffix: " MWp", label: "installed capacity delivered" },
  { value: 148, suffix: "", label: "projects handed over" },
  { value: 98.4, decimals: 1, suffix: "%", label: "fleet availability, 12-month" },
  { value: 36, suffix: " kt", label: "CO₂e avoided every year" },
];

export interface Step {
  num: string;
  title: string;
  body: string;
}

export const STEPS: Step[] = [
  {
    num: "01",
    title: "Site & Feasibility",
    body: "Topographical and geotech surveys, irradiance and yield modelling, grid capacity checks and a bankable feasibility pack within three weeks.",
  },
  {
    num: "02",
    title: "Design & Consents",
    body: "Full electrical and civil engineering, DNO applications, planning and environmental consents — managed end-to-end by one team.",
  },
  {
    num: "03",
    title: "Civils & Structures",
    body: "Groundworks, piling, drainage and racking erected to millimetre tolerances, with health & safety supervision on every shift.",
  },
  {
    num: "04",
    title: "Electrical & Commissioning",
    body: "LV/HV installation, SCADA and telecoms, then G99-compliant testing and energisation with your DNO witness present.",
  },
  {
    num: "05",
    title: "O&M & Optimisation",
    body: "24/7 remote monitoring, preventive maintenance windows and availability guarantees that keep yield where the model said it would be.",
  },
];

export interface ImpactRow {
  value: string;
  label: string;
  pct: number;
  tone: "amber" | "leaf";
}

export const IMPACT: ImpactRow[] = [
  { value: "36,400 t", label: "CO₂e avoided per year across the fleet", pct: 82, tone: "leaf" },
  { value: "91,000", label: "UK homes' annual demand matched by our arrays", pct: 68, tone: "amber" },
  { value: "46 ha", label: "pollinator habitat planted beneath panels", pct: 45, tone: "leaf" },
  { value: "96%", label: "panel mass recycled at end of life", pct: 96, tone: "amber" },
];

export interface Insight {
  date: string;
  tag: string;
  title: string;
  img?: string;
}

export const INSIGHTS: Insight[] = [
  {
    date: "Feb 2026",
    tag: "Guide",
    title: "G99 in plain English — connecting your array to the UK grid",
    img: IMG.substation,
  },
  {
    date: "Jan 2026",
    tag: "Market Note",
    title: "Why batteries are the new baseload: stacking revenue streams in 2026",
  },
  {
    date: "Dec 2025",
    tag: "Field Report",
    title: "Biodiversity under the panels — designing solar farms wildlife wants",
  },
];

export const TICKER_ITEMS = [
  "Solar PV Installation",
  "Utility-Scale Solar Farms",
  "Battery Storage · BESS",
  "Civil Engineering",
  "Groundworks & Foundations",
  "LV / HV Electrical",
  "Telecom Systems",
  "Health & Safety",
  "O&M Contracts",
  "Energy Efficiency",
];

export const ACCREDITATIONS = [
  "MCS Certified",
  "NICEIC Approved",
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
  "SafeContractor",
  "G99 Compliant",
  "CHAS Elite",
];
