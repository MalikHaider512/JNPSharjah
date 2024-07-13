import { View, Text, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { infoMessage } from "../../utils/Methods";
import { useFocusEffect } from "@react-navigation/native";
import { selectIsLogin, selectUser } from "../../redux/slices/user";
import {
  addFavorite,
  removeFavorite,
  selectFavoriteList,
} from "../../redux/slices/favorites";
import { addToFavorite, removeFromFavorite } from "../../api/favorites";

export default function Favorite({ item, iconColor }) {
  const dispatch = useDispatch();

  const isLogin = useSelector(selectIsLogin);
  const favorites = useSelector(selectFavoriteList);
  const user = useSelector(selectUser);

  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    const found = favorites?.includes(item?._id);
    if (!found) {
      dispatch(addFavorite(item._id));
      addToFavorite(user?._id, item._id);
    } else {
      dispatch(removeFavorite(item._id));
      removeFromFavorite(user?._id, item._id);
    }
    setFavorite(!found);
  };

  const handleError = () => {
    infoMessage("Authentication", "Login to ad favorite");
  };

  const checkFavorite = () => {
    setFavorite(favorites?.includes(item?._id));
  };

  useEffect(() => {
    checkFavorite();
  }, []);

  useEffect(() => {
    checkFavorite();
  }, [favorites, item]);

  return (
    <TouchableOpacity
      style={styles.parentView}
      onPress={isLogin ? handleFavorite : handleError}
    >
      <FontAwesome
        name={favorite ? "heart" : "heart-o"}
        style={{
          color: favorite
            ? AppColors.red
            : iconColor
            ? iconColor
            : AppColors.gray,
        }}
        size={20}
      />
    </TouchableOpacity>
  );
}
