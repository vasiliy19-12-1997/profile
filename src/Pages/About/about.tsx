import { FC } from "react";
import s from "./about.module.scss";
import Navbar from "../../Components/UI/Navbvar/navbar";
import kmImage from "../../Components/Assets/Images/kmImage.png";
import laptop from "../../Components/Assets/Images/laptop.png";
import { Link } from "react-router-dom";
type Props = {};

const About: FC = (props: Props) => {
  return (
    <div className={s.about}>
      <Navbar />
      <div className={s.aboutD}>
        {/* <section className="intro">
        <h2>About Me</h2>
       
        <p>
          My name is Vasiliy Konovalov and I'm a frontend developer who loves
          active life and self-development. I've been coding for over 0.5 year
          and have experience in JS, TS, React. When I'm not coding, you'll find
          me playing footbal or tennis with my friends. Besides sports, I am
          also interested in investing and learning something new.
        </p>
      </section> */}
        {/* <section>
        <div className="profile-section">
          <h3 className="profile-section-title">Hard skills</h3>
          <ul className="profile-list">
            <li className="profile-list-item">HTML/CSS</li>
            <li className="profile-list-item">JavaScript</li>
            <li className="profile-list-item">React</li>
            <li className="profile-list-item">Typescript</li>
            <li className="profile-list-item">MobX</li>
            <br />
            <h3 className="profile-section-title">Soft skills</h3>
            <li className="profile-list-item">English B2</li>
            <li className="profile-list-item">Scrum</li>
            <li className="profile-list-item">
              SOLID principles understanding
            </li>
            <li className="profile-list-item">Easy-going</li>
            <li className="profile-list-item">
              Aspiration to self-developing. By the way I like to read books by
              Brian Tracy
            </li>
            <li className="profile-list-item">
              Also like fitness and football, play tennis, swimming and another
              sport
            </li>
          </ul>
        </div>
      </section> */}

        <section className={s.section1}>
          <div className={s.main}>
            <h1>We Code We Deliver</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis sit tempora minima aut voluptatibus explicabo optio
              recusandae non esse nesciunt consequatur porro, nihil, debitis
              repudiandae dolores illum culpa hic ipsa!
            </p>
          </div>
          <img src={kmImage} alt="Vasiliy Konovalov" />
        </section>
        <section className={s.section2}>
          <div className={s.do}>
            <div>
              <img src={laptop} alt="laptop" />
            </div>
            <div className={s.doText}>
              <h1>What we do</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis iure possimus hic animi distinctio porro dolorum soluta
                in quae deserunt facere libero, consequuntur officia? Tempora
                excepturi debitis nisi unde omnis?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis iure possimus hic animi distinctio porro dolorum soluta
                in quae deserunt facere libero, consequuntur officia? Tempora
                excepturi debitis nisi unde omnis?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis iure possimus hic animi distinctio porro dolorum soluta
                in quae deserunt facere libero, consequuntur officia? Tempora
                excepturi debitis nisi unde omnis?
              </p>
            </div>
          </div>
        </section>
        <section className={s.section3}>
          <div>
            <h1>Gym</h1>
          </div>
        </section>
        <section className={s.footer}>
          <ul>
            <li>
              <Link to={"/projects"}>Faq</Link>
            </li>
            <li>
              <Link to={"/projects"}>Explore</Link>
            </li>
            <li>
              <Link to={"/projects"}>Join GitHub</Link>
            </li>
            <li>
              <Link to={"/projects"}>Become a Parner</Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
