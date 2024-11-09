"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname(); // use client 오류!
  console.log(path);

  return (
    <>
      <div>
        <nav>
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
