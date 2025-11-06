import LogoImg from "../assets/Logo.png";

const Logo = () => {
  return (
    <div className="flex items-center  gap-0 relative -top-22 p-0">
      <img
        className="bg-black w-20 h-40 object-cover"
        src={LogoImg}
        alt="BookRoomLogo"
      />
      <h1 className="font-bold text-4xl">BookRoom</h1>
    </div>
  );
};

export default Logo;
