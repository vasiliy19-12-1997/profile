import React from "react";
import s from "./footer.module.scss";
import { Link } from "react-router-dom";
type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <section className={s.footer}>
        <div className={s.footerInnerWrap}>
          <nav>
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
          </nav>
        </div>
        <div className={s.footerSocial}>
          <Link to={"https://t.me/kebab_case"} target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
              alt="telegram"
              width={30}
            />
            /
          </Link>
          <Link to={"https://vk.com/idvasyamba"} target="_blank">
            <img
              src="https://img.icons8.com/color/256/vk-com.png"
              alt="vk"
              width={30}
            />
            /
          </Link>
          <Link to={""} target="_blank">
            <img
              src="https://cdn.icon-icons.com/icons2/699/PNG/512/yandex_cyr_icon-icons.com_61627.png"
              alt="vk"
              width={30}
            />
            /
          </Link>
        </div>
      </section>
    </>
  );
};

export default Footer;
