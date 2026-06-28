export interface SanityImage {
  _key?: string;
  _type?: string;
  asset?: {
    _id?: string;
    _ref?: string;
    url?: string;
    metadata?: {
      dimensions?: {
        width: number;
        height: number;
      };
    };
  };
}

export interface SanityProduct {
  _id: string;
  title: string;
  price: number;
  originalPrice?: number;
  slug: {
    current: string;
  };
  description: string;
  category: string;
  image?: SanityImage;
  images?: SanityImage[];
  tags?: string[];
  inStock: boolean;
  quantity: number;
  rating: number;
  reviews: number;
  features?: string[];
  specifications?: {
    entries?: Array<{
      key: string;
      value: string;
    }>;
  };
  _createdAt: string;
}

// Compatibility type for existing components that use the old Product interface
export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  inStock: boolean;
  quantity: number;
  rating: number;
  reviews: number;
  features?: string[];
  specifications?: Record<string, string>;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
