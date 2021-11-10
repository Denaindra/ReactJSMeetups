import { Route, Routes } from "react-router-dom";

import AllMeetup from "./pages/AllMeetup";
import NewMeetup from "./pages/NewMeetup";
import Favourite from "./pages/Favourite";
import MainNavigation from "./componet/layout/MainNavigation";
import Layout from "./componet/layout/Layout";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <MainNavigation />
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetup />} />
          <Route path="/new-meetup" element={<NewMeetup />} />
          <Route path="/favorites" element={<Favourite />} />
        </Routes>
      </Layout>
    </React.Fragment>
  );
}

export default App;
