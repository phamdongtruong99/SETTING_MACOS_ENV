import firebase from 'firebase';

export async function getAllApi(
  collection,
  limit = 10,
  orderBy,
  sort = 'desc',
) {
  return firebase
    .firestore()
    .collection(collection)
    .orderBy(orderBy, sort)
    .limit(limit)
    .get();
}

export async function getByIdApi(collection, idCollection, subcollection) {
  return firebase
    .firestore()
    .collection(collection)
    .doc(idCollection)
    .collection(subcollection)
    .get();
}

export async function deleteApi(collection, id) {
  return firebase
    .firestore()
    .collection(collection)
    .doc(id)
    .delete();
}

export async function postApi(collection, data, callback = () => {}) {
  return firebase
    .firestore()
    .collection(collection)
    .add(data)
    .then(callback);
}

export async function putApi(collection, id, update) {
  return firebase
    .firestore()
    .collection(collection)
    .doc(id)
    .update(update);
}
