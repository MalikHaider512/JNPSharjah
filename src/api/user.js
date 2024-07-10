import { mainUrl } from "../env";

export async function registerUser(data) {
  try {
    let response = await fetch(mainUrl + "auth/register", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "multipart/form-data", // This can usually be omitted for fetch to set it correctly
      },
    });
    let json = await response.json();
    console.log("Response", response);

    return json;
  } catch (error) {
    console.log("Error in Sign Up", error);
  }
}

export async function logInUser(email, password) {
  try {
    let response = await fetch(mainUrl + "auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    let json = await response.json();

    return json;
  } catch (error) {
    console.log("Error in Sign In", error);
  }
}

export async function deleteUser(id, password) {
  try {
    let response = await fetch(mainUrl + `user/deleteUserAndItems/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
      }),
    });

    let json = await response.json();

    return json;
  } catch (error) {
    console.log("User delete Error", error);
  }
}
