import Button from "../../components/ButtonStart";
import { NavLink } from "react-router-dom";
import { useStory } from "../../hooks/useStory";

export function LandingPage() {
  const { story } = useStory();
  return (
    <div className=" bg-gradient-to-b from-backgroundTop to-backgroundBttn  flex justify-center h-screen w-screen">
      <div className="text-center text-white">
        <h1 className="my-40 mb-36 text-8xl font-bold font-['Jersey_10']">
          TALK TO ME
        </h1>
        <div className="flex flex-col">
          {story.length === 0 ? (
            <NavLink to={"/language"}>
              <Button text="START" />
            </NavLink>
          ) : (
            <>
              <NavLink to={"/game"}>
                <Button text="CONTINUE" />
              </NavLink>

              <NavLink to={""}>
                <Button text="CHAPTERS" />
              </NavLink>

              <NavLink to={"/language"}>
                <Button text="START GAME IN ANOTHER LANGUAGE" />
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
