export const useStorage = () => {
  const set = (key: string, value: any) => {
    const data = JSON.stringify(value);
    window.localStorage.setItem(key, data);
  };
  const get = (key: string) => {
    const json = window.localStorage.getItem(key);
    if (json) {
      try {
        const storageData = JSON.parse(json);
        if (storageData) {
          return storageData;
        }
      } catch (error) {
        console.log(error);
      }
    }
    return null;
  };
  const remove = (key: string) => {
    window.localStorage.remove(key);
  };
  const clear = () => {
    window.localStorage.clear();
  };
  return {
    set,
    get,
    remove,
    clear
  };
};
const ss = useStorage();
export { ss };
