const TechnologyCard = ({ image, text }) => {
  return (
    <div>
      <div className="shadow-md rounded-md p-5 flex items-center gap-3 justify-center h-auto w-[180px]">
        <img src={image} className="h-[30px] w-[30px]" />{" "}
        <span className="font-bold text-[18px]">{text}</span>
      </div>
    </div>
  );
};

export default TechnologyCard;
