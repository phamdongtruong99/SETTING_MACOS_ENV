import { StyleSheet, Image, Button, View, ActivitiIndicator } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import PropTypes from 'prop-types';

const UploadImage = ({uploadURL}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const selectImage = async () => {
    ImagePicker.showImagePicker({ noData: true, mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        Alert.alert("Error", "User cancelled image picker");
      } else if (response.error) {
        Alert.alert("Image picker error", response.error);
      } else if (response.customButton) {
        Alert.alert("User tapped custom button", response.customButton);        
      } else {
        uploadImage(response.uri);
      }
    })
  }
  const uploadImage = async (image_uri) => {
    setLoading(true);
    let uploadData = new FormData();
    uploadData.append('submit', 'ok');
    uploadData.append('file', { type: 'image/jpg', uri: image_uri });
    fetch(baseUrl, { method: 'post', body: uploadData })
      .then(response => response.json())
      .then(response => {
        if (response.status) {
          setLoading(false);
          setData(response.image);
        } else {
          setLoading(false);
          Alert.error('Error', response.message);
        }
      }).catch(() => {
        setLoading(false);
        Alert.error('Error', 'Error on network');
      })
  }
  return (
    <View style={styles.container}>
      {data && <Image source={data} style={{ width: '100%', height: '100%' }} />}
      {loading && <ActivitiIndicator />}
      <Button title="Select Image" onPress={selectImage} />
    </View>
  )
}

UploadImage.propTypes = {
  uploadURL: PropTypes.string.isRequired,
}

export default UploadImage;