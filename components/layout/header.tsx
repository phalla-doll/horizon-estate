import { ChevronDown, Search, Plus } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="font-bold text-xl leading-none tracking-tight">
          HORIZON<br />ESTATE
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
        <a href="#properties" className="flex items-center gap-1 hover:text-zinc-900">
          Properties <ChevronDown className="w-4 h-4" />
        </a>
        <a href="#mortgage" className="flex items-center gap-1 hover:text-zinc-900">
          Mortgage <span className="bg-zinc-900 text-white text-[10px] px-1.5 py-0.5 rounded-sm ml-1">New</span>
        </a>
        <a href="#company" className="hover:text-zinc-900">Company</a>
        <a href="#careers" className="flex items-center gap-1 hover:text-zinc-900">
          Careers <ChevronDown className="w-4 h-4" />
        </a>
        <a href="#blog" className="hover:text-zinc-900">Blog</a>
      </nav>

      <button className="hidden md:flex items-center gap-2 border border-zinc-200 rounded-lg px-4 py-2 text-sm font-medium hover:bg-zinc-50 transition-colors" type="button">
        <Plus className="w-4 h-4" />
        Post a property
      </button>
    </header>
  );
}
