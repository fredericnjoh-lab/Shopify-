# PHASE-1-EXECUTION.md — SEO Phase 1, 12 tasks

This file is the execution plan for Phase 1 SEO tasks on the FredJo Shopify storefront. Each task has a type, a goal, search commands to run, the action to take, and a commit template.

**Read `CLAUDE.md` first.** It contains the brand voice rules and codebase constraints that apply to every task here.

**Mode of execution:** Tasks run sequentially. Pause after each commit for Fred to validate the live preview before moving to the next. Once 3–4 commits are validated and the pattern is trusted, batch-execute the remaining tasks.

**Task types:**

- **`code`** — Claude Code edits files in this repo and commits.
- **`admin`** — Action lives in Shopify Admin or Google Search Console. Claude Code skips and reports.
- **`mixed`** — Code + admin. Claude Code does the code part, flags the admin part for Fred.

---

## Task 1 — Title tag template audit

**Type:** `code`
**Goal:** Every page has a unique, brand-voiced title tag under 60 characters. No duplicates across templates.

**Investigate:**

```bash
grep -rn "page_title\|<title>\|title:" snippets/meta-tags.liquid layout/theme.liquid sections/main-product.liquid sections/main-collection.liquid
```

**Action:**

1. Open `snippets/meta-tags.liquid` (or wherever `<title>` is rendered — usually included from `layout/theme.liquid`).
2. Confirm the title logic produces unique titles for: home, product, collection, blog, article, page, cart, search.
3. Replace any promotional language with declarative brand voice. No exclamation, no "Buy now."
4. Confirm length: target ≤ 60 chars including " — FredJo" or " | FredJo" suffix.
5. For homepage specifically, check the title against Fred's tagline preference — declarative, "No Apologies" or equivalent.

**Commit:**

```
fix(seo): brand-voiced title tags, ≤60 chars, unique per template
```

---

## Task 2 — Meta description template audit

**Type:** `code`
**Goal:** Every template renders a unique, brand-voiced meta description under 160 characters. Fallback hierarchy: page-specific > template default > store default.

**Investigate:**

```bash
grep -rn "page_description\|meta name=\"description\"" snippets/meta-tags.liquid sections/
```

**Action:**

1. Confirm `snippets/meta-tags.liquid` has a fallback chain: `{{ page_description | default: collection.description | default: shop.description }}` or equivalent.
2. Check store default (Shopify Admin → Online Store → Preferences → Meta description) — flag for Fred if it's promotional or off-voice (this is `admin`, can't fix from code).
3. Strip HTML tags from descriptions: pipe through `| strip_html | strip_newlines | escape | truncate: 160`.
4. Ensure no exclamation, no questions, no "Shop now."

**Commit:**

```
fix(seo): meta description fallback chain + brand voice cleanup
```

**Admin flag:** If store default meta description is off-voice, note it in commit body for Fred to fix in Shopify Admin → Preferences.

---

## Task 3 — Canonical URLs

**Type:** `code`
**Goal:** Every page emits a `<link rel="canonical">` pointing to the canonical version. Collection-with-filter pages canonicalize to the unfiltered collection.

**Investigate:**

```bash
grep -rn "canonical_url\|rel=\"canonical\"" snippets/ layout/
```

**Action:**

1. Confirm `<link rel="canonical" href="{{ canonical_url }}">` is in `<head>` (usually `snippets/meta-tags.liquid` or `layout/theme.liquid`).
2. For collection templates with filtering/sorting, ensure the canonical strips query params — Shopify's `canonical_url` does this by default. Verify on a filtered collection URL.
3. Check pagination: paginated pages should canonicalize to themselves (e.g., `/collections/all?page=2` canonicals to itself), not to page 1. This is Shopify's default but easy to break.

**Commit:**

```
fix(seo): ensure canonical URLs on all templates including filtered collections
```

---

## Task 4 — H1 hierarchy audit

**Type:** `code`
**Goal:** Every page has exactly one `<h1>`. No `<h1>` in shared snippets/headers/footers. Heading order is sequential (no `<h1>` followed directly by `<h3>`).

**Investigate:**

```bash
grep -rn "<h1\|<h2\|<h3" sections/ snippets/ layout/ templates/
```

**Action:**

1. Identify any `<h1>` in `snippets/` or `layout/` — these will fire on every page and must become `<p class="h1-style">` or be moved to a section.
2. Confirm each main template (home, product, collection, page, article) has its own `<h1>` in its main section.
3. Sample three live pages (home, a product, a collection) and inspect heading order in the rendered HTML.

**Commit:**

```
fix(seo): single h1 per page, sequential heading order
```

---

## Task 5 — Image alt text audit

**Type:** `code`
**Goal:** All template-rendered images have meaningful, brand-voiced alt text. Decorative images use `alt=""`.

**Investigate:**

```bash
grep -rn "img_url\|image_tag\|<img" sections/ snippets/ templates/ | grep -v "alt="
```

**Action:**

1. For every `<img>` or `image_tag` filter call, confirm an `alt` attribute is set.
2. If alt is missing, add it. For product images, use `{{ image.alt | default: product.title | escape }}`. For section images, accept a section setting `image_alt` and fall back to `''` (decorative).
3. Brand voice for alt text: descriptive, declarative, no keyword stuffing. Example: alt="FredJo black hoodie, gold logo, front view" — not "buy black hoodie streetwear paris cheap."

**Commit:**

```
fix(a11y,seo): meaningful alt text on all template images
```

**Note:** Product image alts on individual products are merchant-set (Shopify Admin → Products → image → Edit alt text). Flag for Fred if a sample product is missing alt text — that's `admin`.

---

## Task 6 — Product schema.org JSON-LD

**Type:** `code`
**Goal:** Every product page emits valid Product structured data with name, image, description, sku, brand, offers (price, availability, priceCurrency).

**Investigate:**

```bash
ls snippets/ | grep -i schema
grep -rn "application/ld+json\|@type.*Product" snippets/ sections/main-product.liquid
```

**Action:**

1. If `snippets/schema-product.liquid` exists, open and validate it against schema.org/Product.
2. If it doesn't exist, create it with: `@context`, `@type: Product`, `name`, `image`, `description`, `sku`, `brand: { @type: Brand, name: "FredJo" }`, `offers: { @type: Offer, price, priceCurrency, availability, url }`.
3. Include from `sections/main-product.liquid` inside the product context.
4. Test the rendered output on a live product page with [Google Rich Results Test](https://search.google.com/test/rich-results).

**Commit:**

```
feat(seo): Product schema.org JSON-LD on product pages
```

---

## Task 7 — Organization schema.org JSON-LD

**Type:** `code`
**Goal:** Homepage emits Organization (or BrandOrganization) structured data with name, url, logo, sameAs (social links).

**Investigate:**

```bash
grep -rn "@type.*Organization" snippets/ sections/
```

**Action:**

1. If `snippets/schema-organization.liquid` exists, validate. If not, create it.
2. Include in `layout/theme.liquid` conditional on `template == 'index'`, OR include only in homepage section.
3. Fields: `@context`, `@type: Organization`, `name: "FredJo"`, `url: shop.url`, `logo`, `sameAs: [Instagram, Facebook, TikTok, YouTube, Twitter URLs]`.
4. Pull social URLs from theme settings if available; otherwise hardcode in the snippet with a comment to centralize later.

**Commit:**

```
feat(seo): Organization schema.org JSON-LD on homepage
```

---

## Task 8 — Internal linking on product pages

**Type:** `code`
**Goal:** Product pages link to: parent collection, related products, brand collection. Reduces orphan pages and distributes PageRank.

**Investigate:**

```bash
grep -rn "related-products\|product.collections\|product-recommendations" sections/main-product.liquid snippets/
```

**Action:**

1. Confirm a "Related products" section is present below the product. Impulse 8.0 ships with `sections/related-products.liquid` or similar.
2. Add a breadcrumb in `sections/main-product.liquid` if missing: Home > Collection > Product. Use `<nav aria-label="Breadcrumb">` and emit BreadcrumbList JSON-LD.
3. Verify "Recently viewed" if available — useful for internal linking and engagement.

**Commit:**

```
feat(seo): breadcrumbs + BreadcrumbList JSON-LD on product pages
```

---

## Task 9 — robots.txt customization

**Type:** `code`
**Goal:** Block search and account paths from crawl. Don't block what Shopify auto-blocks.

**Investigate:**

```bash
ls templates/ | grep robots
cat templates/robots.txt.liquid 2>/dev/null
```

**Action:**

1. If `templates/robots.txt.liquid` doesn't exist, create it. Start from Shopify's default and add:
   - `Disallow: /search`
   - `Disallow: /apps/`
   - Keep all of Shopify's default Disallows (account, cart, checkout, etc.)
2. Don't add `Disallow: /collections/` or other content paths.
3. Add the sitemap reference: `Sitemap: {{ shop.url }}/sitemap.xml` (Shopify usually adds this automatically — confirm).

**Commit:**

```
chore(seo): customize robots.txt to disallow /search and /apps
```

---

## Task 10 — Navigation capitalization

**Type:** `admin`
**Goal:** Navigation labels match brand voice (Title Case or ALL CAPS depending on Fred's preference, applied consistently). Currently inconsistent.

**Action for Fred (Claude Code does not execute):**

1. Shopify Admin → Online Store → Navigation
2. Open Main menu, Footer menu, any Mega menu.
3. Apply consistent capitalization. Recommended for FredJo: ALL CAPS for top-level (HOME, SHOP, JOURNAL, ABOUT) — matches Bebas Neue display style. Title Case for sub-items.
4. Save each menu.

**No commit.** Note in the next code commit body: "Nav capitalization: tracked, Fred to apply in Shopify Admin."

---

## Task 11 — 301 redirects audit

**Type:** `admin`
**Goal:** Old URLs (from past theme changes, broken links, deleted products) redirect to current canonical pages. Reduces 404s, preserves link equity.

**Action for Fred (Claude Code does not execute):**

1. Shopify Admin → Online Store → Navigation → URL Redirects.
2. Pull a list of 404s from Google Search Console (Coverage report → Excluded → Not found).
3. For each meaningful 404 (high traffic or with backlinks), create a 301 redirect to the closest current page.
4. Skip redirects for spam URLs or one-off scrapes.

**No commit.** This is an ongoing maintenance task, not a one-time fix.

---

## Task 12 — Google Search Console verification + sitemap submission

**Type:** `admin`
**Goal:** Storefront is verified in GSC, sitemap is submitted, key pages are indexed.

**Action for Fred (Claude Code does not execute):**

1. [Google Search Console](https://search.google.com/search-console) → Add property → use the canonical domain (e.g., `https://fredjoclothing.com`).
2. Verify via DNS TXT record (preferred — survives theme changes) or HTML tag (Shopify Admin → Preferences → Google Search Console).
3. Sitemaps → Submit `https://fredjoclothing.com/sitemap.xml`.
4. URL Inspection → Request indexing for: home, top 3 collections, top 5 products.
5. Wait 48–72h, check Coverage report for indexing issues.

**No commit.** Once verified, future Phase 2 work can use GSC data for keyword targeting.

---

## Execution log

After completing each task, append a one-line entry below with the date and commit SHA (or "admin — done" for admin tasks). Fred uses this as the audit trail.

```
[x] T1  fix(seo): brand-voiced title tags — 2026-05-10 — 81f8273
[x] T2  fix(seo): meta description fallback — 2026-05-10 — 9e37f21
[x] T3  verified, no change needed — 2026-05-10 — canonical_url present in all 7 layouts, Shopify default correct
[x] T4  fix(seo): single h1, sequential headings — 2026-05-10 — 64385e1
[x] T5  fix(a11y,seo): alt text — 2026-05-10 — d873415
[x] T6  feat(seo): Product JSON-LD — 2026-05-10 — e6a5b51
[ ] T7  feat(seo): Organization JSON-LD
[ ] T8  feat(seo): breadcrumbs + BreadcrumbList JSON-LD
[ ] T9  chore(seo): robots.txt
[ ] T10 admin — nav capitalization
[ ] T11 admin — 301 redirects audit
[ ] T12 admin — GSC verification + sitemap
```

---

—Fred
