import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MemoChildAPP as ChildApp } from './ChildApp';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const handleClick = () => {
    setCount((count) => count + 1);
    // const testRef = document.getElementById('test');
    // console.log('rect', testRef?.getClientRects());
    // if (testRef) {
    //   testRef.style.margin = `${count * 10} px`;
    // }
   
  }
  console.log('App render', count);

  return (
    <>
      <div id='test' style={{margin: `${count * 10} px`}}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR { count }
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ChildApp count={count} text={text}/>
    </>
  )
}

export default App
