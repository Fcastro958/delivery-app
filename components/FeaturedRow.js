import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestuarantCard from "./RestuarantCard";

const FeaturedRow = ({ id, title, description }) => {
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
