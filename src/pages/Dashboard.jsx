import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const localstorage = localStorage;
  const store = useSelector((store) => store);
  const [
    name = localstorage.name || "LOGIN/REGISTER FIRST TO SEE THE DATA ...",
    setName,
  ] = useState("");
  const [
    email = localstorage.email || "LOGIN/REGISTER FIRST TO SEE THE DATA ...",
    setEmail,
  ] = useState("");
  const [
    password = localstorage.password ||
      "LOGIN/REGISTER FIRST TO SEE THE DATA ...",
    setPassword,
  ] = useState("");
  const [
    imageURL = localstorage.imageUrl ||
      "LOGIN VIA GOOGLE FIRST TO SEE THE imageUrl ...",
    setimageURL,
  ] = useState("");

  useEffect(() => {
    setName(store.userRegister.user.name);
    setEmail(store.userRegister.user.email);
    setPassword(store.userRegister.user.password);
    setimageURL(store.userRegister.user.imageURL);
  }, [name, email, password, imageURL]);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <img
        src={imageURL}
        alt="LOgin Via GOOGLE TO SEE THE IMAGE"
        style={{ height: "30vh", width: "15vw" }}
      />
    </div>
  );
};

export default Dashboard;
