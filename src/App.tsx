import { useState } from "react"
import { MyNameIs } from './components/MyNameIs'

export function App() {
  const [contador, setContador] = useState(0)
 
  return (
    <>
      <button onClick={() => setContador(contador + 1)}>Contar + 1</button>
      <h1>{contador}</h1>
      <MyNameIs name="Matheus" age={16} />
      <MyNameIs name="Raul"  />
      <MyNameIs name="Bruno" />
      <MyNameIs name="Luan" />
    </>
  )
}
