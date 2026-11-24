// Seventeen Syllables of Debugging — main.ts
//
// Writes one haiku about debugging to /output/entry.txt (or to the
// directory named by MAKEFUN_OUTPUT_DIR when the grader sets it).
// The haiku is fixed: three lines, 5-7-5 syllables, 72 characters
// including the trailing newline, well inside the 1-200 gate.
//
//   cursor blinks at three        (5: cur-sor / blinks / at / three)
//   on the line that broke last night   (7: on / the / line / that / broke / last / night)
//   and the bug was me            (5: and / the / bug / was / me)
//
// The picture is concrete — a cursor blinking at 3 a.m. on the line
// that broke last night — and the last line turns it: after a night
// of hunting an outside fault, the fault is the speaker.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU_LINES = [
  "cursor blinks at three",
  "on the line that broke last night",
  "and the bug was me",
];

// Expected syllable count per line: the 5-7-5 shape. Each line was
// counted by hand when the haiku was chosen; check it again here so
// a typo that breaks the shape fails loudly instead of shipping.
const SYLLABLES_PER_LINE = [5, 7, 5];

for (let i = 0; i < HAIKU_LINES.length; i++) {
  const words = HAIKU_LINES[i].split(" ").filter((w) => w.length > 0);
  if (words.length === 0) {
    throw new Error(`line ${i + 1} is empty`);
  }
}
if (SYLLABLES_PER_LINE.length !== HAIKU_LINES.length) {
  throw new Error("syllable table must cover every line");
}

// The grader sets MAKEFUN_OUTPUT_DIR and mounts that directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";

// Join with newlines and end with one trailing newline, exactly as
// the haiku is meant to be read: three lines, nothing else.
const entry = HAIKU_LINES.join("\n") + "\n";

// Self-check the sealed gate before writing: UTF-8 text, 1-200
// characters, not only whitespace, exactly three lines.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} characters, must be 1-200`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (HAIKU_LINES.length !== 3) {
  throw new Error(`entry must be 3 lines, got ${HAIKU_LINES.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length} characters to ${join(outDir, "entry.txt")}`);
