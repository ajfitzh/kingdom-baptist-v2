import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight text-blue-900">
          Kingdom Baptist
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          <Link href="/about" className="hover:text-blue-900 transition-colors">About</Link>
          <Link href="/ministries" className="hover:text-blue-900 transition-colors">Ministries</Link>
          <Link href="/media" className="hover:text-blue-900 transition-colors">Media</Link>
          <Link href="/give" className="hover:text-blue-900 transition-colors">Giving</Link>
        </div>
        {/* Mobile Menu Button Placeholder */}
        <div className="md:hidden text-2xl cursor-pointer">≡</div>
      </div>
    </nav>
  );
}