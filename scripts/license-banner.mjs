#!/usr/bin/env node
/*
 * Copyright 2026 MARLINK TRADING SRL (YounndAI)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Post-emit license banner.
 *
 * tsc strips block comments from .d.ts emission, so the generated
 * dist artifacts lose their Apache header on every rebuild.
 * This step re-applies it after `tsc` as part of `npm run build`.
 * Idempotent: files already carrying the license line are skipped.
 * Self-contained on purpose so it runs anywhere `prepublishOnly`
 * runs, with no external tooling required.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const PKG = join(dirname(fileURLToPath(import.meta.url)), '..');
const FILES = ['dist/shiki.js', 'dist/shiki.d.ts'];
const MARK = 'Licensed under the Apache License, Version 2.0';
const HEADER = `/*
 * Copyright 2026 MARLINK TRADING SRL (YounndAI)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
`;

for (const rel of FILES) {
  const file = join(PKG, rel);
  const raw = readFileSync(file, 'utf8');
  if (raw.slice(0, 800).includes(MARK)) continue;
  const crlf = raw.includes('\r\n');
  const header = crlf ? HEADER.replace(/\n/g, '\r\n') : HEADER;
  writeFileSync(file, header + (crlf ? '\r\n' : '\n') + raw);
  console.log(`license banner: ${rel}`);
}
