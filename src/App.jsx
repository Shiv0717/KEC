// src/App.jsx
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layouts/Layout";
import AdmissionKEC from "./pages/Admission";
import FacilitiesPage from "./pages/Facilities";
import ContactUs from "./pages/ContactUs";
import PlacementPage from "./pages/Placement";
import Notice from "./pages/Notice";
import Research from "./pages/Research";
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentDetails from "./pages/DepartmentDetails";
import NotFound from "./pages/NotFound";
import PageLoader from "./components/PageLoader";
import FacultyPage from "./pages/Faculty";
import MissionVision from "./pages/MissionVision";
import Governance from "./pages/Governance";
import PrincipalMessage from "./pages/PrincipalMessage";
import Infrastructure from "./pages/Infrastructure";
import AffiliationAccreditation from "./pages/AffiliationAccreditation";
import EventComponent from "./pages/EventComponent";
import PressMediaPage from "./pages/PressMediaPage";
import GalleryPage from "./pages/GalleryPage";
import ApplyNow from "./pages/ApplyNow";
import AlumniPage from "./pages/AlumniPage";
import Hod from "./pages/Hod";
import Courses from "./pages/Courses";
import Super40Form from "./pages/Super40Form";
import Super40ExamQuestions from "./pages/Super40ExamQuestions";
import Drone from "./pages/Drone";
import EV from "./pages/EV";
import AdvancedCodingRegistration from "./pages/Coding";
import ChargingTechnologyRegistration from "./pages/FastCharging";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLoader> <Layout /></PageLoader>,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactUs /> },
      { path: "departments", element: <DepartmentsPage/> },
      { path: "departments/:id", element: <DepartmentDetails/> },
      { path: "courses", element: <Courses/> },
      { path: "admission", element: <AdmissionKEC /> },
      { path: "facilities", element: <FacilitiesPage/> },
      { path: "placements", element: <PlacementPage/> },
      { path: "notice", element: <Notice/> },
      { path: "research", element: <Research/> },
      { path: "alumni", element: <AlumniPage/> },
      { path: "faculty", element: <FacultyPage/> },
      { path: "mission", element: <MissionVision/> },
      { path: "governance", element: <Governance/>},
      { path: "principal", element: <PrincipalMessage/>},
      { path: "infrastructure", element: <Infrastructure/>},
      { path: "hod", element: <Hod/>},
      { path: "affiliation", element:<AffiliationAccreditation/>},
      { path: "event", element:<EventComponent/>},
      { path: "press", element:<PressMediaPage/>},
      { path: "gallery", element:<GalleryPage/>},
      { path: "apply", element:<Super40Form/>},
      { path: "exam", element:<Super40ExamQuestions/>},
      { path: "drone", element:<Drone/>},
      { path: "ev", element:<EV/>},
      { path: "charging", element:<ChargingTechnologyRegistration/>},
      { path: "coding", element:<AdvancedCodingRegistration/>},
      { path: "*", element: <NotFound/> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
