import { useState } from "react"

export function App() {
  const [contador, setContador] = useState(0)

  return (
    <>
    <button onClick={() => setContador(contador + 1)}>Contar + 1</button>
    <h1>{contador}</h1>
    </>
  )
}
