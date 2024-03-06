import Header from "../componante/Header";
import Main from "../componante/Main";
import Loader from "../componante/Loader";
import Error from "../componante/Error";
import StartScreen from "../componante/StartScreen";
import Question from "../componante/Question";
import NextButton from "../componante/NextButton";
import Progress from "../componante/Progress";
import FinishScreen from "../componante/FinishScreen";
import Timer from "../componante/Timer";
import { useQuiz } from "../context/QuizContext";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <footer>
              <NextButton />
              <Timer />
            </footer>
          </>
        )}
        {status === "finish" && <FinishScreen />}
      </Main>
    </div>
  );
}
