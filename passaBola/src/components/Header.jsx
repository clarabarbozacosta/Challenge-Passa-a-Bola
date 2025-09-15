import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Campeonato" },
    { path: "/escolinhas", label: "Escolinhas" },
    { path: "/galeria", label: "Galeria" },
    { path: "/jogos", label: "Jogos" },
    { path: "/sobre", label: "Sobre Nós" },
    { path: "/loja", label: "Loja" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-purple-700 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        <Link to="/" className="font-bold text-xl">
            Passa a Bola
        </Link>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-pink-300 ${
                  isActive ? "border-b-2 border-pink-300" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-purple-800">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg hover:text-pink-300 ${
                      isActive ? "font-bold text-pink-300" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
