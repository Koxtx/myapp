import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("violet");
  const [inputValue, setInputValue] = useState("");
  const [inputResult, setInputResult] = useState([]);
  const addText = () => {
    setInputResult((current) => [...current, inputValue]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, { backgroundColor }]}>
        <View style={styles.inputConatiner}>
          <TextInput
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            style={styles.input}
          />
          <Button title="Valider" onPress={addText} />
        </View>
        <View style={styles.resultContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={inputResult}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.item}>{item}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    alignItems: "center",
  },
  inputConatiner: {
    flexDirection: "row",
    width: "100%",
    marginHorizontal: 12,
    marginTop: 8,
  },
  input: {
    width: "80%",
    backgroundColor: "white",
  },
  resultContainer: {
    width: "100%",
    padding: 8,
    flex: 3,
  },
  itemContainer: {
    width: "100%",
    height: 38,
    marginVertical: 12,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    color: "white",
    fontSize: 20,
  },
});
