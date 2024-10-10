import Header from "../../components/site/Header.tsx";
import {Box, Image, useToast} from "@chakra-ui/react";
import AuthForm from "../../components/auth/Form.tsx";
import React, {useState} from "react";
import {ISignUp} from "../../interfaces/auth.interface.ts";
import axios from "axios";
import {environment} from "../../services/environment.service.ts";
import {useNavigate} from "react-router-dom";
import {showErrorToast, showSuccessToast, showWarningToast} from "../../utils/toast.util.ts";

const LogInPage = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<ISignUp>({
        email: "",
        password: ""
    });

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogIn = () => {
        if (!formData.email || !formData.password) {
            showWarningToast(toast, "Error", "Please fill in all fields.");
            return;
        }
        axios.post(`${environment.backend_api_url}${environment.api.log_in}`, formData)
            .then((res) => {
                console.log(res);
                localStorage.setItem("accessToken", res.data.access);
                localStorage.setItem("refreshToken", res.data.refresh);
                localStorage.setItem("userData", JSON.stringify(res.data.user));
                showSuccessToast(toast, "Success", "You have successfully logged in!");
                navigate("/");
            })
            .catch((err) => {
                if (err.status === 401 && err.response.data.detail === "No active account found with the given credentials") {
                    showErrorToast(toast, "Error", "No account found with the given credentials.");
                    return;
                }
                showErrorToast(toast, "Error", "An error occurred. Please try again later.");
            });
    }

    return (
        <>
            <Header title={"Log into you account!"}/>
            <Box justifyContent="center" alignItems="center" mt={"5vh"}>
                <Image
                    src="public/login/girl_on_a_laptop.svg"
                    alt="Random unsplash image"
                    m={"0 auto"}
                />
                <AuthForm
                    buttonText={"Log In"}
                    bottomText={"Don't have an account?"}
                    linkText={"Sign Up"}
                    goTo={"/signup"}
                    buttonAction={handleLogIn}
                    onInputChange={onInputChange}
                    isLogIn={true}
                    formData={formData}
                />
            </Box>
        </>
    );
};

export default LogInPage;