import styles from "../styles/movie-credit.module.css";
import { API_URL } from "./url";

interface ICredit {
  profile_path: string;
  name: string;
  id: string;
}

// api. credit 정보 호출
async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  const json = await response.json();

  // 주요인물 5명만 보여줄 것
  const arr = json.slice(0, 5);
  return arr;
}

export default async function MovieCredit({ id }: { id: string }) {
  const credits = await getCredits(id);

  return (
    <>
      <div className={styles.creditContainer}>
        {credits?.map((credit: ICredit) => (
          <>
            <div key={credit.id}>
              <img src={credit.profile_path} alt={credit.name} />
              <p>{credit.name}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
