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

import grammar from '../syntaxes/yon.tmLanguage.json' with { type: 'json' };

/**
 * YON language definition for Shiki.
 *
 * Usage with Shiki:
 * ```ts
 * import { createHighlighter } from 'shiki';
 * import { yonLanguage } from '@younndai/yon-textmate';
 *
 * const highlighter = await createHighlighter({
 *   themes: ['github-dark'],
 *   langs: [yonLanguage],
 * });
 *
 * const html = highlighter.codeToHtml(yonCode, { lang: 'yon', theme: 'github-dark' });
 * ```
 */
export const yonLanguage = {
  ...grammar,
  name: 'yon',
  aliases: ['YON', 'younndai'],
};

export default yonLanguage;
