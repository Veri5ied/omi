import { Text, TextInput, View, StyleSheet } from "react-native";
import Button from "@/components/button";
import { useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Setup() {
  const [text, onChangeText] = useState<string>("");
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
            gap: 10,
            padding: 20,
          }}
        >
          <View style={{ maxWidth: 220, alignItems: "center", gap: 10 }}>
            <View
              style={{
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 32,
                }}
              >
                🤖
              </Text>
            </View>
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                textAlign: "center",
                fontWeight: "700",
                fontFamily: "Inter_700Black",
              }}
            >
              Let's train your clone! What's your X handle?
            </Text>
            <Text
              style={{
                color: "#e5e5e5",
                fontSize: 14,
                fontWeight: "600",
                fontFamily: "Inter_600Black",
              }}
            >
              We will pre-train your Omi clone based on your account's activity
            </Text>
          </View>
          <View
            style={{
              marginTop: 24,
              position: "relative",
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 20,
                left: 18,
              }}
            >
              <FontAwesome6 name="x-twitter" size={24} color="white" />
            </View>
            <TextInput
              onChangeText={onChangeText}
              style={styles.input}
              placeholder="@youmadeit"
              placeholderTextColor="gray"
            />
          </View>
        </View>
      </View>

      {/* Button container */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingBottom: 100,
          gap: 40,
        }}
      >
        <Button
          text="Next"
          variant="primary"
          onPress={() => console.log("Button pressed!")}
          type="link"
          linkUrl="/verification"
        />
        <Text
          style={{
            textAlign: "center",
            color: "#e5e5e5",
            fontSize: 14,
            fontWeight: "600",
            fontFamily: "Inter_600Black",
          }}
        >
          Clone from omi device
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 42,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 38,
    borderColor: "gray",
    minWidth: "100%",
    fontSize: 16,
    fontFamily: "Inter_500Black",
    fontWeight: "500",
    borderRadius: 6,
    color: "gray",
  },
});
