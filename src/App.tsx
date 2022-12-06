import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import '@/assets/css/app.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <img src={reactLogo} alt="react logo" />
    </div>
  );
}

export default App;
