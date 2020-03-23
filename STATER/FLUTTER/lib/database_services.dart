import 'package:cloud_firestore/cloud_firestore.dart';

class DatabaseServices {
  static CollectionReference productCollection =
      Firestore.instance.collection('products');

  static Future<void> createOrUpdateProduct(String id,
      {String name, int price}) async {
    await productCollection.document(id).setData({
      'name': name,
      'price': price,
    }, merge: true);
  }

  static Future<DocumentSnapshot> getProduct(String id) async {
    return productCollection.document(id).get();
  }

  static Future<void> deleteProduct(String id) async {
    return productCollection.document(id).delete();
  }
}
