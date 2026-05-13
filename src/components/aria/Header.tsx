import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Crown } from "lucide-react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/prestations", label: "Prestations" },
  { to: "/reservation", label: "Réservation" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-cream/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img src="https://res.cloudinary.com/dlna2kuo1/image/upload/v1778689233/Ariaa-removebg-preview_frijbp.png" alt="Logo ARIA HOUSE" className="h-14 w-auto transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute -inset-1 bg-gold/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Link>

        <nav className="hidden gap-10 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `label-spaced text-brown/70 transition-all duration-300 hover:text-gold-dark relative group ${isActive ? "text-gold-dark font-medium" : ""}`
              }
              end
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-dark group-hover:w-full transition-all duration-300" />
            </NavLink>
          ))}
        </nav>

        <Link
          to="/reservation"
          className="btn-gold-luxe label-spaced hidden items-center gap-2 px-6 py-2.5 rounded-full md:inline-flex"
        >
          <Crown className="w-4 h-4" />
          Réserver
        </Link>

        <button
          aria-label="Menu"
          className="text-brown md:hidden hover:text-gold-dark transition-colors"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold/20 bg-cream/98 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="label-spaced py-3 text-brown/80 hover:text-gold-dark transition-colors border-b border-beige/50 last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/reservation"
              onClick={() => setOpen(false)}
              className="btn-gold-luxe label-spaced mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full"
            >
              <Crown className="w-4 h-4" />
              Réserver
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
