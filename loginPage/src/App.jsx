import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [usernameData, setUsernameData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [submitData, setSubmitData] = useState({ username: "", password: "" });
  const [result, setResult] = useState(null); // Changed to null for better state handling

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitData({ username: usernameData, password: passwordData });
  };

  useEffect(() => {
    if (submitData.username === "user" && submitData.password === "password") {
      setResult(true);
    } else if (submitData.username || submitData.password) {
      setResult(false);
    }
    setUsernameData("");
    setPasswordData("");
  }, [submitData]);

  return (
    <>
      <div>
        <h1>Login Page</h1>
        {result === false && <div>Invalid username or password</div>}
        {result === true ? (
          <div>Welcome, user!</div>
        ) : (
          <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                placeholder="username"
                required
                value={usernameData}
                onChange={(e) => setUsernameData(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                placeholder="password"
                required
                value={passwordData}
                onChange={(e) => setPasswordData(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </>
  );
}

export default App;
