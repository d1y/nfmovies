import 'package:flutter/material.dart';
import 'package:nfmovies/api/nfmovies.dart';

void main() {
  runApp(MainApp());
}

class MainApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Container(
          child: ListView(
        children: <Widget>[
          GestureDetector(
            onTap: () {
              NfmoviesApi.getIndexData();
            },
            child: Text("人才"),
          )
        ],
      )),
      // initialRoute: "/",
      // routes: {
      //   '/': (context) => Ctx(),
      // },
    );
  }
}
