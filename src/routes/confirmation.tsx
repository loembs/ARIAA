import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/aria/Layout";
import { useBooking, bookingStore } from "@/lib/booking-store";
import { getPrestation, COIFFEUSES } from "@/lib/aria-data";
import { Check, Mail } from "lucide-react";
import { useEffect } from "react";

export const Route = createFileRoute("/confirmation")({
  component: ConfirmationPage,
  head: () => ({ meta: [{ title: "Confirmation — ARIA HOUSE" }] }),
});

function ConfirmationPage() {
  const booking = useBooking();
  const presta = getPrestation(booking.serviceId);
  const coiffeuse = COIFFEUSES.find((c) => c.id === booking.coiffeuseId);

  // Reset on unmount so a fresh visit doesn't reuse stale data
  useEffect(() => () => bookingStore.reset(), []);

  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <div className="fade-up mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold bg-gold/10 text-gold-dark shadow-[var(--shadow-gold)]">
          <Check size={36} strokeWidth={2.2} />
        </div>
        <h1 className="fade-up mt-8 font-serif text-4xl text-brown md:text-5xl" style={{ animationDelay: "120ms" }}>
          Réservation confirmée
        </h1>
        <p className="fade-up mt-3 text-brown/65" style={{ animationDelay: "200ms" }}>
          Un email de confirmation vient de vous être envoyé.
        </p>

        {presta && (
          <div className="fade-up mt-12 border-t-2 border-gold bg-card p-8 text-left shadow-[var(--shadow-soft)]" style={{ animationDelay: "280ms" }}>
            <div className="label-spaced text-brown/60">Votre rendez-vous</div>
            <h2 className="mt-2 font-serif text-2xl text-brown">{presta.nom}</h2>
            <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="label-spaced text-brown/50 text-[0.6rem]">Date</dt>
                <dd className="mt-1 font-serif text-lg text-brown">
                  {booking.date && new Date(booking.date + "T00:00:00").toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                </dd>
              </div>
              <div>
                <dt className="label-spaced text-brown/50 text-[0.6rem]">Horaire</dt>
                <dd className="mt-1 font-serif text-lg text-brown">{booking.time}</dd>
              </div>
              <div>
                <dt className="label-spaced text-brown/50 text-[0.6rem]">Coiffeuse</dt>
                <dd className="mt-1 font-serif text-lg text-brown">{coiffeuse?.nom}</dd>
              </div>
              <div>
                <dt className="label-spaced text-brown/50 text-[0.6rem]">Tarif</dt>
                <dd className="mt-1 font-serif text-lg text-gold-dark">{presta.prix} €</dd>
              </div>
            </dl>
          </div>
        )}

        {presta?.requiresPerruqueEnvoi && (
          <div className="fade-up mt-6 flex items-start gap-3 border-l-2 border-gold bg-beige/60 p-5 text-left text-sm italic text-brown/80">
            <Mail size={18} className="mt-0.5 shrink-0 text-gold-dark" />
            <p><strong className="not-italic font-medium">N'oubliez pas</strong> d'envoyer votre perruque la veille de votre rendez-vous.</p>
          </div>
        )}

        <Link
          to="/"
          className="label-spaced mt-12 inline-flex items-center justify-center border border-gold px-8 py-4 text-gold-dark transition-colors hover:bg-gold hover:text-primary-foreground"
        >
          Retour à l'accueil
        </Link>
      </section>
    </Layout>
  );
}
