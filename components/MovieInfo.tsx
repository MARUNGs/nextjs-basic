import { Suspense } from "react";
import styles from "../styles/movie-info.module.css";
import MovieCredit from "./MovieCredit";
import { API_URL } from "./url";

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  budget: string;
  homepage: string;
  id: string;
  imdb_id: string;
  logo_path: string;
  name: string;
  production_companies: {
    id: string;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
}

// api. movie 정보 호출
export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage 👉🏻
        </a>

        {/* Companies */}
        <div className={styles.companyContainer}>
          <h1 className={styles.title}>Company List</h1>
          {movie.production_companies.map((company: IMovie) => (
            <>
              {!company.logo_path.includes("null") && (
                <img
                  className={styles.companyImg}
                  src={company.logo_path}
                  alt={company.name}
                />
              )}
            </>
          ))}
        </div>

        <div>
          <h1 className={styles.title}>Actor List</h1>
          <Suspense fallback={<h1>Loading Credit</h1>}>
            <MovieCredit id={id} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
