import { Text, View, Button, AsyncStorage } from "react-native";


async function saveItem() {
  await AsyncStorage.setItem("user", "Ahmed");
}
async function GetItem() {
  let user = await AsyncStorage.getItem("user");
}

export default function Storage() {
  return (
    <>
      <Button title="Save Data" onPress={() => saveItem()} />
      <Button title="Get Data" onPress={() => GetItem()} />
    </>
  );
}