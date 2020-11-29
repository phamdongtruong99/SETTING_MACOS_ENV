import {showMessage} from 'react-native-flash-message';

export const displayFlashMessage = (title: string, description: string, type: any) => {
  showMessage({
    message: title,
    description,
    type,
    autoHide: true,
  });
};
