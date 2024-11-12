"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname(); // use client 오류!
  console.log(path);

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={"/"}>Home {path === "/" && "✅"}</Link>
            </li>
            <li>
              <Link href={"/about-us"}>
                About Us {path === "/about-us" && "✅"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
