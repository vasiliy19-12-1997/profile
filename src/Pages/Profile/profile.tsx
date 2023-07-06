import { FC } from "react";
import profile from "../../Assets/Images/profile-photo.png";

import s from "./profile.module.scss";
import Footer from "../../Components/UI/Footer/footer";
import MyButton from "../../Components/UI/MyButton/myButton";
import Navbar from "../../Components/UI/Navbvar/navbar";
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae asperiores provident repellat laudantium nemo!
                  Inventore sequi possimus ab explicabo officiis neque
                  perspiciatis natus nemo autem, hic necessitatibus fugiat,
                  doloremque rem vitae velit commodi doloribus est aspernatur
                  tempore quia ullam maxime iure placeat ex. Ab inventore, nisi
                  est perferendis quia quasi!
                </p>
              </div>
              <div>
                <h2>The Arctic Code Vault</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem minus doloribus eaque debitis illum sapiente suscipit
                  animi dicta nobis? Dolore commodi impedit neque adipisci natus
                  sit! Debitis expedita ullam esse ratione molestiae enim quos,
                  eaque deserunt sint mollitia exercitationem! Temporibus quidem
                  sed quis nesciunt labore nam odio optio at vitae.
                </p>
              </div>
              <div>
                <h2>Partners and Advisors</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  dolorem, eveniet deserunt ipsum eius quaerat nostrum magnam
                  maiores quae perferendis illo vero fugiat provident inventore
                  corrupti fugit id aliquid. Ab nihil magni eum magnam
                  doloremque nostrum delectus quos? Dolores quo, beatae
                  dignissimos accusantium dolorem quaerat quam nobis illo
                  possimus cupiditate.
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
        <Footer />
      </main>
    </div>
  );
};

export default Profile;
