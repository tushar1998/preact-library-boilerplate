## React Library Boilerplate

A typescript to quickly start development for your react sdk or library

### Features

- Boilerplate Essentials (eslint, prettier, husky, lint-staged, etc..)
- Conventional Commits / Changelog
- Testing with jest and testing library react
- Build files using rollup and typescript transpiler
- Auto versioning and publish using [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) ([standard-version](https://github.com/conventional-changelog/standard-version) fork)
- Support styling inside a shadow dom

### Branching

- next - developing experimental features and RnD branch
- beta - developing and testing stage for the next release
- master - stable version for library

### Versioning and Releasing

- Current Version -> v0.0.1-beta.0

  - Bump Version to v0.0.1

    ```zsh
    npm run release
    ```

  - Bump Version to v0.0.1-beta.1

    ```zsh
    npm run release -- --prelease beta
    ```

    ```zsh
    npm run release -- --prelease
    ```
