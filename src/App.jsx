import { MaterialNavbar } from "./componnent"
import RoutePath from "./routes"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <MaterialNavbar>
        <Routes>
          {
            RoutePath.map((stack, index) => (
              <Route key={index} path={stack.path} element={stack.element} handle={{name: stack.name}} />
            ))
          }
        </Routes>
      </MaterialNavbar>
    </BrowserRouter>
  )
}

export default App
