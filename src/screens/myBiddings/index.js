import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";
import styles from "./styles";
import { Header, ListView, ShimmerEffect } from "../../components";
import { useNavigation } from "@react-navigation/native";
import Images from "../../images";
import { getAds } from "../../api/ads";
import { getMyBiddings } from "../../api/bidding";

export default function MyBiddings() {
  const navigation = useNavigation();

  const flatListRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [ads, setAds] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [adCount, setAdCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

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
    let res = await getMyBiddings();

    setAds(res);
    setLoading(false);
  };

  useEffect(() => {
    getAllAds();
  }, []);

  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        {/* Header */}
        <Header back={true} title="My Biddings" />

        {/* My Ads */}
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
