import Button from "../Button/Button";
import { useState, useEffect } from "react";
import Link from "next/link";
import style from "../../styles/Navbar.module.css";
import Image from "next/image";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const handleColorChange = () => {
    window.scrollY >= 80 ? setColorChange(true) : setColorChange(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleColorChange);

    return () => {
      window.removeEventListener("scroll", handleColorChange);
    };
  }, []);

  return (
    <div
      className={
        colorChange ? " header container coloredContainer" : " header container"
      }
    >
      <div className={[style.hamburger]} onClick={() => setOpen(!open)}>
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
      <div className={style.list_container}>
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
    </div>
  );
};

export default Navbar;
