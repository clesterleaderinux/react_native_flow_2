import React, { useState, useEffect } from 'react';

// Import React Native components using require to avoid TypeScript issues
const ReactNative = require('react-native');
const {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
  FlatList,
  SectionList,
  Switch,
  ActivityIndicator,
  Modal,
  SafeAreaView,
} = ReactNative;

// Get device dimensions
const { width, height } = Dimensions.get('window');

// Sample data for lists
const simpleData = [
  { id: '1', title: 'Item 1', description: 'First item description' },
  { id: '2', title: 'Item 2', description: 'Second item description' },
  { id: '3', title: 'Item 3', description: 'Third item description' },
];

const sectionData = [
  {
    title: 'Fruits',
    data: ['Apple', 'Banana', 'Orange'],
  },
  {
    title: 'Vegetables',
    data: ['Carrot', 'Broccoli', 'Spinach'],
  },
];

const Fundamentals: React.FC = () => {
  // State hooks for various components
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState('basics');

  // Effect hook example
  useEffect(() => {
    console.log('Component mounted or counter changed:', counter);
    
    // Cleanup function
    return () => {
      console.log('Cleanup function called');
    };
  }, [counter]);

  // Handler functions
  const handlePress = () => {
    Alert.alert(
      'Button Pressed',
      'You pressed the button!',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]
    );
  };

  const handleLongPress = () => {
    Alert.alert('Long Press', 'You held the button!');
  };

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Success', 'Loading completed!');
    }, 2000);
  };

  // Render item for FlatList
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.listItem}>
      <Text style={styles.listTitle}>{item.title}</Text>
      <Text style={styles.listDescription}>{item.description}</Text>
    </View>
  );

  // Render section header
  const renderSectionHeader = ({ section }: { section: any }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  // Tab content renderer
  const renderTabContent = () => {
    switch (selectedTab) {
      case 'basics':
        return (
          <View>
            {/* Basic Components */}
            <Text style={styles.sectionTitle}>📱 Basic Components</Text>
            
            {/* View Container */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>View Container</Text>
              <View style={[styles.colorBox, { backgroundColor: '#FF6B6B' }]}>
                <Text style={styles.boxText}>Red Box</Text>
              </View>
              <View style={[styles.colorBox, { backgroundColor: '#4ECDC4' }]}>
                <Text style={styles.boxText}>Teal Box</Text>
              </View>
            </View>

            {/* Text Component */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Text Styling</Text>
              <Text style={styles.normalText}>Normal Text</Text>
              <Text style={styles.boldText}>Bold Text</Text>
              <Text style={styles.italicText}>Italic Text</Text>
              <Text style={styles.coloredText}>Colored Text</Text>
            </View>

            {/* Image Component */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Images</Text>
              <Image
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={styles.smallImage}
                resizeMode="contain"
              />
              <Text style={styles.description}>Remote Image</Text>
            </View>
          </View>
        );

      case 'input':
        return (
          <View>
            <Text style={styles.sectionTitle}>📝 Input Components</Text>
            
            {/* TextInput */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Text Input</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter text here..."
                value={text}
                onChangeText={setText}
                multiline={false}
              />
              <Text style={styles.description}>Input: {text}</Text>
            </View>

            {/* Buttons */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Buttons & Touchables</Text>
              <Button title="Basic Button" onPress={handlePress} />
              
              <TouchableOpacity 
                style={styles.customButton} 
                onPress={handlePress}
                onLongPress={handleLongPress}
              >
                <Text style={styles.buttonText}>Custom TouchableOpacity</Text>
              </TouchableOpacity>
              
              <Text style={styles.description}>
                Try pressing and holding the custom button
              </Text>
            </View>

            {/* Switch */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Switch Toggle</Text>
              <View style={styles.switchContainer}>
                <Text>Enable notifications</Text>
                <Switch
                  value={isEnabled}
                  onValueChange={setIsEnabled}
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                />
              </View>
              <Text style={styles.description}>
                Switch is {isEnabled ? 'ON' : 'OFF'}
              </Text>
            </View>
          </View>
        );

      case 'lists':
        return (
          <View>
            <Text style={styles.sectionTitle}>📋 Lists & Data</Text>
            
            {/* FlatList */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>FlatList</Text>
              <FlatList
                data={simpleData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.list}
                scrollEnabled={false}
              />
            </View>

            {/* SectionList */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>SectionList</Text>
              <SectionList
                sections={sectionData}
                renderItem={({ item }) => (
                  <Text style={styles.sectionItem}>{item}</Text>
                )}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item, index) => item + index}
                style={styles.list}
                scrollEnabled={false}
              />
            </View>
          </View>
        );

      case 'advanced':
        return (
          <View>
            <Text style={styles.sectionTitle}>🚀 Advanced Features</Text>
            
            {/* Counter with State */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>State Management</Text>
              <Text style={styles.counterText}>Counter: {counter}</Text>
              <View style={styles.counterButtons}>
                <TouchableOpacity 
                  style={styles.counterButton} 
                  onPress={() => setCounter(counter - 1)}
                >
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.counterButton} 
                  onPress={() => setCounter(counter + 1)}
                >
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Loading State */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Loading Indicator</Text>
              <TouchableOpacity 
                style={styles.loadingButton} 
                onPress={simulateLoading}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text style={styles.buttonText}>Start Loading</Text>
                )}
              </TouchableOpacity>
            </View>

            {/* Modal */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Modal</Text>
              <TouchableOpacity 
                style={styles.modalButton} 
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.buttonText}>Open Modal</Text>
              </TouchableOpacity>
            </View>

            {/* Platform & Dimensions */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Device Information</Text>
              <Text style={styles.description}>Platform: {Platform.OS}</Text>
              <Text style={styles.description}>Version: {Platform.Version}</Text>
              <Text style={styles.description}>Screen Width: {width.toFixed(0)}px</Text>
              <Text style={styles.description}>Screen Height: {height.toFixed(0)}px</Text>
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>React Native Fundamentals</Text>
        <Text style={styles.headerSubtitle}>Essential concepts and components</Text>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        {[
          { key: 'basics', label: 'Basics' },
          { key: 'input', label: 'Input' },
          { key: 'lists', label: 'Lists' },
          { key: 'advanced', label: 'Advanced' },
        ].map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[
              styles.tab,
              selectedTab === tab.key && styles.activeTab,
            ]}
            onPress={() => setSelectedTab(tab.key)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab.key && styles.activeTabText,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {renderTabContent()}
        
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            💡 This covers the essential React Native components and concepts
          </Text>
        </View>
      </ScrollView>

      {/* Modal Component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Modal Example</Text>
            <Text style={styles.modalText}>
              This is a modal! It overlays the main content.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginTop: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#007bff',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6c757d',
  },
  activeTabText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 16,
    marginTop: 8,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#495057',
    marginBottom: 12,
  },
  colorBox: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: 14,
    color: '#212529',
    marginBottom: 4,
  },
  boldText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 4,
  },
  italicText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#212529',
    marginBottom: 4,
  },
  coloredText: {
    fontSize: 14,
    color: '#dc3545',
    marginBottom: 4,
  },
  smallImage: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 12,
    color: '#6c757d',
    textAlign: 'center',
    marginTop: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  customButton: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  list: {
    maxHeight: 150,
  },
  listItem: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  listTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212529',
  },
  listDescription: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: 2,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#495057',
    backgroundColor: '#e9ecef',
    padding: 8,
    borderRadius: 4,
    marginTop: 4,
  },
  sectionItem: {
    fontSize: 14,
    color: '#212529',
    padding: 8,
    marginLeft: 16,
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#212529',
    marginBottom: 16,
  },
  counterButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  counterButton: {
    backgroundColor: '#007bff',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingButton: {
    backgroundColor: '#17a2b8',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    minHeight: 44,
    justifyContent: 'center',
  },
  modalButton: {
    backgroundColor: '#6f42c1',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    margin: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#212529',
  },
  modalText: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  closeButton: {
    backgroundColor: '#dc3545',
    padding: 12,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default Fundamentals;