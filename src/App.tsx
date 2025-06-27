import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register";
import Partner from "./pages/Partner";
import Sponser from "./pages/Sponser";
import Join from "./pages/Join";
import Layout from "./components/Layouts/Layout";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import TermsAndConditions from "./pages/TermsConditions";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/join" element={<Join />} />
          <Route path="/partners" element={<Partner />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sponsers" element={<Sponser />} />
          <Route path="/privacy-policies" element={<PrivacyPolicies />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
