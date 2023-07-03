import { useState } from 'react';
import Header from './Header';
import Rock from '../../assets/images/icon-rock.svg';
import Paper from '../../assets/images/icon-paper.svg';
import Scissors from '../../assets/images/icon-scissors.svg';
import Items from './Items';
import Triangle from '../../assets/images/bg-triangle.svg';
import Rules from '../../assets/images/image-rules.svg';
import Result from './Result';

export default function App() {
  const [player, setPlayer] = useState<number | null>(null);
  const [showRule, setShowRule] = useState(false);
  const [score, setScore] = useState(0);
  const [house, setHouse] = useState(-1);
  const rule = [3, 1, 2];
  const translate = [
    'translate-x-[0px]',
    'translate-x-[-200px]',
    'translate-x-[-400px]',
  ];
  if (showRule) {
    return (
      <main className="flex flex-col justify-between items-center min-h-screen py-20 text-[var(--header)]">
        <h1 className="text-3xl font-bold">RULES</h1>
        <img src={Rules} alt="" />
        <button
          type="button"
          onClick={() => {
            setShowRule(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </main>
    );
  }

  return (
    <main className="w-screen min-h-screen bg-gradient-to-br from-[#1e3352] from-50% to-[#181e40] p-8 flex flex-col justify-between items-center">
      <Header score={score} />

      <div className="flex uppercase text-white font-bold gap-10 max-w-[300px]">
        <div
          style={{
            backgroundImage: `${!player ? `url(${Triangle}` : ''}`,
          }}
          className={`flex flex-wrap justify-center gap-8 bg-no-repeat bg-[length:80%_80%] bg-bottom ${
            player
              ? 'bg-none flex-col justify-center items-center text-center'
              : ''
          } `}
        >
          {(!player || player === 1) && (
            <button
              onClick={() => {
                setPlayer(1);
                setTimeout(() => {
                  setHouse(Math.round(Math.random() * 2) + 1);
                }, 600);
              }}
              type="button"
              className={`p-4 bg-gradient-to-br from-[#4865f4] from-50% to-[#5671f5]  rounded-full shadow-[0px_5px_0px_0px_rgb(50,66,150)] ${
                player && rule[player - 1] === house ? 'animate-pulse' : ''
              }`}
              disabled={!!player}
            >
              <Items icons={Paper} />
            </button>
          )}
          {(!player || player === 2) && (
            <button
              onClick={() => {
                setPlayer(2);
                setTimeout(() => {
                  setHouse(Math.round(Math.random() * 2) + 1);
                }, 600);
              }}
              type="button"
              className={`p-4 bg-gradient-to-br from-[#ec9e0e] from-50% to-[#eca922]  rounded-full shadow-[0px_5px_0px_0px_rgb(119,85,17)] ${
                player && rule[player - 1] === house ? 'animate-pulse' : ''
              }`}
              disabled={!!player}
            >
              <Items icons={Scissors} />
            </button>
          )}
          {(!player || player === 3) && (
            <button
              onClick={() => {
                setPlayer(3);
                setTimeout(() => {
                  setHouse(Math.round(Math.random() * 2) + 1);
                }, 600);
              }}
              type="button"
              className={`p-4 bg-gradient-to-br from-[#dc2e4e] from-50% to-[#dd405d]  rounded-full shadow-[0px_5px_0px_0px_rgb(122,34,50)] ${
                player && rule[player - 1] === house ? 'animate-pulse' : ''
              }`}
              disabled={!!player}
            >
              <Items icons={Rock} />
            </button>
          )}
          {!!player && <h3>YOU PICKED</h3>}
        </div>

        {!!player && (
          <div className="overflow-hidden gap-8 uppercase text-white font-bold relative w-36 h-46">
            <div
              className={`${translate[house - 1]} transition-all duration-700 ${
                house < 0 ? 'animation' : ''
              }  ${rule[player - 1] !== house ? 'animate-pulse' : ''}`}
            >
              <div className="p-4 bg-gradient-to-br from-[#4865f4] from-50% to-[#5671f5] absolute rounded-full shadow-[0px_5px_0px_0px_rgb(50,66,150)] translate-x-[0]">
                <Items icons={Paper} />
              </div>
              <div className="p-4 bg-gradient-to-br from-[#ec9e0e] from-50% to-[#eca922] absolute  rounded-full shadow-[0px_5px_0px_0px_rgb(119,85,17)] translate-x-[200px]">
                <Items icons={Scissors} />
              </div>
              <div className="p-4 bg-gradient-to-br from-[#dc2e4e] from-70% to-[#dd405d] absolute rounded-full shadow-[0px_5px_0px_0px_rgb(122,34,50)] translate-x-[400px]">
                <Items icons={Rock} />
              </div>
            </div>

            <h3 className="text-center absolute bottom-0">The House Picked</h3>
          </div>
        )}
      </div>
      {!!player && house > -1 && (
        <Result
          win={rule[player - 1] === house}
          draw={player === house}
          setHouse={setHouse}
          setPlayer={setPlayer}
          setScore={setScore}
          score={score}
        />
      )}
      <button
        type="button"
        className="mb-10 text-white border-2 px-8 py-1 rounded-lg"
        onClick={() => {
          setShowRule(true);
        }}
      >
        <h3 className="tracking-widest">RULES</h3>
      </button>

      <footer className="text-md text-center fixed bottom-2 left-0 w-full text-white">
        <p>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--attribution)]"
          >
            Frontend Mentor
          </a>
          .
        </p>
        <p>
          {' '}
          Coded by{' '}
          <a
            className="text-[var(--attribution)]"
            href="https://www.frontendmentor.io/profile/LeoDurillon"
          >
            Leo Durillon
          </a>
          .
        </p>
      </footer>
    </main>
  );
}
