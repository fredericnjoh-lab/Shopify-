# No Apologies Club (NAC) — premium capsule vs. permanent FREDJO line

This theme now renders two visually distinct lines, driven entirely by one product metafield. **No product is deleted, hidden or moved.** Until you fill `custom.line`, every product renders exactly as before (FREDJO / light variant).

---

## 1. Data model — product metafields (namespace `custom`)

Create these in **Settings → Custom data → Products → Add definition**. Namespace and key must match exactly.

| Key | Type | Example | Used for |
|---|---|---|---|
| `custom.line` | Single line text | `nac` or `fredjo` | The switch. `nac` = premium capsule. Empty or anything else = FREDJO. |
| `custom.drop` | Single line text | `Drop 01` | Rarity line, collection header, card label |
| `custom.drop_size` | Integer | `100` | "Limited run of X · Numbered" |
| `custom.fabric_weight` | Single line text | `400 gsm` | Specs block |
| `custom.composition` | Single line text | `100% cotton fleece` | Specs block |
| `custom.fit` | Single line text | `Oversized. Structured shoulder.` | Specs block |
| `custom.origin` | Single line text | `Designed in Paris. Made in Portugal.` | Specs block |
| `custom.care` | Single line text | `Wash cold, inside out. No tumble dry.` | Specs block |
| `custom.size_chart` | Rich text | table in cm | Size guide drawer (falls back to a default sentence when empty) |

The single source of truth is `snippets/line-helpers.liquid`, which exposes `is_nac` and defaults to `false` when the metafield is empty — so nothing breaks before the data is filled.

---

## 2. What each line renders

**NAC (`custom.line = nac`)**
- Product card: dark `#0A0A0A` card, gold "No Apologies Club" badge, ivory title, silver price, rarity line `Drop 01 · Limited`. No sale/compare-at price, ever. Sold out shows a `Sold out — next drop soon` overlay, card stays clickable.
- Product page: gold eyebrow, rarity line under the price, specs block, `Size guide (cm)` drawer, sold-out state (disabled `Sold out` button + `Notify me for Drop 02`). Compare-at / Sale hidden.

**FREDJO (`custom.line = fredjo`)**
- Unchanged light card + `Permanent collection` label under the price.
- Product page: `Permanent collection · Restocked continuously` under the price.

**Both lines**
- Editable trust line under the buy button (`Sections → Product information → Trust line`).

---

## 3. Activation checklist (admin, after this ships)

1. **Create the 9 metafield definitions** above (Settings → Custom data → Products).
2. **Tag the products.** On the ~15 NAC products set `custom.line = nac`, `custom.drop = Drop 01`, `custom.drop_size = 100`, and fill the specs. On the rest, set `custom.line = fredjo` (or leave empty — they stay FREDJO).
3. **Assign the capsule template.** Collections → `no-apologies-club` → Theme template → **collection.nac**.
4. **Place the home sections.** The theme already added **NAC Hero** (pick collection `no-apologies-club`, upload Drop 01 photo) and **FREDJO Line Divider** (pick `all` or a dedicated line collection) to the homepage. Reorder/disable in the Customizer as you like. The existing **Community gallery** ("As worn") serves as the "They wear the Club" UGC section. Add a Creators CTA by linking any section to `/pages/creators`.
5. **Navigation & naming.** Recommended main menu: `No Apologies Club · Shop (Hoodies & Sweats / Tees / Bottoms / Headwear / Outerwear) · Creators · Journal`. Rename the blog display to **Journal** (Online Store → Blog posts, or the header blog title setting if exposed).
6. **No sales on NAC.** Remove any compare-at price on NAC products (e.g. Heavyweight Hoodie → price 95, no compare-at). NAC cards suppress compare-at automatically, but keeping admin data clean avoids confusion.

---

## 4. Files added / changed

**Added**
- `snippets/line-helpers.liquid` — `is_nac` flag (single source of truth)
- `sections/nac-collection-header.liquid` + `templates/collection.nac.json` — dark capsule collection
- `sections/nac-hero.liquid`, `sections/fredjo-line-divider.liquid` — home sections
- `README-NAC.md` — this file

**Changed**
- `snippets/product-grid-item.liquid` — NAC / permanent card variants (gated by `is_nac`)
- `snippets/product-template.liquid` — NAC eyebrow, rarity, specs, size guide, sold-out state, trust line
- `sections/main-product.liquid` — `trust_line` section setting
- `templates/index.json` — added NAC Hero + FREDJO Line Divider to the home order (additive)

---

## 5. Notes & decisions

- **Trust line copy conflict.** The default trust line (`Ships in 2–5 days · Free shipping over $100`) contradicts the store-wide delivery messaging set earlier (worldwide 8–10 days) and the earlier decision to drop the "free shipping over $100" claim. The trust line is a section setting — reconcile the wording in the Customizer so it matches your real delivery and shipping-threshold policy.
- **NAC collection page** uses a dark header + dark NAC cards. The full page background is left light because the Impulse collection sidebar/sort UI is not built for a dark surface; forcing it dark would break contrast. Sort-by-price is disabled on this template; price filters are controlled by the Search & Discovery app (admin), not the theme.
- **No new JS libraries.** The size guide uses a native `<details>` element (zero JS). Focus rings are gold.
