import React from "react";
import {
  View,
  Text,
  Image,
  Linking,
  ScrollView,
  Pressable,
} from "react-native";
import TIPorto from "./components/TIPorto";

const Kesini = "https://www.instagram.com/ibannngshj/";

const App = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#FBECB2", flex: 1 }}>
        <View style={{ padding: 30, alignItems: "center" }}>
          <Image
            style={{ width: 160, height: 160, borderRadius: 10 }}
            source={require("./assets/apa.jpg")}
          />
          <Text style={{ padding: 10, fontSize: 20, fontWeight: "bold" }}>
            Balawan Satria
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "rgba(0, 0, 0, 0.5)",
              textAlign: "center",
            }}
          >
            Saya merupakan siswa anak SMK Telkom Purwokerto. Saya kelas 12
            Rekayasa Perangkat Lunak 1.
          </Text>
          <View style={{ padding: 10 }}>
            <Pressable onPress={() => Linking.openURL(Kesini)}>
              <View
                style={{
                  backgroundColor: "blue",
                  padding: 10,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  Contact Me
                </Text>
              </View>
            </Pressable>
          </View>
        </View>

        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          Project
        </Text>
        <TIPorto
          src={require("./assets/dashboard.jpg")}
          name="Ayamku"
          desc="ini merupakan Project PKL"
        />

        <TIPorto
          src={require("./assets/figma.jpg")}
          name="Figma"
          desc="ini merupakan Project feeds"
        />
      </View>
    </ScrollView>
  );
};

export default App;
