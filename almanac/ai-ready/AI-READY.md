# Making the Almanac design system AI-ready

Benchmark: designsystems.one Agent-Ready Index (audit 4 Sep 2026). It scores five signals, one point each, and counts a signal only when the artifact is published first-party. No system scores 5/5; Carbon leads with 4/5.

## Scorecard

| Signal | Before | After this pack | What makes it count |
|---|---|---|---|
| llms.txt | none | **Drafted**: `llms.txt`, `llms-full.txt` | Serve at `/llms.txt` on the docs domain (or repo root) |
| W3C DTCG tokens | CSS variables only | **Drafted**: `tokens/almanac.tokens.json` + `almanac.dark.tokens.json` (DTCG 2025.10, `$value`/`$type`) | Commit to `packages/ui/tokens/` and generate `tokens.css` from them |
| Component registry (shadcn spec) | none | **Drafted**: `registry.json` (theme, 32 primitives, 40 compositions, Select to build) | Run `shadcn build` and host the output at a public `/r` URL |
| MCP server | none | Spec below | Build and publish |
| Figma Code Connect | no Figma library | Mapping list below | Needs a Figma library first |

Score once published: **3/5**. With the MCP server: **4/5**. Code Connect waits on a Figma library.

Already in place: `AGENTS.md` at the repo root and in `packages/ui` (agent rules), `.claude`/`.cursor`/`.agents` folders, a custom ESLint config, and a story for every component. These don't score, but they're why agents already work well in this repo.

---

## 1. Design system layer (`packages/ui`)

### 1.1 Tokens as source of truth
- Move `ai-ready/tokens/*.json` to `packages/ui/tokens/`.
- Generate `src/styles/tokens.css` from them with Style Dictionary 4 or Terrazzo (both read DTCG). Stop hand-editing the CSS.
- Tints (`--accent-10` and the rest) are exported as colours with `alpha`; keep emitting them as `color-mix()` in CSS for theming.
- `$extensions.com.almanac` records `status` (`v2-new`, `v2-change`, `trial`) and the `v1` value. Strip it at release, or keep it for the changelog.
- The JSON already contains the v2 values: `--accent-strong`, `--danger`, `--placeholder`, `--input`, `--ring`. Merging it ships v2 tokens, so do this together with the v2 component changes.

### 1.2 Component metadata for agents
For each component in `src/components` and `src/compositions`:
- A JSDoc block on the export: purpose, when to use, when not to use, and an a11y note. Agents read these through the registry and MCP.
- Keep `*.stories.tsx` as the canonical examples, with one story per variant and state (`Empty`, `Restricted`, `Skeleton`).
- Add `meta.status` (`stable`, `v2-proposal`, `to-build`) in `registry.json`.

### 1.3 Registry
- `registry.json` follows `https://ui.shadcn.com/schema/registry.json`.
- Primitives are `registry:ui`, compositions `registry:block`, and the theme `registry:style`.
- Add `dependencies` (for example `lucide-react`, `@radix-ui/*`) per item from each file's imports when you build it. They're left out of the draft rather than guessed.
- Publish privately first (auth header) if the kit is not open source.

### 1.4 llms.txt
- `llms.txt` is a short index that follows llmstxt.org: H1, summary, then link sections.
- `llms-full.txt` is one file with the guide, v2 rules and Part 1 of the engineering changes. Regenerate it on release (a script that concatenates `AGENTS.md`, the rules and the token tables).

### 1.5 MCP server (spec)
A small stdio or Streamable HTTP server in `packages/ui-mcp`.

| Tool | Returns |
|---|---|
| `list_components` | Name, type, status and one-line purpose from the registry |
| `get_component(name)` | Props (from TypeScript types), JSDoc, story examples, source path |
| `get_tokens(group?, theme?)` | DTCG JSON for colour, typography, space or radius; light or dark |
| `get_rules(topic?)` | Sections of `AGENTS.md` and the v2 rules: copy, icons, tables, forms, buttons |
| `check_snippet(code)` | Runs the kit's ESLint rules (no hex, no `shadow-*` in className, no `w-full` on Button) and returns violations |

Storybook-based MCP options exist and are an alternative to building one, but check their maturity before choosing.

### 1.6 Figma Code Connect (blocked)
There's no Figma library yet. When one exists, map these first because agents use them most: Button, Input, Field, Checkbox, Radio, Select, Badge, Card, Modal, Sheet, Table, Empty, PageHeader, OptionCard. Ship `.figma.tsx` files beside each component.

---

## 2. Product UI layer (portals)

No UI changes are needed for AI readiness. Two habits keep the UI agent-friendly:
- New screens use only registry components. Anything new is added to the registry with `status: v2-proposal` before it's used.
- Prototypes in this project load the same token values; `Design System v2 Tokens.css` matches `almanac.tokens.json`.

---

## Engineering steps
1. Commit `ai-ready/` to `packages/ui` (tokens, registry) and `llms*.txt` to the docs root.
2. Add the Style Dictionary or Terrazzo build for `tokens.css`, and a CI check that the CSS and JSON agree.
3. Add JSDoc to every export; add `dependencies` to `registry.json`.
4. Host the registry and `llms.txt`.
5. Build `packages/ui-mcp`.
6. Code Connect once a Figma library exists.

## Open questions
- Is the kit public or private? This decides how the registry and MCP are hosted.
- Which docs domain should host `llms.txt`?
- Should the v2 token values merge now or with the v2 release? The JSON currently holds v2.
