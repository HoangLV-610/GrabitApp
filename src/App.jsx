import "./App.css";

import useRoutesCustom from "./routes/useRoutes";
function App() {
  const routes = useRoutesCustom();
  return routes;
}

export default App;
