import React, { useState } from "react";
import Usestate from "./Usestate";

function FormSubmit() {
  //   const submitBtn = document.getElementById("submitBtn");
  //   submitBtn.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     let name = document.getElementById("name").value;
  //     let email = document.getElementById("email").value;
  //     console.log(name + email);
  //   });
  const [data, setData] = useState({ name: "", email: "" });
  function formSubmit(e) {
    e.preventDefault();
    console.log(data);
  }

  //   function handleEmail(e) {
  //     console.log(e.target.value);
  //     setData((prev) => ({
  //       ...prev,
  //       email: e.target.value,
  //     }));
  //   }
  //   function handleName(e) {
  //     console.log(e.target.value);
  //     setData((prev) => ({
  //       ...prev,
  //       name: e.target.value,
  //     }));
  //   }

  function handleForm(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Jitesh"
          onChange={handleForm}
          //   onChange={handleName}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@gmail.com"
          onChange={handleForm}
          //   onChange={handleEmail}
        />
        <button id="submitBtn" onClick={formSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormSubmit;
