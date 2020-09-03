import { useState } from 'react'
import { Clipboard } from 'react-native';

type ClipboardTuple = [string, (clipboard: string) => void];

function useClippy(): ClipboardTuple {
  const [clipboard, setClipboard] = useState<string>('');
  const syncClipboard = (text: any) => {
    Clipboard.setString(text);
  };
  useEffect(() => {
    Clipboard.getString().then((val: string) => {
      setClipboard(val);
    });
  });
  return [clipboard, syncClipboard];
}

export default useClippy
