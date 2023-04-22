import { Link } from "react-router-dom";
import s from "./projects.module.scss";
import Navbar from "../../Components/UI/Navbvar/navbar";
type Props = {};

const Projects = (props: Props) => {
  return (
    <div className={s.projects}>
      <Navbar />
      <div className={s.projectsD}>
        <section className={s.section1}>
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>Todo list</h3>
              <Link to={"https://vasiliy19-12-1997.github.io/todoList"}>
                Todo App
              </Link>
              <img
                src="https://user-images.githubusercontent.com/102950888/232326591-2e207e87-6830-4462-924d-d18840e47670.png"
                alt="Project 1"
                width={1000}
                height={500}
              />
              <img
                src="https://user-images.githubusercontent.com/102950888/232326070-212d9c73-076f-45ba-9e64-106284c7d2f6.png"
                alt="Project 1"
                width={1000}
                height={300}
              />
            </li>
          </ul>
        </section>
        <section className={s.section2}>
          <ul>
            <li>
              <h3>Weather</h3>
              <Link to={"https://vasiliy19-12-1997.github.io/Weather"}>
                Weather
              </Link>
              <img
                src="https://user-images.githubusercontent.com/102950888/229137523-ab35f89a-63b5-47c1-ad22-c3cbc9ef4c38.png"
                alt="Project 3"
                width={1000}
                height={500}
              />
              <img
                src="https://user-images.githubusercontent.com/102950888/229137847-784b5f77-9364-46f4-a2ac-dd618bab9dd7.png"
                alt="Project 3"
                width={1000}
                height={500}
              />
              <img
                src="https://user-images.githubusercontent.com/102950888/229138065-e8af66d3-9846-478f-80f7-661e50452b04.png"
                alt="Project 3"
                width={1000}
                height={500}
              />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Projects;
