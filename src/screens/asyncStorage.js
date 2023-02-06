import AsyncStorage from "@react-native-async-storage/async-storage";
export async function StoreItem(key, value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    // console.log("Stored student into storage", jsonValue);
  } catch (e) {
    console.log("Couldn't store student into storage", e);
  }
}

export async function GetItem(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log("Couldn't get student from storage", e);
  }
}

export async function RemoveItem(key) {
  try {
    await AsyncStorage.removeItem(key);
    console.log("Removed value from storage");
  } catch (e) {
    // remove error
  }

  console.log("Done.");
}
