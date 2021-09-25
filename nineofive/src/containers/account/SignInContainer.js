import React, { useEffect, useState } from "react";
import SignInComponent from "../../components/account/SignIn";
import axios from "axios";
import { baseURL } from "../home/HomeContainer";

export default function SignInContainer() {
    // 유저 정보 상태 관리
    const [account, setAccount] = useState({
        email: "",
        password: "",
    });
    // 로그인 성공여부 메시지 관리
    const [msg, setMsg] = useState("");

    const onChangeAccount = (event) => {
        const { name, value } = event.target;
        setAccount({
            ...account,
            [name]: value,
        });
    };

    // 로그인 클릭 이벤트
    const onLogin = () => {
        const data = account;
        axios({
            method: "POST",
            url: `${baseURL}/account/signin`,
            data,
        })
            .then((response) => {
                console.log(response);
                setMsg(response.data.message);
                sessionStorage.setItem("user_email", account.email);
                document.location.href = "/";
            })
            .catch((error) => {
                console.error(error);
                setMsg("로그인 실패");
            });
    };

    return (
        <SignInComponent
            onLogin={onLogin}
            onChangeAccount={onChangeAccount}
            msg={msg}
        />
    );
}
