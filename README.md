<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/YounndAI/yon-textmate/main/assets/yon-icon-ondark.png" />
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/YounndAI/yon-textmate/main/assets/yon-icon-onlight.png" />
    <img alt="YON" src="https://raw.githubusercontent.com/YounndAI/yon-textmate/main/assets/yon-icon-onlight.png" width="80" />
  </picture>
</p>

<p align="center">
  <strong>@younndai/yon-textmate</strong><br />
  TextMate grammar and Shiki integration for YON™ syntax highlighting<br />
  <em>Part of the YON™ toolchain — data, intent, and instructions in a single stream.</em>
</p>

<p align="center">
  <a href="https://yon.younndai.com">Website</a> · <a href="https://github.com/YounndAI/yon-spec">Specification</a> · <a href="./LICENSE">Apache 2.0</a> · <a href="./TRADEMARK.md">Trademark Policy</a> · <a href="https://github.com/YounndAI/brand">Brand Assets</a>
</p>

[![npm](https://img.shields.io/npm/v/@younndai/yon-textmate)](https://www.npmjs.com/package/@younndai/yon-textmate)
[![license](https://img.shields.io/npm/l/@younndai/yon-textmate)](./LICENSE)

TextMate grammar and Shiki integration for [YON™](https://yon.younndai.com) syntax highlighting.

## What's included

- **`syntaxes/yon.tmLanguage.json`** — TextMate grammar with full EBNF coverage
- **`language-configuration.json`** — Brackets, comments, folding
- **`src/shiki.ts`** — Shiki language registration export

## Use with Shiki

```ts
import { createHighlighter } from "shiki";
import { yonLanguage } from "@younndai/yon-textmate";

const highlighter = await createHighlighter({
  themes: ["github-dark"],
  langs: [yonLanguage],
});

const html = highlighter.codeToHtml(code, {
  lang: "yon",
  theme: "github-dark",
});
```

## Use with VS Code

Install the [YON extension](https://marketplace.visualstudio.com/items?itemName=YounndAI.yon) — it bundles this grammar.

## Block Injection

Embedded code blocks (`@BEGIN TAG ... @END TAG`) are highlighted using the inner language grammar. 70+ languages supported — TypeScript, JavaScript, JSON, Python, Rust, Go, SQL, YAML, Markdown, and more. Unrecognized tags fall back to plain text.

---

## License & Attribution

Apache-2.0. © 2026 MARLINK TRADING SRL (YounndAI). See [`LICENSE`](./LICENSE) and [`NOTICE`](./NOTICE).

"YON" and "YounndAI" are trademarks of MARLINK TRADING SRL — see [`TRADEMARK.md`](./TRADEMARK.md).

Created by [Alexandru Mareș](https://allemaar.com).

Website: [yon.younndai.com](https://yon.younndai.com)

<p align="center"><em>Structure before scale. Harmony above all.</em></p>

---

|               |                                                         |
| ------------- | ------------------------------------------------------- |
| **Spec**      | [YON v2.0](https://yon.younndai.com)                    |
| **Author**    | [Alexandru Mareș](https://allemaar.com)                 |
| **Company**   | [MARLINK TRADING SRL](https://younndai.com) · YounndAI™ |
| **License**   | [Apache 2.0](./LICENSE) — © 2026 MARLINK TRADING SRL    |
| **Trademark** | [YounndAI™ Trademark Guidelines](./TRADEMARK.md)        |

_Structure before scale._
