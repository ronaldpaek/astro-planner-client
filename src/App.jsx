import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./App.scss";

function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  async function fetchUser() {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
    if (!token) {
      return;
    }
    const res = await fetch(`${API}/users/token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await res.json();
    if (info.success) {
      setUser(info.user);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [token]);

  return (
    <>
      <div>
        <Navbar user={user} setToken={setToken} setUser={setUser} />
        <Outlet context={{ setToken, user }} />
        <h1>hello</h1>
      </div>
    </>
  );
}

export default App;
