# React Chrome Boilerplate

A simple and quick way to get a React powered Chrome Extension up and running.

## What's included?

### Chrome Extension
- A `manifest.json` (v3).
- Placeholder extension icon.
- Configs for a default popup and options page.
- Service workers for backround scripts and content scripts are available
- Permission array. `storage` is provided by default.

### React App
- Two React apps. One for the Popup and another for the Options page.
- `Pages` directory to organize multi-page applications. This helpful for Extensions that may want to use `react-router-dom`
- `Components` directory for components organization.
- `CSS` directory that pull in Bootstrap and nicely organizes global styles and component specific styles.
- __COMING SOON__
  - AuthContent
  - Authentication related hooks

### Tooling
- Straight forward Webpack setup

### Authentication
- A Google Firebase (v9) config file is provided. Simply paste in your projects config block. All the required functionality is exported for you.
- AuthContext for global authentication state management (__coming soon__).
- Auth related hooks to easily sign users up, login them in and log them out (__coming soon__).

### Additional Packages
- Bootstrap
- Bootstrap Icons
- React Router Dom
