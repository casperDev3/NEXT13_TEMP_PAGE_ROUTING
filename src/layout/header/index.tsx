import React from "react";
import Link from "next/link";
// import styles
import style from "./header.module.scss";
// import components

const Header = () => {
  return (
    <>
      <header>
        <div className={style.header}>HEADER</div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
