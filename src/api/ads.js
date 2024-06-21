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
