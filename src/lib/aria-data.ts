import perruqueImg from "@/assets/service-perruque.jpg";
import coiffureImg from "@/assets/service-coiffure.jpg";
import soinImg from "@/assets/service-soin.jpg";
import tressesImg from "@/assets/service-tresses.jpg";

export type Prestation = {
  id: string;
  nom: string;
  description: string;
  duree: string;
  prix: number;
  acompte: number;
  requiresAcompte: boolean;
  requiresPerruqueEnvoi?: boolean;
  badge?: "SIGNATURE";
  image: string;
  imageAlt: string;
};

export const PRESTATIONS: Prestation[] = [
  {
    id: "pose-perruque",
    nom: "Pose de Perruque",
    description:
      "Pose et fixation professionnelle de votre perruque avec finitions soignées.",
    duree: "1h30",
    prix: 80,
    acompte: 30,
    requiresAcompte: true,
    requiresPerruqueEnvoi: true,
    badge: "SIGNATURE",
    image: perruqueImg,
    imageAlt: "Femme noire élégante portant une perruque parfaitement posée dans un salon premium",
  },
  {
    id: "coiffure",
    nom: "Coiffure & Mise en Forme",
    description: "Brushing, lissage, ondulations — sublimez votre chevelure.",
    duree: "1h",
    prix: 60,
    acompte: 0,
    requiresAcompte: false,
    image: coiffureImg,
    imageAlt: "Femme noire avec un brushing glamour réalisé en salon de coiffure haut de gamme",
  },
  {
    id: "soin-capillaire",
    nom: "Soin & Entretien Capillaire",
    description:
      "Masques nourrissants et soins profonds pour des cheveux éclatants.",
    duree: "1h",
    prix: 55,
    acompte: 0,
    requiresAcompte: false,
    image: soinImg,
    imageAlt: "Femme noire recevant un soin capillaire nourrissant en salon spa",
  },
  {
    id: "tresses",
    nom: "Tresses & Nattes",
    description:
      "Box braids, cornrows, vanilles et toutes techniques de tressage.",
    duree: "2h–4h",
    prix: 90,
    acompte: 35,
    requiresAcompte: true,
    image: tressesImg,
    imageAlt: "Femme noire portant de longues box braids élégantes et soignées",
  },
];

export const COIFFEUSES = [
  { id: "a", nom: "Coiffeuse A" },
  { id: "b", nom: "Coiffeuse B" },
];

export const CRENEAUX_HORAIRES = [
  "10:00", "11:00", "12:00", "13:00", "14:00",
  "15:00", "16:00", "17:00", "18:00", "19:00",
];

export function getPrestation(id?: string | null) {
  return PRESTATIONS.find((p) => p.id === id);
}
