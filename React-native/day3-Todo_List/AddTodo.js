import { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";




function AddTodo({ submitHandle }) {

  const [value, setValue] = useState("");

  function handleValue(text) {
    setValue(text);
  }

  return (
    <>
      <TextInput placeholder="Tybe Todo" onChangeText={handleValue} />
      <Button title="Add" onPress={() => submitHandle(value)} />
    </>
  );
}

export default AddTodo