import { useState, useCallback } from 'react';

function useToggle(initialValue) {
  const [open, setOpen] = useState(initialValue);

  return [open, useCallback(() => setOpen(status => !status))];
}

export default useToggle;

// const [open, toggle] = useToggle(false);

// <Button onClick={toggle}>Show filters</Button>;
// {
//   open && <Filters />;
// }
