import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestuarantCard from "./RestuarantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {

  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityClient.fetch(
      `
      *[_type =="featured" && _id ==$id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
        type-> {
          name
        }
       },
      }[0]`,
      { id }
    )
    .then((data) => {setRestaurants(data.restaurants)});
  }, []);
console.log(restaurants);
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestuarantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Shushi"
          rating={4.5}
          genre="Japanese"
          address="1234 Main St"
          shortDescription="This Is a test description"
          dishes={[]}
          long={20}
          lat={0}
        ></RestuarantCard>

        <RestuarantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Shushi"
          rating={4.5}
          genre="Japanese"
          address="1234 Main St"
          shortDescription="This Is a test description"
          dishes={[]}
          long={20}
          lat={0}
        ></RestuarantCard>

        <RestuarantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Shushi"
          rating={4.5}
          genre="Japanese"
          address="1234 Main St"
          shortDescription="This Is a test description"
          dishes={[]}
          long={20}
          lat={0}
        ></RestuarantCard>

        <RestuarantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Shushi"
          rating={4.5}
          genre="Japanese"
          address="1234 Main St"
          shortDescription="This Is a test description"
          dishes={[]}
          long={20}
          lat={0}
        ></RestuarantCard>
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
