import Logo from "../../assets/images/logo.svg";
import moment from "moment";

const Header = () => {
  return (
    <header className="text-center">
      <img className="mx-auto mt-12 mb-5" src={Logo} alt="" />
      <h3 className="text-lg mb-2.5">Journalism Without Fear or Favour</h3>
      <h3 className="font-medium text-xl mb-8">
        {moment().format("dddd, MMMM D, YYYY")}
      </h3>
    </header>
  );
};

export default Header;
