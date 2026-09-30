import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Home as HomeIcon } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass py-4 px-6 md:px-12 flex items-center justify-between">
      <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter text-white hover:text-neon-blue transition-colors">
        SITE DO MEU <span className="text-gradient">NAMORADO</span>
      </Link>
      
      <div className="flex gap-6 items-center">
        <Link 
          to="/" 
          className={`flex items-center gap-2 text-sm uppercase tracking-wider font-semibold transition-all ${location.pathname === '/' ? 'text-neon-blue' : 'text-gray-400 hover:text-white'}`}
        >
          <HomeIcon size={18} />
          <span className="hidden md:block">Home</span>
        </Link>
        <Link 
          to="/shop" 
          className={`flex items-center gap-2 text-sm uppercase tracking-wider font-semibold transition-all ${location.pathname === '/shop' ? 'text-neon-purple' : 'text-gray-400 hover:text-white'}`}
        >
          <ShoppingBag size={18} />
          <span className="hidden md:block">Shop</span>
        </Link>
      </div>
    </nav>
  );
}
