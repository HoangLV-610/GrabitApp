const ItemOurTeam = (props) => {
  const { name, position, image } = props.dataOurTeam;
  return (
    <div className="item-our-team">
      <div className="image">
        <img
          className="aspect-square max-w-[235px] bg-cover w-full rounded-md"
          src={image}
          alt=""
        />
      </div>
      <div className="content">
        <h5 className="mt-[15px] mb-2 text-[18px] text-slate-gray font-bold font-poppins tracking-[.01rem]">
          {name}
        </h5>
        <p className="text-[13px] leading-[16px] font-light font-poppins text-gray">
          {position}
        </p>
      </div>
    </div>
  );
};

export default ItemOurTeam;
