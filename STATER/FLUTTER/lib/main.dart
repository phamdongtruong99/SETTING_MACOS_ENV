import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter/flutter_localizations.dart';
import 'package:easy_localization/easy_localization.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    var data = EasyLocalizationProvider.of(context).data;
    // This is tip for lock rotate screen
    SystemChrome.setPreferredOrientations(
        [DeviceOrientation.portraitUp, DeviceOrientation.portraitDown]);

    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle(
        statusBarColor: Colors.white,
        statusBarIconBrightness: Brightness.dark,
        systemNavigationBarColor: Colors.deepOrange,
        systemNavigationBarIconBrightness: Brightness.dark));

    return EasyLocalizationProvider(
      data: data,
      child: MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        debugShowCheckedModeBanner: false,
        home: MyHomePage(),
        routes: {
          '/login': (context) => LoginPage(),
          '/feed': (context) => FeedPage(),
          '/details': (context) => FeedPage(),
        },
        localizationsDelegates: [
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocations.delegate,
          EasyLocalizationDelegate(locale: data.locale, path: 'assets')
        ],
        supportedLocales: [
          Locale('en', 'US'),
          Locale('zh', 'HK'),
        ],
      ),
    );
  }
}
