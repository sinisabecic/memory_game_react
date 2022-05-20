import React from "react";

function Score({ rounds, hitted, playAgain }) {
  return (
    <div>
      <div>Runde: {rounds}</div>
      <div>Pogođeno: {hitted}</div>
      {rounds > 4 && hitted !== 6 && (
        <p>
          Izgubili ste! Zelite li da odigrate ponovo?
          <button onClick={playAgain}>Da</button>
        </p>
      )}
      {rounds <= 4 && hitted === 6 && (
        <p>
          Pobijedili ste! Zelite li da odigrate ponovo?
          <button onClick={playAgain}>
            <span className="text-black">Da</span>
          </button>
        </p>
      )}
    </div>
  );
}

export default Score;
