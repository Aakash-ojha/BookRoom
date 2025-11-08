import LogoImg from "../assets/Logo.png";

const Logo = () => {
  return (
    <div className=" flex flex-col items-center relative -top-12">
      <img
        className=" w-25 h-40 object-cover  overflow-hidden"
        src={LogoImg}
        alt="BookRoomLogo"
      />
      <h1 className="font-bold text-5xl relative -top-12">BookRoom</h1>
    </div>
  );
};

export default Logo;
