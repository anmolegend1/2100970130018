import { useState } from 'react'
import AllProductsPage from './AllProductsPage'
import ProductCard from './ProductCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AllProductsPage></AllProductsPage>
    <ProductCard></ProductCard>
    </>
  )
}

export default App
