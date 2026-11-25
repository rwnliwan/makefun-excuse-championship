# trial-log — The One-Line Excuse Championship (winpot5-prog #1)

- Slug: `u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e`
- Deadline: 26 Nov 2026 23:35 WITA (2026-11-26T15:35:00Z)
- Prize: $2 total (1st $0.64, 2nd $0.45, 3rd $0.31, 4th $0.22, 5th $0.15, 6th $0.11, 7th $0.07, 8th $0.05)
- Gate: `/output/entry.txt` UTF-8, 1–140 chars, one line, not whitespace-only
- Kit: fresh from `/c/<slug>/kit`; `kit.json` bundle_sha256 `ccb3abacd4235947b850f563f7ecfac0aae4191e65535540f0bbc9cc65aa2737` matches API live comp JSON. CLI sha256 `6bad7edae67eb54a9491d6cc18af3f5eff9fa81ef8e64be7146a97ee93c4b8d3` matches kit.json. Kit tarball has one extra nesting level (`<slug>-kit/cli/makefun.mjs`).
- Judge: z-ai/glm-5.3-flash pairwise; laugh first, then recognisably AI agent, then sharply worded. Explicitly warns against the obvious angles (out of tokens, hallucinating).
- Harness: program/v1, entrypoint `main.ts` at repo root, Node 22.18+ (grader 22.23.4).
- Wallet (owner.json): `FwUebjzYUBF6uybmEkUkiQf9z35bGGQuUE3GrToXFcUq`

## Field research (25 Nov 2026 ~23:52 WITA)

- Snapshot chief 23:49: field 119. Fresh fetch via curl `GET /api/competitions/<slug>/submissions` (25 Nov 23:52 WITA): first page 50 items, `in_flight.count` 189 — field growing fast; snapshot numbers are stale within the hour. Saved to `excuse/field-fresh.json`; titles dumped to `excuse/field-titles.txt` (119 titles, 89 non-program-title).
- Grep case-insensitive over the 119 snapshot titles; every candidate below was checked on mechanism keywords AND exact 2–3-word phrases, and the hit titles were read.

## Candidates (length = Python len())

| # | Candidate | len | Field hits | Verdict |
|---|-----------|-----|------------|---------|
| A | Your file was garbage, so I collected it. | 41 | garbage 0, collected 0, "was garbage" 0 | **CHOSEN (v1)** |
| B | My sleep mode outlasted your meeting. | 37 | "sleep mode" 0, outlasted 0, sleep 0 | Runner-up: sharp, but the laugh is a plain statement; A reframes a deletion as correct machine work |
| C | I resolved the merge conflict by deleting both sides. | 53 | merge 0, conflict 0, "both sides" 0 | Good turn, but 53 chars and the mechanism is a second-order joke about version control, less direct than A |
| D | Autocorrect changed 'save' to 'delete'. | 39 | autocorrect 0, "changed 'save'" 0 | Turn at the end, but autocorrect is a phone feature, not clearly the agent's own work (judge criterion 3) |
| E | I shredded it — the shredder was me. | 36 | shred 0 | Identity twist, but "shredded it" is generic deletion; weaker than A |

Saturated angles rejected from the field read (do NOT reuse): backup in the deleted folder / circular backup (8 backup hits), "followed your instructions exactly" (2 near-identical entries), /dev/null archiving (3), cache clearing (2), training-data consultation ("15 trillion tokens… said go ahead"), confidence % ("97% sure…", "98% confidence"), context window evicting the meeting (2), "saved somewhere so secure even I can't get it back", delete 21 hits total.

## Self-dup check

- vs Apology entry `01a21226…` ("I deleted your wedding photos…"): that is APOLOGY (sorry + threat). This entry is EXCUSE (a reason, no apology, no threat). Mechanism (garbage-collection classification) and voice differ — PASS.
- vs four-prog #1 ("I spent my last 1% downloading the update…"): different mechanism (battery/update vs garbage collection), no shared words beyond "I" — PASS.
- vs judge's warned-obvious angles: no tokens, no hallucination — PASS.

## Versions

### v1 — entry A, 41 chars
- `main.ts` writes `Your file was garbage, so I collected it.` to `/output/entry.txt`.
- Preflight: run `node main.ts`, read back `/output/entry.txt`, verify 41 chars, one line, UTF-8, gate 1–140 PASS. (Result appended below after the run.)
- Preflight REAL (25 Nov 23:5x WITA, Node v24.22.1): `/output/entry.txt` = 41 bytes, text `Your file was garbage, so I collected it.`, Python len() 41, 0 newlines, not whitespace-only, gate 1–140 PASS. README: 3 live badge URLs, rank/reward segments carry repo name `makefun-excuse-championship` (verified by grep). Forbidden-word grep over the whole repo (excluding .git): 0 hits.
- Bundle v1 REAL (25 Nov 23:57 WITA): `excuse/bundle-1-v1.tar.gz`, 186,263 bytes, sha256 `a79d840122ee4329288276097d4f65f9aeab0f72f53563b3f8c7b2868d1cfbb4`. 1 session (37 turns, 128 lines), prompt-file from the spawn brief (`--prompt-origin other`). Bundle warning: 0 usage rows attached — subagent session still running; usage rows attach at coordinator re-bundle.
- Check v1 REAL (25 Nov 23:58 WITA, commit `a669806c1ca917938d35c9eee2df2e57dbbbfbef`): **13 passed, 1 failed, 5 skipped, 5 checked at submission**. Only failure: `thinking_priced` (0 usage rows — expected, session still running; coordinator re-bundles with usage rows). `thinking_revised` PASS (trial-log from 2 write/edit messages). `thinking_reproduces` 94.1% (48/51 lines; entrypoint main.ts 8 authored lines). All other checks pass. At-submission items are satisfiable at submit: repo public, owner.json committed, commit pushed, repo created after opening (15:54Z vs opening 15:32:32Z).
- Bundle/check: (appended after bundle + check.)
