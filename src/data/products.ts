export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  origin: string;
  uses: string[];
  benefits: string[];
  weight: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Kashmiri Saffron',
    price: 2499,
    originalPrice: 2999,
    image: '/src/assets/saffron.jpg',
    category: 'Premium Spices',
    description: 'Authentic Kashmiri saffron with rich aroma and deep color. Hand-picked from the valleys of Kashmir.',
    origin: 'Kashmir, India',
    uses: ['Biryani', 'Sweets', 'Milk preparations', 'Rice dishes'],
    benefits: ['Rich in antioxidants', 'Improves mood', 'Enhances skin health'],
    weight: '1g',
    rating: 4.8,
    reviews: 156,
    isBestSeller: true,
    inStock: true,
  },
  {
    id: '2',
    name: 'Organic Turmeric Powder',
    price: 149,
    originalPrice: 199,
    image: '/src/assets/turmeric.jpg',
    category: 'Ground Spices',
    description: 'Pure organic turmeric powder with high curcumin content. Perfect for daily cooking and health benefits.',
    origin: 'Kerala, India',
    uses: ['Curries', 'Dal', 'Golden milk', 'Face masks'],
    benefits: ['Anti-inflammatory', 'Boosts immunity', 'Good for digestion'],
    weight: '500g',
    rating: 4.6,
    reviews: 234,
    isNew: true,
    inStock: true,
  },
  {
    id: '3',
    name: 'Garam Masala Blend',
    price: 299,
    image: '/src/assets/garam-masala.jpg',
    category: 'Spice Blends',
    description: 'Traditional garam masala blend with perfect balance of whole spices. Adds warmth and aroma to dishes.',
    origin: 'Delhi, India',
    uses: ['Curries', 'Meat dishes', 'Vegetables', 'Rice preparations'],
    benefits: ['Aids digestion', 'Warming spice', 'Rich in antioxidants'],
    weight: '250g',
    rating: 4.7,
    reviews: 89,
    isBestSeller: true,
    inStock: true,
  },
  {
    id: '4',
    name: 'Kashmiri Red Chili Powder',
    price: 249,
    originalPrice: 299,
    image: '/src/assets/chili-powder.jpg',
    category: 'Ground Spices',
    description: 'Mild heat with vibrant red color. Kashmiri chilies are known for their color and moderate spice level.',
    origin: 'Kashmir, India',
    uses: ['Curries', 'Tandoor dishes', 'Marinades', 'Vegetables'],
    benefits: ['Rich in Vitamin C', 'Boosts metabolism', 'Adds natural color'],
    weight: '200g',
    rating: 4.5,
    reviews: 67,
    inStock: true,
  },
];

export const categories = [
  'All',
  'Ground Spices',
  'Whole Spices',
  'Spice Blends',
  'Premium Spices',
];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') return products;
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isBestSeller || product.isNew).slice(0, 4);
};