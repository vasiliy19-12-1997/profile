import { FC } from "react";
import s from "./profile.module.scss";
import profile from "../../Components/Assets/Images/profile-photo.png";
import Navbar from "../../Components/UI/Navbvar/navbar";
import MyButton from "../../Components/UI/MyButton/myButton";
import { Link } from "react-router-dom";
const Profile: FC = () => {
  return (
    <div className={s.profile}>
      <Navbar />
      <main>
        <div className={s.mainProfile}>
          <div className={s.round}>
            <img src={profile} alt="Vasiliy Konovalov" />
          </div>
          <div className={s.interface}>
            <p>User Profile Interface</p>
          </div>
          <div className={s.text}>
            <p>Profile Website</p>
          </div>
        </div>
        <section className={s.section1}>
          <div className={s.about}>
            <div className={s.aboutH}></div>
            <div className={s.aboutText}>
              <div></div>
              <h2>Archive Program Initiatives</h2>
              <div></div>
              <div>
                <h2>Our Apprsoach</h2>
                <p>
                  As today’s vital code becomes yesterday’s historical
                  curiosity, it may be abandoned, forgotten, or lost. Worse,
                  albeit much less likely, in the case of global catastrophe, we
                  could lose everything stored on modern media in a few
                  generations. Archiving software across multiple organizations
                  and forms of storage helps to ensure its long-term
                  preservation.
                </p>
              </div>
              <div>
                <h2>The Arctic Code Vault</h2>
                <p>
                  On 02/02/2020 GitHub captured a snapshot of every active
                  public repository. Those millions of repos were then archived
                  to hardened film designed to last for 1,000 years, and stored
                  in the GitHub Arctic Code Vault in a decommissioned coal mine
                  deep beneath an Arctic mountain in Svalbard, Norway.
                </p>
              </div>
              <div>
                <h2>Partners and Advisors</h2>
                <p>
                  Our partners include the Long Now Foundation, Software
                  Heritage, the Internet Archive, Microsoft Research’s Project
                  Silica, the Arctic World Archive, GHTorrent, and GHArchive.
                  Our advisors include both technological visionaries and
                  world-renowned experts in the humanities.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={s.section2}>
          <div className={s.archive}>
            <div className={s.archiveText}>
              <div></div>
              <div>
                <h2>Latest Archive</h2>
                <p>
                  We are collaborating with the Bodleian Library in Oxford, the
                  Bibliotheca Alexandrina in Egypt, and Stanford Libraries in
                  California to store copies of 17,000 of GitHub’s most popular
                  and most-depended-upon projects—open source’s “greatest
                  hits”—in their archives, in museum-quality cases, to preserve
                  them for future generations.
                </p>
              </div>
              <MyButton>Learn more</MyButton>
            </div>
            <div className={s.archiveImg}>
              <img
                src="https://user-images.githubusercontent.com/102950888/232326591-2e207e87-6830-4462-924d-d18840e47670.png"
                alt="box"
              />
              <img
                src="https://user-images.githubusercontent.com/102950888/229137523-ab35f89a-63b5-47c1-ad22-c3cbc9ef4c38.png"
                alt="box"
              />
            </div>
          </div>
        </section>
        <section className={s.section3}>
          <h3>OUR MISSION</h3>

          <div className={s.mission}>
            <div></div>
            <h2>Preserve open source software for future generations.</h2>
            <p>
              The GitHub Archive Program is a testament to the importance of the
              open source community. It is our hope that it will, both now and
              in the future, further publicize the worldwide open source
              movement; contribute to greater adoption of open source and open
              data policies worldwide; and encourage long-term thinking.
            </p>
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
      </main>
    </div>
  );
};

export default Profile;
