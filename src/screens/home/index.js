import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  RefreshControl,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import styles from "./styles";
import AppColors from "../../utils/AppColors";
import Images from "../../images";
import { EvilIcons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "../../routes/routes";
import { Menu, MenuDivider, MenuItem } from "react-native-material-menu";
import { getAds } from "../../api/ads";
import { ListView, ShimmerEffect } from "../../components";

export default function Home() {
  const navigation = useNavigation();

  const flatListRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Sort By");
  const [sortMenu, setSortMenu] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [ads, setAds] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [adCount, setAdCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const handleSearch = () => {
    console.log("Searching", search);
  };

  const handleFilter = () => {
    navigation.navigate(ScreenNames.FILTER);
  };

  const openSortMenu = () => {
    setSortMenu(true);
  };

  const closeSortMenu = () => {
    setSortMenu(false);
  };

  const sortLatest = () => {
    setAds(ads.sort((a, b) => (a?.createdAt < b?.createdAt ? 1 : -1)));
    setSortMenu(false);
    setSortBy("Latest");
  };

  const sortOldest = () => {
    setAds(ads.sort((a, b) => (a?.createdAt < b?.createdAt ? -1 : 1)));
    setSortMenu(false);
    setSortBy("Oldest");
  };

  const sortLowToHigh = () => {
    setAds(ads.sort((a, b) => (a?.price < b?.price ? -1 : 1)));
    setSortMenu(false);
    setSortBy("Low To High");
  };

  const sortHighToLow = () => {
    setAds(ads.sort((a, b) => (a?.price < b?.price ? 1 : -1)));
    setSortMenu(false);
    setSortBy("High To Low");
  };

  const sortZToA = () => {
    setAds(ads.sort((a, b) => (a?.title < b?.title ? 1 : -1)));
    setSortMenu(false);
    setSortBy("Z-A");
  };

  const sortAToZ = () => {
    setAds(ads.sort((a, b) => (a?.title < b?.title ? -1 : 1)));
    setSortMenu(false);
    setSortBy("A-Z");
  };

  const handleMoreAdsSorting = (list) => {
    if (sortBy === "Latest") {
      setAds(list.sort((a, b) => (a?.createdAt < b?.createdAt ? 1 : -1)));
    } else if (sortBy === "Oldest") {
      setAds(list.sort((a, b) => (a?.createdAt < b?.createdAt ? -1 : 1)));
    } else if (sortBy === "Low To High") {
      setAds(list.sort((a, b) => (a?.price < b?.price ? -1 : 1)));
    } else if (sortBy === "High To Low") {
      setAds(list.sort((a, b) => (a?.price < b?.price ? 1 : -1)));
    } else if (sortBy === "Z-A") {
      setAds(list.sort((a, b) => (a?.title < b?.title ? 1 : -1)));
    } else if (sortBy === "A-Z") {
      setAds(list.sort((a, b) => (a?.title < b?.title ? -1 : 1)));
    } else {
      setAds(list);
    }
  };

  const renderEmptyList = () => {
    return (
      <View>
        {/* Image, when no ad found */}
        {/* {route.params?.search ? (
          <View style={styles.noAdView}>
            <Image
              style={styles.noAdImage}
              resizeMode="contain"
              source={Images.NOTFOUND}
            />
            <Text style={styles.noAdtext}>
              We didn't find anything that matches your search
            </Text>
          </View>
        ) : ( */}
        <View style={styles.noAdView}>
          {/* Image, when no ads exist */}
          <Image
            style={styles.noAdImage}
            resizeMode="contain"
            source={Images.NOADS}
          />
          <Text style={styles.noAdtext}> No Ads</Text>
        </View>
        {/* )} */}
      </View>
    );
  };

  const fetchData = (pageNum) => {
    console.log("Fetching Data");
  };

  const handleEndReached = () => {
    // if (ads.length < adCount) {
    fetchData(pageNumber + 1);
    // setPageNumber(pageNumber + 1);
    // }
    // setLoadMore(false);
  };

  const onRefresh = () => {
    console.log("Refreshing");
    getAllAds();
  };

  const getAllAds = async () => {
    let res = await getAds();

    setAds(res);
    setLoading(false);
  };

  useEffect(() => {
    getAllAds();
  }, []);

  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <View style={styles.logoView}>
          <Image
            style={styles.jnpLogo}
            source={Images.JNPLOGO}
            resizeMode="contain"
          />
        </View>

        <View style={styles.headerView}>
          {/* Search Bar */}
          <TouchableOpacity style={styles.searchView}>
            <TextInput
              style={styles.searchInput}
              placeholder="What are you looking for"
              onChangeText={setSearch}
              onSubmitEditing={handleSearch}
              enterKeyHint="search"
            />

            <EvilIcons name="search" size={25} />
          </TouchableOpacity>

          {/* Filter Icon */}
          <TouchableOpacity style={styles.filterIcon} onPress={handleFilter}>
            <FontAwesome name="sliders" size={25} color={AppColors.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.resultView}>
          {/* Result Text */}
          <Text style={styles.resultText}>Showing {ads.length} Results</Text>

          <View style={styles.sortingView}>
            {/* Sorting Menu */}
            <Menu
              visible={sortMenu}
              onRequestClose={closeSortMenu}
              style={styles.menuStyle}
              anchor={
                <TouchableOpacity
                  style={styles.menuAnchorView}
                  onPress={openSortMenu}
                >
                  <Text style={styles.menuAnchorText}>{sortBy}</Text>
                  <MaterialIcons name="arrow-drop-down" size={16} />
                </TouchableOpacity>
              }
            >
              <MenuItem onPress={sortLatest}>Latest</MenuItem>
              <MenuDivider color={AppColors.gray} />
              <MenuItem onPress={sortOldest}>Oldest</MenuItem>
              <MenuDivider color={AppColors.gray} />
              <MenuItem onPress={sortHighToLow}>High To Low</MenuItem>
              <MenuDivider color={AppColors.gray} />

              <MenuItem onPress={sortLowToHigh}>Low To High</MenuItem>
              <MenuDivider color={AppColors.gray} />

              <MenuItem onPress={sortAToZ}>A-Z</MenuItem>
              <MenuDivider color={AppColors.gray} />
              <MenuItem onPress={sortZToA}>Z-A</MenuItem>
            </Menu>
          </View>
        </View>

        <FlatList
          key={"colum1"}
          data={loading ? Array.from({ length: 10 }) : ads}
          scrollEnabled={true} // Ensure scrolling is enabled
          renderItem={({ item, index }) =>
            loading ? <ShimmerEffect /> : <ListView item={item} />
          }
          keyExtractor={(item, index) => index}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.1} // Adjust threshold if needed
          ListEmptyComponent={renderEmptyList}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              colors={[AppColors.primary]}
              onRefresh={onRefresh}
            />
          }
          refreshing={true}
          ListFooterComponent={() =>
            loadMore || ads.length < adCount ? (
              <ActivityIndicator size={"large"} color={AppColors.primary} />
            ) : (
              <></>
            )
          }
        />
      </View>
    </ScreenWrapper>
  );
}
