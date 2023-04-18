import { FC } from "react";

type Props = {};

const About: FC = (props: Props) => {
  return (
    <>
      <section className="intro">
        <h2>About Me</h2>
        <div className="image-container">
          <img
            src="https://altecsystems.ru/local/templates/altecsystems/images/about-history-2-large.webp"
            alt="Vasiliy Konovalov"
          />
        </div>
        <p>
          My name is Vasiliy Konovalov and I'm a frontend developer who loves
          active life and self-development. I've been coding for over 0.5 year
          and have experience in JS, TS, React. When I'm not coding, you'll find
          me playing footbal or tennis with my friends. Besides sports, I am
          also interested in investing and learning something new.
        </p>
      </section>
      <section>
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
      </section>
    </>
  );
};

export default About;
