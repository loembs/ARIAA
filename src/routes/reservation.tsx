import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { Layout } from "@/components/aria/Layout";
import { Stepper } from "@/components/aria/Stepper";
import { PerruqueAlert } from "@/components/aria/PerruqueAlert";
import { PRESTATIONS, CRENEAUX_HORAIRES, COIFFEUSES, getPrestation } from "@/lib/aria-data";
import { bookingStore, useBooking, isSlotFull } from "@/lib/booking-store";
import { Check, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

// Set page title
document.title = "Réservation — ARIA HOUSE";

export function Reservation() {
  const [searchParams] = useSearchParams();
  const service = searchParams.get('service') || undefined;
  const stepParam = searchParams.get('step') ? parseInt(searchParams.get('step')!) : undefined;
  const navigate = useNavigate();
  const booking = useBooking();
  const [step, setStep] = useState<1 | 2 | 3>((stepParam as 1 | 2 | 3) || 1);

  // Pre-select from URL
  useEffect(() => {
    if (service && service !== booking.serviceId) {
      bookingStore.set({ serviceId: service });
    }
  }, [service]); // eslint-disable-line react-hooks/exhaustive-deps

  const selected = getPrestation(booking.serviceId);

  function go(next: 1 | 2 | 3) {
    setStep(next);
    navigate({ to: "/reservation", search: { service: booking.serviceId, step: next } });
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center">
          <span className="label-spaced text-gold-dark">Réservation</span>
          <h1 className="mt-3 font-serif text-4xl text-brown md:text-5xl">
            Prenez votre rendez-vous
          </h1>
        </div>

        <div className="mt-12">
          <Stepper step={step} />
        </div>

        <div className="mt-12">
          {step === 1 && (
            <Step1
              selectedId={booking.serviceId}
              onNext={() => booking.serviceId && go(2)}
            />
          )}
          {step === 2 && selected && (
            <Step2 onPrev={() => go(1)} onNext={() => go(3)} />
          )}
          {step === 3 && selected && (
            <Step3 onPrev={() => go(2)} />
          )}
          {step !== 1 && !selected && (
            <p className="text-center text-brown/70">
              Veuillez d'abord choisir une prestation.{" "}
              <button onClick={() => go(1)} className="underline">Retour</button>
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
}

function Step1({ selectedId, onNext }: { selectedId?: string; onNext: () => void }) {
  return (
    <div className="fade-up">
      <h2 className="text-center font-serif text-2xl text-brown">Choisissez votre prestation</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {PRESTATIONS.map((p) => {
          const active = selectedId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => bookingStore.set({ serviceId: p.id })}
              className={[
                "relative flex flex-col items-start border-t-2 bg-card p-6 text-left transition-all",
                active
                  ? "border-gold shadow-[var(--shadow-gold)] ring-1 ring-gold"
                  : "border-gold/40 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]",
              ].join(" ")}
            >
              {active && (
                <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-primary-foreground">
                  <Check size={13} />
                </span>
              )}
              {p.badge === "SIGNATURE" && (
                <span className="label-spaced mb-2 inline-flex items-center gap-1 bg-gold/15 px-2 py-1 text-[0.6rem] text-gold-dark">
                  <Sparkles size={10} /> Signature
                </span>
              )}
              <div className="font-serif text-xl text-brown">{p.nom}</div>
              <p className="mt-1 text-sm text-brown/65">{p.description}</p>
              <div className="mt-4 flex w-full items-center justify-between text-xs text-brown/60">
                <span>{p.duree}</span>
                <span className="font-serif text-base text-gold-dark">{p.prix} €</span>
              </div>
            </button>
          );
        })}
      </div>
      <div className="mt-10 flex justify-end">
        <button
          disabled={!selectedId}
          onClick={onNext}
          className="label-spaced inline-flex items-center gap-2 bg-gold px-6 py-3 text-primary-foreground transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continuer <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

function formatDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

function Step2({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  const booking = useBooking();
  const presta = getPrestation(booking.serviceId)!;
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const days = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => {
        const d = new Date(today);
        d.setDate(d.getDate() + i);
        return d;
      }),
    [today],
  );
  const [date, setDate] = useState<string>(booking.date || formatDate(days[0]));
  const isSunday = (iso: string) => new Date(iso + "T00:00:00").getDay() === 0;

  function selectSlot(time: string) {
    if (isSlotFull(date, time)) return;
    // Assign coiffeuse pseudo-deterministically
    const coiffeuseId = (date + time).length % 2 === 0 ? COIFFEUSES[0].id : COIFFEUSES[1].id;
    bookingStore.set({ date, time, coiffeuseId });
  }

  return (
    <div className="fade-up space-y-8">
      <h2 className="text-center font-serif text-2xl text-brown">Choisissez votre créneau</h2>

      {presta.requiresPerruqueEnvoi && <PerruqueAlert />}

      <div>
        <div className="label-spaced mb-3 text-brown/60">Date</div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {days.map((d) => {
            const iso = formatDate(d);
            const sunday = isSunday(iso);
            const active = iso === date;
            return (
              <button
                key={iso}
                disabled={sunday}
                onClick={() => setDate(iso)}
                className={[
                  "flex min-w-[68px] flex-col items-center border px-3 py-3 transition-colors",
                  active
                    ? "border-gold bg-gold text-primary-foreground"
                    : sunday
                      ? "border-beige-dark/60 bg-beige/40 text-brown/30"
                      : "border-beige-dark/60 bg-card text-brown hover:border-gold",
                ].join(" ")}
              >
                <span className="label-spaced text-[0.55rem]">
                  {d.toLocaleDateString("fr-FR", { weekday: "short" })}
                </span>
                <span className="mt-1 font-serif text-xl">{d.getDate()}</span>
                <span className="text-[0.65rem] opacity-80">
                  {d.toLocaleDateString("fr-FR", { month: "short" })}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <div className="label-spaced mb-3 text-brown/60">Horaire</div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {CRENEAUX_HORAIRES.map((time) => {
            const full = isSlotFull(date, time);
            const active = booking.date === date && booking.time === time;
            return (
              <button
                key={time}
                disabled={full}
                onClick={() => selectSlot(time)}
                className={[
                  "border px-3 py-3 text-sm transition-colors",
                  full
                    ? "cursor-not-allowed border-beige-dark/60 bg-beige/40 text-brown/30 line-through"
                    : active
                      ? "border-gold bg-gold text-primary-foreground"
                      : "border-beige-dark/60 bg-card text-brown hover:border-gold",
                ].join(" ")}
              >
                {time}
                <div className="label-spaced mt-0.5 text-[0.55rem] opacity-80">
                  {full ? "Complet" : "Disponible"}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={onPrev}
          className="label-spaced inline-flex items-center gap-2 text-brown/70 hover:text-gold-dark"
        >
          <ChevronLeft size={14} /> Retour
        </button>
        <button
          disabled={!booking.time || booking.date !== date}
          onClick={onNext}
          className="label-spaced inline-flex items-center gap-2 bg-gold px-6 py-3 text-primary-foreground transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continuer <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

function Field({
  label, value, onChange, type = "text", required = false, textarea = false,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; required?: boolean; textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="label-spaced text-brown/60">{label}{required && " *"}</span>
      {textarea ? (
        <textarea
          value={value} onChange={(e) => onChange(e.target.value)} rows={3}
          className="mt-2 w-full border border-beige-dark/70 bg-card px-3 py-2 text-sm text-brown outline-none transition-colors focus:border-gold"
        />
      ) : (
        <input
          type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required}
          className="mt-2 w-full border border-beige-dark/70 bg-card px-3 py-2 text-sm text-brown outline-none transition-colors focus:border-gold"
        />
      )}
    </label>
  );
}

function Step3({ onPrev }: { onPrev: () => void }) {
  const booking = useBooking();
  const navigate = useNavigate();
  const presta = getPrestation(booking.serviceId)!;
  const [c, setC] = useState({
    firstName: booking.client?.firstName || "",
    lastName: booking.client?.lastName || "",
    email: booking.client?.email || "",
    phone: booking.client?.phone || "",
    message: booking.client?.message || "",
  });
  const [error, setError] = useState<string | null>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!c.firstName || !c.lastName || !c.email || !c.phone) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    bookingStore.set({ client: c });
    // TODO: Stripe integration for acompte
    // TODO: Supabase persistence
    navigate({ to: "/confirmation" });
  }

  return (
    <form onSubmit={submit} className="fade-up space-y-8">
      <h2 className="text-center font-serif text-2xl text-brown">Vos informations</h2>

      {/* Récap */}
      <div className="border border-beige-dark/60 bg-beige/40 p-5 text-sm text-brown/80">
        <div className="label-spaced mb-2 text-brown/60">Récapitulatif</div>
        <div className="flex justify-between"><span>{presta.nom}</span><span className="font-serif text-base text-gold-dark">{presta.prix} €</span></div>
        <div className="mt-1 flex justify-between text-brown/60">
          <span>{booking.date && new Date(booking.date + "T00:00:00").toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}</span>
          <span>{booking.time}</span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Prénom" value={c.firstName} onChange={(v) => setC({ ...c, firstName: v })} required />
        <Field label="Nom" value={c.lastName} onChange={(v) => setC({ ...c, lastName: v })} required />
        <Field label="Email" type="email" value={c.email} onChange={(v) => setC({ ...c, email: v })} required />
        <Field label="Téléphone" type="tel" value={c.phone} onChange={(v) => setC({ ...c, phone: v })} required />
      </div>
      <Field label="Message (optionnel)" value={c.message} onChange={(v) => setC({ ...c, message: v })} textarea />

      {presta.requiresAcompte && (
        <div className="border-l-2 border-gold bg-beige/60 p-5">
          <div className="label-spaced text-gold-dark">Acompte</div>
          <p className="mt-2 font-serif text-2xl text-brown">
            {presta.acompte} € <span className="text-base text-brown/60">à régler à la réservation</span>
          </p>
          <p className="mt-2 text-xs italic text-brown/60">
            Votre réservation sera confirmée après réception de l'acompte.
          </p>
          {/* TODO: Stripe integration */}
        </div>
      )}

      {error && <p className="text-center text-sm text-destructive">{error}</p>}

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="label-spaced inline-flex items-center gap-2 text-brown/70 hover:text-gold-dark"
        >
          <ChevronLeft size={14} /> Retour
        </button>
        <button
          type="submit"
          className="label-spaced inline-flex items-center gap-2 bg-gold px-6 py-3 text-primary-foreground transition-colors hover:bg-gold-dark"
        >
          {presta.requiresAcompte ? `Payer l'acompte ${presta.acompte} €` : "Confirmer ma réservation"}
        </button>
      </div>
    </form>
  );
}
