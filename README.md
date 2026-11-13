# Felengq Forge Artisan Azur

Crée un site vitrine en FRANÇAIS, élégant, haut de gamme et parfaitement responsive (mobile d'abord) pour un artisan ferronnier-forgeron d'art.

## Informations de l'entreprise (à utiliser telles quelles, ne rien inventer d'autre comme données légales)
- Nom : Guillaume Felenq — Ferronnerie d'art & Forge (marque affichée : « FELENQ — Forge & Ferronnerie d'art »)
- SIREN : 903 067 031
- Adresse : 107 Vieux Chemin de Sainte-Anne, 06130 Grasse
- Téléphone : 06 30 42 65 00 (lien cliquable tel:+33630426500)
- Activité : forge, estampage, matriçage ; métallurgie des poudres
- Zone d'intervention : Grasse, Pays de Grasse, Cannes, Antibes, Nice et toute la Côte d'Azur

## Direction artistique
- Ambiance atelier de forge haut de gamme, artisanat d'art provençal, intemporel et raffiné.
- Palette : noir forgé (#121212 / #1c1c1c), anthracite, crème/ivoire (#f4efe6) pour les sections claires, accent laiton/or vieilli (#b08d57) et une touche cuivre/braise (#c4622d) très discrète (lueur de forge).
- Typographies : titres en serif élégante (Cormorant Garamond ou Playfair Display), textes en sans-serif sobre (Inter ou Manrope). Petites capitales espacées pour les surtitres.
- Ornements fins inspirés des volutes de fer forgé (SVG de volutes / arabesques en filigrane, séparateurs ornementaux en laiton). Grain/texture subtile sur les fonds sombres.
- Animations douces au scroll (fade/slide), effets de survol délicats, aucune surcharge. Accessibilité AA (contrastes, focus visibles, alt sur images).

## Structure (one-page avec ancres + menu sticky, burger sur mobile)
1. **Hero** plein écran sombre : titre « L'art du fer forgé, façonné à la main à Grasse », sous-titre sur le savoir-faire de forge et ferronnerie sur mesure, deux boutons : « Demander un devis » (ancre contact) et « Appeler — 06 30 42 65 00 ». Visuel : illustration/ambiance de structure en fer forgé (serre/orangerie vitrée) ou étincelles de forge, avec dégradé sombre.
2. **Savoir-faire** : 4 cartes avec icônes fines — Forge traditionnelle ; Estampage & matriçage ; Métallurgie des poudres ; Ferronnerie d'art sur mesure. Courts textes valorisants et sobres.
3. **Réalisations / Création phare : la Serre octogonale provençale** — section mise en valeur avec fiche technique élégante :
   - Plan octogonal 5,00 m × 5,00 m, hauteur totale ≈ 3,20 m
   - Hauteur vitrée 2,60 m sur imposte basse pleine isolée de 0,90 m
   - Toiture vitrée avec lanterne centrale surélevée et épi de faîtage
   - Volutes et frises de style provençal en fer forgé
   - Fenêtres lobatantes (oscillo-battantes) dans chaque angle pour la ventilation
   - SAS d'entrée vitré de 1,00 m avec double porte ornementée
   - Structure métallique peinte noir
   Ajoute un petit schéma/plan stylisé (SVG d'un octogone vu de dessus avec cotes 5,00 m et SAS 1,00 m) dans le style dessin technique à la plume.
4. **Galerie** : grille responsive (masonry) de 6 à 8 emplacements d'images (serres, orangeries, portails, garde-corps, escaliers, marquises, mobilier, luminaires) avec légendes, lightbox au clic. Utilise des images d'illustration génériques de ferronnerie, facilement remplaçables.
5. **Prestations** : liste élégante — Serres & orangeries, Portails & clôtures, Garde-corps & rampes, Marquises & pergolas, Grilles & protections, Mobilier & décoration, Restauration de ferronneries anciennes.
6. **Démarche en 4 étapes** : Écoute & conseil → Dessin & conception → Forge & fabrication à l'atelier → Pose & finitions.
7. **Contact** : fond sombre, coordonnées complètes (adresse, téléphone cliquable, zone d'intervention), carte Google Maps intégrée (iframe sur « 107 Vieux Chemin de Sainte-Anne, 06130 Grasse »), formulaire de demande de devis (nom, téléphone, e-mail, type de projet en liste déroulante, message) — pour l'instant le formulaire affiche un toast de confirmation, sans backend.
8. **Footer** : nom, SIREN 903 067 031, adresse, téléphone, liens d'ancres, mentions légales (page simple avec les infos ci-dessus), © année courante.

## Divers
- Bouton d'appel flottant sur mobile (icône téléphone, laiton).
- SEO : balises title/meta description en français (« Ferronnier d'art à Grasse — Forge, serres et ferronnerie sur mesure | Felenq »), Open Graph, données structurées JSON-LD LocalBusiness avec adresse et téléphone.
- Pas d'avis clients ni de chiffres inventés (pas de faux témoignages, pas de « 20 ans d'expérience »).
- Code propre, sections en composants séparés.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/52f5d3a5-949e-4b2b-ad33-b17e288f2056).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
