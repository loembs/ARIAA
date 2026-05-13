import { Mail } from "lucide-react";

export function PerruqueAlert() {
  return (
    <div className="flex items-start gap-3 border-l-2 border-gold bg-beige/60 p-4 text-sm italic text-brown/80">
      <Mail size={16} className="mt-0.5 shrink-0 text-gold-dark" />
      <p>
        Rappel : pensez à envoyer votre perruque la veille de votre rendez-vous.
      </p>
    </div>
  );
}
