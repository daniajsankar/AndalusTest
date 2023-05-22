import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const column = (width - 52) / 2;

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingBottom: 40,
  },
  name: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 10
  },
  text: {
    color: "black",
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "400"
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10
  },
  detailsWrapper: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    padding: 10,
    marginRight: -10
  },
  share: {
    width: 25,
    height: 25
  }
});
