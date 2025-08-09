import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Link } from 'react-router-dom';
import { LogOut, Settings, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80 shadow-sm transition-all">
      <div className="container mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        

        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <h1 className="text-xl font-bold tracking-tight">ChatApp</h1>
        </Link>


        <div className="hidden sm:flex items-center gap-4">
          {authUser && (
            <>
              <Link
                to="/profile"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-base-200 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </Link>

              <button
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-error text-white hover:bg-error/90 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </>
          )}
        </div>


        {authUser && (<button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden p-2 rounded-lg hover:bg-base-200 transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>)
        }
        
      </div>


      {isMenuOpen && authUser && (
        <div className="sm:hidden bg-base-100 border-t border-base-300 px-6 py-4 space-y-3">
          <Link
            to="/profile"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-base-200 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <User className="w-5 h-5" />
            <span>Profile</span>
          </Link>

          <button
            onClick={() => {
              logout();
              setIsMenuOpen(false);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-error text-white hover:bg-error/90 transition-colors w-full"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
