function FinishScreen({ points, totalePoints, highscore, dispatch }) {
  const percentage = (100 * points) / totalePoints;

  let emoji;
  if (percentage >= 95) emoji = "🥇";
  if (percentage >= 80 && percentage < 95) emoji = "🥈";
  if (percentage >= 50 && percentage < 80) emoji = "🤔";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <div>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {totalePoints} ({Math.round(percentage)} %)
      </p>
      <p className="highscore">(Highscore: {highscore} point)</p>
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({
            type: "restart",
          })
        }
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default FinishScreen;
