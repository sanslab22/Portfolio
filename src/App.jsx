import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import Cursor from "./components/Cursor"

function App() {
  return (
  <> 
  <Cursor />
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter> </>
  )
}

export default App
