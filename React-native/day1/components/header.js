import { Text, Image, StyleSheet, View, Linking } from 'react-native';
import { Icon } from '@rneui/themed';

export default function Header() {
  return (
    <View style={styles.View}>
      <View style={styles.personalContanier}>
        <Image
          source={require('../assets/profile-avatar.png')}
          style={styles.Image}
        />
        <Text style={styles.Text}>Ahmed Badran</Text>
        <Text style={styles.Text1}>Front-End Developer</Text>
      </View>
      <View style={styles.iconsContanier}>
        <Icon size={50} color="orange" type='ionicon' name="logo-facebook" onPress={()=>{Linking.openURL("https://www.facebook.com")}}/>
        <Icon size={50} color="orange" type='ionicon' name="logo-twitter" onPress={()=>{Linking.openURL("https://www.twitter.com")}}/>
        <Icon size={50} color="orange" type='ionicon' name="logo-linkedin" onPress={()=>{Linking.openURL("https://www.linkedin.com")}}/>
        <Icon size={50} color="orange" type='ionicon' name="logo-whatsapp" onPress={()=>{Linking.openURL("https://www.whatsapp.com")}}/>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  View:{
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  personalContanier: {
    alignItems: 'center',
    color: 'white',
  },
  Image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  Text: {
    color: 'white',
    fontSize: 24,
    marginVertical: 30,
    fontWeight: 'bold',
  },
  Text1: {
    color: 'grey',
    fontSize: 21,
  },
  iconsContanier: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
});
