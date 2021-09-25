import React, { useEffect, useState } from "react";
import HomeComponent from "../../components/home/HomeComponent";
export const baseURL = "http://localhost:3000";

export default function HomeContainer() {
  const [isLogin, setIsLogin] = useState(false);
  const [msg, setMsg] = useState("환영합니다.");
  const getUserEmail = sessionStorage.getItem("user_email");
  const baseURL = "http://localhost:3000";

  useEffect(() => {
    if (getUserEmail === null) {
    } else {
      setIsLogin(true);
      console.log(isLogin);
      setMsg(getUserEmail + "님 환영합니다.🎉");
    }
  });

  const onLogout = () => {
    sessionStorage.removeItem("user_email");
    document.location.href = "/";
  };

  return <HomeComponent msg={msg} onLogout={onLogout} />;
}
