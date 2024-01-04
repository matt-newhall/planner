# Planning App

## Project Description

Cozy self-planner and calendar app with Google Calendar integration to manage
your life!

## Setup

- To install required modules, run:

```bash
pnpm i
```

- To start frontend, run:

```bash
pnpm run frontend
```

- To test the frontend unit tests, run:

```bash
pnpm run test-fe
```

## Installing Node Modules

- For app-specific modules, navigate to the relevant app and install the module,
  e.g:

```bash
cd apps/package_name
pnpm add module_name
```

- Uninstall modules, in the same manner
- To install modules globally (to be used by all packages), add the module in
  the root directory

## Expanding the ESLint configuration

This monorepo uses ESLint to enable type-aware linting rules.

- Update this configuration by editing `.eslintrc.cjs`

  - Replace `plugin:@typescript-eslint/recommended` to
    `plugin:@typescript-eslint/recommended-type-checked` or
    `plugin:@typescript-eslint/strict-type-checked`
  - Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
  - Install
    [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and
    add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends`
    list

## Updating Prettier configuration

Recommended Prettier settings are set in `.prettierrc`

- Update these as required
- _NOTE: Prettier recommends keeping the `printWidth` set to 80._
