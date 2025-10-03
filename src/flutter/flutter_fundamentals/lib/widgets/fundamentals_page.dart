import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class FundamentalsPage extends StatefulWidget {
  const FundamentalsPage({super.key});

  @override
  State<FundamentalsPage> createState() => _FundamentalsPageState();
}

class _FundamentalsPageState extends State<FundamentalsPage>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;
  
  // State variables for demonstrations
  String _textInput = '';
  int _counter = 0;
  bool _switchValue = false;
  bool _isLoading = false;
  bool _isDarkTheme = false;
  double _sliderValue = 50.0;
  String _selectedRadio = 'Option 1';
  bool _checkbox1 = false;
  bool _checkbox2 = false;

  // Sample data for lists
  final List<String> _fruits = ['🍎 Apple', '🍌 Banana', '🍊 Orange', '🍇 Grape', '🍓 Strawberry'];
  final List<String> _vegetables = ['🥕 Carrot', '🥦 Broccoli', '🥬 Spinach', '🍅 Tomato'];

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 4, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  // Theme data
  ThemeData get _currentTheme => _isDarkTheme 
    ? ThemeData.dark(useMaterial3: true) 
    : ThemeData.light(useMaterial3: true);

  @override
  Widget build(BuildContext context) {
    return Theme(
      data: _currentTheme,
      child: Scaffold(
        appBar: AppBar(
          title: const Text('Flutter Fundamentals'),
          backgroundColor: _currentTheme.colorScheme.inversePrimary,
          actions: [
            IconButton(
              icon: Icon(_isDarkTheme ? Icons.light_mode : Icons.dark_mode),
              onPressed: () {
                setState(() {
                  _isDarkTheme = !_isDarkTheme;
                });
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(
                    content: Text('Switched to ${_isDarkTheme ? 'Dark' : 'Light'} theme'),
                    duration: const Duration(seconds: 1),
                  ),
                );
              },
            ),
          ],
          bottom: TabBar(
            controller: _tabController,
            tabs: const [
              Tab(icon: Icon(Icons.widgets), text: 'Basics'),
              Tab(icon: Icon(Icons.input), text: 'Input'),
              Tab(icon: Icon(Icons.list), text: 'Lists'),
              Tab(icon: Icon(Icons.settings), text: 'Advanced'),
            ],
          ),
        ),
        body: TabBarView(
          controller: _tabController,
          children: [
            _buildBasicsTab(),
            _buildInputTab(),
            _buildListsTab(),
            _buildAdvancedTab(),
          ],
        ),
      ),
    );
  }

  Widget _buildBasicsTab() {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildSectionTitle('📱 Basic Widgets'),
          
          // Container with different decorations
          _buildCard(
            'Container Widget',
            Column(
              children: [
                Container(
                  width: double.infinity,
                  height: 60,
                  decoration: BoxDecoration(
                    color: Colors.red.shade300,
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: const Center(
                    child: Text(
                      'Red Container',
                      style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
                const SizedBox(height: 8),
                Container(
                  width: double.infinity,
                  height: 60,
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: [Colors.blue.shade300, Colors.teal.shade300],
                    ),
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: const Center(
                    child: Text(
                      'Gradient Container',
                      style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
              ],
            ),
          ),

          // Text styling
          _buildCard(
            'Text Styling',
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Normal Text', style: _currentTheme.textTheme.bodyMedium),
                Text('Bold Text', style: _currentTheme.textTheme.bodyMedium?.copyWith(fontWeight: FontWeight.bold)),
                Text('Italic Text', style: _currentTheme.textTheme.bodyMedium?.copyWith(fontStyle: FontStyle.italic)),
                Text('Large Text', style: _currentTheme.textTheme.headlineSmall),
                Text('Colored Text', style: _currentTheme.textTheme.bodyMedium?.copyWith(color: Colors.red)),
              ],
            ),
          ),

          // Images and Icons
          _buildCard(
            'Images & Icons',
            Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    Icon(Icons.favorite, size: 40, color: Colors.red),
                    Icon(Icons.star, size: 40, color: Colors.amber),
                    Icon(Icons.thumb_up, size: 40, color: Colors.blue),
                  ],
                ),
                const SizedBox(height: 16),
                ClipRRect(
                  borderRadius: BorderRadius.circular(8),
                  child: Image.network(
                    'https://flutter.github.io/assets-for-api-docs/assets/widgets/owl.jpg',
                    height: 100,
                    width: 100,
                    fit: BoxFit.cover,
                    errorBuilder: (context, error, stackTrace) {
                      return Container(
                        height: 100,
                        width: 100,
                        color: Colors.grey.shade300,
                        child: const Icon(Icons.error),
                      );
                    },
                  ),
                ),
                const SizedBox(height: 8),
                const Text('Network Image'),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildInputTab() {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildSectionTitle('📝 Input Widgets'),

          // Text Field
          _buildCard(
            'TextField',
            Column(
              children: [
                TextField(
                  decoration: const InputDecoration(
                    labelText: 'Enter text here',
                    border: OutlineInputBorder(),
                    prefixIcon: Icon(Icons.text_fields),
                  ),
                  onChanged: (value) {
                    setState(() {
                      _textInput = value;
                    });
                  },
                ),
                const SizedBox(height: 8),
                Text('Input: $_textInput'),
              ],
            ),
          ),

          // Buttons
          _buildCard(
            'Buttons',
            Column(
              children: [
                ElevatedButton(
                  onPressed: () {
                    _showDialog('ElevatedButton pressed!');
                  },
                  child: const Text('Elevated Button'),
                ),
                const SizedBox(height: 8),
                OutlinedButton(
                  onPressed: () {
                    _showDialog('OutlinedButton pressed!');
                  },
                  child: const Text('Outlined Button'),
                ),
                const SizedBox(height: 8),
                TextButton(
                  onPressed: () {
                    _showDialog('TextButton pressed!');
                  },
                  child: const Text('Text Button'),
                ),
                const SizedBox(height: 8),
                FloatingActionButton(
                  mini: true,
                  onPressed: () {
                    _showDialog('FloatingActionButton pressed!');
                  },
                  child: const Icon(Icons.add),
                ),
              ],
            ),
          ),

          // Switch and Slider
          _buildCard(
            'Switch & Slider',
            Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text('Enable notifications'),
                    Switch(
                      value: _switchValue,
                      onChanged: (value) {
                        setState(() {
                          _switchValue = value;
                        });
                        _showSnackBar('Switch is ${value ? 'ON' : 'OFF'}');
                      },
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                Text('Slider Value: ${_sliderValue.round()}'),
                Slider(
                  value: _sliderValue,
                  min: 0,
                  max: 100,
                  divisions: 10,
                  label: _sliderValue.round().toString(),
                  onChanged: (value) {
                    setState(() {
                      _sliderValue = value;
                    });
                  },
                ),
              ],
            ),
          ),

          // Radio and Checkboxes
          _buildCard(
            'Radio & Checkboxes',
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('Radio Buttons:', style: TextStyle(fontWeight: FontWeight.bold)),
                RadioListTile(
                  title: const Text('Option 1'),
                  value: 'Option 1',
                  groupValue: _selectedRadio,
                  onChanged: (value) {
                    setState(() {
                      _selectedRadio = value!;
                    });
                  },
                ),
                RadioListTile(
                  title: const Text('Option 2'),
                  value: 'Option 2',
                  groupValue: _selectedRadio,
                  onChanged: (value) {
                    setState(() {
                      _selectedRadio = value!;
                    });
                  },
                ),
                const SizedBox(height: 16),
                const Text('Checkboxes:', style: TextStyle(fontWeight: FontWeight.bold)),
                CheckboxListTile(
                  title: const Text('Checkbox 1'),
                  value: _checkbox1,
                  onChanged: (value) {
                    setState(() {
                      _checkbox1 = value!;
                    });
                  },
                ),
                CheckboxListTile(
                  title: const Text('Checkbox 2'),
                  value: _checkbox2,
                  onChanged: (value) {
                    setState(() {
                      _checkbox2 = value!;
                    });
                  },
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildListsTab() {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildSectionTitle('📋 Lists & Data'),

          // ListView
          _buildCard(
            'ListView',
            SizedBox(
              height: 200,
              child: ListView.builder(
                itemCount: _fruits.length,
                itemBuilder: (context, index) {
                  return ListTile(
                    leading: CircleAvatar(
                      child: Text('${index + 1}'),
                    ),
                    title: Text(_fruits[index]),
                    subtitle: Text('Item ${index + 1}'),
                    trailing: const Icon(Icons.arrow_forward_ios),
                    onTap: () {
                      _showSnackBar('Tapped on ${_fruits[index]}');
                    },
                  );
                },
              ),
            ),
          ),

          // GridView
          _buildCard(
            'GridView',
            SizedBox(
              height: 200,
              child: GridView.builder(
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  crossAxisSpacing: 8,
                  mainAxisSpacing: 8,
                ),
                itemCount: _vegetables.length,
                itemBuilder: (context, index) {
                  return Card(
                    child: InkWell(
                      onTap: () {
                        _showSnackBar('Tapped on ${_vegetables[index]}');
                      },
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            _vegetables[index],
                            style: const TextStyle(fontSize: 24),
                          ),
                          Text('Grid Item ${index + 1}'),
                        ],
                      ),
                    ),
                  );
                },
              ),
            ),
          ),

          // Expansion Tile
          _buildCard(
            'ExpansionTile',
            Column(
              children: [
                ExpansionTile(
                  title: const Text('Flutter Widgets'),
                  subtitle: const Text('Tap to expand'),
                  children: [
                    ListTile(
                      title: const Text('StatelessWidget'),
                      subtitle: const Text('Immutable widget'),
                    ),
                    ListTile(
                      title: const Text('StatefulWidget'),
                      subtitle: const Text('Mutable widget'),
                    ),
                    ListTile(
                      title: const Text('InheritedWidget'),
                      subtitle: const Text('Data sharing widget'),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildAdvancedTab() {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildSectionTitle('🚀 Advanced Features'),

          // State Management
          _buildCard(
            'State Management',
            Column(
              children: [
                Text(
                  'Counter: $_counter',
                  style: _currentTheme.textTheme.headlineMedium,
                ),
                const SizedBox(height: 16),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    FloatingActionButton(
                      heroTag: "decrement",
                      onPressed: () {
                        setState(() {
                          _counter--;
                        });
                        HapticFeedback.lightImpact();
                      },
                      child: const Icon(Icons.remove),
                    ),
                    FloatingActionButton(
                      heroTag: "increment",
                      onPressed: () {
                        setState(() {
                          _counter++;
                        });
                        HapticFeedback.lightImpact();
                      },
                      child: const Icon(Icons.add),
                    ),
                  ],
                ),
              ],
            ),
          ),

          // Loading States
          _buildCard(
            'Loading Indicator',
            Column(
              children: [
                ElevatedButton(
                  onPressed: _isLoading ? null : _simulateLoading,
                  child: _isLoading 
                    ? const SizedBox(
                        width: 20,
                        height: 20,
                        child: CircularProgressIndicator(strokeWidth: 2),
                      )
                    : const Text('Start Loading'),
                ),
                if (_isLoading) ...[
                  const SizedBox(height: 16),
                  const LinearProgressIndicator(),
                  const SizedBox(height: 8),
                  const Text('Loading...'),
                ],
              ],
            ),
          ),

          // Theme System
          _buildCard(
            'Theme System',
            Column(
              children: [
                Text('Current Theme: ${_isDarkTheme ? 'Dark' : 'Light'}'),
                const SizedBox(height: 16),
                ElevatedButton.icon(
                  onPressed: () {
                    setState(() {
                      _isDarkTheme = !_isDarkTheme;
                    });
                  },
                  icon: Icon(_isDarkTheme ? Icons.light_mode : Icons.dark_mode),
                  label: Text('Switch to ${_isDarkTheme ? 'Light' : 'Dark'} Theme'),
                ),
                const SizedBox(height: 16),
                // Color palette
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    _buildColorSwatch(Colors.blue, 'Primary'),
                    _buildColorSwatch(Colors.green, 'Success'),
                    _buildColorSwatch(Colors.red, 'Error'),
                    _buildColorSwatch(Colors.orange, 'Warning'),
                  ],
                ),
              ],
            ),
          ),

          // Navigation
          _buildCard(
            'Navigation',
            Column(
              children: [
                ElevatedButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => const DetailPage(),
                      ),
                    );
                  },
                  child: const Text('Navigate to Detail Page'),
                ),
                const SizedBox(height: 8),
                ElevatedButton(
                  onPressed: () {
                    _showBottomSheet();
                  },
                  child: const Text('Show Bottom Sheet'),
                ),
              ],
            ),
          ),

          // Device Info
          _buildCard(
            'Device Information',
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Platform: ${Theme.of(context).platform.name}'),
                Text('Screen Size: ${MediaQuery.of(context).size.width.toInt()} x ${MediaQuery.of(context).size.height.toInt()}'),
                Text('Device Pixel Ratio: ${MediaQuery.of(context).devicePixelRatio}'),
                Text('Text Scale Factor: ${MediaQuery.of(context).textScaleFactor}'),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSectionTitle(String title) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 16.0),
      child: Text(
        title,
        style: _currentTheme.textTheme.headlineSmall?.copyWith(
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }

  Widget _buildCard(String title, Widget content) {
    return Card(
      margin: const EdgeInsets.only(bottom: 16.0),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              title,
              style: _currentTheme.textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            content,
          ],
        ),
      ),
    );
  }

  Widget _buildColorSwatch(Color color, String label) {
    return Column(
      children: [
        Container(
          width: 40,
          height: 40,
          decoration: BoxDecoration(
            color: color,
            shape: BoxShape.circle,
          ),
        ),
        const SizedBox(height: 4),
        Text(label, style: const TextStyle(fontSize: 12)),
      ],
    );
  }

  void _showDialog(String message) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Button Pressed'),
          content: Text(message),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: const Text('OK'),
            ),
          ],
        );
      },
    );
  }

  void _showSnackBar(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        duration: const Duration(seconds: 2),
      ),
    );
  }

  void _simulateLoading() {
    setState(() {
      _isLoading = true;
    });

    Future.delayed(const Duration(seconds: 3), () {
      setState(() {
        _isLoading = false;
      });
      _showDialog('Loading completed!');
    });
  }

  void _showBottomSheet() {
    showModalBottomSheet(
      context: context,
      builder: (BuildContext context) {
        return Container(
          padding: const EdgeInsets.all(16),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Text(
                'Bottom Sheet',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 16),
              const Text('This is a modal bottom sheet!'),
              const SizedBox(height: 16),
              ElevatedButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                child: const Text('Close'),
              ),
            ],
          ),
        );
      },
    );
  }
}

// Detail page for navigation demonstration
class DetailPage extends StatelessWidget {
  const DetailPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Detail Page'),
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.star, size: 80, color: Colors.amber),
            SizedBox(height: 16),
            Text(
              'This is a detail page!',
              style: TextStyle(fontSize: 24),
            ),
            SizedBox(height: 16),
            Text(
              'Navigate back using the back button',
              style: TextStyle(fontSize: 16),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.pop(context);
        },
        child: const Icon(Icons.arrow_back),
      ),
    );
  }
}