import { describe, expect, it } from "vitest";
import { quoteSchema } from "@/lib/quote-schema";

const valid = {
  name: "Marie Dupont",
  phone: "06 30 42 65 00",
  email: "marie@example.fr",
  projectType: "Serre ou orangerie",
  message: "Je souhaite une serre octogonale pour mon jardin.",
};

describe("Formulaire de devis", () => {
  it("accepte une demande complète", () => {
    expect(quoteSchema.safeParse(valid).success).toBe(true);
  });

  it("refuse un e-mail invalide", () => {
    expect(quoteSchema.safeParse({ ...valid, email: "pas-un-email" }).success).toBe(false);
  });

  it("refuse un téléphone invalide", () => {
    expect(quoteSchema.safeParse({ ...valid, phone: "12345" }).success).toBe(false);
  });

  it("exige un type de projet de la liste", () => {
    expect(quoteSchema.safeParse({ ...valid, projectType: "Fusée" }).success).toBe(false);
  });
});
