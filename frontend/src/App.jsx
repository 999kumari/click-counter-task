import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = 'Click Counter';
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Click Counter</h1>
      <button name="click-increment" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p id="click-count">{count}</p>
    </div>
  );
}

export default App;