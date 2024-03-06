import { useQuiz } from "../context/QuizContext";

function Progress() {
  const { index, numQuestions, points, totalPoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Questions <strong>{index + 1} </strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints} points
      </p>
    </header>
  );
}

export default Progress;
