import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Student from "./pages/Student";
import Admin from "./pages/admin";
import Teacher from "./pages/Teacher";
import TeachersList from "./components/lists/TeachersList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "admin",
        element: <Admin />,
        errorElement: <h1></h1>,
      },
      {
        path: "student",
        element: <Student />,
        errorElement: <h1></h1>,
      },
      {
        path: "teacher",
        element: <Teacher />,
        errorElement: <h1></h1>,
      },
      {
        path: "/list/teachers",
        element: <TeachersList />
       }
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <h1></h1>,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <h1></h1>,
  },
]);

export default router;
