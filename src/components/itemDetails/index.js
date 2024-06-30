import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

export default function ItemDetails({ category, subCategory, details }) {
  console.log("Details", details);

  return (
    <View>
      {/* Category */}
      {category && (
        <View style={styles.gridView}>
          <Text style={styles.gridAttributeText}>Category</Text>
          <Text style={styles.gridText}>{category}</Text>
        </View>
      )}

      {/* Sub Category */}
      {subCategory && (
        <View style={styles.gridView}>
          <Text style={styles.gridAttributeText}>Category</Text>
          <Text style={styles.gridText}>{subCategory}</Text>
        </View>
      )}

      {/* Condition */}
      {details && details?.condition && (
        <View style={styles.gridView}>
          <Text style={styles.gridAttributeText}>Condition</Text>
          <Text style={styles.gridText}>{details?.condition}</Text>
        </View>
      )}

      {/* Manufacturer */}
      {details && details?.manufacturer && (
        <View style={styles.gridView}>
          <Text style={styles.gridAttributeText}>Manufacturer</Text>
          <Text style={styles.gridText}>{details?.manufacturer}</Text>
        </View>
      )}

      {/* Number Of Boxes */}
      {details && details?.numberOfBoxes && (
        <View style={styles.gridView}>
          <Text style={styles.gridAttributeText}>Number Of Boxes</Text>
          <Text style={styles.gridText}>{details?.numberOfBoxes}</Text>
        </View>
      )}

      {/* Item Per Box */}
      {details && details?.itemsPerBox && (
        <View style={styles.gridView}>
          <Text style={styles.gridAttributeText}>Item Per Box</Text>
          <Text style={styles.gridText}>{details?.itemsPerBox}</Text>
        </View>
      )}

      {/* Weight Per Box */}
      {details && details?.weightPerBox && (
        <View style={styles.gridView}>
          <Text style={styles.gridAttributeText}>Weight Per Box</Text>
          <Text style={styles.gridText}>{details?.weightPerBox}</Text>
        </View>
      )}

      {/* Screen Type */}
      {details && details?.screenType && (
        <View style={styles.gridView}>
          <Text style={styles.gridAttributeText}>Screen Type</Text>
          <Text style={styles.gridText}>{details?.screenType}</Text>
        </View>
      )}

      {/* Screen Size */}
      {details && details?.screenSize && (
        <View style={styles.gridView}>
          <Text style={styles.gridAttributeText}>Screen Size</Text>
          <Text style={styles.gridText}>{details?.screenSize}</Text>
        </View>
      )}

      {/* Processor */}
      {details && details?.processor && (
        <View style={styles.gridView}>
          <Text style={styles.gridAttributeText}>Processor</Text>
          <Text style={styles.gridText}>{details?.processor}</Text>
        </View>
      )}

      {/* Processor Generation */}
      {details && details?.processorGeneration && (
        <View style={styles.gridView}>
          <Text style={styles.gridAttributeText}>Processor Generation</Text>
          <Text style={styles.gridText}>{details?.processorGeneration}</Text>
        </View>
      )}

      {/* Graphics Memory */}
      {details && details?.graphicsMemory && (
        <View style={styles.gridView}>
          <Text style={styles.gridAttributeText}>Graphics Memory</Text>
          <Text style={styles.gridText}>{details?.graphicsMemory}</Text>
        </View>
      )}

      {/* RAM Size */}
      {details && details?.ramSize && (
        <View style={styles.gridView}>
          <Text style={styles.gridAttributeText}>RAM Size</Text>
          <Text style={styles.gridText}>{details?.ramSize}</Text>
        </View>
      )}

      {/* Storage Type */}
      {details && details?.storageType && (
        <View style={styles.gridView}>
          <Text style={styles.gridAttributeText}>Storage Type</Text>
          <Text style={styles.gridText}>{details?.storageType}</Text>
        </View>
      )}

      {/* Storage Size */}
      {details && details?.storageSize && (
        <View style={styles.gridView}>
          <Text style={styles.gridAttributeText}>Storage Size</Text>
          <Text style={styles.gridText}>{details?.storageSize}</Text>
        </View>
      )}

      {/* Seller From */}
      {details && details?.sellerFrom && (
        <View style={styles.gridView}>
          <Text style={styles.gridAttributeText}>Seller From</Text>
          <Text style={styles.gridText}>{details?.sellerFrom}</Text>
        </View>
      )}

      {/* Dilevery To */}
      {details && details?.deliveryTo && (
        <View style={styles.gridView}>
          <Text style={styles.gridAttributeText}>Delivery To</Text>
          {/* <Text style={styles.gridText}>{details?.deliveryTo}</Text> */}
          <View style={styles.countryView}>
            {details?.deliveryTo.map((item) => {
              return (
                <Text>
                  {item} {""}
                </Text>
              );
            })}
          </View>
        </View>
      )}
    </View>
  );
}
