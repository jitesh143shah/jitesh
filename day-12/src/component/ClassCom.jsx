// import React from "react";

// const ClassCom = () => {
//   return <div>ClassCom</div>;
// };

// export default ClassCom;
import { Component } from "react";
class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      num: 7,
    };
  }
  render() {
    const {
      props: { name },
      state: { num },
    } = this;

    return (
      <div className="">
        <h1>{name}</h1>
        <button
          onClick={() => {
            this.setState({
              num: num + 1,
            });
          }}
        >
          icrement
        </button>
        <h1>{num}</h1>
      </div>
    );
  }
}
export default ClassComp;
