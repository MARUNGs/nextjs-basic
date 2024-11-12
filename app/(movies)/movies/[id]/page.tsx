import { Suspense } from "react";
import MovieInfo from "../../../../components/MovieInfo";
import MovieVideos from "../../../../components/MovieVideos";

export const metadata = {
  title: "movies",
};

interface IParams {
  id: string;
}

export default async function MovieDetail({
  params: { id },
}: {
  params: IParams;
}) {
  //여러 api를 호출하여 처리할 때, 한번에 처리하기 위해서는 Promise.all을 활용해보자.
  // Promise.all(): 여러 비동기 작업을 동시에 실행해준다. 완료될때까지 기다렸다가 한꺼번에 결과를 받는다.
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  // 이건 이제 사용안함. 두개의 API를 컴포넌트로 완전 분리하였음

  return (
    <>
      <div>
        {/* Suspense: async-await 선언된 리액트 컴포넌트가 준비되는 동안 표시할 메세지를 렌더한다. */}
        <Suspense fallback={<h1>Loading movie info</h1>}>
          <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading movie info</h1>}>
          <MovieVideos id={id} />
        </Suspense>
      </div>
    </>
  );
}
