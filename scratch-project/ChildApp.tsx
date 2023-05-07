import React, { useState } from 'react'
import './App.css'

type IProps = {
    count: number;
    text: string;
}

function ChildApp(props: IProps) {
  const [count, setCount] = useState(0)
  console.log('ChildApp render', props, count);

  return (
    <>
      <h1>Vite + React: child</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          child count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

const equal = (preProps: IProps, nextProps: IProps) => {
    return preProps.text === nextProps.text
}

export const MemoChildAPP =  ChildApp ;//React.memo(ChildApp, equal)
