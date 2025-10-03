import 'package:flutter/material.dart';
import 'widgets/fundamentals_page.dart';

void main() {
  runApp(const FlutterFundamentalsApp());
}

class FlutterFundamentalsApp extends StatelessWidget {
  const FlutterFundamentalsApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Fundamentals',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        useMaterial3: true,
      ),
      home: const FundamentalsPage(),
      debugShowCheckedModeBanner: false,
    );
  }
}
