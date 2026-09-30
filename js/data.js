/**
 * NovaCart - Master Data Store
 * Contains realistic product catalog (24+ items), categories, customer reviews,
 * coupons, and testimonials.
 */

const CATEGORIES = [
  {
    id: "electronics",
    name: "Electronics",
    icon: "laptop",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    itemCount: 48,
    description: "Cutting-edge audio, monitors, smart home & wearables"
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: "shirt",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=80",
    itemCount: 65,
    description: "Modern minimalist apparel and timeless essentials"
  },
  {
    id: "shoes",
    name: "Shoes",
    icon: "footprints",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    itemCount: 34,
    description: "Performance athletic sneakers and luxury leather boots"
  },
  {
    id: "watches",
    name: "Watches",
    icon: "watch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    itemCount: 29,
    description: "Precision chronographs and elegant smart timepieces"
  },
  {
    id: "beauty",
    name: "Beauty",
    icon: "sparkles",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80",
    itemCount: 42,
    description: "Organic skincare, luxury serums & radiant cosmetics"
  },
  {
    id: "home",
    name: "Home & Kitchen",
    icon: "home",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
    itemCount: 51,
    description: "Artisan cookware, ambient lamps & smart living decor"
  }
];

const PRODUCTS = [
  // --- ELECTRONICS ---
  {
    id: "elec-1",
    name: "Nova Pro Wireless ANC Headphones",
    category: "electronics",
    price: 199.99,
    originalPrice: 299.99,
    discount: 33,
    rating: 4.9,
    reviewsCount: 328,
    badge: "BEST SELLER",
    isFeatured: true,
    isFlashSale: true,
    stock: 18,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Space Black", hex: "#1e293b" },
      { name: "Platinum Silver", hex: "#e2e8f0" },
      { name: "Midnight Navy", hex: "#1e3a8a" }
    ],
    description: "Immerse yourself in studio-grade acoustics with the Nova Pro Wireless Headphones. Equipped with custom 40mm beryllium drivers, dual-core Hybrid Active Noise Cancellation (up to -42dB), and ultra-soft memory foam earcups for all-day comfort.",
    highlights: [
      "Hybrid Active Noise Cancellation with Transparency Mode",
      "Up to 55 Hours of Battery Life with Fast Charge (10m = 5 hrs)",
      "Lossless Hi-Res Audio certification with LDAC support",
      "Multipoint Bluetooth 5.4 seamless multi-device pairing"
    ],
    specs: {
      "Driver Size": "40mm Custom Beryllium",
      "Frequency Response": "10Hz - 40,000Hz",
      "Weight": "248 grams",
      "Connectivity": "Bluetooth 5.4, 3.5mm Aux, USB-C Audio",
      "Warranty": "2 Years International"
    },
    customerReviews: [
      { author: "Marcus Vance", rating: 5, date: "3 days ago", title: "Unbeatable noise cancellation", text: "Hands down the best headphones I have owned. Blocks out subway commute noise effortlessly and the bass response is remarkably tight.", verified: true },
      { author: "Sophia Turner", rating: 5, date: "1 week ago", title: "Pure luxury and comfort", text: "I wear these for 8 hours daily at my design agency. Zero ear fatigue, crystal clear calls, and the matte finish is gorgeous.", verified: true }
    ]
  },
  {
    id: "elec-2",
    name: "Lumina Studio 4K Ultra-Wide Monitor",
    category: "electronics",
    price: 549.00,
    originalPrice: 699.00,
    discount: 21,
    rating: 4.8,
    reviewsCount: 142,
    badge: "HOT",
    isFeatured: true,
    isFlashSale: false,
    stock: 9,
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Anodized Silver", hex: "#cbd5e1" },
      { name: "Matte Black", hex: "#0f172a" }
    ],
    description: "Expand your creative horizon with the Lumina Studio 34-inch 4K curved display. Boasting 99% DCI-P3 color accuracy, 144Hz refresh rate, and Thunderbolt 4 90W single-cable power delivery for MacBook and Windows workstations.",
    highlights: [
      "34-inch Curved IPS Panel with 3840 x 1440 UWQHD Resolution",
      "Delta E < 1 factory color calibration for professionals",
      "Single-cable Thunderbolt 4 with 90W fast laptop charging",
      "Integrated KVM switch for multiple PCs"
    ],
    specs: {
      "Screen Size": "34.14 inches",
      "Refresh Rate": "144 Hz",
      "Response Time": "1ms (GtG)",
      "Ports": "2x HDMI 2.1, 1x DP 1.4, 2x Thunderbolt 4, 4x USB-A"
    },
    customerReviews: [
      { author: "David Lin", rating: 5, date: "2 weeks ago", title: "Game changer for productivity", text: "Replaced two 24-inch screens with this single beast. The color calibration out of the box matches my calibrated MacBook display perfectly.", verified: true }
    ]
  },
  {
    id: "elec-3",
    name: "SonicPulse 360 Waterproof Smart Speaker",
    category: "electronics",
    price: 89.99,
    originalPrice: 129.99,
    discount: 30,
    rating: 4.7,
    reviewsCount: 210,
    badge: "SALE",
    isFeatured: false,
    isFlashSale: true,
    stock: 25,
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Forest Olive", hex: "#3f6212" },
      { name: "Charcoal", hex: "#334155" },
      { name: "Coral Sunset", hex: "#f43f5e" }
    ],
    description: "Delivering deep 360-degree room-filling audio, the SonicPulse 360 is IP67 dustproof and waterproof, making it the perfect companion for poolside weekends, camping, and living room parties.",
    highlights: [
      "True 360° Omnidirectional sound with dual passive radiators",
      "IP67 Waterproof & Dustproof (Floats on water)",
      "Up to 24 hours playtime per charge",
      "Pair 2 speakers for True Wireless Stereo mode"
    ],
    specs: {
      "Output Power": "40W RMS",
      "Battery Life": "24 Hours (7500 mAh)",
      "Water Resistance": "IP67 Rated",
      "Dimensions": "180 x 78 mm"
    },
    customerReviews: [
      { author: "Chloe Bennett", rating: 5, date: "5 days ago", title: "Surprising bass for its size", text: "Took it on a camping trip in rain and it worked flawlessly. Incredible battery life.", verified: true }
    ]
  },
  {
    id: "elec-4",
    name: "Aura Air True Wireless Earbuds",
    category: "electronics",
    price: 119.00,
    originalPrice: 159.00,
    discount: 25,
    rating: 4.6,
    reviewsCount: 189,
    badge: "NEW",
    isFeatured: false,
    isFlashSale: false,
    stock: 30,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Glacier White", hex: "#f8fafc" },
      { name: "Obsidian", hex: "#0f172a" }
    ],
    description: "Minimalist earbuds engineered with spatial sound tracking, environmental noise reduction, and custom EQ via the NovaCart mobile companion app.",
    highlights: [
      "Spatial Audio with dynamic head tracking",
      "Triple beamforming mic array for wind-free voice calls",
      "Qi Wireless Charging case with 36 hours total reserve",
      "IPX5 sweat and water resistance"
    ],
    specs: {
      "Battery Life": "8h (earbuds) + 28h (case)",
      "Driver": "11mm Dynamic Bio-Diaphragm",
      "Bluetooth": "5.3 with LE Audio support"
    },
    customerReviews: [
      { author: "Liam Ross", rating: 5, date: "1 month ago", title: "Super snug fit!", text: "Stays in my ears even during intensive HIIT sprints. Mic quality is top tier for Zoom meetings.", verified: true }
    ]
  },

  // --- FASHION ---
  {
    id: "fash-1",
    name: "Sartorial Italian Wool Cashmere Overcoat",
    category: "fashion",
    price: 249.00,
    originalPrice: 380.00,
    discount: 34,
    rating: 4.9,
    reviewsCount: 94,
    badge: "PREMIUM",
    isFeatured: true,
    isFlashSale: true,
    stock: 12,
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Camel Tan", hex: "#c29b61" },
      { name: "Charcoal Heather", hex: "#475569" },
      { name: "Navy Blue", hex: "#1e3a8a" }
    ],
    description: "Tailored from a plush Italian virgin wool and Mongolian cashmere blend. Features a structured lapel, horn button closure, viscose silk lining, and deep interior pockets.",
    highlights: [
      "80% Virgin Merino Wool, 20% Grade-A Mongolian Cashmere",
      "Hand-finished notch lapels and genuine horn buttons",
      "Breathable thermal insulation suitable down to -5°C",
      "Dry clean only, includes luxury garment travel bag"
    ],
    specs: {
      "Fit": "Tailored Modern Regular",
      "Origin": "Florence, Italy",
      "Lining": "100% Cupro Silk"
    },
    customerReviews: [
      { author: "Julian Keller", rating: 5, date: "3 weeks ago", title: "Exceptional tailoring", text: "The drape and weight of this fabric feels like a thousand-dollar luxury department coat. Highly recommended.", verified: true }
    ]
  },
  {
    id: "fash-2",
    name: "Urban Minimalist Heavyweight Hoodie",
    category: "fashion",
    price: 68.00,
    originalPrice: 95.00,
    discount: 28,
    rating: 4.8,
    reviewsCount: 312,
    badge: "TRENDING",
    isFeatured: true,
    isFlashSale: false,
    stock: 45,
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Washed Oatmeal", hex: "#e7e5e4" },
      { name: "Faded Sage", hex: "#65a30d" },
      { name: "Vintage Onyx", hex: "#18181b" }
    ],
    description: "Constructed with 450 GSM organic French terry cotton. A boxy silhouette, double-layered hood without drawstrings for clean aesthetics, and tight ribbed cuffs that maintain their shape.",
    highlights: [
      "450 GSM ultra-dense 100% combed organic cotton",
      "Pre-shrunk to maintain exact fit wash after wash",
      "Minimalist seamless kangaroo pocket with concealed zip",
      "Garment dyed for vintage texture"
    ],
    specs: {
      "Fabric": "100% Organic French Terry Cotton",
      "Weight": "450 GSM",
      "Care": "Cold machine wash inside out"
    },
    customerReviews: [
      { author: "Elena Rostova", rating: 5, date: "4 days ago", title: "My absolute favorite hoodie", text: "The weight is incredible and the hood stands upright effortlessly without slouching. Buying two more colors.", verified: true }
    ]
  },
  {
    id: "fash-3",
    name: "Artisan Selvedge Japanese Denim Jacket",
    category: "fashion",
    price: 155.00,
    originalPrice: 210.00,
    discount: 26,
    rating: 4.7,
    reviewsCount: 88,
    badge: "SALE",
    isFeatured: false,
    isFlashSale: false,
    stock: 14,
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Indigo Raw", hex: "#1e3a8a" },
      { name: "Stonewash Blue", hex: "#60a5fa" }
    ],
    description: "Woven on vintage shuttle looms in Okayama, Japan using 14oz ring-spun cotton. Delivers custom fade patterns and deep character that matures with every wear.",
    highlights: [
      "14oz Japanese Kurabo Selvedge Denim",
      "Antique brass shank buttons and red-line selvedge ID",
      "Dual chest flap pockets + hidden internal stash pockets",
      "Reinforced felled seams for decade-long durability"
    ],
    specs: {
      "Denim Weight": "14 oz",
      "Origin": "Okayama, Japan",
      "Fit": "Classic Trucker Slim"
    },
    customerReviews: [
      { author: "Tyler Wright", rating: 5, date: "2 months ago", title: "Real heirloom quality", text: "Crisp raw denim that molds to your body after a week. Pure craftsmanship.", verified: true }
    ]
  },
  {
    id: "fash-4",
    name: "Classic Silk Blend Linen Button Shirt",
    category: "fashion",
    price: 64.99,
    originalPrice: 89.99,
    discount: 27,
    rating: 4.6,
    reviewsCount: 104,
    badge: "NEW",
    isFeatured: false,
    isFlashSale: false,
    stock: 22,
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620012253295-c15c429fbb41?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Crisp White", hex: "#ffffff" },
      { name: "Sky Azure", hex: "#bae6fd" },
      { name: "Sand Beige", hex: "#d6d3d1" }
    ],
    description: "Lightweight and breathable, this French linen and mulberry silk blend shirt keeps you crisp and relaxed from summer beach clubs to formal alfresco dinners.",
    highlights: [
      "70% Normandy Linen, 30% Mulberry Silk",
      "Natural mother-of-pearl buttons",
      "Relaxed camp collar with straight hem",
      "Naturally anti-bacterial and cooling"
    ],
    specs: {
      "Fit": "Resort Relaxed",
      "Collar": "Convertible Camp Collar"
    },
    customerReviews: [
      { author: "Ethan Cole", rating: 5, date: "1 month ago", title: "Breezy perfection", text: "Feels feather-light in humid heat while still looking sophisticated.", verified: true }
    ]
  },

  // --- SHOES ---
  {
    id: "shoe-1",
    name: "NovaGlide Carbon Marathon Running Shoes",
    category: "shoes",
    price: 189.00,
    originalPrice: 249.00,
    discount: 24,
    rating: 4.9,
    reviewsCount: 245,
    badge: "BEST SELLER",
    isFeatured: true,
    isFlashSale: true,
    stock: 16,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Crimson Blaze", hex: "#dc2626" },
      { name: "Neon Volt", hex: "#84cc16" },
      { name: "Phantom Black", hex: "#0f172a" }
    ],
    description: "Engineered for record-breaking speed. Features a full-length curved carbon fiber propulsion plate sandwiched between hyper-responsive PEBA superfoam for 87% energy return.",
    highlights: [
      "Full-length spoon-shaped carbon propulsion plate",
      "Ultra-lightweight PEBA foam with 40mm stack height",
      "Engineered single-layer breathable mesh upper",
      "Continental™ rubber traction pads for wet road grip"
    ],
    specs: {
      "Weight": "198 grams (Size US 9)",
      "Drop": "8 mm (40mm heel / 32mm forefoot)",
      "Pace Suitability": "Sub-4:00/km race pace & tempo runs"
    },
    customerReviews: [
      { author: "Kenji Sato", rating: 5, date: "6 days ago", title: "New 10k PR on first run!", text: "The propulsion from the carbon plate is absurd. You feel like you are rolling forward automatically without burning energy.", verified: true }
    ]
  },
  {
    id: "shoe-2",
    name: "Handcrafted Italian Leather Chelsea Boots",
    category: "shoes",
    price: 219.00,
    originalPrice: 290.00,
    discount: 24,
    rating: 4.8,
    reviewsCount: 167,
    badge: "PREMIUM",
    isFeatured: true,
    isFlashSale: false,
    stock: 11,
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Espresso Brown", hex: "#451a03" },
      { name: "Jet Black", hex: "#18181b" },
      { name: "Cognac Tan", hex: "#9a3412" }
    ],
    description: "Handcrafted in Le Marche, Italy by generational cobblers. Full-grain calfskin leather, Goodyear welted construction, durable elastic side gussets, and cushioned leather insoles.",
    highlights: [
      "100% Full-grain vegetable tanned Italian calfskin",
      "Traditional Goodyear welt - resoleable for a lifetime",
      "Vibram rubber half-sole for grip on wet cobblestones",
      "Soft calfskin interior lining with arch support"
    ],
    specs: {
      "Construction": "Goodyear Welted",
      "Upper": "Italian Calfskin Leather",
      "Outsole": "Vibram Commando Hybrid"
    },
    customerReviews: [
      { author: "Harrison Ford", rating: 5, date: "2 weeks ago", title: "Stunning boots", text: "Zero break-in period. Wore them to a 3-day wedding in Europe right out of the box and received dozens of compliments.", verified: true }
    ]
  },
  {
    id: "shoe-3",
    name: "Urban Minimalist White Leather Sneakers",
    category: "shoes",
    price: 110.00,
    originalPrice: 145.00,
    discount: 24,
    rating: 4.7,
    reviewsCount: 420,
    badge: "HOT",
    isFeatured: false,
    isFlashSale: false,
    stock: 38,
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Triple White", hex: "#ffffff" },
      { name: "White & Gold", hex: "#fef08a" }
    ],
    description: "The definitive everyday sneaker. Clean lines, butter-soft Nappa leather, gold-foil serial stamp on heel, and Margom rubber cupsole.",
    highlights: [
      "Premium Nappa leather with stain-resistant coating",
      "Waxed Italian cotton laces",
      "Orthopedic memory foam removable insole",
      "Versatile silhouette matches chinos, jeans, or suits"
    ],
    specs: {
      "Sole": "Vulcanized Margom Rubber",
      "Upper": "Full grain Nappa"
    },
    customerReviews: [
      { author: "Brooke Adams", rating: 5, date: "1 week ago", title: "Cleanest sneakers in my closet", text: "Super easy to wipe clean, extremely comfortable footbed.", verified: true }
    ]
  },
  {
    id: "shoe-4",
    name: "AeroKnit Trail Walking Sport Sneakers",
    category: "shoes",
    price: 95.00,
    originalPrice: 130.00,
    discount: 27,
    rating: 4.6,
    reviewsCount: 97,
    badge: "SALE",
    isFeatured: false,
    isFlashSale: true,
    stock: 19,
    images: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Ash Grey", hex: "#94a3b8" },
      { name: "Olive Green", hex: "#4d7c0f" }
    ],
    description: "Breathable stretch knit with rugged all-terrain lugs. Ideal for casual outdoor treks, daily 10,000-step routines, and gym training.",
    highlights: [
      "Seamless 3D knit upper adjusts dynamically to foot shape",
      "Multi-directional 4mm rubber lugs",
      "Reinforced TPU toe guard prevents trail abrasion"
    ],
    specs: {
      "Weight": "240 grams",
      "Insole": "Dual-density EVA"
    },
    customerReviews: [
      { author: "Derek Miller", rating: 4, date: "3 weeks ago", title: "Great daily walkers", text: "Very light and breathable for hot days.", verified: true }
    ]
  },

  // --- WATCHES ---
  {
    id: "wat-1",
    name: "ChronoMaster Automatic Chronograph Swiss Watch",
    category: "watches",
    price: 499.00,
    originalPrice: 750.00,
    discount: 33,
    rating: 4.9,
    reviewsCount: 118,
    badge: "BEST SELLER",
    isFeatured: true,
    isFlashSale: true,
    stock: 7,
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Sunburst Blue", hex: "#1e40af" },
      { name: "Silver Dial", hex: "#e2e8f0" },
      { name: "Panda Dial", hex: "#0f172a" }
    ],
    description: "Powered by a high-beat self-winding mechanical movement with 68-hour power reserve. Sapphire crystal with anti-reflective coating, 316L surgical stainless steel, and exhibition display caseback.",
    highlights: [
      "Swiss-designed 28,800 VPH automatic column-wheel movement",
      "Double-domed scratch-resistant sapphire crystal with AR coating",
      "Solid stainless steel 5-link jubilee bracelet with micro-adjust",
      "100 meters (10 ATM) water resistance with screw-down crown"
    ],
    specs: {
      "Case Diameter": "40 mm",
      "Thickness": "12.4 mm",
      "Lug to Lug": "47 mm",
      "Movement": "Calibre NC-70 Automatic (68h Reserve)"
    },
    customerReviews: [
      { author: "Arthur Pendelton", rating: 5, date: "1 month ago", title: "Masterpiece of horology", text: "The sweeping seconds hand is silky smooth and the sunburst blue dial catches light in the most stunning way.", verified: true }
    ]
  },
  {
    id: "wat-2",
    name: "Horizon Titanium Ultra Smartwatch",
    category: "watches",
    price: 329.00,
    originalPrice: 429.00,
    discount: 23,
    rating: 4.8,
    reviewsCount: 204,
    badge: "HOT",
    isFeatured: true,
    isFlashSale: false,
    stock: 15,
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Aerospace Titanium", hex: "#94a3b8" },
      { name: "Carbon DLC Black", hex: "#1e293b" }
    ],
    description: "Crafted from aerospace-grade Grade 5 titanium with an always-on 2,000 nit AMOLED sapphire display. Built-in dual-frequency GPS, ECG monitor, blood oxygen tracking, and 14-day battery life.",
    highlights: [
      "Grade 5 Titanium bezel with scratch-proof sapphire crystal",
      "1.43-inch Always-on Ultra AMOLED 466x466 (2,000 nits)",
      "Comprehensive vitals: ECG, SpO2, HRV, Sleep stages, Stress",
      "Dual-frequency L1+L5 multi-satellite GPS navigation"
    ],
    specs: {
      "Battery Life": "Up to 14 days normal / 40h continuous GPS",
      "Water Rating": "5 ATM + IP68",
      "Compatibility": "iOS & Android"
    },
    customerReviews: [
      { author: "Samantha Wu", rating: 5, date: "2 weeks ago", title: "Finally a smartwatch that lasts weeks!", text: "Battery lasts a solid 12 days even with daily 45-minute GPS runs. Titanium case is featherweight.", verified: true }
    ]
  },
  {
    id: "wat-3",
    name: "Apex Diver 300M Professional Tool Watch",
    category: "watches",
    price: 280.00,
    originalPrice: 380.00,
    discount: 26,
    rating: 4.7,
    reviewsCount: 76,
    badge: "NEW",
    isFeatured: false,
    isFlashSale: false,
    stock: 10,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Emerald Sunray", hex: "#065f46" },
      { name: "Deep Abyss", hex: "#0f172a" }
    ],
    description: "Built for true deep-sea exploration. Unidirectional 120-click ceramic bezel, Super-LumiNova BGW9 indices glowing ice blue in the dark, and helium escape valve.",
    highlights: [
      "300 Meters (30 ATM) ISO 6425 Certified Diver Watch",
      "120-click uni-directional scratchproof ceramic bezel",
      "Swiss Super-LumiNova BGW9 luminescent markers"
    ],
    specs: {
      "Case": "316L Stainless Steel 42mm",
      "Glass": "Flat Sapphire with Inner AR"
    },
    customerReviews: [
      { author: "Captain Ray Larson", rating: 5, date: "1 month ago", title: "Indestructible tool watch", text: "Took it on 15 ocean scuba dives. Legibility underwater is superb.", verified: true }
    ]
  },
  {
    id: "wat-4",
    name: "Minimalist Rose Gold Mesh Ladies Watch",
    category: "watches",
    price: 139.00,
    originalPrice: 189.00,
    discount: 26,
    rating: 4.8,
    reviewsCount: 153,
    badge: "SALE",
    isFeatured: false,
    isFlashSale: false,
    stock: 24,
    images: [
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Rose Gold", hex: "#fda4af" },
      { name: "Silver Pearl", hex: "#f1f5f9" }
    ],
    description: "Subtle elegance at its peak. Ultra-slim 6.8mm case profile, mother of pearl dial face, and silky smooth Milanese mesh strap with magnetic sliding clasp.",
    highlights: [
      "Ultra-thin 6.8mm profile fits seamlessly under cuffs",
      "Natural iridescent Mother-of-Pearl dial",
      "Quick-release interchangeable Milanese mesh strap"
    ],
    specs: {
      "Case Size": "32 mm",
      "Strap Width": "14 mm"
    },
    customerReviews: [
      { author: "Hannah Montgomery", rating: 5, date: "3 weeks ago", title: "Dainty and gorgeous", text: "Looks twice as expensive as it is. Shines beautifully in natural daylight.", verified: true }
    ]
  },

  // --- BEAUTY ---
  {
    id: "beau-1",
    name: "HydraGlow 20% Vitamin C Radiance Serum",
    category: "beauty",
    price: 48.00,
    originalPrice: 68.00,
    discount: 29,
    rating: 4.9,
    reviewsCount: 480,
    badge: "BEST SELLER",
    isFeatured: true,
    isFlashSale: true,
    stock: 35,
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608248597359-00f723827ec3?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "30ml Bottle", hex: "#f59e0b" },
      { name: "50ml Jumbo", hex: "#d97706" }
    ],
    description: "Clinical grade brightening serum formulated with 20% pure L-Ascorbic Acid, Ferulic Acid, and Hyaluronic Acid. Fades dark spots, evens skin tone, and provides all-day environmental barrier defense.",
    highlights: [
      "20% pure stabilized L-Ascorbic Vitamin C + 0.5% Ferulic Acid",
      "Clinically proven to boost collagen synthesis by 4x",
      "Cruelty-free, vegan, fragrance-free, paraben-free",
      "Amber UV-blocking glass bottle preserves potency"
    ],
    specs: {
      "Volume": "30 ml / 1.0 fl oz",
      "Skin Type": "All skin types (including sensitive)",
      "Application": "Morning after cleanser, before moisturizer"
    },
    customerReviews: [
      { author: "Clara Johansson", rating: 5, date: "4 days ago", title: "Literal holy grail!", text: "My acne hyperpigmentation faded significantly within two weeks. My skin looks so bouncy and glassy.", verified: true }
    ]
  },
  {
    id: "beau-2",
    name: "Botanical Midnight Restorative Facial Oil",
    category: "beauty",
    price: 54.00,
    originalPrice: 75.00,
    discount: 28,
    rating: 4.8,
    reviewsCount: 164,
    badge: "HOT",
    isFeatured: false,
    isFlashSale: false,
    stock: 28,
    images: [
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Standard 30ml", hex: "#3b82f6" }
    ],
    description: "An overnight recovery elixir blending squalane, evening primrose, blue tansy, and lavender essential oils. Wakes you up with calm, radiant, deeply plumped skin.",
    highlights: [
      "100% plant-derived cold-pressed botanical oils",
      "Rich in Omega 3, 6, and 9 essential fatty acids",
      "Rapidly absorbing dry-oil formula with zero greasy residue"
    ],
    specs: {
      "Ingredients": "Organic Squalane, Blue Tansy, Rosehip Seed Oil",
      "Volume": "30 ml"
    },
    customerReviews: [
      { author: "Maya Patel", rating: 5, date: "2 weeks ago", title: "Pure spa experience at home", text: "The aroma of blue tansy instantly relaxes me before bed. Absorbs within 2 minutes.", verified: true }
    ]
  },
  {
    id: "beau-3",
    name: "Velvet Matte Luxe Lipstick Trio Collection",
    category: "beauty",
    price: 42.00,
    originalPrice: 60.00,
    discount: 30,
    rating: 4.7,
    reviewsCount: 130,
    badge: "SALE",
    isFeatured: false,
    isFlashSale: false,
    stock: 40,
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1591360236480-9c4a54f67640?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Nude Rose Trio", hex: "#f43f5e" },
      { name: "Ruby Classic Trio", hex: "#be123c" }
    ],
    description: "Intense pigment payoff in a single swipe with a velvety featherweight finish. Infused with shea butter and hyaluronic spheres to prevent feathering or drying.",
    highlights: [
      "12-hour comfortable smudge-proof wear",
      "Hydrating formula with mango seed butter",
      "Magnetic luxury metal case"
    ],
    specs: {
      "Count": "3 Full-sized lipsticks",
      "Finish": "Non-drying velvet matte"
    },
    customerReviews: [
      { author: "Zoe Kravitz", rating: 5, date: "1 month ago", title: "Flawless colors", text: "The nude rose shade is universally flattering. Lasted through a 3-course dinner!", verified: true }
    ]
  },
  {
    id: "beau-4",
    name: "Pure Silk Peptide Deep Recovery Cream",
    category: "beauty",
    price: 62.00,
    originalPrice: 85.00,
    discount: 27,
    rating: 4.8,
    reviewsCount: 92,
    badge: "NEW",
    isFeatured: true,
    isFlashSale: false,
    stock: 20,
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "50ml Jar", hex: "#e2e8f0" }
    ],
    description: "Fortified with copper tripeptides, silk amino acids, and 5 essential ceramides. Restores weakened skin barriers and seals in moisture for 72 continuous hours.",
    highlights: [
      "5 Biomimetic Ceramides (EOP, NS, NP, AS, AP)",
      "Silk protein peptides for visible firming",
      "Dermatologist tested and non-comedogenic"
    ],
    specs: {
      "Size": "50 ml / 1.7 oz",
      "Formulation": "Rich whipped cloud cream"
    },
    customerReviews: [
      { author: "Chloe De Silva", rating: 5, date: "5 days ago", title: "Skin savior for dry climate", text: "Saved my winter flakiness within 48 hours. Feels like silk on face.", verified: true }
    ]
  },

  // --- HOME & KITCHEN ---
  {
    id: "home-1",
    name: "Artisan Ceramic Pour-Over Barista Coffee Kit",
    category: "home",
    price: 79.99,
    originalPrice: 110.00,
    discount: 27,
    rating: 4.9,
    reviewsCount: 310,
    badge: "BEST SELLER",
    isFeatured: true,
    isFlashSale: true,
    stock: 22,
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Matte Stone", hex: "#78716c" },
      { name: "Obsidian Black", hex: "#1c1917" },
      { name: "Bone Ivory", hex: "#fafaf9" }
    ],
    description: "Master third-wave coffee extraction at home. Includes handmade ceramic dripper with spiral interior ribs, heat-resistant borosilicate glass carafe (600ml), and ergonomic gooseneck kettle.",
    highlights: [
      "Artisan-fired stoneware ceramic with thermal retention",
      "600ml Borosilicate glass carafe with pour spout",
      "Gooseneck stainless steel kettle with precision flow control",
      "Includes 100 unbleached Japanese paper filters"
    ],
    specs: {
      "Carafe Capacity": "600 ml (2-4 cups)",
      "Material": "Stoneware Ceramic, Borosilicate Glass, 304 Stainless Steel"
    },
    customerReviews: [
      { author: "Felix Baum", rating: 5, date: "1 week ago", title: "Café quality in my kitchen", text: "The flow rate control is incredible. Best pour-over setup I have used.", verified: true }
    ]
  },
  {
    id: "home-2",
    name: "Nordic Minimalist Ambient Smart Desk Lamp",
    category: "home",
    price: 98.00,
    originalPrice: 135.00,
    discount: 27,
    rating: 4.8,
    reviewsCount: 147,
    badge: "HOT",
    isFeatured: true,
    isFlashSale: false,
    stock: 14,
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Brushed Brass", hex: "#ca8a04" },
      { name: "Matte Black", hex: "#0f172a" },
      { name: "Frosted White", hex: "#f8fafc" }
    ],
    description: "Designed in Copenhagen. Machined aluminum body, stepless touch-dimming rotary dial, CRI 97+ flicker-free circadian lighting, and integrated 15W Qi fast wireless charging base.",
    highlights: [
      "Full spectrum CRI 97+ Eye-Care LED eliminates flicker & glare",
      "Dual color temperature: Warm Sunset (2700K) to Daylight (5500K)",
      "Built-in 15W wireless phone charger on base",
      "Smart memory remembers your last brightness level"
    ],
    specs: {
      "Brightness": "850 Lumens max",
      "Power": "18W LED + 15W Wireless Qi Base",
      "Arm Adjust": "180° vertical tilt, 360° base rotation"
    },
    customerReviews: [
      { author: "Nora Lindqvist", rating: 5, date: "3 weeks ago", title: "Gorgeous architectural look", text: "Minimalist Scandinavian perfection. The wireless charging base keeps my desk cable-free.", verified: true }
    ]
  },
  {
    id: "home-3",
    name: "Heritage Enameled Cast Iron Dutch Oven 5.5 Qt",
    category: "home",
    price: 139.99,
    originalPrice: 199.99,
    discount: 30,
    rating: 4.9,
    reviewsCount: 280,
    badge: "PREMIUM",
    isFeatured: false,
    isFlashSale: true,
    stock: 8,
    images: [
      "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Deep Cobalt", hex: "#1d4ed8" },
      { name: "Cherry Scarlet", hex: "#b91c1c" },
      { name: "Sage Enamel", hex: "#4d7c0f" }
    ],
    description: "The crown jewel of any home chef. Superior heat distribution and retention for slow braises, artisan sourdough bread baking, soups, and roasting. Oven safe up to 500°F (260°C).",
    highlights: [
      "Heavyweight enameled cast iron delivers unmatched heat retention",
      "Smooth cream interior enamel resists staining and sticking",
      "Self-basting condensation dots on interior of lid",
      "Compatible with all stovetops including Induction"
    ],
    specs: {
      "Capacity": "5.5 Quarts (5.2 Liters)",
      "Weight": "11.8 lbs",
      "Oven Safe": "Up to 500°F (260°C)"
    },
    customerReviews: [
      { author: "Chef Anthony Bell", rating: 5, date: "2 weeks ago", title: "Bakes incredible sourdough!", text: "The crust and oven spring on sourdough bread baked in this is phenomenal.", verified: true }
    ]
  },
  {
    id: "home-4",
    name: "Ultrasonic Smart Ultrasonic Aroma Diffuser",
    category: "home",
    price: 49.99,
    originalPrice: 69.99,
    discount: 29,
    rating: 4.7,
    reviewsCount: 175,
    badge: "NEW",
    isFeatured: false,
    isFlashSale: false,
    stock: 31,
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=800&auto=format&fit=crop&q=80"
    ],
    colors: [
      { name: "Natural Walnut", hex: "#78350f" },
      { name: "Ceramic Snow", hex: "#f8fafc" }
    ],
    description: "Whisper-quiet ultrasonic mist generator equipped with 7 ambient calming LED glow modes, auto shut-off, and waterless safety sensor.",
    highlights: [
      "400ml tank provides up to 16 hours continuous aromatic mist",
      "Ultrasonic 2.4MHz technology operating under 20dB",
      "BPA-free medical grade materials safe for babies and pets"
    ],
    specs: {
      "Coverage": "Up to 450 sq ft",
      "Timer Modes": "1h / 3h / 6h / Continuous ON"
    },
    customerReviews: [
      { author: "Jessica Miller", rating: 5, date: "1 month ago", title: "So peaceful and quiet", text: "Leaves my bedroom smelling like a 5-star luxury hotel suite.", verified: true }
    ]
  }
];

const WHY_CHOOSE_US = [
  {
    icon: "truck",
    title: "Free Express Shipping",
    description: "Complimentary priority shipping on all orders over $50 with real-time tracking.",
    highlight: "Free over $50"
  },
  {
    icon: "shield-check",
    title: "Bank-Grade Security",
    description: "256-bit SSL encrypted checkout supporting Apple Pay, Visa, Mastercard & UPI.",
    highlight: "100% Encrypted"
  },
  {
    icon: "refresh-cw",
    title: "30-Day Hassle Returns",
    description: "Not completely in love? Return or exchange any item within 30 days with no questions.",
    highlight: "Instant Refunds"
  },
  {
    icon: "headphones",
    title: "24/7 Concierge Support",
    description: "Our dedicated support team is available around the clock via live chat and phone.",
    highlight: "Live Human Help"
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Architectural Designer, NYC",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    verified: true,
    comment: "NovaCart has completely transformed my shopping experience. The quality of products, packaging, and next-day delivery is unmatched. The Nova Pro headphones sound phenomenal!",
    itemPurchased: "Nova Pro Wireless ANC Headphones"
  },
  {
    id: 2,
    name: "Alexandre Moreau",
    role: "Creative Director, Paris",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    verified: true,
    comment: "The attention to detail on the Italian Wool coat is bespoke level. Smooth checkout, transparent tracking, and true premium curation. I recommend NovaCart to everyone.",
    itemPurchased: "Sartorial Italian Wool Overcoat"
  },
  {
    id: 3,
    name: "Emily Zhang",
    role: "Tech Lead & Runner, SF",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    verified: true,
    comment: "I broke my personal half-marathon record wearing the NovaGlide Carbon runners! The return policy gave me total peace of mind, but I am never taking them off.",
    itemPurchased: "NovaGlide Carbon Running Shoes"
  },
  {
    id: 4,
    name: "Dr. Jonathan Hayes",
    role: "Cardiologist & Watch Enthusiast",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    verified: true,
    comment: "The ChronoMaster Swiss automatic watch feels like a $3,000 heirloom timepiece. The sapphire reflection is flawless. NovaCart delivers genuine luxury without the retail markup.",
    itemPurchased: "ChronoMaster Automatic Swiss Watch"
  }
];

const COUPONS = {
  "NOVA20": { code: "NOVA20", discountPercent: 20, description: "20% Off Entire Store" },
  "WELCOME10": { code: "WELCOME10", discountPercent: 10, description: "10% Welcome Discount" },
  "FREESHIP": { code: "FREESHIP", freeShipping: true, description: "Free Express Shipping" },
  "SAVE15": { code: "SAVE15", discountPercent: 15, description: "15% Seasonal Savings" }
};

const FAQS = [
  {
    question: "What is the return and exchange window?",
    answer: "NovaCart offers a 30-day money-back guarantee on all products. If you are not completely satisfied, initiate a return from your account for an instant prepaid return label."
  },
  {
    question: "How long does shipping take?",
    answer: "Orders are processed within 24 hours. Standard shipping takes 3-5 business days, while Express shipping arrives within 1-2 business days. Tracking numbers are emailed immediately upon dispatch."
  },
  {
    question: "Are all product warranties authentic?",
    answer: "Yes, every electronic item, watch, and appliance sold on NovaCart comes with full authentic manufacturer international warranties (minimum 1 to 2 years)."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We support Visa, MasterCard, American Express, PayPal, Apple Pay, Google Pay, UPI / Net Banking, and Cash on Delivery (COD)."
  }
];
