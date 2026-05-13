import { Link } from "react-router-dom";
import type { Prestation } from "@/lib/aria-data";
import { Clock, Sparkles, Star } from "lucide-react";

export function PrestaCard({ p, detailed = false }: { p: Prestation; detailed?: boolean }) {
  return (
    <article className="group card-luxe rounded-lg overflow-hidden bg-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.imageAlt}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-brown/20 to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {p.badge === "SIGNATURE" && (
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-gold/95 backdrop-blur px-4 py-2 rounded-full shadow-lg">
            <Sparkles className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
            <span className="label-spaced text-primary-foreground text-[0.65rem]">Signature</span>
          </div>
        )}
        <div className="absolute bottom-4 left-4 bg-cream/95 backdrop-blur px-4 py-2 rounded-lg shadow-lg border border-gold/30">
          <div className="font-serif text-2xl text-gold-dark">{p.prix} €</div>
          <div className="text-xs text-brown/60">à partir de</div>
        </div>
      </div>

      <div className="p-7">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {p.badge === "SIGNATURE" && (
            <span className="label-spaced inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 px-3 py-1.5 rounded-full text-[0.62rem] text-gold-dark">
              <Star className="w-3 h-3 fill-gold text-gold" />
              Signature
            </span>
          )}
          {p.requiresAcompte && (
            <span className="label-spaced inline-flex items-center gap-1.5 bg-beige px-3 py-1.5 rounded-full text-[0.62rem] text-brown/70 border border-beige-dark/30">
              <Clock className="w-3 h-3" />
              Acompte {p.acompte}€
            </span>
          )}
        </div>

        <h3 className="font-serif text-2xl text-brown group-hover:text-gold-dark transition-colors duration-300">
          {p.nom}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-brown/70">{p.description}</p>

        {detailed && p.requiresPerruqueEnvoi && (
          <div className="mt-4 rounded-lg border-l-2 border-gold bg-gold/5 p-4">
            <p className="text-xs italic text-brown/75 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
              Pour la pose de perruque, merci d'envoyer votre perruque la veille du rendez-vous.
            </p>
          </div>
        )}

        <div className="mt-6 flex items-center justify-between border-t border-beige-dark/50 pt-5">
          <div className="flex items-center gap-2 text-sm text-brown/60">
            <Clock size={16} className="text-gold" />
            <span>{p.duree}</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold/40 text-gold/40" />
            ))}
          </div>
        </div>

        <Link
          to={`/reservation?service=${p.id}`}
          className="btn-outline-gold label-spaced mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg group-hover:bg-gold group-hover:text-primary-foreground transition-all duration-300"
        >
          Réserver cette prestation
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
