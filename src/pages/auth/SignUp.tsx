import SignUpFirstStep from "../../components/auth/SignUpFirstStep.tsx";
import SignUpSecondStep from "../../components/auth/SignUpSecondStep.tsx";
import React, {useState} from "react";
import Header from "../../components/site/Header.tsx";
import {ISignUp} from "../../interfaces/auth.interface.ts";
import axios from "axios";
import {environment} from "../../services/environment.service.ts";
import {useNavigate} from "react-router-dom";
import {useToast} from "@chakra-ui/react";
import {showErrorToast, showSuccessToast} from "../../utils/toast.util.ts";

const SignUp = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<ISignUp>({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        favorite_categories_ids: []
    });

    const goToNextStep = () => {
        setStep(2)
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const updateFavoriteCategories = (selectedCategories: number[]) => {
        setFormData({...formData, favorite_categories_ids: selectedCategories});
    };

    const handleSubmit = () => {
        axios.post(`${environment.backend_api_url}${environment.api.sign_up}`, formData)
            .then(() => {
                showSuccessToast(toast, "Success", "Account created successfully!");
                navigate("/login");
            })
            .catch(() => {
                showErrorToast(toast, "Error", "An error occurred while creating your account. Please try again later.");
            });
    }

    return (
        <>
            <Header
                title={
                    step === 1
                        ? "Let’s create you an account!"
                        : "What are you interested in?"
                }
                showBackButton={
                    step === 2
                }
                onClick={() => setStep(1)}
            />
            {step === 1 && (
                <SignUpFirstStep
                    goToNextStep={goToNextStep}
                    formData={formData}
                    onInputChange={handleInputChange}
                />
            )}
            {step === 2 && (
                <SignUpSecondStep
                    onSubmit={handleSubmit}
                    updateFavoriteCategories={updateFavoriteCategories}
                />
            )}
        </>
    )
}

export default SignUp;