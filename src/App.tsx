import { Route, Routes } from "react-router-dom";

import Landing from "@/Pages/Landing/Landing";
// import Register from "./pages/Register";
import PartnerInterest from "@/Pages/Landing/Form/Partner";
import Sponser from "@/Pages/Sponser";
import Join from "@/Pages/Landing/Form/Join/Join";
import Layout from "@/components/Layouts/Layout";
import Register from "@/Pages/Landing/Form/Register";

// import Sponser from "./Pages/Sponser";
// import Join from "./Pages/Join";
// import Layout from "./components/Layouts/Layout";

// import PrivacyPolicies from "./pages/PrivacyPolicies";
// import TermsAndConditions from "./pages/TermsConditions";
// import NotFoundPage from "./pages/NotFoundPage";

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
