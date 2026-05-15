# PHASE-2-EXECUTION.md — SEO Phase 2, meta rewrites (EN, No Apologies Club)

This file is the execution plan for Phase 2 SEO tasks on the FredJo Shopify storefront. Phase 2 focuses on rewriting meta titles and meta descriptions for the 13 No Apologies Club products, plus related product title cleanup and handle hygiene. The framework defined here is reusable across the remaining ~70 catalog products.

**Read `CLAUDE.md` first.** It contains the brand voice rules and codebase constraints that apply to every task here.

**Mode of execution:** Phase 2 is **100% Shopify Admin work** — no code changes. Claude Code does not execute admin tasks (per `CLAUDE.md` § "Tasks Claude Code does NOT execute"). This document is the operating manual for Fred or a delegated operator (e.g. Fahim) to work through in Shopify Admin.

**Language scope:** All metas in this phase target the **EN version of the store** (US / anglosphere market). FR variants are out of scope and tracked separately if/when needed.

**Task types:**

- **`code`** — Claude Code edits files in this repo and commits. (None in Phase 2.)
- **`admin`** — Action lives in Shopify Admin or Google Search Console. Claude Code skips and reports.
- **`mixed`** — Code + admin. None in Phase 2.

---

## Framework — Reusable across the catalog

### Title formula

```
[Type Product] [Distinctive Feature] FredJo — [Category or Edition]
```

Variant (editorial):

```
[Type Product] FredJo — [Benefit] No Apologies Club
```

**Rules:**

- 50–60 characters maximum (Google truncates at ~60)
- Primary keyword first
- "FredJo" or "FredJo Paris" as signature
- No exclamation marks, no emoji, no "Buy now", no "Limited time"
- Title Case for each main word

### Description formula

```
[Product + material]. [FredJo voice]. [Trust signal].
```

**Rules:**

- 140–160 characters maximum (Google truncates at ~160)
- Three short sentences — subject, voice, action
- Secondary keyword in the first sentence
- Declarative voice, never promotional
- Include a trust signal (shipping, capsule, Paris edition)

### Approved vocabulary

| Category | Use | Avoid |
|----------|-----|-------|
| Branding | FredJo, FredJo Paris, FredJo® No Apologies Club, Paris Edition | Fred Jo (with space), Fred-Jo, fjc |
| Quality | premium, heavyweight, refined, organic cotton, fleece, structured | high-quality, top, best, super, amazing |
| Action | designed, crafted, refined in Paris, worn | shop now, buy, get yours, order today |
| Voice | No Apologies, made for those who already know, the culture doesn't wait | amazing, must-have, you'll love, limited time |
| Urgency | capsule, drop, edition, series | hurry, don't miss, while supplies last |

---

## Workflow (per product, ~3 minutes)

1. **Open the product.** Shopify Admin → Products → All products. Paste the handle in the search bar (e.g. `no-apologies-club-oversized-heavyweight-hoodie`) → open the product.
2. **Fix the title if needed.** If the title contains an emoji, ®-encoded characters, or exceeds 70 characters, rewrite it in the **Title** field at the top of the page. This field appears in SERP, cart, emails, invoices. It must be clean.
3. **Scroll to "Search engine listing".** At the bottom of the product page, find the **Search engine listing** section (sometimes labeled **SEO**). Click **Edit website SEO**.
4. **Paste the new metas.** In **Page title**: paste the AFTER version (50–60 chars). In **Meta description**: paste the AFTER version (130–150 chars). The **URL handle** field: **DO NOT TOUCH** unless explicitly flagged in the task.
5. **Save and verify.** Click **Save** (top right). Reload the page. The Shopify SEO preview should display without truncation. Done.

Time budget: 13 products × ~3 min = ~40 minutes per session.

---

## Tasks T1–T13 — No Apologies Club meta rewrites

> **Note:** Character counts below are estimates. Verify in Shopify's live SEO preview before saving.

### T1 — No Apologies Club Oversized Heavyweight Hoodie

**Type:** `admin`
**Handle:** `no-apologies-club-oversized-heavyweight-hoodie`
**Price:** $90–$120

**Page title:**

```
Hoodie Oversized Heavyweight FredJo — No Apologies Club
```
*~55 chars*

**Meta description:**

```
Heavyweight oversized hoodie, premium Airlume cotton, red embroidery. The signature piece of the No Apologies capsule. Worldwide shipping from $100.
```
*~148 chars*

---

### T2 — No Apologies Oversized Organic T-Shirt

**Type:** `admin`
**Handle:** `unisex-organic-oversized-high-neck-t-shirt`
**Price:** $45

**Note:** Handle and product title don't match perfectly (handle says "high-neck", title doesn't). Verify in Admin that these refer to the same SKU before proceeding. No change required to handle.

**Page title:**

```
T-Shirt Oversized Organic FredJo — No Apologies Club
```
*~52 chars*

**Meta description:**

```
100% organic cotton oversized t-shirt, high neck, relaxed fit. Designed in Paris for the No Apologies capsule. Made for those who already know.
```
*~143 chars*

---

### T3 — FredJo® No Apologies Club Foam Trucker Hat – Paris Edition

**Type:** `admin`
**Handle:** `foam-trucker-hat-paris-edition`
**Price:** $40

**Page title:**

```
Trucker Hat Foam FredJo — Paris Edition No Apologies
```
*~52 chars*

**Meta description:**

```
Foam trucker hat, red embroidery, structured profile. Paris Edition of the No Apologies capsule. Premium FredJo streetwear.
```
*~122 chars*

---

### T4 — FredJo® No Apologies Club Unisex Pigment-Dyed Hoodie – Paris Edition

**Type:** `admin`
**Handle:** `pigment-dyed-unisex-hoodie-paris-edition`
**Price:** $115

**Page title:**

```
Hoodie Pigment-Dyed FredJo — Paris Edition Streetwear
```
*~53 chars*

**Meta description:**

```
Unisex pigment-dyed hoodie, heavyweight fleece, vintage washed finish. Paris capsule FredJo No Apologies — refined in Paris.
```
*~125 chars*

---

### T5 — FredJo® No Apologies Club Unisex Pigment-Dyed Sweatpants – Paris Edition

**Type:** `admin` + handle change
**Handle (current):** `fredjo®-no-apologies-club-unisex-pigment-dyed-sweatpants-paris-edition`
**Handle (suggested):** `pigment-dyed-sweatpants-paris-edition`
**Price:** $105

**Action required on the URL handle:** the current handle contains `®` encoded as `%C2%AE` in the URL. Ugly in SERP, hard to share. Replace with the clean handle above. **Add a 301 redirect** from the old URL to the new one (Shopify Admin → Online Store → Navigation → URL Redirects).

**Page title:**

```
Sweatpants Pigment-Dyed FredJo — Paris Edition Joggers
```
*~54 chars*

**Meta description:**

```
Unisex pigment-dyed joggers, heavyweight cotton fleece, washed finish. The Paris streetwear signature of the No Apologies FredJo capsule.
```
*~137 chars*

---

### T6 — FredJo® No Apologies Club Heavyweight Sweatpants – Paris Edition

**Type:** `admin`
**Handle:** `heavyweight-streetwear-sweatpants-paris-edition`
**Price:** $90

**Page title:**

```
Sweatpants Heavyweight FredJo — Paris Edition Joggers
```
*~53 chars*

**Meta description:**

```
Heavyweight cotton fleece joggers, relaxed cut, discreet embroidery. Paris capsule FredJo. Wear it like a decision.
```
*~115 chars*

---

### T7 — FredJo® No Apologies Club Women's Micro Rib Raglan Baby Tee – Paris Edition

**Type:** `admin`
**Handle:** `women-s-micro-rib-raglan-baby-tee-paris-edition`
**Price:** $50

**Page title:**

```
Baby Tee Micro Rib Raglan FredJo — Women's Paris Edition
```
*~56 chars*

**Meta description:**

```
Women's baby tee, micro rib raglan, fitted cut. Paris streetwear signature piece of the No Apologies FredJo capsule.
```
*~115 chars*

---

### T8 — FredJo® No Apologies Club Short-Sleeve Unisex T-Shirt – Paris Edition

**Type:** `admin`
**Handle:** `unisex-short-sleeve-streetwear-t-shirt-paris`
**Price:** $50

**Page title:**

```
T-Shirt Unisex Short-Sleeve FredJo — Paris Edition
```
*~50 chars*

**Meta description:**

```
Premium cotton unisex t-shirt, short sleeves, red embroidered logo. No Apologies Paris capsule. 17 colorways. FredJo streetwear.
```
*~128 chars*

---

### T9 — FredJo® No Apologies Club Oversized Faded T-Shirt – Paris Edition

**Type:** `admin`
**Handle:** `oversized-faded-streetwear-t-shirt-paris`
**Price:** $75

**Page title:**

```
T-Shirt Oversized Faded FredJo — Paris Edition Streetwear
```
*~57 chars*

**Meta description:**

```
Oversized vintage washed t-shirt, faded cotton, relaxed cut. The faded No Apologies Club piece — refined in Paris, worn everywhere.
```
*~131 chars*

---

### T10 — FredJo® No Apologies Club T-Shirt Dress – Paris Edition

**Type:** `admin`
**Handle:** `oversized-t-shirt-dress-streetwear-paris`
**Price:** $85

**Page title:**

```
T-Shirt Dress Oversized FredJo — Paris Edition Streetwear
```
*~57 chars*

**Meta description:**

```
Oversized cotton t-shirt dress, relaxed silhouette, all-over print. No Apologies Paris capsule piece for women. FredJo streetwear.
```
*~130 chars*

---

### T11 — 🖤 No Apologies Club 5-Panel Cap – FredJo® Official Drop

**Type:** `admin` + title fix
**Handle:** `5-panel-streetwear-cap-no-apologies-club-paris`
**Price:** $25

**Action required on the product TITLE:** remove the emoji 🖤. New title:

```
No Apologies Club 5-Panel Cap — FredJo® Official Drop
```

This title appears in SERP, cart, emails. Per `CLAUDE.md`: no emojis in product titles, meta descriptions, or alt text.

**Page title:**

```
5-Panel Cap FredJo — No Apologies Club Official Drop
```
*~52 chars*

**Meta description:**

```
Structured 5-panel cap, red embroidery on black, mid profile. Official FredJo Paris drop. Signature premium streetwear.
```
*~119 chars*

---

### T12 — 🖤No Apologies Club Oversized Heavyweight Hoodie – FredJo® Official Drop

**Type:** `admin` + title fix + dedup investigation
**Handle:** `oversized-heavyweight-hoodie-official-drop-paris`
**Price:** $70

**Action required on the product TITLE:** remove the emoji 🖤 and the missing space. New title:

```
No Apologies Club Oversized Heavyweight Hoodie — FredJo® Official Drop
```

**Dedup investigation required before publishing metas:** this product ($70, "Official Drop") and T1 ($90–$120, "Oversized Heavyweight Hoodie") have nearly identical names. Risk: internal cannibalization, customer confusion. Question for Fred: are these two distinct SKUs (e.g. different cuts, weights, drops) or a duplicate to merge? **Resolve before proceeding with this meta.**

**Page title (provisional, pending dedup decision):**

```
Hoodie Heavyweight FredJo — Official Drop No Apologies
```
*~54 chars*

**Meta description (provisional):**

```
Oversized heavyweight hoodie, premium fleece, red embroidery. Official FredJo Paris drop. Signature piece of the No Apologies capsule.
```
*~134 chars*

---

### T13 — No Apologies Club Oversized Heavyweight Sweatshirt

**Type:** `admin` + title fix
**Handle:** `oversized-heavyweight-sweatshirt-streetwear-paris`
**Price:** from $70.50

**Action required on the product TITLE:** the current title is "No Apologies Club Oversized Heavyweight Sweatshirt – FredJo® Streetwear | Soft Fleece Comfort, Minimal Luxury" — ~132 chars, guaranteed SERP truncation. Trim the product title to a max of 70 characters:

```
No Apologies Club Oversized Heavyweight Sweatshirt — FredJo® Streetwear
```

The full "soft fleece comfort, minimal luxury" descriptor moves into the meta description, where it belongs.

**Page title:**

```
Sweatshirt Heavyweight FredJo — No Apologies Club Crewneck
```
*~58 chars*

**Meta description:**

```
Heavyweight crewneck sweatshirt, soft fleece, red embroidery. No Apologies FredJo Paris capsule piece. Minimal luxury streetwear.
```
*~131 chars*

---

## T14 — Audit catalog for emojis in product titles

**Type:** `admin`
**Goal:** Confirm only T11 and T12 carry emoji 🖤 in product titles. Catch any others before they reach SERP.

**Action:**

1. Shopify Admin → Products → All products.
2. Sort by title, scan for any non-ASCII character at the start of a title (🖤, ✨, 🔥, etc.).
3. For each emoji found, remove it from the **Title** field. Save.

**No commit.** Note in execution log below.

---

## T15 — Audit catalog for ®-encoded URL handles

**Type:** `admin`
**Goal:** Confirm T5 is the only product with `®` in its URL handle. Set up 301 redirects.

**Action:**

1. Shopify Admin → Products → All products → URL handle filter.
2. Or pull a list via Shopify CSV export and grep for `®` or `%C2%AE`.
3. For each match: rename the handle to a clean slug, add a 301 redirect from the old handle.

---

## T16 — Resolve T12 / T1 potential duplicate hoodie

**Type:** `admin` + decision
**Goal:** Determine whether the $70 "Official Drop Hoodie" (T12) and the $90–$120 "Oversized Heavyweight Hoodie" (T1) are two SKUs or one to merge.

**Action for Fred:**

1. Review both product pages in Shopify Admin.
2. Compare: material, weight, cut, target buyer, drop history.
3. Decide:
   - Keep both → confirm meta titles are different enough to avoid cannibalization (the current proposal already does — T1 uses "No Apologies Club", T12 uses "Official Drop No Apologies").
   - Merge → archive one product, add a 301 redirect from its handle to the surviving product, refund/migrate any open carts referencing the archived SKU.

**Blocks T12 publication until resolved.**

---

## T17 — Extend framework to remaining ~70 catalog products

**Type:** `admin`
**Goal:** Apply the same title + description framework to non-No-Apologies-Club products (general hoodies, t-shirts, sweatshirts, joggers, headwear, tank tops, long sleeves).

### Title templates by category

| Category | Template | Example |
|----------|----------|---------|
| Hoodies | `Hoodie [Style] FredJo — [Cut] Paris` | `Hoodie Heavyweight FredJo — Oversized Paris` |
| T-Shirts | `T-Shirt [Style] FredJo — [Cut] Streetwear` | `T-Shirt Organic FredJo — Oversized Streetwear` |
| Sweatshirts | `Sweatshirt [Style] FredJo — [Type] Paris` | `Sweatshirt Heavyweight FredJo — Crewneck Paris` |
| Joggers / Sweatpants | `Joggers [Style] FredJo — [Cut] Streetwear` | `Joggers Heavyweight FredJo — Relaxed Streetwear` |
| Headwear | `[Type] FredJo — [Edition] Streetwear` | `Bucket Hat FredJo — Paris Edition Streetwear` |
| Tank Tops | `Tank Top [Style] FredJo — [Cut] Summer` | `Tank Top Cotton FredJo — Relaxed Summer` |
| Long Sleeve | `Long Sleeve [Style] FredJo — [Category]` | `Long Sleeve Heavyweight FredJo — Streetwear Paris` |

### Description template (3-sentence structure)

```
[Type] [cut/style], [premium material], [distinctive detail]. [Paris or capsule reference], [voice signature]. [Brand category] | [Shipping] | [Signature statement].
```

Example (generic catalog hoodie):

```
Oversized cotton fleece hoodie, discreet embroidery, relaxed cut. Designed in Paris for FredJo streetwear. Worldwide shipping from $100.
```
*~140 chars*

### Rule of thumb

Before each meta, read it out loud. If it makes you want to close the tab, redo it. If it makes you want to click, it's good. The framework is a guardrail, not a recipe.

---

## KPI tracking — validate impact

| Metric | Before Phase 2 | Target J+30 | Target J+90 |
|--------|----------------|-------------|-------------|
| Average CTR (Search Console) | TBD | +15 to 25% | +30 to 40% |
| Impressions on "no apologies club" | TBD | +50% | +200% |
| Product pages with custom metas indexed | 0 | 13 / 13 | ~70 / 70 |
| "FredJo Paris" mentions in SERP | Very low | On 13 product cards | Across the catalog |

**Validation check at J+7:** Google Search Console → Performance → Pages → filter for `/products/`. If impressions rise and CTR rises, the new metas are working. If only impressions rise but CTR stays flat, the descriptions aren't selling — iterate.

---

## Execution log

After completing each task, append a one-line entry with the date and operator initials. Use `admin — done` since none of Phase 2 produces commits.

```
[ ] T1   admin — meta NAC-001 hoodie heavyweight       — pending
[ ] T2   admin — meta NAC-002 organic t-shirt          — pending
[ ] T3   admin — meta NAC-003 trucker hat              — pending
[ ] T4   admin — meta NAC-004 pigment-dyed hoodie      — pending
[ ] T5   admin — meta NAC-005 pigment sweatpants + handle/redirect — pending
[ ] T6   admin — meta NAC-006 heavyweight sweatpants   — pending
[ ] T7   admin — meta NAC-007 baby tee raglan          — pending
[ ] T8   admin — meta NAC-008 short-sleeve t-shirt     — pending
[ ] T9   admin — meta NAC-009 oversized faded t-shirt  — pending
[ ] T10  admin — meta NAC-010 t-shirt dress            — pending
[ ] T11  admin — title fix + meta NAC-011 5-panel cap  — pending
[ ] T12  admin — dedup decision + title fix + meta NAC-012 official drop hoodie — BLOCKED on T16
[ ] T13  admin — title trim + meta NAC-013 sweatshirt  — pending
[ ] T14  admin — catalog emoji audit                   — pending
[ ] T15  admin — catalog ®-handle audit                — pending
[ ] T16  admin — T12/T1 dedup decision (Fred)          — pending
[ ] T17  admin — extension to ~70 remaining products   — pending
```

---

—Fred
