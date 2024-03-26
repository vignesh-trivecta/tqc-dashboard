import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./components/Dashboard/Layout";
import Templates from "./pages/Templates";
import Customers from "./pages/Customers";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import Auth from "./pages/Auth";
import Navbar from "./components/MainSite/Navbar";
import Footer from "./components/MainSite/Footer";
import Settings from "./pages/Settings";
// import { ThemeProvider } from "./components/theme-provider"

const LayoutWithNavbarAndFooter: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
        <Routes>
          <Route path='/' element={<LayoutWithNavbarAndFooter children={<Home />} />} />
          <Route path='/privacy-policies' element={<LayoutWithNavbarAndFooter children={<PrivacyPolicies />} />} />
          
          <Route path="/sign-in" element={<LayoutWithNavbarAndFooter children={<Auth />} />} />
          <Route path="/sign-up" element={<LayoutWithNavbarAndFooter children={<Auth />} />} />
          
          <Route path="/dashboard/*" element={<Layout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="templates" element={<Templates />} />
            <Route path="customers" element={<Customers />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
          {/* </ThemeProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
