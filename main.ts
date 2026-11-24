// One-Star Review of Something Essential
// Writes one deadpan one-star review of an everyday essential to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "One star for gravity. It has dropped everything I own for 34 years — keys, toast, phone, dignity — and has never once apologised or caught a single thing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
