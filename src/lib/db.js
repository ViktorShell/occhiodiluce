import { writable } from 'svelte/store';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export const db = writable(null);
export const initDB = (app) => {
  db.update(() => getFirestore(app));
}

export const fetchNews = async (db) => {
  const querySnapshot = await getDocs(collection(db, "news"));
  let news = [];
  querySnapshot.forEach((doc) => {
    news.push({id: doc.id, data: doc.data()});
  })
  return news;
}