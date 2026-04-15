/**
 * American Dream Interactive Sales Experience
 * Central Constants & Configuration
 * All stats, copy, CTAs, and configuration values
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PROPERTY DATA
// Source: American Dream official data & public records
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const PROPERTY_STATS = {
  totalGLA: 3100000, // sq ft
  totalStores: 450,
  annualVisitors: 40000000,
  nickelodeonArea: 8, // acres
  nickelodeonAttractions: 35,
  dreamworksArea: 8, // acres
  dreamworksSlides: 40,
  amcScreens: 16,
  campusAcres: 450,
  regionalCatchment: 20000000, // people within 25 miles
  medianHHI: 85000, // median household income within 15 mi
  parkingSpaces: 17000,
  hotelRooms: 1200, // planned adjacent
  entertainmentPercent: 55, // % of space dedicated to entertainment
  retailPercent: 45, // % of space dedicated to retail
} as const;

export const LOCATION_DATA = {
  distanceFromNYC: { miles: 10, minutes: 20 },
  distanceFromJFK: { miles: 35, minutes: 45 },
  distanceFromEWR: { miles: 5, minutes: 10 },
  distanceFromLGA: { miles: 15, minutes: 25 },
  address: "1 American Dream Way, East Rutherford, NJ 07073",
  coordinates: { lat: 40.8119, lng: -74.0645 },
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// HERO CONTENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const HERO_CONTENT = {
  tagline: "40 Million Reasons To Be Here",
  subtitle: "The Second-Largest Shopping Mall in America. The First-Ever Entertainment Destination Like This.",
  ctaPrimary: "Explore the Property",
  ctaSecondary: "Contact Sales Team",
  videoUrl: "/videos/hero-aerial.mp4", // placeholder
  posterUrl: "/images/hero-poster.jpg", // placeholder
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// NAVIGATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const NAV_ITEMS = [
  { label: "Property", href: "#property", section: "property" },
  { label: "Retail", href: "#retail", section: "retail" },
  { label: "Luxury", href: "#luxury", section: "luxury" },
  { label: "Dining", href: "#dining", section: "dining" },
  { label: "Attractions", href: "#attractions", section: "attractions" },
  { label: "Events", href: "#events", section: "events" },
  { label: "Data", href: "#stats", section: "stats" },
  { label: "Contact", href: "#contact", section: "contact" },
] as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// RETAIL SECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const RETAIL_CATEGORIES = [
  {
    name: "Fashion & Apparel",
    storeCount: 180,
    highlight: "H&M, Zara, Uniqlo, Primark",
    avgSquareFeet: 8500,
  },
  {
    name: "Specialty Retail",
    storeCount: 120,
    highlight: "Sephora, MAC, LEGO Store",
    avgSquareFeet: 4200,
  },
  {
    name: "Luxury & Designer",
    storeCount: 45,
    highlight: "Hermès, Saint Laurent, Dolce & Gabbana",
    avgSquareFeet: 3800,
  },
  {
    name: "Sports & Athleisure",
    storeCount: 35,
    highlight: "Nike, Adidas, Lululemon",
    avgSquareFeet: 6500,
  },
  {
    name: "Electronics & Tech",
    storeCount: 25,
    highlight: "Microsoft Store, IT'SUGAR",
    avgSquareFeet: 5200,
  },
  {
    name: "Home & Lifestyle",
    storeCount: 45,
    highlight: "Restoration Hardware Gallery",
    avgSquareFeet: 7800,
  },
] as const;

export const RETAIL_ANCHOR_TENANTS = [
  { name: "Primark", squareFeet: 77000, floor: "Level 1-2" },
  { name: "Zara", squareFeet: 32000, floor: "Level 1" },
  { name: "H&M", squareFeet: 63000, floor: "Level 1-3" },
  { name: "Uniqlo", squareFeet: 28000, floor: "Level 2" },
] as const;

export const RETAIL_CONTENT = {
  headline: "450+ Brands. Zero Compromises.",
  subheadline: "From fast fashion to haute couture, capture audiences at every price point.",
  ctaLabel: "View Tenant Mix",
  ctaContext: "retail-leasing",
  videoUrl: "/videos/retail-montage.mp4",
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// LUXURY SECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const LUXURY_BRANDS = [
  { name: "Hermès", category: "Fashion House", squareFeet: 4200 },
  { name: "Saint Laurent", category: "Ready-to-Wear", squareFeet: 3800 },
  { name: "Dolce & Gabbana", category: "Luxury Fashion", squareFeet: 4500 },
  { name: "Moncler", category: "Outerwear", squareFeet: 3200 },
  { name: "Mulberry", category: "Accessories", squareFeet: 2800 },
  { name: "Tiffany & Co.", category: "Jewelry", squareFeet: 3500 },
] as const;

export const LUXURY_CONTENT = {
  headline: "The Luxury Codes",
  subheadline: "European flagship experiences. American Dream scale.",
  description: "Dedicated luxury wing featuring 45+ premium brands with custom architectural finishes, dedicated concierge services, and exclusive VIP shopping lounges.",
  ctaLabel: "Luxury Leasing Opportunities",
  ctaContext: "luxury-leasing",
  avgCustomerSpend: 1250,
  annualLuxuryRevenue: 125000000, // estimated
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// DINING SECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const DINING_CATEGORIES = [
  {
    name: "Fine Dining",
    count: 12,
    highlight: "Somewhere Nowhere NYC, Cipresso Mare",
    avgCheckSize: 85,
  },
  {
    name: "Fast Casual",
    count: 35,
    highlight: "Shake Shack, Chipotle, Sweetgreen",
    avgCheckSize: 18,
  },
  {
    name: "Food Hall",
    count: 1,
    highlight: "The Dining Terrace - 18 vendors",
    avgCheckSize: 22,
  },
  {
    name: "Quick Service",
    count: 28,
    highlight: "Starbucks, Dunkin', Jamba Juice",
    avgCheckSize: 12,
  },
  {
    name: "Dessert & Treats",
    count: 15,
    highlight: "Häagen-Dazs, Godiva, Magnolia Bakery",
    avgCheckSize: 15,
  },
] as const;

export const DINING_FEATURES = [
  "18,000 sq ft rooftop terrace with NYC skyline views",
  "400+ total seats across all F&B concepts",
  "Full liquor licenses available for upscale venues",
  "High-traffic positioning near attractions",
] as const;

export const DINING_CONTENT = {
  headline: "From Food Court to Fine Dining",
  subheadline: "91 concepts feeding 100,000 daily visitors.",
  ctaLabel: "F&B Leasing Info",
  ctaContext: "dining-leasing",
  totalConcepts: 91,
  totalSeats: 4200,
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ATTRACTIONS SECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const ATTRACTIONS = [
  {
    name: "Nickelodeon Universe Theme Park",
    description: "Nation's first indoor Nickelodeon theme park featuring 35 rides and attractions",
    size: "8.5 acres",
    capacity: 5000,
    attractions: 35,
    highlights: [
      "Shellraiser roller coaster",
      "Slime Streak launch coaster",
      "PAW Patrol Adventure Bay",
      "SpongeBob SquarePants Bikini Bottom",
    ],
    annualVisitors: 4000000,
  },
  {
    name: "DreamWorks Water Park",
    description: "North America's largest indoor water park with year-round 84° water",
    size: "8.5 acres",
    capacity: 3000,
    slides: 40,
    highlights: [
      "Madagascar Rain Forest",
      "Shrek's Swamp",
      "Trolls Treehouse",
      "Wave pool & lazy river",
    ],
    annualVisitors: 2500000,
  },
  {
    name: "The Rink at American Dream",
    description: "NHL-regulation ice rink hosting public skating, hockey leagues, and special events",
    size: "200' x 85' NHL regulation",
    capacity: 2000,
    features: [
      "Professional-grade ice surface",
      "Skate rentals & pro shop",
      "Private event hosting",
      "Figure skating & hockey programs",
    ],
  },
  {
    name: "Big SNOW American Dream",
    description: "North America's first indoor real-snow ski slope",
    size: "16 stories, 180,000 sq ft",
    capacity: 1500,
    features: [
      "1-acre snow play area",
      "Ski & snowboard lessons",
      "Snow tubing",
      "Alpine-themed lodge & bar",
    ],
  },
  {
    name: "AMC Theatres",
    description: "Premium movie experience with 16 screens including IMAX and Dolby Cinema",
    screens: 16,
    seats: 2800,
    features: [
      "IMAX with Laser",
      "Dolby Cinema",
      "Reserved seating",
      "Full bar & premium concessions",
    ],
  },
  {
    name: "The Observation Wheel",
    description: "183-foot observation wheel offering panoramic views of NYC skyline",
    height: 183,
    capacity: 1800, // per hour
    features: [
      "27 climate-controlled gondolas",
      "VIP gondolas available",
      "360° views of Manhattan",
      "12-minute rotation",
    ],
  },
] as const;

export const ATTRACTIONS_CONTENT = {
  headline: "The Entertainment Anchors",
  subheadline: "55% entertainment, 45% retail. This isn't a mall—it's a destination.",
  ctaLabel: "Partnership Opportunities",
  ctaContext: "attractions-sponsorship",
  totalSquareFeet: 850000, // dedicated to attractions
  avgDwellTime: 4.5, // hours
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EVENTS SECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const EVENT_SPACES = [
  {
    name: "The Atrium",
    capacity: 5000,
    size: 45000, // sq ft
    features: ["Triple-height ceilings", "Natural light", "Built-in AV", "Modular staging"],
    bestFor: ["Product launches", "Brand activations", "Fashion shows", "Corporate events"],
  },
  {
    name: "Garden Terrace",
    capacity: 800,
    size: 12000,
    features: ["Outdoor/indoor hybrid", "Retractable roof", "NYC skyline views", "Full catering kitchen"],
    bestFor: ["Weddings", "Galas", "VIP receptions", "Private dinners"],
  },
  {
    name: "Nickelodeon Universe - Buyout",
    capacity: 5000,
    size: 370000,
    features: ["After-hours exclusive access", "All rides & attractions", "Custom branding opportunities", "Food & beverage packages"],
    bestFor: ["Corporate parties", "Team building", "Brand experiences", "Family days"],
  },
  {
    name: "Conference Center",
    capacity: 1200,
    size: 25000,
    features: ["12 breakout rooms", "Main ballroom (800 capacity)", "Green rooms", "Broadcast capabilities"],
    bestFor: ["Conferences", "Tradeshows", "Meetings", "Training sessions"],
  },
] as const;

export const EVENT_SERVICES = [
  "Full-service event planning team",
  "In-house AV production & tech support",
  "Preferred catering partners",
  "Dedicated event parking",
  "Security & crowd management",
  "Load-in/load-out logistics",
] as const;

export const EVENTS_CONTENT = {
  headline: "The Event Ecosystem",
  subheadline: "200+ annual events. Unlimited activation potential.",
  ctaLabel: "Book an Event",
  ctaContext: "events-inquiry",
  annualEvents: 200,
  maxCapacity: 5000,
} as const;

export const PAST_EVENTS = [
  {
    name: "New York Fashion Week Pop-Up",
    date: "September 2023",
    attendance: 3500,
    type: "Fashion Show",
  },
  {
    name: "NBA All-Star Weekend Activation",
    date: "February 2024",
    attendance: 8000,
    type: "Brand Activation",
  },
  {
    name: "Nickelodeon SlimeFest",
    date: "Summer 2023",
    attendance: 12000,
    type: "Festival",
  },
] as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// STATS & ANALYTICS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const VISITOR_DEMOGRAPHICS = {
  ageGroups: [
    { range: "18-24", percentage: 22 },
    { range: "25-34", percentage: 28 },
    { range: "35-44", percentage: 25 },
    { range: "45-54", percentage: 15 },
    { range: "55+", percentage: 10 },
  ],
  genderSplit: {
    female: 58,
    male: 40,
    other: 2,
  },
  householdIncome: [
    { range: "$50k-$75k", percentage: 18 },
    { range: "$75k-$100k", percentage: 28 },
    { range: "$100k-$150k", percentage: 32 },
    { range: "$150k+", percentage: 22 },
  ],
  partySize: {
    solo: 8,
    couple: 25,
    family: 52,
    group: 15,
  },
} as const;

export const TRAFFIC_PATTERNS = {
  peakDays: ["Saturday", "Sunday", "Holidays"],
  peakHours: ["12:00 PM - 3:00 PM", "6:00 PM - 9:00 PM"],
  avgDwellTime: 4.5, // hours
  avgVisitsPerYear: 2.3,
  repeatVisitorRate: 68, // percentage
} as const;

export const ECONOMIC_IMPACT = {
  annualRevenue: 1200000000, // estimated
  jobsCreated: 16000,
  taxRevenue: 85000000, // annual to NJ
  constructionCost: 5000000000,
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONTACT & CTA CONTEXTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const CONTACT_CONTEXTS = {
  "retail-leasing": {
    title: "Retail Leasing Inquiry",
    description: "Join 450+ brands at America's premier retail destination",
    team: "Retail Leasing Team",
    phone: "+1 (201) 935-8500",
    email: "leasing@americandream.com",
  },
  "luxury-leasing": {
    title: "Luxury Leasing Inquiry",
    description: "Premium positioning in our dedicated luxury wing",
    team: "Luxury Division",
    phone: "+1 (201) 935-8501",
    email: "luxury@americandream.com",
  },
  "dining-leasing": {
    title: "F&B Leasing Inquiry",
    description: "Food & beverage opportunities across all price points",
    team: "F&B Leasing Team",
    phone: "+1 (201) 935-8502",
    email: "dining@americandream.com",
  },
  "attractions-sponsorship": {
    title: "Attractions Partnership",
    description: "Sponsorship & partnership opportunities across our entertainment anchors",
    team: "Partnerships Team",
    phone: "+1 (201) 935-8503",
    email: "partnerships@americandream.com",
  },
  "events-inquiry": {
    title: "Events & Activations",
    description: "Book your next event at New Jersey's premier venue",
    team: "Events Team",
    phone: "+1 (201) 935-8504",
    email: "events@americandream.com",
  },
  general: {
    title: "General Inquiry",
    description: "Get in touch with our sales team",
    team: "Sales Team",
    phone: "+1 (201) 935-8500",
    email: "sales@americandream.com",
  },
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FOOTER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const FOOTER_LINKS = {
  visit: [
    { label: "Plan Your Visit", href: "/visit" },
    { label: "Hours & Directions", href: "/hours" },
    { label: "Parking Info", href: "/parking" },
    { label: "Accessibility", href: "/accessibility" },
  ],
  business: [
    { label: "Leasing Opportunities", href: "/leasing" },
    { label: "Events & Meetings", href: "/events" },
    { label: "Corporate Partnerships", href: "/partnerships" },
    { label: "Advertising", href: "/advertising" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Press", href: "/press" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
} as const;

export const SOCIAL_LINKS = [
  { platform: "Instagram", href: "https://instagram.com/americandream", handle: "@americandream" },
  { platform: "Facebook", href: "https://facebook.com/americandream", handle: "American Dream" },
  { platform: "Twitter", href: "https://twitter.com/americandream", handle: "@americandream" },
  { platform: "TikTok", href: "https://tiktok.com/@americandream", handle: "@americandream" },
  { platform: "LinkedIn", href: "https://linkedin.com/company/american-dream", handle: "American Dream" },
] as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ANIMATION & INTERACTION SETTINGS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const ANIMATION_CONFIG = {
  defaultDuration: 0.6,
  defaultEase: [0.22, 1, 0.36, 1], // cubic-bezier easing
  staggerDelay: 0.1,
  scrollThreshold: 0.2, // percentage of element in viewport to trigger
  counterAnimationDuration: 2.5, // seconds
  videoAutoplayThreshold: 0.5, // percentage of video in viewport to autoplay
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1920,
} as const;
