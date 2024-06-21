import { View, Text, FlatList, TouchableOpacity, Platform } from "react-native";
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
import { height, width } from "../../utils/Dimensions";

export default function Categories() {
  const navigation = useNavigation();
  const route = useRoute();

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchString, setSearchString] = useState(categories[0]);

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
        <View style={styles.categoryFlatListView}>
          <FlatList
            data={categories}
            showsVerticalScrollIndicator={false}
            // scrollEnabled={false}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    // style={{
                    //   paddingVertical: height(0.7),
                    //   width: width(33),
                    //   marginVertical: height(0.3),
                    // }}

                    style={{
                      ...styles.categoryView,
                      backgroundColor:
                        item == selectedCategory ? "#E5E8E8" : "white",
                      padding:
                        item == selectedCategory ? height(1) : height(0.3),
                    }}
                    onPress={() => handleCategoryPress(item)}
                  >
                    <Text style={styles.categoryText}>{item}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            numColumns={1}
            keyExtractor={(item, index) => index}
            // onRefresh={onRefresh}
            refreshing={refreshing}
          />
          <View style={styles.subCategoryFlatListView}>
            <FlatList
              data={subcategories[selectedCategory] || []}
              showsVerticalScrollIndicator={false}
              style={{ borderRadius: 5 }}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.subCategoryView}
                    onPress={() => {
                      handleSubCategoryPress(item);
                    }}
                  >
                    <Text style={styles.subCategoryText}>{item}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item, index) => index}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    backgroundColor: AppColors.greybackground,
                    height: 1,
                    width: width(70),
                  }}
                />
              )}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
