import About from "../../Pages/About/about";
import Contact from "../../Pages/Contact/contact";
import Login from "../../Pages/Login/login";
import Profile from "../../Pages/Profile/profile";
import Projects from "../../Pages/Projects/projects";

export const privateRoutes = [
  { path: "/profile", element: Profile },
  { path: "/about", element: About },
  { path: "/contact", element: Contact },
  { path: "/projects", element: Projects },
];
export const publicRoutes = [{ path: "/login", element: Login }];
