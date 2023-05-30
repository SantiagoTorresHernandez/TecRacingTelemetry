import logo from "../assets/elogo.png";

export default function Navbar() {
  return (
    <div className="flex w-full items-center justify-evenly rounded-b-lg bg-gradient-to-b from-black px-2 text-2xl text-stone-100">
      Tec Racing
      <span className="mr-2 w-20 ">
        <img src={logo} alt="Logo" className="rounded-lg object-contain" />
      </span>
      Telemetría
    </div>
  );
}
