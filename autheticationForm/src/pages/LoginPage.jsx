import React from "react";
import AuthForm from "../components/AuthForm";

const LoginPage = () => {
  const handleLoginSubmit = async (formData) => {
    const { email, password } = formData;

    try {
      const response = await fetch("https://your-api.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      // Store the token or user data, for example in localStorage
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <AuthForm isLogin={true} onSubmit={handleLoginSubmit} />
    </div>
  );
};

export default LoginPage;
