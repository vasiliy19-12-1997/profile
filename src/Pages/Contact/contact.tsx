import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      {" "}
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
    </>
  );
};

export default Contact;
