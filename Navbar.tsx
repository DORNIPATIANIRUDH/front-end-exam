import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, LogOut } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Navbar = () => {
  const { cart, user, logout } = useStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-black border-b border-[#FFD700]/30 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-[#FFD700]">ServiceHub</h1>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/services" className="text-[#FFD700]/80 hover:text-[#FFD700]">
              Services
            </Link>
            <Link to="/cart" className="text-[#FFD700]/80 hover:text-[#FFD700] relative">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FFD700] text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="text-[#FFD700]/80 hover:text-[#FFD700] flex items-center">
                  <User className="h-6 w-6 mr-2" />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-[#FFD700]/80 hover:text-[#FFD700] flex items-center"
                >
                  <LogOut className="h-6 w-6" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn-primary"
              >
                Sign In
              </Link>
            )}
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#FFD700]"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-black border-t border-[#FFD700]/30">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/services"
              className="block px-3 py-2 text-[#FFD700]/80 hover:text-[#FFD700]"
            >
              Services
            </Link>
            <Link
              to="/cart"
              className="block px-3 py-2 text-[#FFD700]/80 hover:text-[#FFD700]"
            >
              Cart ({totalItems})
            </Link>
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-[#FFD700]/80 hover:text-[#FFD700]"
                >
                  Profile ({user.name})
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-[#FFD700]/80 hover:text-[#FFD700]"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 bg-[#FFD700] text-black rounded-lg font-semibold"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};