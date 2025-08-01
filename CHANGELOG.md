# [3.5.0](https://github.com/CodetrixStudio/CapacitorGoogleAuth/compare/3.4.0-rc.4...3.5.0) (2025-07-09)

## What's Changed

- **BREAKING CHANGE**: Updated to Capacitor 7.4.1 support
- feat: Updated all dependencies to latest versions
- feat: Updated Android Gradle Plugin to 8.2.1
- feat: Updated Google Services to 4.4.2
- feat: Updated GoogleSignIn iOS SDK to 7.1.0
- feat: Updated TypeScript to 5.3.3 with strict configuration
- feat: Enhanced demo projects with Angular 17 and Ionic 8
- feat: Removed deprecated jcenter() repository
- feat: Added ESLint configuration for better code quality
- feat: Added Prettier configuration for consistent formatting
- feat: Updated iOS deployment target to 13.0
- fix: Updated testInstrumentationRunner to use AndroidX
- chore: Added format and lint scripts to package.json

**Full Changelog**: This is a major update to support the latest Capacitor 7 ecosystem

# [3.3.6](https://github.com/CodetrixStudio/CapacitorGoogleAuth/compare/3.3.5...3.3.6) (2023-11-26)

## What's Changed

- refactor: deprecate `displayName`, use `name` property (Android) by @itsLucario in https://github.com/CodetrixStudio/CapacitorGoogleAuth/pull/326
- chore: integrate docgen by @reslear in https://github.com/CodetrixStudio/CapacitorGoogleAuth/pull/327

**Full Changelog**: https://github.com/CodetrixStudio/CapacitorGoogleAuth/compare/3.3.5...3.3.6

# [3.3.5](https://github.com/CodetrixStudio/CapacitorGoogleAuth/compare/3.3.4...3.3.5) (2023-11-17)

## What's Changed

- Update README.md by @Martin-Eckleben in https://github.com/CodetrixStudio/CapacitorGoogleAuth/pull/323
- Bump ios GoogleSignIn to 6.2.4 (Allows requesting scopes during initial signIn) by @Endrzei in https://github.com/CodetrixStudio/CapacitorGoogleAuth/pull/321

# [3.3.4](https://github.com/CodetrixStudio/CapacitorGoogleAuth/compare/3.3.3...3.3.4) (2023-10-20)

## What's Changed

- Android refresh method by @CaolanCode in https://github.com/CodetrixStudio/CapacitorGoogleAuth/pull/314

# [3.3.3](https://github.com/CodetrixStudio/CapacitorGoogleAuth/compare/3.3.2...3.3.3) (2023-10-09)

## What's Changed

- Demo Ionic Angular by @razmans in https://github.com/CodetrixStudio/CapacitorGoogleAuth/pull/290
- Fix #272, #55 by @mirko77 in https://github.com/CodetrixStudio/CapacitorGoogleAuth/pull/288
- Port android test stubs to capacitor 5, and exclude them from npm package by @adamschoenemann in https://github.com/CodetrixStudio/CapacitorGoogleAuth/pull/307

# [3.3.2](https://github.com/CodetrixStudio/CapacitorGoogleAuth/compare/3.3.1...3.3.2) (2023-06-01)

## What's Changed

- Fix peerDependencies for capacitor migration tool by @KerimM in https://github.com/CodetrixStudio/CapacitorGoogleAuth/pull/285

# [3.3.1](https://github.com/CodetrixStudio/CapacitorGoogleAuth/compare/3.3.0...3.3.1) (2023-05-31)

## What's Changed

- fix plugin-migration-v4-to-v5​ by @KerimM in https://github.com/CodetrixStudio/CapacitorGoogleAuth/pull/284

# [3.3.0](https://github.com/CodetrixStudio/CapacitorGoogleAuth/compare/3.2.2...3.3.0) (2023-05-30)

### Features

- Upgrade to Capacitor 5 [@tponte](https://github.com/tponte) in https://github.com/CodetrixStudio/CapacitorGoogleAuth/pull/277

# [3.2.2](https://github.com/CodetrixStudio/CapacitorGoogleAuth/compare/3.2.1...3.2.2) (2023-01-27)

### Docs

- Update android plugin instructions by [@teaqu](https://github.com/teaqu) in https://github.com/CodetrixStudio/CapacitorGoogleAuth/pull/254

# [3.2.1](https://github.com/CodetrixStudio/CapacitorGoogleAuth/v3.2.0...v3.2.1) (2023-01-19)

### Fixes

- sign issue by update google sign dep [#251](https://github.com/CodetrixStudio/CapacitorGoogleAuth/pull/251) ([fc0142a](https://github.com/CodetrixStudio/CapacitorGoogleAuth/commit/fc0142a)) [@riderx](https://github.com/riderx)

# [3.2.0](https://github.com/CodetrixStudio/CapacitorGoogleAuth/v3.1.3...v3.2.0) (2022-08-15)

### Features

- Support Capacitor 4 [#218](https://github.com/CodetrixStudio/CapacitorGoogleAuth/pull/218) ([0a1f4ff](https://github.com/CodetrixStudio/CapacitorGoogleAuth/commit/0a1f4ff)) - **BREAKING CHANGE!**

### Docs

- Migration guide to capacitor 4 [#221](https://github.com/CodetrixStudio/CapacitorGoogleAuth/pull/221) ([1a79a88](https://github.com/CodetrixStudio/CapacitorGoogleAuth/commit/1a79a88))

# [3.1.4](https://github.com/CodetrixStudio/CapacitorGoogleAuth/v3.1.3...v3.1.4) (2022-06-10)

### Fixes

- **Web**: discontinuing authorization support for the Google Sign-In JavaScript Platform Library [#208](https://github.com/CodetrixStudio/CapacitorGoogleAuth/pull/208) ([c9fca36](https://github.com/CodetrixStudio/CapacitorGoogleAuth/commit/c9fca36)), from [#202](https://github.com/CodetrixStudio/CapacitorGoogleAuth/issues/202)

# [3.1.3](https://github.com/CodetrixStudio/CapacitorGoogleAuth/v3.1.0...v3.1.3) (2022-04-03)

### Features

- iOS: ios return user when restorePreviousSignIn() (#194) ([8b69e12](https://github.com/CodetrixStudio/CapacitorGoogleAuth/commit/8b69e12)), fixes #69
- Android: added accessToken to Android implementation (#173) ([0ed544c](https://github.com/CodetrixStudio/CapacitorGoogleAuth/commit/0ed544c)), closes #53
- Android: separate messages for signin exception (#176) ([96626ba](https://github.com/CodetrixStudio/CapacitorGoogleAuth/commit/96626ba))

### Docs

- fix initialize parameter keys (#193) ([e7bd54c](https://github.com/CodetrixStudio/CapacitorGoogleAuth/commit/e7bd54c))

# [3.1.0](https://github.com/CodetrixStudio/CapacitorGoogleAuth/v3.0.2...v3.1.0) (2021-07-30)

### Features

- supporting .ts and.js config, exported types (#114) ([eaabf9d](https://github.com/CodetrixStudio/CapacitorGoogleAuth/commit/eaabf9d))
- update ios to GoogleSignIn 6.0.1 Pod (#136) ([4859f9c](https://github.com/CodetrixStudio/CapacitorGoogleAuth/commit/4859f9c))
- add prettier with ionic config (#137) ([6a7dba5](https://github.com/CodetrixStudio/CapacitorGoogleAuth/commit/6a7dba5))
- request additional scopes if necessary (#146) ([21f16fd](https://github.com/CodetrixStudio/CapacitorGoogleAuth/commit/21f16fd)) resolves #144

### BREAKING CHANGES

- use `GoogleAuth.initialize()` method instead of `GoogleAuth.init()`
