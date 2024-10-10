import SignUpFirstStep from "../../components/auth/SignUpFirstStep.tsx";
import SignUpSecondStep from "../../components/auth/SignUpSecondStep.tsx";
import React, {useState} from "react";
import Header from "../../components/site/Header.tsx";
import {ISignUp} from "../../interfaces/auth.interface.ts";
import axios from "axios";
import {environment} from "../../services/environment.service.ts";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
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
            .then((res) => {
                console.log(res.data);
                navigate("/login");
            })
            .catch((err) => {
                console.error(err);
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