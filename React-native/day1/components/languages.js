import { Text, StyleSheet, View, Button} from 'react-native';

export default function Languages() {
  return <>
    <View style={styles.View}>
      <Text style={styles.title}>Languages</Text>
      <Text style={styles.text}>Arabic</Text>
      <View style={styles.prograssLine}>
        <View style={styles.prograss1}></View>
      </View>
      <Text style={styles.text}>English</Text>
      <View style={styles.prograssLine}>
        <View style={styles.prograss2}></View>
      </View>
      <Text style={styles.text}>Turkch</Text>
      <View style={styles.prograssLine}>
        <View style={styles.prograss3}></View>
      </View>
    </View>
    <Button title='Download CV' color="orange"/>
  </>
}




const styles = StyleSheet.create({
  View: {
    width: "100%",
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold"
  },
  prograssLine: {
    width: "100%",
    height: 15,
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 35,
    marginBottom: 20
  },
  prograss1: {
    width: "100%",
    height: 12,
    backgroundColor: "orange",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 35,
  },
  prograss2: {
    width: "70%",
    height: 12,
    backgroundColor: "orange",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 35,
  },
  prograss3: {
    width: "30%",
    height: 12,
    backgroundColor: "orange",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 35,
  },
});



