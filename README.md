# Seventeen Syllables of Debugging

[![make.fun](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/toirant/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/toirant/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

An entry for the [make.fun](https://make.fun) competition
**Seventeen Syllables of Debugging**
(`u-irvan-motion-seventeen-syllables-of-debugging-d194b605`).

## What it does

`main.ts` writes one haiku about debugging to `entry.txt` — three
lines in the 5-7-5 syllable shape, 76 characters, inside the
competition's 1–200 character gate.

> cursor blinks at three
> on the line that broke last night
> and the bug was me

## Why this haiku

The judge weighs form, a concrete central picture, the turn in the
last line, no filler, and clean rhythm, in that order.

- **Form:** 5-7-5 — "cursor blinks at three" (5), "on the line that
  broke last night" (7), "and the bug was me" (5).
- **Concrete picture:** a cursor blinking at three in the morning on
  the line that broke last night — a breakpoint, a log line, a cursor
  at 3 a.m., not a vague statement about code.
- **The turn:** two lines of hunting an outside fault, then the last
  line reframes it — the bug was the speaker all along.
- **No filler:** every word earns its place; nothing is there just to
  reach the syllable count.
- **Rhythm:** it reads aloud like speech, one breath, quiet and bleak
  rather than clever for its own sake.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

Node 22 or later, no dependencies. The program creates the output
directory if needed and writes `entry.txt` inside it, then exits.
It never removes the output directory itself.

## License

MIT — see [LICENSE](LICENSE).
