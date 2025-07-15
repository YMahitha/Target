import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "tsiegmud@harvestsports.com" && password === "password123") {
      onLogin();
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <div className="text-center mb-4">
          <div className="text-3xl font-bold text-red-600">TARGET+</div>
        </div>
        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
        <input
          className="w-full p-2 mb-3 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 mb-3 border rounded"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="w-full bg-red-600 text-white p-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
