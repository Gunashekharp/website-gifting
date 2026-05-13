export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  occasion: string[];
  recipient: string[];
  category: string;
  description: string;
  contents: { name: string; description: string }[];
  badge?: string;
}

export interface BuilderItem {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface Container {
  id: string;
  name: string;
  description: string;
  image: string;
  sizes: { label: string; capacity: number; price: number }[];
}

export const products: Product[] = [
  {
    id: "birthday-bloom-trunk",
    name: "Birthday Bloom Trunk",
    price: 3499,
    originalPrice: 4199,
    image: "/products/birthday-bloom-trunk.jpg",
    occasion: ["birthday"],
    recipient: ["for-her", "for-kids"],
    category: "hampers",
    badge: "Bestseller",
    description: "A lilac vintage trunk bursting with birthday joy — pink lilies, an adorable owl plush toy, premium chocolates, a 'BeYOUtiful' card, spiral notebook, and warm fairy lights.",
    contents: [
      { name: "Pink Lilies Arrangement", description: "Fresh pink lilies with greenery" },
      { name: "Owl Plush Toy", description: "Soft cuddly owl stuffed animal" },
      { name: "Premium Chocolates", description: "Assorted chocolate selection" },
      { name: "'BeYOUtiful' Card", description: "Handmade inspirational greeting card" },
      { name: "Spiral Notebook", description: "Pastel-themed lined journal" },
      { name: "Fairy Lights", description: "Warm white LED string lights" },
    ],
  },
  {
    id: "birthday-surprise-box",
    name: "Birthday Surprise Box",
    price: 2999,
    originalPrice: 3599,
    image: "/products/birthday-surprise-box.jpg",
    occasion: ["birthday"],
    recipient: ["for-her"],
    category: "hampers",
    badge: "New",
    description: "A red luxury box packed with fairy lights, a personalized pink tumbler, Hershey's dark chocolate, leather diary, heart pillow, and an adorable panda card.",
    contents: [
      { name: "Fairy Lights", description: "Warm white LED string lights" },
      { name: "Personalized Pink Tumbler", description: "Custom name-engraved tumbler" },
      { name: "Hershey's Dark Chocolate", description: "Premium dark chocolate bar" },
      { name: "Leather Diary", description: "Soft-cover leather-bound journal" },
      { name: "Heart Pillow", description: "Plush red heart-shaped cushion" },
      { name: "Panda Greeting Card", description: "Cute illustrated panda birthday card" },
    ],
  },
  {
    id: "anniversary-rose-garden",
    name: "Anniversary Rose Garden",
    price: 4999,
    image: "/products/anniversary-rose-garden.jpg",
    occasion: ["anniversary"],
    recipient: ["for-couples"],
    category: "hampers",
    badge: "Premium",
    description: "A stunning red box overflowing with red roses, pink lilies, baby's breath, fairy lights, an anniversary card, love notes, and a 'You Are Loved' card.",
    contents: [
      { name: "Red Roses Bouquet", description: "Fresh long-stem red roses" },
      { name: "Pink Lilies", description: "Fragrant pink lily stems" },
      { name: "Baby's Breath", description: "Delicate white filler flowers" },
      { name: "Fairy Lights", description: "Warm white LED string lights" },
      { name: "Anniversary Card", description: "Gold foil anniversary greeting" },
      { name: "Love Notes Collection", description: "Handwritten love note cards" },
      { name: "'You Are Loved' Card", description: "Inspirational keepsake card" },
    ],
  },
  {
    id: "gratitude-garden",
    name: "Gratitude Garden",
    price: 2499,
    image: "/products/gratitude-garden.jpg",
    occasion: ["thank-you"],
    recipient: ["for-her"],
    category: "hampers",
    description: "A lilac trunk thoughtfully filled with a personalized tumbler, handmade scented candle, rose soap, jute potli, a fresh flower bouquet, and a 'You're Incredible' card.",
    contents: [
      { name: "Personalized Tumbler", description: "Custom name-engraved tumbler" },
      { name: "Handmade Scented Candle", description: "Artisan soy wax candle" },
      { name: "Rose Soap", description: "Hand-poured rose-scented soap bar" },
      { name: "Jute Potli", description: "Decorated jute drawstring pouch" },
      { name: "Fresh Flower Bouquet", description: "Seasonal mixed flower arrangement" },
      { name: "'You're Incredible' Card", description: "Handmade appreciation card" },
    ],
  },
  {
    id: "movie-night-trunk",
    name: "Movie Night Trunk",
    price: 2799,
    originalPrice: 3299,
    image: "/products/movie-night-trunk.jpg",
    occasion: ["birthday", "thank-you"],
    recipient: ["for-him", "for-her"],
    category: "hampers",
    badge: "Popular",
    description: "A grey vintage trunk loaded for the ultimate movie night — Himalayan salt caramel popcorn, Hawaiian BBQ chips, movie-themed mug, film strip decor, fairy lights, and cinema tickets.",
    contents: [
      { name: "Himalayan Salt Caramel Popcorn", description: "Gourmet flavored popcorn pack" },
      { name: "Hawaiian BBQ Chips", description: "Premium potato chips" },
      { name: "Movie-Themed Mug", description: "Ceramic film reel design mug" },
      { name: "Film Strip Decor", description: "Decorative film strip accent" },
      { name: "Fairy Lights", description: "Warm white LED string lights" },
      { name: "Cinema Tickets", description: "Two movie voucher passes" },
    ],
  },
  {
    id: "rakhi-golden-basket",
    name: "Rakhi Golden Basket",
    price: 3299,
    image: "/products/rakhi-golden-basket.jpg",
    occasion: ["festival"],
    recipient: ["for-him"],
    category: "hampers",
    description: "A gold wire basket brimming with sunflowers, Davidoff coffee, 4700BC popcorn, Lindt chocolate, gourmet treats, and a teal ribbon — the perfect Rakhi surprise for brothers.",
    contents: [
      { name: "Sunflower Arrangement", description: "Bright fresh sunflowers" },
      { name: "Davidoff Coffee", description: "Premium instant coffee jar" },
      { name: "4700BC Popcorn", description: "Gourmet caramel popcorn tin" },
      { name: "Lindt Chocolate", description: "Swiss milk chocolate bar" },
      { name: "Gourmet Treats Assortment", description: "Curated snack selection" },
      { name: "Teal Ribbon Wrap", description: "Decorative satin ribbon finish" },
    ],
  },
  {
    id: "rakhi-bloom-trunk",
    name: "Rakhi Bloom Trunk",
    price: 2999,
    image: "/products/rakhi-bloom-trunk.jpg",
    occasion: ["festival"],
    recipient: ["for-him", "for-her"],
    category: "hampers",
    description: "A red branded trunk with yellow lilies, baby's breath, a Boss mug, popcorn, skin soothing balm, a 'You Are Loved' card, and a Happy Rakshabandhan flag.",
    contents: [
      { name: "Yellow Lilies", description: "Vibrant fresh yellow lily stems" },
      { name: "Baby's Breath", description: "Delicate white filler flowers" },
      { name: "Boss Mug", description: "Printed 'Boss' ceramic mug" },
      { name: "Gourmet Popcorn", description: "Flavored popcorn pack" },
      { name: "Skin Soothing Balm", description: "Natural herbal skin balm" },
      { name: "'You Are Loved' Card", description: "Inspirational keepsake card" },
      { name: "Happy Rakshabandhan Flag", description: "Festive decorative mini flag" },
    ],
  },
  {
    id: "love-garden-tray",
    name: "Love Garden Tray",
    price: 3799,
    image: "/products/love-garden-tray.jpg",
    occasion: ["anniversary"],
    recipient: ["for-her", "for-couples"],
    category: "hampers",
    description: "A beautiful green tray adorned with pink lilies, red carnations, a photo frame, baby's breath, fairy lights, and a 'You Are Beautiful' card.",
    contents: [
      { name: "Pink Lilies", description: "Fragrant pink lily arrangement" },
      { name: "Red Carnations", description: "Fresh red carnation stems" },
      { name: "Photo Frame", description: "Decorative keepsake photo frame" },
      { name: "Baby's Breath", description: "Delicate white filler flowers" },
      { name: "Fairy Lights", description: "Warm white LED string lights" },
      { name: "'You Are Beautiful' Card", description: "Handmade inspirational card" },
    ],
  },
  {
    id: "birthday-round-basket",
    name: "Birthday Round Basket",
    price: 2299,
    image: "/products/birthday-round-basket.jpg",
    occasion: ["birthday"],
    recipient: ["for-her"],
    category: "hampers",
    description: "A charming pink round basket with wrapped gifts, a crocheted rose, dinosaur card, ceramic mug, bath bomb, birthday card, and a bright red ribbon.",
    contents: [
      { name: "Wrapped Gift Boxes", description: "Decorative mini gift parcels" },
      { name: "Crocheted Rose", description: "Handmade crochet flower" },
      { name: "Dinosaur Card", description: "Playful illustrated greeting card" },
      { name: "Ceramic Mug", description: "Pastel-colored printed mug" },
      { name: "Bath Bomb", description: "Handmade scented bath fizzer" },
      { name: "Birthday Card", description: "Hand-lettered birthday greeting" },
    ],
  },
  {
    id: "birthday-photo-box",
    name: "Birthday Photo Box",
    price: 1999,
    image: "/products/birthday-photo-box.jpg",
    occasion: ["birthday"],
    recipient: ["for-him", "for-her", "for-couples"],
    category: "hampers",
    badge: "Personalized",
    description: "A black exploding photo box with fairy lights, personalized photos, gold ribbon, and a 'Happy Birthday' badge — a memory-filled keepsake gift.",
    contents: [
      { name: "Exploding Photo Box", description: "Multi-fold surprise photo display" },
      { name: "Fairy Lights", description: "Warm white LED string lights" },
      { name: "Personalized Photos", description: "Custom printed photo inserts" },
      { name: "Gold Ribbon", description: "Satin gold ribbon accent" },
      { name: "'Happy Birthday' Badge", description: "Metallic celebration pin badge" },
    ],
  },
  {
    id: "eid-celebration-tray",
    name: "Eid Celebration Tray",
    price: 3499,
    image: "/products/eid-celebration-tray.jpg",
    occasion: ["festival"],
    recipient: ["for-her", "for-kids"],
    category: "hampers",
    description: "A wooden 'Eid Mubarak' tray with pink lilies, roses, a cute penguin plush, baby's breath, wrapped gifts, and a scented candle.",
    contents: [
      { name: "Pink Lilies", description: "Fresh pink lily stems" },
      { name: "Rose Arrangement", description: "Assorted fresh roses" },
      { name: "Penguin Plush Toy", description: "Soft cuddly penguin stuffed animal" },
      { name: "Baby's Breath", description: "Delicate white filler flowers" },
      { name: "Wrapped Gifts", description: "Decorative gift parcels" },
      { name: "Scented Candle", description: "Hand-poured aromatic candle" },
    ],
  },
  {
    id: "farewell-keepsake-basket",
    name: "Farewell Keepsake Basket",
    price: 2499,
    image: "/products/farewell-basket.jpg",
    occasion: ["thank-you"],
    recipient: ["for-her"],
    category: "hampers",
    description: "A wicker basket filled with a personalized photo frame, plush toy, inspirational quote cards, a succulent plant, and heartfelt farewell notes.",
    contents: [
      { name: "Personalized Photo Frame", description: "Custom engraved keepsake frame" },
      { name: "Plush Toy", description: "Soft cuddly stuffed animal" },
      { name: "Inspirational Quote Cards", description: "Set of motivational card prints" },
      { name: "Succulent Plant", description: "Mini potted succulent" },
      { name: "Farewell Notes", description: "Handwritten farewell message cards" },
    ],
  },
  {
    id: "papas-day-hamper",
    name: "Papa's Day Hamper",
    price: 2799,
    image: "/products/fathers-day-hamper.jpg",
    occasion: ["birthday", "thank-you"],
    recipient: ["for-him"],
    category: "hampers",
    badge: "For Dad",
    description: "A dark box featuring a 'PAPA' transparent balloon, Nescafe coffee, Body Shop satsuma shower gel, photo frame, fairy lights, and a Father's Day card.",
    contents: [
      { name: "'PAPA' Transparent Balloon", description: "Custom printed Bobo balloon" },
      { name: "Nescafe Coffee", description: "Premium instant coffee jar" },
      { name: "Body Shop Satsuma Shower Gel", description: "Citrus body wash, 250ml" },
      { name: "Photo Frame", description: "Decorative keepsake frame" },
      { name: "Fairy Lights", description: "Warm white LED string lights" },
      { name: "Father's Day Card", description: "Handmade greeting card for Dad" },
    ],
  },
  {
    id: "mermaid-dream-box",
    name: "Mermaid Dream Box",
    price: 3299,
    image: "/products/mermaid-custom-box.jpg",
    occasion: ["birthday"],
    recipient: ["for-her", "for-kids"],
    category: "hampers",
    badge: "Custom",
    description: "A custom black box with mermaid artwork on the lid, butterfly accent, personalized name, photos, accessories, and a 'Shine Bright' tag — one-of-a-kind.",
    contents: [
      { name: "Custom Mermaid Artwork Lid", description: "Hand-illustrated box lid design" },
      { name: "Butterfly Accent", description: "Decorative butterfly embellishment" },
      { name: "Personalized Name Plate", description: "Custom name on the box" },
      { name: "Photos & Accessories", description: "Curated personal photo inserts" },
      { name: "'Shine Bright' Tag", description: "Inspirational keepsake tag" },
    ],
  },
];

export const containers: Container[] = [
  {
    id: "vintage-trunk",
    name: "Vintage Trunk",
    description: "Classic vintage-style trunk with metal clasps — our signature container",
    image: "/products/birthday-bloom-trunk.jpg",
    sizes: [
      { label: "Small", capacity: 4, price: 399 },
      { label: "Medium", capacity: 6, price: 599 },
      { label: "Large", capacity: 10, price: 899 },
    ],
  },
  {
    id: "luxury-box",
    name: "Luxury Gift Box",
    description: "Rigid luxury box with satin lining and ribbon closure",
    image: "/products/birthday-surprise-box.jpg",
    sizes: [
      { label: "Small", capacity: 4, price: 449 },
      { label: "Medium", capacity: 7, price: 649 },
      { label: "Large", capacity: 12, price: 1099 },
    ],
  },
  {
    id: "wicker-basket",
    name: "Wicker Basket",
    description: "Handwoven wicker basket with a decorative ribbon bow",
    image: "/products/farewell-basket.jpg",
    sizes: [
      { label: "Small", capacity: 4, price: 299 },
      { label: "Medium", capacity: 6, price: 499 },
      { label: "Large", capacity: 10, price: 799 },
    ],
  },
  {
    id: "decorative-tray",
    name: "Decorative Tray",
    description: "Wooden or painted tray — elegant for floral and open-display hampers",
    image: "/products/love-garden-tray.jpg",
    sizes: [
      { label: "Standard", capacity: 5, price: 349 },
      { label: "Large", capacity: 8, price: 549 },
    ],
  },
];

export const builderItems: BuilderItem[] = [
  { id: "bi-1", name: "Premium Chocolates Box", price: 599, category: "Chocolates", image: "/products/birthday-bloom-trunk.jpg" },
  { id: "bi-2", name: "Lindt Chocolate Bar", price: 399, category: "Chocolates", image: "/products/rakhi-golden-basket.jpg" },
  { id: "bi-3", name: "Hershey's Dark Chocolate", price: 299, category: "Chocolates", image: "/products/birthday-surprise-box.jpg" },
  { id: "bi-4", name: "Davidoff Coffee Jar", price: 549, category: "Beverages", image: "/products/rakhi-golden-basket.jpg" },
  { id: "bi-5", name: "Nescafe Premium Coffee", price: 449, category: "Beverages", image: "/products/fathers-day-hamper.jpg" },
  { id: "bi-6", name: "Personalized Tumbler", price: 499, category: "Drinkware", image: "/products/gratitude-garden.jpg" },
  { id: "bi-7", name: "Handmade Scented Candle", price: 499, category: "Self-Care", image: "/products/gratitude-garden.jpg" },
  { id: "bi-8", name: "Bath Bomb", price: 299, category: "Self-Care", image: "/products/birthday-round-basket.jpg" },
  { id: "bi-9", name: "Rose Soap Bar", price: 249, category: "Self-Care", image: "/products/gratitude-garden.jpg" },
  { id: "bi-10", name: "Body Shop Shower Gel", price: 599, category: "Self-Care", image: "/products/fathers-day-hamper.jpg" },
  { id: "bi-11", name: "4700BC Gourmet Popcorn", price: 399, category: "Snacks", image: "/products/rakhi-golden-basket.jpg" },
  { id: "bi-12", name: "Hawaiian BBQ Chips", price: 299, category: "Snacks", image: "/products/movie-night-trunk.jpg" },
  { id: "bi-13", name: "Himalayan Salt Caramel Popcorn", price: 349, category: "Snacks", image: "/products/movie-night-trunk.jpg" },
  { id: "bi-14", name: "Leather Diary", price: 599, category: "Stationery", image: "/products/birthday-surprise-box.jpg" },
  { id: "bi-15", name: "Spiral Notebook", price: 299, category: "Stationery", image: "/products/birthday-bloom-trunk.jpg" },
  { id: "bi-16", name: "Photo Frame", price: 399, category: "Decor", image: "/products/love-garden-tray.jpg" },
  { id: "bi-17", name: "Fairy Lights", price: 249, category: "Decor", image: "/products/birthday-photo-box.jpg" },
  { id: "bi-18", name: "Plush Toy", price: 449, category: "Gifts", image: "/products/birthday-bloom-trunk.jpg" },
];

export const occasions = [
  { id: "birthday", label: "Birthday", icon: "🎂" },
  { id: "anniversary", label: "Anniversary", icon: "💍" },
  { id: "festival", label: "Festival", icon: "🪔" },
  { id: "thank-you", label: "Thank You", icon: "🙏" },
];

export const recipients = [
  { id: "for-him", label: "For Him", icon: "👔" },
  { id: "for-her", label: "For Her", icon: "👗" },
  { id: "for-kids", label: "For Kids", icon: "🧸" },
  { id: "for-couples", label: "For Couples", icon: "💑" },
];

export const testimonials = [
  {
    name: "Archana Singh",
    text: "Anagha managed the Ramadan hamper perfectly with precision and tons of attention to detail. Every single thing was done over calls and WhatsApp efficiently. Wonderful experience — coming back for more!",
    rating: 5,
  },
  {
    name: "Sudha Kumar",
    text: "She made the gift hamper absolutely beautiful! Communication was clear and smooth throughout. She paid attention to every little detail and ensured doorstep delivery as well.",
    rating: 5,
  },
  {
    name: "Sanjay Khan",
    text: "Look no further for your gifting needs — the entire process from curating the items to delivery was seamless. The final hamper exceeded my expectations and turned out beautifully!",
    rating: 5,
  },
  {
    name: "Deepti V",
    text: "Loved the gifting ideas and solutions! There are a lot of different options available and always there to listen to our customization and preferences. So happy with the outcome!",
    rating: 5,
  },
  {
    name: "Heera Mohan",
    text: "She made it within a short time and with lot of patience. Was so friendly and added all the details. Really liked her work and I'm so happy how it ended up!",
    rating: 5,
  },
  {
    name: "Divya Raja",
    text: "Anagha is very dedicated and passionate! She has a lot of creative ideas for gifting and gives the gift hampers a very impressive finish. Delivered on time always. Thank you for making our special occasions memorable!",
    rating: 5,
  },
];
