import React from "react";

type Props = {};

const Projects = (props: Props) => {
  return (
    <>
      {" "}
      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="#">
              <img
                src="https://user-images.githubusercontent.com/102950888/224048219-b5b25f6e-96ae-4ac3-81ca-8b65a928f51c.png"
                alt="Project 1"
                width={300}
              />
            </a>
            <h3>Todo list</h3>
            <p>Todo list</p>
          </li>
          <li>
            <a href="#">
              <img src="weather_main" alt="Project 2" width={300} />
            </a>
            <h3>Weather</h3>
            <p>Weather</p>
          </li>
          <li>
            <a href="#">
              <img src="https://via.placeholder.com/300x200" alt="Project 3" />
            </a>
            <h3></h3>
            <p>soon...</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Projects;
