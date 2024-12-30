import React from 'react';
import { Menu, Building2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b border-slate-800 backdrop-blur-md bg-slate-900/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">LARANA, INC.</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="#" active>HOME</NavLink>
            <NavLink href="#">ABOUT</NavLink>
            <NavLink href="#">SERVICE</NavLink>
            <NavLink href="#">HELP</NavLink>
          </div>

          <button className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) => (
  <a 
    href={href}
    className={`text-sm font-medium transition-colors ${
      active ? 'text-blue-400' : 'text-slate-300 hover:text-white'
    }`}
  >
    {children}
  </a>
);

export default Navbar;