import { z } from "zod";
import { PROJECT_TYPES } from "./site";

const phoneRegex = /^(?:\+33\s?|0)[1-9](?:[\s.-]?\d{2}){4}$/;

export const quoteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Merci d'indiquer votre nom." })
    .max(100, { message: "Le nom ne doit pas dépasser 100 caractères." }),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, { message: "Numéro de téléphone français invalide." }),
  email: z
    .string()
    .trim()
    .email({ message: "Adresse e-mail invalide." })
    .max(255, { message: "L'e-mail ne doit pas dépasser 255 caractères." }),
  projectType: z.enum(PROJECT_TYPES, {
    errorMap: () => ({ message: "Choisissez un type de projet." }),
  }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Décrivez votre projet en quelques mots (10 caractères minimum)." })
    .max(2000, { message: "Le message ne doit pas dépasser 2000 caractères." }),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
