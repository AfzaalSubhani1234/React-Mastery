
import { useState } from "react"

function App() {
  const [Quantity, setQuantity] = useState(1)
  const price = 1000
  const total = Quantity * price

  return (
    <>
      <h1>Price:{price}</h1>
      <h1>Total:{total}</h1>
      <h1>Quantity:{Quantity}</h1>

      <button onClick={() => setQuantity(Quantity + 1)}>Increase</button>
      <button onClick={() => setQuantity(Quantity > 0 ? Quantity - 1 : 0)}>Increase</button>
    </>
  )
}

export default App