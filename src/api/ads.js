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
    let response = await fetch(mainUrl + `item/bidsby/${id}`);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Error in Getting Ads", error);
  }
}

export async function postAd(data) {
  console.log("Ad Post Api Calling", data);
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

export async function editAd(data) {
  console.log("Ad Post Api Calling", data);
  try {
    let response = await fetch(mainUrl + "item/add", {
      method: "PUT",
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

const refreshAd = async (itemid) => {
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

const deleteAd = async (id) => {
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

const muteAd = async (id) => {
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

const unMuteAd = async (id) => {
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
