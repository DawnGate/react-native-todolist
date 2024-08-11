import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeDataLocal = async <T>(value: T, key: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error("Some error", e);
  }
};

export const getDataLocal = async <T>(key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (!jsonValue) return null;
    return JSON.parse(jsonValue) as T;
  } catch (e) {
    console.error("Some error", e);
  }
};

export const deleteDataLocalByKey = async (key: string) => {
  const isRemoved = await AsyncStorage.removeItem(key);
  return isRemoved;
};

export const updateDataLocalByKey = async <T>(value: T, key: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (e) {
    console.error("Some error", e);
  }
  return false;
};

export const getAllKeysLocal = async () => {
  const allKeys = await AsyncStorage.getAllKeys();
  return allKeys;
};

export const multiGetDataLocal = async <T>(keys: string[]) => {
  try {
    const data = await AsyncStorage.multiGet(keys);
    const returnData: T[] = [];
    data.forEach((item) => {
      const [key, value] = item;
      if (!value) {
        deleteDataLocalByKey(key);
      } else {
        returnData.push(JSON.parse(value));
      }
    });
    return returnData;
  } catch (e) {
    console.error("Some error", e);
  }
};
