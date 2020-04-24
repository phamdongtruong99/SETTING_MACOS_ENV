import 'package:auto_route/auto_route_annotations.dart';

@autoRouter
class $Router {
  @initial
  InitialPage initialPage;
  @MaterialRoute(fullscreenDialog: true)
  SecondPage secondPage;
  ThirdPage thirdPage;
}

// https://www.youtube.com/watch?v=iVpVBmDhpJY
