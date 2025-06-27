import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing/Landing"
import Register from "./pages/Register"
import Partner from "./pages/Partner"
import Sponser from "./pages/Sponser"
import Join from "./pages/Join"

const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/join" element={<Join />} />
      <Route path="/partner" element={<Partner />} />
      <Route path="/register" element={<Register />} />
      <Route path="/sponser" element={<Sponser />} /> 
     </Routes>
    </div>
  )
}

export default App
