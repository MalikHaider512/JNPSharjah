// ShimmerPlaceholderWrapper.js
import React from "react";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

const ShimmerPlaceholderWrapper = (props) => (
  <ShimmerPlaceholder LinearGradient={LinearGradient} {...props} />
);

export default ShimmerPlaceholderWrapper;
