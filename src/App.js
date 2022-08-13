import Home from "./routes/home/Home.components";
import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation/Navigation.component";
import Shop from "./routes/shop/Shop.component.jsx";
import SignIn from "./routes/signIn/SignIn.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
