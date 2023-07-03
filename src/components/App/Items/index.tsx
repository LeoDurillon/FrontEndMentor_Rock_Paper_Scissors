function Items({ icons }: { icons?: string }) {
  return (
    <div
      className={` ${
        icons
          ? 'bg-white shadow-[inset_0px_5px_5px_-3px_var(--header)]'
          : 'bg-transparent '
      } p-5 w-24 h-24 rounded-full flex justify-center items-center  `}
    >
      {icons && <img className=" " src={icons} alt="" />}
    </div>
  );
}
export default Items;
