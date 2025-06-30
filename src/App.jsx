import Navigation from "./components/Navigation";
import { Outlet } from "react-router";
export default function App() {
  return (
    <>
      <Navigation />
      <div className="pb-8">
        <Outlet />
      </div>
    </>
  );
}
