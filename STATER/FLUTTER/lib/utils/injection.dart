import 'package:injectable/injectable.dart';

@injectableInit
void configureInjection(String environment) =>
    $initGetIt(environment: environment);

abstract class Env {
  static const String dev = 'dev';
  static const String prod = 'prod';
}
