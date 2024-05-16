import { ScrollView, View } from 'react-native';
import Header from './components/header';
import Skills from './components/skills';
import Languages from './components/languages';

export default function App() {
  return (
    <ScrollView>
    <View style={appCss}>
      <Header />
      <Skills/>
      <Languages />
    </View>
    </ScrollView>
  );
}

const appCss = {
  backgroundColor: 'black',
  padding: 50,
};
