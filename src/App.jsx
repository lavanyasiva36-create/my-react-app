import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'sans-serif' }}>
      <h1>Vanakam! My First React App</h1>
      <h2>Count value is: {count}</h2>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Click Me
      </button>
    </div>
  )
}

export default App