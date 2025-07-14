import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <div className="text-center mb-4">
          <div className="text-3xl font-bold text-red-600">TARGET+</div>
        </div>
        <input className="w-full p-2 mb-3 border rounded" placeholder="Email" />
        <input className="w-full p-2 mb-3 border rounded" placeholder="Password" type="password" />
        <button onClick={handleLogin} className="w-full bg-red-600 text-white p-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
