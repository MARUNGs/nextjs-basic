import Navigation from "../components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  // metadata는 템플릿 적용이 가능하다.
  title: {
    template: "%s | Next Movies", // 화면별 메타데이터 title을 설정하면 여기서 보여주게 된다.
    default: "Loading ...",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
