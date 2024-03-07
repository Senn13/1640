import React, { useState } from "react";
import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            // Gửi thông tin đăng nhập đến máy chủ và xử lý phản hồi ở đây
            const response = await fetch("URL_XU_LY_DANG_NHAP", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                // Đăng nhập thành công, điều hướng hoặc hiển thị thông báo
                console.log("Đăng nhập thành công!");
            } else {
                // Xử lý lỗi khi đăng nhập thất bại
                const data = await response.json();
                setErrorMessage(data.message);
            }
        } catch (error) {
            console.error("Lỗi khi xử lý đăng nhập:", error);
        }
    };

    return (
        <div>
            <div class='bold-line'></div>
                <div class='container'>
                    <div class='window'>
                        <div class='overlay'></div>
                        <div class='content'>
                        <div class='welcome'>Hello There!</div>
                        <div class='subtitle'>We're almost done. Before using our services you need to create an account.</div>
                        <div class='input-fields'>
                            <input type='text' placeholder='Username' class='input-line full-width'></input>
                            <input type='email' placeholder='Email' class='input-line full-width'></input>
                            <input type='password' placeholder='Password' class='input-line full-width'></input>

                        </div>
                        <div class='spacing'>or continue with <span class='highlight'>Facebook</span></div>
                        <div><button class='ghost-round full-width'>Create Account</button></div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Login;
