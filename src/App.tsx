import { BrowserRouter, Route, Routes } from "react-router-dom"
import ClientHome from "./routes/ClientHome"
import Welcome from "./routes/ClientHome/Welcome"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />} >
            <Route index element={<Welcome />} />
            <Route path="initial" element={<Welcome />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App