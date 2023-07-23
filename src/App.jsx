import Footer from "./common/Footer/Footer";
import Navbar from "./common/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers/Routers";
import FloatingIcon from "./utils/FlotingIcon/FloatingIcon";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Start all Routers */}
      <Routers />
      {/* End all Routers */}
      <FloatingIcon />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
