import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Platform,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";
import styles from "./styles";
import { Bidding, Header, ItemDetails, Timer } from "../../components";
import { useRoute } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import { Image } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import Modal from "react-native-modal";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import {
  selectHighestBid,
  selectMyBid,
  selectTotalBids,
} from "../../redux/slices/bidding";
import { subString } from "../../utils/Methods";
import {
  CalendarDate,
  DateFormatter,
  parseDate,
  toCalendarDate,
} from "@internationalized/date";

export default function Details() {
  const route = useRoute();

  const highBid = useSelector(selectHighestBid);
  const totalBid = useSelector(selectTotalBids);
  const myBidAmount = useSelector(selectMyBid);

  const [item, setItem] = useState(route.params?.item);
  const [imageModal, setImageModal] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [seeMore, setSeeMore] = useState(false);

  console.log("Item", route.params.item?.bidDuration);

  const openImageModal = (index) => {
    setPreviewIndex(index ? index : 0);
    setImageModal(true);
  };

  const closeImageModal = () => {
    setImageModal(false);
  };

  const handleReadMoreLess = () => {
    setSeeMore(!seeMore);
  };

  const formatDates = () => {
    const bidDuration = route.params.item?.bidDuration;

    // Parse the JSON string
    const bidDurationObj = JSON.parse(bidDuration);

    // Extract start and end dates
    const startDateInfo = bidDurationObj.start;
    const endDateInfo = bidDurationObj.end;

    const startDate = new Date(
      startDateInfo.year,
      startDateInfo.month - 1,
      startDateInfo.day
    );
    const endDate = new Date(
      endDateInfo.year,
      endDateInfo.month - 1,
      endDateInfo.day
    );

    console.log("Formatted Start Date", startDate);
    console.log("Formatted End Date", endDate);
  };

  useEffect(() => {
    formatDates();
  }, []);
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <Header back={true} title="Description" />

        {/* Item Details */}
        <ScrollView
          style={styles.detailsParentView}
          showsVerticalScrollIndicator={false}
        >
          {/* Item Images or default image */}
          <View style={styles.swiperView}>
            <Swiper
              style={styles.swiperStyle}
              activeDotColor={AppColors.primary}
              automaticallyAdjustContentInsets={true}
            >
              {item?.images.length > 0 ? (
                // Item Images
                item?.images.map((image, index) => (
                  <Pressable
                    key={index}
                    onPress={() => {
                      openImageModal(index);
                    }}
                  >
                    <Image
                      source={{ uri: image }}
                      resizeMode="contain"
                      style={styles.imageStyle}
                    />
                  </Pressable>
                ))
              ) : (
                // Default Image
                <Image
                  source={{
                    uri: "https://imagedelivery.net/sVauOVD8CVXGq0TdeFsc0A/72a6faf4-e1e7-446a-a03c-de4c0be2e500/public",
                  }}
                  resizeMode="cover"
                  style={styles.imageStyle}
                />
              )}
            </Swiper>
          </View>

          {/* Title */}
          <Text style={styles.titleText} numberOfLines={1}>
            {item?.title}
          </Text>

          {/* ItemDetails */}
          <View style={styles.detailView}>
            <Text style={styles.detailText}>Details</Text>
            <ItemDetails details={item?.details} />
          </View>

          {/* Biding */}
          <View style={styles.detailView}>
            <Text style={styles.detailText}>Biding</Text>

            <Timer date={"2024-11-31"} />

            {/* Current Bid */}
            {/* {item.details && item.details?.sellerFrom && ( */}
            <View style={styles.gridView}>
              <Text style={styles.gridAttributeText}>Highest Bid</Text>
              <Text style={styles.gridText}>USD {highBid}</Text>
            </View>
            {/* // )} */}

            {/* Total Bids */}
            {/* {item.details && item.details?.sellerFrom && ( */}
            <View style={styles.gridView}>
              <Text style={styles.gridAttributeText}>Total Bids</Text>
              <Text style={styles.gridText}>{totalBid}</Text>
            </View>
            {/* // )} */}

            {/* Ypur Bids */}
            {/* {item.details && item.details?.sellerFrom && ( */}
            <View style={styles.gridView}>
              <Text style={styles.gridAttributeText}>Your Bid</Text>
              <Text style={styles.gridText}>USD {myBidAmount}</Text>
            </View>
            {/* // )} */}

            <Bidding item={item} />
          </View>

          {/* Item Description */}
          {item?.description && (
            <View style={styles.descriptionView}>
              <Text style={styles.descriptionTitleText}>Description</Text>
              {Platform.OS === "ios" ? (
                <TextInput
                  editable={false}
                  multiline
                  style={styles.descriptionText}
                >
                  {seeMore
                    ? `${item?.description}`
                    : subString(item?.description, 149)}
                </TextInput>
              ) : (
                <Text style={styles.descriptionText} selectable={true}>
                  {seeMore
                    ? `${item?.description}`
                    : subString(item?.description, 149)}
                </Text>
              )}

              {item?.description.length > 150 &&
                (seeMore ? (
                  <TouchableOpacity
                    style={styles.readMoreLessBtn}
                    onPress={handleReadMoreLess}
                  >
                    <Text>Read Less</Text>
                    <MaterialIcons name="keyboard-arrow-up" size={20} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.readMoreLessBtn}
                    onPress={handleReadMoreLess}
                  >
                    <Text>Read More</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={20} />
                  </TouchableOpacity>
                ))}
            </View>
          )}

          <Text style={styles.emptyText}></Text>
        </ScrollView>
      </View>

      <Modal
        isVisible={imageModal}
        animationIn="fadeInUpBig"
        animationInTiming={500}
        backdropColor={AppColors.black}
        backdropOpacity={1}
        onSwipeComplete={closeImageModal}
        swipeDirection="down"
      >
        <View style={styles.imageModalView}>
          <TouchableOpacity
            onPress={closeImageModal}
            style={styles.imageCloseIcon}
          >
            <MaterialIcons name="close" size={30} color={AppColors.white} />
          </TouchableOpacity>
          {item?.images.length > 0 ? (
            <View style={styles.selectedImageStyle}>
              <ImageViewer
                index={previewIndex}
                imageUrls={item?.images.map((image) => ({ url: image }))}
                enableSwipeDown={true}
                renderIndicator={() => null}
                onSwipeDown={closeImageModal}
                swipeDownThreshold={50}
                saveToLocalByLongPress={false}
              />
            </View>
          ) : (
            <Image
              source={{
                uri: "https://imagedelivery.net/sVauOVD8CVXGq0TdeFsc0A/7fe14579-8398-448f-97fe-1853d7be7200/public",
              }}
              style={styles.selectedImageStyle}
              resizeMode="contain"
            />
          )}
        </View>
      </Modal>
    </ScreenWrapper>
  );
}
