import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RingProgress from './src/components/RingProgress';
import Value from './src/components/Value';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <RingProgress progress={0.30} />

      <View style={styles.values}>
        <Value label='Steps' value='1219' />
        <Value label='Distance' value='0,75 km' />
        <Value label='Flights Climb' value='12' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 12,
  },
  values: { flexDirection: 'row', gap: 25, flexWrap: 'wrap', marginTop: 50 },
});
