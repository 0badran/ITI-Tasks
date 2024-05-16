import { Text, View, Button, alert } from "react-native";
import AddTodo from "./AddTodo";

export default function ToDo() {
  function submitHandle(value) {
    alert(value);
  }

  return (
    <>
      <AddTodo submitHandle={submitHandle} />
    </>
  );
}