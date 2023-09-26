// store.js
import { writable } from 'svelte/store';

export const openWidget = writable(false);
export const messageLoader = writable(false);

