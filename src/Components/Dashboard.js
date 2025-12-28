import React from "react";
import { useContext } from "react";
import UserContext from "../UserContext";

export default function Dashboard() {
  const user = useContext(UserContext);

  return (
    <div>
      Name:{user.name}, Email:{user.email}
    </div>
  );
}
