import { FC } from "react";
import s from "./profile.module.scss";
import profile from "../../Components/Assets/Images/profile-photo.png";
const Profile: FC = () => {
  return (
    <div className={s.profile}>
      <main>
        <div className={s.round}>
          <img src={profile} alt="Vasiliy Konovalov" />
        </div>
      </main>
      <div className={s.interface}>
        <p>User Profile Interface</p>
      </div>
      <div className={s.text}>
        <p>Profile Website</p>
      </div>
    </div>
  );
};

export default Profile;
