import Logo from "../../assets/logo.svg";
import moment from "moment";

const Header = () => {
  return (
    <header className="text-center">
      <img className="mx-auto" src={Logo} alt="" />
      <h3 className="text-lg">Journalism Without Fear or Favour</h3>
      <h3 className="font-medium text-xl">
        {moment().format("dddd, MMMM D, YYYY")}
      </h3>
    </header>
  );
};

export default Header;
