import 'package:flutter/material.dart';
import 'package:nfmovies/detail.dart';

void main() {
  runApp(MainApp());
}

class MainApp extends StatelessWidget {


  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: "/",
      routes: {
        '/': (context) => Ctx(),
      },
    );
  }
}
