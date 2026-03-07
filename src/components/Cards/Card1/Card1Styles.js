import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  statsRow: {
  flexDirection: "row",
  justifyContent: "space-around",
  width: "100%",
  marginTop: 20
},
statBox: {
  alignItems: "center",
  flex: 1
},
   container: {
  maxWidth: 600,
  width: "90%",
  backgroundColor: "#D2D2D2",
  alignSelf: "center",
  borderRadius: 10,
  padding: 20,
  marginVertical: 20
},
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    alignItems: 'center',
  },
buttonText: {
  color: "#FFFFFF",
  fontSize: 18,
  fontWeight: "600"
},
navigationRow: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 40,
  marginTop: 25,
  marginBottom: 10
},
arrow: {
  fontSize: 28,
  cursor: "pointer"
},

dotsContainer: {
  flexDirection: "row",
  gap: 10,
},

dot: {
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: "#000",
},

dotActive: {
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: "#FFF",
  borderWidth: 1,
  borderColor: "#000",
},
bottomBar: {
  height: 60,
  backgroundColor: "#303030",
  justifyContent: "center",
  alignItems: "center",
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  marginTop: 15
},
});