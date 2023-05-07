import React, { useState } from 'react'
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
        hello
      </div>
      <h1>start from scratch</h1>
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
