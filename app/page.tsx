'use client';

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Search,
  MapPin,
  Bed,
  Bath,
  Square,
  ArrowRight,
  ArrowLeft,
  Download,
  Star,
  Plus,
  SlidersHorizontal,
  X,
  Heart,
} from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Serenity Tower",
    price: "$340,000",
    location: "USA/California/Los Angeles",
    rating: "4.9",
    area: "300 m²",
    floors: "1 floor",
    beds: "6 beds",
    baths: "2 baths",
    type: "Buy",
    images: [
      "https://picsum.photos/seed/prop1/800/600",
      "https://picsum.photos/seed/prop1b/800/600",
      "https://picsum.photos/seed/prop1c/800/600",
    ]
  },
  {
    id: 2,
    title: "Island Retreat",
    price: "$220,000",
    location: "Caribbean/Bahamas/Exuma",
    rating: "4.8",
    area: "250 m²",
    floors: "1 floor",
    beds: "4 beds",
    baths: "1 bath",
    type: "Rent",
    images: [
      "https://picsum.photos/seed/prop2/800/600",
      "https://picsum.photos/seed/prop2b/800/600",
      "https://picsum.photos/seed/prop2c/800/600",
    ]
  },
  {
    id: 3,
    title: "Mountain Lodge",
    price: "$500,000",
    location: "USA/Colorado/Aspen",
    rating: "5.0",
    area: "400 m²",
    floors: "3 floors",
    beds: "6 beds",
    baths: "3 baths",
    type: "Buy",
    images: [
      "https://picsum.photos/seed/prop3/800/600",
      "https://picsum.photos/seed/prop3b/800/600",
      "https://picsum.photos/seed/prop3c/800/600",
    ]
  },
  {
    id: 4,
    title: "Comporta Beach Lux",
    price: "$296,000",
    location: "Portugal/Lisbon Coast/Comporta",
    rating: "4.7",
    area: "230 m²",
    floors: "1 floor",
    beds: "6 beds",
    baths: "3 baths",
    type: "New developments",
    images: [
      "https://picsum.photos/seed/prop4/800/600",
      "https://picsum.photos/seed/prop4b/800/600",
      "https://picsum.photos/seed/prop4c/800/600",
    ]
  },
  {
    id: 5,
    title: "Tulum Eco Retreat",
    price: "$450,000",
    location: "Mexico/Yucatan/Tulum",
    rating: "4.9",
    area: "150 m²",
    floors: "1 floor",
    beds: "3 beds",
    baths: "1 bath",
    type: "Rent",
    images: [
      "https://picsum.photos/seed/prop5/800/600",
      "https://picsum.photos/seed/prop5b/800/600",
      "https://picsum.photos/seed/prop5c/800/600",
    ]
  },
  {
    id: 6,
    title: "Azura Villa",
    price: "$470,000",
    location: "Greece/Cyclades/Mykonos",
    rating: "4.8",
    area: "400 m²",
    floors: "2 floors",
    beds: "6 beds",
    baths: "2 baths",
    type: "Commercial properties",
    images: [
      "https://picsum.photos/seed/prop6/800/600",
      "https://picsum.photos/seed/prop6b/800/600",
      "https://picsum.photos/seed/prop6c/800/600",
    ]
  }
];

function PropertyCard({ property, onContactClick }: { property: any, onContactClick: () => void }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
        <Image src={property.images[currentImage]} alt={property.title} fill className="object-cover transition-transform duration-500" referrerPolicy="no-referrer" />
        
        {/* Carousel Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={prevImage} className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white text-zinc-900 shadow-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button onClick={nextImage} className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white text-zinc-900 shadow-sm transition-colors">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {property.images.map((_: any, idx: number) => (
            <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImage ? 'bg-white' : 'bg-white/50'}`} />
          ))}
        </div>

        {/* Favorite Button */}
        <button onClick={toggleFavorite} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white text-zinc-900 shadow-sm transition-colors z-10">
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
        </button>
      </div>

      <div className="flex justify-between items-start mb-1">
        <h4 className="font-medium text-lg">{property.title}</h4>
        <span className="font-medium text-lg">{property.price}</span>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <p className="text-zinc-500 text-sm">{property.location}</p>
        <div className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
          <span className="text-sm font-medium">{property.rating}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs text-zinc-600">
        <div className="flex items-center gap-1.5"><Square className="w-3.5 h-3.5" /> {property.area}</div>
        <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {property.floors}</div>
        <div className="flex items-center gap-1.5"><Bed className="w-3.5 h-3.5" /> {property.beds}</div>
        <div className="flex items-center gap-1.5"><Bath className="w-3.5 h-3.5" /> {property.baths}</div>
      </div>
      <button 
        onClick={(e) => { e.stopPropagation(); onContactClick(); }}
        className="mt-4 w-full border border-zinc-200 text-zinc-900 py-2 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors"
      >
        Contact Agent
      </button>
    </div>
  );
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [activeFilter, setActiveFilter] = useState("Buy");

  const filteredProperties = properties.filter(p => p.type === activeFilter);

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === "price-asc") {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ""));
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ""));
      return priceA - priceB;
    }
    if (sortBy === "price-desc") {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ""));
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ""));
      return priceB - priceA;
    }
    if (sortBy === "rating-desc") {
      return parseFloat(b.rating) - parseFloat(a.rating);
    }
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="font-bold text-xl leading-none tracking-tight">
            HORIZON<br />ESTATE
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <a href="#" className="flex items-center gap-1 hover:text-zinc-900">
            Properties <ChevronDown className="w-4 h-4" />
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-zinc-900">
            Mortgage <span className="bg-zinc-900 text-white text-[10px] px-1.5 py-0.5 rounded-sm ml-1">New</span>
          </a>
          <a href="#" className="hover:text-zinc-900">Company</a>
          <a href="#" className="flex items-center gap-1 hover:text-zinc-900">
            Careers <ChevronDown className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-zinc-900">Blog</a>
        </nav>

        <button className="hidden md:flex items-center gap-2 border border-zinc-200 rounded-lg px-4 py-2 text-sm font-medium hover:bg-zinc-50 transition-colors">
          <Plus className="w-4 h-4" />
          Post a property
        </button>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] max-w-2xl">
              Find a place you<br />will call home
            </h1>
            <div className="flex flex-col items-start md:items-end gap-6 max-w-xs">
              <p className="text-zinc-500 text-sm leading-relaxed">
                With us you will find not just accommodation, but a place where your new life begins, full of cosiness and possibilities.
              </p>
              <button className="bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">
                Book a call
              </button>
            </div>
          </div>
          
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden">
            <Image
              src="https://picsum.photos/seed/hero/1920/800"
              alt="Modern luxury home"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Search/Filter Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-xl">
              We help you find the<br />home that will be yours
            </h2>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              Our projects are about harmony, style and care that everyone lives in what is really important to them.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-2xl p-4 shadow-sm">
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              <button 
                onClick={() => setActiveFilter("Buy")}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeFilter === "Buy" ? "border border-zinc-200 bg-zinc-50 text-zinc-900" : "text-zinc-500 hover:bg-zinc-50"}`}
              >
                Buy
              </button>
              <button 
                onClick={() => setActiveFilter("Rent")}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeFilter === "Rent" ? "border border-zinc-200 bg-zinc-50 text-zinc-900" : "text-zinc-500 hover:bg-zinc-50"}`}
              >
                Rent
              </button>
              <button 
                onClick={() => setActiveFilter("New developments")}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeFilter === "New developments" ? "border border-zinc-200 bg-zinc-50 text-zinc-900" : "text-zinc-500 hover:bg-zinc-50"}`}
              >
                New developments
              </button>
              <button 
                onClick={() => setActiveFilter("Commercial properties")}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeFilter === "Commercial properties" ? "border border-zinc-200 bg-zinc-50 text-zinc-900" : "text-zinc-500 hover:bg-zinc-50"}`}
              >
                Commercial properties
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
              <div className="relative">
                <select className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900">
                  <option>All countries</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900">
                  <option>New property</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900">
                  <option>$280,000 - $500,000</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900">
                  <option>All sizes (m²)</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900">
                  <option>Bedrooms</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                  <option>5+</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900">
                  <option>Bathrooms</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-zinc-100">
              <button className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900">
                <Plus className="w-4 h-4" /> More options
              </button>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900">
                  <SlidersHorizontal className="w-4 h-4" /> Clear filters
                </button>
                <button className="bg-zinc-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">
                  Show properties
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* New Properties Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h3 className="text-2xl font-medium">New properties</h3>
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none border border-zinc-200 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 bg-white"
              >
                <option value="default">Sort by: Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Rating: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProperties.map(property => (
              <PropertyCard key={property.id} property={property} onContactClick={() => setIsModalOpen(true)} />
            ))}
          </div>
        </section>

        {/* How it works Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-xl">
              See what we offer<br />and how it works
            </h2>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              Virtual tours, curated listings, and expert guidance — everything you need to explore and buy with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-3xl font-medium mb-4">Property<br />selection</h3>
                <p className="text-zinc-500 text-sm mb-8 max-w-sm leading-relaxed">
                  Agent provides a tailored list of verified listings. Includes photos, 3D tours, and offline/online viewings.
                </p>
                <button className="border border-zinc-200 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors">
                  Get consultation
                </button>
              </div>
              
              <div className="mt-16 flex flex-col gap-4">
                <div className="flex items-center gap-4 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
                  Request & requirements
                </div>
                <div className="flex items-center gap-4 text-zinc-900 font-medium text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                  Property selection
                </div>
                <div className="flex items-center gap-4 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
                  Legal support
                </div>
                <div className="flex items-center gap-4 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
                  Key transfer
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="https://picsum.photos/seed/interior/1000/800" alt="Property interior" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              {/* Floor plan overlay */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white p-2 shadow-xl rounded-xl hidden md:block border border-zinc-100">
                <div className="relative w-full h-full border border-dashed border-zinc-300 rounded-lg flex items-center justify-center bg-zinc-50">
                  <span className="text-xs text-zinc-400 font-mono">Floor Plan</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Agents Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-zinc-50 rounded-[3rem] my-16">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-medium">Expert agents</h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-white transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Agent 1 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-zinc-100">
                <Image src="https://picsum.photos/seed/agent1/400/500" alt="Olivia Barnes" fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-white/80 backdrop-blur-sm px-2 py-1 rounded">Horizon<br/>Estate</div>
              </div>
              <h4 className="font-medium text-lg">Olivia Barnes</h4>
              <p className="text-zinc-500 text-xs mb-3">Real estate agent</p>
              <div className="flex items-center gap-1 text-sm mb-4">
                <span className="font-medium">5.0</span>
                <span className="text-zinc-400 text-xs">/ 120 reviews</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-zinc-900 text-white py-2 rounded-lg text-xs font-medium hover:bg-zinc-800">
                  +1 (213) 555-...
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-zinc-200 rounded-lg hover:bg-zinc-50">
                  <span className="text-sm">@</span>
                </button>
              </div>
            </div>

            {/* Agent 2 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-zinc-100">
                <Image src="https://picsum.photos/seed/agent2/400/500" alt="Carlos Garcia" fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-white/80 backdrop-blur-sm px-2 py-1 rounded">Horizon<br/>Estate</div>
              </div>
              <h4 className="font-medium text-lg">Carlos Garcia</h4>
              <p className="text-zinc-500 text-xs mb-3">Commercial real estate expert</p>
              <div className="flex items-center gap-1 text-sm mb-4">
                <span className="font-medium">4.9</span>
                <span className="text-zinc-400 text-xs">/ 80 reviews</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-zinc-900 text-white py-2 rounded-lg text-xs font-medium hover:bg-zinc-800">
                  +1 (416) 555-...
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-zinc-200 rounded-lg hover:bg-zinc-50">
                  <span className="text-sm">@</span>
                </button>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                className="mt-3 w-full border border-zinc-200 text-zinc-900 py-2 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors"
              >
                Contact Agent
              </button>
            </div>

            {/* Agent 3 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-zinc-100">
                <Image src="https://picsum.photos/seed/agent3/400/500" alt="Avi Chen" fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-white/80 backdrop-blur-sm px-2 py-1 rounded">Horizon<br/>Estate</div>
              </div>
              <h4 className="font-medium text-lg">Avi Chen</h4>
              <p className="text-zinc-500 text-xs mb-3">Real estate broker</p>
              <div className="flex items-center gap-1 text-sm mb-4">
                <span className="font-medium">4.7</span>
                <span className="text-zinc-400 text-xs">/ 138 reviews</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-zinc-900 text-white py-2 rounded-lg text-xs font-medium hover:bg-zinc-800">
                  +1 (408) 555-...
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-zinc-200 rounded-lg hover:bg-zinc-50">
                  <span className="text-sm">@</span>
                </button>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                className="mt-3 w-full border border-zinc-200 text-zinc-900 py-2 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors"
              >
                Contact Agent
              </button>
            </div>

            {/* Agent 4 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-zinc-100">
                <Image src="https://picsum.photos/seed/agent4/400/500" alt="Marcus Lee" fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-white/80 backdrop-blur-sm px-2 py-1 rounded">Horizon<br/>Estate</div>
              </div>
              <h4 className="font-medium text-lg">Marcus Lee</h4>
              <p className="text-zinc-500 text-xs mb-3">Real estate agent</p>
              <div className="flex items-center gap-1 text-sm mb-4">
                <span className="font-medium">4.5</span>
                <span className="text-zinc-400 text-xs">/ 76 reviews</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-zinc-900 text-white py-2 rounded-lg text-xs font-medium hover:bg-zinc-800">
                  +1 (917) 555-...
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-zinc-200 rounded-lg hover:bg-zinc-50">
                  <span className="text-sm">@</span>
                </button>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                className="mt-3 w-full border border-zinc-200 text-zinc-900 py-2 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors"
              >
                Contact Agent
              </button>
            </div>
          </div>
        </section>

        {/* Investments Stats Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-xl">
              Reliable facilities<br />for stable investments
            </h2>
            <div className="max-w-xs flex flex-col gap-4">
              <p className="text-zinc-500 text-sm leading-relaxed">
                Our assets are not just square meters, it&apos;s an opportunity for your capital to work for you.
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We carefully select the best investment offers for our clients.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat 1 */}
            <div className="border border-zinc-200 rounded-2xl p-6">
              <p className="text-zinc-500 text-sm mb-2">Total return</p>
              <p className="text-4xl font-medium mb-8">19%</p>
              <div className="flex items-end gap-1 h-16">
                {[40, 60, 45, 70, 55, 80, 65, 90, 75, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-zinc-200 rounded-t-sm" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className="border border-zinc-200 rounded-2xl p-6">
              <p className="text-zinc-500 text-sm mb-2">Cumulative net cashflow</p>
              <p className="text-4xl font-medium mb-8">$820,000</p>
              <div className="flex items-end gap-1 h-16">
                {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-zinc-200 rounded-t-sm" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>

            {/* Stat 3 */}
            <div className="border border-zinc-200 rounded-2xl p-6">
              <p className="text-zinc-500 text-sm mb-2">Average IRR</p>
              <p className="text-4xl font-medium mb-8">14%</p>
              <div className="flex items-end gap-1 h-16">
                {[50, 40, 60, 30, 70, 50, 80, 60, 90, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-zinc-200 rounded-t-sm" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Offers for investment Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h3 className="text-2xl font-medium mb-8">Offers for investment</h3>
          <div className="flex flex-col gap-6">
            {/* Offer 1 */}
            <div className="flex flex-col lg:flex-row border border-zinc-200 rounded-2xl overflow-hidden">
              <div className="relative w-full lg:w-1/3 aspect-[4/3] lg:aspect-auto">
                <Image src="https://picsum.photos/seed/invest1/800/600" alt="Azura Villa" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-medium mb-1">Azura Villa</h4>
                  <p className="text-zinc-500 text-sm mb-4">Greece/Cyclades/Mykonos</p>
                  <div className="flex items-center gap-4 text-xs text-zinc-600 mb-6">
                    <div className="flex items-center gap-1.5"><Square className="w-3.5 h-3.5" /> 650 m²</div>
                    <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> 2 floors</div>
                    <div className="flex items-center gap-1.5"><Bed className="w-3.5 h-3.5" /> 8 beds</div>
                    <div className="flex items-center gap-1.5"><Bath className="w-3.5 h-3.5" /> 2 baths</div>
                  </div>
                  <p className="text-sm text-zinc-600 mb-8 max-w-md">
                    More than a residence — a curated living concept. Enjoy private concierge, peaceful courtyards, and custom interiors for daily life.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="bg-zinc-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800">
                    Book now
                  </button>
                  <button className="flex items-center gap-2 border border-zinc-200 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-50">
                    Download brochure <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-64 bg-zinc-50 p-6 lg:p-8 flex flex-col justify-center gap-6 border-t lg:border-t-0 lg:border-l border-zinc-200">
                <div>
                  <p className="text-2xl font-medium">$7,000</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Yield</p>
                </div>
                <div>
                  <p className="text-2xl font-medium">10%</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">ROI</p>
                </div>
                <div>
                  <p className="text-2xl font-medium">$11,275</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Return</p>
                </div>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="flex flex-col lg:flex-row border border-zinc-200 rounded-2xl overflow-hidden">
              <div className="relative w-full lg:w-1/3 aspect-[4/3] lg:aspect-auto">
                <Image src="https://picsum.photos/seed/invest2/800/600" alt="Serenity Harbor" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-medium mb-1">Serenity Harbor</h4>
                  <p className="text-zinc-500 text-sm mb-4">Italy/Tuscany/Siena</p>
                  <div className="flex items-center gap-4 text-xs text-zinc-600 mb-6">
                    <div className="flex items-center gap-1.5"><Square className="w-3.5 h-3.5" /> 550 m²</div>
                    <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> 2 floors</div>
                    <div className="flex items-center gap-1.5"><Bed className="w-3.5 h-3.5" /> 6 beds</div>
                    <div className="flex items-center gap-1.5"><Bath className="w-3.5 h-3.5" /> 3 baths</div>
                  </div>
                  <p className="text-sm text-zinc-600 mb-8 max-w-md">
                    A tranquil retreat set amidst rolling hills, with lush gardens, a pool, and stunning countryside views, ideal for relaxation and events.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="bg-zinc-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800">
                    Book now
                  </button>
                  <button className="flex items-center gap-2 border border-zinc-200 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-50">
                    Download brochure <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-64 bg-zinc-50 p-6 lg:p-8 flex flex-col justify-center gap-6 border-t lg:border-t-0 lg:border-l border-zinc-200">
                <div>
                  <p className="text-2xl font-medium">$9,500</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Yield</p>
                </div>
                <div>
                  <p className="text-2xl font-medium">12%</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">ROI</p>
                </div>
                <div>
                  <p className="text-2xl font-medium">$14,500</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Return</p>
                </div>
              </div>
            </div>

            {/* Offer 3 */}
            <div className="flex flex-col lg:flex-row border border-zinc-200 rounded-2xl overflow-hidden">
              <div className="relative w-full lg:w-1/3 aspect-[4/3] lg:aspect-auto">
                <Image src="https://picsum.photos/seed/invest3/800/600" alt="Ocean Breeze Retreat" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-medium mb-1">Ocean Breeze Retreat</h4>
                  <p className="text-zinc-500 text-sm mb-4">Spain/Andalusia/Malaga</p>
                  <div className="flex items-center gap-4 text-xs text-zinc-600 mb-6">
                    <div className="flex items-center gap-1.5"><Square className="w-3.5 h-3.5" /> 150 m²</div>
                    <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> 1 floor</div>
                    <div className="flex items-center gap-1.5"><Bed className="w-3.5 h-3.5" /> 4 beds</div>
                    <div className="flex items-center gap-1.5"><Bath className="w-3.5 h-3.5" /> 1 bath</div>
                  </div>
                  <p className="text-sm text-zinc-600 mb-8 max-w-md">
                    A chic coastal villa offering beach access, amenities, and breathtaking ocean views, designed for an ideal seaside retreat.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="bg-zinc-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800">
                    Book now
                  </button>
                  <button className="flex items-center gap-2 border border-zinc-200 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-50">
                    Download brochure <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-64 bg-zinc-50 p-6 lg:p-8 flex flex-col justify-center gap-6 border-t lg:border-t-0 lg:border-l border-zinc-200">
                <div>
                  <p className="text-2xl font-medium">$15,000</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Yield</p>
                </div>
                <div>
                  <p className="text-2xl font-medium">15%</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">ROI</p>
                </div>
                <div>
                  <p className="text-2xl font-medium">$22,000</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Return</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-zinc-50 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
                Smart selection<br />of premium real estate
              </h2>
              <p className="text-zinc-500 text-sm mb-10 max-w-md leading-relaxed">
                We offer a selection of premium real estate — from modern villas to historical residences — each chosen for its architectural integrity, location, and long-term value.
              </p>
              <div className="flex gap-4">
                <button className="bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-800">
                  Explore properties
                </button>
                <button className="border border-zinc-200 bg-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-50">
                  Get consultation
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="https://picsum.photos/seed/cta/800/600" alt="Happy couple" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8 border-b border-zinc-200 pb-12">
          <h2 className="text-2xl md:text-3xl font-medium max-w-md">
            We help you discover and own the world&apos;s finest real estate
          </h2>
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex items-center gap-1 text-emerald-500">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-bold text-lg text-zinc-900 ml-1">Trustpilot</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-emerald-500 p-1 rounded-sm">
                  <Star className="w-3 h-3 text-white fill-current" />
                </div>
              ))}
              <span className="text-sm font-medium ml-2">1280 reviews</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-bold text-xl leading-none tracking-tight mb-6">
              HORIZON<br />ESTATE
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <a href="mailto:sales@horizon.com" className="text-sm hover:text-zinc-600">sales@horizon.com</a>
            <a href="tel:+33612345678" className="text-sm hover:text-zinc-600">+33 612 34 56 78</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm hover:text-zinc-600">Instagram</a>
            <a href="#" className="text-sm hover:text-zinc-600">Facebook</a>
            <a href="#" className="text-sm hover:text-zinc-600">X.com</a>
            <a href="#" className="text-sm hover:text-zinc-600">LinkedIn</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200 text-xs text-zinc-400">
          <p>© 2025 Horizon Estate. All rights reserved.</p>
          <a href="#" className="hover:text-zinc-600 mt-4 md:mt-0">Privacy policy</a>
        </div>
      </footer>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative shadow-xl">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-medium mb-4">Contact Agent</h3>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Name</label>
                <input type="text" className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
                <input type="email" className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900" placeholder="Your email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Phone</label>
                <input type="tel" className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900" placeholder="Your phone number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Message</label>
                <textarea className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 min-h-[100px]" placeholder="I'm interested in this property..."></textarea>
              </div>
              <button type="button" onClick={() => setIsModalOpen(false)} className="w-full bg-zinc-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors mt-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
