import { FC } from "react";
import Footer from "../../Components/UI/Footer/footer";
import Navbar from "../../Components/UI/Navbvar/navbar";
import s from "./about.module.scss";
import kmImage from "../../Assets/Images/kmImage.png";
import laptop from "../../Assets/Images/laptop.png";
import gym from "../../Assets/Images/gym.png";
import nornikel from "../../Assets/Images/Km/nornikel.png";
import balokovo from "../../Assets/Images/Km/balokovo.png";
import tekla from "../../Assets/Images/Km/tekla.png";
import vmz from "../../Assets/Images/Km/vmz.png";
type Props = {};

const About: FC = (props: Props) => {
  return (
    <div className={s.about}>
      <Navbar />
      <div className={s.aboutD}>
        <section className={s.section1}>
          <div className={s.main}>
            <h1>We Code We Deliver</h1>
            <p>
              My name is Vasiliy Konovalov and I'm a frontend developer who
              loves active life and self-development. I've been coding for over
              0.5 year and have experience in JS, TS, React. When I'm not
              coding, you'll find me playing footbal or tennis with my friends.
              Besides sports, I am also interested in investing and learning
              something new.
            </p>
          </div>
          <img src={kmImage} alt="Vasiliy Konovalov" />
        </section>
        <section className={s.section2}>
          <div className={s.do}>
            <div></div>
            <div>
              <img src={laptop} alt="laptop" />
            </div>
            <div className={s.doText}>
              <h1>My skills</h1>
              <div>
                <ul>
                  <h3>Hard skills</h3>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Typescript</li>
                  <li>MobX</li>
                  <br />
                  <ul></ul>
                  <h3>Soft skills</h3>
                  <li>English B2</li>
                  <li>Scrum</li>
                  <li>SOLID principles understanding</li>
                  <li>Easy-going</li>
                  <li>
                    Aspiration to self-developing. By the way I like to read
                    books by Brian Tracy
                  </li>
                  <li>
                    Also like fitness and football, play tennis, swimming and
                    another sport
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        </section>
        <section className={s.gym}>
          <div className={s.gymD}>
            <h1>Gym</h1>
            <div className={s.gymText}>
              <div></div>
              <img src={gym} alt="gym" width={"600px"} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                molestiae molestias tempora repellat ducimus quos sunt?
                Obcaecati delectus quae rerum architecto. Doloribus sed incidunt
                quo, ipsam error ea. Voluptate, deserunt.
              </p>
              <div></div>
            </div>
          </div>
        </section>
        <section className={s.km}>
          <h1>Modeling Metall Structure</h1>
          <div className={s.kmD}>
            <div></div>

            <div className={s.kmDImg}>
              <img src={nornikel} alt="3d-model" width={"600px"} />
              <img src={tekla} alt="3d-model" width={"600px"} />
              <img src={vmz} alt="3d-model" width={"600px"} />
              <img src={balokovo} alt="3d-model" width={"600px"} />
              <div className={s.kmDText}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit et nobis sint similique a earum quibusdam inventore
                  minus facilis totam ducimus, quos soluta accusamus, temporibus
                  non excepturi consequatur nulla labore?
                </p>
              </div>
            </div>

            <div></div>
          </div>
        </section>
        <section className={s.footbal}>
          <div>
            <h1>Footbal</h1>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default About;
