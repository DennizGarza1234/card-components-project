import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: 625,
    backgroundColor: "#D2D2D2",
    alignSelf: "center",
  },

  topBar: {
    height: 109,
    backgroundColor: "#303030",
    justifyContent: "center",
    alignItems: "center",
  },

  logoText: {
    color: "#E8E8E8",
    fontSize: 16,
  },

  title: {
    color: "#E8E8E8",
    fontSize: 32,
    fontWeight: "500",
  },

  imageSection: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BFBFBF",
  },

  imagePlaceholder: {
    textAlign: "center",
    padding: 20,
  },

  middleBar: {
    height: 48,
    backgroundColor: "#303030",
    justifyContent: "center",
    alignItems: "center",
  },

  clientText: {
    color: "#E2E2E2",
    fontSize: 16,
    fontStyle: "italic",
  },

  contentSection: {
    padding: 20,
    alignItems: "center",
  },

  headerText: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 10,
  },

  bodyText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  statBox: {
    alignItems: "center",
    flex: 1,
  },

  statNumber: {
    fontSize: 28,
    fontWeight: "600",
  },

  statLabel: {
    fontSize: 12,
  },

  bottomBar: {
    height: 68,
    backgroundColor: "#303030",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#DDD1D1",
    fontSize: 20,
    fontWeight: "600",
  },
});