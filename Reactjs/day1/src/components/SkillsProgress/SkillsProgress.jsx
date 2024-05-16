export default function SkillsProgress({ degree, name }) {
  let height = "40px";
  const skillProg = {
    margin: "10px 0",
    backgroundColor: "#fff",
    width: "100%",
    height: height
  };
  const skillLine = {
    backgroundColor: "#ddd",
    width: degree,
    height: height
  };
  const skillName = {
    backgroundColor: "gray",
    display: "inline-block",
    padding: "10px",
    width: "100px",
    fontWeight: "bold",
    textAlign: "center",
    height: height,
  };
  return <>
    <div style={skillProg}>
      <div style={skillLine}><span style={skillName}>{name}</span></div>
    </div>
  </>
}