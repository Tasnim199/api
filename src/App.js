import logo from "./logo.svg";
import "./App.css";
import PostCards from "./components/PostCards";
import UserCards from "./components/UserCards";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      let result = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );
      console.log(result);
    };
  });

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="list">
              {users.map((el) => (
                <UserCards user={el} />
              ))}
            </div>
          }
        />
        <Route path="/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
