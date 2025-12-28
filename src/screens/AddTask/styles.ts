import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 80,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 16,
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 24,
  },

  input: {
    width: "100%",
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#111827",
    marginBottom: -30
  },


  categorySelected: {
    backgroundColor: "#0EA5E9",
  },

  categoryText: {
    fontSize: 13,
    color: "#374151",
  },

  categoryTextSelected: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  button: {
    height: 52,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  buttonDisabled: {

  },

  cancel: {
    textAlign: "center",
    fontSize: 14,
    color: "#9CA3AF",
  },
});
