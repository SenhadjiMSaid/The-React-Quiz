function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcom to the React Quiz</h2>
      <h3>{numQuestions} quetions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's START
      </button>
    </div>
  );
}

export default StartScreen;
