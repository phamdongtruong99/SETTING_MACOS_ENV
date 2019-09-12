import { useCallback, useMemo, useState } from 'react';

const useInput = initial => {
  const [value, setValue] = useState(initial);
  const onChange = useCallback(e => setValue(e.target.value), [setValue]);

  const clear = useCallback(() => setValue(''), [setValue]);
  return useMemo(
    () => ({
      value,
      setValue,
      hasValue: value !== undefined && value !== null && value.trim() !== '',
      clear,
      onChange,
      eventBind: {
        onChange,
        value
      },
      valueBind: {
        onChange: setValue,
        value
      }
    }),
    [clear, onChange, setValue, value]
  );
};

export default useInput;
