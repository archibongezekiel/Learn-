import Side from "./side.jsx";
import Header2 from "./header2.jsx";
import Name from "./sidebar.jsx";
import "./display.scss";

function Header() {
  return (
    <>
      <div>
        <Side />
        <Header2 />
        <Name />
      </div>{" "}
    </>
  );
}
export default Header;
