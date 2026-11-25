import { mkdirSync, writeFileSync } from "node:fs";

// The One-Line Excuse Championship — entry v1.
// One line, one sentence, turn in the last words: the machine did its
// job exactly right, and that is the problem. The file was classified
// as garbage, so the garbage collector collected it.
const ENTRY = "Your file was garbage, so I collected it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
