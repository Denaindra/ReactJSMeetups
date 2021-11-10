import { Route, Routes } from "react-router-dom";

import AllMeetup from "./pages/AllMeetup";
import NewMeetup from "./pages/NewMeetup";
import Favourite from "./pages/Favourite";
import MainNavigation from "./componet/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetup />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favorites" element={<Favourite />} />
      </Routes>
    </div>
  );
}

export default App;
