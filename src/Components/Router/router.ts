import About from "../../Pages/About/about";
import Contact from "../../Pages/Contact/contact";
import Profile from "../../Pages/Profile/profile";
import Projects from "../../Pages/Projects/projects";
import Shop from "../../Pages/Shop/shop";

export const privateRoutes = [
  { path: "/profile", element: Profile },
  { path: "/about", element: About },
  { path: "/contact", element: Contact },
  { path: "/projects", element: Projects },
  { path: "/shop", element: Shop },
];
// export const publicRoutes = [{ path: "/login", element: Login }];
