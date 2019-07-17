# SETTING FOR VSCODE

## 1.DOWNLOAD EXTENSIONS:

- Live server
- React Native Full Pack
- Setting Sync
- Project snippets

## 2.DOWLOAD:

- FONT FIRACODE

## 3.HOW TO SYNC VSCODE:

## 4.HOW TO USE CODE SNIPPETS

Create these folders in your project .vscode/snippets/.

Inside here you can add any of your VSCode snippet .json files, like javascript.json and this will then be available to use inside your project!

```javascript
  {
  "const initialState = {}; const reducer = (state, action)": {
    "prefix": "rsr",
    "body": [
      "const initialState = {",
      "  //$1",
      "}",
      "",
      "const reducer = (state, action) => {",
      "  switch (action.type) {",
      "    default:",
      "      return state",
      "  }",
      "}"
      ]
    }
  }
```
