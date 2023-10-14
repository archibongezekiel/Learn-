function Header() {
  const g = { background: " #282a35", color: "white", display: "flex" };
  const topic = {
    outline: "none",
    border: "none",
    background: "#282a35",
    color: "white",
    width: "80px",
    padding: "5px",
  };
  return (
    <>
      <div style={g}>
        <button style={topic}>HTML</button>
        <button style={topic}>CSS</button>
        <button style={topic}>JAVASCRIPT</button>
        <button style={topic}>SQL</button>
        <button style={topic}>PYTHON</button>
        <button style={topic}>JAVA</button>
        <button style={topic}>PHP</button>
        <button style={topic}>HOW TO</button>
        <button style={topic}> W3.CSS</button>
        <button style={topic}>C</button>
        <button style={topic}>C++</button>
        <button style={topic}>C#</button>
        <button style={topic}>BOOTSTRAP</button>
        <button style={topic}>REACT</button>
        <button style={topic}>MYSQL</button>
        <button style={topic}>JQUERY</button>
        <button style={topic}>EXCEL</button>
        <button style={topic}> XML</button>
      </div>
    </>
  );
}
export default Header;
