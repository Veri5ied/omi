import { Link, LinkProps } from "expo-router";
import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  text: string | JSX.Element;
  variant?: "primary" | "secondary" | "default"; // Made optional with default value
  onPress?: () => void;
  type: "button" | "link";
  linkUrl?: string | LinkProps;
}

export default function Button({
  text,
  variant = "default",
  onPress,
  type = "button",
  linkUrl,
}: ButtonProps) {
  const styles = {
    primary: {
      backgroundColor: "#2B2B2C",
      color: "#FFFFFF",
    },
    secondary: {
      backgroundColor: "#FFFFFF",
      color: "#007AFF",
    },
    default: {
      backgroundColor: "#555555",
      color: "#FFFFFF",
    },
    link: {
      backgroundColor: "#2B2B2C",
      color: "#FFFFFF",
    },
  };

  const buttonStyle = styles[variant];

  const renderButton = () => {
    switch (type) {
      case "button":
        return (
          <TouchableOpacity
            onPress={onPress}
            style={{
              padding: 16,
              borderRadius: 100,
              alignItems: "center",
              backgroundColor: buttonStyle.backgroundColor,
              minWidth: 120,
              width: "100%",
              elevation: 2, // Android shadow
              shadowColor: "#000", // iOS shadow
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            }}
          >
            <Text
              style={{
                color: buttonStyle.color,
                fontSize: 16,
                fontWeight: "600",
                fontFamily: "Inter_600SemiBold",
              }}
            >
              {text}
            </Text>
          </TouchableOpacity>
        );
        break;
      case "link":
        return (
          <Link
            href={linkUrl}
            style={{
              padding: 16,
              borderRadius: 100,
              alignItems: "center",
              backgroundColor: buttonStyle.backgroundColor,
              minWidth: 120,
              textAlign: "center",
              width: "100%",
              elevation: 2, // Android shadow
              shadowColor: "#000", // iOS shadow
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            }}
          >
            <Text
              style={{
                color: buttonStyle.color,
                fontSize: 16,
                fontWeight: "600",
                fontFamily: "Inter_600SemiBold",
              }}
            >
              {text}
            </Text>
          </Link>
        );
        break;
      default:
        break;
    }
  };

  return (
    //render buttons
    renderButton()
  );
}
