import { Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-purple-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4 md:space-y-2">
 
        <p className="text-center text-sm md:text-base">
          © 2025 Passa a Bola
        </p>

        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/passaabola/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-pink-300"
          >
            <Instagram size={20} /> <span className="hidden sm:inline">Instagram</span>
          </a>

          <a
            href="https://www.youtube.com/@passabola"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-pink-300"
          >
            <Youtube size={20} /> <span className="hidden sm:inline">YouTube</span>
          </a>

          <a
            href="mailto:contato@passaabola.com"
            className="flex items-center gap-2 hover:text-pink-300"
          >
            <Mail size={20} /> <span className="hidden sm:inline">Contato</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
