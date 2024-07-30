import './App.css'
import { useCcc } from '@ckb-ccc/connector-react'

function App() {
  const {open,wallet} = useCcc();
  console.log(wallet)

  return (
    <>
      <button onClick={open} style={{
        color:' red'
      }}>Connect</button>
    </>
  )
}

export default App
