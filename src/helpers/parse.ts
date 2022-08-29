import { capitalize } from "./capitalize";

export function parse(text: string) {
  const step1 = text.replaceAll("{", "\n#");
  const step2 = step1.replaceAll("}", "\n");
  const phrases = step2.split("\n");
  const newText: string[] = [];
  phrases.map((p: string) => {
    if (p[0] == "#") {
      newText.push(capitalize(p.slice(1)));
    }
  });
  return newText;
}
