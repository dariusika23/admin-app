import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { AdminView } from "./pages/AdminView";
import { HomeView } from "./pages/HomeView";
import { RegisterView } from "./pages/RegisterView";
import { UserProvider, useUserState } from "./pages/UserContext";
import { UserView } from "./pages/UserView";


function App() {
  return (
    <>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />}/>
          <Route path="/register" element={<RegisterView />}/>
          <Route path="/profile" element={<UserView />}/>
          <Route path="/users/:userId" element={<UserView />}/>
          <Route path="/admins/:adminId" element={<AdminView />}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
    </>
  );
}

export default App;
