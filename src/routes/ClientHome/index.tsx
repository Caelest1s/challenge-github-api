import { Outlet } from "react-router-dom";
import HeaderClient from "../../component/HeaderClient";

export default function ClientHome() {
  return (
    <>
      <HeaderClient />
      <Outlet />
    </>
  )
}

