import logo from "../assets/elogo.png";

export default function Navbar() {
  return (
    <div className="w-full fixed bg-white flex px-2 justify-evenly content-center">
      Tec Racing
      <span className="w-16 mr-2">
        <img src={logo} alt="Logo" className="object-contain" />
      </span>
      Telemetría
    </div>
  );
}
