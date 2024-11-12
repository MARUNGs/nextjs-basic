import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/MovieInfo";
import MovieVideos from "../../../../components/MovieVideos";

interface IParams {
  params: {
    id: string;
  };
}

interface IMovie {
  title: string;
}

// generateMetadata(): 서버 컴포넌트에서만 지원된다.
// 메인화면에서 넘겨받는 파라미터 {params, searchParams}을 동일하게 전달받는다.
// 해당 화면은 동적으로 영화이름이 바뀌는 화면이므로 메타데이터가 동적으로 변경되어야 한다.
export async function generateMetadata({ params: { id } }: IParams) {
  const movie: IMovie = await getMovie(id);

  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
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
