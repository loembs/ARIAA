import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/aria/Layout";

export const Route = createFileRoute("/legal")({
  component: LegalPage,
  head: () => ({ meta: [{ title: "Mentions légales & CGV — ARIA HOUSE" }] }),
});

function LegalPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <span className="label-spaced text-gold-dark">Informations</span>
        <h1 className="mt-3 font-serif text-4xl text-brown md:text-5xl">
          Mentions légales & CGV
        </h1>

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-brown/80">
          <section>
            <h2 className="font-serif text-2xl text-brown">Mentions légales</h2>
            <p className="mt-3">
              ARIA HOUSE — Salon de beauté. Adresse, SIRET et coordonnées de l'éditeur à compléter.
              Hébergement : à compléter.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-brown">Conditions générales de vente</h2>
            <h3 className="mt-5 font-serif text-lg text-brown">Politique d'annulation</h3>
            <p className="mt-2">
              Toute annulation doit être effectuée au moins 48h avant le rendez-vous.
              Au-delà de ce délai, l'acompte versé n'est pas remboursable.
            </p>
            <h3 className="mt-5 font-serif text-lg text-brown">Remboursement de l'acompte</h3>
            <p className="mt-2">
              L'acompte est remboursé intégralement en cas d'annulation effectuée plus de 48h
              avant le rendez-vous, ou en cas d'indisponibilité du salon.
            </p>
            <h3 className="mt-5 font-serif text-lg text-brown">Envoi de la perruque</h3>
            <p className="mt-2">
              Pour les prestations de pose de perruque, la perruque doit nous parvenir
              au plus tard la veille du rendez-vous (48h recommandé).
            </p>
          </section>
        </div>
      </section>
    </Layout>
  );
}
