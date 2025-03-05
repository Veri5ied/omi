import { Text, View, StyleSheet, Image } from "react-native";
import Button from "@/components/button";
import { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";

export default function Verification() {
  const [hide, setHidden] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);

  const handleHidden = () => {
    setTimeout(() => {
      setHidden(false);
    }, 2000);

    setTimeout(() => {
      setSuccess(true);
    }, 4000);
  };
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
        <View style={{ maxWidth: 220, alignItems: "center", gap: 10 }}>
          <View
            style={{
              marginBottom: 20,
            }}
          >
            {!success && (
              <MaterialCommunityIcons
                name="check-decagram"
                size={52}
                color="blue"
              />
            )}
            {success && (
              <MaterialIcons name="check-circle" size={52} color="#32CD32" />
            )}
          </View>
          {success ? (
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 24,
                  textAlign: "center",
                  fontWeight: "700",
                  fontFamily: "Inter_700Black",
                }}
              >
                Your Omi clone is verified and live!
              </Text>
            </View>
          ) : (
            <View style={{ gap: 10 }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 24,
                  textAlign: "center",
                  fontWeight: "700",
                  fontFamily: "Inter_700Black",
                }}
              >
                Let's prevent impersonation!
              </Text>
              <Text
                style={{
                  color: "#e5e5e5",
                  fontSize: 14,
                  textAlign: "center",
                  fontWeight: "600",
                  fontFamily: "Inter_600Black",
                }}
              >
                Please verify you're the owner of this account
              </Text>
            </View>
          )}
          <View
            style={{
              gap: "20",
              marginTop: 15,
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderWidth: 2,
                borderRadius: 100,
                borderColor: "gray",
                padding: 20,
              }}
            >
              <Image
                source={require("../../assets/images/favicon.png")}
                style={{ position: "relative" }}
              />
              {success && (
                <View
                  style={{
                    position: "absolute",
                    right: -35,
                    bottom: -20,
                  }}
                >
                  <Entypo name="dot-single" size={80} color="#32CD32" />
                </View>
              )}
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontSize: 20,
                  fontFamily: "Inter_600Black",
                  fontWeight: "600",
                }}
              >
                Alvin
              </Text>
              {success && (
                <MaterialCommunityIcons
                  name="check-decagram"
                  size={18}
                  color="blue"
                />
              )}
            </View>
          </View>
        </View>
      </View>

      {/* Button container */}
      {!success && (
        <View
          style={{
            paddingHorizontal: 20,
            paddingBottom: 100,
            gap: 40,
          }}
        >
          <Button
            text="Verify it's me"
            variant="primary"
            onPress={handleHidden}
            type="button"
          />
          {!hide && (
            <Text
              style={{
                textAlign: "center",
                color: "#e5e5e5",
                fontSize: 14,
                fontWeight: "600",
                fontFamily: "Inter_600Black",
              }}
            >
              Didn't post the tweet? click here
            </Text>
          )}
        </View>
      )}
      {success && (
        <View
          style={{
            paddingHorizontal: 20,
            paddingBottom: 100,
            gap: 40,
          }}
        >
          <Link
            href="/"
            style={{
              color: "#fff",
              textAlign: "center",
              padding: 10,
              borderWidth: 2,
              borderColor: "gray",
              borderRadius: 10,
              fontWeight: "600",
              fontFamily: "Inter_600Black",
              fontSize: 16,
              height: 48,
            }}
          >
            Start Chatting
          </Link>
          <Text
            style={{
              textAlign: "center",
              color: "#e5e5e5",
              fontSize: 14,
              fontWeight: "600",
              fontFamily: "Inter_600Black",
            }}
          >
            Share public link
          </Text>
        </View>
      )}
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
