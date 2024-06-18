import "./App.css";
import {Routes, Route } from "react-router-dom";
import TimetableAdmin from "./components/TimetableAdmin";
import Navbar from "./components/Navbar";
import { VacantRooms } from "./components/VacantRooms";
import TeachersAbsentAdmin from "./components/TeachersAbsentAdmin";
import TeachersAbsent from "./components/TeachersAbsent";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";
import Timetable from "./components/Timetable";
import TeacherRegister from "./components/TeacherRegister";
import Footer from "./components/Footer";
import AddRoom from "./components/AddRoom";
import { Toaster } from "./components/ui/sonner";
import { useTheme } from "./context/ThemeProvider";
import { BookRoom } from "./components/BookRoom";
import LandingPage from "./components/LandingPage";
function App() {
  const { theme } = useTheme();
  return (
    <>
      <Navbar />
      <Toaster richColors theme={theme} />
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<TimetableAdmin />} path="/admin/timetable" />
        <Route element={<TeachersAbsentAdmin />} path="/admin/teachersabsent" />
        <Route element={<TeacherRegister />} path="/admin/register" />
        <Route element={<AddRoom />} path="/admin/addroom" />
        <Route element={<BookRoom />} path="/bookroom" />

        <Route element={<Timetable />} path="/timetable" />
        <Route element={<VacantRooms />} path="/available-rooms" />
        <Route element={<LandingPage />} path="/" />
        <Route element={<TeachersAbsent />} path="/teachersabsent" />

        <Route element={<ErrorPage />} path="/*" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
