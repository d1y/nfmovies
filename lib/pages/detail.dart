import 'package:flutter/material.dart';
import 'package:flutter_ijkplayer/flutter_ijkplayer.dart';

class Ctx extends StatelessWidget {

  IjkMediaController controller = IjkMediaController();

  @override
  Widget build(BuildContext context) {

    var url = "https://youku.cdn10-okzy.com/20200418/14006_bac131ae/index.m3u8";
    controller.setNetworkDataSource(url);

    return Scaffold(
      body: Container(
        child: IjkPlayer(
          mediaController: controller,
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.search),
            title: Text("search"),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            title: Text("home"),
          ),
        ]
      ),
    );
  }
}
