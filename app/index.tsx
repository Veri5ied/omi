import { Text, View } from "react-native";
import Button from "@/components/button";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          "linear-gradient(to bottom, rgba(6, 4, 12, 1) 0%, rgba(7, 8, 20, 1) 100%)",
      }}
    >
      {/* Center content container */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            gap: 2,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 64,
              fontWeight: "700",
              fontFamily: "Inter_900Black",
            }}
          >
            omi
          </Text>
          <Text
            style={{
              color: "#e5e5e5",
              fontSize: 18,
              fontWeight: "600",
              fontFamily: "Inter_600Black",
            }}
          >
            scale yourself
          </Text>
        </View>
      </View>

      {/* Button container */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingBottom: 100,
        }}
      >
        <Button
          text="Get Started"
          variant="primary"
          type="link"
          linkUrl="/setup"
        />
      </View>
    </View>
  );
}
