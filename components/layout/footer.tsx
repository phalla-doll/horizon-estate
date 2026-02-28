import { Star } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8 border-b border-zinc-200 pb-12">
        <h2 className="text-2xl md:text-3xl font-medium max-w-md">
          We help you discover and own of world&apos;s finest real estate
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
          <a href="#instagram" className="text-sm hover:text-zinc-600">Instagram</a>
          <a href="#facebook" className="text-sm hover:text-zinc-600">Facebook</a>
          <a href="#x" className="text-sm hover:text-zinc-600">X.com</a>
          <a href="#linkedin" className="text-sm hover:text-zinc-600">LinkedIn</a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200 text-xs text-zinc-400">
        <p>© 2025 Horizon Estate. All rights reserved.</p>
        <a href="#privacy" className="hover:text-zinc-600 mt-4 md:mt-0">Privacy policy</a>
      </div>
    </footer>
  );
}
