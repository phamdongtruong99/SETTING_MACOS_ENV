# LINT

## I/HOW TO USE STYLELINT

### 1.FOR STYLED COMPONENT:

Add a .stylelintrc file to the root of your project:

```javascript
{
  "processors": [
    "stylelint-processor-styled-components"
  ],
  "extends": [
    "stylelint-config-recommended",
    "stylelint-config-styled-components"
  ]
}
```

Then you need to run stylelint. Add a lint:css script to your package.json which runs stylelint with a glob to all of your styled components:

```javascript
{
  "scripts": {
    "lint:css":"stylelint './src/**/*.js'"
  }
}
{
  "scripts": {
    "lint:css":"stylelint './src/**/*.js'"
  }
}
```

#### NOTE

The processor ignores javascript files that don't contain any styled-components, so don't worry about being too broad as long as you restrict it to javascript (or TypeScript).

Now you can lint your CSS by running the script! 🎉

```javascript
 npm run lint:css
```
