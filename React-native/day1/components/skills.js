import { Text, StyleSheet, View, } from 'react-native';

export default function Skills() {
  return <View style={styles.View}>
    <View style={styles.skills}>
      <Text style={styles.textSkills}>javaScript</Text>
      <Text style={styles.textSkills}>OOP</Text>
      <Text style={styles.textSkills}>React-Native</Text>
      <Text style={styles.textSkills}>Python</Text>
    </View>
    <View style={styles.persintag}>
      <Text style={styles.textPersintag}>80%</Text>
      <Text style={styles.textPersintag}>60%</Text>
      <Text style={styles.textPersintag}>50%</Text>
      <Text style={styles.textPersintag}>100%</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  View:{
    width:"100%",
    flexDirection:"row",
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  skills:{
    width:"50%",
  },
  persintag:{
    width:"50%",
    justifyContent:"space-around",
    alignItems:"center"
  },
  textSkills:{
    backgroundColor:"orange",
    padding:7,
    textAlign:"center",
    fontSize:25,
    fontWeight:"bold",
    color:"white",
    overflow:"visible",
    marginBottom:20,
  },
  textPersintag:{
    color:"white",
    fontSize:30,
  },
});