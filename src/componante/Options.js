function Options({ question, dispatch, answer }) {
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer && "answer"}  ${
            answer && (i === question.correctOption ? "correct" : "wrong")
          }`}
          key={i}
          disabled={answer !== null}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
