import { createContext, useContext, useEffect, useState } from "react";

const UserContact = createContext();
function Contact() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    let data = "MEAN";
    setUsername(data);
  }, []);
  return (
    <UserContact.Provider value={username}>
      <GrandParent />
    </UserContact.Provider>
  );
}

export default Contact;
function GrandParent() {
  return <Parent />;
}
function Parent() {
  return <Child />;
}
function Child() {
  const username = useContext(UserContact);
  return <h1>{username}</h1>;
}
