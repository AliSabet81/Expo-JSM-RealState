import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import icons from "@/constants/icons";

import Search from "@/components/Search";
import Filters from "@/components/Filters";
import NoResults from "@/components/NoResults";
import { Card, FeaturedCard } from "@/components/Cards";

import { useAppwrite } from "@/lib/useAppwrite";
import { useGlobalContext } from "@/lib/global-provider";
import images from "@/constants/images";

const Home = () => {
  const { user } = useGlobalContext();

  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const handleCardPress = (id: string) => router.push(`/properties/${id}`);

  return (
    <SafeAreaView className="h-full bg-white">
      <FlatList
        data={[1, 2, 3, 4]}
        numColumns={2}
        renderItem={({ item }) => (
          <Card
            item={{
              rate: "4.4",
              $id: item.toString(),
              $collectionId: "",
              $createdAt: "",
              $databaseId: "",
              $permissions: [""],
              $updatedAt: "",
              address: "22 W 15th St, New York",
              name: "Modern Apartment",
              price: "2,500",
              image: images.japan,
            }}
            onPress={() => handleCardPress(item.toString())}
          />
        )}
        keyExtractor={(item) => item.toString()}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<NoResults />}
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row">
                <Image
                  source={{ uri: user?.avatar }}
                  className="size-12 rounded-full"
                />

                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">
                    Good Morning
                  </Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    {user?.name}
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>

            <Search />

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={[1, 2, 3, 4]}
                renderItem={({ item }) => (
                  <FeaturedCard
                    item={{
                      rate: "4.4",
                      $id: item.toString(),
                      $collectionId: "",
                      $createdAt: "",
                      $databaseId: "",
                      $permissions: [""],
                      $updatedAt: "",
                      address: "22 W 15th St, New York",
                      name: "Modern Apartment",
                      price: "2,500",
                      image: images.japan,
                    }}
                    onPress={() => handleCardPress(item.toString())}
                  />
                )}
                bounces={false}
                keyExtractor={(item) => item.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="flex gap-5 mt-5"
              />
            </View>

            {/* <Button title="seed" onPress={seed} /> */}

            <View className="mt-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Our Recommendation
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              <Filters />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
