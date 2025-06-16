"use client";

import { Menu, X, Lock } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();


  

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/logements", label: "Logements" },
    { href: "/recherche", label: "Recherche" },
    { href: "/favoris", label: "Favoris" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="flex justify-between items-center px-6 py-6 bg-blue-100 shadow-md sticky top-0 z-30">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-700">
        <Link href="/">LocaGabon</Link>
      </div>

      {/* Menu desktop */}
      <nav className="hidden md:flex space-x-6 text-sm items-center text-gray-800">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`hover:text-blue-600 ${
              pathname === href ? "text-blue-700 font-semibold" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Actions */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          href="/login"
          className="flex items-center gap-1 text-sm text-gray-800 hover:text-blue-600"
        >
          <Lock size={16} />
          Connexion
        </Link>
        <Link
          href="/register"
          className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-2 rounded hover:from-blue-600 hover:to-blue-400 transition font-medium shadow-lg"
        >
          {"S'inscrire"}
        </Link>
      </div>

      {/* Burger menu */}
      <button
        className="md:hidden text-gray-700 z-30"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col space-y-4 p-6 md:hidden z-20 text-gray-800">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/login"
            className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            <Lock size={16} />
            Connexion
          </Link>
          <Link
            href="/register"
            className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-2 rounded hover:from-blue-600 hover:to-blue-400 transition font-medium shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            {"S'inscrire"}
          </Link>
        </div>
      )}
    </header>
  );
}
