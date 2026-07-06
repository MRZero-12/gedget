const products = [
  {
    id: 1,
    name: "GeForce RTX™ 5050 GAMING OC 8G",
    category: "gaming",
    price: 12999000,
    originalPrice: 14999000,
    rating: 4.8,
    reviews: 234,
    image: "https://zi-jo.com/image/cache/catalog/222/Audio/BOYA/1111/GV-N5050WF2OC-8GD-1200x1200-550x550.jpg.webp",
    images: [
      "https://zi-jo.com/image/cache/catalog/222/Audio/BOYA/1111/GV-N5050WF2OC-8GD-1200x1200-550x550.jpg.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFy3r3PzhskYvCEsyw02fA3xm4roLU0EgPi5SeYH_7PPBu5jkIeYkDmM&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2gepnVygZhHqOLbJr0-moNDS76b7IGCU6BwsoyQ71csLp9Mn3b1BWUlk&s=10"
    ],
    description: "GeForce RTX 50 Serie <br> Game Change",
    specs: {

      "Graphics Processing": 'GeForce RTX 5050',
      "Core Clock": "2587 MHz (Reference card : 2572MHz)",
      "CUDA Cores": "2560",
      "Memory Clock": "20 Gbps",
      "Memory Type": "GDDR6",
      "Memory Size": "8 GB",
      "Memory Bus": " 128 bit",
      "Card Bus": " PCI-E 5.0",
      "Digital max resolution": "7680x4320",
      "Multi-view": "4",
      "Card size": " L=182 W=69 H=36 mm",
      "PCB Form": "ATX",
      "DirectX": "DirectX 12 API",
      "OpenGL": "4.6",
      "Recommended PSU": "550W",
      "Power Connectors": "8 Pin*1",
      "Output" : "DisplayPort 2.1b *1, DisplayPort 1.4a *1, HDMI 2.1b *2",
      "Accessories" : "1. Quick guide, 2. Low Profile Bracket"
    },
    stock: 15,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Iphone 17 Pro Max",
    category: "smartphones",
    price: 23499000,
    originalPrice: 25999000,
    rating: 4.9,
    reviews: 187,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyfxyfmGJrcjOT2PnFhLMg1m049G7l3Cdx2KA1QBSzEg&s=10",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyfxyfmGJrcjOT2PnFhLMg1m049G7l3Cdx2KA1QBSzEg&s=10",
      "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/ca8bbd71443944e6a421bc19527108e2~tplv-aphluv4xwc-resize-jpeg:700:0.jpeg?lk3s=0ccea506&x-expires=1782977351&x-signature=BKZ66wzs4wVF8rtnKDn6e4P3aOg%3D&x-signature-webp=J7jfMSrk36I1PDCCJl5DSyu%2BIVg%3D",
      "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/042c0cba7d8a44249a121c7b8e2bfe4a~tplv-aphluv4xwc-resize-jpeg:700:0.jpeg?lk3s=0ccea506&x-expires=1782977351&x-signature=duEBEIdCs6tWELfDJGwjMAnJG1w%3D&x-signature-webp=9DQMlVGwNp1fA4v4HN8sAWiKh90%3D"
    ],
    description: "Smartphone premium dengan desain edge-to-edge, layar Dynamic AMOLED 2X, dan fitur AI terintegrasi untuk produktivitas maksimal sepanjang hari.",
    specs: {
      "Layar": 'Super Retina XDR display6.9‑inch (diagonal) all‑screen OLED display with 2796-by-1290-pixel resolution at 460 ppi',
      "Prosesor": "A19 Pro chip 6‑core CPU with 2 performance cores and 4 efficiency cores 6‑core GPU with Neural Accelerators 16‑core Neural Engine Hardware‑accelerated ray tracing",
      "RAM": "8GB",
      "Penyimpanan": "256GB",
      "Kamera Utama": "48MP Pro Fusion camera system 8MP Center Stage camera",
      "Baterai": "4700mAh, 45W Fast Charging",
      "Sistem Operasi": "iOS 26",
      "Berat": "167g"
    },
    stock: 23,
    badge: "New"
  },
  {
    id: 3,
    name: "ZenFone Ultra 11",
    category: "smartphones",
    price: 8999000,
    originalPrice: 9999000,
    rating: 4.5,
    reviews: 156,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKz8lefAiFPWcrOW-1DFXHggu1NRfUejfgs3Yg54lXKA&s=10",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKz8lefAiFPWcrOW-1DFXHggu1NRfUejfgs3Yg54lXKA&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHlKcuJNsxGU54PCc_u1nRcgiYK4NwsCA48lzvK1rPPg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-fIO2A9tzQ8mkLFBlqoBDVTvPEtYpzUeAO7tJ3baxw&s=10"
    ],
    description: "Smartphone compact bertenaga dengan performa gaming tinggi, kamera stabilisasi gimbal, dan desain ergonomis nyaman digenggam satu tangan.",
    specs: {
      "Layar": '5.9" AMOLED 120Hz',
      "Prosesor": "Snapdragon 8 Gen 2",
      "RAM": "8GB",
      "Penyimpanan": "128GB",
      "Kamera Utama": "50MP Gimbal Stabilization + 13MP Ultra Wide",
      "Baterai": "4300mAh, 67W Fast Charging",
      "Sistem Operasi": "Android 14",
      "Berat": "156g"
    },
    stock: 31,
    badge: null
  },
  {
    id: 4,
    name: "ProBook Titanium 15",
    category: "laptops",
    price: 18999000,
    originalPrice: 21999000,
    rating: 4.9,
    reviews: 89,
    image: "https://imagedelivery.net/pjXEwQ5mgCM0WtJa4WheRQ/ef141ea9-a1ed-4a90-3735-37efccdbe100/ProductViewThumb",
    images: [
      "https://imagedelivery.net/pjXEwQ5mgCM0WtJa4WheRQ/ef141ea9-a1ed-4a90-3735-37efccdbe100/ProductViewThumb",
      "https://imagedelivery.net/pjXEwQ5mgCM0WtJa4WheRQ/9ebafaf4-aeb2-4eb4-e5ff-e6613cd7de00/ProductViewThumb",
      "https://imagedelivery.net/pjXEwQ5mgCM0WtJa4WheRQ/4fcd8e0f-e2eb-4c82-9c8d-de5c387a3b00/ProductViewThumb"
    ],
    description: "Laptop premium dengan bodi titanium ultra-ringan, layar OLED 3K, dan performa tinggi untuk profesional kreatif dan developer yang menuntut yang terbaik.",
    specs: {
      "Layar": '15.6" OLED 3K 90Hz',
      "Prosesor": "Intel Core i9-14900H",
      "RAM": "32GB LPDDR5X",
      "Penyimpanan": "1TB NVMe SSD",
      "GPU": "NVIDIA RTX 4070 8GB",
      "Baterai": "80Wh, 100W USB-C Charging",
      "Sistem Operasi": "Windows 11 Pro",
      "Berat": "1.49kg"
    },
    stock: 8,
    badge: "Premium"
  },
  {
    id: 5,
    name: "AirBook Slim 14",
    category: "laptops",
    price: 12499000,
    originalPrice: null,
    rating: 4.7,
    reviews: 201,
    image: "https://pipetto.se/storage/MacBook201314Classic20SleeveLavenderoverheadzoom.webp",
    images: [
      "https://pipetto.se/storage/MacBook201314Classic20SleeveLavenderoverheadzoom.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Ypa9JdR_4CbjZocieE8w_WJ6NcDHmcLRoyy9EFgPX7sX5QJVTtCs-g8&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCy30mcqQYoz1lx9JLqe5yztTcyX9p0nOoCOorwXrEw&s=10"
    ],
    description: "Laptop ultra-tipis dengan performa seimbang, layar IPS 2K tajam, dan daya tahan baterai hingga 14 jam untuk mobilitas tanpa batas.",
    specs: {
      "Layar": '14" IPS 2K 60Hz',
      "Prosesor": "AMD Ryzen 7 7840U",
      "RAM": "16GB LPDDR5",
      "Penyimpanan": "512GB NVMe SSD",
      "GPU": "AMD Radeon 780M Integrated",
      "Baterai": "65Wh, hingga 14 jam",
      "Sistem Operasi": "Windows 11 Home",
      "Berat": "1.24kg"
    },
    stock: 19,
    badge: "Popular"
  },
  {
    id: 6,
    name: "GameForce Titan 17",
    category: "laptops",
    price: 25999000,
    originalPrice: 28999000,
    rating: 4.8,
    reviews: 67,
    image: "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/0a29e34ca3974971ac4d2209eaa95b87~tplv-aphluv4xwc-white-pad-v1:1600:1600.jpeg?lk3s=0ccea506&x-expires=1782985588&x-signature=i3jt3XUjzEkzZdnV%2FrBCF9X1tD0%3D&x-signature-webp=9zUPxMoJ1jz%2BvL2yN8ID9JRE6ms%3D",
    images: [
      "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/0a29e34ca3974971ac4d2209eaa95b87~tplv-aphluv4xwc-white-pad-v1:1600:1600.jpeg?lk3s=0ccea506&x-expires=1782985588&x-signature=i3jt3XUjzEkzZdnV%2FrBCF9X1tD0%3D&x-signature-webp=9zUPxMoJ1jz%2BvL2yN8ID9JRE6ms%3D",
      "https://p16-images-common-sign-sg.tokopedia-static.net/tos-maliva-i-o3syd03w52-us/85c1215bb3154086b84f1d8c9a699818~tplv-o3syd03w52-resize-jpeg:700:0.jpeg?lk3s=0ccea506&x-expires=1782985588&x-signature=GSf%2FXHvHmU9ZOex8ujPuFRQ8qNA%3D&x-signature-webp=XgmnXzGcBEgJz4y%2FYL1W0mz80%2Bw%3D",
      "https://p16-images-common-sign-sg.tokopedia-static.net/tos-maliva-i-o3syd03w52-us/54a62110cdc74a6ca8e1ff89866c38d0~tplv-o3syd03w52-resize-jpeg:700:0.jpeg?lk3s=0ccea506&x-expires=1782985588&x-signature=X2xKYo9Vq%2BUh%2BAf%2FfdVWdU4j0DQ%3D&x-signature-webp=TDrTB01MoxfVEQpiroP9MWH6Igw%3D"
    ],
    description: "Laptop gaming terkuat dengan layar 17 inci 240Hz, GPU RTX 4090, dan sistem pendingin canggih untuk gaming marathon tanpa kompromi.",
    specs: {
      "Layar": '17.3" IPS 2K 240Hz',
      "Prosesor": "Intel Core i9-14900HX",
      "RAM": "64GB DDR5",
      "Penyimpanan": "2TB NVMe SSD",
      "GPU": "NVIDIA RTX 4090 16GB",
      "Baterai": "90Wh, 330W Power Adapter",
      "Sistem Operasi": "Windows 11 Home",
      "Berat": "2.8kg"
    },
    stock: 5,
    badge: "Gaming"
  },
  {
    id: 7,
    name: "SoundWave Pro ANC",
    category: "audio",
    price: 3499000,
    originalPrice: 3999000,
    rating: 4.7,
    reviews: 445,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqA0uKu8Z44C51l7EqYEVULHLqYDr00A31YQZjX1M0uw&s=10",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqA0uKu8Z44C51l7EqYEVULHLqYDr00A31YQZjX1M0uw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgbxJgDa-0N0BMeuq6OlvGxdhaIPbIlxPRgqk-XwN-2Q&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQ7xvNKWgtrL_f-_Bajj5SKS1e7nbihVBZyA1UVamYQ&s=10"
    ],
    description: "Headphone over-ear premium dengan Active Noise Cancellation adaptif, driver 40mm berlapis titanium, dan baterai tahan 40 jam pemakaian nyaman.",
    specs: {
      "Tipe": "Over-ear Closed Back",
      "Driver": "40mm Titanium-coated",
      "ANC": "Adaptive Active Noise Cancellation",
      "Bluetooth": "5.3, LDAC, aptX Adaptive",
      "Baterai": "40 jam (ANC on), 60 jam (ANC off)",
      "Charging": "USB-C, 10 menit = 5 jam",
      "Berat": "254g",
      "Fitur": "Multipoint, Spatial Audio, Wear Detection"
    },
    stock: 42,
    badge: "Best Seller"
  },
  {
    id: 8,
    name: "BassPod Mini 3",
    category: "audio",
    price: 1299000,
    originalPrice: 1499000,
    rating: 4.4,
    reviews: 312,
    image: "https://down-id.img.susercontent.com/file/id-11134207-82251-mghp428q66ffb2",
    images: [
      "https://down-id.img.susercontent.com/file/id-11134207-82251-mghp428q66ffb2",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTRSWj6hXerYgleTzzhks_LOJgRHhhS68aAOPyWJSzlA&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzuPA2JbV4ElJiWzxxt6a-JJq9g4Hn3WUWcM6vqjevg&s"
    ],
    description: "Speaker Bluetooth portable dengan bass powerful, desain compact waterproof IPX7, dan fitur stereo pairing untuk pengalaman musik immersive di mana saja.",
    specs: {
      "Tipe": "Portable Bluetooth Speaker",
      "Driver": "2x 45mm Full Range + Passive Radiator",
      "Bluetooth": "5.3",
      "Baterai": "18 jam",
      "Charging": "USB-C",
      "Waterproof": "IPX7",
      "Berat": "540g",
      "Fitur": "Stereo Pairing, App Control, EQ Custom"
    },
    stock: 58,
    badge: null
  },
  {
    id: 9,
    name: "ChronoWatch Ultra 2",
    category: "wearables",
    price: 5499000,
    originalPrice: 5999000,
    rating: 4.6,
    reviews: 178,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5e11m1tMrwkyUVMm5RDAczqk2lB4oELcoGoLnI8qoA&s=10",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5e11m1tMrwkyUVMm5RDAczqk2lB4oELcoGoLnI8qoA&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnj7f1aYAKtieF7BXXY1y3HdBz7alM8EsBmkow3jm3w&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_X_L7xxM-czZ49zFYL3z16w2x7ZxQr0Ak79d3mxtnYw&s=10"
    ],
    description: "Smartwatch premium dengan layar AMOLED ultra-terang, GPS dual-frequency, monitoring kesehatan komprehensif, dan daya tahan baterai hingga 14 hari.",
    specs: {
      "Layar": '1.47" AMOLED 480x480, 2000 nits',
      "Prosesor": "Snapdragon W5+ Gen 1",
      "Penyimpanan": "32GB",
      "GPS": "Dual-frequency L1+L5",
      "Baterai": "14 hari pemakaian normal",
      "Ketahanan": "5ATM + IP68, MIL-STD-810H",
      "Sensor": "SpO2, ECG, Suhu, Barometer, Kompas",
      "Berat": "52g (tanpa tali)"
    },
    stock: 27,
    badge: "New"
  },
  {
    id: 10,
    name: "FitBand Pulse 5",
    category: "wearables",
    price: 899000,
    originalPrice: null,
    rating: 4.3,
    reviews: 567,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjglG3WeLbzsDF3gfbXZjUOrAyz0o7tdzv3nDXIdvvzw&s=10",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjglG3WeLbzsDF3gfbXZjUOrAyz0o7tdzv3nDXIdvvzw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvv0fLnVzImIHXrNo5ELLcsY2rVNPWJwzXPhBmKS7Sw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJQcoqDEn18qZ5P5XAnnjx70gxymHsQMf7_k7EVi72VA&s=10"
    ],
    description: "Fitness band terjangkau dengan layar AMOLED, monitoring 24/7 detak jantung dan SpO2, 120+ mode olahraga, dan baterai tahan 21 hari.",
    specs: {
      "Layar": '1.62" AMOLED 490x192',
      "Baterai": "21 hari",
      "Sensor": "HR 24/7, SpO2, Akselerometer 6-axis",
      "Mode Olahraga": "120+",
      "Waterproof": "5ATM",
      "Konektivitas": "Bluetooth 5.2",
      "Berat": "26g",
      "Fitur": "Sleep Tracking, Stress Monitor, Women's Health"
    },
    stock: 75,
    badge: "Value"
  },
  {
    id: 11,
    name: "Vortex Controller Pro",
    category: "gaming",
    price: 1299000,
    originalPrice: 1499000,
    rating: 4.8,
    reviews: 389,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZEYcNwa_DLuw3NfS6ez25jAU5nYzQbhOR_-TKoGhPpw&s=10",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZEYcNwa_DLuw3NfS6ez25jAU5nYzQbhOR_-TKoGhPpw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCt1mPUXUqJGBLZcv9k3AAI7bvVxoZwjpIf-HH-oZXg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3P17-nsU_uO_YFW-e7MCZ_nEmiw0EBfcH8w89bal5g&s"
    ],
    description: "Controller gaming premium dengan hall effect sticks anti-drift, trigger locks, 4 profil tombol yang bisa diprogram, dan kompatibel multi-platform.",
    specs: {
      "Konektivitas": "USB-C, Bluetooth 5.0, 2.4GHz Dongle",
      "Sticks": "Hall Effect, anti-drift",
      "Trigger": "Analog dengan Lock Switch",
      "Tombol": "Mechanical Switches, 20 juta klik",
      "Profil": "4 profil yang bisa diprogram",
      "Baterai": "30 jam, USB-C charging",
      "Kompatibilitas": "PC, Nintendo Switch, Android, iOS",
      "Berat": "245g"
    },
    stock: 34,
    badge: "Popular"
  },
  {
    id: 12,
    name: "NexusGear Keyboard 75",
    category: "gaming",
    price: 1899000,
    originalPrice: null,
    rating: 4.7,
    reviews: 156,
    image: "https://www.kharismakencana.com/image-product/img25519-1736169183.png",
    images: [
      "https://www.kharismakencana.com/image-product/img25519-1736169183.png",
      "https://www.kharismakencana.com/image-product/img25520-1736169183.png",
      "https://www.kharismakencana.com/image-product/img25521-1736169183.png"
    ],
    description: "Mechanical keyboard 75% dengan switch gasket mount, hot-swappable, knob volume, RGB per-key, dan desain premium aluminium CNC yang memukau.",
    specs: {
      "Layout": "75% (84 tombol)",
      "Switch": "Gasket Mount, Hot-swappable 3/5 pin",
      "Keycaps": "Double-shot PBT",
      "Backlight": "RGB Per-key, South-facing LED",
      "Konektivitas": "USB-C Wired, Bluetooth 5.0, 2.4GHz",
      "Baterai": "4000mAh, hingga 200 jam (tanpa RGB)",
      "Material": "Aluminium CNC Case",
      "Fitur": "Volume Knob, Layer Makro, On-board Memory"
    },
    stock: 21,
    badge: null
  }
];

// Helper: format harga ke Rupiah
function formatPrice(price) {
  return 'Rp ' + price.toLocaleString('id-ID');
}

// Helper: render bintang rating
function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      html += '<i class="fas fa-star"></i>';
    } else if (i - rating < 1) {
      html += '<i class="fas fa-star-half-alt"></i>';
    } else {
      html += '<i class="far fa-star"></i>';
    }
  }
  return html;
}

// Helper: hitung diskon persen
function getDiscount(original, current) {
  if (!original || original <= current) return 0;
  return Math.round(((original - current) / original) * 100);
}