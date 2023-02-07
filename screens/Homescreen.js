import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/ Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useState(() => {
    sanityClient.fetch(
      `*[_type =="featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->
         }
        }`
    )
    .then((data) => {
      setFeaturedCategories(data);
    });
  }, []);

  console.log(featuredCategories);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">deliver now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants cuisines."
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      <ScrollView className="bg-gray-100" contentContainerStyle>
        {/* categories */}
        <Categories />
        {/* features */}

        <FeaturedRow
        id='123'
          title="Featured Restaurants"
          description="Top rated restaurants in your area"
        />

        <FeaturedRow
        id='1234'
          title="Tasty Discounts"
          description="Everyone's been enjoying these juciy discounts"
        />

        <FeaturedRow
        id='12345'
          title="Ofeers near you!"
          description="Why not support your local restaurants tonight?"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
