import {showMessage} from 'react-native-flash-message';
import {Dimensions} from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const displayFlashMessage = (title: string, description: string, type: any) => {
  showMessage({
    message: title,
    description,
    type,
    autoHide: true,
  });
};
