import { useEffect } from "react";
import "./App.css";

import useRoutesCustom from "./routes/useRoutes";

function App() {
  useEffect(() => {
    import("./index.scss");
  }, []);
  const routes = useRoutesCustom();
  return routes;
}

export default App;
