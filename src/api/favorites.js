import { mainUrl } from "../env";

const getFavorite = async (userid) => {
  try {
    let response = await fetch(mainUrl + `item/favorites/get/${userid}`);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const addToFavorite = async (userid, itemid) => {
  try {
    let response = await fetch(
      mainUrl + `item/favorites/add/${userid}/${itemid}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const removeFromFavorite = async (userid, itemid) => {
  try {
    let response = await fetch(
      mainUrl + `item/favorites/remove/${userid}/${itemid}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { getFavorite, addToFavorite, removeFromFavorite };
