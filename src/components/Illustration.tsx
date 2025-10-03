import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const Illustration: React.FC = () => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    console.log('✅ Local illustration loaded successfully!');
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = (error: any) => {
    console.log('❌ Local illustration failed to load:', error.nativeEvent?.error);
    setImageLoading(false);
    setImageError(true);
  };

  const handleImageLoadStart = () => {
    console.log('🔄 Loading local illustration...');
    setImageLoading(true);
    setImageError(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Illustration</Text>
      
      {/* Loading indicator */}
      {imageLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Loading illustration...</Text>
        </View>
      )}
      
      {/* Local Image */}
      <Image
        source={{uri:'./logo.png'}}
        style={[styles.illustration, imageLoading && styles.hidden]}
        resizeMode="contain"
        onLoad={handleImageLoad}
        onError={handleImageError}
        onLoadStart={handleImageLoadStart}
      />
      
      {/* Error message with fallback */}
      {imageError && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Could not load local illustration</Text>
          <Text style={styles.errorSubtext}>logo.png not found in components folder</Text>
          
          {/* Fallback placeholder */}
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderText}>📷</Text>
            <Text style={styles.placeholderLabel}>Illustration Placeholder</Text>
          </View>
        </View>
      )}
      
      {/* Success message */}
      {!imageLoading && !imageError && (
        <Text style={styles.successText}>
          ✅ Local illustration loaded
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  illustration: {
    width: 200,
    height: 200,
    marginBottom: 15,
    color: '#007AFF',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },
  hidden: {
    opacity: 0,
    position: 'absolute',
  },
  errorContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffebee',
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  errorSubtext: {
    color: '#666',
    fontSize: 12,
    marginBottom: 15,
    textAlign: 'center',
  },
  placeholderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    borderStyle: 'dashed',
  },
  placeholderText: {
    fontSize: 48,
    marginBottom: 10,
  },
  placeholderLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  successText: {
    fontSize: 12,
    color: '#4caf50',
    fontWeight: '500',
  },
});

export default Illustration;
