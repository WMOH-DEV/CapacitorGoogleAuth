# Contributing to Capacitor Google Auth

Thank you for your interest in contributing to this project! This guide will help you get started.

## Development Setup

1. Fork and clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

## Code Quality

Before submitting a PR, please ensure your code follows our standards:

```bash
# Format code
npm run format

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## Testing Your Changes

### Test with the demo projects

1. Build the plugin:

   ```bash
   npm run build
   ```

2. Test with Angular demo:

   ```bash
   cd demo
   npm install
   npm start
   ```

3. Test with Ionic Angular demo:
   ```bash
   cd demo-ionic-angular
   npm install
   npm start
   ```

### Test on native platforms

1. Build the plugin and demo
2. Add platforms:

   ```bash
   cd demo-ionic-angular
   npx cap add ios
   npx cap add android
   ```

3. Sync and open:
   ```bash
   npx cap sync
   npx cap open ios
   npx cap open android
   ```

## Guidelines

- Follow the existing code style
- Add proper TypeScript types
- Update documentation when needed
- Test on both iOS and Android
- Keep changes focused and atomic
- Write clear commit messages

## Submitting Changes

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Update documentation if needed
5. Submit a pull request

## Questions?

Feel free to open an issue for any questions or discussions!
