import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Products } from "./pages/Products"
import { Basket } from "./pages/Basket"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="products" element={<Products />} />
          <Route path="basket" element={<Basket />} />
          <Route path="*" element={<h2>hello</h2>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
