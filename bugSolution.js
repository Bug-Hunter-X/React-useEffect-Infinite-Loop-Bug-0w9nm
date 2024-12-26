```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: This will only run once on mount
    setCount(count + 1);
  }, [count]); // Added count to the dependency array

  return <div>Count: {count}</div>;
}
```