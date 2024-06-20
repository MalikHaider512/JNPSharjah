import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";
import { BackIcon, Button, Header, InputText } from "../../components";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "../../routes/routes";
import * as DocumentPicker from "expo-document-picker";
import { removeEmptyProperties } from "../../utils/Methods";
import { registerUser } from "../../api/user";
import Images from "../../images";

export default function SignUp() {
  const navigation = useNavigation();

  const [credentials, setCredentials] = useState(true);
  const [fullName, setFullName] = useState("");
  const [fullNameGiven, setFullNameGiven] = useState(true);
  const [email, setEmail] = useState("");
  const [emailGiven, setEmailGiven] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordGiven, setPasswordGiven] = useState(true);

  const [continueAs, setContinueAs] = useState(false);
  const [continueAsGiven, setContinueAsGiven] = useState(true);
  const [registerAs, setRegisterAs] = useState("");
  const [describeBest, setDescribeBest] = useState([]);
  const [describeBestGiven, setDescribeBestGiven] = useState(true);

  const [buyer, setBuyer] = useState(false);
  const [seller, setSeller] = useState(false);
  const [dilevery, setDilevery] = useState(false);
  const [contact, setContact] = useState(false);
  const [mobile, setMobile] = useState("");
  const [mobileGiven, setMobileGiven] = useState(true);

  const [whatsApp, setWhatsApp] = useState("");
  const [whatsAppGiven, setWhatsAppGiven] = useState(true);

  const [landLine, setLandLine] = useState("");
  const [landLineGiven, setLandLineGiven] = useState(true);

  const [website, setWebsite] = useState("");
  const [websiteGiven, setWebSiteGiven] = useState(true);

  const [isAddress, setIsAddress] = useState(false);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [poBox, setPOBox] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [pdfUri, setPdfUri] = useState("");
  const [pdfName, setPdfName] = useState("");

  const [isDocument, setIsDocument] = useState(false);

  const checkingName = () => {
    if (fullName === "") {
      setFullNameGiven(false);
    } else {
      setFullNameGiven(true);
    }
  };

  const checkingEmail = () => {
    if (email === "") {
      setEmailGiven(false);
    } else {
      setEmailGiven(true);
    }
  };

  const checkingPassword = () => {
    if (password === "") {
      setPasswordGiven(false);
    } else {
      setPasswordGiven(true);
    }
  };

  const pickPdf = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
      });

      console.log("result", result);

      if (!result.canceled) {
        setPdfUri(result.assets[0]?.uri);
        setPdfName(result.assets[0]?.name);
        console.log("Uri", result.assets[0]?.uri);
      }
    } catch (error) {
      console.error("Error picking PDF: ", error);
    }
  };

  const handleCompany = () => {
    setRegisterAs("Company");
  };

  const handleIndividual = () => {
    setRegisterAs("Individual");
  };

  const handleBuyer = () => {
    const newBuyer = !buyer;
    setBuyer(newBuyer);
    if (newBuyer && !describeBest.includes("Buyer"))
      setDescribeBest([...describeBest, "Buyer"]);

    if (!newBuyer) {
      const filteredList = describeBest.filter((item) => item !== "Buyer");
      setDescribeBest(filteredList);
    }
  };

  const handleSeller = () => {
    const newSeller = !seller;
    setSeller(newSeller);
    if (newSeller && !describeBest.includes("Seller"))
      setDescribeBest([...describeBest, "Seller"]);

    if (!newSeller) {
      const filteredList = describeBest.filter((item) => item !== "Seller");
      setDescribeBest(filteredList);
    }
  };

  const handleDilevery = () => {
    const newDievery = !dilevery;
    setDilevery(newDievery);
    if (newDievery && !describeBest.includes("Dilevery")) {
      console.log("Setting Dievery");

      setDescribeBest([...describeBest, "Dilevery"]);
    }

    if (!newDievery) {
      const filteredList = describeBest.filter((item) => item !== "Dilevery");
      setDescribeBest(filteredList);
    }
  };

  const handleCredentialsNext = () => {
    console.log("Next");
    console.log("Full Name", fullName);
    console.log("Email", email);
    console.log("Password", password);

    if (fullName && email && password) {
      setCredentials(false);
      setContinueAs(true);
    } else {
      setFullNameGiven(fullName == "" ? false : true);
      setEmailGiven(email == "" ? false : true);
      setPasswordGiven(password == "" ? false : true);
    }
  };

  const handleContinueNext = () => {
    console.log("Register As", registerAs);
    console.log("Describe Best", describeBest);
    if (registerAs && describeBest) {
      setCredentials(false);
      setContinueAs(false);
      setContact(true);
    } else {
      setContinueAsGiven(registerAs == "" ? false : true);
      setDescribeBestGiven(describeBest.length === 0 ? false : true);
    }
  };

  const handleContactNext = () => {
    console.log("Contact Next");
    setCredentials(false);
    setContinueAs(false);
    setContact(false);
    setIsAddress(true);
  };

  const handleAddressNext = () => {
    console.log("Address Next");
    setCredentials(false);
    setContinueAs(false);
    setContact(false);
    setIsAddress(false);
    setIsDocument(true);
  };

  const handleSignIn = () => {
    console.log("Sign In");
    navigation.navigate(ScreenNames.SIGNIN);
  };

  const handleFinish = async () => {
    console.log("Finish");

    const attributes = {
      fullname: fullName,
      email: email,
      password: password,
      company: registerAs === "Company",
      category: describeBest,
      phoneNo: mobile,
      waNo: whatsApp,
      landline: landLine,
      website: website,
      address: address,
      city: city,
      pobox: poBox,
      province: province,
      country: country,
    };

    const data = removeEmptyProperties(attributes);

    var formData = new FormData();

    formData.append("fullname", fullName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("company", registerAs === "Company" ? "true" : "false");
    formData.append("category", describeBest.toString());
    formData.append("phoneNo", mobile);
    formData.append("waNo", whatsApp);
    formData.append("landline", landLine);
    formData.append("website", website);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("pobox", poBox);
    formData.append("province", province);
    formData.append("country", country);
    formData.append("file", {
      uri: pdfUri,
      name: pdfName,
      type: "application/pdf",
    });

    console.log("Form Data", formData);

    if (pdfUri) {
      let registerResponse = await registerUser(formData);
      console.log("Register Response", registerResponse);
    } else {
      console.log("Missing");
    }
  };

  return (
    <ScreenWrapper
      statusBarColor={AppColors.primary}
      barStyle="dark-content"
      scrollType="keyboard"
      scrollViewProps={{ showsVerticalScrollIndicator: false }}
    >
      <View style={styles.parentView}>
        <Header back={true} />

        {/* Logo */}
        <View style={styles.logoView}>
          {/* <Text style={styles.logoJNPText}>JNP </Text>
          <Text style={styles.logoSharjahText}>Sharjah</Text> */}

          <Image
            source={Images.JNPLOGO}
            style={styles.logoImageStyle}
            resizeMode="contain"
          />
        </View>

        {credentials && (
          <View>
            {/* Full Name */}
            <InputText
              label="Full Name"
              placeholder="John Doe"
              setState={setFullName}
              editingEnd={checkingName}
            />

            {/*Last Name Error Message */}
            {!fullNameGiven && !fullName && (
              <Text style={styles.errorText}>Required*</Text>
            )}

            {/* Email */}
            <InputText
              label="Email"
              placeholder="johndoe@something.com"
              setState={setEmail}
              editingEnd={checkingEmail}
              keyType="email-address"
              email={true}
            />

            {/*Email Error Message */}
            {!emailGiven && !email && (
              <Text style={styles.errorText}>Required*</Text>
            )}

            {/* Password */}
            <InputText
              label="Password"
              placeholder="*****"
              setState={setPassword}
              editingEnd={checkingPassword}
              password={true}
            />

            {/*Password Error Message */}
            {!passwordGiven && !password && (
              <Text style={styles.errorText}>Required*</Text>
            )}

            {/* Sign up Button */}
            <Button title="Next" press={handleCredentialsNext} />
          </View>
        )}

        {continueAs && (
          <View>
            <Text style={styles.continueAsText}>Continue As</Text>

            <View style={styles.companyBtnView}>
              <Button
                title="Company"
                btnStyle={{
                  ...styles.buttonStyle,
                  backgroundColor:
                    registerAs === "Company"
                      ? AppColors.primary
                      : AppColors.alto,
                }}
                textStyle={styles.btnText}
                press={handleCompany}
              />

              <Button
                title="Individual"
                btnStyle={{
                  ...styles.buttonStyle,
                  backgroundColor:
                    registerAs === "Individual"
                      ? AppColors.primary
                      : AppColors.alto,
                }}
                textStyle={styles.btnText}
                press={handleIndividual}
              />
            </View>

            {/*Coontinue As Error Message */}
            {!registerAs && !continueAsGiven && (
              <Text style={styles.errorText}>Required*</Text>
            )}

            <Text style={styles.describeYouText}>
              What Describes You The Best
            </Text>

            <View style={styles.companyBtnView}>
              <Button
                title="Buyer"
                btnStyle={{
                  ...styles.buttonStyle,
                  backgroundColor: buyer ? AppColors.primary : AppColors.alto,
                }}
                textStyle={styles.btnText}
                press={handleBuyer}
              />
              <Button
                title="Seller"
                btnStyle={{
                  ...styles.buttonStyle,
                  backgroundColor: seller ? AppColors.primary : AppColors.alto,
                }}
                textStyle={styles.btnText}
                press={handleSeller}
              />
            </View>

            <Button
              title="Dilevery Service Provider"
              btnStyle={{
                ...styles.deliverybtnStyle,
                backgroundColor: dilevery ? AppColors.primary : AppColors.alto,
              }}
              textStyle={styles.btnText}
              press={handleDilevery}
            />

            {/*Describe Best Error Message */}
            {describeBest.length === 0 && !describeBestGiven && (
              <Text style={styles.errorText}>Required*</Text>
            )}

            <Button title="Next" press={handleContinueNext} />
          </View>
        )}

        {contact && (
          <View>
            <Text style={styles.contactText}>Contact</Text>

            <InputText
              label="Mobile"
              placeholder="+XX XXX XXXXXX"
              setState={setMobile}
            />

            <InputText
              label="WhatsApp"
              placeholder="+XX XXX XXXXXX"
              setState={setWhatsApp}
            />

            <InputText
              label="LandLine"
              placeholder="+XX XXX XXXXXX"
              setState={setLandLine}
            />

            <InputText
              label="WebSite"
              placeholder="JohnDoe.com"
              setState={setWebsite}
            />

            <Button title="Next" press={handleContactNext} />
          </View>
        )}

        {isAddress && (
          <View>
            <Text style={styles.contactText}>Address</Text>

            <InputText
              label="Address"
              placeholder="JNP Computer Market"
              setState={setAddress}
            />

            <InputText label="City" placeholder="Sharjah" setState={setCity} />

            <InputText label="PO Box" placeholder="12345" setState={setPOBox} />

            <InputText
              label="Province"
              placeholder="Sharjah"
              setState={setProvince}
            />

            <InputText
              label="Country"
              placeholder="United Arab Emirates"
              setState={setProvince}
            />

            <Button title="Next" press={handleAddressNext} />
          </View>
        )}

        {isDocument && (
          <View>
            <Text style={styles.contactText}>Verification Document</Text>

            <View style={styles.chooseFileView}>
              <TouchableOpacity style={styles.choseFileTouch} onPress={pickPdf}>
                <Text style={styles.choseFileText}> Choose File</Text>
              </TouchableOpacity>
              <Text style={styles.uriText} numberOfLines={1}>
                {pdfName ? pdfName : "No file choosen"}
              </Text>
            </View>

            <Text style={styles.noteText}>
              Please add a PDF file containing the documents (i.e scanned
              images) you want to use for verification. The accepted documents
              are Trade license, ID card, Driving License, Electricity Bill,
              Tenency contract and passport etc
            </Text>

            <Button title="Finish" press={handleFinish} />
          </View>
        )}

        <View style={styles.accountView}>
          <Text style={styles.accountText}>Already have an account? </Text>
          <Text style={styles.signInText} onPress={handleSignIn}>
            Sign In!
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
}
