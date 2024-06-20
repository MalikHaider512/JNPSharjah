import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";
import styles from "./styles";
import { categories, subcategories } from "../../utils/Data";
import { Header } from "../../components";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import ScreenNames from "../../routes/routes";

export default function Categories() {
  const navigation = useNavigation();
  const route = useRoute();

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const handleSubCategoryPress = (subCategory) => {
    console.log("Trade Option", route.params?.tradeOption);
    console.log("Categories", selectedCategory);
    console.log("Sub Category", subCategory);

    navigation.navigate(ScreenNames.ADPOST, {
      tradeOption: route.params?.tradeOption,
      category: selectedCategory,
      subCategory: subCategory,
    });
  };

  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <Header back={true} defined={true} title="Ad Post" />
        <View style={styles.splitView}>
          <View style={styles.categoryListView}>
            {/* <Text style={styles.title}>Categories</Text> */}
            <FlatList
              data={categories}
              keyExtractor={(index) => index}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={{
                      ...styles.item,
                      backgroundColor:
                        selectedCategory === item
                          ? AppColors.primary
                          : AppColors.alto,
                    }}
                    onPress={() => handleCategoryPress(item)}
                  >
                    <Text style={styles.itemText}>{item}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <View style={styles.subCategoryListView}>
            {/* <Text style={styles.title}>Subcategories</Text> */}
            <FlatList
              data={subcategories[selectedCategory]}
              keyExtractor={(index) => index}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    handleSubCategoryPress(item);
                  }}
                >
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
