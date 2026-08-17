// Vista Jakkur — complete site data and content
// Design: Architectural Precision — monolithic, editorial real estate aesthetic

export const COMPANY = {
  name: "Vista Spaces Jakkur Residency Private Limited",
  shortName: "Vista Spaces",
  cin: "U70109KA2020PTC135149",
  founded: "22 June 2020",
  status: "Active",
  email: "info@vistajakkur.site",
  phone: "+91-965-558-5402",
  address: {
    street: "3rd Floor, Touchstone, No. 2, B Block, Main Guard Cross Road, Mahatma Gandhi Road",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560001",
    country: "India",
  },
  fullAddress: "3rd Floor, Touchstone, No. 2, B Block, Main Guard Cross Road, Mahatma Gandhi Road, Bengaluru, Karnataka – 560001, India",
  businessHours: "Monday – Saturday: 9:30 AM – 6:00 PM | Sunday: By Appointment Only",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Company Profile", href: "/about#company-profile" },
      { label: "Vision & Mission", href: "/about#vision-mission" },
      { label: "Why Choose Us", href: "/about#why-choose-us" },
      { label: "Leadership", href: "/about#leadership" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Residential Development", href: "/services#residential" },
      { label: "Commercial Development", href: "/services#commercial" },
      { label: "Investment Advisory", href: "/services#investment" },
      { label: "Asset Management", href: "/services#asset-management" },
      { label: "Sustainability", href: "/services#sustainability" },
      { label: "Infrastructure", href: "/services#infrastructure" },
      { label: "Digital Marketing", href: "/services#digital-marketing" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "All Projects", href: "/projects" },
      { label: "Ongoing", href: "/projects#ongoing" },
      { label: "Completed", href: "/projects#completed" },
      { label: "Gallery", href: "/projects#gallery" },
    ],
  },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const VISION_MISSION = {
  vision:
    "To become one of India's most trusted real estate developers by creating sustainable communities, innovative developments, and world-class living experiences that set new benchmarks in quality, design, and environmental responsibility.",
  missionPoints: [
    "Deliver premium real estate developments that exceed expectations",
    "Build sustainable communities that harmonize with nature",
    "Maintain the highest construction quality and safety standards",
    "Create long-term investment value for our stakeholders",
    "Ensure complete customer satisfaction at every stage",
    "Promote environmentally responsible development practices",
    "Develop future-ready infrastructure for tomorrow's needs",
  ],
};

export const SERVICES = [
  {
    id: "residential",
    title: "Residential Development",
    description:
      "Crafting exceptional living spaces that blend luxury, comfort, and sustainability. From luxury apartments to gated communities, we create homes that inspire.",
    icon: "Home",
    items: [
      "Luxury Apartments",
      "Premium Villas",
      "Residential Townships",
      "Gated Communities",
      "Affordable Housing",
      "High-Rise Residential Projects",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Development",
    description:
      "Building world-class commercial spaces designed for productivity, collaboration, and growth. Our developments set new standards in workplace excellence.",
    icon: "Building2",
    items: [
      "Office Spaces",
      "IT Parks",
      "Business Centers",
      "Retail Developments",
      "Shopping Complexes",
      "Mixed-Use Projects",
    ],
  },
  {
    id: "investment",
    title: "Real Estate Investment",
    description:
      "Expert investment advisory services that maximize returns while minimizing risk. We help clients make informed property investment decisions.",
    icon: "TrendingUp",
    items: [
      "Investment Advisory",
      "Property Investment",
      "Land Acquisition",
      "Asset Growth",
      "Real Estate Consulting",
    ],
  },
  {
    id: "asset-management",
    title: "Asset & Property Management",
    description:
      "Comprehensive property management services that optimize asset value, ensure tenant satisfaction, and maintain peak operational efficiency.",
    icon: "Briefcase",
    items: [
      "Property Leasing",
      "Commercial Leasing",
      "Facility Management",
      "Asset Optimization",
      "Tenant Management",
    ],
  },
  {
    id: "sustainability",
    title: "Sustainable Development",
    description:
      "Pioneering green building practices that reduce environmental impact while enhancing living quality. Every project integrates eco-friendly solutions.",
    icon: "Leaf",
    items: [
      "Green Buildings",
      "Smart Communities",
      "Eco-Friendly Construction",
      "Water Conservation",
      "Energy Efficient Buildings",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure Development",
    description:
      "Developing robust urban infrastructure that supports thriving communities. From roads to utilities, we build the foundations of progress.",
    icon: "Landmark",
    items: [
      "Urban Infrastructure",
      "Road Development",
      "Utility Infrastructure",
      "Landscape Development",
      "Public Spaces",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Video Promotion",
    description:
      "Extending business visibility through strategic digital marketing, YouTube video promotion, and carefully targeted company-video advertising campaigns.",
    icon: "Youtube",
    items: [
      "YouTube Video Promotion",
      "Company Video Advertising",
      "Video Campaign Strategy",
      "Audience Targeting & Distribution",
      "YouTube Channel Optimisation",
      "Campaign Performance Reporting",
    ],
  },
];

export const PROJECTS = [
  {
    id: "vista-verdant-township",
    name: "Vista Verdant Township",
    type: "Luxury Residential Township",
    category: "Residential",
    status: "Ongoing",
    location: "Jakkur, Bengaluru",
    image: "/images/vj-community.webp",
    overview:
      "A sprawling luxury township spread across 25 acres, featuring 500+ premium residences with world-class amenities, lush green landscapes, and smart home technology.",
    highlights: [
      "500+ Premium Residences",
      "25 Acres Master-Planned Community",
      "Smart Home Integration",
      "Clubhouse & Sports Facilities",
      "Green Certified Design",
    ],
    sustainability: [
      "Rainwater Harvesting",
      "Solar Energy Systems",
      "Native Landscaping",
      "EV Charging Stations",
      "Waste Segregation Systems",
    ],
  },
  {
    id: "vista-skyline-tower",
    name: "Vista Skyline Tower",
    type: "Premium Apartment Project",
    category: "Residential",
    status: "Ongoing",
    location: "Hebbal, Bengaluru",
    image: "/images/vj-residential.webp",
    overview:
      "A landmark 40-story residential tower offering panoramic city views, premium amenities, and an unparalleled living experience in the heart of Bengaluru's premium corridor.",
    highlights: [
      "40 Stories of Luxury",
      "Panoramic City Views",
      "Infinity Pool & Sky Lounge",
      "Concierge Services",
      "Premium Interior Finishes",
    ],
    sustainability: [
      "Double-Glazed Windows",
      "Energy-Efficient HVAC",
      "Green Rooftop Garden",
      "LED Lighting Systems",
      "Greywater Recycling",
    ],
  },
  {
    id: "vista-commerce-plaza",
    name: "Vista Commerce Plaza",
    type: "Commercial Office Tower",
    category: "Commercial",
    status: "Completed",
    location: "MG Road, Bengaluru",
    image: "/images/vj-commercial.webp",
    overview:
      "A Grade-A commercial office tower featuring 350,000 sq ft of premium workspace, advanced building systems, and LEED Gold certification.",
    highlights: [
      "350,000 Sq Ft Premium Workspace",
      "LEED Gold Certified",
      "100% Power Backup",
      "Smart Building Management",
      "Premium Lobby & Common Areas",
    ],
    sustainability: [
      "LEED Gold Certification",
      "Solar Panel Installation",
      "Water Recycling Plant",
      "Natural Ventilation Design",
      "Energy Monitoring Systems",
    ],
  },
  {
    id: "vista-retail-hub",
    name: "Vista Retail Hub",
    type: "Retail Complex",
    category: "Commercial",
    status: "Completed",
    location: "Whitefield, Bengaluru",
    image: "/images/vj-community.webp",
    overview:
      "A vibrant mixed-use retail complex featuring premium retail outlets, dining experiences, entertainment zones, and ample parking — designed as Bengaluru's next lifestyle destination.",
    highlights: [
      "500+ Retail Outlets",
      "Food Court & Fine Dining",
      "Entertainment Zones",
      "Multi-Level Parking",
      "Central Open-Air Plaza",
    ],
    sustainability: [
      "Green Roof Design",
      "Natural Daylighting",
      "Rainwater Collection",
      "Electric Vehicle Charging",
      "Sustainable Materials",
    ],
  },
  {
    id: "vista-mixed-district",
    name: "Vista Mixed District",
    type: "Mixed-Use Development",
    category: "Mixed-Use",
    status: "Ongoing",
    location: "Kannur, Bengaluru",
    image: "/images/vj-hero-architecture.webp",
    overview:
      "A landmark mixed-use development integrating residential towers, commercial offices, retail spaces, and public parks into a cohesive urban ecosystem.",
    highlights: [
      "Integrated Urban Ecosystem",
      "Residential + Commercial + Retail",
      "Public Park & Green Corridors",
      "Pedestrian-First Design",
      "Smart City Infrastructure",
    ],
    sustainability: [
      "Integrated Green Spaces",
      "District Energy System",
      "Smart Water Management",
      "Biodiversity Corridors",
      "Zero-Waste Target",
    ],
  },
  {
    id: "vista-green-enclave",
    name: "Vista Green Enclave",
    type: "Smart Residential Community",
    category: "Residential",
    status: "Ongoing",
    location: "Jakkur, Bengaluru",
    image: "/images/vj-residential.webp",
    overview:
      "Bengaluru's first fully smart residential community with IoT-enabled homes, automated security, renewable energy systems, and comprehensive digital services.",
    highlights: [
      "IoT-Enabled Smart Homes",
      "Automated Security Systems",
      "Community App & Services",
      "Shared Renewable Energy",
      "Digital Concierge",
    ],
    sustainability: [
      "Solar Rooftop on Every Unit",
      "Smart Energy Management",
      "Automated Irrigation",
      "Composting Systems",
      "Air Quality Monitoring",
    ],
  },
  {
    id: "vista-eco-tower",
    name: "Vista Eco Tower",
    type: "Sustainable Green Building",
    category: "Commercial",
    status: "Completed",
    location: "Electronics City, Bengaluru",
    image: "/images/vj-commercial.webp",
    overview:
      "India's most sustainable commercial building — a living tower where architecture and nature merge seamlessly. Featuring vertical gardens, net-zero energy systems, and biophilic design.",
    highlights: [
      "Net-Zero Energy Building",
      "Vertical Garden Facade",
      "Biophilic Interior Design",
      "Living Walls & Water Features",
      "Platinum Green Rating",
    ],
    sustainability: [
      "Net-Zero Energy",
      "100% Renewable Power",
      "Rainwater Harvesting",
      "Organic Waste Processing",
      "Native Plant Restoration",
    ],
  },
];

export const WHY_CHOOSE_US = [
  { title: "Premium Construction Quality", description: "Every project meets the highest standards of construction excellence with superior materials and craftsmanship." },
  { title: "Sustainable Development", description: "Green building practices and environmental responsibility are embedded in every aspect of our developments." },
  { title: "Innovative Architecture", description: "Award-winning design teams create spaces that are both aesthetically stunning and functionally superior." },
  { title: "Timely Project Delivery", description: "Our proven project management ensures on-time delivery without compromising on quality." },
  { title: "Transparent Business Practices", description: "Complete transparency in pricing, timelines, and project progress with regular stakeholder updates." },
  { title: "Customer-Centric Approach", description: "Every decision is guided by our commitment to exceeding customer expectations and ensuring satisfaction." },
  { title: "Experienced Team", description: "A seasoned team of architects, engineers, and project managers with decades of combined experience." },
  { title: "Smart Urban Planning", description: "Future-ready communities designed with intelligent infrastructure and technology integration." },
  { title: "Long-Term Investment Value", description: "Projects designed to appreciate in value, offering excellent returns for investors and homeowners alike." },
  { title: "Trusted Development Partner", description: "Recognized as a reliable partner by investors, corporate clients, and government bodies across India." },
];

export const INDUSTRIES = [
  "Residential",
  "Commercial",
  "Corporate",
  "Hospitality",
  "Retail",
  "Healthcare",
  "Education",
  "Government",
  "Industrial",
  "Investment Sector",
  "Digital & Media",
];

export const STATS = [
  { value: "15+", label: "Active Projects" },
  { value: "5,000+", label: "Homes Delivered" },
  { value: "25", label: "Years Combined Experience" },
  { value: "98%", label: "Customer Satisfaction" },
];

export const DEVELOPMENT_PROCESS = [
  { step: "01", title: "Vision & Planning", description: "Comprehensive market research, site analysis, and master planning to create a development blueprint that balances innovation, sustainability, and market demand." },
  { step: "02", title: "Design & Innovation", description: "Our design team crafts architectural concepts that merge aesthetic excellence with functional brilliance, incorporating cutting-edge sustainable technologies." },
  { step: "03", title: "Engineering & Construction", description: "Precision engineering and quality construction using premium materials, advanced techniques, and rigorous quality control at every stage." },
  { step: "04", title: "Quality Assurance", description: "Multi-layer quality inspection protocols, third-party certifications, and continuous monitoring ensure every project meets our exacting standards." },
  { step: "05", title: "Delivery & Handover", description: "Seamless handover process with comprehensive documentation, warranty support, and post-delivery customer care services." },
];

export const SUSTAINABILITY_PILLARS = [
  { title: "Green Building Practices", description: "LEED and IGBC certified designs with energy-efficient systems, sustainable materials, and minimal carbon footprint." },
  { title: "Rainwater Harvesting", description: "Comprehensive rainwater collection and recharge systems that reduce dependence on municipal water supply." },
  { title: "Solar Energy Integration", description: "Rooftop and facade solar installations providing clean renewable energy to power common areas and reduce costs." },
  { title: "Smart Energy Management", description: "IoT-enabled energy monitoring and optimization systems that reduce consumption while maintaining comfort." },
  { title: "Water Conservation", description: "Greywater recycling, efficient fixtures, and landscape irrigation systems that minimize water wastage." },
  { title: "Waste Management", description: "On-site composting, recycling facilities, and waste-to-energy systems for zero-landfill operations." },
  { title: "Sustainable Landscaping", description: "Native plant species, bio-retention areas, and green corridors that support local biodiversity and reduce maintenance." },
];

export const QUALITY_SAFETY = [
  { title: "Quality Assurance", description: "Multi-stage quality inspection protocols with third-party verification at every construction phase." },
  { title: "Engineering Excellence", description: "Structural designs that exceed safety codes, using advanced engineering analysis and simulation tools." },
  { title: "Construction Standards", description: "Adherence to IS codes, NBC guidelines, and international best practices in every project." },
  { title: "Site Safety", description: "Comprehensive safety management systems with regular audits, training programs, and emergency protocols." },
  { title: "Environmental Compliance", description: "All projects comply with environmental regulations and sustainability certifications." },
  { title: "Project Monitoring", description: "Real-time project tracking with digital dashboards, automated reporting, and stakeholder transparency." },
];

export const BLOG_POSTS = [
  {
    id: "future-of-real-estate",
    title: "The Future of Real Estate in India: Trends Shaping 2026 and Beyond",
    excerpt: "Explore the transformative trends reshaping India's real estate landscape — from smart cities to sustainable communities and the rise of co-living spaces.",
    category: "Industry Insights",
    date: "July 20, 2026",
    readTime: "8 min read",
    image: "/images/vj-hero-architecture.webp",
    author: "Vista Spaces Editorial Team",
    content: `The Indian real estate sector stands at an inflection point. As urbanization accelerates and sustainability becomes a non-negotiable priority, developers who can balance innovation with environmental responsibility will define the next decade of growth.

Smart city initiatives across Bengaluru, Hyderabad, and Pune are creating new investment corridors. Meanwhile, green building certifications — once a niche differentiator — are becoming the baseline expectation for discerning buyers.

The shift toward integrated townships reflects a deeper understanding of community living. Today's buyers seek more than four walls; they want access to schools, healthcare, retail, parks, and seamless connectivity — all within a single development.

At Vista Spaces, we believe the future of real estate lies in creating developments that serve people and planet equally. Our projects are designed from the ground up to minimize environmental impact while maximizing quality of life.`,
  },
  {
    id: "smart-cities-bengaluru",
    title: "Smart Cities: How Bengaluru Is Leading India's Urban Revolution",
    excerpt: "Bengaluru's transformation into a smart city is setting new benchmarks for urban development across India. Discover the initiatives driving this change.",
    category: "Smart Cities",
    date: "July 15, 2026",
    readTime: "6 min read",
    image: "/images/vj-commercial.webp",
    author: "Vista Spaces Editorial Team",
    content: `Bengaluru has long been India's technology capital. Now, it is also becoming the country's smart city pioneer — integrating technology into urban infrastructure, governance, and daily life.

From intelligent traffic management systems to IoT-enabled public services, Bengaluru's smart city initiatives are creating a blueprint that other Indian cities are following. For real estate developers, this transformation presents both opportunities and responsibilities.

Developments in smart city zones benefit from superior infrastructure, better connectivity, and higher quality of life — factors that drive property appreciation. Vista Spaces has positioned several projects in these emerging corridors, ensuring our residents benefit from this urban evolution.`,
  },
  {
    id: "sustainable-buildings-guide",
    title: "Sustainable Buildings: A Complete Guide to Green Construction in India",
    excerpt: "Learn about the principles, certifications, and technologies driving sustainable construction in India's real estate industry.",
    category: "Sustainability",
    date: "July 10, 2026",
    readTime: "10 min read",
    image: "/images/vj-commercial.webp",
    author: "Vista Spaces Editorial Team",
    content: `Green building in India has evolved from a premium niche to an industry imperative. With IGBC and GRIHA certifications gaining mainstream recognition, developers and buyers alike are recognizing the long-term value of sustainable construction.

The economics of green buildings are compelling: 20-30% lower energy costs, 30% reduction in water consumption, and higher property values. But beyond the numbers, sustainable buildings create healthier living and working environments.

At Vista Spaces, every project incorporates sustainable design principles from the earliest planning stages. We believe that environmental responsibility and premium quality are not competing priorities — they are complementary goals that create superior developments.`,
  },
  {
    id: "property-investment-guide",
    title: "Property Investment in Bengaluru: A Strategic Guide for 2026",
    excerpt: "Navigate Bengaluru's property market with confidence. Our comprehensive guide covers emerging corridors, investment strategies, and key decision factors.",
    category: "Investment",
    date: "July 5, 2026",
    readTime: "12 min read",
    image: "/images/vj-residential.webp",
    author: "Vista Spaces Editorial Team",
    content: `Bengaluru's property market continues to attract significant investment interest, driven by the city's technology sector, infrastructure development, and growing population.

Key investment corridors include Jakkur, Hebbal, Whitefield, and the Outer Ring Road stretch. These areas offer strong appreciation potential due to upcoming metro connectivity, commercial development, and infrastructure projects.

When evaluating investment properties, consider location fundamentals, developer track record, project delivery timeline, and potential rental yields. Vista Spaces provides comprehensive investment advisory services to help clients make informed decisions aligned with their financial goals.`,
  },
  {
    id: "home-buying-tips",
    title: "Essential Home Buying Tips: What Every First-Time Buyer Should Know",
    excerpt: "From RERA registration to construction quality checks, here are the essential tips every first-time home buyer needs before making a purchase.",
    category: "Home Buying",
    date: "June 28, 2026",
    readTime: "7 min read",
    image: "/images/vj-residential.webp",
    author: "Vista Spaces Editorial Team",
    content: `Buying your first home is one of the most significant financial decisions you will make. With the right knowledge and preparation, it can also be one of the most rewarding.

Key considerations include verifying RERA registration, understanding the carpet area versus super built-up area distinction, checking the developer's track record, and reviewing the agreement terms carefully.

Vista Spaces believes in transparent communication with our buyers. We provide detailed project timelines, construction quality reports, and regular progress updates to ensure complete confidence throughout the home buying journey.`,
  },
  {
    id: "green-construction-technology",
    title: "Green Construction Technologies Revolutionizing Indian Real Estate",
    excerpt: "Discover the cutting-edge technologies — from 3D printing to AI-powered energy systems — that are transforming how buildings are designed and constructed.",
    category: "Technology",
    date: "June 20, 2026",
    readTime: "9 min read",
    image: "/images/vj-community.webp",
    author: "Vista Spaces Editorial Team",
    content: `The construction industry is undergoing a technological revolution. From Building Information Modeling (BIM) to AI-powered energy management, these innovations are making buildings smarter, greener, and more efficient.

Prefabricated construction is reducing project timelines by 30-40% while maintaining quality standards. Smart building management systems are optimizing energy use in real-time, reducing operational costs significantly.

Vista Spaces is at the forefront of adopting these technologies across our project portfolio. We believe that embracing innovation is essential for delivering developments that meet the expectations of today's discerning buyers.`,
  },
];

export const FAQ_DATA = [
  {
    question: "What types of properties does Vista Spaces develop?",
    answer: "Vista Spaces develops a comprehensive range of properties including luxury apartments, premium villas, residential townships, commercial office spaces, retail complexes, and mixed-use developments. We also specialize in sustainable and smart community projects.",
  },
  {
    question: "Where are Vista Spaces projects located?",
    answer: "Our projects are primarily located in Bengaluru, Karnataka, with a strong presence in premium corridors including Jakkur, Hebbal, MG Road, Whitefield, Kannur, and Electronics City. We are expanding to other major Indian cities.",
  },
  {
    question: "What certifications do Vista Spaces projects carry?",
    answer: "Our projects carry LEED (Leadership in Energy and Environmental Design), IGBC (Indian Green Building Council), and GRIHA certifications depending on the project type. We maintain the highest construction and quality standards across all developments.",
  },
  {
    question: "How can I invest in Vista Spaces properties?",
    answer: "You can explore our available projects on our website, schedule a site visit, or contact our investment advisory team directly. We offer flexible payment plans and comprehensive investment consultation services to help you make informed decisions.",
  },
  {
    question: "What sustainable practices does Vista Spaces follow?",
    answer: "We integrate rainwater harvesting, solar energy systems, smart energy management, greywater recycling, waste management systems, and native landscaping across all our projects. Our commitment to sustainability is a core pillar of our development philosophy.",
  },
  {
    question: "Does Vista Spaces offer post-purchase support?",
    answer: "Yes, we provide comprehensive post-purchase support including property management services, maintenance assistance, community event coordination, and dedicated customer care. Our commitment to customer satisfaction extends well beyond the handover.",
  },
  {
    question: "How can I schedule a site visit?",
    answer: "You can schedule a site visit by filling out the contact form on our website, calling us at +91-965-558-5402, or emailing info@vistajakkur.site. Our team will arrange a convenient time for you to visit our ongoing projects.",
  },
  {
    question: "Are Vista Spaces projects RERA registered?",
    answer: "Yes, all our residential projects are registered with the Karnataka Real Estate Regulatory Authority (RERA). We maintain full transparency in all regulatory compliance and provide RERA registration details for every project.",
  },
];

export const CAREERS_POSITIONS = [
  { title: "Senior Architect", department: "Design", location: "Bengaluru", type: "Full-time" },
  { title: "Project Manager", department: "Construction", location: "Bengaluru", type: "Full-time" },
  { title: "Sustainability Consultant", department: "Green Building", location: "Bengaluru", type: "Full-time" },
  { title: "Marketing Manager", department: "Marketing", location: "Bengaluru", type: "Full-time" },
  { title: "Site Engineer", department: "Construction", location: "Bengaluru", type: "Full-time" },
  { title: "Sales Executive", department: "Sales", location: "Bengaluru", type: "Full-time" },
];

export const TESTIMONIALS = [
  {
    quote: "Vista Spaces delivered our home on time with exceptional quality. The attention to detail in the construction and the sustainable features make living here a genuine pleasure.",
    author: "Rajesh Kumar",
    role: "Homeowner, Vista Verdant Township",
  },
  {
    quote: "As an investor, I appreciate Vista Spaces' transparency and the consistent appreciation of their properties. Their investment advisory team provided invaluable guidance throughout the process.",
    author: "Priya Sharma",
    role: "Property Investor",
  },
  {
    quote: "The commercial spaces at Vista Commerce Plaza exceed our expectations. The LEED certification and smart building features have significantly reduced our operational costs.",
    author: "Anil Mehta",
    role: "CEO, TechVenture Solutions",
  },
];
