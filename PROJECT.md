## Objectif

Site vitrine statique pour [VIAIPCAM](https://viaipcam.fr) — Vincent Domenjoud, installateur indépendant : caméras IP, alarmes, réseau, antennes et informatique en Auvergne-Rhône-Alpes.

**Approche :** design neuf. Vincent Domenjoud en premier, VIAIPCAM comme enseigne.

## État du projet (juin 2026)

**En place :**

- Base Astro + Tailwind v4
- 9 pages : accueil, à propos, caméras, réseau, antennes, informatique, réalisations, contact, mentions-legales
- Header (nav + menu mobile) + Footer
- `src/config/site.js` (SSOT)
- Redirections 301 dans `public/_redirects`
- Contenu source dans `docs/content/` · images dans `public/images/`

**À faire :**

- Design visuel (hero.webp — à venir)
- Contenu réalisations (photos réelles)
- URL Google Business Profile dans `site.js`
- Formulaire contact (Formspree ou autre — pas encore décidé)
- Déploiement Cloudflare Pages

## Stack

- Astro v6 · Tailwind CSS v4 (`@theme` dans `src/styles/global.css`)
- Déploiement cible : **Cloudflare Pages**
- Repo Git : à initialiser

## URLs

| Page | URL Astro | Ancienne URL WordPress |
|------|-----------|------------------------|
| Accueil | `/` | `/accueil/` |
| À propos | `/a-propos` | — |
| Caméras & alarmes | `/video-surveillance` | `/video-surveillance/` |
| Réseau | `/reseau` | `/extension-reseau-wi-fi/` · `/reseau-cable/` |
| Antennes | `/antennes` | `/antennes/` |
| Informatique | `/accompagnement-informatique` | `/protection-donnees/` (slug incohérent) |
| Réalisations | `/realisations` | — |
| Contact | `/contact` | `/contact/` |
| Mentions légales | `/mentions-legales` | `/mentions-legales/` |

## Navigation

```
Accueil · Caméras · Réseau · Antennes · Informatique · Réalisations · Contact
```

À propos : footer + lien depuis l'accueil (hors nav principale).

## Design tokens (`global.css`)

| Token | Valeur | Usage |
|-------|--------|-------|
| `primary` | `#1e293b` | Titres, nav |
| `surface` | `#f1f5f9` | Fond body |
| `accent` | `#2563eb` | Liens, hovers (aligné logo) |
| `text` | `#334155` | Corps |
| `cta` | `#ea580c` | Boutons |

## Contenu source

- Textes : `docs/content/*.md` (extraits WordPress + placeholders)
- Assets marque : `public/logo.svg` · `logo-light.svg` · `logo-mark.svg` · `favicon.svg` · `og-image.png`
- Images : `public/images/` — `vincent-domenjoud.webp` · `cctv-concept.webp` · `camera-setup.webp` · `camera-setup-2.webp` · `installation-tools.webp`

## Zone d'intervention

Roanne · Lyon · Clermont-Ferrand · Auvergne-Rhône-Alpes

Dernière mise à jour : 27 juin 2026
