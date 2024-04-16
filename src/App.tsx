import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import ClientHome from "./routes/ClientHome"
import GithubSearch from "./routes/ClientHome/GithubSearch"
import Welcome from "./routes/ClientHome/Welcome"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />} >
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<Welcome />} />
            <Route path="search" element={<GithubSearch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App