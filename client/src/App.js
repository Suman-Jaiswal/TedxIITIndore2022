import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import SpeakersPage from "./pages/SpeakersPage/SpeakersPage";
import Speaker1 from "./pages/SpeakersPage/Speaker1";
import Speaker2 from "./pages/SpeakersPage/Speaker2";
import Speaker3 from "./pages/SpeakersPage/Speaker3";
import Speaker4 from "./pages/SpeakersPage/Speaker4";
import TalksPage from "./pages/TalksPage/TalksPage";
import TeamPage from "./pages/TeamPage/TeamPage";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/speakers' element={<SpeakersPage />} />
                <Route path='/talks' element={<TalksPage />} />
                <Route path='/team' element={<TeamPage />} />
                
               <Route  path="/speaker1" element={<Speaker1 />} />
               <Route  path="/speaker2" element={<Speaker2 />} />
               <Route  path="/speaker3" element={<Speaker3 />} />
               <Route  path="/speaker4" element={<Speaker4 />} />
            </Routes>
        </>
    );
}

export default App;
