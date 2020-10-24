## [JS_String.prototype.replaceAll()
```
// Old 🙅🏻‍♀️
'q=query+string+parameters'.replace(/\+/g, ' ');
// 'q=query string parameters'

// New 🎉, using `.replaceAll()`
'q=query+string+parameters'.replaceAll('+', ' ');
// 'q=query string parameters'
``` 


## [JS_Numeric separator](https://github.com/tc39/proposal-numeric-separator)
```
1_000_000_000           // Ah, so a billion
101_475_938.38          // And this is hundreds of millions

let fee = 123_00;       // $123 (12300 cents, apparently)
let fee = 12_300;       // $12,300 (woah, that fee!)
let amount = 12345_00;  // 12,345 (1234500 cents, apparently)
let amount = 123_4500;  // 123.45 (4-fixed financial)
let amount = 1_234_500; // 1,234,500
```
## [TS_Template Literal Types](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#template-literal-types)
```
function setVerticalAlignment(color: "top" | "middle" | "bottom") {
    // ...
}

setVerticalAlignment("middel");
//                   ~~~~~~~~
// error: Argument of type '"middel"' is not assignable to
//        parameter of type '"top" | "middle" | "bottom"'.
```
```
type Options = {
    [K in "noImplicitAny" | "strictNullChecks" | "strictFunctionTypes"]?: boolean
};
// same as
//   type Options = {
//       noImplicitAny?: boolean,
//       strictNullChecks?: boolean,
//       strictFunctionTypes?: boolean
//   };
```
```
type VerticalAlignment = "top" | "middle" | "bottom";
type HorizontalAlignment = "left" | "center" | "right";

// Takes
//   | "top-left"    | "top-center"    | "top-right"
//   | "middle-left" | "middle-center" | "middle-right"
//   | "bottom-left" | "bottom-center" | "bottom-right"
declare function setAlignment(value: `${VerticalAlignment}-${HorizontalAlignment}`): void;

setAlignment("top-left");   // works!
setAlignment("top-middel"); // error!
setAlignment("top-pot");    // error! but good doughnuts if you're ever in Seattle
```
```
type EnthusiasticGreeting<T extends string> = `${uppercase T}`

type HELLO = EnthusiasticGreeting<"hello">;
// same as
//   type HELLO = "HELLO";
```
## [TS_Key Remapping in Mapped Types](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#key-remapping-mapped-types)
```
type RemoveKindField<T> = {
    [K in keyof T as Exclude<K, "kind">]: T[K]
};

interface Circle {
    kind: "circle";
    radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;
// same as
//   type KindlessCircle = {
//       radius: number;
//   };
```
## [TS_Recursive Conditional Types](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#recursive-conditional-types)
```
// Checking if it's really there first.
if (opts.yadda) {
    console.log(opts.yadda.toString());
}


// Basically saying "trust me I know what I'm doing"
// with the '!' non-null assertion operator.
opts.yadda!.toString();
```

