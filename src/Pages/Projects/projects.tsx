import { Link } from "react-router-dom";
import Footer from "../../Components/UI/Footer/footer";
import Navbar from "../../Components/UI/Navbvar/navbar";
import s from "./projects.module.scss";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className={s.projects}>
      <Navbar />
      <div className={s.projectsD}>
        <section className={s.section1}>
          <h1>Projects</h1>
          <h2>Todo list</h2>
          <div className={s.section1D}>
            <div></div>

            <div className={s.section1DImg}>
              <img
                src="https://user-images.githubusercontent.com/102950888/232326070-212d9c73-076f-45ba-9e64-106284c7d2f6.png"
                alt="Project 1"
                width={1000}
                height={250}
              />

              <img
                src="https://user-images.githubusercontent.com/102950888/232326591-2e207e87-6830-4462-924d-d18840e47670.png"
                alt="Project 1"
                width={1000}
                height={450}
              />
            </div>

            <div className={s.section1DText}>
              <Link to={"https://vasiliy19-12-1997.github.io/todoList"}>
                Todo App
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                repellendus sed aut sit, quaerat adipisci unde. Excepturi porro
                expedita culpa. Perferendis est dicta cum impedit consequatur
                accusamus quas voluptates autem? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quasi, sed illo expedita eligendi
                aliquid excepturi laudantium praesentium eius porro libero,
                dicta inventore minus similique odit numquam explicabo ut natus.
                Aut.
              </p>
            </div>
            <div></div>
          </div>
        </section>
        <section className={s.section2}>
          <h2>Weather</h2>
          <div className={s.section2D}>
            <div></div>
            <div className={s.section2DImg}>
              <img
                src="https://user-images.githubusercontent.com/102950888/229137523-ab35f89a-63b5-47c1-ad22-c3cbc9ef4c38.png"
                alt="Project 3"
                width={1200}
                height={600}
              />
              <img
                src="https://user-images.githubusercontent.com/102950888/229137847-784b5f77-9364-46f4-a2ac-dd618bab9dd7.png"
                alt="Project 3"
                width={1200}
                height={600}
              />
              <img
                src="https://user-images.githubusercontent.com/102950888/229138065-e8af66d3-9846-478f-80f7-661e50452b04.png"
                alt="Project 3"
                width={1200}
                height={600}
              />
              <div className={s.section2DText}>
                <Link to={"https://vasiliy19-12-1997.github.io/Weather"}>
                  Weather
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  quo, commodi sit tempora, earum, quas consectetur quidem ab
                  dignissimos eius asperiores dolor ut non. Aliquid fugit nisi
                  mollitia cumque minima!
                </p>
              </div>
            </div>
          </div>

          <div></div>
        </section>
        <section className={s.section3}></section>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
