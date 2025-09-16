import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../img/logo.png";
import avatar from "../img/perfil.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/jogos", label: "JOGOS" },
    { path: "/fotos", label: "FOTOS" },
    { path: "/campeonato", label: "CAMPEONATO" },
    { path: "/escolinhas", label: "ESCOLINHAS" },
    { path: "/historia", label: "HISTÓRIA DO FUTEBOL" },
    { path: "/sobre", label: "SOBRE NÓS" },
    { path: "/loja", label: "LOJA" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo Passa a Bola" className="w-10 h-10" />
        </Link>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6 font-medium text-black">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-purple-600 ${isActive ? "border-b-2 border-purple-600 pb-1" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/login" aria-label="Ir para Login" title="Ir para Login">
              <img
                src={avatar}
                alt="Perfil"
                className="w-10 h-10 rounded-full border-2 border-purple-600 cursor-pointer"
              />
            </Link></div>
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-purple-50 shadow-inner">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg font-medium text-black hover:text-purple-600 ${isActive ? "text-purple-700 font-bold" : ""
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