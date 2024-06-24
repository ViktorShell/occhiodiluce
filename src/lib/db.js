import { writable } from 'svelte/store';
import { getFirestore } from 'firebase/firestore';

export const db = writable(null);
export const initDB = (app) => {
  db.update(() => getFirestore(app));
}