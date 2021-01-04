
export const hasPrefix = (action: AnyAction, prefix: string) =>
  action.type.startsWith(prefix);
export const isPending = (action: AnyAction) => action.type.endsWith("/pending");
export const isFulfilled = (action: AnyAction) => action.type.endsWith("/fulfilled");
export const isRejected = (action: AnyAction) => action.type.endsWith("/rejected");

export const isPendingAction = (prefix: string) => (
  action: AnyAction
): action is AnyAction => { // Note: this cast to AnyAction could also be `any` or whatever fits your case best
  return hasPrefix(action, prefix) && isPending(action);
};

export const isRejectedAction = (prefix: string) => (
  action: AnyAction
): action is AnyAction => { // Note: this cast to AnyAction could also be `any` or whatever fits your case best - like if you had standardized errors and used `rejectWithValue`
  return hasPrefix(action, prefix) && isRejected(action);
};

export const isFulfilledAction = (prefix: string) => (
  action: AnyAction
): action is AnyAction => {
  return hasPrefix(action, prefix) && isFulfilled(action);
};
