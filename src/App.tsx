import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { AdminView } from "./pages/AdminView";
import { HomeView } from "./pages/HomeView";
import { RegisterView } from "./pages/RegisterView";
import { TokenProvider } from "./pages/TokenContext";
import { UserView } from "./pages/UserView";


function App() {
  return (
    <>
    <TokenProvider>
      <h1>My App Token Provider</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />}/>
          <Route path="/register" element={<RegisterView />}/>
          <Route path="/users/:userId" element={<UserView />}/>
          <Route path="/admins/:adminId" element={<AdminView />}/>
        </Routes>
      </BrowserRouter>
    </TokenProvider>
    </>
  );
}

export default App;
