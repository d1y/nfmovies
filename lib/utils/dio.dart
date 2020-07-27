
import 'package:dio/dio.dart';
import 'package:nfmovies/config/const.dart';

BaseOptions options = new BaseOptions(
  baseUrl: ConstKey.baseUrl,
  connectTimeout: 5000 * 6,
  receiveTimeout: 3000 * 4,
  headers: {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
  }
);

Dio dio = new Dio(options);