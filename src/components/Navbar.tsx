import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilar Del Sur</Text>
      <TouchableOpacity style={styles.menuButton}>
        <Image
          source={require("../../assets/menuIcon.png")}
          style={styles.menuIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    paddingVertical: 20, // Agrega un padding vertical para separar el navbar del contenido
    marginTop: 6, // Asegúrate de que el navbar esté alineado en la parte superior
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#f5fcff",
  },
  title: {
    fontSize: 24,
    marginLeft: 30,
  },
  menuButton: {
    marginRight: 30,
    padding: 6,
    borderRadius: 6,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
});

export default Navbar;
