import { useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(userData);
  async function handleSubmit() {
    let data = await fetch(`${import.meta.env.VITE_API_URI}/users`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let res = await data.json();
    alert(res.message);
  }
  return (
    <>
      <div>
        <h1>Sign Up:</h1>
        <div>
          <span>Name:</span>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div>
          <span>Email:</span>
          <input
            type="email"
            placeholder="Enter your Email"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div>
          <span>Password:</span>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default App;
