import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Property = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  return (
    <View>
      <Text>Property {id}</Text>
    </View>
  );
};

export default Property;
