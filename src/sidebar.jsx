const tutorial = [
  {
    home: "React Home",
  },
  {
    home: "React Intro",
  },
  {
    home: "React  Get Started",
  },
  {
    home: "React Upgrade",
  },
  {
    home: "React ES6",
  },
  {
    home: "React Render",
  },
  {
    home: "React JSX",
  },
  {
    home: "React  Components",
  },
  {
    home: "React Class",
  },
  {
    home: "React Props",
  },
  {
    home: "React Events",
  },
  {
    home: "React Conditionals",
  },
  {
    home: "React Lists",
  },
  {
    home: "React Forms",
  },
  {
    home: "React Router",
  },
  {
    home: "React Memo",
  },
  {
    home: "React Css Styling",
  },
  {
    home: "React Sass Styling  ",
  },
];
const mapDisplay = tutorial.map((l) => <li>{l.home}</li>);
function name() {
  const sideBar = {
    background: "white",
    overflow: "scroll",
    height: "720px",
    width: "300px",
    paddingLeft: "25px",
  };
  return (
    <>
      <div style={sideBar}>
        <ul style={{ listStyle: "none" }}>
          <h2>React Tutorial</h2>
          {mapDisplay}
        </ul>
        <ul style={{ listStyle: "none" }}>
          <h2>React Tutorial</h2>
          {mapDisplay}
        </ul>
      </div>
    </>
  );
}
export default name;
