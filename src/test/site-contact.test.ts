import { describe, expect, it } from "vitest";
import { SITE } from "@/lib/site";

describe("Coordonnées", () => {
  it("utilise l'e-mail officiel de l'atelier", () => {
    expect(SITE.email).toBe("felenqguillaume@gmail.com");
    expect(SITE.emailHref).toBe("mailto:felenqguillaume@gmail.com");
  });
});
