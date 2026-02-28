import type { InvestmentOffer } from '@/types/property';

export const investmentOffers: InvestmentOffer[] = [
  {
    id: 1,
    title: "Azura Villa",
    location: "Greece/Cyclades/Mykonos",
    area: "650 m²",
    floors: "2 floors",
    beds: "8 beds",
    baths: "2 baths",
    description: "More than a residence — a curated living concept. Enjoy private concierge, peaceful courtyards, and custom interiors for daily life.",
    image: "https://picsum.photos/seed/invest1/800/600",
    yield: "$7,000",
    roi: "10%",
    return: "$11,275"
  },
  {
    id: 2,
    title: "Serenity Harbor",
    location: "Italy/Tuscany/Siena",
    area: "550 m²",
    floors: "2 floors",
    beds: "6 beds",
    baths: "3 baths",
    description: "A tranquil retreat set amidst rolling hills, with lush gardens, a pool, and stunning countryside views, ideal for relaxation and events.",
    image: "https://picsum.photos/seed/invest2/800/600",
    yield: "$9,500",
    roi: "12%",
    return: "$14,500"
  },
  {
    id: 3,
    title: "Ocean Breeze Retreat",
    location: "Spain/Andalusia/Malaga",
    area: "150 m²",
    floors: "1 floor",
    beds: "4 beds",
    baths: "1 bath",
    description: "A chic coastal villa offering beach access, amenities, and breathtaking ocean views, designed for an ideal seaside retreat.",
    image: "https://picsum.photos/seed/invest3/800/600",
    yield: "$15,000",
    roi: "15%",
    return: "$22,000"
  }
];
