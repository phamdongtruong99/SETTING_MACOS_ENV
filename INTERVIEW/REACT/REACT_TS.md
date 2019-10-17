## How to add type to React Function componet?

```jsx
const App: React.FC<{ message: string }> = ({ message }) => (
  <div>{message}</div>
);
```
