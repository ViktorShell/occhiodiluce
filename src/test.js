import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

export const run = async (app, user_uid) => {
  const db = getFirestore(app);
 
  let date = Timestamp.now();
  let article = "Mario finto Nazi oppure Governatore della Cina";
  let text = "Palesemente un scimmia negra sporca di sburra alla banana";

  try {
    const docRef = await addDoc(collection(db, "news"), {
      user_uid: user_uid,
      date: date,
      article: article,
      text: text,
    });

    console.log(docRef.id);
  } catch(e){
    console.error(e);
  }

}