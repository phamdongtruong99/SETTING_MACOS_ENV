class TextValidator {
  bool validateUsername(String username) {
    return username.length >= 8;
  }

  bool validatePassword(String password) {
    String pattern = r'^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{8,}$';
    return RegExp(pattern).hasMatch(password) && password.length >= 8;
  }
}
