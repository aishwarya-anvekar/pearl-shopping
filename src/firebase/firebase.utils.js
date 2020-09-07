import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { initializeApp } from 'firebase';

const config = {
  apiKey: "AIzaSyB1d__AYmxVPWQcNetNGqFnSqRKS8HlcAA",
  authDomain: "pearl-db-602c6.firebaseapp.com",
  databaseURL: "https://pearl-db-602c6.firebaseio.com",
  projectId: "pearl-db-602c6",
  storageBucket: "pearl-db-602c6.appspot.com",
  messagingSenderId: "754236542117",
  appId: "1:754236542117:web:176967903c94c5c2f7114c",
  measurementId: "G-P51E410TF2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
 if (!userAuth) return;

 const userRef = firestore.doc(`users/${userAuth.uid}`);
 const snapShot = await userRef.get();
 if(!snapShot.exists) {
   const { displaName, email } = userAuth;
   const createdAt = new Date();

   try {
     await userRef.set({
       displaName,
       email,
       createdAt,
       ...additionalData
     });

   } catch  (error) {
     console.log('error creating user', error.message);

   }

 }

 return userRef;
}
firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocref = collectionRef.doc();
    batch.set(newDocref, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  } , {} );
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;