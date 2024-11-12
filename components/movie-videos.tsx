import { API_URL } from "../app/(home)/page";

// api. 비디오 정보 호출
async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("오류가 발생했어요.");
  // const response = await fetch(`${API_URL}/${id}/videos`);
  // const json = await response.json();
  // return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const video = await getVideos(id);
  return <h6>{JSON.stringify(video)}</h6>;
}
