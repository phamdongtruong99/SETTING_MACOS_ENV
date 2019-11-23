export const isSeverSide = () => {
  return typeof window !== 'undefined';
};

export const isClientSide = () => {
  return typeof window === 'undefined';
};
