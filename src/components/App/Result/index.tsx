import { useEffect, useState } from 'react';

interface IResult {
  win: boolean;
  draw: boolean;
  setHouse: React.Dispatch<React.SetStateAction<number>>;
  setPlayer: React.Dispatch<React.SetStateAction<number | null>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}

function Result({ win, draw, setHouse, setPlayer, setScore, score }: IResult) {
  const [sent, setSent] = useState(false);
  useEffect(() => {
    if (win && !sent) {
      setScore(score + 1);
      setSent(true);
    } else if (!win && !draw && !sent) {
      setScore(0);
      setSent(true);
    }
  }, [win, score, setScore, sent, draw]);
  if (draw) {
    return (
      <div className="flex flex-col justify-center items-center gap-3 ">
        <h1 className="text-white uppercase text-5xl font-bold">draw</h1>
        <button
          type="button"
          className="bg-white py-2 px-10 uppercase text-[#3b4363] rounded-lg"
          onClick={() => {
            setPlayer(null);
            setHouse(-1);
          }}
        >
          play again
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center gap-3 ">
      <h1 className="text-white uppercase text-5xl font-bold">
        {win ? 'you win' : 'you lose'}
      </h1>
      <button
        type="button"
        className="bg-white py-2 px-10 uppercase text-[#3b4363] rounded-lg"
        onClick={() => {
          setPlayer(null);
          setHouse(-1);
        }}
      >
        play again
      </button>
    </div>
  );
}
export default Result;
