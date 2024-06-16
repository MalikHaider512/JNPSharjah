// SkeletonLoader.js
import React from "react";
import { View, StyleSheet } from "react-native";
import styles from "./styles";
import ShimmerPlaceholderWrapper from "../shimmerPlaceholderWrapper";

const ShimmerEffect = ({ numColumns }) => {
  return (
    <View style={styles.listContainer}>
      {Array.from({ length: 10 }).map((_, index) => (
        <ShimmerPlaceholderWrapper key={index} style={styles.listShimmer} />
      ))}
    </View>
  );
};

export default ShimmerEffect;
