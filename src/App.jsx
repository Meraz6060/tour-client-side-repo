import { Outlet } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Footer from "./components/Layout/Footer";

function App() {

  return (
    < >
     <MainLayout>
        <Outlet/>
        <Footer/>
     </MainLayout>

    </>
  )
}

export default App;
