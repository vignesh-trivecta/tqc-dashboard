import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Dashboard/Layout";
import Templates from "./pages/Templates";
import Customers from "./pages/Customers";
// import { ThemeProvider } from "./components/theme-provider"


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
        <Routes>
          <Route path="/dashboard/*" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="templates" element={<Templates />} />
            <Route path="customers" element={<Customers />} />
          </Route>
        </Routes>
          {/* </ThemeProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
