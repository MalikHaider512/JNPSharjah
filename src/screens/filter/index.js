import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";
import {
  categories,
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
import styles from "./styles";
import {
  Button,
  CustomModal,
  Header,
  Loading,
  PressableText,
  SingleCheckBox,
} from "../../components";
import { ActivityIndicator } from "react-native-paper";

export default function Filter() {
  const [loading, setLoading] = useState(true);
  const [buyer, setBuyer] = useState(false);
  const [seller, setSeller] = useState(false);
  const [tradeType, setTradeType] = useState("");

  const [category, setCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [categoryModal, setCategoryModal] = useState(false);

  const [manufactures, setManufactures] = useState("");
  const [manufacturesList, setManufacturesList] = useState([]);
  const [manufacturesModal, setManufacturesModal] = useState(false);

  const [country, setCountry] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [countryModal, setCountryModal] = useState(false);

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

  const [loadingModal, setLoadingModal] = useState(false);

  const handleBuyer = () => {
    const newBuyer = !buyer;
    setBuyer(newBuyer);
    setSeller(false);
    setTradeType(newBuyer ? "Want to Buy" : "");
  };

  const handleSeller = () => {
    const newSeller = !seller;
    setBuyer(false);
    setSeller(newSeller);
    setTradeType(newSeller ? "Want to Sell" : "");
  };

  const openCategoryModal = () => {
    setCategoryModal(true);
  };

  const closeCategoryModal = () => {
    setCategoryModal(false);
  };

  const openManufacturesModal = () => {
    setManufacturesModal(true);
  };

  const closeManufacturesModal = () => {
    setManufacturesModal(false);
  };

  const openCountryModal = () => {
    setCountryModal(true);
  };

  const closeCountryModal = () => {
    setCountryModal(false);
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

  const handleSubmit = () => {
    setLoadingModal(true);
    console.log("Submit");
    console.log("Trade Type", tradeType);
    console.log("Category", category);
    console.log("manufacturer", manufactures);
    console.log("Country", country);
    console.log("Screen Type", screenType);
    console.log("Screen Size", screenSize);
    console.log("Processor", processor);
    console.log("Processor Generation", processorGeneration);
    console.log("Graphic Memory", graphicsMemory);
    console.log("Ram Size", ramSize);
    console.log("Storage Type", storageType);
    console.log("Storage Size", storageSize);

    setTimeout(() => {
      setLoadingModal(false);
    }, 5000);
  };

  const getData = async () => {
    setCategoryList(categories);
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

  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        {/* Header */}
        <Header title="Filter" back={true} />

        {loading ? (
          <Loading />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.attributeTitleText}>Trade Type</Text>
            <View style={styles.checkBoxView}>
              {/* Buyer */}
              <SingleCheckBox
                title="Want To Buy"
                state={buyer}
                press={handleBuyer}
              />

              {/* Seller */}
              <SingleCheckBox
                title="Want To Sell"
                state={seller}
                press={handleSeller}
              />
            </View>

            {/* Category */}
            <PressableText
              title="Category"
              value={category ? category : "Choose"}
              press={openCategoryModal}
            />

            {/* Manufactures */}
            <PressableText
              title="Manufactures"
              value={manufactures ? manufactures : "Choose"}
              press={openManufacturesModal}
            />

            {/* Countries */}
            <PressableText
              title="Country"
              value={country ? country : "Choose"}
              press={openCountryModal}
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

            <Button
              btnStyle={styles.submitBtn}
              title={loadingModal ? <ActivityIndicator /> : "Submit"}
              onPress={handleSubmit}
            />
          </ScrollView>
        )}
      </View>

      {/* Category Modal */}
      <CustomModal
        isVisible={categoryModal}
        closeModal={closeCategoryModal}
        title="Categories"
        viewStyle={styles.modalStyle}
        data={categoryList}
        setValue={setCategory}
        setModalState={setCategoryModal}
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

      {/* Country Modal */}
      <CustomModal
        isVisible={countryModal}
        closeModal={closeCountryModal}
        title="Countries"
        viewStyle={styles.modalStyle}
        data={countryList}
        setValue={setCountry}
        setModalState={setCountryModal}
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
    </ScreenWrapper>
  );
}
