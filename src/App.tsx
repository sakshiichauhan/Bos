import { Route, Routes } from "react-router-dom";

import Landing from "@/pages/Landing/Landing";
import PartnerInterest from "@/pages/Landing/Form/Partner";
import Sponser from "@/pages/Sponser";
import Join from "@/pages/Landing/Form/Join/Join";
import Layout from "@/components/Layouts/Layout";
import Register from "@/pages/Landing/Form/Register";


const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/join" element={<Join />} />
            <Route path="/sponsers" element={<Sponser/>} />
              <Route path="/partners" element={<PartnerInterest/>}/>
                <Route path="/register" element={<Register/>}/>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
