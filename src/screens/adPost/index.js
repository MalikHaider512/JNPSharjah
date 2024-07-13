import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import styles from "./styles";
import AppColors from "../../utils/AppColors";
import {
  Button,
  CustomModal,
  Header,
  InputText,
  Loading,
  MultipleSelectionModal,
  PressableText,
  UploadImage,
} from "../../components";
import {
  conditions,
  countries,
  graphicMemory,
  manufacturers,
  processorGenerations,
  processors,
  ramSizes,
  screenSizes,
  screenTypes,
  storageSizes,
  storageTypes,
} from "../../utils/Data";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { parseDate } from "@internationalized/date";
import Modal from "react-native-modal";
import { editAd, editImages, postAd } from "../../api/ads";
import { useNavigation, useRoute } from "@react-navigation/native";
import ScreenNames from "../../routes/routes";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/user";

export default function AdPost() {
  const navigation = useNavigation();
  const route = useRoute();

  const user = useSelector(selectUser);

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState([]);
  const [title, setTitle] = useState("");
  const [noOfBoxes, setNoOfBoxes] = useState(0);
  const [itemPerBox, setItemPerBox] = useState(0);
  const [weightPerBox, setWeightPerBox] = useState(0);
  const [description, setDescription] = useState("");

  const [condition, setCondition] = useState("");
  const [conditionList, setConditionList] = useState([]);
  const [conditionModal, setConditionModal] = useState(false);

  const [manufactures, setManufactures] = useState("");
  const [manufacturesList, setManufacturesList] = useState([]);
  const [manufacturesModal, setManufacturesModal] = useState(false);

  const [screenType, setScreenType] = useState("");
  const [screenTypeList, setScreenTypeList] = useState([]);
  const [screenTypeModal, setScreenTypeModal] = useState(false);

  const [screenSize, setScreenSize] = useState("");
  const [screenSizeList, setScreenSizeList] = useState([]);
  const [screenSizeModal, setScreenSizeModal] = useState(false);

  const [processor, setProcessor] = useState("");
  const [processorList, setProcessorList] = useState([]);
  const [processorModal, setProcessorModal] = useState(false);

  const [processorGeneration, setProcessorGeneration] = useState("");
  const [processorGenerationList, setProcessorGenerationList] = useState([]);
  const [processorGenerationModal, setProcessorGenerationModal] =
    useState(false);

  const [graphicsMemory, setGraphicsMemory] = useState("");
  const [graphicsMemoryList, setGraphicsMemoryList] = useState([]);
  const [graphicsMemoryModal, setGraphicsMemoryModal] = useState(false);

  const [ramSize, setRamSize] = useState("");
  const [ramSizeList, setRamSizeList] = useState([]);
  const [ramSizeModal, setRamSizeModal] = useState(false);

  const [storageType, setStorageType] = useState("");
  const [storageTypeList, setStorageTypeList] = useState([]);
  const [storageTypeModal, setStorageTypeModal] = useState(false);

  const [storageSize, setStorageSize] = useState("");
  const [storageSizeList, setStorageSizeList] = useState([]);
  const [storageSizeModal, setStorageSizeModal] = useState(false);

  const [startingPrice, setStartingPrice] = useState(0);
  const [targetPrice, setTargetPrice] = useState(0);

  const [dileveryFrom, setDileveryFrom] = useState("");
  const [dileveryTo, setDileveryTo] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [countryModal, setCountryModal] = useState(false);
  const [dileveryToModal, setDileveryToModal] = useState(false);

  const [startingDate, setStartingDate] = useState(new Date());
  const [endingDate, setEndingDate] = useState(new Date());
  const [startingDatePickerModal, setStartingDatePickerModal] = useState(false);
  const [endingatePickerModal, setEndingDatePickerModal] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);

  const openConditionModal = () => {
    setConditionModal(true);
  };

  const closeConditionModal = () => {
    setConditionModal(false);
  };

  const openManufacturesModal = () => {
    setManufacturesModal(true);
  };

  const closeManufacturesModal = () => {
    setManufacturesModal(false);
  };

  const openScreenTypesModal = () => {
    setScreenTypeModal(true);
  };

  const closeScreenTypesModal = () => {
    setScreenTypeModal(false);
  };

  const openScreenSizeModal = () => {
    setScreenSizeModal(true);
  };

  const closeScreenSizeModal = () => {
    setScreenSizeModal(false);
  };

  const openProcessorModal = () => {
    setProcessorModal(true);
  };

  const closeProcessorModal = () => {
    setProcessorModal(false);
  };

  const openProcessorGenerationModal = () => {
    setProcessorGenerationModal(true);
  };

  const closeProcessorGenerationModal = () => {
    setProcessorGenerationModal(false);
  };

  const openGraphicMemoryModal = () => {
    setGraphicsMemoryModal(true);
  };

  const closeGraphicMemoryModal = () => {
    setGraphicsMemoryModal(false);
  };

  const openRamSizeModal = () => {
    setRamSizeModal(true);
  };

  const closeRamSizeModal = () => {
    setRamSizeModal(false);
  };

  const openStorageTypeModal = () => {
    setStorageTypeModal(true);
  };

  const closeStorageTypeModal = () => {
    setStorageTypeModal(false);
  };

  const openStorageSizeModal = () => {
    setStorageSizeModal(true);
  };

  const closeStorageSizeModal = () => {
    setStorageSizeModal(false);
  };

  const openCountryModal = () => {
    setCountryModal(true);
  };

  const closeCountryModal = () => {
    setCountryModal(false);
  };

  const openDileveryToModal = () => {
    setDileveryToModal(true);
  };

  const closeDileveryToModal = () => {
    setDileveryToModal(false);
  };

  const openStartingDatePickerModal = () => {
    setStartingDatePickerModal(true);
  };

  const closeStartingDatePickerModal = () => {
    setStartingDatePickerModal(false);
  };

  const handleStartDateConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setStartingDate(date);
    closeStartingDatePickerModal();
  };

  const openEndingDatePickerModal = () => {
    setEndingDatePickerModal(true);
  };

  const closeEndingDatePickerModal = () => {
    setEndingDatePickerModal(false);
  };

  const handlEndDateConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setEndingDate(date);
    closeEndingDatePickerModal();
  };

  const formatDileveryTo = (dileveryToo) => {
    if (dileveryToo.length === 0) {
      return "";
    } else if (dileveryToo.length === 1) {
      return dileveryToo[0];
    } else if (dileveryToo.length === 2) {
      return `${dileveryToo[0]}  ${dileveryToo[1]}`;
    } else {
      return `${dileveryToo[0]}  ${dileveryToo[1]}  +${
        dileveryToo.length - 2
      } More Countries`;
    }
  };

  // console.log("Title", title);
  // console.log("No. of Boxes", noOfBoxes);
  // console.log("Item Per Box", itemPerBox);
  // console.log("Weight Per Box", weightPerBox);
  // console.log("manufacturer", manufactures);
  // console.log("Screen Type", screenType);
  // console.log("Screen Size", screenSize);
  // console.log("Processor", processor);
  // console.log("Processor Generation", processorGeneration);
  // console.log("Graphic Memory", graphicsMemory);
  // console.log("Ram Size", ramSize);
  // console.log("Storage Type", storageType);
  // console.log("Storage Size", storageSize);
  // console.log("Starting Price", startingPrice);
  // console.log("Target Price", targetPrice);
  // console.log("Dilevery From", dileveryFrom);
  // console.log("Dilevery To", dileveryTo);
  // console.log("Description", description);

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // returns "YYYY-MM-DD"
  }

  const handleEditAd = async (details) => {
    let updatedImage = [];
    if (images.length > 0) {
      var formdata = new FormData();

      images.forEach((img, index) => {
        formdata.append("image", {
          name: `imag${index}`,
          type: "image/jpeg", // Adjust the type if needed
          uri: img,
        });
      });

      let imgRes = await editImages(formdata);
      console.log("Edit Images Response", imgRes);
      updatedImage = imgRes.imageUrls;
    }

    const updatedData = {
      title,
      description,
      details: details,
      price,
      startingPrice: startingPrice,
      targetPrice: targetPrice,
      bidDuration: JSON.stringify({
        start: parseDate(formatDate(startingDate)),
        end: parseDate(formatDate(endingDate)),
      }),

      image: updatedImage,
    };

    console.log("Edited Data", updatedData);

    try {
      let res = await editAd(route.params.data?._id, updatedData);
      console.log("Edit Ad Response", res);

      if (res?.message === "Item successfully updated") {
        successMessage("Edit Ad", "Your ad has been edited successfully");
        dispatch(setSelectedLocation());
        setImages([]);
        navigation.navigate(ScreenNames.MYADS);
      } else {
        // setLoadingModal(false);
        errorMessage("Edit Ad", "Oops! Something went wrong");
      }

      setLoading(false);
    } catch (error) {
      // setLoadingModal(false);
      errorMessage("Edit Ad", "Oops! Something went wrong");
    }
  };

  const handleAdPost = async (details) => {
    var formdata = new FormData();
    formdata.append("addedBy", user?._id);
    formdata.append("title", title.trim());
    formdata.append(
      "category",
      route.params?.category ? route.params?.category : ""
    );
    formdata.append(
      "sub_category",
      route.params?.subCategory ? route.params?.subCategory : ""
    );
    formdata.append("description", description ? description : "");
    formdata.append("startingPrice", startingPrice);
    formdata.append("targetPrice", targetPrice);
    formdata.append("details", JSON.stringify(details));

    formdata.append(
      "bidDuration",
      JSON.stringify({
        start: parseDate(formatDate(startingDate)),
        end: parseDate(formatDate(endingDate)),
      })
    );
    images.forEach((img, index) => {
      formdata.append("image", {
        name: `imag${index}`,
        type: "image/jpeg", // Adjust the type if needed
        uri: img,
      });
    });

    console.log("Form Data", formdata?.image);

    try {
      let res = await postAd(formdata);

      console.log("Ad Response", res);
      setLoadingModal(false);

      navigation.navigate(ScreenNames.HOME);
    } catch (error) {
      console.log("Ad Post", error);
    }
  };

  const handleSubmit = async () => {
    setLoadingModal(true);

    console.log("Handle Submit");
    console.log("Images", images);

    const details = {
      condition: condition,
      deliveryTo: dileveryTo,
      graphicsMemory: graphicsMemory,
      itemsPerBox: itemPerBox,
      manufacturer: manufactures,
      numberOfBoxes: noOfBoxes,
      processor: processor,
      processorGeneration: processorGeneration,
      ramSize: ramSize,
      screenSize: screenSize,
      screenType: screenType,
      sellerFrom: dileveryFrom,
      storageSize: storageSize,
      storageType: storageType,
      wantTo: route.params?.tradeOption,
      weightPerBox: weightPerBox,
    };

    if (route.params?.edit) {
      console.log("Editing....");
      handleEditAd(details);
    } else {
      handleAdPost(details);
    }

    setLoading(false);
  };

  const setAttributesValue = () => {
    console.log("Setting Attributes");
    setLoading(true);
    const data = route.params?.data;
    console.log("Data:", data);
    setTitle(data?.title);
    setNoOfBoxes(data.details?.numberOfBoxes);
    setItemPerBox(data.details?.itemsPerBox);
    setWeightPerBox(data.details?.weightPerBox);
    setStartingPrice(data.details?.startingPrice);
    setTargetPrice(data.details?.targetPrice);
    setManufactures(data.details?.manufacturer);
    setScreenType(data.details?.screenType);
    setScreenSize(data.details?.screenSize);
    setProcessor(data.details?.processor);
    setProcessorGeneration(data.details?.processorGeneration);
    setGraphicsMemory(data.details?.graphicsMemory);
    setRamSize(data.details?.ramSize);
    setStorageType(data.details?.storageType);
    setStorageSize(data.details?.storageSize);
    setDileveryFrom(data.details?.sellerFrom);
    setDileveryTo(
      data.details?.deliveryTo.length > 0 ? data.details?.deliveryTo : []
    );
    // setStartingDate();
    // setEndingDate();
    setDescription(data?.description);
    setImages(data?.image ? data?.image : []);
    setLoading(false);
  };

  const getData = async () => {
    setConditionList(conditions);
    setManufacturesList(manufacturers);
    setCountryList(countries);
    setScreenTypeList(screenTypes);
    setScreenSizeList(screenSizes);
    setProcessorList(processors);
    setProcessorGenerationList(processorGenerations);
    setGraphicsMemoryList(graphicMemory);
    setRamSizeList(ramSizes);
    setStorageTypeList(storageTypes);
    setStorageSizeList(storageSizes);

    setLoading(false);
  };

  useEffect(() => {
    getData();
  });

  useEffect(() => {
    if (route.params?.edit) {
      setAttributesValue();
    }
  }, []);

  const checkDate = () => {
    const options = {
      year: "numeric", // Output format for year (numeric)
      month: "2-digit", // Output format for month (01 to 12)
      day: "2-digit", // Output format for day (01 to 31)
      separator: "-", // Separator between date parts
    };
    console.log("Date", startingDate.toLocaleDateString());
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.parentView}>
          {/* Header */}
          <Header back={true} title="Post an Ad" />

          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            {/* Upload Images */}
            <UploadImage list={images} setList={setImages} />

            {/* Title */}
            <InputText
              label="Title"
              placeholder="Enter Title"
              value={title}
              setState={setTitle}
              inputStyles={styles.inputStyle}
              viewStyle={styles.inputView}
            />

            {/* No Of Boxes */}
            <InputText
              label="No.of Boxes"
              placeholder="Enter no. of boxes"
              value={noOfBoxes}
              keyType="number-pad"
              setState={setNoOfBoxes}
              inputStyles={styles.inputStyle}
              viewStyle={styles.inputView}
            />

            {/* Item Per Boxes */}
            <InputText
              label="Item/Box"
              placeholder="Enter item per box"
              value={itemPerBox}
              keyType="number-pad"
              setState={setItemPerBox}
              inputStyles={styles.inputStyle}
              viewStyle={styles.inputView}
            />

            {/* Weight Per Box */}
            <InputText
              label="Weight (lb)/Box"
              placeholder="Enter weight per box"
              value={weightPerBox}
              keyType="number-pad"
              setState={setWeightPerBox}
              inputStyles={styles.inputStyle}
              viewStyle={styles.inputView}
            />

            {/* Starting Price */}
            <InputText
              label="Starting Price"
              placeholder="Enter Starting Price"
              value={startingPrice}
              keyType="number-pad"
              setState={setStartingPrice}
              inputStyles={styles.inputStyle}
              viewStyle={styles.inputView}
            />

            {/* Target  Price */}
            <InputText
              label="Target Price"
              placeholder="Enter Target Price"
              value={targetPrice}
              keyType="number-pad"
              setState={setTargetPrice}
              inputStyles={styles.inputStyle}
              viewStyle={styles.inputView}
            />

            {/* Condition */}
            <PressableText
              title="Condition"
              value={condition ? condition : "Choose"}
              press={openConditionModal}
            />

            {/* Manufactures */}
            <PressableText
              title="Manufactures"
              value={manufactures ? manufactures : "Choose"}
              press={openManufacturesModal}
            />

            {/* Screen Type */}
            <PressableText
              title="Screen Type"
              value={screenType ? screenType : "Choose"}
              press={openScreenTypesModal}
            />

            {/* Screen Size */}
            <PressableText
              title="Screen Size"
              value={screenSize ? screenSize : "Choose"}
              press={openScreenSizeModal}
            />

            {/* Processor */}
            <PressableText
              title="Processor"
              value={processor ? processor : "Choose"}
              press={openProcessorModal}
            />

            {/* Processor Generation */}
            <PressableText
              title="Processr Generation"
              value={processorGeneration ? processorGeneration : "Choose"}
              press={openProcessorGenerationModal}
            />

            {/* Graphic Memory */}
            <PressableText
              title="Graphic Memory"
              value={graphicsMemory ? graphicsMemory : "Choose"}
              press={openGraphicMemoryModal}
            />

            {/* RAM Size */}
            <PressableText
              title="Ram Size"
              value={ramSize ? ramSize : "Choose"}
              press={openRamSizeModal}
            />

            {/* Storage Type */}
            <PressableText
              title="Storage Type "
              value={storageType ? storageType : "Choose"}
              press={openStorageTypeModal}
            />

            {/* Storage Size */}
            <PressableText
              title="Storage Size "
              value={storageSize ? storageSize : "Choose"}
              press={openStorageSizeModal}
            />

            {/* Dilevery From */}
            <PressableText
              title="From"
              value={dileveryFrom ? dileveryFrom : "Choose"}
              press={openCountryModal}
            />

            {/* Dilevery To */}
            <PressableText
              title="Dilevery To"
              value={
                dileveryTo.length > 0 ? formatDileveryTo(dileveryTo) : "Choose"
              }
              press={openDileveryToModal}
            />

            {/* Starting Date */}
            <PressableText
              title="Starting Date "
              value={
                startingDate ? startingDate.toLocaleDateString() : "Choose"
              }
              press={openStartingDatePickerModal}
            />

            {/* Ending  Date */}
            <PressableText
              title="Ending Date "
              value={endingDate ? endingDate.toLocaleDateString() : "Choose"}
              press={openEndingDatePickerModal}
            />

            {/* Description */}
            <InputText
              label="Decsription"
              placeholder="Enter Decsription"
              setState={setDescription}
              multiline={true}
              inputStyles={styles.descriptionInput}
              viewStyle={styles.inputView}
            />

            {/* Submit Button */}
            <Button title="Submit" press={handleSubmit} />
          </KeyboardAwareScrollView>
        </View>
      )}

      {/* Condition Modal */}
      <CustomModal
        isVisible={conditionModal}
        closeModal={closeConditionModal}
        title="Condition"
        viewStyle={styles.modalStyle}
        data={conditionList}
        setValue={setCondition}
        setModalState={setConditionModal}
      />

      {/* Manufacture Modal */}
      <CustomModal
        isVisible={manufacturesModal}
        closeModal={closeManufacturesModal}
        title="Manufactures"
        viewStyle={styles.modalStyle}
        data={manufacturesList}
        setValue={setManufactures}
        setModalState={setManufacturesModal}
      />

      {/* Screen Type Modal */}
      <CustomModal
        isVisible={screenTypeModal}
        closeModal={closeScreenTypesModal}
        title="Screen Type"
        viewStyle={styles.modalStyle}
        data={screenTypeList}
        setValue={setScreenType}
        setModalState={setScreenTypeModal}
      />

      {/* Screen Size Modal */}
      <CustomModal
        isVisible={screenSizeModal}
        closeModal={closeScreenSizeModal}
        title="Screen Sizes"
        viewStyle={styles.modalStyle}
        data={screenSizeList}
        setValue={setScreenSize}
        setModalState={setScreenSizeModal}
      />

      {/* Processor Modal */}
      <CustomModal
        isVisible={processorModal}
        closeModal={closeProcessorModal}
        title="Processor"
        viewStyle={styles.modalStyle}
        data={processorList}
        setValue={setProcessor}
        setModalState={setProcessorModal}
      />

      {/* Processor Generation Modal */}
      <CustomModal
        isVisible={processorGenerationModal}
        closeModal={closeProcessorGenerationModal}
        title="Processor Generation"
        viewStyle={styles.modalStyle}
        data={processorGenerationList}
        setValue={setProcessorGeneration}
        setModalState={setProcessorGenerationModal}
      />

      {/* Graphic Memory Modal */}
      <CustomModal
        isVisible={graphicsMemoryModal}
        closeModal={closeGraphicMemoryModal}
        title="Graphics Memory"
        viewStyle={styles.modalStyle}
        data={graphicsMemoryList}
        setValue={setGraphicsMemory}
        setModalState={setGraphicsMemoryModal}
      />

      {/* RAM Size Modal */}
      <CustomModal
        isVisible={ramSizeModal}
        closeModal={closeRamSizeModal}
        title="RAM Sizes"
        viewStyle={styles.modalStyle}
        data={ramSizeList}
        setValue={setRamSize}
        setModalState={setRamSizeModal}
      />

      {/* Storage Type Modal */}
      <CustomModal
        isVisible={storageTypeModal}
        closeModal={closeStorageTypeModal}
        title="Storage Type"
        viewStyle={styles.modalStyle}
        data={storageTypeList}
        setValue={setStorageType}
        setModalState={setStorageTypeModal}
      />

      {/* Storage Size Modal */}
      <CustomModal
        isVisible={storageSizeModal}
        closeModal={closeStorageSizeModal}
        title="Storage Sizes"
        viewStyle={styles.modalStyle}
        data={storageSizeList}
        setValue={setStorageSize}
        setModalState={setStorageSizeModal}
      />

      {/* Dilevery From Modal */}
      <CustomModal
        isVisible={countryModal}
        closeModal={closeCountryModal}
        title="Dilevery From"
        viewStyle={styles.modalStyle}
        data={countryList}
        setValue={setDileveryFrom}
        setModalState={setCountryModal}
      />

      {/* Dilevery To Modal */}
      <MultipleSelectionModal
        isVisible={dileveryToModal}
        closeModal={closeDileveryToModal}
        title="Dilevery To"
        viewStyle={styles.modalStyle}
        data={countryList}
        setValue={setDileveryTo}
        setModalState={setDileveryToModal}
        list={dileveryTo}
      />

      {/* Starting Date Picker Modal */}
      <DateTimePickerModal
        isVisible={startingDatePickerModal}
        mode="date"
        onConfirm={handleStartDateConfirm}
        onCancel={closeStartingDatePickerModal}
      />

      {/* Ending Date Picker Modal */}
      <DateTimePickerModal
        isVisible={endingatePickerModal}
        mode="date"
        onConfirm={handlEndDateConfirm}
        onCancel={closeEndingDatePickerModal}
      />

      <Modal isVisible={loadingModal}>
        <Loading />
      </Modal>
    </ScreenWrapper>
  );
}
