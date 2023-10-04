const setSession = (key: string, value: any) => {
  sessionStorage.setItem(key, value);
};

const getSession = (key: string) => {
  return sessionStorage.getItem(key);
};

const removeSession = (key: string) => {
  sessionStorage.removeItem(key);
};

const clearAllSession = () => {
  sessionStorage.clear();
};

export { setSession, getSession, removeSession, clearAllSession };
