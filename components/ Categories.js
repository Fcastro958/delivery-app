import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

export default function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoriesCard
        imgUrl="https://links.papareact.com/wru"
        title="Testing 1"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/wru"
        title="Testing 2"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/wru"
        title="Testing 3"
      />
    </ScrollView>
  );
}
