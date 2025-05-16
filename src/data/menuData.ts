
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  priceWithChai?: string;
  image: string;
  category: string;
}

export const menuCategories = [
  { id: "breakfast", name: "Breakfast", description: "Served 7 am–11 am" },
  { id: "lunch", name: "Lunch", description: "Coming soon" },
  { id: "drinks", name: "Drinks", description: "Coming soon" },
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "OG Paratha",
    description: "Hand made layered butter paratha.",
    price: "₹10",
    priceWithChai: "₹15 with Chai",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1600&auto=format&fit=crop",
    category: "breakfast",
  },
  {
    id: 2,
    name: "Kiri/Cheesy Paratha",
    description: "Hand made layered butter paratha with Kiri cheese or grated cheese and optional chips.",
    price: "₹15",
    priceWithChai: "₹25 with Chai",
    image: "https://images.unsplash.com/photo-1567465645848-d9c40b76b5bd?q=80&w=1600&auto=format&fit=crop",
    category: "breakfast",
  },
  {
    id: 3,
    name: "Omelette Paratha",
    description: "Butter paratha with plain omelette and optional Kiri cheese.",
    price: "₹20",
    priceWithChai: "₹30 with Chai",
    image: "https://images.unsplash.com/photo-1607103058027-4c8a70a03e3a?q=80&w=1600&auto=format&fit=crop",
    category: "breakfast",
  },
  {
    id: 4,
    name: "Smashed Avo on Toast",
    description: "Avocado & feta on sourdough with labneh & herbs.",
    price: "₹38",
    priceWithChai: "₹48 with Chai",
    image: "https://images.unsplash.com/photo-1603046891744-7c646c2019f9?q=80&w=1600&auto=format&fit=crop",
    category: "breakfast",
  },
  {
    id: 5,
    name: "Bombay Scramble",
    description: "Spiced scrambled eggs with labneh on sourdough.",
    price: "₹35",
    priceWithChai: "₹45 with Chai",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1600&auto=format&fit=crop",
    category: "breakfast",
  },
  {
    id: 6,
    name: "Turkish Eggs",
    description: "Whipped labneh on sourdough drizzled with chili oil.",
    price: "₹38",
    priceWithChai: "₹48 with Chai",
    image: "https://images.unsplash.com/photo-1606851094291-6efae152bb87?q=80&w=1600&auto=format&fit=crop",
    category: "breakfast",
  },
  {
    id: 7,
    name: "Mushroom Toast",
    description: "Herby sautéed mushrooms on sourdough.",
    price: "₹35",
    priceWithChai: "₹45 with Chai",
    image: "https://images.unsplash.com/photo-1642278991158-a79a27e93bd9?q=80&w=1600&auto=format&fit=crop",
    category: "breakfast",
  },
  {
    id: 8,
    name: "Super French Toast",
    description: "Brioche with caramelized strawberries & vanilla cream.",
    price: "₹35",
    priceWithChai: "₹45 with Chai",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1600&auto=format&fit=crop",
    category: "breakfast",
  },
  {
    id: 9,
    name: "Chai Spiced Granola Bowl",
    description: "Chai-infused granola with oats, nuts & fresh fruits.",
    price: "₹35",
    priceWithChai: "₹45 with Chai",
    image: "https://images.unsplash.com/photo-1502055774017-46bcd284abac?q=80&w=1600&auto=format&fit=crop",
    category: "breakfast",
  },
  {
    id: 10,
    name: "Karak Chai",
    description: "Signature masala chai with homemade cardamom cookie.",
    price: "₹15",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=1600&auto=format&fit=crop",
    category: "breakfast",
  },
];
