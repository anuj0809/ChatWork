// mountApp.js

import App from './App.svelte'; // Import your main Svelte app component

export function mountApp(target) {
  new App({
    target,
  });
}
