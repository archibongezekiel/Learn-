import Class from "./class";
const inputStyle = {
  outline: "none",
  border: "none",
  borderLeft: "1px solid  #bfbfbf",
  borderTop: "1px solid  #bfbfbf",
  borderBottom: "1px solid  #bfbfbf",
  borderRadius: "20px 0px 0px 20px",
  padding: "10px",
  width: "115px",
};
const position = {
  outline: "none",
  border: "none",
  borderRight: "1px solid  #bfbfbf",
  borderTop: "1px solid  #bfbfbf",
  borderBottom: "1px solid  #bfbfbf",
  borderRadius: "0px 20px 20px 0px",
  padding: "7px",
  background: "white",
};
const font = {
  fontSize: "20px",
};
const line = {
  padding: "10px",
  display: "flex",
  fontFamily: "Source Sans 3, sans-serif",
};
const move = {
  marginLeft: "0px",
};
const buttonSpaceCertificates = {
  outline: "none",
  display: "flex",
  alignItems: "center",
  padding: "15px",
  border: "none",
  background: "none",
};
const signButton = {
  fontSize: "15px",
  border: "none",
  background: "#09a96d",
  color: "white",
  padding: "10px",
  fontSize: "16px",
  borderRadius: "20px",
};
const logButton = {
  fontSize: "15px",
  border: "none",
  background: "#b8dece",
  color: "black",
  padding: "10px",
  fontSize: "16px",
  borderRadius: "0px 20px 20px 0px",
};
{
  /** */
}
const listItem = [
  { b: <img src="download.png" alt="w3school_icon" width={"50px"} /> },
  {
    a: "Tutorials ",
    icon: <span class="material-symbols-outlined">expand_more</span>,
  },
  {
    a: "Exercise",
    icon: <span class="material-symbols-outlined">expand_more</span>,
  },
  {
    a: "Get Certified",
    icon: <span class="material-symbols-outlined">expand_more</span>,
  },
  {
    a: "Service",
    icon: <span class="material-symbols-outlined">expand_more</span>,
  },
  {
    input: (
      <input
        type="text"
        name="text"
        id=""
        style={inputStyle}
        placeholder="Search..."
      />
    ),
    search: (
      <button style={position}>
        {" "}
        <span class="material-symbols-outlined" style={font}>
          search
        </span>
      </button>
    ),
  },
  { dark: <span class="material-symbols-outlined">dark_mode</span> },
];

const displayList = listItem.map((p) => (
  <li style={line}>
    {p.b}
    {p.a}
    {p.icon}
    {p.input}
    {p.search}
    {p.dark}
  </li>
));
{
  /* */
}

const listItem2 = [
  {
    button: (
      <button style={buttonSpaceCertificates}>
        <svg
          style={{ color: "#9662f6", fontSize: "15px" }}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 640 512"
          aria-hidden="true"
        >
          <path
            d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
            fill="currentColor"
          ></path>
        </svg>
        Space
      </button>
    ),
  },
  {
    shop: (
      <div>
        <button style={buttonSpaceCertificates}>
          <span
            class="material-symbols-outlined"
            style={{ color: "#9662f6", fontSize: "18px" }}
          >
            shopping_cart
          </span>{" "}
          <p>Certificates</p>
        </button>
      </div>
    ),
  },
  {
    sign: (
      <div
        style={{
          background: "#b8dece",
          borderRadius: "20px 20px 20px 20px",
          marginRight: "30px",
        }}
      >
        {" "}
        <button style={signButton}>Sign Up</button>{" "}
        <button style={logButton}>Log in</button>
      </div>
    ),
  },
];
const displayList2 = listItem2.map((d) => (
  <li style={move}>
    {d.shop} {d.button}
    {d.sign}
    {d.log}
  </li>
));
function name() {
  const l = {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  };
  return (
    <>
      <div style={l}>
        {" "}
        <ul style={{ display: "flex" }}>{displayList}</ul>
        <ul style={{ display: "flex", listStyle: "none" }}> {displayList2}</ul>
      </div>{" "}
    </>
  );
}
export default name;
