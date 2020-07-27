/// Author: d1y<chenhonzhou@gmail.com>

import 'package:html/parser.dart' show parse;
import 'package:html/dom.dart';

import 'package:dio/dio.dart';
import 'package:nfmovies/config/const.dart';
import 'package:nfmovies/utils/dio.dart';

/// `nf` 接口
class NfmoviesApi {
  /// 获取首页数据
  static getIndexData() async {
    try {
      var x = ConstKey.baseUrl;
      Response res = await dio.get("$x/");
      String data = res.data;
      Document documnet = parse(data);
      List<Element> lists =
          documnet.querySelectorAll('.myui-vodlist__box#slide');
      print(lists);
    } catch (e) {
      throw (e);
    }
  }

  /// 获取单个电影的(id)的详细信息
  static getDetailDataByID(String id) {}

  /// 搜索
  static searchMoviesByWord(String word) {}
}
