import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { AdminView } from "./pages/AdminView";
import { ApartmentView } from "./pages/ApartmentView";
import { BlockView } from "./pages/BlockView";
import { HomeView } from "./pages/HomeView";
import { ProfileView } from "./pages/ProfileView";
import { RegisterView } from "./pages/RegisterView";
import { UserProvider, useUserState } from "./pages/UserContext";
import { UserView } from "./pages/UserView";


function App() {
  return (
    <>
      <UserProvider>
        <Wrapper apiKey={"AIzaSyA8aeTS3RDIvBQE_uPWeBrRJ9WyYTUB644"}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/register" element={<RegisterView />} />
              <Route path="/profile/:userId" element={<ProfileView />} />
              <Route path="/users/:userId" element={<UserView />} />
              <Route path="/admins/:adminId" element={<AdminView />} />
              <Route path="/apartment/:apartmentId" element={<ApartmentView />} />
              <Route path="/tenantAssociation/:tenantAssociationId" element={<BlockView />} />
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </UserProvider>
    </>
  );
}

export default App;
