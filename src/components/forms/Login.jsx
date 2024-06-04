import React, { useState } from "react";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(null);
  const [file, setFile] = useState(null);
  const [values, setValues] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({
      email,
      password,
      remember,
      file,
    });
    navigate("/counter");
  };

  return (
    <div className="w-[700px] mx-auto mt-10">
      <h1 className="text-2xl font-bold text-blue-500 text-center">
        Login to your account
      </h1>

      <form onSubmit={handleSubmit} className="mt-12">
        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <div className="flex gap-x-3 items-center mb-5">
          <label className="text-base text-gray-800">Remember me</label>
          <input
            type="checkbox"
            value={remember}
            required
            onChange={(event) => {
              const checked = event.target.value;
              setRemember(!checked);
            }}
          />
        </div>
        <div>
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </div>

        <button
          type="submit"
          className="w-[130px] h-[44px] bg-sky-400 rounded-lg mt-8 text-white font-medium tet-sm"
        >
          Login
        </button>
      </form>

      {values && (
        <div style={{ marginTop: 50 }}>
          <p>Email: {values?.email}</p>
          <p>Password: {values?.password}</p>
          <p>Remembered Password: {String(values?.remember)}</p>
          <p>Image Preview:</p>
          <img
            src={URL.createObjectURL(values?.file)}
            alt=""
            width={100}
            height={100}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
