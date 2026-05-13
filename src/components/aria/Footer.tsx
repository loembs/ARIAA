import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone, Star, Crown } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gold/20 bg-gradient-to-b from-beige/40 to-beige/60">
      {/* Gold Decorative Line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-4">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Crown className="w-5 h-5 text-gold" />
            <span className="label-spaced gold-text text-lg">ARIA HOUSE</span>
          </div>
          <p className="mt-3 text-sm text-brown/70 leading-relaxed">
            L'excellence capillaire, l'art de vous sublimer.
          </p>
          <div className="mt-6 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="label-spaced mb-4 text-gold-dark">Navigation</h4>
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/" className="text-brown/70 hover:text-gold-dark transition-colors flex items-center gap-2 group">
              <span className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              Accueil
            </Link>
            <Link to="/prestations" className="text-brown/70 hover:text-gold-dark transition-colors flex items-center gap-2 group">
              <span className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              Prestations
            </Link>
            <Link to="/reservation" className="text-brown/70 hover:text-gold-dark transition-colors flex items-center gap-2 group">
              <span className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              Réservation
            </Link>
            <Link to="/legal" className="text-brown/70 hover:text-gold-dark transition-colors flex items-center gap-2 group">
              <span className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              Mentions légales
            </Link>
          </div>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="label-spaced mb-4 text-gold-dark">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-brown/70">
            <a href="tel:+33123456789" className="flex items-center gap-2 hover:text-gold-dark transition-colors group">
              <Phone className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
              01 23 45 67 89
            </a>
            <a href="mailto:contact@ariahouse.com" className="flex items-center gap-2 hover:text-gold-dark transition-colors group">
              <Mail className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
              contact@ariahouse.com
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gold-dark transition-colors group">
              <MapPin className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
              Paris, France
            </a>
          </div>
        </div>

        {/* Hours Column */}
        <div>
          <h4 className="label-spaced mb-4 text-gold-dark">Horaires</h4>
          <div className="text-sm text-brown/70 space-y-2">
            <p>Lundi – Vendredi</p>
            <p className="font-serif text-gold-dark">10h – 20h</p>
            <p className="mt-2">Samedi</p>
            <p className="font-serif text-gold-dark">10h – 18h</p>
            <p className="mt-2 text-brown/50 italic">Dimanche : Fermé</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20 bg-brown/5 px-6 py-6">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brown/50">
            © {new Date().getFullYear()} ARIA HOUSE — Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
