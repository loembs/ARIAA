import { Check } from "lucide-react";

const STEPS = ["Prestation", "Créneau", "Confirmation"];

export function Stepper({ step }: { step: 1 | 2 | 3 }) {
  return (
    <div className="mx-auto flex max-w-xl items-center justify-between">
      {STEPS.map((label, i) => {
        const n = i + 1;
        const done = n < step;
        const active = n === step;
        return (
          <div key={label} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-2">
              <div
                className={[
                  "flex h-9 w-9 items-center justify-center rounded-full border text-sm transition-colors",
                  done
                    ? "border-gold bg-gold text-primary-foreground"
                    : active
                      ? "border-gold bg-gold text-primary-foreground shadow-[var(--shadow-gold)]"
                      : "border-beige-dark bg-card text-brown/50",
                ].join(" ")}
              >
                {done ? <Check size={15} /> : n}
              </div>
              <span
                className={[
                  "label-spaced text-[0.6rem]",
                  active || done ? "text-gold-dark" : "text-brown/50",
                ].join(" ")}
              >
                {label}
              </span>
            </div>
            {n < STEPS.length && (
              <div
                className={[
                  "mx-2 h-px flex-1",
                  done ? "bg-gold" : "bg-beige-dark",
                ].join(" ")}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
