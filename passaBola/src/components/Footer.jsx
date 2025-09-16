import { Instagram, Youtube } from "lucide-react";
import logo from "../img/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-4 rounded-t-lg shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-1">
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        <div className="flex space-x-6">
          <a
            href="https://www.youtube.com/@passabola"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <Youtube className="w-8 h-6 text-red-600" />
          </a>

          <a
            href="https://www.instagram.com/passaabola/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <Instagram className="w-6 h-6 text-pink-600" />
          </a>
        </div>
      </div>
    </footer>
  );
}