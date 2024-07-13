import { mainUrl } from "../env";

export async function getAds() {
  try {
    let response = await fetch(mainUrl + "item/getAll");
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Error in Getting Ads", error);
  }
}

export async function getMyAds(id) {
  try {
    let response = await fetch(mainUrl + `item/bidsby/${id}`, {
      method: "GET",
      redirect: "follow",
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Error in Getting Ads", error);
  }
}

export async function postAd(data) {
  try {
    let response = await fetch(mainUrl + "item/add", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: data,
      redirect: "follow",
    });

    let json = await response.json();
    console.log("Response", json);
    return json;
  } catch (error) {
    console.log("Error in Ad Post", error);
  }
}

export const editImages = async (data) => {
  try {
    let response = await fetch(mainUrl + "image/upload", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: data,
      redirect: "follow",
    });
    let json = await response.json();

    return json;
  } catch (error) {
    console.log("Item editImages", error);
    return error;
  }
};

export const editAd = async (id, data) => {
  try {
    let response = await fetch(mainUrl + `item/update/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Item editItem", error);
  }
};

export const refreshAd = async (itemid) => {
  try {
    let response = await fetch(mainUrl + `item/refreshCreatedAt/${itemid}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Item refreshAd", error);
    return error;
  }
};

export const deleteAd = async (id) => {
  try {
    let response = await fetch(mainUrl + `item/delete/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    let json = await response.json();

    return json;
  } catch (error) {
    console.log("Item deleteItem", error);
  }
};

export const muteAd = async (id) => {
  try {
    let response = await fetch(mainUrl + `item/hide/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Item muteItem", error);
  }
};

export const unMuteAd = async (id) => {
  try {
    let response = await fetch(mainUrl + `item/unhide/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Item unMuteItem", error);
  }
};
