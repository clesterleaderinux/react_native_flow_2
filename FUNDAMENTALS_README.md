# React Native Fundamentals

This comprehensive component demonstrates essential React Native concepts and components that every developer should know.

## 📋 What's Covered

### 1. **Basic Components** (`basics` tab)
- **View**: Container component for layout
- **Text**: Text rendering with various styles
- **Image**: Display local and remote images
- **StyleSheet**: Styling components

### 2. **Input Components** (`input` tab)
- **TextInput**: Text input with state management
- **Button**: Basic button component
- **TouchableOpacity**: Custom touchable button with press/long press
- **Switch**: Toggle switch with state
- **Alert**: Native alert dialogs

### 3. **Lists & Data** (`lists` tab)
- **FlatList**: Efficient list rendering for simple data
- **SectionList**: Grouped list with section headers
- **Data handling**: Key extractors and item renderers

### 4. **Advanced Features** (`advanced` tab)
- **State Management**: useState hook with counter example
- **Effects**: useEffect hook for lifecycle management
- **Loading States**: ActivityIndicator for async operations
- **Modal**: Overlay modal with animations
- **Platform Detection**: OS-specific information
- **Dimensions**: Screen size and device info

## 🚀 Key React Native Concepts Demonstrated

### State Management
```tsx
const [counter, setCounter] = useState(0);
const [text, setText] = useState('');
const [isEnabled, setIsEnabled] = useState(false);
```

### Event Handling
```tsx
const handlePress = () => {
  Alert.alert('Title', 'Message');
};

const handleLongPress = () => {
  // Handle long press
};
```

### List Rendering
```tsx
const renderItem = ({ item }) => (
  <View>
    <Text>{item.title}</Text>
  </View>
);

<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
/>
```

### Styling Best Practices
```tsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
```

### Platform-Specific Code
```tsx
import { Platform } from 'react-native';

// Check platform
if (Platform.OS === 'ios') {
  // iOS specific code
} else {
  // Android specific code
}
```

## 🎯 Essential Patterns

### 1. **Component Structure**
- Always use TypeScript interfaces for props
- Use React.FC for functional components
- Implement proper state management

### 2. **Styling Patterns**
- Create reusable style objects
- Use flexbox for layouts
- Implement consistent spacing and colors
- Add shadows and elevation for depth

### 3. **User Interaction**
- Provide visual feedback for touchables
- Handle loading states gracefully
- Use native alerts for confirmations
- Implement proper keyboard handling

### 4. **Performance Considerations**
- Use FlatList for large datasets
- Implement proper key extractors
- Optimize re-renders with useCallback/useMemo
- Handle async operations properly

## 📱 Components Overview

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| `View` | Container/Layout | `style`, `onPress` |
| `Text` | Text Display | `style`, `numberOfLines` |
| `Image` | Images | `source`, `resizeMode`, `onLoad` |
| `ScrollView` | Scrollable content | `contentContainerStyle`, `showsVerticalScrollIndicator` |
| `FlatList` | Efficient lists | `data`, `renderItem`, `keyExtractor` |
| `TouchableOpacity` | Touchable buttons | `onPress`, `onLongPress`, `activeOpacity` |
| `TextInput` | Text input | `value`, `onChangeText`, `placeholder` |
| `Switch` | Toggle switch | `value`, `onValueChange` |
| `Modal` | Overlay modal | `visible`, `animationType`, `onRequestClose` |

## 🔧 How to Use

1. **View the Component**: Open `src/components/Fundamentals.tsx`
2. **Run the Demo**: Use `FundamentalsDemo.tsx` as a starting point
3. **Integrate**: Import and use in your app:

```tsx
import React from 'react';
import { Fundamentals } from './src/components';

const App: React.FC = () => {
  return <Fundamentals />;
};

export default App;
```

## 📚 Learning Path

1. **Start with Basics**: Understand View, Text, and basic styling
2. **Add Interactivity**: Learn TouchableOpacity and state management
3. **Handle Data**: Master FlatList and data rendering
4. **Advanced Features**: Explore Modal, Platform, and complex state

## 💡 Best Practices Highlighted

- ✅ Use TypeScript for type safety
- ✅ Implement proper error handling
- ✅ Follow React Native styling conventions
- ✅ Use consistent naming conventions
- ✅ Handle loading and error states
- ✅ Implement accessible components
- ✅ Use proper key extractors for lists
- ✅ Handle platform differences gracefully

This component serves as both a learning tool and a reference guide for React Native development fundamentals.