export default function HomePage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-center bg-home-bg bg-cover bg-no-repeat gap-7 pt-16">
      <h1 className="text-5xl animate-fade-in-up">League Of Legends</h1>
      <p className="animate-fade-in-up">
        리그 오브 레전드의 챔피언과 아이템 리스트를 패치해오는 프로젝트입니다.
      </p>
    </div>
  );
}
