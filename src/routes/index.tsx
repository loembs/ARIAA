import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/aria/Layout";
import { PrestaCard } from "@/components/aria/PrestaCard";
import { PRESTATIONS } from "@/lib/aria-data";
import logo from "@/assets/aria-house-logo.jpeg";
import heroImg from "@/assets/hero-aria.jpg";
import { Sparkles, Gem, HeartHandshake, Crown, Star, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ARIAA HOUSE — L'Excellence Capillaire" },
      { name: "description", content: "Salon de beauté premium. Pose de perruque, coiffure, soins, tresses. Réservation en ligne." },
    ],
  }),
});

function Index() {
  return (
    <Layout>
      {/* HERO - Luxury Edition */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Background Image with Multiple Overlays */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Salon de beauté ARIA HOUSE — femme noire élégante dans un intérieur premium"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          {/* Multi-layer Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-cream/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/30 to-cream/90" />
          <div className="absolute inset-0 gold-dust opacity-30" />
        </div>

        {/* Floating Gold Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[15%] right-[10%] w-64 h-64 bg-gold/10 rounded-full blur-3xl float" style={{ animationDelay: "0s" }} />
          <div className="absolute bottom-[20%] right-[15%] w-48 h-48 bg-gold-light/15 rounded-full blur-2xl float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-[30%] left-[5%] w-32 h-32 bg-gold-dark/10 rounded-full blur-2xl float" style={{ animationDelay: "2s" }} />
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="fade-up">
                <span className="label-spaced inline-flex items-center gap-2 text-brown/50">
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  Salon de beauté Premium
                  <Star className="w-3 h-3 fill-gold text-gold" />
                </span>
              </div>

              <div className="fade-scale" style={{ animationDelay: "150ms" }}>
                <img
                  src={logo}
                  alt="ARIA HOUSE"
                  className="w-[min(380px,70vw)] drop-shadow-2xl"
                />
              </div>

              <p className="fade-up font-serif text-2xl md:text-3xl italic text-brown/80" style={{ animationDelay: "300ms" }}>
                L'excellence capillaire,{" "}
                <span className="gold-text-shimmer font-not-italic">l'art de vous sublimer</span>
              </p>

              <div className="fade-up flex flex-wrap gap-4" style={{ animationDelay: "450ms" }}>
                <Link
                  to="/reservation"
                  className="btn-gold-luxe label-spaced inline-flex items-center gap-3 px-10 py-4"
                >
                  <Crown className="w-4 h-4" />
                  Réserver mon moment d'élégance
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/prestations"
                  className="btn-outline-gold label-spaced inline-flex items-center gap-2 px-8 py-4"
                >
                  Découvrir nos prestations
                </Link>
              </div>
            </div>

            {/* Right - Decorative Element */}
            <div className="hidden md:block relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Circular Gold Border */}
                <div className="absolute inset-0 rounded-full border border-gold/30 scale-90" />
                <div className="absolute inset-0 rounded-full border border-gold/20 scale-80" />
                <div className="absolute inset-0 rounded-full border border-gold/10 scale-70 float" />
                {/* Center Quote */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <blockquote className="text-center space-y-4">
                    <div className="flex justify-center">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold mx-0.5" />
                      ))}
                    </div>
                    <p className="font-serif text-xl text-brown/80 italic max-w-xs">
                      "La beauté est un art, et vous êtes l'œuvre"
                    </p>
                    <div className="flex justify-center">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold mx-0.5" />
                      ))}
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z" fill="var(--cream)" opacity="0.5"/>
            <path d="M0 45C240 60 480 30 720 45C960 60 1200 30 1440 45V60H0V45Z" fill="var(--cream)"/>
          </svg>
        </div>
      </section>

      {/* FEATURES BANNER */}
      

      {/* PRESTATIONS - Luxury Cards */}
      <section className="paper-texture py-24 md:py-32 relative overflow-hidden">
        {/* Background Gold Mesh */}
        <div className="absolute inset-0 gold-mesh pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <span className="label-spaced text-gold-dark">
              Nos prestations d'exception
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl text-brown">
              L'art de la <span className="gold-text-shimmer">beauté</span>
            </h2>
            <p className="mt-4 text-brown/60 max-w-2xl mx-auto">
              Découvrez notre gamme de prestations pensées pour sublimer votre beauté naturelle
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {PRESTATIONS.map((p, i) => (
              <div key={p.id} className="fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <PrestaCard p={p} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/prestations"
              className="btn-outline-gold label-spaced inline-flex items-center gap-3 px-10 py-4"
            >
              Explorer toutes nos prestations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - With Icons */}
      <section className="bg-gradient-to-b from-beige/60 to-beige/30 py-24 md:py-32 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-light/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <span className="label-spaced text-gold-dark">Pourquoi nous choisir</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-brown">
              L'excellence en chaque <span className="gold-text">détail</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: Gem,
                title: "Expertise & Savoir-faire",
                description: "Des coiffeuses experts, formées aux techniques les plus exigeantes. Chaque geste est précis, chaque résultat est maîtrisé.",
                badge: "Premium"
              },
              {
                Icon: Sparkles,
                title: "Produits d'Exception",
                description: "Une sélection rigoureuse des meilleurs produits capillaires. Qualité professionnelle garantie pour des résultats durables.",
                badge: "Qualité"
              },
              {
                Icon: HeartHandshake,
                title: "Expérience Sur-Mesure",
                description: "Un accompagnement personnalisé qui prend en compte vos envies, votre style et vos besoins. Vous êtes unique, votre prestation aussi.",
                badge: "Personnalisé"
              },
            ].map(({ Icon, title, description, badge }) => (
              <div
                key={title}
                className="card-luxe group p-8 text-center bg-card rounded-lg"
              >
                <div className="relative inline-flex">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold bg-gold/10 text-gold-dark group-hover:bg-gold group-hover:text-primary-foreground transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  <span className="absolute -top-2 -right-2 label-spaced bg-gold text-primary-foreground px-2 py-1 rounded-full text-[0.6rem]">
                    {badge}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-brown">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-brown/65">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Elegant Steps */}
      <section className="py-24 md:py-32 relative">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <span className="label-spaced text-gold-dark">Comment ça marche</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-brown">
              Simple comme <span className="gold-text">1, 2, 3</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

            <ol className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Choisissez votre prestation",
                  description: "Explorez notre catalogue et sélectionnez le service qui vous correspond",
                  icon: <Sparkles className="w-5 h-5" />
                },
                {
                  step: "02",
                  title: "Sélectionnez votre créneau",
                  description: "Choisissez la date et l'heure qui vous conviennent le mieux",
                  icon: <Crown className="w-5 h-5" />
                },
                {
                  step: "03",
                  title: "Confirmez & réservez",
                  description: "Validez votre rendez-vous et versez l'acompte sécurisé",
                  icon: <HeartHandshake className="w-5 h-5" />
                },
              ].map(({ step, title, description, icon }) => (
                <li key={step} className="relative text-center">
                  <div className="relative inline-flex">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold bg-cream text-gold-dark font-serif text-2xl shadow-[var(--shadow-gold)]">
                      {step}
                    </div>
                    <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-primary-foreground">
                      {icon}
                    </div>
                  </div>
                  <h3 className="mt-6 font-serif text-xl text-brown">{title}</h3>
                  <p className="mt-3 text-sm text-brown/65">{description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/reservation"
              className="btn-gold-luxe label-spaced inline-flex items-center gap-3 px-12 py-5"
            >
              Commencer ma réservation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-gold/10 to-gold-dark/20" />
        <div className="absolute inset-0 gold-mesh opacity-30" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="border-gold-elegant bg-cream/90 backdrop-blur rounded-2xl p-12 md:p-16 shadow-[var(--shadow-luxe)]">
            <Crown className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-5xl text-brown mb-6">
              Prête à révéler votre <span className="gold-text-shimmer">beauté</span> ?
            </h2>
            <p className="text-brown/70 mb-8 max-w-xl mx-auto">
              Réservez dès maintenant votre rendez-vous et offrez-vous un moment d'exception chez ARIAA HOUSE
            </p>
            <Link
              to="/reservation"
              className="btn-gold-luxe label-spaced inline-flex items-center gap-3 px-12 py-5 text-lg"
            >
              Réserver mon rendez-vous
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
