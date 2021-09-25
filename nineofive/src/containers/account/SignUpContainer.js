import axios from "axios";
import { useState } from "react";
import SignUpComponent from "../../components/account/SignUp";

import { baseURL } from "../home/HomeContainer";

function SignUpContainer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const onChangeName = (event) => {
        const name = event.target.value;
        setName(name);
    };

    const onChangeEmail = (event) => {
        const email = event.target.value;
        setEmail(email);
    };

    const onChangePassword = (event) => {
        const password = event.target.value;
        setPassword(password);
    };

    const onSignUp = (event) => {
        axios({
            method: "POST",
            url: `${baseURL}/account/signup`,
            data: {
                name: name,
                email: email,
                password: password,
            },
        })
            .then((response) => {
                console.log(response);
                setMsg(response.data.message);
                document.location.href = "/signin";
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <SignUpComponent
            onSignUp={onSignUp}
            onChangeName={onChangeName}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            msg={msg}
        />
    );
}

export default SignUpContainer;
