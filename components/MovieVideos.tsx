import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-video.module.css";

interface IVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

// api. 비디오 정보 호출
async function getVideos(id: string) {
  // 강제 에러 발생은 제거했음.
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("오류가 발생했어요.");
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videoInfo = await getVideos(id);

  return (
    <div className={styles.container}>
      {videoInfo.map((video: IVideo) => (
        <iframe
          key={video.id}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src={`https://youtube.com/embed/${video.key}`}
        />
      ))}
    </div>
  );
}
