import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      "node_modules/*",
      "main.js",
      "example.ts",
      "eslint.config.mjs",
      "esbuild.config.mjs",
      "version-bump.mjs"
    ]
  },

  eslint.configs.all,
  ...tseslint.configs.all,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);