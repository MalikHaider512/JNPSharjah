import { showMessage } from "react-native-flash-message";
import * as SecureStore from "expo-secure-store";

export function removeEmptyProperties(obj) {
  Object.keys(obj).forEach((key) => {
    if (obj[key] && typeof obj[key] === "object") {
      removeEmptyProperties(obj[key]);
    } else if (
      (obj.hasOwnProperty(key) && obj[key] === undefined) ||
      obj[key] === null ||
      obj[key] === "" ||
      obj[key] === "None" ||
      obj[key] === "Nište izabrali" ||
      obj[key] === "Niste izabrali" ||
      obj[key] === "Enter Mileage" ||
      obj[key] === "Unesite kilometražu" ||
      obj[key] === "Any" ||
      obj[key] === "Bilo koji" ||
      (typeof obj[key] === "object" && Object.keys(obj[key]).length === 0)
    ) {
      delete obj[key];
    }
  });

  return obj;
}

export function successMessage(message = "", description = "") {
  showMessage({
    message: message,
    description: description,
    type: "success",
    duration: 6000,
  });
}

export function errorMessage(message = "", description = "") {
  showMessage({
    message: message,
    description: description,
    type: "danger",
    duration: 6000,
  });
}

export function infoMessage(message = "", description = "") {
  showMessage({
    message: message,
    description: description,
    type: "info",
    duration: 6000,
  });
}

export async function saveCredentials(key, value) {
  try {
    await SecureStore.setItemAsync(key, value);
    console.log("Credentials saved successfully");
  } catch (error) {
    console.error("Error saving credentials", error);
  }
}

export async function getCredentialValueFor(key) {
  try {
    const result = await SecureStore.getItemAsync(key);
    return result?.toString();
  } catch (error) {
    console.error("Error retrieving credentials", error);
    return null;
  }
}

export const clearData = async (key) => {
  try {
    await SecureStore.deleteItemAsync(key);
    console.log("Data cleared successfully");
  } catch (error) {
    console.error("Error clearing data from Secure Store:", error);
  }
};

export function subString(text, length) {
  if (text) {
    if (text.length < length) {
      return text;
    } else {
      return text.substring(0, length - 1) + "...";
    }
  } else {
    return "";
  }
}
