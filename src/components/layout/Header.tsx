import { School } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <School className="w-8 h-8 text-primary-600" />
            <h1 className="text-xl font-bold text-gray-900">SSSA Platform</h1>
          </div>
          <button className="text-sm text-gray-600 hover:text-gray-900">
            Help
          </button>
        </div>
      </div>
    </header>
  );
}

