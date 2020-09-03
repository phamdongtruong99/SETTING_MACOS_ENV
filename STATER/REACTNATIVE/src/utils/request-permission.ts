import {PERMISSIONS, request, check, RESULTS} from 'react-native-permissions';

export async function requestCameraPermission() {
  const status = await request(
    Platform.select({
      android: PERMISSIONS.ANDROID.CAMERA,
      ios: PERMISSIONS.IOS.CAMERA,
    }),
  );
  return status;
}

export async function requestMediaPermission() {
  const statusRead = await request(
    Platform.select({
      android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      ios: PERMISSIONS.IOS.MEDIA_LIBRARY,
    }),
  );
  const statusWrite = await request(
    Platform.select({
      android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      ios: PERMISSIONS.IOS.MEDIA_LIBRARY,
    }),
  );
  return {statusRead, statusWrite};
}

export async function requestLocationPermission() {
  const status = await request(
    Platform.select({
      android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    }),
  );
  return status;
}
