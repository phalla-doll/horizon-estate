export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  rating: string;
  reviewCount: number;
  area: string;
  floors: string;
  beds: string;
  baths: string;
  type: PropertyType;
  images: string[];
}

export type PropertyType = 'Buy' | 'Rent' | 'New developments' | 'Commercial properties';

export interface Agent {
  id: number;
  name: string;
  title: string;
  rating: string;
  reviewCount: number;
  phone: string;
  image: string;
}

export interface InvestmentOffer {
  id: number;
  title: string;
  location: string;
  area: string;
  floors: string;
  beds: string;
  baths: string;
  description: string;
  image: string;
  yield: string;
  roi: string;
  return: string;
}

export interface FilterState {
  country: string;
  propertyType: string;
  priceRange: string;
  size: string;
  bedrooms: string;
  bathrooms: string;
  activeType: PropertyType;
}
