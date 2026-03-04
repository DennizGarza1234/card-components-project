import { ScrollView } from 'react-native';
import Card1 from './src/components/Cards/Card1/Card1';

export default function App() {
  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: '#eee' }}>
      <Card1
        imageSrc={require('./src/assets/sample.png')}
        title="Sample Card"
        description="This is a sample card for testing."
        buttons={[
          { label: 'Like', onPress: () => console.log('Liked!') },
          { label: 'Share', onPress: () => console.log('Shared!') },
        ]}
      />
    </ScrollView>
  );
}