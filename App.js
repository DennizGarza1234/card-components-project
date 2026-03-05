import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Card from './src/components/Cards/Card1/Card1';
import SearchBar from './src/components/Search/SearchBar';

export default function App() {
  const [cards] = useState([
    { id: '1', title: 'Card One', description: 'Description for Card One', image: null },
    { id: '2', title: 'Card Two', description: 'Description for Card Two', image: null },
    { id: '3', title: 'Card Three', description: 'Description for Card Three', image: null },
  ]);

  const [searchText, setSearchText] = useState('');

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar searchText={searchText} onChangeText={setSearchText} />

      <ScrollView contentContainerStyle={styles.cardList}>
        {filteredCards.map(card => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardList: {
    padding: 10,
  },
});