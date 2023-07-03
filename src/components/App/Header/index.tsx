import logo from '../../../assets/images/logo.svg';

function Header({ score }: { score: number }) {
  return (
    <div className="w-full max-w-[600px] p-3 border-[3px] border-[var(--header)] rounded-lg flex justify-between items-center">
      <img className="w-[30%] h-[100%]" src={logo} alt="Rock-Paper-Scissors" />
      <div className="bg-white flex flex-col  justify-center items-center py-2 px-5 rounded-lg text-[var(--header)] ">
        <h3 className="  uppercase text-[0.65rem] tracking-widest">Score</h3>
        <p className="text-4xl font-bold">{score}</p>
      </div>
    </div>
  );
}
export default Header;
