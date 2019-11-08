import { useState } from 'react';

const useOnBack = () => {
  const router = useRouter();
  const onBack = () => {
    router.back();
  };
  return onBack;
};

export default useOnBack;
