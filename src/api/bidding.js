import { mainUrl } from "../env";

export async function getSoloBids(itemId) {
  try {
    let response = await fetch(mainUrl + `soloBids/item/${itemId}`);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Error in Getting Bids", error);
  }
}

export async function postSoloBid(itemId, userId, amount) {
  try {
    const body = JSON.stringify({
      item_id: itemId,
      user_id: userId,
      amount: amount,
    });
    let response = await fetch(mainUrl + "soloBids/solo", {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    let json = await response.json();
    console.log("Response", json);

    return json;
  } catch (error) {
    console.log("Error in Sign Up", error);
  }
}

export async function getGroupBids(itemId) {
  try {
    let response = await fetch(mainUrl + `groupBids/item/${itemId}/groups`);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Error in Getting Bids", error);
  }
}

export async function createBiddingGroup(itemId, creatorId) {
  try {
    const body = JSON.stringify({
      item_id: itemId,
      creator_id: creatorId,
    });
    let response = await fetch(mainUrl + "groupBids/", {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    let json = await response.json();
    console.log("Response", response);

    return json;
  } catch (error) {
    console.log("Error in Sign Up", error);
  }
}

export async function joinBiddingGroup(groupId, userId, token) {
  try {
    const body = JSON.stringify({
      group_id: groupId,
      userId: userId,
      token: token,
    });
    let response = await fetch(mainUrl + "groupBids/join", {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    let json = await response.json();
    console.log("Response", json);

    return json;
  } catch (error) {
    console.log("Error in Sign Up", error);
  }
}

export async function contributeGroupBid(groupId, userId, amount) {
  try {
    const body = JSON.stringify({
      group_id: groupId,
      user_id: userId,
      amount: amount,
    });
    let response = await fetch(mainUrl + "groupBids/contribute", {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    let json = await response.json();
    console.log("Response", json);

    return json;
  } catch (error) {
    console.log("Error in Sign Up", error);
  }
}
