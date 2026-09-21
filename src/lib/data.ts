export const IMG = {
  logo: "https://image.qwenlm.ai/generated-images/05c45b86-5c74-42af-9409-0ca6c7485c09/_result.png",
  farm: "https://image.qwenlm.ai/generated-images/7f65aace-fa6f-4d91-988b-baefe680d283/_result.png",
  rooftop:
    "https://image.qwenlm.ai/generated-images/34e3aa6d-3b94-4b90-b6a4-88a6b429f88b/_result.png",
  bess: "https://image.qwenlm.ai/generated-images/9cc93ba8-cdbe-475d-83a5-56d0786c8cd6/_result.png",
  civil:
    "https://image.qwenlm.ai/generated-images/b3b19080-fa90-4d62-9693-7af8891b630e/_result.png",
  substation:
    "https://image.qwenlm.ai/generated-images/752dd1d4-92b2-4dc7-b68d-3b11d1f7cb15/_result.png",
  team: "https://image.qwenlm.ai/generated-images/5cb56f13-a15a-4cc8-942a-ba600de854af/_result.png",
  bessTwilight:
    "https://image.qwenlm.ai/generated-images/3ea44f30-ca12-4696-ab8f-683617ae08e4/_result.png",
  solarClose:
    "https://image.qwenlm.ai/generated-images/a7e95596-e158-4751-ab61-c0bf13d10748/_result.png",
  wind: "https://image.qwenlm.ai/generated-images/b4863d2c-cb24-42ad-977a-9ffbb48b52fc/_result.png",
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
  img: string;
}

export const SERVICES: Service[] = [
  {
    id: "solar-pv",
    title: "Solar PV Installation",
    blurb: "Rooftop and ground-mount arrays, designed and installed for a 30-year service life.",
    img: IMG.rooftop,
  },
  {
    id: "solar-farms",
    title: "Utility-Scale Solar Farms",
    blurb: "Full EPC delivery of ground-mount parks — from land consent to energisation.",
    img: IMG.farm,
  },
  {
    id: "bess",
    title: "Battery Energy Storage",
    blurb: "Grid-scale and behind-the-meter storage systems, from pads to commissioning.",
    img: IMG.bess,
  },
  {
    id: "electrical",
    title: "Electrical Systems",
    blurb: "LV/HV distribution, switchgear, SCADA and private fibre infrastructure.",
    img: IMG.substation,
  },
  {
    id: "civil",
    title: "Civil Engineering",
    blurb: "Earthworks, drainage, access roads and attenuation for renewable assets.",
    img: IMG.civil,
  },
  {
    id: "consultancy",
    title: "Renewable Consultancy",
    blurb: "Feasibility, yield modelling and route-to-market advice for landowners and developers.",
    img: IMG.team,
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
      { label: "Programme", value: "11 months" },
    ],
    outcome: "Energised six weeks ahead of grid deadline.",
  },
  {
    index: "P-02",
    sector: "C&I Rooftop Array",
    title: "Meridian Business Park",
    location: "Croydon, South London",
    img: IMG.rooftop,
    specs: [
      { label: "Capacity", value: "3.8 MWp" },
      { label: "Programme", value: "14 weeks" },
    ],
    outcome: "Cuts the estate's imported power by 61%.",
  },
  {
    index: "P-03",
    sector: "Battery Storage",
    title: "Lea Valley BESS Facility",
    location: "Enfield, North London",
    img: IMG.bessTwilight,
    specs: [
      { label: "Power / Energy", value: "20 MW / 40 MWh" },
      { label: "Programme", value: "9 months" },
    ],
    outcome: "Stacking frequency response + arbitrage from month one.",
  },
];

export const TICKER_ITEMS = [
  "Solar PV",
  "Utility-Scale Farms",
  "Battery Storage",
  "Civil Engineering",
  "Electrical Systems",
  "Consultancy",
];

export const ACCREDITATIONS = [
  "MCS Certified",
  "NICEIC Approved",
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
];

export interface ImpactRow {
  value: string;
  label: string;
  pct: number;
  tone: "cyan" | "green";
}

export const IMPACT: ImpactRow[] = [
  { value: "36,400 t", label: "CO₂e avoided per year across the fleet", pct: 82, tone: "green" },
  { value: "91,000", label: "UK homes' annual demand matched by our arrays", pct: 68, tone: "cyan" },
  { value: "46 ha", label: "pollinator habitat planted beneath panels", pct: 45, tone: "green" },
  { value: "96%", label: "panel mass recycled at end of life", pct: 96, tone: "cyan" },
];
