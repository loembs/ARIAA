import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/aria/Layout";
import { PrestaCard } from "@/components/aria/PrestaCard";
import { PRESTATIONS } from "@/lib/aria-data";

export const Route = createFileRoute("/prestations")({
  component: PrestationsPage,
  head: () => ({
    meta: [
      { title: "Nos prestations — ARIAA HOUSE" },
      { name: "description", content: "Découvrez les prestations ARIA HOUSE : pose de perruque, coiffure, soins capillaires, tresses." },
    ],
  }),
});

function PrestationsPage() {
  return (
    <Layout>
      <section className="paper-texture">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <span className="label-spaced text-gold-dark">Le salon</span>
          <h1 className="mt-3 font-serif text-5xl text-brown md:text-6xl">Nos Prestations</h1>
          <p className="mt-4 font-serif text-lg italic text-brown/70">
            Des soins pensés pour révéler votre beauté.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRESTATIONS.map((p) => (
            <PrestaCard key={p.id} p={p} detailed />
          ))}
        </div>
      </section>
    </Layout>
  );
}
