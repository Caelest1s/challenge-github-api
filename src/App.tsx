import { Outlet } from "react-router-dom"
import Header from "./routes/Header"

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App