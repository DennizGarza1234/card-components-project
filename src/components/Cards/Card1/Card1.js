import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Card1({ imageSrc, title, description, buttons }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={imageSrc} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
      <View style={styles.cardFooter}>
        {buttons.map((btn, index) => (
          <TouchableOpacity key={index} onPress={btn.onPress} style={styles.cardButton}>
            <Text style={styles.cardButtonText}>{btn.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: { width: '100%', height: 150, borderRadius: 8 },
  cardContent: { marginVertical: 8 },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
  cardDescription: { fontSize: 14, color: '#555' },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 8 },
  cardButton: { padding: 8, backgroundColor: '#007bff', borderRadius: 4 },
  cardButtonText: { color: '#fff', fontWeight: 'bold' },
});