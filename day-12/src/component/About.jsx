import { useEffect, useState } from "react";

const About = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    let data = "MEAN";
    setUsername(data);
  }, []);
  return (
    <>
      <GrandParent username={username} />
    </>
  );
};

export default About;

function GrandParent({ username }) {
  return <Parent username={username} />;
}
function Parent({ username }) {
  return <Child username={username} />;
}
function Child({ username }) {
  return <div>Child {username}</div>;
}
