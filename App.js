import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TodoScreen from './src/screen/TodoScreen';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <TodoScreen></TodoScreen>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91C7B1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
