"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovie {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovie) {
  // useRoute(): Link 컴포넌트로 묶이지 않은 엘리먼트에도 Link 기능을 이용할 수 있게 처리한다.
  const path = `/movies/${id}`;
  const router = useRouter();
  const onClick = () => router.push(path);

  return (
    <>
      <div className={styles.movie}>
        <img onClick={onClick} src={poster_path} alt={title} />
        <Link key={id} href={`${path}`}>
          {title}
        </Link>
      </div>
    </>
  );
}
