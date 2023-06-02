import React from "react";
import styles from "./Header.module.scss";

function HeaderComponent() {
  return (
    <header className={styles["example"]}>
      <h1>Hello React asdnrt </h1>
      <p className={styles["example__item"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        quibusdam nihil architecto mollitia, rem, repellendus odio quam ad
        quidem sed voluptatum provident numquam perspiciatis adipisci distinctio
        necessitatibus accusantium natus aliquam!
      </p>
    </header>
  );
}

export const Header = HeaderComponent;
