import Movie from "../../components/Movie";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

export const API_URL = `https://nomad-movies.nomadcoders.workers.dev/movies`;

// 더이상 loading을 위한 useState, API를 호출하기 위한 useEffect가 필요없다.
// 그저 async - await 선언만 해주면 됨.
// NextJS가 fetch된 URL을 캐싱시켜줄 것이기 때문에
// 리액트 라이브러리를 통한 훅 사용은 더이상 설정하지 않아도 된다.
async function getMovies() {
  // loading을 확인하기 위해 일부러 10초 지연시킴
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <>
      <div className={styles.container}>
        {movies?.map((movie) => (
          <div key={movie.id}>
            <Movie
              key={movie.id}
              title={movie.title}
              id={movie.id}
              poster_path={movie.poster_path}
            />
          </div>
        ))}
      </div>
    </>
  );
}
