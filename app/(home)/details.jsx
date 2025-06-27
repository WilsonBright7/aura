import { SafeAreaView } from "react-native-safe-area-context";
import {
  Image,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import styles from "../styles";
import authStyle from "../(auth)/styles";
import COLORS from "../../constants/Colors";
import Button from "../../components/Button";
import { WebView } from "react-native-webview";

const Details = () => {
  const data = useLocalSearchParams();

  const movie = JSON.parse(data.film);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={{ uri: movie?.item?.primaryImage }}
          resizeMode="contain"
          style={{ width: "100%", height: 500 }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={[authStyle.home, { color: "white" }]}>
            {movie?.item?.originalTitle}
          </Text>

          <Text style={{ color: COLORS.primary, fontFamily: "PoppinsSemi" }}>
            {movie?.item?.averageRating}
          </Text>
        </View>

        <Text
          style={[
            authStyle.homeText,
            { color: "white", textAlign: "justify", letterSpacing: 0 },
          ]}
        >
          {movie?.item?.description}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Text style={[authStyle.home, { color: "white", fontSize: 18 }]}>
            Budget:
          </Text>

          <Text style={{ color: COLORS.primary, fontFamily: "PoppinsSemi" }}>
            ${movie?.item?.budget}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontFamily: "PoppinsRegular",
            }}
          >
            Content rating:
          </Text>

          <Text style={{ color: COLORS.primary, fontFamily: "PoppinsSemi" }}>
            {movie?.item?.contentRating}
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            width: "100%",
            height: 200,
            borderRadius: 20,
            overflow: "hidden",
            marginBottom: 30,
          }}
        >
          {movie?.item?.trailer? (
            <WebView
              source={{
                uri: movie?.item?.trailer.includes("watch?v=")
                  ? movie?.item?.trailer.replace("watch?v=", "embed/")
                  : movie?.item?.trailer,
              }}
              style={{ width: "100%", height: 200 }}
              allowsFullscreenVideo={true}
            />
          ) : (
            <Text style={{ color: COLORS.text }}>No trailer available.</Text>
          )}
        </View>

        <View style={{ marginBottom: 50 }}>
          <Button text={"Watch later"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
