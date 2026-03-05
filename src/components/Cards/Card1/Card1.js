import React from 'react';
import { Text, View } from 'react-native';
import styles from './Card1Styles';

const Card1 = () => {
  return (
    <View style={styles.container}>
      
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.logoText}>Logo</Text>
        <Text style={styles.title}>Belinda’s Closet</Text>
      </View>

      {/* Placeholder Image Section */}
      <View style={styles.imageSection}>
        <Text style={styles.imagePlaceholder}>
          Project screen shot of home page of primary feature
        </Text>
      </View>

      {/* Middle Bar */}
      <View style={styles.middleBar}>
        <Text style={styles.clientText}>
          Client: North Seattle College - Non Profit
        </Text>
      </View>

      {/* Content Section */}
      <View style={styles.contentSection}>
        <Text style={styles.headerText}>Dressing our community</Text>

        <Text style={styles.bodyText}>
          Providing North Seattle College students with free clothing.
          Making sure wardrobe is not one of their problems.
        </Text>

        {/* Marketing Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>150+</Text>
            <Text style={styles.statLabel}>Students Impacted</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>150+</Text>
            <Text style={styles.statLabel}>Students Impacted</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>150+</Text>
            <Text style={styles.statLabel}>Students Impacted</Text>
          </View>
        </View>
      </View>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <Text style={styles.buttonText}>See project details</Text>
      </View>

    </View>
  );
};

export default Card1;