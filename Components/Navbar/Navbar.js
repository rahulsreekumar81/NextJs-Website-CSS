import Button from "../Button/Button";
import { useState } from "react";
import style from "../../styles/Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className={style.menu}
        style={{ left: open ? "0px" : "-50vw" }}
      >
        <li className={style.menuItem}>
          <a href="/" className={style.home}>
            Home
          </a>
        </li>
        <li className={style.menuItem}>
          <a href="/" className={style.explore}>
            Explore
          </a>
        </li>
      </ul>
      <img src="LOGO.png" className={style.logo}></img>
      <ul className={style.list}>
        <li className={style.listItem}>
          <a href="/" className={style.home}>
            Home
          </a>
        </li>
        <li className={style.listItem}>
          <a href="/" className={style.explore}>
            Explore
          </a>
        </li>
      </ul>
      <Button button_text="Get Started" />
    </div>
  );
};

export default Navbar;
