import { Routes, Route, BrowserRouter  } from "react-router-dom"
import Homepage from "./components/HomePage/Homepage"
import PyQ from "./components/Pages/PyQ"
import JsQ from "./components/Pages/JsQ"
import ReactQ from "./components/Pages/ReactQ"
import Homecontents from "./components/HomePage/Homecontents"
import Errorpage from "./components/Pages/Errorpage"
import HowTos from "./components/Pages/HowTos"
import Category from "./components/Pages/Category"

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Homepage />
        <Routes>
          <Route path="/" exact element={<Homecontents />} />
          <Route path="/jsq" element={<JsQ />} />
          <Route path="/pyq" element={<PyQ />} />
          <Route path="/reactq" element={<ReactQ />} />
          <Route path="/howto" element={<HowTos />}/>
          <Route path="*" element={<Errorpage />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
    )
}

export default App