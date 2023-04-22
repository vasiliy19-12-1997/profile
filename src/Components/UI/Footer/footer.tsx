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
          <a href="#" target="_blank">
            <i>tg</i>
          </a>
          <a href="#" target="_blank">
            <i>vk</i>
          </a>
          <a href="#" target="_blank">
            <i>you</i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;
