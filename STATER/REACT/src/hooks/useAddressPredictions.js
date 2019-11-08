import { useCallback, useEffect, useRef, useState } from 'react';
import debounce from 'utils/debounce';

const useAddressPredictions(input) {
  const [predictions, setPredictions] = useState([]);

  const autocomplete = useRef();

  if (!autocomplete.current) {
    autocomplete.current = new window.google.maps.places.AutocompleteService();
  }

  function getPlacePredictions(input) {
    autocomplete.current.getPlacePredictions({ input }, predictions => {
      setPredictions(predictions.map(prediction => prediction.description));
    });
  }

  const debouncedGetPlacePredictions = useCallback(
    debounce(getPlacePredictions, 500),
    [],
  );

  useEffect(() => {
    debouncedGetPlacePredictions(input);
  }, [input]);

  return predictions;
}

export default useAddressPredictions;
