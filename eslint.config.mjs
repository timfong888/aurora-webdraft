import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Gitignored Vercel CLI build output (`vercel build` writes bundled/
    // minified JS here) — was missing from this override, so `vercel build`
    // followed by `npm run lint` picked up minified files as source.
    ".vercel/**",
  ]),
]);

export default eslintConfig;
