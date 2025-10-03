import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Fundamentals } from './src/components';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Fundamentals />
        <Text style={styles.title}>React Native Image Test</Text>
        
        {/* Remote Image */}
        <View style={styles.imageSection}>
          <Text style={styles.sectionTitle}>Remote Image</Text>
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
            resizeMode="contain"
            onLoad={() => console.log('✅ Remote image loaded')}
            onError={(error) => console.log('❌ Remote image failed:', error.nativeEvent.error)}
          />
          <Text style={styles.description}>
            React Native logo from official website
          </Text>
        </View>

        {/* Local Image */}
        <View style={styles.imageSection}>
          <Text style={styles.sectionTitle}>Local Image</Text>
          <Image
            source={require('./src/components/logo.png')}
            style={styles.image}
            resizeMode="contain"
            onLoad={() => console.log('✅ Local image loaded')}
            onError={(error) => console.log('❌ Local image failed:', error.nativeEvent.error)}
          />
          <Text style={styles.description}>
            Local logo.png from components folder
          </Text>
        </View>

        {/* Backup Test Image */}
        <View style={styles.imageSection}>
          <Text style={styles.sectionTitle}>Test Image</Text>
          <Image
            source={{ uri: 'https://via.placeholder.com/150x150/4CAF50/FFFFFF?text=Success' }}
            style={styles.image}
            resizeMode="contain"
            onLoad={() => console.log('✅ Test image loaded')}
            onError={(error) => console.log('❌ Test image failed:', error.nativeEvent.error)}
          />
          <Text style={styles.description}>
            Placeholder test image
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  imageSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default App;
