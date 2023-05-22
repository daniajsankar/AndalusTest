import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const column = (width - 52) / 2;

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingWrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    paddingBottom: 40,
  },
  wrapper: {
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    paddingTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    borderRadius: 14,
    borderColor: "#D5D5D5",
  },
  category: {
    width: column,
    marginBottom: 16,
    marginHorizontal: 5,
    alignItems: "center",
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.0,
    elevation: 7,
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  text: {
    color: "black",
    fontSize: 16,
    textTransform: "capitalize"
  }
});
