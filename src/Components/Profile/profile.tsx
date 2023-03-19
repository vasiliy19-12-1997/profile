import "./profile.scss";
const Profile = () => {
  return (
    <div>
      <header>
        <h1>Vasiliy Konovalov</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
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
            and have experience in JS, TS, React. When I'm not coding, you'll
            find me playing footbal or tennis with my friends. Besides sports, I
            am also interested in investing and learning something new.
          </p>
        </section>
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
                <img
                  src="https://user-images.githubusercontent.com/102950888/226092855-2d251978-4da0-4770-8e72-9d88e0f0cd26.png"
                  alt="Project 2"
                  width={300}
                />
              </a>
              <h3>Weather</h3>
              <p>Weather</p>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Project 3"
                />
              </a>
              <h3></h3>
              <p>soon...</p>
            </li>
          </ul>
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
                Aspiration to self-developing. By the way I like to read books
                by Brian Tracy
              </li>
              <li className="profile-list-item">
                Also like fitness and football, play tennis, swimming and
                another sport
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Contact me:</h2>
          <a href="https://t.me/kebab_case" className="profile-list-item">
            Telegram:
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
              alt="Vasiliy avatar"
              width={30}
            />
          </a>
        </section>
      </main>
    </div>
  );
};

export default Profile;
