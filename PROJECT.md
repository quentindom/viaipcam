## Objectif

Site vitrine statique pour [VIAIPCAM](https://viaipcam.pages.dev) — Vincent Domenjoud, installateur indépendant : caméras IP, alarmes, réseau, antennes et informatique en Auvergne-Rhône-Alpes.

**Approche :** design neuf. Vincent Domenjoud en premier, VIAIPCAM comme enseigne.

## État du projet (juin 2026)

**En place :**

- Site live : **[viaipcam.pages.dev](https://viaipcam.pages.dev)** (interim — domaine `viaipcam.fr` à brancher plus tard)
- 9 pages : accueil, à propos, caméras, réseau, antennes, informatique, réalisations, contact, mentions-legales
- Header (nav + menu mobile) + Footer
- `src/config/site.js` (SSOT)
- Redirections 301 dans `public/_redirects`
- Formulaire contact (Formspree → `/merci`)
- Images dans `public/images/`
- Image Open Graph (`public/og-image.webp`) — aperçu lors du partage sur réseaux sociaux / messageries
- SEO : sitemap filtré, OG image, JSON-LD LocalBusiness + Service, meta accueil optimisées
- Mentions légales branchées sur `site.js`
- Script Lighthouse (`scripts/lighthouse-mobile.mjs`)
- Skip link, nav active, `.node-version`

**À faire :**

- Contenu réalisations (photos réelles)
- `logo-light.svg` (version double regard)
- Domaine custom `viaipcam.fr` (quand accès DNS disponible — mettre à jour `site.url`, `robots.txt`, `llms.txt`)

## Stack

- Astro v6 · Tailwind CSS v4 (`@theme` dans `src/styles/global.css`)
- Déploiement : **Cloudflare Pages**
- Repo Git : [github.com/quentindom/viaipcam](https://github.com/quentindom/viaipcam)

## Déploiement Cloudflare Pages

### 1. Créer le projet (dashboard)

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Autoriser GitHub si demandé, sélectionner le repo **`quentindom/viaipcam`**
3. Branche de production : **`main`**

### 2. Paramètres de build

| Paramètre | Valeur |
|-----------|--------|
| Framework preset | **Astro** (ou None) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Node.js | **22** (via `.node-version`) |

Aucune variable d'environnement requise pour l'instant.

### 3. Après le premier déploiement

- URL preview : `https://viaipcam.pages.dev` (déjà dans `site.js`)
- Vérifier : accueil, redirections (`/extension-reseau` → `/reseau`), favicon, OG image

### 4. Domaine custom `viaipcam.fr` (plus tard)

Quand tu auras accès au domaine :

1. Pages → projet **viaipcam** → **Custom domains** → ajouter `viaipcam.fr` et `www.viaipcam.fr`
2. Mettre à jour `site.url` dans `src/config/site.js` → `https://viaipcam.fr`
3. Commit + push → rebuild automatique
4. DNS : si le domaine est chez Cloudflare, les enregistrements sont proposés automatiquement

### 5. Redirections WordPress

Les 301 sont dans `public/_redirects` (copié dans `dist/` au build). Cloudflare Pages les applique nativement.

### Déploiement manuel (optionnel)

```bash
npm run build
npx wrangler pages deploy dist --project-name=viaipcam
```

Nécessite `npx wrangler login` au préalable.

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
| `primary` | `#1e293b` | Titres, nav, contours logo |
| `surface` | `#f1f5f9` | Fond body |
| `accent` | `#d0440a` | Liens, hovers nav (contraste AA 4,65:1 sur blanc) |
| `text` | `#334155` | Corps |
| `cta` | `#d0440a` | Boutons (pills) · pupilles logo · « IP » dans le wordmark |

## Identité visuelle (logos)

| Fichier | Rôle | Où |
|---------|------|-----|
| `logo.svg` | Wordmark horizontal · **double regard** + texte VIA**IP**CAM | Header desktop (≥ md) · footer |
| `logo-mark.svg` | Symbole **double regard** (même icône que le wordmark, sans texte) | Header mobile (< md) |
| `logo-light.svg` | Wordmark sur fond foncé (ancienne version un œil — à mettre à jour) | Réservé (fond sombre, etc.) |
| `favicon.svg` | Un œil · pupille orange | Onglet navigateur |

Couleur accent logo : `#d0440a` (alignée sur `accent` et `cta`).

Ratio intrinsèque : logo 560×120 · mark 180×100 · favicon 32×32.

## Contenu & assets

- Assets marque : `public/logo.svg` · `logo-light.svg` · `logo-mark.svg` · `favicon.svg` · `favicon.png` · `og-image.webp`
- Images : `public/images/` — `vincent-domenjoud.webp` · `cctv-concept.webp` · `camera-setup.webp` · `camera-setup-2.webp` · `installation-tools.webp`

## Lighthouse (local)

```bash
npm run dev
node scripts/lighthouse-mobile.mjs http://127.0.0.1:4321
```

Rapports JSON dans `lighthouse-reports/`. Nécessite `lighthouse` et `chrome-launcher` (install globale ou `npx`). Variable `CHROME_PATH` optionnelle.

## Zone d'intervention

Roanne · Lyon · Clermont-Ferrand · Auvergne-Rhône-Alpes

Dernière mise à jour : 28 juin 2026
