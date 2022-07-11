import Button from "../Button/Button";
import { useState } from "react";
import Link from "next/link";
import style from "../../styles/Navbar.module.css";
import Image from "next/image";
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
          <Link href="/">
            <a className={style.home}>Home</a>
          </Link>
        </li>
        <li className={style.menuItem}>
          <Link href="#">
            <a className={style.explore}>Explore</a>
          </Link>
        </li>
      </ul>
      <Image
        src="/LOGO.png"
        className={style.logo}
        alt="Logo"
        width="130px"
        height="28px"
      />
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="/">
            <a className={style.home}>Home</a>
          </Link>
        </li>
        <li className={style.listItem}>
          <Link href="/">
            <a className={style.explore}>Explore</a>
          </Link>
        </li>
      </ul>
      <Button button_text="Get Started" />
    </div>
  );
};

export default Navbar;
