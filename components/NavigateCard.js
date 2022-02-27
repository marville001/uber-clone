import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from "react-redux";

import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>
                Good Morning, Martin
            </Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where To?"
                        styles={toInputBoxStyles}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description,
                                })
                            );
                            navigation.navigate("RideOptionsCard")
                        }}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        enablePoweredByContainer={false}
                        query={{
                            key: GOOGLE_MAPS_KEY,
                            language: "en",
                        }}
                        debounce={400}
                        nearbyPlacesAPI="GooglePlacesSearch"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: "white",
        paddingTop: 20,
    },
    textInput: {
        fontSize: 14,
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});