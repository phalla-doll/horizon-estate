'use client';

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
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
import { properties } from "@/data/properties";

function PropertyCard({ property, onContactClick, isCompared, onCompareToggle }: { property: any, onContactClick: () => void, isCompared: boolean, onCompareToggle: () => void }) {
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

        {/* Compare Checkbox */}
        <label 
          className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white text-zinc-900 shadow-sm transition-colors z-10 cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        >
          <input 
            type="checkbox" 
            checked={isCompared}
            onChange={onCompareToggle}
            className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 cursor-pointer"
          />
        </label>
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
          <span className="text-xs text-zinc-400 ml-1">({property.reviewCount})</span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs text-zinc-600">
        <div className="flex items-center gap-1.5 relative group/tooltip">
          <Square className="w-3.5 h-3.5" /> 
          <span>{property.area}</span>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900 text-white text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
            Square meters
          </div>
        </div>
        <div className="flex items-center gap-1.5 relative group/tooltip">
          <MapPin className="w-3.5 h-3.5" /> 
          <span>{property.floors}</span>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900 text-white text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
            Floors
          </div>
        </div>
        <div className="flex items-center gap-1.5 relative group/tooltip">
          <Bed className="w-3.5 h-3.5" /> 
          <span>{property.beds}</span>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900 text-white text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
            Bedrooms
          </div>
        </div>
        <div className="flex items-center gap-1.5 relative group/tooltip">
          <Bath className="w-3.5 h-3.5" /> 
          <span>{property.baths}</span>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900 text-white text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
            Bathrooms
          </div>
        </div>
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
  const [selectedForComparison, setSelectedForComparison] = useState<number[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Filter states
  const [filterCountry, setFilterCountry] = useState("All countries");
  const [filterPropertyType, setFilterPropertyType] = useState("All types");
  const [filterPriceRange, setFilterPriceRange] = useState("All prices");
  const [filterSize, setFilterSize] = useState("All sizes (m²)");
  const [filterBedrooms, setFilterBedrooms] = useState("Bedrooms");
  const [filterBathrooms, setFilterBathrooms] = useState("Bathrooms");

  const toggleCompare = (id: number) => {
    setSelectedForComparison(prev => {
      if (prev.includes(id)) {
        return prev.filter(pId => pId !== id);
      }
      if (prev.length >= 4) {
        alert("You can compare up to 4 properties at a time.");
        return prev;
      }
      return [...prev, id];
    });
  };

  const filteredProperties = properties.filter(p => {
    // Type filter
    if (p.type !== activeFilter) return false;

    // Country filter
    if (filterCountry !== "All countries" && !p.location.includes(filterCountry)) return false;

    // Bedrooms filter
    if (filterBedrooms !== "Bedrooms") {
      const minBeds = parseInt(filterBedrooms.replace("+", ""));
      const pBeds = parseInt(p.beds.replace(/[^0-9]/g, "")) || 0;
      if (pBeds < minBeds) return false;
    }

    // Bathrooms filter
    if (filterBathrooms !== "Bathrooms") {
      const minBaths = parseInt(filterBathrooms.replace("+", ""));
      const pBaths = parseInt(p.baths.replace(/[^0-9]/g, "")) || 0;
      if (pBaths < minBaths) return false;
    }

    // Price range filter
    if (filterPriceRange !== "All prices") {
      const pPrice = parseInt(p.price.replace(/[^0-9]/g, ""));
      if (filterPriceRange === "Under $200,000" && pPrice >= 200000) return false;
      if (filterPriceRange === "$200,000 - $500,000" && (pPrice < 200000 || pPrice > 500000)) return false;
      if (filterPriceRange === "$500,000 - $1,000,000" && (pPrice < 500000 || pPrice > 1000000)) return false;
      if (filterPriceRange === "Over $1,000,000" && pPrice <= 1000000) return false;
    }

    // Size filter
    if (filterSize !== "All sizes (m²)") {
      const pSize = parseInt(p.area.replace(/[^0-9]/g, ""));
      if (filterSize === "Under 100 m²" && pSize >= 100) return false;
      if (filterSize === "100 - 300 m²" && (pSize < 100 || pSize > 300)) return false;
      if (filterSize === "300 - 500 m²" && (pSize < 300 || pSize > 500)) return false;
      if (filterSize === "Over 500 m²" && pSize <= 500) return false;
    }

    return true;
  });

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
              src="/image/pexels-expect-best-79873-323780.jpg"
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
                <select 
                  value={filterCountry}
                  onChange={(e) => setFilterCountry(e.target.value)}
                  className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                >
                  <option>All countries</option>
                  <option>USA</option>
                  <option>Caribbean</option>
                  <option>Portugal</option>
                  <option>Mexico</option>
                  <option>Greece</option>
                  <option>Spain</option>
                  <option>UK</option>
                  <option>UAE</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Italy</option>
                  <option>Singapore</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select 
                  value={filterPropertyType}
                  onChange={(e) => setFilterPropertyType(e.target.value)}
                  className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                >
                  <option>All types</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Office</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select 
                  value={filterPriceRange}
                  onChange={(e) => setFilterPriceRange(e.target.value)}
                  className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                >
                  <option>All prices</option>
                  <option>Under $200,000</option>
                  <option>$200,000 - $500,000</option>
                  <option>$500,000 - $1,000,000</option>
                  <option>Over $1,000,000</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select 
                  value={filterSize}
                  onChange={(e) => setFilterSize(e.target.value)}
                  className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                >
                  <option>All sizes (m²)</option>
                  <option>Under 100 m²</option>
                  <option>100 - 300 m²</option>
                  <option>300 - 500 m²</option>
                  <option>Over 500 m²</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select 
                  value={filterBedrooms}
                  onChange={(e) => setFilterBedrooms(e.target.value)}
                  className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                >
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
                <select 
                  value={filterBathrooms}
                  onChange={(e) => setFilterBathrooms(e.target.value)}
                  className="w-full appearance-none border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                >
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
                <button 
                  onClick={() => {
                    setFilterCountry("All countries");
                    setFilterPropertyType("All types");
                    setFilterPriceRange("All prices");
                    setFilterSize("All sizes (m²)");
                    setFilterBedrooms("Bedrooms");
                    setFilterBathrooms("Bathrooms");
                  }}
                  className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900"
                >
                  <SlidersHorizontal className="w-4 h-4" /> Clear filters
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* New Properties Section */}
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProperties.map(property => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                onContactClick={() => setIsModalOpen(true)} 
                isCompared={selectedForComparison.includes(property.id)}
                onCompareToggle={() => toggleCompare(property.id)}
              />
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
                <Image src="/agent-01.avif" alt="Olivia Barnes" fill className="object-cover" />
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
                <Image src="/agent-02.avif" alt="Carlos Garcia" fill className="object-cover" />
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
                <Image src="/agent-03.avif" alt="Avi Chen" fill className="object-cover" />
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
                <Image src="/agent-04.avif" alt="Marcus Lee" fill className="object-cover" />
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

      {/* Compare Modal */}
      {isCompareModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-6xl p-6 md:p-8 relative my-8">
            <button 
              onClick={() => setIsCompareModalOpen(false)}
              className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="text-2xl font-medium mb-8">Compare Properties</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 border-b border-zinc-200 w-1/5">Feature</th>
                    {selectedForComparison.map(id => {
                      const prop = properties.find(p => p.id === id);
                      return (
                        <th key={id} className="p-4 border-b border-zinc-200 w-1/5 align-top">
                          <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
                            <Image src={prop?.images[0] || ''} alt={prop?.title || ''} fill className="object-cover" referrerPolicy="no-referrer" />
                            <button 
                              onClick={() => toggleCompare(id)}
                              className="absolute top-2 right-2 w-6 h-6 bg-white/80 rounded-full flex items-center justify-center hover:bg-white text-zinc-900"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                          <h4 className="font-medium text-lg">{prop?.title}</h4>
                          <p className="text-zinc-500 text-sm font-normal">{prop?.location}</p>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="p-4 border-b border-zinc-100 font-medium text-zinc-500">Price</td>
                    {selectedForComparison.map(id => (
                      <td key={id} className="p-4 border-b border-zinc-100 font-medium text-lg">{properties.find(p => p.id === id)?.price}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-zinc-100 font-medium text-zinc-500">Rating</td>
                    {selectedForComparison.map(id => (
                      <td key={id} className="p-4 border-b border-zinc-100">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                          <span className="font-medium">{properties.find(p => p.id === id)?.rating}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-zinc-100 font-medium text-zinc-500">Area</td>
                    {selectedForComparison.map(id => (
                      <td key={id} className="p-4 border-b border-zinc-100">{properties.find(p => p.id === id)?.area}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-zinc-100 font-medium text-zinc-500">Bedrooms</td>
                    {selectedForComparison.map(id => (
                      <td key={id} className="p-4 border-b border-zinc-100">{properties.find(p => p.id === id)?.beds}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-zinc-100 font-medium text-zinc-500">Bathrooms</td>
                    {selectedForComparison.map(id => (
                      <td key={id} className="p-4 border-b border-zinc-100">{properties.find(p => p.id === id)?.baths}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-zinc-100 font-medium text-zinc-500">Floors</td>
                    {selectedForComparison.map(id => (
                      <td key={id} className="p-4 border-b border-zinc-100">{properties.find(p => p.id === id)?.floors}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-zinc-100 font-medium text-zinc-500">Type</td>
                    {selectedForComparison.map(id => (
                      <td key={id} className="p-4 border-b border-zinc-100">{properties.find(p => p.id === id)?.type}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            {selectedForComparison.length === 0 && (
              <div className="text-center py-12 text-zinc-500">
                No properties selected for comparison.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Compare Bar */}
      {selectedForComparison.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-6 py-4 rounded-full shadow-2xl z-40 flex items-center gap-6 animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium">
              {selectedForComparison.length}
            </span>
            <span className="text-sm font-medium">properties selected</span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsCompareModalOpen(true)}
              className="bg-white text-zinc-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-100 transition-colors"
            >
              Compare
            </button>
            <button 
              onClick={() => setSelectedForComparison([])}
              className="text-zinc-400 hover:text-white transition-colors p-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
