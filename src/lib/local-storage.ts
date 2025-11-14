export const getLocalStorage = (itemKey: string) => {
  const stringifiedValue = localStorage.getItem(itemKey);

  if (!stringifiedValue) return null;

  return JSON.parse(stringifiedValue);
};

export const setLocalStorage = <TData>(itemKey: string, data: TData) =>
  localStorage.setItem(itemKey, JSON.stringify(data));

export const removeLocalStorage = (itemKey: string) => localStorage.removeItem(itemKey);
