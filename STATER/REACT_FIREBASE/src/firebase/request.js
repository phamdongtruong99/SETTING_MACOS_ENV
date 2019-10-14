import firebase from 'firebase';

export async function getAllApi(collection, limit = 10) {
  return firebase
    .firestore()
    .collection(collection)
    .orderBy('title', 'desc')
    .limit(limit)
    .get();
}

export async function getDataByIdApi(collection, idCollection, subcollection) {
  return firebase
    .firestore()
    .collection(collection)
    .doc(idCollection)
    .collection(subcollection)
    .get();
}

export async function delApi(collection, id) {
  return firebase
    .firestore()
    .collection(collection)
    .doc(id)
    .delete();
}

export async function postApi(collection, id, update) {
  return firebase
    .firestore()
    .collection(collection)
    .add(data);
}

export async function putApi(collection, id, update) {
  return firebase
    .firestore()
    .collection(collection)
    .doc(id)
    .update(update);
}
