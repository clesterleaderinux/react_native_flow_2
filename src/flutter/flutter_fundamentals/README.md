# Flutter Fundamentals App

A comprehensive Flutter application that demonstrates essential Flutter concepts, widgets, and patterns that every developer should know.

## 📱 What's Covered

### 1. **Basics Tab** (`📱 Basic Widgets`)
- **Container**: Decoration, gradients, and styling
- **Text**: Various text styles and formatting
- **Images & Icons**: Network images, icons, and error handling
- **Layout fundamentals**: Column, Row, and basic positioning

### 2. **Input Tab** (`📝 Input Widgets`)
- **TextField**: Text input with decoration and validation
- **Buttons**: ElevatedButton, OutlinedButton, TextButton, FloatingActionButton
- **Switch & Slider**: Interactive controls with state management
- **Radio & Checkboxes**: Selection controls and form inputs

### 3. **Lists Tab** (`📋 Lists & Data`)
- **ListView**: Scrollable list with builder pattern
- **GridView**: Grid layout with custom delegates
- **ExpansionTile**: Collapsible content sections
- **ListTile**: Standard list item with leading, title, subtitle, trailing

### 4. **Advanced Tab** (`🚀 Advanced Features`)
- **State Management**: StatefulWidget with setState
- **Loading States**: CircularProgressIndicator, LinearProgressIndicator
- **Theme System**: Light/Dark theme switching
- **Navigation**: Page routing and modal bottom sheets
- **Device Information**: MediaQuery and platform detection

## 🚀 Key Flutter Concepts Demonstrated

### State Management
```dart
class _MyWidgetState extends State<MyWidget> {
  int _counter = 0;
  
  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }
}
```

### Widget Composition
```dart
Widget _buildCard(String title, Widget content) {
  return Card(
    child: Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        children: [
          Text(title),
          const SizedBox(height: 16),
          content,
        ],
      ),
    ),
  );
}
```

### Theme System
```dart
ThemeData get _currentTheme => _isDarkTheme 
  ? ThemeData.dark(useMaterial3: true) 
  : ThemeData.light(useMaterial3: true);
```

### Navigation
```dart
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => const DetailPage(),
  ),
);
```

## 🎯 Essential Patterns

### 1. **Widget Structure**
- StatelessWidget for immutable UI
- StatefulWidget for dynamic UI with state
- Proper widget composition and reusability

### 2. **Layout Patterns**
- Column and Row for linear layouts
- Container for decoration and constraints
- Padding and SizedBox for spacing
- Card for elevated content sections

### 3. **User Interaction**
- GestureDetector and InkWell for tap handling
- Form controls with proper validation
- Snackbars and dialogs for user feedback
- Haptic feedback for better UX

### 4. **Performance Considerations**
- ListView.builder for large datasets
- Proper use of const constructors
- Efficient state management with setState
- Image caching and error handling

## 📱 Widgets Overview

| Widget | Purpose | Key Properties |
|--------|---------|----------------|
| `Container` | Layout/Decoration | `decoration`, `padding`, `margin` |
| `Text` | Text Display | `style`, `overflow`, `textAlign` |
| `Image` | Image Display | `fit`, `errorBuilder`, `loadingBuilder` |
| `ListView` | Scrollable Lists | `itemBuilder`, `itemCount`, `scrollDirection` |
| `GridView` | Grid Layouts | `gridDelegate`, `itemBuilder`, `itemCount` |
| `TextField` | Text Input | `decoration`, `onChanged`, `validator` |
| `ElevatedButton` | Primary Actions | `onPressed`, `child`, `style` |
| `Card` | Grouped Content | `elevation`, `margin`, `child` |

## 🔧 How to Run

1. **Prerequisites**: Ensure Flutter is installed on your system

2. **Navigate to project**: 
   ```bash
   cd src/flutter/flutter_fundamentals
   ```
3. **Get dependencies**: 
   ```bash
   flutter pub get
   ```
4. **Run the app**: 
   ```bash
   flutter run
   ```

## 📚 Learning Path

1. **Start with Basics**: Understand Container, Text, and basic layouts
2. **Add Interactivity**: Learn TextField, buttons, and state management
3. **Handle Data**: Master ListView, GridView, and data presentation
4. **Advanced Features**: Explore navigation, theming, and complex state

## 💡 Best Practices Highlighted

- ✅ Use `const` constructors for performance
- ✅ Implement proper error handling for images
- ✅ Follow Material Design guidelines
- ✅ Use meaningful widget names and structure
- ✅ Handle loading and error states gracefully
- ✅ Implement accessible widgets
- ✅ Use proper state management patterns
- ✅ Handle platform differences appropriately

## 🎨 Features Demonstrated

### Interactive Elements
- **Counter**: Increment/decrement with haptic feedback
- **Theme Toggle**: Switch between light and dark themes
- **Form Controls**: Various input types with validation
- **Navigation**: Page transitions and modal presentations

### Visual Feedback
- **Snackbars**: Temporary messages and confirmations
- **Dialogs**: Modal alerts and confirmations
- **Loading States**: Progress indicators for async operations
- **Color Swatches**: Visual theme color demonstration

### Data Presentation
- **Lists**: Dynamic content with tap handling
- **Grids**: Multi-column layouts
- **Cards**: Grouped content with elevation
- **Expansion**: Collapsible content sections

This app serves as both a learning tool and a reference guide for Flutter development fundamentals. Each section includes interactive examples that demonstrate real-world usage patterns.

## 🔗 Related Files

- `lib/main.dart` - App entry point and theme configuration
- `lib/widgets/fundamentals_page.dart` - Main fundamentals widget with all demonstrations
- `pubspec.yaml` - Project dependencies and configuration

## 📖 Additional Resources

- [Flutter Documentation](https://docs.flutter.dev/)
- [Widget Catalog](https://docs.flutter.dev/development/ui/widgets)
- [Material Design](https://material.io/design)
- [Flutter Cookbook](https://docs.flutter.dev/cookbook)
