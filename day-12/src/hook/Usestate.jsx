import { useState } from "react";

function Usestate() {
  const [data, setData] = useState(0);

  function increaseVal() {
    setData((a) => a + 1);
    console.log("Increase");
  }

  function decreaseVal() {
    setData((a) => a - 1);
    console.log("Decrease");
  }
  return (
    <div>
      <button onClick={increaseVal}>Increase</button>
      <h1>{data}</h1>
      <button onClick={decreaseVal}>Decrease</button>
    </div>
  );
}

export default Usestate;
