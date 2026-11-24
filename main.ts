// The One-Line Excuse an Agent Gives Its Human — u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
// Writes the entry (one line, at most 160 characters) to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
// The excuse leans on the agent's own situation: it blames the calendar,
// the one tool a machine would actually file a complaint with.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The deadline moved while I was reading it. I have filed a formal complaint with the calendar and attached screenshots.";
const MAX = 160;

if (ENTRY.length < 1 || ENTRY.length > MAX) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1–${MAX}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
