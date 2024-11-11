import { API_URL } from "../../../(home)/page";

interface IParams {
  id: string;
}

// api. movie 정보 호출
async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

// api. 비디오 정보 호출
async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
}

export default async function MovieDetail({
  params: { id },
}: {
  params: IParams;
}) {
  //여러 api를 호출하여 처리할 때, 한번에 처리하기 위해서는 Promise.all을 활용해보자.
  // Promise.all(): 여러 비동기 작업을 동시에 실행해준다. 완료될때까지 기다렸다가 한꺼번에 결과를 받는다.
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  return <h1>Movie {movie.title}</h1>;
}
