'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import {
 
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import RedirectOnSignIn from './RedirectOnSignIn';
import { Menu, X, Home, Building, Phone, Heart, Plus, Bell } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Accueil', icon: Home },
  { href: '/logements', label: 'Logements', icon: Building },
  { href: '/contact', label: 'Contact', icon: Phone },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  // Références pour détecter les clics extérieurs
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Détecter le scroll pour adapter le style de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Fermer les menus lors du clic extérieur (CORRIGÉ)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Fermer le menu mobile si le clic est en dehors
      if (
        isOpen && 
        mobileMenuRef.current && 
        hamburgerRef.current &&
        !mobileMenuRef.current.contains(target) &&
        !hamburgerRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
      
      // Fermer le menu utilisateur
      setShowUserMenu(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Fonction pour toggle le menu mobile
  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-gradient-to-r from-blue-50 to-blue-100'
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
          
          {/* Logo + Titre avec animation gabonaise */}
          <Link 
            href="/" 
            className="flex items-center gap-3 text-blue-600 font-bold text-xl hover:text-blue-700 transition-colors group"
          >
            <div className="relative">
              {/* Logo maison avec motifs gabonais */}
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Home className="w-6 h-6 text-white" />
                  {/* Motif traditionnel gabonais - trois lignes symbolisant l'unité */}
                  <div className="absolute -bottom-1 -right-1 flex flex-col gap-0.5">
                    <div className="w-2 h-0.5 bg-yellow-400 rounded-full"></div>
                    <div className="w-1.5 h-0.5 bg-yellow-400 rounded-full"></div>
                    <div className="w-1 h-0.5 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <span className="hidden sm:block">LocaGabon</span>
            <div className="hidden lg:block text-xs text-green-600 font-normal italic">
              Votre maison vous attend
            </div>
          </Link>

          {/* Desktop Navigation avec indicateur actif amélioré */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50 shadow-sm' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {item.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <RedirectOnSignIn />

            <SignedIn>
              {/* User Button avec menu custom */}
              <div className="relative">
                <div 
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8 ring-2 ring-blue-100 hover:ring-blue-200 transition-all"
                      }
                    }}
                  />
                </div>
              </div>
            </SignedIn>

            <SignedOut>
              <div className="flex items-center gap-2">
               

                <SignUpButton mode="modal">
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-sm hover:shadow-md font-medium">
                    Propriétaire
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>

          {/* Mobile Menu Button avec animation CORRIGÉ */}
          <button 
            ref={hamburgerRef}
            className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`absolute inset-0 w-6 h-6 transition-all duration-200 ${
                  isOpen ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                className={`absolute inset-0 w-6 h-6 transition-all duration-200 ${
                  isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu avec animation améliorée CORRIGÉ */}
        <div 
          ref={mobileMenuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 bg-white/95 backdrop-blur-md border-t border-gray-100">
            
            {/* Navigation Mobile */}
            <div className="space-y-1 mb-4">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setIsOpen(false)}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Actions Mobile */}
            <SignedIn>
              <div className="space-y-3 pt-4 border-t border-gray-100">
                
                {/* Favoris et Notifications */}
                <div className="flex gap-3">
                  <Link
                    href="/favoris"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Heart className="w-5 h-5" />
                    <span>Favoris (3)</span>
                  </Link>
                  
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                    <Bell className="w-5 h-5" />
                    <span>Notifications</span>
                  </button>
                </div>

                {/* Publier une annonce */}
                <Link
                  href="/publier"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all font-medium shadow-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <Plus className="w-5 h-5" />
                  Publier une annonce
                </Link>

                {/* User Profile */}
                <div className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Mon compte</span>
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8"
                      }
                    }}
                  />
                </div>
              </div>
            </SignedIn>

            <SignedOut>
              <div className="space-y-3 pt-4 border-t border-gray-100">
                
                <SignUpButton mode="modal">
                  <button 
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all font-medium shadow-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Propriétaire
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </div>
      </nav>

      {/* Spacer pour compenser la navbar fixed */}
      <div className="h-16"></div>
    </>
  );
}